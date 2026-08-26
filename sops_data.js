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
];
