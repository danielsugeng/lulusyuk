// ── NAV scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Mobile menu ──
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' }); }
  });
});

// ── Scroll reveal ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.feat-card,.hiw-step,.subj-card,.price-card,.blog-card,.stat'
).forEach((el, i) => {
  el.style.cssText += `opacity:0;transform:translateY(22px);transition:opacity .42s ease ${i*.06}s,transform .42s ease ${i*.06}s`;
  obs.observe(el);
});

// ── Active nav ──
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
}, { passive: true });

// ══════════════════════════════════════════
// ── BLOG POST CONTENT ──
// ══════════════════════════════════════════
const posts = {

  post1: {
    tag: 'Strategy', date: 'June 2025', readTime: '8 min read',
    title: 'How to Prepare for UTBK in 30 Days: A Complete Study Strategy',
    html: `
      <p>Thirty days before UTBK. For some students, that number feels like a lifeline. For others, it feels like a countdown clock. The truth is — <strong>30 days is more than enough time</strong> to significantly improve your score, if you use it correctly.</p>
      <p>This guide breaks down exactly how to structure your final month of UTBK preparation, week by week, subject by subject. No fluff, no generic advice — just a practical plan that works.</p>
      <div class="callout"><p>💡 <strong>Quick tip:</strong> Before you start Week 1, download LulusYuk! and take your first free mock Try Out. Your baseline score tells you where to focus — don't skip this step.</p></div>

      <h2>Week 1: Diagnose, Don't Panic</h2>
      <p>The biggest mistake students make in the final month is jumping straight into study sessions without knowing their baseline. Week 1 is about understanding where you stand — not about grinding through every subtopic.</p>
      <h3>What to do in Week 1</h3>
      <ul>
        <li><strong>Day 1:</strong> Take a full mock Try Out under timed conditions. 195 minutes, no breaks, no phone.</li>
        <li><strong>Day 2:</strong> Review your score breakdown. Which subtest was your lowest? That's your Week 1 priority.</li>
        <li><strong>Day 3–6:</strong> Focus all practice sessions on your single weakest subtest. 60 minutes per day, 15–20 questions.</li>
        <li><strong>Day 7:</strong> Rest. One full day off. Your brain consolidates what it learns during rest — this is not optional.</li>
      </ul>
      <p>By the end of Week 1, you should have a clear picture of your strengths, your gaps, and a priority order for the remaining three weeks.</p>

      <h2>Week 2: Build Your Foundation</h2>
      <p>Week 2 is where the real work begins. Now that you know your weaknesses, you're going to spend the next 7 days systematically working through them — one subtest at a time.</p>
      <h3>The 2-1-1 daily rhythm</h3>
      <p>Successful UTBK students consistently use this simple daily structure:</p>
      <ul>
        <li><strong>2 hours:</strong> Active practice on your weak subject — timed questions, no skipping</li>
        <li><strong>1 hour:</strong> Review incorrect answers and read explanations thoroughly</li>
        <li><strong>1 hour:</strong> Light review of a subject you're already confident in, to keep it warm</li>
      </ul>
      <div class="callout"><p>📊 <strong>Use the Analytics tab in LulusYuk!:</strong> It shows exactly which subtopics you're getting wrong most often. Sort by accuracy and start from the bottom.</p></div>
      <h3>Subject priority order (for most students)</h3>
      <ol>
        <li>Penalaran Matematika — highest weight, most improvable</li>
        <li>Penalaran Umum (TPS) — logic can be trained quickly</li>
        <li>Literasi Bahasa Indonesia — reading speed + comprehension</li>
        <li>Literasi Bahasa Inggris — vocabulary patterns and reading strategies</li>
        <li>Pemahaman Bacaan & Menulis — once you nail Literasi, this follows</li>
      </ol>

      <h2>Week 3: Simulate, Review, Repeat</h2>
      <p>By Week 3, your foundational knowledge should be solid. Now it's time to train under real UTBK conditions — because knowing the material and being able to perform under time pressure are two completely different skills.</p>
      <p>Take two full mock Try Outs this week. After each one:</p>
      <ul>
        <li>Don't check your score first. Read through every question you weren't 100% sure about.</li>
        <li>Then check your score and find patterns — are you consistently wrong in the same subtopic?</li>
        <li>Give yourself a 24-hour gap before your next heavy session.</li>
      </ul>

      <h2>Week 4: Sharpen, Don't Cram</h2>
      <p>The biggest mistake in the final week is trying to learn new material. <strong>Don't do this.</strong> Week 4 is about sharpening what you already know.</p>
      <ul>
        <li><strong>Day 22–24:</strong> Light practice (30 min per subject). Focus on types you've already mastered.</li>
        <li><strong>Day 25:</strong> One final full mock Try Out. Treat it exactly like the real exam.</li>
        <li><strong>Day 26–28:</strong> Review your worst 10 questions from that Try Out only. Then stop.</li>
        <li><strong>Day 29:</strong> Prepare your exam logistics — travel route, ID, pencils, water. Sleep by 10 PM.</li>
        <li><strong>Day 30 (Exam day):</strong> Eat a real breakfast. Arrive early. Trust the work you've done.</li>
      </ul>
      <div class="callout"><p>🧠 <strong>The night before UTBK:</strong> Don't study. Seriously. Watch something you enjoy, eat well, sleep. Cramming the night before lowers performance — this is well-documented in cognitive science.</p></div>

      <h2>The One Thing That Separates Top Scorers</h2>
      <p>After looking at how high-scoring students prepare, one pattern comes up again and again: <strong>they take more mock Try Outs than average students.</strong> Students who score in the top 10% typically complete 8–12 full Try Outs before the exam. Average students complete 2–3.</p>
      <p>Start your Try Outs early. Take them seriously. Review them thoroughly. That's the plan.</p>
      <div class="cta-box">
        <h3>Start your 30-day plan today</h3>
        <p>Download LulusYuk!, take your free baseline Try Out, and get a personalized practice plan — in under 5 minutes.</p>
        <a href="#download" class="btn btn-yellow btn-lg" onclick="closePost()">Download LulusYuk! — Free</a>
      </div>
    `
  },

  post2: {
    tag: 'TPS', date: 'June 2025', readTime: '6 min read',
    title: '5 Proven Tricks for Answering TPS Questions Faster',
    html: `
      <p>TPS (Tes Potensi Skolastik) is the subtest where most students lose the most points — not because the questions are too hard, but because they simply <strong>run out of time.</strong> With 80 questions and roughly 80 minutes across four subtests, you have about one minute per question — and that's not much when you're stuck on a tricky logic problem.</p>
      <p>These five tricks are used by students who consistently score high on TPS. None of them are shortcuts — they're strategies that work.</p>

      <h2>Trick 1: Answer What You Know First</h2>
      <p>This sounds obvious, but most students don't actually do it. When you open a TPS section, quickly scan the first 10 questions and identify the ones you're confident about. Answer those first. Skip — don't agonize over — anything that requires more than 45 seconds of initial thought.</p>
      <p>You'll come back to the hard ones. But by answering the easy ones first, you guarantee those points and build momentum. UTBK has no negative marking for wrong answers, so an educated guess at the end is always better than a blank.</p>

      <h2>Trick 2: Learn to Eliminate, Not Just Identify</h2>
      <p>Most TPS questions, especially in Penalaran Umum and Pengetahuan Kuantitatif, can be solved faster through elimination than through directly finding the right answer.</p>
      <div class="callout"><p>🎯 <strong>The elimination rule:</strong> If you can confidently eliminate 3 of 5 options, you now have a 50/50 chance instead of a 20% chance. Don't try to be 100% sure — try to be more sure than random.</p></div>
      <p>Practice this deliberately. In LulusYuk!, when you review incorrect answers, ask yourself: "Which options could I have eliminated immediately, and why?" This trains your brain to spot wrong answers fast.</p>

      <h2>Trick 3: Allocate Time Per Subtest — and Stick to It</h2>
      <p>TPS has four subtests. Going into the exam without a time budget means you'll spend 30 minutes on Penalaran Umum and only 5 minutes on Pengetahuan Kuantitatif — or vice versa. Neither is optimal.</p>
      <p>A reasonable default time budget:</p>
      <ul>
        <li><strong>Penalaran Umum:</strong> 25 minutes (most questions, most point value)</li>
        <li><strong>Pemahaman Bacaan & Menulis:</strong> 20 minutes (reading-heavy, pace yourself)</li>
        <li><strong>Pengetahuan & Pemahaman Umum:</strong> 15 minutes (recall-based, faster)</li>
        <li><strong>Pengetahuan Kuantitatif:</strong> 20 minutes (calculation-heavy, don't rush)</li>
      </ul>
      <p>Adjust this based on your own analytics. In LulusYuk!, your Analytics tab shows your accuracy per subtest — allocate more time to subtests where you're weakest.</p>

      <h2>Trick 4: Use the "Read the Question First" Method for Reading Passages</h2>
      <p>For Pemahaman Bacaan & Menulis questions, students who read the full passage first before looking at the questions waste 3–5 minutes per passage. Instead, read the questions first, then read the passage looking specifically for those answers.</p>
      <p>This cuts your reading time roughly in half because you're reading with a purpose — not reading everything and hoping it becomes relevant.</p>

      <h2>Trick 5: Build a Personal "Skip Threshold"</h2>
      <p>Before UTBK, decide your skip threshold — the maximum number of seconds you'll spend on a question before moving on. For most students, this should be <strong>60–75 seconds on the first pass.</strong> Mark the question, move on, and return if you have time.</p>
      <div class="callout"><p>⏱️ <strong>Practice this during mock Try Outs:</strong> If you never practice the discipline of skipping during your LulusYuk! Try Outs, you won't be able to do it on exam day when the pressure is real. Treat every Try Out like the real thing.</p></div>

      <h2>The Real Secret: Volume of Practice</h2>
      <p>All five of these tricks become instinctive through practice. You can read about elimination strategies all day, but until you've done 500+ TPS questions under timed conditions, they won't feel automatic.</p>
      <p>That's why the LulusYuk! Question Bank is organized by subtest and difficulty — so you can systematically work through every TPS subtopic and actually build the instincts, not just know about them.</p>
      <div class="cta-box">
        <h3>Practice 5,000+ UTBK questions — free</h3>
        <p>Download LulusYuk! and start building real TPS speed today. Free to start, no card needed.</p>
        <a href="#download" class="btn btn-yellow btn-lg" onclick="closePost()">Download Free</a>
      </div>
    `
  },

  post3: {
    tag: 'Try Out', date: 'June 2025', readTime: '5 min read',
    title: 'Why You Should Take at Least 5 Mock Try Outs Before UTBK',
    html: `
      <p>If you ask any high-scoring UTBK student what they'd do differently if they could start over, almost all of them say the same thing: <strong>"I would have taken more Try Outs."</strong></p>
      <p>Not more study time. Not more YouTube lectures. More Try Outs.</p>
      <p>This isn't just anecdotal — there's a real cognitive reason why simulation-based practice outperforms passive study, and why 5 Try Outs is the minimum, not the maximum.</p>

      <h2>What Happens to Your Brain During a Try Out</h2>
      <p>When you practice answering questions normally — sitting at your desk, looking up answers when you're stuck — your brain stores information in a "comfortable" state. That's fine for learning, but UTBK doesn't happen in a comfortable state.</p>
      <p>UTBK happens under time pressure, with 155 questions, in a room full of other students, after waking up early and commuting to an exam center. Your brain in that environment is chemically different — higher cortisol, higher stakes, faster decision-making required.</p>
      <div class="callout"><p>🧠 <strong>The research behind this:</strong> Cognitive scientists call this "context-dependent memory." Information recalled in conditions similar to where it was learned is retrieved faster and more accurately. Practicing in exam conditions — with a timer, no interruptions — trains your brain to retrieve under exam conditions.</p></div>

      <h2>Why 5 Is the Minimum</h2>
      <p>Here's what typically happens across your first five Try Outs:</p>
      <ul>
        <li><strong>Try Out 1:</strong> Chaos. You run out of time on at least one subtest. Your score doesn't reflect what you actually know. This is normal and necessary — it shows you your real baseline.</li>
        <li><strong>Try Out 2:</strong> You know what's coming. You manage time slightly better. Your score probably goes up 20–40 points just from reduced anxiety and better pacing.</li>
        <li><strong>Try Out 3:</strong> You start to identify patterns. "I always run out of time on Penalaran Matematika." "I consistently lose points on Pemahaman Bacaan." These are your real study targets.</li>
        <li><strong>Try Out 4:</strong> Your time management is now mostly automatic. You have a pacing strategy. You know which question types to skip and come back to.</li>
        <li><strong>Try Out 5:</strong> You're performing. Not just answering questions — performing. The anxiety is there but it's manageable. Your score stabilizes around your true capability.</li>
      </ul>
      <p>Below 5 Try Outs, you haven't finished building the muscle. You're still in the "learning phase" of exam simulation — which means you haven't yet reached "performance phase."</p>

      <h2>How to Make Each Try Out Actually Count</h2>
      <p>A Try Out you don't review is just a quiz. The score doesn't matter nearly as much as what you do in the 60 minutes after you submit.</p>
      <ol>
        <li><strong>Review every wrong answer, not just the ones you guessed.</strong> If you answered correctly but weren't sure, review those too. "Lucky correct" answers are your highest-risk questions on the real exam.</li>
        <li><strong>Track your time per subtest.</strong> Did you spend too long on TPS and rush through Matematika? That's a pacing problem, not a knowledge problem — and they have different fixes.</li>
        <li><strong>Set a target before you start.</strong> "I want to score above 620 on this Try Out." Having a specific target changes how you approach each question. It creates appropriate pressure.</li>
        <li><strong>Space your Try Outs out.</strong> Taking 5 Try Outs in 3 days defeats the purpose. Space them at least 3–4 days apart so you have time to absorb what you learned from each one.</li>
      </ol>
      <div class="callout"><p>📅 <strong>Recommended schedule:</strong> If you have 30 days before UTBK, take your Try Outs on Days 1, 8, 15, 20, and 25. That gives you time to improve between each one and a final data point close to the exam.</p></div>

      <h2>Free Try Outs, Real Conditions</h2>
      <p>The biggest barrier for most students is that quality Try Outs are expensive. Offline Try Out events cost Rp 50,000–150,000 per session. That's Rp 250,000–750,000 for five sessions — before you've spent a single rupiah on other prep materials.</p>
      <p>LulusYuk! includes one full mock Try Out per month in the free tier, with unlimited Try Outs available in Premium. Every Try Out in the app is timed, graded, and includes a full score breakdown by subtest — the same information you'd get from an offline event.</p>
      <div class="cta-box">
        <h3>Take your first free Try Out today</h3>
        <p>Download LulusYuk!, set your target university, and take a full mock UTBK — completely free, no card required.</p>
        <a href="#download" class="btn btn-yellow btn-lg" onclick="closePost()">Start Free — Download LulusYuk!</a>
      </div>
    `
  }
};

// ── Open/close post ──
function openPost(id) {
  const post = posts[id];
  if (!post) return;

  document.getElementById('postBody').innerHTML = `
    <p class="post-meta" style="margin-bottom:6px">
      <span style="background:var(--yellow-lt);color:var(--navy);font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;letter-spacing:.1em">${post.tag}</span>
    </p>
    <h1>${post.title}</h1>
    <p class="post-meta">By LulusYuk! Team · ${post.date} · ${post.readTime}</p>
    ${post.html}
  `;

  const reader = document.getElementById('postReader');
  const grid   = document.getElementById('blogGrid');
  reader.classList.add('open');
  grid.style.display = 'none';

  // Scroll to blog section
  const blogSection = document.getElementById('blog');
  setTimeout(() => {
    window.scrollTo({ top: blogSection.offsetTop - 80, behavior: 'smooth' });
  }, 50);
}

function closePost() {
  document.getElementById('postReader').classList.remove('open');
  document.getElementById('blogGrid').style.display = '';
}

// Expose globally
window.openPost = openPost;
window.closePost = closePost;