export const POLICY_TOPICS = {
  orientation:"Getting Started", training:"Training", fees:"Fees, Damage & Loss",
  conduct:"In-Office Conduct", faq:"FAQ"
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
{id:1, title:"Our Vision, Mission &amp; Values", topic:"orientation", staff:false, updated:"Aug 2026", body:`
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
{id:2, title:"Training Requirements", topic:"training", staff:false, updated:"02/16/2026", body:`
  <p>Gear marked "with training" in the Equipment Index needs a training session before checkout — either at the Equipment Office or through a class that covers that gear (e.g. C100, IsoMax lavs). Most items need just one session; the <strong>Steadicam requires 3 sessions minimum over at least 3 days</strong> before your instructor clears you.</p>
  <p>Training appointments run on <strong>Wednesdays</strong> — email Ivy Brewer (ivybrew@regent.edu) to schedule. Regular checkouts take priority over training if staff gets slammed, so the first 2–3 weeks of the semester are your best bet. No paperwork needed for training appointments — everything happens in-office (or the Communications Building for rigs like the Steadicam), and any footage is deleted after the session.</p>
  <div class="callout">Keep your own record of what you've trained on and who trained you — staff sometimes forgets to update Cheqroom profiles.</div>
`},
{id:3, title:"Fees, Damage &amp; Loss", topic:"fees", staff:false, updated:"Reconciled from Handbook + Staff Manual", body:`
  <p><em>Confirmed current against the Policy Manual and Student Handbook (July 2026).</em></p>
  <ul>
    <li><strong>Late checkout:</strong> $15.00 if you're more than 30 minutes late for a scheduled checkout, without a valid excuse accepted by Management. An additional <strong>$15.00 restock fee</strong> applies if the Office isn't contacted within 24 hours of the missed checkout.</li>
    <li><strong>Late item:</strong> $5.00/item/day, starting 30 minutes after the designated return time — unless you've notified the Office <strong>in advance</strong> with a valid excuse Management accepts, in which case charges start later or not at all. Without that advance notice, charges begin at minute one. Capped at <strong>$50/day combined</strong>, regardless of how many items are late. After 7 days, an item is considered lost/missing.</li>
    <li><strong>Lost/missing item:</strong> full replacement cost (or closest equivalent if the exact item's discontinued).</li>
    <li><strong>Dirty item:</strong> $10/item (smoke, mud, dirt, chalk, powder, sand, fingerprints — yes, even one, especially on rear lens glass).</li>
    <li><strong>Damaged item:</strong> $30/item if operable or repairable in-house; full replacement cost if inoperable and not repairable in-house. If the replacement cost is actually less than $30, that lower amount is charged instead.</li>
    <li><strong>Damage inside a kit:</strong> you're only charged for the specific damaged piece, not the whole kit — unless every item in the kit is damaged, replacing the whole kit is cheaper than the parts individually, or the damaged part isn't sold separately.</li>
    <li><strong>Scratched lenses:</strong> considered unrepairable — replacement at used price (not new).</li>
    <li><strong>Wet/waterlogged equipment</strong> and <strong>anything not listed here:</strong> case-by-case at Management's discretion, up to full replacement cost — most likely full cost if water reached the inside of an electronic item.</li>
  </ul>
  <h4>Paying Fees</h4>
  <p>Pay the Business Office (busoff@regent.edu, Admin Building 1st floor). The EO Manager invoices you the amount. <strong>Unpaid balances block any new checkout immediately</strong> (Cheqroom access is suspended). If a balance is still unpaid <strong>by the end of the semester</strong>, an <strong>academic hold</strong> is placed on the student's account — this blocks registering for classes or receiving your diploma until paid in full.</p>
  <p>Can't pay in full? Contact the Manager — fees are sometimes reduced or waived (not guaranteed), and payment plans are available for fines over $50.</p>
  <h4>Who's Liable</h4>
  <p>You're liable for damage/loss even if a crew member caused it or the item was stolen — per the Checkout Agreement, you can seek reimbursement from them, but you owe the Office regardless. Consider renter's insurance to protect yourself against loss, theft, or damage.</p>
`},
{id:4, title:"In-Office Rules &amp; Conduct", topic:"conduct", staff:false, updated:"02/16/2026", body:`
  <ul>
    <li>Not a hangout spot — you may be asked to leave if it gets crowded or staff needs to focus.</li>
    <li>Don't cross the blue line behind the desk unless training requires it or staff permits it.</li>
    <li>Be respectful of staff — frustration with gear/tech issues is never an excuse to mistreat employees.</li>
    <li>Don't touch gear that isn't part of your order.</li>
    <li>Staff retrieves bulk items (C-stands, sandbags) for you — don't grab them yourself. Verify the count you're given.</li>
    <li>Return borrowed pens to the Office — don't leave them on the tables.</li>
  </ul>
  <h4>If Things Escalate</h4>
  <p>EO staff are not obligated to provide equipment to anyone engaging in misconduct. If a concern about a staff member, a fee, or anything else can't be resolved civilly with staff directly, bring it to the Office Manager (or Assistant Manager if the Manager is unavailable).</p>
  <p>Repeated misconduct, or behavior that escalates in severity, can result in being barred from the Equipment Office entirely and having Cheqroom access revoked — at Office management's discretion.</p>
`},
{id:5, title:"Frequently Asked Questions", topic:"faq", staff:false, updated:"02/16/2026", body:`
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
`}
];
