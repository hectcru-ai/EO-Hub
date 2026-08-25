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
  getStorage, ref, uploadString, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
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
export const storage = getStorage(app);
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

export async function resolveConditionLogEntry(entryId){
  await updateDoc(doc(db, 'conditionLogs', entryId), { resolved: true });
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

// ---------------- Kit Photos / Videos (Firebase Storage) ----------------
// Unlike the old tool (which crammed base64 photos into window.storage
// and hit a 5MB ceiling), Storage is built for files and doesn't have
// that constraint.

export async function uploadKitPhoto(kitId, dataUrl){
  // dataUrl is expected in the form "data:image/jpeg;base64,....",
  // the same format a <input type="file"> + FileReader produces.
  const photoRef = ref(storage, `kit-photos/${kitId}.jpg`);
  await uploadString(photoRef, dataUrl, 'data_url');
  const url = await getDownloadURL(photoRef);
  await updateKit(kitId, { photoUrl: url });
  return url;
}

export async function saveKitVideoLink(kitId, videoUrl){
  // Video stays as a link (e.g. Canva Studio), same as the old tool —
  // videos aren't uploaded as files at all, just referenced.
  await updateKit(kitId, { videoUrl });
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

export function watchCollection(collectionName, callback){
  return onSnapshot(collection(db, collectionName), (snap) => {
    callback(snap.docs.map(d => d.data()));
  });
}
