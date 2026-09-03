// ============================================================
// EO Hub — Firebase Data Layer
// Every function here mirrors what window.storage used to do in the
// Claude-artifact version, but talks to real Firestore + Storage instead.
// Nothing in here has been tested against the live project — that has to
// happen once this is actually deployed, since this sandbox has no
// internet access to verify it directly.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc,
  deleteDoc, query, where, orderBy, serverTimestamp, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCs2Eu_IdCnGWi-60hJR8uvVr4t6J58LhA",
  authDomain: "eo-hub-db080.firebaseapp.com",
  projectId: "eo-hub-db080",
  storageBucket: "eo-hub-db080.firebasestorage.app",
  messagingSenderId: "171498213082",
  appId: "1:171498213082:web:3685ea0c4d2482341a1fe3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// ---------------- Staff Authentication ----------------
// Students never see this — the app stays fully open for browsing and for
// finishing a draft order staff already built. This is specifically for
// gating the actions that shouldn't be open to anyone with the URL:
// creating orders, marking check-ins, archiving, editing condition logs,
// kit media status, and the update log.

export async function signInStaff(email, password){
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function signOutStaff(){
  await signOut(auth);
}

export function onAuthStateChange(callback){
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser(){
  return auth.currentUser;
}

// ---------------- Kits ----------------
// Kits are mostly static reference data. Seeded once via seed-kits.html,
// read here afterward.

export async function getAllKits(){
  const snap = await getDocs(collection(db, 'kits'));
  return snap.docs.map(d => ({ ...d.data(), id: d.id }));
}

export async function getKit(kitId){
  const snap = await getDoc(doc(db, 'kits', String(kitId)));
  return snap.exists() ? { ...snap.data(), id: snap.id } : null;
}

export async function updateKit(kitId, updates){
  await updateDoc(doc(db, 'kits', String(kitId)), updates);
}

// ---------------- Orders ----------------

export async function getOrder(reservationNumber){
  const snap = await getDoc(doc(db, 'orders', reservationNumber));
  return snap.exists() ? snap.data() : null;
}

export async function saveOrder(order){
  // order.reservationNumber is used as the document ID directly, matching
  // how the old tool keyed orders by `order:{reservationNumber}`.
  await setDoc(doc(db, 'orders', order.reservationNumber), {
    ...order,
    lastUpdated: serverTimestamp(),
  });
}

export async function listOrders(searchTerm, includeArchived){
  const snap = await getDocs(collection(db, 'orders'));
  let orders = snap.docs.map(d => d.data());
  orders.sort((a, b) => new Date(b.checkoutTimestamp || 0) - new Date(a.checkoutTimestamp || 0));
  return orders.filter(o => {
    if(o.archived && !includeArchived) return false;
    if(!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (o.reservationNumber || '').toLowerCase().includes(term) ||
           (o.studentName || '').toLowerCase().includes(term);
  });
}

export async function setOrderArchived(reservationNumber, archived){
  await updateDoc(doc(db, 'orders', reservationNumber), { archived });
}

// Every checked-in order that had a late return or any per-item issue
// flagged — this is what actually needed a review draft at check-in,
// found by re-checking the same data the draft itself was built from
// rather than a separate "flagged" field that could drift out of sync.
export async function getFlaggedCheckIns(){
  const snap = await getDocs(collection(db, 'orders'));
  const orders = snap.docs.map(d => d.data()).filter(o => o.status === 'checked_in');
  return orders.filter(o => {
    if(o.lateReturn) return true;
    return (o.kits||[]).some(k => (k.items||[]).some(it => it.issueType));
  });
}

export async function resolveMissingItem(resNum, kitIndex, itemIndex, resolution, cost){
  const order = await getOrder(resNum);
  if(!order) throw new Error('Order not found.');
  const item = order.kits[kitIndex].items[itemIndex];
  if(resolution === 'found'){
    item.issueType = '';
    item.missingResolved = true;
  } else if(resolution === 'lost'){
    item.confirmedLost = true;
    item.replacementCost = cost;
  }
  await saveOrder(order);
}

// ---------------- Condition Log ----------------
// Each entry is its own document (unlike the old tool, which nested them
// inside a per-kit array) — this makes "show every open issue across all
// kits" a real, direct query instead of something the old tool couldn't do.

export async function addConditionLogEntry(entry){
  const ref = doc(collection(db, 'conditionLogs'));
  await setDoc(ref, {
    ...entry,
    id: ref.id,
    date: serverTimestamp(),
    resolved: false,
  });
  return ref.id;
}

export async function getConditionLogForKit(kitId){
  const q = query(collection(db, 'conditionLogs'), where('kitId', '==', String(kitId)));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

export async function getAllOpenConditionLogs(){
  const q = query(collection(db, 'conditionLogs'), where('resolved', '==', false));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

export async function resolveConditionLogEntry(entryId, resolvedBy=''){
  await updateDoc(doc(db, 'conditionLogs', entryId), {
    resolved: true,
    resolvedBy: resolvedBy || '',
    resolvedAt: serverTimestamp(),
  });
}

// ---------------- Update Log ----------------

export async function addUpdateLogItem(text){
  const ref = doc(collection(db, 'updateLog'));
  await setDoc(ref, { id: ref.id, text, done: false, added: serverTimestamp() });
  return ref.id;
}

export async function getUpdateLogItems(){
  const snap = await getDocs(collection(db, 'updateLog'));
  return snap.docs.map(d => d.data());
}

export async function toggleUpdateLogItem(itemId, done){
  const updates = { done };
  if(done) updates.completedDate = serverTimestamp();
  await updateDoc(doc(db, 'updateLog', itemId), updates);
}

export async function deleteUpdateLogItem(itemId){
  await deleteDoc(doc(db, 'updateLog', itemId));
}

export async function setLastReviewedDate(){
  await setDoc(doc(db, 'meta', 'updateLogReview'), { lastReviewed: serverTimestamp() });
}

export async function getLastReviewedDate(){
  const snap = await getDoc(doc(db, 'meta', 'updateLogReview'));
  return snap.exists() ? snap.data().lastReviewed : null;
}

// ---------------- Launch Checklist (temporary — delete this doc when the rollout tab is removed) ----------------
export async function getLaunchChecklistState(){
  const snap = await getDoc(doc(db, 'meta', 'launchChecklist'));
  return snap.exists() ? snap.data() : {};
}

export async function setLaunchChecklistItem(itemKey, checked){
  await setDoc(doc(db, 'meta', 'launchChecklist'), { [itemKey]: checked }, { merge: true });
}

// ---------------- SOP Videos (any SOP entry can have a trainer's screen-recording walkthrough) ----------------
// SOPs themselves are static content (sops_data.js), not Firestore documents,
// so video links attached to them live separately here, keyed by SOP id.
export async function getTrainingVideos(){
  const snap = await getDocs(collection(db, 'trainingVideos'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a,b)=>(a.added?.seconds||0)-(b.added?.seconds||0));
}
export async function addTrainingVideo(title, url, description){
  const ref = doc(collection(db, 'trainingVideos'));
  await setDoc(ref, { id: ref.id, title, url, description: description||'', added: serverTimestamp() });
  return ref.id;
}
export async function removeTrainingVideo(id){
  await deleteDoc(doc(db, 'trainingVideos', id));
}

export async function updateKitData(kitId, partialData){
  // Firestore kit documents are flat — fields are at root level, no 'data.' prefix
  await updateDoc(doc(db, 'kits', String(kitId)), partialData);
}

export async function setKitContents(kitId, contents){
  // Simple root-level field update — contents is at root, not nested under data
  await updateDoc(doc(db, 'kits', String(kitId)), { contents });
}

export async function applyIvyBatch4Updates(onProgress){
  const batch = [
    // ── Grade tier assignments from Ivy (Sept 2 2026 review) ──────────────
    {id:'67', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'66', gradeTier:'freshman',  gradeText:'Freshman / No gate — any level'},
    {id:'69', gradeTier:'sophomore', gradeText:'Sophomore — priority given to Senior, Endowed, and Thesis projects', gradeApproval:true},
    {id:'68', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'22', gradeTier:'freshman',  gradeText:'Freshman'},
    {id:'15', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'23', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'24', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'16', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'17', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'18', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'19', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'20', gradeTier:'junior', gradeText:'Junior',
      contents:[
        'Extension Cord (x2)',
        'Twin Socket Lightbulb Adapter',
        'Socket Splitter Lightbulb Adapter',
        'Plug-In Lightbulb Receptacle (x2)',
        'Lightbulb (x7)',
        'Hyper Reflector',
        'White Spherical China Ball (x4)',
        'Blue Spherical China Ball (x2)',
        'Pink Spherical China Ball',
        'White Cube China Ball',
        'Wireframe (x6)',
        'PortaBrace Bag (x3)',
      ]},
    {id:'25', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'9',  gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'7',  gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'8',  gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'14', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'12', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'13', gradeTier:'freshman',  gradeText:'Freshman / No gate'},
    {id:'74', gradeTier:'junior',    gradeText:'Junior'},
    {id:'73', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'72', gradeTier:'junior',    gradeText:'Junior'},
    {id:'75', gradeTier:'sophomore', gradeText:'Sophomore — priority for Senior, Thesis, and Endowed projects', gradeApproval:true},
    {id:'76', gradeTier:'sophomore', gradeText:'Sophomore — priority for Senior, Thesis, and Endowed projects', gradeApproval:true},
    {id:'77', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'61', gradeTier:null, gradeLinked:true, gradeText:'Grade follows which mic is issued — check mic tier before checkout'},
    {id:'86', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'54', gradeTier:'junior',    gradeText:'Junior — training required, confirm trainee is cleared before checkout', gradeApproval:true},
    {id:'51', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'55', gradeTier:'junior',    gradeText:'Junior — training required, confirm trainee is cleared before checkout', gradeApproval:true},
    {id:'58', gradeTier:'sophomore', gradeText:'Sophomore'},
    {id:'60', gradeTier:'freshman',  gradeText:'Freshman'},
    {id:'57', gradeTier:'junior',    gradeText:'Junior'},
    {id:'56', gradeTier:'junior',    gradeText:'Junior — training required, confirm trainee is cleared before checkout', gradeApproval:true, name:'VariZoom QuickJib'},
    // ── Retirements ─────────────────────────────────────────────────────────
    {id:'28', kittype:'retired', gradeText:'Retired — no longer in active inventory'},
    {id:'30', kittype:'retired', gradeText:'Retired — no longer in active inventory'},
    {id:'48', kittype:'retired', gradeText:'Retired — no longer in active inventory'},
    {id:'21', kittype:'retired', gradeText:'Retired — not accounted for, may reassess if found'},
    // ── Mark unavailable ─────────────────────────────────────────────────────
    {id:'85', kittype:'unavailable', gradeText:'Unavailable — functionality unconfirmed'},
    // ── Battery confirmation (clear pending review flag) ──────────────────
    {id:'59', review:'Confirmed: batteries are Zhiyun GMB-B117 18650 (replacement batteries, not original BTW INR). Updated by Ivy Sept 2 2026.'},
  ];

  for(let i=0; i<batch.length; i++){
    const {id, ...fields} = batch[i];
    await updateKitData(id, fields);
    if(onProgress) onProgress(i+1, batch.length);
  }
  return batch.length;
}

export async function getSopVideoLinks(){
  const snap = await getDoc(doc(db, 'meta', 'sopVideos'));
  return snap.exists() ? snap.data() : {};
}

export async function setSopVideoLink(sopId, videoUrl){
  await setDoc(doc(db, 'meta', 'sopVideos'), { [String(sopId)]: videoUrl }, { merge: true });
}

export async function removeSopVideoLink(sopId){
  await setDoc(doc(db, 'meta', 'sopVideos'), { [String(sopId)]: null }, { merge: true });
}

// ---------------- Cheqroom Training Videos (separate from SOP videos — staff-only tab) ----------------
export async function getCheqroomVideoLinks(){
  const snap = await getDoc(doc(db, 'meta', 'cheqroomVideos'));
  return snap.exists() ? snap.data() : {};
}

export async function setCheqroomVideoLink(sectionId, videoUrl){
  await setDoc(doc(db, 'meta', 'cheqroomVideos'), { [String(sectionId)]: videoUrl }, { merge: true });
}

export async function removeCheqroomVideoLink(sectionId){
  await setDoc(doc(db, 'meta', 'cheqroomVideos'), { [String(sectionId)]: null }, { merge: true });
}

// ---------------- Trainees ----------------

export async function addTrainee(name){
  const ref = doc(collection(db, 'trainees'));
  await setDoc(ref, { id: ref.id, name, milestones: {}, kits: {} });
  return ref.id;
}

export async function getAllTrainees(){
  const snap = await getDocs(collection(db, 'trainees'));
  return snap.docs.map(d => d.data());
}

export async function getTrainee(traineeId){
  const snap = await getDoc(doc(db, 'trainees', traineeId));
  return snap.exists() ? snap.data() : null;
}

export async function setTraineeMilestone(traineeId, milestoneKey, done){
  await updateDoc(doc(db, 'trainees', traineeId), {
    [`milestones.${milestoneKey}`]: done,
  });
}

export async function setTraineeKitMastery(traineeId, kitId, done){
  await updateDoc(doc(db, 'trainees', traineeId), {
    [`kits.${kitId}`]: done,
  });
}

// Merges progress across any trainees sharing the exact same name — takes
// the union of everything marked done (so nothing gets lost even if
// duplicates were checked off inconsistently), keeps one record per name,
// and deletes the rest. Returns a summary of what changed.
export async function mergeDuplicateTrainees(){
  const all = await getAllTrainees();
  const byName = {};
  all.forEach(t => {
    const key = (t.name || '').trim().toLowerCase();
    if(!byName[key]) byName[key] = [];
    byName[key].push(t);
  });

  const summary = [];
  for(const key of Object.keys(byName)){
    const group = byName[key];
    if(group.length <= 1) continue;

    const merged = {milestones: {}, kits: {}};
    group.forEach(t => {
      Object.entries(t.milestones || {}).forEach(([k,v]) => { if(v) merged.milestones[k] = true; });
      Object.entries(t.kits || {}).forEach(([k,v]) => { if(v) merged.kits[k] = true; });
    });

    const keeper = group[0];
    await updateDoc(doc(db, 'trainees', keeper.id), merged);

    for(let i = 1; i < group.length; i++){
      await deleteDoc(doc(db, 'trainees', group[i].id));
    }
    summary.push({ name: keeper.name, duplicatesRemoved: group.length - 1 });
  }
  return summary;
}

// ---------------- Kit Photos / Videos (Firebase Storage) ----------------
// Unlike the old tool (which crammed base64 photos into window.storage
// and hit a 5MB ceiling), Storage is built for files and doesn't have
// that constraint.

// ---------------- Kit Photos (multiple per kit, each with its own caption and hotspots) ----------------
// Firestore caps a whole document at 1MiB, and now that a kit can hold
// several photos, that ceiling has to be shared across all of them —
// which is why photos get compressed harder here than a single-photo
// kit would need. A hard cap of 6 keeps the worst case comfortably safe.
const MAX_PHOTOS_PER_KIT = 6;
const MAX_PHOTO_BYTES = 190000;

function migratePhotosField(kit){
  // Older kits may still have the single-photo fields from before this
  // was multi-photo. Treat that as photo #1 rather than losing it.
  if(kit.photos) return kit.photos;
  if(kit.photoUrl) return [{ url: kit.photoUrl, caption: '', hotspots: kit.hotspots || [] }];
  return [];
}

export async function getKitPhotos(kitId){
  const kit = await getKit(kitId);
  return kit ? migratePhotosField(kit) : [];
}

export async function addKitPhoto(kitId, dataUrl, caption){
  if(dataUrl.length > MAX_PHOTO_BYTES){
    throw new Error('This photo is too large to store — try a smaller or simpler image.');
  }
  const kit = await getKit(kitId);
  const photos = migratePhotosField(kit);
  if(photos.length >= MAX_PHOTOS_PER_KIT){
    throw new Error(`This kit already has the maximum of ${MAX_PHOTOS_PER_KIT} photos — remove one before adding another.`);
  }
  photos.push({ url: dataUrl, caption: caption || '', hotspots: [] });
  await updateKit(kitId, { photos, photoUrl: null, hotspots: null });
  return photos.length - 1;
}

export async function removeKitPhotoAt(kitId, index){
  const kit = await getKit(kitId);
  const photos = migratePhotosField(kit);
  photos.splice(index, 1);
  await updateKit(kitId, { photos, photoUrl: null, hotspots: null });
}

export async function setPhotoCaption(kitId, index, caption){
  const kit = await getKit(kitId);
  const photos = migratePhotosField(kit);
  if(!photos[index]) return;
  photos[index].caption = caption;
  await updateKit(kitId, { photos });
}

export async function setPhotoHotspots(kitId, index, hotspots){
  const kit = await getKit(kitId);
  const photos = migratePhotosField(kit);
  if(!photos[index]) return;
  photos[index].hotspots = hotspots;
  await updateKit(kitId, { photos });
}

export async function saveKitVideoLink(kitId, videoUrl){
  // Video stays as a link (e.g. YouTube Unlisted), same as before —
  // videos aren't uploaded as files at all, just referenced.
  await updateKit(kitId, { videoUrl });
}

export async function removeKitVideo(kitId){
  await updateKit(kitId, { videoUrl: null });
}

// ---------------- Live updates (real-time sync across devices) ----------------
// This is the piece the old window.storage setup never actually had —
// a way for one device's change to appear on another without a manual
// reload. Call this once per collection you want to watch; it calls
// your callback immediately with current data, then again every time
// anything changes, on any device.

// ---------------- Kit Media Status (photo/video documentation tracking) ----------------
export async function getMediaIndex(){
  const snap = await getDocs(collection(db, 'kitMedia'));
  const index = {};
  snap.docs.forEach(d => { index[d.id] = d.data(); });
  return index;
}

export async function setKitMediaStatus(kitId, field, value){
  await setDoc(doc(db, 'kitMedia', String(kitId)), {[field]: value}, {merge: true});
}

// ---------------- Full Backup / Restore ----------------
// Real automated Firestore backups need the paid Blaze plan plus genuine
// GCP setup (Cloud Functions, IAM, storage buckets) — not something to
// take on casually. This is the practical, free alternative: a manual
// export/import of every collection, staff-only, matching exactly what
// the old tool's "Download Full Backup" feature did.

const BACKUP_COLLECTIONS = ['kits', 'orders', 'conditionLogs', 'updateLog', 'trainees', 'kitMedia', 'meta'];

export async function exportFullBackup(){
  const backup = { exportedAt: new Date().toISOString(), collections: {} };
  for(const name of BACKUP_COLLECTIONS){
    const snap = await getDocs(collection(db, name));
    backup.collections[name] = snap.docs.map(d => ({ id: d.id, data: d.data() }));
  }
  return backup;
}

export async function restoreFromBackup(backup){
  let restoredCount = 0;
  for(const name of BACKUP_COLLECTIONS){
    const docs = (backup.collections && backup.collections[name]) || [];
    for(const d of docs){
      await setDoc(doc(db, name, d.id), d.data);
      restoredCount++;
    }
  }
  return restoredCount;
}

export function watchCollection(collectionName, callback){
  return onSnapshot(collection(db, collectionName), (snap) => {
    callback(snap.docs.map(d => d.data()));
  });
}
