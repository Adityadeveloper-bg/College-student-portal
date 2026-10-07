

/* ============================================================
   EduSphere – script.js
   Data + rendering + interactivity (100% frontend simulation)
   ============================================================ */

/* ---------------- SAMPLE DATA ---------------- */

const NOTES = [
  { title: "DSA – Complete Handwritten Notes", type: "Notes", subject: "DSA", meta: "PDF • 84 pages • ⭐ 4.9", icon: "📗" },
  { title: "DBMS Unit 1–5 Summary", type: "Notes", subject: "DBMS", meta: "PDF • 46 pages • ⭐ 4.7", icon: "📘" },
  { title: "Operating Systems Full Course", type: "Video", subject: "OS", meta: "24 videos • 9 hrs • ⭐ 4.8", icon: "🎬" },
  { title: "Computer Networks PYQ 2019–2025", type: "PYQ", subject: "CN", meta: "Solved papers • ⭐ 4.6", icon: "📝" },
  { title: "Let Us C – Digital Library Copy", type: "Book", subject: "C", meta: "E-Book • Yashavant Kanetkar", icon: "📕" },
  { title: "Web Development Bootcamp", type: "Video", subject: "Web", meta: "HTML, CSS, JS, React • ⭐ 4.9", icon: "🎬" },
  { title: "Java OOP Concepts Mindmaps", type: "Notes", subject: "Java", meta: "PDF • 30 pages • ⭐ 4.5", icon: "📗" },
  { title: "DBMS Previous Year Questions", type: "PYQ", subject: "DBMS", meta: "2018–2025 solved • ⭐ 4.8", icon: "📝" },
];

const PROJECTS = [
  { title: "CampusNav – AR Navigation", by: "Team Nitro • CSE", tags: ["App", "AI/ML"], desc: "AR-based indoor navigation for campus blocks with voice guidance.", likes: 342 },
  { title: "MediTrack – Health Dashboard", by: "Aarav & Team • IT", tags: ["Web", "AI/ML"], desc: "Tracks vitals, medicine schedules and gives AI health suggestions.", likes: 287 },
  { title: "Smart Water Level Monitor", by: "Team Volt • ECE", tags: ["IoT"], desc: "ESP32-based tank monitor with auto pump control and alerts.", likes: 198 },
  { title: "EduSphere Lite", by: "Web Club", tags: ["Web"], desc: "Open-source mini LMS with quiz engine and progress tracking.", likes: 415 },
  { title: "Attendance via Face ID", by: "Priya • CSE", tags: ["AI/ML", "App"], desc: "Contactless attendance using face recognition, 98% accuracy.", likes: 376 },
  { title: "AgriBot – Soil Analyzer", by: "Team Green • Agri", tags: ["IoT", "AI/ML"], desc: "Sensor probe + ML model that recommends crops and fertilizers.", likes: 254 },
];

const PLACEMENTS = [
  { role: "Software Engineer Intern", company: "Google", pkg: "₹60K/month", loc: "Bengaluru / Hybrid", deadline: "Apply by 30 Sept", tag: "Internship", tagClass: "tag-green" },
  { role: "Frontend Developer", company: "Zomato", pkg: "₹12 LPA", loc: "Gurugram", deadline: "Apply by 5 Oct", tag: "Full-time", tagClass: "tag-blue" },
  { role: "Data Analyst Trainee", company: "Deloitte", pkg: "₹7.5 LPA", loc: "Hyderabad", deadline: "Apply by 8 Oct", tag: "Full-time", tagClass: "tag-blue" },
  { role: "IoT Developer Intern", company: "Bosch", pkg: "₹35K/month", loc: "Pune", deadline: "Apply by 12 Oct", tag: "Internship", tagClass: "tag-green" },
];

const FACULTY = [
  { name: "Dr. Meera Kapoor", dept: "CSE • Head of Dept", exp: "18 yrs • AI/ML, Data Mining", init: "MK" },
  { name: "Prof. Rajesh Iyer", dept: "CSE • Associate Prof", exp: "12 yrs • Web Tech, DSA", init: "RI" },
  { name: "Dr. Anita Sharma", dept: "ECE • Professor", exp: "15 yrs • IoT, Embedded", init: "AS" },
  { name: "Prof. Vikram Rao", dept: "Mechanical • Asst. Prof", exp: "10 yrs • Robotics, CAD", init: "VR" },
];

