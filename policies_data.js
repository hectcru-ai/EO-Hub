export const POLICY_TOPICS = {
  orientation:"Getting Started", reservations:"Reservations", paperwork:"Paperwork & Permits", training:"Training",
  checkout:"Checkout & Check-In", fees:"Fees, Damage & Loss", rooms:"Room Reservations",
  conduct:"In-Office Conduct", faq:"FAQ", reference:"Terms & Contacts", staffops:"Staff Operations"
};
export const POLICY_SECTIONS = [
{id:0, title:"New Here? Start With This", topic:"orientation", staff:false, updated:"Aug 2026", body:`
  <p>This tool is the Equipment Office's digital companion to Cheqroom — it doesn't replace your Cheqroom reservation, but it's where you'll confirm kit contents, check whether you're cleared to check something out, and sign off on your gear digitally instead of on paper.</p>
  <h4>Where you'll actually use this</h4>
  <p><strong>This is a real website — you can open it on your own phone, laptop, or any device, whenever you want, no account or login needed.</strong> Browse gear, check what a kit contains, or confirm your own grade-level eligibility any time, even before you get to the office.</p>
  <p>The actual checkout sign-off is different, though — that still happens in person, with the gear physically in front of you, either on your own phone at the counter or on the EO's own iPad if it's a busy day. That's not a technical limitation, it's the point: signing off on a kit checklist should mean you're actually confirming the physical items in your hands, not doing it remotely before you've even seen them.</p>
  <h4>What you'll actually do with it</h4>
  <ul>
    <li><strong>Confirm a kit's contents</strong> — the Kit ID &amp; Testing tab lists exactly what should be in any kit, with a quick test procedure so you can confirm everything works before you leave the counter.</li>
    <li><strong>Check your own eligibility</strong> — the same tab shows which kits your grade level is cleared for, so you know before you ask.</li>
    <li><strong>Sign off on your kit checklist</strong> — instead of a paper form listing every item in your kit, you'll check items off and type your name right on the device at checkout, and do the same when you bring gear back.</li>
    <li><strong>Browse gear any time</strong> — the Equipment Index tab is open to explore whenever, from wherever, to see what's available and what tier it's restricted to.</li>
  </ul>
  <div class="callout">⚠ A few kits are still being finalized behind the scenes (marked "PENDING REVIEW" if you look closely) — if something looks incomplete or off, ask a staff member rather than assuming the tool is wrong.</div>
  <p>This is also something you'll be expected to know cold by graduation — checking gear in and out correctly is a real, assessed skill for every film student here, not just an EO convenience.</p>
`},
{id:19, title:"Our Vision, Mission &amp; Values", topic:"orientation", staff:false, updated:"Aug 2026", body:`
  <h4>Vision</h4>
  <p>To be a Christ-centered example of excellence in equipment stewardship — helping every student create with skill, integrity, and purpose, in step with Regent's mission of Christian Leadership to Change the World.</p>
  <h4>Mission</h4>
  <p>We're here to help you make your projects happen, the Regent way:</p>
  <ul>
    <li>Keeping professional-grade gear working and ready</li>
    <li>Making checkout and reservations fair and simple for everyone</li>
    <li>Helping you build real habits around caring for shared equipment</li>
    <li>Backing up faculty and students with reliable gear for class, thesis, and personal work</li>
    <li>Keeping this a professional, safe, respectful place — rooted in character, not just policy</li>
  </ul>
  <h4>Our Values</h4>
  <ul>
    <li><strong>Integrity</strong> — Do the right thing with gear even when no one's watching. Report damage honestly, return things on time, and treat shared equipment like it's not yours to lose.</li>
    <li><strong>Innovation</strong> — We keep improving how this office runs — like the tool you're using right now — so you spend less time on paperwork and more time creating.</li>
    <li><strong>Excellence</strong> — We maintain professional-standard gear and expect the same professional standard of care and conduct from everyone who uses it.</li>
  </ul>
`},
{id:1, title:"Making, Editing &amp; Canceling a Reservation", topic:"reservations", staff:false, updated:"02/16/2026", body:`
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
{id:2, title:"Paperwork &amp; Permits", topic:"paperwork", staff:false, updated:"02/16/2026", body:`
  <h4>Attaching Paperwork</h4>
  <p>Your "Forms Needed" email will ask for a <strong>Production Permit Form</strong> and/or <strong>COI Request Form</strong>. Email these to Admin Services (adminservices@regent.edu) at least <strong>2 weeks</strong> before checkout. All signed forms are due <strong>before</strong> your checkout time — no forms, no gear. Attach them yourself via the Attachments tab to avoid a cancellation caused by a missed email.</p>
  <div class="callout">A COI <em>Request</em> Form is not a completed COI — the City of Virginia Beach issues the real one, which takes 2–3 business days. Don't attach the Request Form itself to your reservation, or you won't be able to check out.</div>
  <h4>Which Locations Need What</h4>
  <p><strong>Production Permit</strong> — on-campus buildings, anything outside Regent Commons/Village, any exterior area (grassy areas, lots, etc.)</p>
  <p><strong>COI</strong> — inside Regent Commons/Village, the Founder's Inn, or any off-campus location (restaurants, retail, their parking lots)</p>
  <p>Required for anything beyond a cell phone camera (photography-only DSLR/mirrorless use is exempt). If shooting multiple locations, <strong>each one</strong> needs its own permit/COI. Some professors also require a City Production Permit or Location Release — check with them directly.</p>
`},
{id:3, title:"Training Requirements", topic:"training", staff:false, updated:"02/16/2026", body:`
  <p>Gear marked "with training" in the Equipment Index needs a training session before checkout — either at the Equipment Office or through a class that covers that gear (e.g. C100, IsoMax lavs). Most items need just one session; the <strong>Steadicam requires 3 sessions minimum over at least 3 days</strong> before your instructor clears you.</p>
  <p>Training appointments run on <strong>Wednesdays</strong> — email Ivy Brewer (ivybrew@regent.edu) to schedule. Regular checkouts take priority over training if staff gets slammed, so the first 2–3 weeks of the semester are your best bet. No paperwork needed for training appointments — everything happens in-office (or the Communications Building for rigs like the Steadicam), and any footage is deleted after the session.</p>
  <div class="callout">Keep your own record of what you've trained on and who trained you — staff sometimes forgets to update Cheqroom profiles.</div>
`},
{id:4, title:"Editing Orders at Checkout", topic:"checkout", staff:false, updated:"02/16/2026", body:`
  <p>Only EO staff can add/remove items at checkout, and only <strong>essential items</strong> — batteries, cables, media cards — things you genuinely need to get the shot. This is <strong>not</strong> the place to add extras you forgot (flag kits, dollies, 4x4 kits, etc.).</p>
  <p>Staff may occasionally need to pull an item from your order (repair, a senior/grad project taking priority, a Cheqroom glitch) — they'll work with you on a substitute.</p>
`},
{id:5, title:"Checking Out &amp; Returning Equipment", topic:"checkout", staff:false, updated:"02/16/2026", body:`
  <h4>At Checkout</h4>
  <p>Bring crew to help check large orders. Verify item numbers/quantities match your Cheqroom order, then do a full technical check: power on/off, record, no scratches or stripped screws, clean lens glass, smooth focus/zoom rings.</p>
  <div class="callout">⚠ <strong>Note ALL existing damage before signing</strong> the Equipment Checkout Agreement. Once signed, you're liable for anything not noted — staff can't reliably trace who caused old damage.</div>
  <p>Sign your forms, bring them to the desk, and double-check the printed Equipment Checkout Agreement against what you're taking (item numbers, case, checkout form, and liability form should all match — see Terms &amp; Contacts for how numbering works).</p>
  <h4>At Check-In / Return</h4>
  <p>Have gear repacked in its original cases. Be unloading your car by your return time at minimum, or you're late. You don't have to stay while staff verifies your order — they'll flag you before you go if anything's missing. Cheqroom "late" notifications may keep firing even after you've dropped off gear; ignore them as long as you're present and returning — they stop once staff checks your order in.</p>
`},
{id:6, title:"Fees, Damage &amp; Loss", topic:"fees", staff:false, updated:"Reconciled from Handbook + Staff Manual", body:`
  <p><em>This is the single, reconciled fee policy — the same numbers apply whether you're reading this as a student or a staff member.</em></p>
  <ul>
    <li><strong>Late item:</strong> $5.00/item/day (30-min grace period w/ valid, approved excuse) — capped at <strong>$50/day combined</strong>. After 7 days, an item is considered lost/missing.</li>
    <li><strong>Lost/missing item:</strong> full replacement cost (or closest equivalent).</li>
    <li><strong>Dirty item:</strong> $10/item (smoke, mud, dirt, chalk, powder, sand, fingerprints — yes, even one).</li>
    <li><strong>Damaged item:</strong> $30/item if operable or in-house repairable; full replacement cost if inoperable or not repairable in-house.</li>
    <li><strong>Scratched lenses:</strong> replacement at used price (not new).</li>
    <li><strong>Wet/waterlogged equipment</strong> and <strong>anything not listed here:</strong> case-by-case, up to full replacement cost.</li>
  </ul>
  <div class="callout">The $15 no-show fee and $15 restock fee that appear in some older paperwork have been confirmed <strong>retired</strong> — flag any printed copy still showing them for correction.</div>
  <h4>Paying Fees</h4>
  <p>Pay the Business Office (busoff@regent.edu, Admin Building 1st floor). The EO Manager invoices you the amount. <strong>Unpaid balances block any new checkout immediately</strong> (Cheqroom access is suspended). If a balance is still unpaid <strong>by the end of the semester</strong>, a registration hold is placed on the student's account, preventing registration and diploma release until paid.</p>
  <p>Can't pay in full? Contact the Manager — fees are sometimes reduced or waived (not guaranteed), and payment plans are available for fines over $50.</p>
  <h4>Who's Liable</h4>
  <p>You're liable for damage/loss even if a crew member caused it or the item was stolen — per the Checkout Agreement, you can seek reimbursement from them, but you owe the Office regardless.</p>
`},
{id:7, title:"Room Reservation Rules", topic:"rooms", staff:false, updated:"Staff Manual", body:`
  <p><strong>Who can use it:</strong> current Film/Animation students, faculty, and staff. Senior &amp; thesis projects get priority with chair/professor approval.</p>
  <p><strong>Booking:</strong> reserve online up to 21 days in advance. Max 6 hrs/day, 18 hrs/week per person (extensions possible with professor approval).</p>
  <p><strong>Late or no-show:</strong> call 757-352-4002 if you're running late or can't make it, or your slot may be reassigned. <strong>2 no-shows = a 2-week booking suspension.</strong></p>
  <p><strong>Etiquette:</strong> no food/drink near computers, log out and leave the space tidy, report tech issues to IT. Misuse or damage can mean loss of access or charges.</p>
`},
{id:8, title:"In-Office Rules &amp; Conduct", topic:"conduct", staff:false, updated:"02/16/2026", body:`
  <ul>
    <li>Not a hangout spot — you may be asked to leave if it gets crowded or staff needs to focus.</li>
    <li>Don't cross the blue line behind the desk unless training requires it or staff permits it.</li>
    <li>Be respectful of staff — frustration with gear/tech issues is never an excuse to mistreat employees.</li>
    <li>Don't touch gear that isn't part of your order.</li>
    <li>Staff retrieves bulk items (C-stands, sandbags) for you — don't grab them yourself. Verify the count you're given.</li>
    <li>Return borrowed pens to the Office — don't leave them on the tables.</li>
  </ul>
`},
{id:9, title:"Tripod Packing Procedures", topic:"reference", staff:false, updated:"02/16/2026", body:`
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
{id:10, title:"Terms, Codes &amp; Contacts", topic:"reference", staff:false, updated:"02/16/2026", body:`
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
{id:11, title:"Frequently Asked Questions", topic:"faq", staff:false, updated:"02/16/2026", body:`
  <div class="qa"><div class="q">Where do I find required paperwork?</div>Check your "Forms Needed Before Checkout" email, or your Canvas course for Production Permit, COI, City Permit, Location Release, and Talent Release links.</div>
  <div class="qa"><div class="q">When do I NOT need paperwork?</div>Shooting inside your classroom during class time only (never leaving), with professor approval and EO notified. Training appointments also don't need paperwork.</div>
  <div class="qa"><div class="q">How do I add a comment in Cheqroom?</div>History tab → type in the Comment box → click <strong>Add Comment</strong> (hitting Enter just adds a line break, it does not submit).</div>
  <div class="qa"><div class="q">Is there a max number of items per order?</div>No overall limit, but individual items (e.g. batteries) may have per-item caps — check the Equipment Index.</div>
  <div class="qa"><div class="q">What if I'm charged for pre-existing damage?</div>You must note all existing damage at checkout, or you'll be charged for it at return.</div>
  <div class="qa"><div class="q">The code on my case doesn't match my order or the item inside — now what?</div>Bring it to the Office — staff will swap it and note the correction so you're not liable for damage to the wrong item.</div>
  <div class="qa"><div class="q">Do I have to be there for checkout / check-in?</div>Yes to both — you need to inspect and sign at checkout, and be present at return unless you've arranged in advance for someone else to bring the gear back on time.</div>
  <div class="qa"><div class="q">Can't reach the Office by phone/email?</div>Contact Manager Hector Cruz (hectcru@regent.edu) or Asst. Manager Ivy Brewer (ivybrew@regent.edu).</div>
  <div class="qa"><div class="q">How do I know if I'm cleared for a piece of gear?</div>Check the Equipment Index and your Cheqroom profile. Most "with training" items need one session; some (like the Steadicam) need more.</div>
  <div class="qa"><div class="q">Can I check in early?</div>Usually yes, but ask first if it's more than an hour or two early — staff may be tied up with other returns.</div>
  <div class="qa"><div class="q">What are the EO's hours?</div>They vary by day and semester — see the current hours posted on the Office door (and the Hours of Operation doc once linked here).</div>
  <div class="qa"><div class="q">Are there set training days?</div>Generally Wednesdays, but this can shift with staff availability each semester.</div>
  <div class="qa"><div class="q">How many people can help with checkout/check-in?</div>No limit, but only one person should be inside asking staff questions — keep the rest of your group at the tables checking gear.</div>
  <div class="qa"><div class="q">Can I reserve gear over a break?</div>Only with Manager approval, and you generally need to be living in the area for that break. Staff will likely need to help set up the reservation.</div>
  <div class="qa"><div class="q">Can I use EO gear for a personal or paid project?</div>No — Regent policy restricts EO gear to Regent-affiliated projects (class work or university-funded films). Contact the Manager or Film Dept. Chair with questions.</div>
  <div class="qa"><div class="q">What if a crew member loses or breaks something?</div>You're still liable to the Office per your Checkout Agreement, even if you separately recover costs from them.</div>
  <div class="qa"><div class="q">Am I liable if equipment is stolen?</div>Yes — you're required to replace stolen equipment per the Checkout Agreement.</div>
  <div class="qa"><div class="q">Will fees be waived for illness/injury or emergencies?</div>Evaluated case-by-case — contact the Manager.</div>
  <div class="qa"><div class="q">What if I can't afford a fee or replacement cost?</div>Contact the Manager — fees are sometimes reduced (not guaranteed), and payment plans exist for fines over $50.</div>
  <div class="qa"><div class="q">How many C47s (clothespins) are in a "set"?</div>Ten. Each gel kit includes one set; request more via a Cheqroom comment.</div>
`},
{id:12, title:"Daily Procedures &amp; Spot Checks", topic:"staffops", staff:true, updated:"Fall 2025 Staff Manual", body:`
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
{id:13, title:"Cheqroom Log-In", topic:"staffops", staff:true, updated:"Fall 2025 Staff Manual", body:`
  <ol>
    <li>Go to login.cheqroom.com.</li>
    <li>Click Login (top right).</li>
    <li>Enter your <strong>@regent.edu</strong> work email (not @mail.regent.edu) and click <strong>Log in with SSO</strong>.</li>
  </ol>
`},
{id:14, title:"Checking EO Email &amp; Attaching Approvals", topic:"staffops", staff:true, updated:"Fall 2025 Staff Manual", body:`
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
{id:15, title:"Building an Order (Staff)", topic:"staffops", staff:true, updated:"Aug 2026", body:`
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
{id:16, title:"Order Checkout (Staff Process)", topic:"staffops", staff:true, updated:"Fall 2025 Staff Manual", body:`
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
{id:17, title:"Order Check-In (Staff Process)", topic:"staffops", staff:true, updated:"Fall 2025 Staff Manual", body:`
  <ol>
    <li>Provide a cart for the student's return. Let them know you'll check gear in and go over each item individually — any issues found get emailed after.</li>
    <li>In Cheqroom, scan every barcode. Anything still showing "checked out" afterward must be manually counted and verified present before manual check-in.</li>
    <li>Note any missing items — they don't get checked in.</li>
    <li>Pull the student's paperwork from the active bin and manually verify function and completeness — <strong>cameras are one line item in Cheqroom but multiple physical parts</strong>; confirm everything that went out came back, and that every electronic item powers on, records, etc.</li>
    <li>Repeat for every item with its own checklist.</li>
    <li>In Cheqroom, check whether each issue was already noted at checkout. If not, add it to the item's description (with date) or as a comment. If it <em>was</em> pre-existing, drop it from your issues list.</li>
    <li>If anything's missing or damaged, email the student directly, <strong>CC the EO Manager and CTV Chair</strong>, with the full list of issues.</li>
  </ol>
`},
];
