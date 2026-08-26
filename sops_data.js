export const SOP_SECTIONS = [
{id:0, title:"The EO's Devices & How They Connect", topic:"maintenance", updated:"Aug 2026", body:`
  <p><strong>Everything runs off one single, permanent web address</strong> — not a link that can go stale or point to the wrong version. Bookmark this address on every device (the 3 staff desktops and every student-facing iPad) and that's it — nothing further to manage.</p>
  <p><strong>No login is required at all.</strong> This is a real, independent website, not something tied to anyone's personal account. Any device with the bookmark can use it, the moment it's opened.</p>
  <div class="callout">📱 <strong>Device roles, unchanged from before:</strong> the 3 EO desktops are staff-only. The student-facing devices are iPads — every one of them should still be fully EO-owned hardware with nothing personal on it, same reasoning as always (no individual's Apple ID, no personal files), even though the account-login concern that originally drove this is now gone.</div>
`},
{id:1, title:"Updating the Hub", topic:"maintenance", updated:"Aug 2026", body:`
  <p>This tool is now a real website with real code, not something living inside a Claude conversation. That changes how updates actually happen, in a good way — more standard, more reliable.</p>
  <ol>
    <li><strong>The code lives in a GitHub repository.</strong> Any change — a new feature, a bug fix, a content update — means editing the actual files there (either directly, or by asking Claude to produce updated files and uploading them in).</li>
    <li><strong>Commit the change.</strong> That's GitHub's word for "save this change for real."</li>
    <li><strong>Netlify picks it up automatically</strong> and rebuilds the live site within a minute or two — no separate "get a new link" step, ever. The address never changes, only what's shown at it does.</li>
  </ol>
  <div class="callout">✅ This is meaningfully simpler than the old system. There's no "wrong version" risk the way there used to be — one address, one current version, always.</div>
`},
{id:2, title:"Reservation Number Changes at Checkout (Confirmed)", topic:"maintenance", updated:"Aug 2026", body:`
  <p><strong>Confirmed: Cheqroom assigns a new number when a Reservation is converted into a Check-out.</strong> This isn't a glitch — it's how Cheqroom is built. The original reservation number staff used while building the order will <strong>not</strong> match the number Cheqroom shows once "Proceed to Checkout" happens.</p>
  <ol>
    <li>Keep using the original reservation number in this tool throughout — building, student sign-off, and check-in. That number never changes on our end.</li>
    <li>Once the Cheqroom checkout number is known, add it to that order's <strong>"Cheqroom Checkout #"</strong> field in the tool (Checkout/Check-In tab → open the order) so both numbers are on record together.</li>
    <li>If you ever need to trace an old reservation number back to what it became: in Cheqroom, go to <strong>Reservations → Filters → Status</strong>, and check <strong>Archived</strong> — not "Closed," which will show no results for a fully completed order.</li>
  </ol>
`},
{id:3, title:"Where Everything Lives", topic:"maintenance", updated:"Aug 2026", body:`
  <p>Besides this tool itself, a few companion documents exist from building all this out. <strong>I can tell you what they are — where they currently live is worth pinning down as a team, since that part depends on where you've been saving things.</strong></p>
  <ul>
    <li><strong>Kit Paperwork Review List</strong> — open questions for Ivy about specific kits/forms.</li>
    <li><strong>Kit Photo &amp; Video Shot Guide</strong> — the shot list for photographing/filming each kit.</li>
    <li><strong>Kit Photography Priority workbook</strong> — which kits to shoot first, based on real usage.</li>
  </ul>
  <div class="callout">⚠ Recommended: pick one OneDrive/Google Drive folder (e.g. <code>Equipment Office → Digital Tool Project</code>) as the single home for all of these. Once that's decided, it's worth writing the exact path down here so it's not tribal knowledge.</div>
`},
{id:5, title:"Weekly Backup", topic:"maintenance", updated:"Aug 2026", body:`
  <p><strong>The database this tool runs on (Firestore) doesn't automatically back itself up for free.</strong> Real automated backups exist, but they need a paid Google Cloud plan and real technical setup (Cloud Functions, permissions, storage buckets) — not something to take on casually, and not something built into this tool.</p>
  <p>The practical alternative, built directly into this page: <strong>manually download a full backup regularly — weekly is a reasonable habit.</strong> It saves everything — every kit, order, condition log entry, update log item, trainee record, and photo/video status — into one file you keep somewhere safe (a shared drive folder is a good home for it).</p>
  <div class="callout">⚠ Restoring from a backup <strong>overwrites</strong> whatever's currently in the live database with whatever's in that file. Only do this if something's actually been lost — it's not a routine action.</div>
  <p>Both buttons are right below, in this same tab.</p>
`},
{id:6, title:"Uploading a Kit Setup/Testing Video", topic:"maintenance", updated:"Aug 2026", body:`
  <p><strong>Recording on the iPad camera is exactly right</strong> — that's the correct way to capture the footage. The extra step below isn't about how you record; it's about what happens after.</p>
  <p>This tool only stores a <strong>link</strong> to a video, not the video file itself — video files are too large to store directly the way kit photos are. So the actual workflow is:</p>
  <ol>
    <li><strong>Record the setup/testing walkthrough on the iPad camera</strong>, same as always.</li>
    <li><strong>Upload that clip to YouTube, and set it to Unlisted</strong> — not Private. Unlisted means anyone with the link can watch it, but it won't show up in search or on the channel page. Private would block it from playing in the tool at all.</li>
    <li><strong>Open the video on YouTube, click Share, then Embed</strong> — not the regular "Share" link. The Embed option gives you a different link, specifically built to play inside another page.</li>
    <li><strong>Copy that embed link and paste it into the kit's Video tab</strong> in Kit ID &amp; Testing → Manage Photo/Video.</li>
  </ol>
  <div class="callout">✅ Vimeo works the same way as a backup option, if YouTube ever gives you trouble. Canva and Adobe Express were tried and specifically ruled out for this — Canva's own video upload is capped at 2–3 per month on the free plan, and Adobe Express has a known issue where published video specifically won't play inside an embedded frame the way this tool needs, even though it embeds other content fine.</div>
  <p>Once pasted, always double check it actually plays right there in the tool before moving on — that's the real test, not just whether the link looks right.</p>
`},
{id:10, title:"The Full Order Lifecycle: Building → Checkout → Check-In → Approvals", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <p>This is the same real workflow new hires get trained on, start to finish. Each stage has its own detailed click-by-click steps elsewhere on this page under <strong>Staff Operations</strong> (search the section name in quotes below) — this section is the big picture tying them together, not a replacement for those.</p>
  <ol>
    <li><strong>Building the order</strong> ("Building an Order (Staff)") — pull items in priority order: Professor/Special Project orders first, then the soonest student order. Generate and print the checklist from Cheqroom, pull everything onto a cart, and stage it in the Check-Out Area. If your shift ends before it's done, leave a note for the next shift — don't leave it half-built with no explanation.</li>
    <li><strong>Checking Professor Approval emails</strong> ("Checking EO Email &amp; Attaching Approvals") — this often has to happen before an order can move forward. Check the Equipment Office inbox's Professor Approvals folder, print the approval as a PDF, attach it to the matching Cheqroom order, and flip the status from Pending Professor Approval to Approved. Also check for a COI/Production Permit while you're in there, and attach those too. If a request is denied, change the status accordingly and let the student know to follow up with their professor — that's on them to resolve, not EO staff.</li>
    <li><strong>Checkout</strong> ("Order Checkout (Staff Process)") — the student verifies the paper/digital checklist, staff adds any last essentials in Cheqroom (never extras), and the Checkout Agreement gets printed and wet-signed.</li>
    <li><strong>Check-in</strong> ("Order Check-In (Staff Process)") — scan everything back in, verify function item by item, and flag anything missing or damaged — that becomes a follow-up email, not an on-the-spot argument with the student.</li>
  </ol>
  <div class="callout">If any of these four detailed steps looks different from what you were actually trained on, that's worth flagging to the Manager — the detailed sections are meant to be the single source of truth, so a real mismatch needs fixing there, not just remembered as "how we actually do it."</div>
`},
{id:11, title:"Making, Editing &amp; Canceling a Reservation", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <h4>Making a Reservation</h4>
  <p>Go to <strong>login.cheqroom.com</strong> and log in with SSO (student email ending in mail.regent.edu). No Cheqroom account yet? Visit the Equipment Office in person to be added.</p>
  <p>Click the blue <strong>+</strong> icon → Reservation. Name it after your project, set Location to Regent University Equipment Office, and pick your From/To dates. <strong>Reservations max out at 4 days.</strong> Editing the pickup time shifts the return time by the same amount.</p>
  <p>Fill in Project Name, Approving Professor (or Hector Cruz + the professor's email for non-class projects), phone number, and Course (or N/A). Add items/kits via <strong>Add Items or Kits</strong>, then click <strong>Reserve</strong> — confirmation and "Forms Needed" emails go to you and your professor.</p>
  <h4>Editing a Reservation</h4>
  <p>Click Edit on your reservation. <strong>This un-reserves your gear</strong> — someone else could grab an item while you're editing. Your professor will need to re-approve after any edit.</p>
  <div class="callout">⚠ Edits made less than 72 hours before checkout will delay your checkout time by however many hours into that window you edited (or until the Office opens, if after hours).</div>
  <h4>Canceling a Reservation</h4>
  <p>Open your reservation → Actions dropdown → Delete.</p>
`},
{id:12, title:"Paperwork &amp; Permits", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <h4>Attaching Paperwork</h4>
  <p>Your "Forms Needed" email will ask for a <strong>Production Permit Form</strong> and/or <strong>COI Request Form</strong>. Email these to Admin Services (adminservices@regent.edu) at least <strong>2 weeks</strong> before checkout. All signed forms are due <strong>before</strong> your checkout time — no forms, no gear. Attach them yourself via the Attachments tab to avoid a cancellation caused by a missed email.</p>
  <div class="callout">A COI <em>Request</em> Form is not a completed COI — the City of Virginia Beach issues the real one, which takes 2–3 business days. Don't attach the Request Form itself to your reservation, or you won't be able to check out.</div>
  <h4>Which Locations Need What</h4>
  <p><strong>Production Permit</strong> — on-campus buildings, anything outside Regent Commons/Village, any exterior area (grassy areas, lots, etc.)</p>
  <p><strong>COI</strong> — inside Regent Commons/Village, the Founder's Inn, or any off-campus location (restaurants, retail, their parking lots)</p>
  <p>Required for anything beyond a cell phone camera (photography-only DSLR/mirrorless use is exempt). If shooting multiple locations, <strong>each one</strong> needs its own permit/COI. Some professors also require a City Production Permit or Location Release — check with them directly.</p>
`},
{id:13, title:"Editing Orders at Checkout", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <p>Only EO staff can add/remove items at checkout, and only <strong>essential items</strong> — batteries, cables, media cards — things you genuinely need to get the shot. This is <strong>not</strong> the place to add extras you forgot (flag kits, dollies, 4x4 kits, etc.).</p>
  <p>Staff may occasionally need to pull an item from your order (repair, a senior/grad project taking priority, a Cheqroom glitch) — they'll work with you on a substitute.</p>
`},
{id:14, title:"Checking Out &amp; Returning Equipment", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <h4>At Checkout</h4>
  <p>Bring crew to help check large orders. Verify item numbers/quantities match your Cheqroom order, then do a full technical check: power on/off, record, no scratches or stripped screws, clean lens glass, smooth focus/zoom rings.</p>
  <div class="callout">⚠ <strong>Note ALL existing damage before signing</strong> the Equipment Checkout Agreement. Once signed, you're liable for anything not noted — staff can't reliably trace who caused old damage.</div>
  <p>Sign your forms, bring them to the desk, and double-check the printed Equipment Checkout Agreement against what you're taking (item numbers, case, checkout form, and liability form should all match — see Terms &amp; Contacts for how numbering works).</p>
  <h4>At Check-In / Return</h4>
  <p>Have gear repacked in its original cases. Be unloading your car by your return time at minimum, or you're late. You don't have to stay while staff verifies your order — they'll flag you before you go if anything's missing. Cheqroom "late" notifications may keep firing even after you've dropped off gear; ignore them as long as you're present and returning — they stop once staff checks your order in.</p>
`},
{id:15, title:"Tripod Packing Procedures", topic:"studentproc", staff:false, updated:"Staff Manual", body:`
  <ul>
    <li>Tension set to zero on all knobs</li>
    <li>Pan/tilt locks loose</li>
    <li>Pan handle loose</li>
    <li>Ballhead locked (level-ish)</li>
    <li>Legs locked</li>
    <li>Spreader locked</li>
  </ul>
  <div class="callout">Never over-tighten knobs — they'll stop tightening. Hand-tight only, just enough that nothing slips.</div>
`},
{id:16, title:"Terms, Codes &amp; Contacts", topic:"reference", staff:false, updated:"Staff Manual", body:`
  <h4>Item Code Matching</h4>
  <p>Everything on a kit should scan to the same kit number. Example: "C100 Kit 001" → the bag tag, camera, and monitor should all reference Kit 001, even though each has its own unique code underneath. If anything doesn't match or scan correctly, flag it to staff immediately — don't assume it's fine.</p>
  <h4>Key Terms</h4>
  <ul>
    <li><strong>Checkout</strong> — picking up equipment</li>
    <li><strong>Check-in</strong> — returning equipment</li>
    <li><strong>G-mount / Gold Mount</strong> — battery mount with three gold points</li>
    <li><strong>V-mount</strong> — "V"-shaped mount, no gold points</li>
  </ul>
  <h4>Contacts</h4>
  <p>Equipment Office: (757) 352-4240 · equipment@regent.edu<br>
  EO Manager, Hector Cruz: hectcru@regent.edu<br>
  EO Assistant Manager, Ivy Brewer: ivybrew@regent.edu<br>
  Admin Services: adminservices@regent.edu<br>
  Film Dept. Chair, Prof. Alex Buffalo: abuffalo@regent.edu</p>
`},
{id:17, title:"Daily Procedures &amp; Spot Checks", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <h4>Start of Shift</h4>
  <ol>
    <li>Personal items go below the counter.</li>
    <li>Battery Station: move fully-charged batteries into their bin; place "to-be-charged" batteries on chargers. <strong>V-Mount and Gold Mount batteries must be checked daily so they never drop below 90%</strong> while in EO custody. Repeat as needed through the shift.</li>
    <li>Check the EO email: print approval emails as PDF and attach to the matching order; download and attach any permits.</li>
    <li>In Cheqroom: handle Professor class orders first (build no later than 12 hrs before class — no approvals/permits needed, but accuracy matters since it directly affects the class). Then work student orders in pickup order. Print checkout paperwork only once an order is fully built. Check in returns as they arrive.</li>
  </ol>
  <div class="callout">If you start an order but can't finish before your shift ends, leave a checklist showing exactly what's been pulled so the next person can finish it.</div>
  <h4>Daily Spot-Check Schedule</h4>
  <ul>
    <li><strong>Monday</strong> — Cameras</li>
    <li><strong>Tuesday</strong> — Lenses</li>
    <li><strong>Wednesday</strong> — Dollies &amp; Batteries</li>
    <li><strong>Thursday</strong> — Cables</li>
    <li><strong>Friday</strong> — Sound</li>
  </ul>
  <p>Handle any first-thing-in-the-morning checkout/return before other tasks. Early checkouts/returns are only done if you're actually available — don't worry about reminding students of their pickup/return times.</p>
`},
{id:18, title:"Cheqroom Log-In", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <ol>
    <li>Go to login.cheqroom.com.</li>
    <li>Click Login (top right).</li>
    <li>Enter your <strong>@regent.edu</strong> work email (not @mail.regent.edu) and click <strong>Log in with SSO</strong>.</li>
  </ol>
`},
{id:19, title:"Checking EO Email &amp; Attaching Approvals", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <ol>
    <li>Open the Equipment Office inbox (outlook.office.com/mail/equipment@regent.edu) → Professor Approvals folder.</li>
    <li>Print the approval email as a PDF.</li>
    <li>Open Cheqroom (login.cheqroom.com) and find the matching order.</li>
    <li>Open the reservation → Attachments tab → drag the approval PDF in.</li>
    <li>Change the order's status from Pending Professor Approval → <strong>Approved</strong>.</li>
    <li>Go back to the EO email, check for a COI and/or Production Permit, and download any permits.</li>
    <li>Return to Cheqroom and attach that paperwork to the corresponding order too.</li>
  </ol>
  <div class="callout">If a request is denied: change the status accordingly and email the student to let them know they need to follow up with their professor.</div>
`},
{id:20, title:"Building an Order (Staff)", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <ol>
    <li>In Cheqroom, prioritize <strong>Professor orders and Special Projects</strong> first, then the <strong>soonest student order</strong> (anything due within the next 2 days).</li>
    <li>Open the order → Actions (top right) → <strong>Generate PDF</strong> → select Reserve Item List → Generate.</li>
    <li>Open Attachments → open the reservation-item-list → Print.</li>
    <li>Review the printed list before pulling anything: check for missing essentials (C-Fast cards, batteries), and note anything missing at the bottom so whoever checks the student out knows to add it.</li>
    <li>Pull all listed items. Small orders → gray carts; larger orders → the 3-shelf equipment cart.</li>
    <li>Note any unavailable items (most often: something still checked out that's due back later).</li>
    <li>Repeat for all Professor/Special Project orders, then move to student orders the same way.</li>
    <li>For student orders, also pull the required paperwork from: <code>M:\\Schools\\Schcom\\Equipment Office\\Separated Forms\\Equipment Checkout Forms</code>, and place it with the checklist on the cart.</li>
    <li>Stage the finished cart in the Check-Out Area with its checklist and paperwork.</li>
  </ol>
  <div class="callout">Only build 1–2 days out. Never build an order 3+ days ahead. <strong>If you can't finish building an order during your shift, leave a note for the next shift</strong> — don't leave it half-done with no explanation.</div>
`},
{id:21, title:"Order Checkout (Staff Process)", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <ol>
    <li>Locate the student's built order on its cart.</li>
    <li>Have the student verify the checklist — nothing missing, add anything flagged at the bottom.</li>
    <li>In Cheqroom, open the student's order → Proceed to Checkout. Add any essential items needed (batteries, C-Fast cards) — <strong>not</strong> extra cameras/lights/unapproved gear.</li>
    <li>Pull anything that couldn't be pulled earlier.</li>
    <li>Once the student's completed and signed every checklist/item form (any unchecked item must be verified missing and initialed as such), click <strong>Check Out</strong> in Cheqroom.</li>
    <li>Actions → Generate PDF → Generate → Attachments → open <code>eo-check-out-agreement-wsignature</code> → Print.</li>
    <li>Review the agreement with the student and have them sign the final page.</li>
    <li>Staple all paperwork together and place it in the active order bin below the counter.</li>
  </ol>
  <div class="callout">Priority goes to senior &amp; thesis projects with chair/professor approval.</div>
`},
{id:22, title:"Order Check-In (Staff Process)", topic:"staffproc", staff:true, updated:"Staff Manual", body:`
  <ol>
    <li>Provide a cart for the student's return. Let them know you'll check gear in and go over each item individually — any issues found get emailed after.</li>
    <li>In Cheqroom, scan every barcode. Anything still showing "checked out" afterward must be manually counted and verified present before manual check-in.</li>
    <li>Note any missing items — they don't get checked in.</li>
    <li>Pull the student's paperwork from the active bin and manually verify function and completeness — <strong>cameras are one line item in Cheqroom but multiple physical parts</strong>; confirm everything that went out came back, and that every electronic item powers on, records, etc.</li>
    <li>Repeat for every item with its own checklist.</li>
    <li>In Cheqroom, check whether each issue was already noted at checkout. If not, add it to the item's description (with date) or as a comment. If it <em>was</em> pre-existing, drop it from your issues list.</li>
    <li>If anything's missing or damaged, email the student directly, <strong>CC the EO Manager and CTV Chair</strong>, with the full list of issues.</li>
  </ol>
`}
];