const EVENTS = [
  { d: "24", m: "Sep", title: "CodeSprint 3.0", desc: "12-hr coding sprint • AUD 1 • 9 AM" },
  { d: "28", m: "Sep", title: "Industry Visit – Tech Park", desc: "CSE 3rd year • Bus from main gate" },
  { d: "02", m: "Oct", title: "Startup Pitch Day", desc: "E-Cell • Prize pool ₹50,000" },
  { d: "10", m: "Oct", title: "TechFest 2026 Inauguration", desc: "Main auditorium • Chief guest: ISRO scientist" },
];

const LEADERBOARD = [
  { rank: "🥇", name: "Priya Verma", sub: "Face ID Attendance • CSE", pts: 2450 },
  { rank: "🥈", name: "Team Nitro", sub: "CampusNav AR • CSE", pts: 2310 },
  { rank: "🥉", name: "Team Green", sub: "AgriBot • Agri Engg", pts: 2180 },
  { rank: "4", name: "Team Volt", sub: "Smart Water Monitor • ECE", pts: 1870 },
  { rank: "5", name: "Web Club", sub: "EduSphere Lite • IT", pts: 1750 },
];

const ROADMAPS = {
  web: [
    { t: "HTML & CSS Basics", d: "Semantic HTML, Flexbox, Grid, responsive design, one landing page project." },
    { t: "JavaScript Deep Dive", d: "DOM, ES6, async/await, fetch API, 2 mini projects (todo, weather app)." },
    { t: "React + Tailwind", d: "Components, hooks, router, state management. Build a dashboard clone." },
    { t: "Backend Basics", d: "Node.js, Express, MongoDB/SQL. Build & deploy a full-stack app." },
    { t: "Interview Prep", d: "DSA in JS, 100+ problems, resume + portfolio site, mock interviews on EduSphere." },
  ],
  data: [
    { t: "Python & Maths", d: "NumPy, Pandas, statistics, probability fundamentals." },
    { t: "Data Visualization", d: "Matplotlib, Seaborn, dashboards with real datasets." },
    { t: "Machine Learning", d: "Regression, classification, clustering, scikit-learn projects." },
    { t: "Deep Learning & SQL", d: "Neural networks basics, TensorFlow intro, advanced SQL." },
    { t: "Portfolio & Internship", d: "3 Kaggle notebooks, GitHub profile, apply via placement drives." },
  ],
  cyber: [
    { t: "Networking & Linux", d: "TCP/IP, Linux CLI, bash scripting, virtual labs." },
    { t: "Security Fundamentals", d: "CIA triad, cryptography basics, common attacks." },
    { t: "Ethical Hacking", d: "Nmap, Burp Suite, OWASP Top 10, TryHackMe rooms." },
    { t: "Certifications", d: "CompTIA Security+ → CEH path with practice exams." },
    { t: "CTFs & SOC Roles", d: "Join CTF team, build writeups, apply for SOC analyst internships." },
  ],
};

/* ---------------- HELPERS ---------------- */

function el(id) { return document.getElementById(id); }

function cardHTML(icon, title, meta, extra = "") {
  return `
    <div class="card">
      <div style="font-size:1.8rem">${icon}</div>
      <h3>${title}</h3>
      <p>${meta}</p>
      ${extra}
    </div>`;
}

/* ---------------- NOTES ---------------- */

let noteFilter = "all";

function renderNotes() {
  const q = el("noteSearch").value.toLowerCase();
  const grid = el("notesGrid");
  const list = NOTES.filter(n =>
    (noteFilter === "all" || n.type === noteFilter) &&
    (n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q))
  );
  grid.innerHTML = list.length
    ? list.map(n => cardHTML(n.icon, n.title, n.meta, `<span class="tag tag-purple">${n.type}</span>`)).join("")
    : `<p class="muted">No resources found. Try a different search.</p>`;
}

/* ---------------- PROJECTS ---------------- */

let projFilter = "all";

