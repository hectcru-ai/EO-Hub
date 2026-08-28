export const CHEQROOM_SECTIONS = [
  {
    id: 100,
    title: "Cheqroom Log-In",
    officialLink: null,
    updated: "Staff Manual",
    body: `
  <ol>
    <li>Go to login.cheqroom.com.</li>
    <li>Click Login (top right).</li>
    <li>Enter your <strong>@regent.edu</strong> work email (not @mail.regent.edu) and click <strong>Log in with SSO</strong>.</li>
  </ol>
`,
  },
  {
    id: 101,
    title: "Making a Reservation",
    officialLink: "https://help.cheqroom.com/en/articles/2286337-creating-a-reservation",
    updated: "New",
    body: `
  <p>Cheqroom's own help article covers the mechanics well (linked above, includes a short video). The short version:</p>
  <ol>
    <li>Reservations → New Reservation. Give it a name — usually the project or the student's name.</li>
    <li>Set the location, and the From/To dates (when the gear is needed vs. due back).</li>
    <li>Add items or kits — search by name or browse by category. Add the Approving Professor and Course.</li>
    <li>Click Reserve.</li>
  </ol>
  <div class="callout">Reservations you haven't finished yet auto-save as Drafts. Careful though — items sitting in a Draft are still available for anyone else to grab. Don't assume a draft has anything locked in.</div>
`,
  },
  {
    id: 102,
    title: "Reservation Statuses",
    officialLink: "https://help.cheqroom.com/cheqroom-s-key-features-explained/reservations-check-outs-and-custody/reservation-overview",
    updated: "New",
    body: `
  <p>Worth knowing these at a glance:</p>
  <ul>
    <li><strong>Draft</strong> — not finalized yet. Equipment is NOT locked in — anyone else can still take it.</li>
    <li><strong>Reserved/Booked</strong> — locked in for that date range. No one else can book it during that window.</li>
    <li><strong>Overdue</strong> — should have already converted to a check-out by now.</li>
    <li><strong>Converted</strong> — became a real check-out; equipment has left the building (or already come back).</li>
    <li><strong>Closed</strong> — completed without ever converting to a check-out.</li>
    <li><strong>Cancelled</strong> — no longer valid; equipment calendar clears back up.</li>
  </ul>
`,
  },
  {
    id: 103,
    title: "Editing a Reservation — Why Timing Matters",
    officialLink: "https://knowledge.cheqroom.com/helpcenter/how-do-i-change-a-reservation",
    updated: "New",
    body: `
  <p>The mechanics: Reservations → open the one you want to change → Actions → Edit → make your changes → click Reserve again to re-book it.</p>
  <div class="callout"><strong>⚠ This is the one that catches people off guard.</strong> Clicking Edit doesn't just let you tweak a reservation in place — it puts the <em>entire</em> reservation back into Draft status first. And while it's in Draft, every item in it becomes available for anyone else to grab, even though you thought it was already locked in for your student.</div>
  <p>In practice: if you're editing an already-booked reservation just to swap one item, everything else in it is briefly up for grabs too — not just the one thing you're changing. On a busy day, especially with popular gear, someone else can genuinely take something out from under you in that window. Re-save (click Reserve) as soon as you're done editing — don't leave it sitting in Draft.</p>
`,
  },
  {
    id: 104,
    title: "Canceling a Reservation",
    officialLink: "https://help.cheqroom.com/cheqroom-s-key-features-explained/reservations-check-outs-and-custody/reservation-overview",
    updated: "New",
    body: `
  <p>Open the reservation → Actions → Cancel. This clears the equipment's calendar for that date range, so it becomes bookable by someone else right away. Lower-risk than editing — nothing lingers in a Draft state first.</p>
`,
  },
  {
    id: 105,
    title: "Checking EO Email & Attaching Approvals",
    officialLink: null,
    updated: "Staff Manual",
    body: `
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
`,
  },
  {
    id: 106,
    title: "Building an Order (Staff)",
    officialLink: null,
    updated: "Staff Manual",
    body: `
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
`,
  },
  {
    id: 107,
    title: "Creating a Check-out in Cheqroom & Adding Items",
    officialLink: "https://help.cheqroom.com/en/articles/2352210-creating-a-check-out",
    updated: "New",
    body: `
  <p>Converting a reservation, or starting a check-out fresh: open it → Proceed to Checkout (or Check-outs → New Check-out). Add items or kits by searching the name or browsing by category.</p>
  <div class="callout">Adding an essential item (a battery, a C-Fast card) at checkout is normal and expected. Adding an extra camera, light, or anything not already approved is not — that needs to go back through Reservation/approval first.</div>
`,
  },
  {
    id: 108,
    title: "Order Checkout (Staff Process)",
    officialLink: null,
    updated: "Staff Manual",
    body: `
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
`,
  },
  {
    id: 109,
    title: "Check-In in Cheqroom",
    officialLink: "https://help.cheqroom.com/en/articles/2740749-how-to-complete-a-check-in",
    updated: "New",
    body: `
  <p>Find the open check-out (Check-outs → filter Open, or from the student's Contact page), open it, and select the items being returned — checking the box next to each one. Click Check-in (top right) to complete it.</p>
  <ul>
    <li>Checking in only some items? That's fine — it's a partial check-in. The check-out stays open until everything's back, or someone manually closes it.</li>
    <li>Anything not selected stays showing as checked out — that's expected if it's genuinely not back yet.</li>
  </ul>
`,
  },
  {
    id: 110,
    title: "Order Check-In (Staff Process)",
    officialLink: null,
    updated: "Staff Manual",
    body: `
  <ol>
    <li>Provide a cart for the student's return. Let them know you'll check gear in and go over each item individually — any issues found get emailed after.</li>
    <li>In Cheqroom, check items in manually (select the checkbox next to each item on the check-out's detail page). Anything still showing "checked out" afterward must be manually counted and verified present before check-in.</li>
    <li>Note any missing items — they don't get checked in.</li>
    <li>Pull the student's paperwork from the active bin and manually verify function and completeness — <strong>cameras are one line item in Cheqroom but multiple physical parts</strong>; confirm everything that went out came back, and that every electronic item powers on, records, etc.</li>
    <li>Repeat for every item with its own checklist.</li>
    <li>In Cheqroom, check whether each issue was already noted at checkout. If not, add it to the item's description (with date) or as a comment. If it <em>was</em> pre-existing, drop it from your issues list.</li>
    <li>If anything's missing or damaged, email the student directly, <strong>CC the EO Manager and CTV Chair</strong>, with the full list of issues.</li>
  </ol>
`,
  },
  {
    id: 111,
    title: "Pulling an Item From an Order Already Sitting in the Office",
    officialLink: null,
    updated: "Needs a recorded walkthrough",
    body: `
  <p>The scenario: a student's order is already built and sitting in the office, not yet checked in (or checked out but not returned) — and something in it is needed elsewhere. No official Cheqroom article covers this exact situation; it's genuinely an EO workflow, not a documented Cheqroom feature.</p>
  <div class="callout">📹 This is the one that most needs a real recorded walkthrough on this exact screen, showing a real example as it happens — not a written summary. Use the Manage Video button below once one's been recorded.</div>
`,
  },
  {
    id: 112,
    title: "Daily Procedures & Spot Checks",
    officialLink: null,
    updated: "Staff Manual",
    body: `
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
`,
  },
];
