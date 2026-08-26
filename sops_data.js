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
];