function renderProjects() {
  const q = el("projSearch").value.toLowerCase();
  const grid = el("projGrid");
  const list = PROJECTS.filter(p =>
    (projFilter === "all" || p.tags.includes(projFilter)) &&
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.by.toLowerCase().includes(q))
  );
  grid.innerHTML = list.length
    ? list.map(p => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p class="muted" style="font-size:0.8rem;margin:6px 0">👤 ${p.by}</p>
        <div class="badges" style="justify-content:flex-start">
          ${p.tags.map(t => `<span class="tag tag-blue">${t}</span>`).join("")}
          <span class="tag tag-orange">❤ ${p.likes}</span>
        </div>
        <button class="btn btn-small" style="margin-top:12px" onclick="alert('Live demo coming soon! 🚀')">▶ Live Demo</button>
      </div>`).join("")
    : `<p class="muted">No projects match your filter.</p>`;
}

/* ---------------- STATIC GRIDS ---------------- */

function renderPlacements() {
  el("placementGrid").innerHTML = PLACEMENTS.map(p => `
    <div class="card">
      <span class="tag ${p.tagClass}">${p.tag}</span>
      <h3>${p.role}</h3>
      <p style="font-weight:700;color:var(--text)">${p.company}</p>
      <p>💰 ${p.pkg} &nbsp;•&nbsp; 📍 ${p.loc}</p>
      <p style="font-size:0.8rem">⏰ ${p.deadline}</p>
      <button class="btn btn-small" style="margin-top:10px" onclick="applyDrive('${p.company}')">Apply Now</button>
    </div>`).join("");
}

function renderFaculty() {
  el("facultyGrid").innerHTML = FACULTY.map(f => `
    <div class="card" style="text-align:center">
      <div class="avatar" style="width:64px;height:64px;font-size:1.1rem">${f.init}</div>
      <h3>${f.name}</h3>
      <p>${f.dept}</p>
      <p style="font-size:0.8rem">🎓 ${f.exp}</p>
      <button class="btn btn-small" style="margin-top:10px" onclick="alert('Appointment request sent to ${f.name} ✅')">Book Slot</button>
    </div>`).join("");
}

function renderEvents() {
  el("eventList").innerHTML = EVENTS.map(e => `
    <div class="card event-card">
      <div class="event-date"><b>${e.d}</b><small>${e.m}</small></div>
      <div><h4>${e.title}</h4><p>${e.desc}</p></div>
    </div>`).join("");
}

function renderLeaderboard() {
  el("leaderboard").innerHTML = LEADERBOARD.map(l => `
    <div class="lb-row">
      <div class="lb-rank">${l.rank}</div>
      <div class="lb-name"><b>${l.name}</b><small>${l.sub}</small></div>
      <div class="lb-pts">${l.pts} pts</div>
    </div>`).join("");
}

/* ---------------- CAREER ROADMAP ---------------- */

function renderRoadmap(path) {
  el("roadmap").innerHTML = ROADMAPS[path].map((s, i) => `
    <div class="road-step">
      <div class="step-dot">${i + 1}</div>
      <div><h4>${s.t}</h4><p>${s.d}</p></div>
    </div>`).join("");
}

/* ---------------- HACKATHON REGISTER (SIM) ---------------- */

function registerHackathon(name) {
  alert("🎉 You're registered for " + name + "!\nTeam details will be emailed to you.");
}

function applyDrive(company) {
  alert("✅ Application submitted to " + company + "!\nStatus: Under review (simulation)");
}

/* ---------------- AI ASSISTANT (SIMULATED) ---------------- */

const BOT_RULES = [
  { k: ["dbms", "notes"], a: "📘 DBMS ke liye: <b>Unit 1–5 Summary</b> (46 pages, ⭐4.7) aur <b>Previous Year Questions</b> (2018–2025 solved) Notes section mein available hain. Filter 'PYQ' laga kar dekho!" },
  { k: ["dsa", "notes"], a: "📗 <b>DSA Complete Handwritten Notes</b> (84 pages, ⭐4.9) sabse popular hai. Uske saath practice ke liye 100+ problems solve karo — Dashboard par tumhara DSA progress 78% hai. Great going! 🔥" },
  { k: ["placement", "prepare"], a: "💼 Placement prep ka plan: <b>1)</b> Aptitude daily 30 min, <b>2)</b> DSA 2 problems/day, <b>3)</b> 2 core subjects revise, <b>4)</b> Resume ready rakho. Placement section mein open drives check karo — Google internship deadline 30 Sept hai! ⏰" },
  { k: ["internship"], a: "💼 Abhi 2 internships open hain: <b>Google SWE Intern</b> (₹60K/month) aur <b>Bosch IoT Intern</b> (₹35K/month). Placement section se apply kar sakte ho." },
  { k: ["web", "roadmap"], a: "🚀 Web Developer roadmap: <b>1)</b> HTML+CSS → <b>2)</b> JavaScript deep → <b>3)</b> React+Tailwind → <b>4)</b> Node/Express+DB → <b>5)</b> DSA + portfolio. Career section mein full roadmap with projects hai!" },
  { k: ["roadmap", "data"], a: "📊 Data Scientist path: Python+Maths → Visualization → ML → Deep Learning+SQL → Kaggle portfolio. Career section mein details hain!" },
  { k: ["roadmap", "cyber"], a: "🔐 Cyber Security path: Networking+Linux → Security basics → Ethical hacking (TryHackMe) → Security+/CEH → CTFs & SOC roles." },
  { k: ["event", "upcoming"], a: "📅 Upcoming: <b>CodeSprint 3.0</b> (24 Sep), <b>Industry Visit</b> (28 Sep), <b>Startup Pitch Day</b> (2 Oct), <b>TechFest 2026</b> (10 Oct). Events section mein details hain." },
  { k: ["hackathon"], a: "🚀 <b>Smart India Hackathon 2026</b> registration open hai (prize ₹10L)! EduSphere CodeSprint bhi 24 Sep ko hai. Hackathon section se register karo." },
  { k: ["exam", "test"], a: "📝 DBMS unit test <b>Friday</b> ko hai. DBMS PYQs solve kar lo — 70% questions pattern se aate hain. All the best! 💪" },
  { k: ["hi", "hello", "hey"], a: "Hello! 😊 Main EduBot hoon. Poocho: notes, placement prep, roadmap, events ya hackathons ke baare mein." },
  { k: ["thank"], a: "Anytime! 🤗 Keep learning, keep building! 🚀" },
];

function botReply(text) {
  const t = text.toLowerCase();
  for (const r of BOT_RULES) {
    if (r.k.every(k => t.includes(k))) return r.a;
  }
  return "🤔 Interesting question! Abhi main sirf in topics par trained hoon: <b>notes</b>, <b>placement prep</b>, <b>roadmaps</b>, <b>events</b>, <b>hackathons</b>. Inme se kuch poochho!";
}

function addMsg(text, who) {
  const body = el("chatBody");
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.innerHTML = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function sendChat() {
  const input = el("chatText");
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, "user");
  input.value = "";
  setTimeout(() => addMsg(botReply(text), "bot"), 600); // typing delay
}

function sendQuick(text) {
  addMsg(text, "user");
  setTimeout(() => addMsg(botReply(text), "bot"), 600);
}

/* ---------------- THEME TOGGLE ---------------- */

function initTheme() {
  const saved = localStorage.getItem("edusphere-theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    el("themeToggle").textContent = "☀️";
  }
  el("themeToggle").addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");
    el("themeToggle").textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("edusphere-theme", dark ? "dark" : "light");
  });
}

/* ---------------- MOBILE MENU ---------------- */

function initMenu() {
  const links = el("navLinks");
  el("menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ---------------- CHIP FILTER WIRING ---------------- */

function initFilters() {
  el("noteChips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      el("noteChips").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      noteFilter = chip.dataset.filter;
      renderNotes();
    });
  });

  el("projChips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      el("projChips").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      projFilter = chip.dataset.filter;
      renderProjects();
    });
  });

  el("careerChips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      el("careerChips").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderRoadmap(chip.dataset.path);
    });
  });

  el("noteSearch").addEventListener("input", renderNotes);
  el("projSearch").addEventListener("input", renderProjects);
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  initFilters();
  renderNotes();
  renderProjects();
  renderPlacements();
  renderFaculty();
  renderEvents();
  renderLeaderboard();
  renderRoadmap("web");
});
