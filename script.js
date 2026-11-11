/* =========================================================
   CONTENT — edit these arrays to change the site
   ========================================================= */

const ICONS = {
  doc: '<svg viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5M8 11h6M11 8v6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  wave: '<svg viewBox="0 0 24 24"><path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10M21 12h0"/></svg>',
  chip: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
  server: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></svg>',
  graph: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M7.3 11 16.7 6M7.3 13l9.4 5"/></svg>',
  music: '<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  bulb: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/><path d="M2 10h1.5M20.5 10H22M4.6 3.6l1 1M19.4 3.6l-1 1"/></svg>',
  compass: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  hand: '<svg viewBox="0 0 24 24"><path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10M10 9.5v-6a1.5 1.5 0 0 1 3 0V10M13 9.5V5a1.5 1.5 0 0 1 3 0v6M16 9a1.5 1.5 0 0 1 3 0v4.5a7.5 7.5 0 0 1-7.5 7.5h-.6a6 6 0 0 1-4.6-2.2L3.5 15a1.6 1.6 0 0 1 2.4-2.1L7 14"/></svg>',
};
const GH_ICON = '<svg viewBox="0 0 24 24" class="fill"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>';

// Public projects — each links to its GitHub repo
const PROJECTS = [
  { title: "Voice Mentor (Rex)", tag: "GitHub · Python", metric: "Real-time voice + hybrid RAG", icon: "wave",
    bg: "linear-gradient(135deg,#0b3d16,#1db954 60%,#a8ff78)",
    url: "https://github.com/rickraph/Voice-mentor",
    desc: "A voice-first AI mentor: drop in PDFs and ask questions out loud — Rex answers in a natural voice, in real time. A FastAPI WebSocket server streams mic audio to the OpenAI Realtime API, retrieves from your documents through a 7-stage hybrid RAG pipeline (dense + BM25 + HyDE, reciprocal-rank fusion, FlashRank re-ranking, MMR) and speaks back with Cartesia TTS.",
    stack: ["OpenAI Realtime", "Cartesia TTS", "FastAPI", "WebSockets", "ChromaDB", "BM25", "FlashRank"] },
  { title: "AI LPT Examiner", tag: "GitHub · Multimodal", metric: "Automated language scoring", icon: "eye",
    bg: "linear-gradient(135deg,#1e3c72,#2a5298 50%,#6dd5ed)",
    url: "https://github.com/rickraph/AI_LPT_Examiner",
    desc: "An AI examiner for the RBI Language Proficiency Test. Multimodal models evaluate reading, writing and comprehension responses automatically — removing manual scoring.",
    stack: ["Gemini Vision", "Gemini Audio", "Python", "HTML"] },
  { title: "Capo", tag: "GitHub · Python", metric: "Win · macOS · Linux", icon: "music",
    bg: "linear-gradient(135deg,#f7b733,#fc4a1a)",
    url: "https://github.com/rickraph/Capo",
    desc: "An open-source, cross-platform chord-detection app for musicians — a modern, Linux-friendly alternative to Riffstation. It analyses MP3/WAV files with Librosa to predict chords, with tempo control (no pitch change), key shift, a virtual capo, beginner/advanced chord modes and an interactive waveform, in a PyQt6 desktop UI.",
    stack: ["Python", "Librosa", "PyQt6", "Audio DSP"] },
  { title: "Signwave", tag: "GitHub · Python", metric: "Speech → Indian Sign Language", icon: "hand",
    bg: "linear-gradient(135deg,#6a11cb,#b02ad8 55%,#ff5fa2)",
    url: "https://github.com/rickraph/Signwave",
    desc: "Turns live speech into Indian Sign Language. It captures audio from the microphone, recognises speech (Google Speech API online, Sphinx offline), preprocesses the text with NLP and shows matching ISL GIFs — spelling out unknown words letter by letter. Built to make information accessible to deaf users.",
    stack: ["Python", "Speech recognition", "NLP", "OpenCV"] },
  { title: "Vazhi", tag: "GitHub · Flutter + Gemini", metric: "A day in your future life", icon: "compass",
    bg: "linear-gradient(135deg,#0f9b8e,#1fd1c1 60%,#0b3d3a)",
    url: "https://github.com/rickraph/vazhi",
    desc: "\u201cA day in the life of\u201d \u2014 of your future self. Vazhi uses Gemini to generate a story of the day you\u2019re working towards, plus daily tasks that nudge you there. Gemini-powered FastAPI backend on Google Cloud, cross-platform Flutter app.",
    stack: ["Gemini", "FastAPI", "Google Cloud", "Flutter"] },
  { title: "Lumichat", tag: "GitHub · Flutter + Arduino", metric: "Messages sent with light", icon: "bulb",
    bg: "linear-gradient(135deg,#141e30,#243b55 60%,#ffd166)",
    url: "https://github.com/rickraph/lumichat",
    desc: "Data transmission through light (Li-Fi): a Flutter app on your phone sends messages by flashing light, and an Arduino receiver circuit decodes them and shows the text on an LCD.",
    stack: ["Flutter", "Dart", "Arduino", "Li-Fi"] },
];

// Work at Oliveboard — production systems; code is confidential (no links)
const WORK = [
  { title: "Vidya", tag: "Oliveboard · Confidential", metric: "~80% faster generation", icon: "doc",
    bg: "linear-gradient(135deg,#0b3d16,#13a83a 60%,#0a5a1e)",
    desc: "Automated document-generation pipeline built on FastAPI and the OpenAI Batch API, orchestrated by a LangGraph agent. Cut generation time by ~80% across multiple content domains.",
    stack: ["LangGraph", "FastAPI", "OpenAI Batch API"] },
  { title: "TranslateLab v2", tag: "Oliveboard · Confidential", metric: "12 languages · ~85% faster", icon: "globe",
    bg: "linear-gradient(135deg,#032a0d,#0c8a2e 60%,#06401a)",
    desc: "Multilingual document-processing pipeline supporting 12 languages, with a human-review step before translation. Reduced end-to-end turnaround by ~85%.",
    stack: ["LLMs", "Human-in-the-loop", "PyMuPDF"] },
  { title: "Hybrid RAG Pipeline", tag: "Oliveboard · Confidential", metric: "+85% answer accuracy", icon: "search",
    bg: "linear-gradient(135deg,#011606,#0f7a2a 60%,#1fc84c)",
    desc: "ChromaDB + BM25 + FlashRank retrieval system grounded on enterprise knowledge bases, improving answer accuracy by 85%.",
    stack: ["ChromaDB", "BM25", "FlashRank"] },
  { title: "PYP Automation Suite", tag: "Oliveboard · Confidential", metric: "~98% less processing time", icon: "bolt",
    bg: "linear-gradient(135deg,#06401a,#1db954 55%,#0b3d16)",
    desc: "Automated document parsing and structured data extraction via GPT-4.1, reducing processing time by ~98%.",
    stack: ["GPT-4.1", "Structured outputs", "Python"] },
  { title: "MCQ Eval Harness", tag: "Oliveboard · Confidential", metric: "Generate → Check → Retry", icon: "check",
    bg: "linear-gradient(135deg,#032a0d,#075a1d 55%,#13a83a)",
    desc: "A generate, check, retry and escalate pipeline that validates generated questions and informs difficulty calibration in Vidya.",
    stack: ["LLM evaluation", "Feedback loops"] },
  { title: "Production DevOps", tag: "Oliveboard · Confidential", metric: "9+ tools live", icon: "server",
    bg: "linear-gradient(135deg,#010a03,#0c6b22 60%,#1fc84c)",
    desc: "Deployed and maintained 9+ internal tools as production-grade services on Ubuntu with Nginx and Gunicorn, Systemd auto-healing and SSL/TLS for secure WSS.",
    stack: ["Nginx", "Gunicorn", "Systemd", "SSL/TLS"] },
];

const SERVICES = [
  { name: "RAG & Retrieval Systems", note: "Hybrid search · re-ranking · grounded answers", badge: "POPULAR", side: "Custom", icon: "search" },
  { name: "Agentic Workflows", note: "LangGraph agents that plan, act, retry & escalate", side: "Custom", icon: "graph" },
  { name: "Real-Time Voice Agents", note: "Full-duplex speech over low-latency WebSockets", side: "Custom", icon: "wave" },
  { name: "Multimodal AI Evaluation", note: "Vision + audio models that score at scale", side: "Custom", icon: "eye" },
  { name: "LLM Eval Harnesses", note: "Quality gates, feedback loops, calibration", side: "Custom", icon: "check" },
  { name: "Production Deployment", note: "FastAPI on Linux · Nginx · Systemd · TLS", side: "Custom", icon: "server" },
];

// Levels are self-assessed — tweak freely.
const SKILLS = [
  { name: "Python", note: "Primary language", lvl: 92 },
  { name: "RAG Architectures", note: "ChromaDB · BM25 · FlashRank", lvl: 90 },
  { name: "LangGraph / LangChain", note: "Graph-based agents", lvl: 88 },
  { name: "FastAPI & Flask", note: "Async APIs, WebSockets", lvl: 88 },
  { name: "LLM Evaluation", note: "Eval harnesses, feedback loops", lvl: 85 },
  { name: "Prompt Engineering", note: "OpenAI · Gemini · Ollama", lvl: 90 },
  { name: "Linux & Deployment", note: "Nginx · Gunicorn · Systemd", lvl: 84 },
  { name: "Databases", note: "PostgreSQL · SQLite · asyncpg", lvl: 80 },
  { name: "Docker & Git", note: "Containers, version control", lvl: 78 },
  { name: "SQL & Java", note: "Secondary languages", lvl: 72 },
];

const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/";
const TOOLS = [
  { name: "Python", slug: "python", c: "#ffd43b" },
  { name: "FastAPI", slug: "fastapi", c: "#05c3a6" },
  { name: "LangChain", slug: "langchain", c: "#3ddc97" },
  { name: "LangGraph", txt: "LG", c: "#ff6b6b" },
  { name: "OpenAI", slug: "openai", c: "#ffffff" },
  { name: "Gemini", slug: "googlegemini", c: "#a98bff" },
  { name: "Ollama", slug: "ollama", c: "#f2f2f2" },
  { name: "ChromaDB", txt: "Cr", c: "#ffb347" },
  { name: "PostgreSQL", slug: "postgresql", c: "#6a9bff" },
  { name: "Redis", slug: "redis", c: "#ff4438" },
  { name: "Docker", slug: "docker", c: "#2496ed" },
  { name: "Nginx", slug: "nginx", c: "#1fbf4a" },
  { name: "Ubuntu", slug: "ubuntu", c: "#e95420" },
  { name: "Git", slug: "git", c: "#f05032" },
  { name: "Postman", slug: "postman", c: "#ff6c37" },
];

/* =========================================================
   RENDER
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

// Project cards (GitHub ones get a direct "view code" link)
const cardHTML = (p, i, list) => {
  const fx = Math.round((Math.random() - 0.5) * 900) + "px";
  const fy = Math.round((Math.random() - 0.5) * 500) + "px";
  const fr = Math.round((Math.random() - 0.5) * 50) + "deg";
  return `
  <article class="proj" style="--i:${i};--fx:${fx};--fy:${fy};--fr:${fr};--bgc:${p.bg}" data-list="${list}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(p.title)} details">
    <div class="proj-cover"></div>
    <div class="proj-icon">${ICONS[p.icon]}</div>
    ${p.url ? `<a class="proj-gh" href="${p.url}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub">${GH_ICON}<span>Code</span></a>` : `<span class="proj-lock" title="Confidential — built at Oliveboard"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span>`}
    <div class="proj-meta">
      <div class="proj-tag">${esc(p.tag)}</div>
      <div class="proj-title">${esc(p.title)}</div>
      <span class="proj-metric">${esc(p.metric)}</span>
    </div>
  </article>`;
};
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => cardHTML(p, i, "p")).join("");
const workGrid = $("#workGrid");
workGrid.innerHTML = WORK.map((p, i) => cardHTML(p, i, "w")).join("");

// Services
$("#serviceList").innerHTML = SERVICES.map((s) => `
  <a href="#contact" class="svc">
    <span class="svc-ic">${ICONS[s.icon]}</span>
    <span class="svc-main"><b>${esc(s.name)}${s.badge ? `<span class="svc-badge">${s.badge}</span>` : ""}</b><small>${esc(s.note)}</small></span>
    <span class="svc-side"><small>Pricing</small><span>${esc(s.side)}</span></span>
    <span class="svc-go"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
  </a>`).join("");

// Skills
$("#skillList").innerHTML = SKILLS.map((s) => `
  <div class="skill glass reveal">
    <div class="skill-top"><b>${esc(s.name)}</b><em>${s.lvl}%</em></div>
    <small>${esc(s.note)}</small>
    <div class="bar"><i style="--lvl:${s.lvl}%"></i></div>
  </div>`).join("");

// Arsenal
$("#arsenal").innerHTML = TOOLS.map((t, i) => `
  <div class="tool" style="--i:${i};--c:${t.c}" title="${esc(t.name)}">
    ${t.slug ? `<span class="tool-ic" style="--m:url(${ICON_CDN}${t.slug}.svg)"></span>` : `<span class="tool-txt">${t.txt}</span>`}
    <span>${esc(t.name)}</span>
  </div>`).join("");

/* =========================================================
   PHOTO — uses assets/photo.png if present, otherwise the AI core
   ========================================================= */
const heroPhoto = $("#heroPhoto"), heroCore = $("#heroCore");
const aboutPhoto = $("#aboutPhoto"), initials = $("#aboutInitials");
// The glowing core always sits behind the portrait; without a photo it stands alone.
const heroVisual = $("#heroVisual");
const noPhoto = () => {
  heroPhoto.classList.add("hidden");
  heroVisual.classList.remove("has-photo");
  aboutPhoto.style.display = "none";
  initials.classList.add("show");
};
heroPhoto.addEventListener("error", noPhoto);
aboutPhoto.addEventListener("error", () => { aboutPhoto.style.display = "none"; initials.classList.add("show"); });
if (heroPhoto.complete && heroPhoto.naturalWidth === 0) noPhoto();

/* =========================================================
   INTERACTIONS
   ========================================================= */
// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal, .project-grid, .arsenal").forEach((el) => io.observe(el));

// Project modal
const modal = $("#modal"), modalBody = $("#modalBody");
const openModal = (list, i) => {
  const p = (list === "w" ? WORK : PROJECTS)[i];
  modalBody.innerHTML = `
    <p class="kicker">${esc(p.tag)} · ${esc(p.metric)}</p>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    ${p.url
      ? `<a class="btn btn-red modal-cta" href="${p.url}" target="_blank" rel="noopener">${GH_ICON} View on GitHub</a>`
      : `<p class="modal-note">Built at Oliveboard \u2014 the code is proprietary, so it isn\u2019t public. Happy to walk through the architecture in an interview.</p>`}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};
const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
[grid, workGrid].forEach((g) => {
  g.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;            // the "Code" link goes straight to GitHub
    const c = e.target.closest(".proj"); if (c) openModal(c.dataset.list, +c.dataset.i);
  });
  g.addEventListener("keydown", (e) => {
    if (e.target.closest("a")) return;
    const c = e.target.closest(".proj");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(c.dataset.list, +c.dataset.i); }
  });
});
$("#modalX").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// Mobile nav
const burger = $("#burger"), navLinks = $("#navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
}));

// One shared scroll position, read once per frame. Reading window.scrollY right
// after styles change forces the browser to redo layout, so hot paths use SY.
let SY = window.scrollY;

// Active nav link
// Section positions are measured once (and on resize/load), and the menu is only
// touched when the active section actually changes → no layout work while scrolling.
const sections = [...document.querySelectorAll("main section[id]")];
let sectionTops = [], activeId = undefined;
const measureSections = () => { sectionTops = sections.map((s) => [s.id, s.getBoundingClientRect().top + scrollY]); };
const onScroll = () => {
  let cur = null;
  for (const [id, top] of sectionTops) if (SY + 160 >= top) cur = id;
  if (cur === activeId) return;
  activeId = cur;
  navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
};
measureSections();
addEventListener("load", () => { measureSections(); onScroll(); });
addEventListener("resize", () => { measureSections(); onScroll(); });
onScroll();

// Contact form → opens the visitor's email app (no backend needed on GitHub Pages)
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const subject = `Portfolio enquiry from ${f.name.value}`;
  const body = `${f.message.value}\n\n— ${f.name.value} (${f.email.value})`;
  location.href = `mailto:ricksonraphelofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

$("#year").textContent = new Date().getFullYear();

/* =========================================================
   EXTRA MOTION
   ========================================================= */
const finePointer = matchMedia("(pointer: fine)").matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

// Cursor spotlight
const spot = $("#spot");
addEventListener("pointermove", (e) => { spot.style.left = e.clientX + "px"; spot.style.top = e.clientY + "px"; }, { passive: true });
if (!finePointer) spot.style.display = "none";

// 3D tilt on project cards
const tilt = (el, max, lift = 0) => {
  el.classList.add("tilt");
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(${-lift}px)`;
  });
  el.addEventListener("pointerleave", () => { el.style.transform = ""; });
};


// Heading "decode" scramble when it scrolls into view
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@$<>/\\01";
const scramble = (h) => {
  // ticks ~20×/s (not every frame) and locks the heading's size while decoding,
  // so each tick is a cheap repaint instead of a full re-layout
  const nodes = [...h.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim());
  const r = h.getBoundingClientRect();
  h.style.minWidth = r.width + "px"; h.style.minHeight = r.height + "px";
  nodes.forEach((n) => {
    const final = n.textContent, start = performance.now(), dur = 800;
    const tick = () => {
      const p = Math.min((performance.now() - start) / dur, 1);
      const reveal = Math.floor(p * final.length);
      n.textContent = final.split("").map((ch, i) =>
        i < reveal || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("");
      if (p < 1) setTimeout(tick, 50);
      else { n.textContent = final; h.style.minWidth = h.style.minHeight = ""; }
    };
    tick();
  });
};
const hio = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { scramble(e.target); hio.unobserve(e.target); }
}), { threshold: 0.6 });
document.querySelectorAll("h2").forEach((h) => hio.observe(h));

/* =========================================================
   HERO SPLIT — the hero is made of a few big glass slabs whose seams
   are the angled lines on the panel. Scrolling makes the seams glow,
   throws sparks, then the slabs separate in 3D and fly apart, and the
   stats panel rises out of the debris.
   ========================================================= */
const scene = $("#heroScene"), stage = $("#heroStage"), panel = $("#heroPanel");
const slabBox = $("#slabs"), statsEl = $("#stats"), hint = $("#scrollHint");
const easeIO = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Big cuts across the whole hero (percent of the panel). None of them
// touch the name, the text or the photo frame.
const SEAMS_DESKTOP = [[47, 0, 55, 100], [40, 0, 0, 22], [0, 88, 53.4, 80], [62, 0, 100, 20], [100, 76, 76, 100]];
const SEAMS_MOBILE = [[0, 50, 100, 44]];
const SLABS_DESKTOP = [
  { pts: [[40, 0], [47, 0], [53.4, 80], [0, 88], [0, 22]],                         // name + text
    to: { x: -0.42, y: -0.1, z: -260, rx: 8, ry: 38, rz: -6 }, start: 0.05 },
  { pts: [[47, 0], [62, 0], [100, 20], [100, 76], [76, 100], [55, 100]],           // photo frame
    to: { x: 0.36, y: -0.04, z: -220, rx: 12, ry: -36, rz: 5 }, start: 0.0 },
  { pts: [[0, 0], [40, 0], [0, 22]],                                               // top-left wedge
    to: { x: -0.3, y: -0.55, z: 120, rx: -55, ry: 35, rz: -40 }, start: 0.0 },
  { pts: [[0, 88], [53.4, 80], [55, 100], [0, 100]],                               // bottom strip
    to: { x: -0.1, y: 0.75, z: 80, rx: 60, ry: 10, rz: 8 }, start: 0.02 },
  { pts: [[62, 0], [100, 0], [100, 20]],                                           // top-right wedge
    to: { x: 0.3, y: -0.6, z: 140, rx: -50, ry: -35, rz: 45 }, start: 0.01 },
  { pts: [[100, 76], [100, 100], [76, 100]],                                       // bottom-right wedge
    to: { x: 0.32, y: 0.7, z: 120, rx: 55, ry: -30, rz: -35 }, start: 0.03 },
];
const SLABS_MOBILE = [
  { pts: [[0, 0], [100, 0], [100, 44], [0, 50]], to: { x: 0.08, y: -0.6, z: -200, rx: 28, ry: -12, rz: 5 }, start: 0 },
  { pts: [[0, 50], [100, 44], [100, 100], [0, 100]], to: { x: -0.12, y: 0.6, z: -160, rx: -24, ry: 12, rz: -6 }, start: 0.04 },
];
let slabs = [], slabsBuilt = false, slabMode = "";
const seamList = () => (innerWidth <= 820 ? SEAMS_MOBILE : SEAMS_DESKTOP);

// Draw the cuts as grooves in thick glass: dark core, glowing glass sides, bright highlight
const heroLines = panel.querySelector(".hero-lines");
const drawSeams = () => {
  heroLines.innerHTML = seamList().map(([x1, y1, x2, y2]) => {
    const d = `M${x1} ${y1} L${x2} ${y2}`;
    return `<path class="sg-shadow" d="${d}"/><path class="sg-glass" d="${d}"/><path class="sg-core" d="${d}"/><path class="sg-hi" d="${d}"/>`;
  }).join("");
};
drawSeams();

let gradId = 0;
// Rounded-corner outline (like an iPhone 7/8 edge): every corner becomes a smooth curve.
const roundedPath = (pts, r) => {
  const n = pts.length; let d = "";
  for (let i = 0; i < n; i++) {
    const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
    const la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
    const rr = Math.min(r, la / 2.4, lb / 2.4);
    const s1 = [p[0] + ((a[0] - p[0]) / la) * rr, p[1] + ((a[1] - p[1]) / la) * rr];
    const s2 = [p[0] + ((b[0] - p[0]) / lb) * rr, p[1] + ((b[1] - p[1]) / lb) * rr];
    d += `${i ? "L" : "M"}${s1[0].toFixed(1)} ${s1[1].toFixed(1)} Q${p[0].toFixed(1)} ${p[1].toFixed(1)} ${s2[0].toFixed(1)} ${s2[1].toFixed(1)} `;
  }
  return d + "Z";
};
const buildSlabs = () => {
  slabMode = innerWidth <= 820 ? "m" : "d";
  const defs = slabMode === "m" ? SLABS_MOBILE : SLABS_DESKTOP;
  slabBox.innerHTML = "";
  const proto = panel.cloneNode(true);
  proto.removeAttribute("id");
  proto.classList.remove("split", "charged");
  proto.style.transform = "";
  proto.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
  proto.querySelectorAll("a").forEach((n) => n.setAttribute("tabindex", "-1"));
  const pn = proto.querySelector(".hero-name");
  if (pn) { pn.innerHTML = "RICKSON<br />RAPHEL"; pn.style.minWidth = pn.style.minHeight = ""; }
  // Each piece is only as big as its own bounding box (not full-screen),
  // which keeps GPU memory low → no flicker, no lag.
  const W = panel.offsetWidth, H = panel.offsetHeight;
  const lite = document.documentElement.classList.contains("lite");
  const DEPTH_PX = 40;                                      // glass thickness
  const RADIUS = Math.max(18, Math.min(W, H) * 0.035);      // soft iPhone-like corner radius
  // outline of a rounded polygon as a polyline (straight edges + sampled corner curves)
  const outline = (pts, r) => {
    const n = pts.length, out = [];
    for (let i = 0; i < n; i++) {
      const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
      const la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const rr = Math.min(r, la / 2.4, lb / 2.4);
      const s1 = [p[0] + ((a[0] - p[0]) / la) * rr, p[1] + ((a[1] - p[1]) / la) * rr];
      const s2 = [p[0] + ((b[0] - p[0]) / lb) * rr, p[1] + ((b[1] - p[1]) / lb) * rr];
      const steps = lite ? 1 : 2;
      for (let k = 0; k <= steps; k++) {                     // quadratic curve s1 → p → s2
        const t = k / steps, u = 1 - t;
        out.push([u * u * s1[0] + 2 * u * t * p[0] + t * t * s2[0], u * u * s1[1] + 2 * u * t * p[1] + t * t * s2[1]]);
      }
    }
    return out;
  };
  slabs = defs.map((d) => {
    const xs = d.pts.map((p) => (p[0] / 100) * W), ys = d.pts.map((p) => (p[1] / 100) * H);
    const bx = Math.floor(Math.min(...xs)) - 2, by = Math.floor(Math.min(...ys)) - 2;
    const bw = Math.ceil(Math.max(...xs)) + 2 - bx, bh = Math.ceil(Math.max(...ys)) + 2 - by;
    const local = d.pts.map((p, i) => [xs[i] - bx, ys[i] - by]);
    const path = roundedPath(local, RADIUS);
    const clip = `path("${path}")`;
    const cx = local.reduce((a, p) => a + p[0], 0) / local.length, cy = local.reduce((a, p) => a + p[1], 0) / local.length;

    const el = document.createElement("div");
    el.className = "slab";
    Object.assign(el.style, { inset: "auto", left: bx + "px", top: by + "px", width: bw + "px", height: bh + "px", transformOrigin: `${cx}px ${cy}px` });

    // side walls: one thin strip per edge, standing at 90° behind the face
    const ring = outline(local, RADIUS);
    for (let i = 0; i < ring.length; i++) {
      const A = ring[i], B = ring[(i + 1) % ring.length];
      const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy);
      if (L < 0.5) continue;
      let nx = dy / L, ny = -dx / L;                                         // outward normal
      if (nx * ((A[0] + B[0]) / 2 - cx) + ny * ((A[1] + B[1]) / 2 - cy) < 0) { nx = -nx; ny = -ny; }
      const light = 0.5 + 0.5 * (-0.62 * nx - 0.78 * ny);                   // light from the top-left
      const hi = Math.round(150 + 105 * light), mid = Math.round(60 + 110 * light);
      const side = document.createElement("div");
      side.className = "slab-side";
      Object.assign(side.style, {
        width: (L + 0.8).toFixed(1) + "px", height: DEPTH_PX + "px",
        transform: `translate(${A[0].toFixed(1)}px, ${A[1].toFixed(1)}px) rotate(${Math.atan2(dy, dx)}rad) rotateX(-90deg)`,
        background: `linear-gradient(180deg, rgba(${Math.round(hi * 0.55)},${Math.min(255, hi + 20)},${Math.round(hi * 0.6)},.95), rgba(${Math.round(mid * 0.12)},${Math.round(mid * 0.8) + 30},${Math.round(mid * 0.3)},.95) 45%, rgba(1,18,6,.98))`,
      });
      el.appendChild(side);
    }
    const face = document.createElement("div");
    face.className = "slab-face";
    face.style.clipPath = clip;
    const clone = proto.cloneNode(true);
    Object.assign(clone.style, { position: "absolute", left: -bx + "px", top: -by + "px", width: W + "px", height: H + "px" });
    face.appendChild(clone);
    const g = `edge${++gradId}`;
    // iPhone-style 2.5D edge: soft curved glow band + polished band + bright hairline at the rim
    face.insertAdjacentHTML("beforeend", `
      <svg class="slab-bevel" viewBox="0 0 ${bw} ${bh}" width="${bw}" height="${bh}">
        <defs>
          <linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff" stop-opacity=".95"/>
            <stop offset=".35" stop-color="#0aff47" stop-opacity=".45"/>
            <stop offset=".7" stop-color="#0aff47" stop-opacity=".18"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".5"/>
          </linearGradient>
          <filter id="${g}b" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <path class="ed-curve" d="${path}" stroke="url(#${g})" filter="url(#${g}b)"/>
        <path class="ed-band" d="${path}" stroke="url(#${g})"/>
        <path class="ed-shade" d="${path}"/>
        <path class="ed-line" d="${path}"/>
      </svg>`);
    el.appendChild(face);
    slabBox.appendChild(el);
    return { el, ...d };
  });
  slabsBuilt = true;
  if (typeof attachSlabAnims === "function") attachSlabAnims(W, H);
};

// sparks burst out of the seams the moment the panel splits
let sparked = false;
const seamSparks = () => {
  const r = { width: geo.W }, panelH = geo.H, panelTop = panel.offsetTop;
  const seams = seamList();
  for (let k = 0; k < 24; k++) {
    const [x1, y1, x2, y2] = seams[k % seams.length], t = Math.random();
    const x = ((x1 + (x2 - x1) * t) / 100) * r.width, y = ((y1 + (y2 - y1) * t) / 100) * panelH + panelTop;
    const d = document.createElement("span");
    d.className = "seam-spark";
    d.style.left = x + "px"; d.style.top = y + "px";
    stage.appendChild(d);
    const ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 160;
    d.animate([
      { transform: "translate(-50%,-50%) scale(1.3)", opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist + 70}px)) scale(.2)`, opacity: 0 },
    ], { duration: 600 + Math.random() * 700, easing: "cubic-bezier(.15,.7,.35,1)" }).onfinish = () => d.remove();
  }
};

// stats count-up (re-runs every time the panel rises)
const statNums = [...statsEl.querySelectorAll(".stat-num")];
let statsShown = false, countRaf = 0;
const setCount = (k) => statNums.forEach((el) => { el.textContent = Math.round(+el.dataset.to * k) + (el.dataset.suffix || ""); });
const runCount = () => {
  cancelAnimationFrame(countRaf);
  const t0 = performance.now();
  const step = (now) => {
    const p = clamp((now - t0) / 1800);
    setCount(1 - Math.pow(1 - p, 4));
    if (p < 1) countRaf = requestAnimationFrame(step);
  };
  countRaf = requestAnimationFrame(step);
};
setCount(0);

// Geometry is measured once (and on resize) — never inside the scroll frame,
// so the browser never has to recalculate layout mid-animation.
const geo = { sceneTop: 0, sceneSpan: 1, W: 0, H: 0, projTop: 0, projSpan: 1, docMax: 1 };
const measure = () => {
  geo.sceneTop = scene.getBoundingClientRect().top + scrollY;
  geo.sceneSpan = Math.max(1, scene.offsetHeight - innerHeight);
  geo.W = stage.offsetWidth; geo.H = panel.offsetHeight;
  geo.projTop = projScene.getBoundingClientRect().top + scrollY;
  geo.projSpan = Math.max(1, projScene.offsetHeight - innerHeight);
  geo.docMax = Math.max(1, document.documentElement.scrollHeight - innerHeight);
};

/* Scroll-driven animations (Chrome/Brave/Edge): the browser runs the split,
   the stats rise and the hint fade on the compositor, tied to scroll position,
   completely off the main thread → butter smooth. Other browsers use the
   JS fallback below. */
const SDA = typeof window.ViewTimeline === "function";
const heroTL = SDA ? new ViewTimeline({ subject: scene, axis: "block" }) : null;
const IO_EASE = "cubic-bezier(.65,0,.35,1)";
const range = (a, b) => ({ rangeStart: `contain ${(a * 100).toFixed(2)}%`, rangeEnd: `contain ${(b * 100).toFixed(2)}%` });
const slabFinal = (t, W, H) =>
  `translate3d(${(t.x * W).toFixed(1)}px, ${(t.y * H).toFixed(1)}px, ${t.z}px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) rotateZ(${t.rz}deg)`;
function attachSlabAnims(W, H) {
  if (!SDA) return;
  slabs.forEach((s) => {
    const start = 0.07 + 0.53 * s.start;                    // piece starts moving
    s.el.animate([{ transform: "none" }, { transform: slabFinal(s.to, W, H) }],
      { timeline: heroTL, ...range(start, 0.6), easing: IO_EASE, fill: "both" });
    // fade the face + walls in the last part of the flight (not the slab: that would flatten 3D)
    const fadeFrom = start + (0.6 - start) * 0.55;
    [...s.el.children].forEach((n) => n.animate([{ opacity: 1 }, { opacity: 0 }],
      { timeline: heroTL, ...range(fadeFrom, 0.6), fill: "both" }));
  });
}
if (SDA) {
  statsEl.animate(
    [{ opacity: 0, transform: "translate(-50%, 30%) scale(.82)" }, { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }],
    { timeline: heroTL, ...range(0.38, 0.62), easing: IO_EASE, fill: "both" });
  hint.animate([{ opacity: 1 }, { opacity: 0 }], { timeline: heroTL, ...range(0, 0.04), fill: "both" });
}

const renderHero = () => {
  const p = clamp((SY - geo.sceneTop) / geo.sceneSpan);   // 0 → 1 through the scene

  // seams charge up just before the split
  const charged = p > 0.018;
  if (charged !== panel.classList.contains("charged")) panel.classList.toggle("charged", charged);

  // swap the intact hero for its pieces at the moment of the split
  const split = p > 0.07;
  if (split && !panel.classList.contains("split")) {
    const mode = innerWidth <= 820 ? "m" : "d";
    if (!slabsBuilt || mode !== slabMode) buildSlabs();
    panel.classList.add("split");
    if (!sparked) { sparked = true; seamSparks(); }
  } else if (!split && panel.classList.contains("split")) {
    panel.classList.remove("split");
    sparked = false;
  }

  // stats count-up trigger
  const st = clamp((p - 0.38) / 0.24);
  if (st > 0.5 && !statsShown) { statsShown = true; runCount(); }
  if (st < 0.05 && statsShown) { statsShown = false; cancelAnimationFrame(countRaf); setCount(0); }

  if (SDA) return;   // everything else runs on the compositor

  // ---- JS fallback (browsers without scroll-driven animations) ----
  hint.style.opacity = String(1 - clamp(p / 0.04));
  const b = clamp((p - 0.07) / 0.53);
  if (b > 0) {
    const W = geo.W, H = geo.H;
    slabs.forEach((s) => {
      const q = easeIO(clamp((b - s.start) / (1 - s.start)));
      const t = s.to;
      s.el.style.transform =
        `translate3d(${t.x * W * q}px, ${t.y * H * q}px, ${t.z * q}px) rotateX(${t.rx * q}deg) rotateY(${t.ry * q}deg) rotateZ(${t.rz * q}deg)`;
      const o = (1 - clamp((q - 0.6) / 0.4)).toFixed(3);
      if (s.o !== o) { s.o = o; s.el.style.setProperty("--o", o); }
    });
  } else {
    slabs.forEach((sl) => { sl.el.style.transform = ""; });
  }
  const se = easeIO(st);
  statsEl.style.opacity = String(se);
  statsEl.style.transform = `translate(-50%, ${lerp(30, -50, se)}%) scale(${lerp(0.82, 1, se)})`;
};

const prebuild = () => { if (!slabsBuilt) buildSlabs(); };
const whenIdle = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 600));
if (heroPhoto.complete) whenIdle(prebuild);
else heroPhoto.addEventListener("load", () => whenIdle(prebuild), { once: true });

/* =========================================================
   PROJECTS TUNNEL (desktop) — the grid starts deep inside the screen;
   scrolling pulls each card out of the distance toward you, slightly
   overshooting (bigger) before settling into place.
   ========================================================= */
const projScene = $("#projects");
const projCards = [...document.querySelectorAll("#projectGrid .proj")];
const tunnelOK = () => innerWidth > 900 && innerHeight > 620;
let tunnelOn = false;
// each card orbits in from deep space: it starts far away on a wide circle
// around the grid's vertical axis, sweeps around it while spiralling inward,
// turning to face you, and slides softly into its slot (no overshoot).
const flight = projCards.map((c, i) => ({
  el: c,
  a0: (i % 2 ? 1 : -1) * (150 + Math.random() * 120),   // degrees still to sweep
  r: 900 + Math.random() * 500,                         // orbit radius (px)
  depth: 1600 + Math.random() * 900,                    // how far back it starts
  y: (Math.random() - 0.5) * 420,
  tilt: (Math.random() - 0.5) * 30,
  start: i * 0.06,
}));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const orbitAt = (f, t) => {                    // card pose at progress t (0 → 1)
  const k = 1 - easeOut(t);
  const ang = (f.a0 * k) * Math.PI / 180, rad = f.r * k;
  const x = Math.sin(ang) * rad, z = (Math.cos(ang) - 1) * rad - f.depth * k;
  return {
    transform: `translate3d(${x.toFixed(1)}px, ${(f.y * k).toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${(f.a0 * k * 0.3).toFixed(2)}deg) rotateZ(${(f.tilt * k).toFixed(2)}deg)`,
    opacity: Math.min(1, t * 3),
  };
};
let projTL = null, tunnelAnims = [];
const setTunnel = () => {
  const on = tunnelOK();
  if (on === tunnelOn) return;
  tunnelOn = on;
  projScene.classList.toggle("tunnel", on);
  tunnelAnims.forEach((a) => a.cancel()); tunnelAnims = [];
  if (!on) { projCards.forEach((c) => { c.style.transform = ""; c.style.opacity = ""; }); return; }
  if (SDA) {
    projTL = projTL || new ViewTimeline({ subject: projScene, axis: "block" });
    flight.forEach((f) => {
      const frames = Array.from({ length: 17 }, (_, i) => orbitAt(f, i / 16));
      const a = f.start / 1.1, b = Math.min(1, (f.start + 0.5) / 1.1);
      tunnelAnims.push(f.el.animate(frames, { timeline: projTL, ...range(a, b), fill: "both" }));
    });
  }
};
const renderTunnel = () => {
  if (!tunnelOn || SDA) return;
  const p = clamp((SY - geo.projTop) / geo.projSpan);
  const span = 0.5;
  flight.forEach((f) => {
    const t = clamp((p * 1.1 - f.start) / span);
    const e = easeOut(t), k = 1 - e;
    const ang = (f.a0 * k) * Math.PI / 180;
    const rad = f.r * k;
    const x = Math.sin(ang) * rad;
    const z = (Math.cos(ang) - 1) * rad - f.depth * k;
    f.el.style.transform =
      `translate3d(${x.toFixed(1)}px, ${(f.y * k).toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${(f.a0 * k * 0.3).toFixed(2)}deg) rotateZ(${(f.tilt * k).toFixed(2)}deg)`;
    f.el.style.opacity = String(clamp(t * 3));
  });
};
setTunnel();

/* =========================================================
   SCROLL LOOP — Lenis gives inertial "butter" scrolling when loaded;
   native scrolling is the fallback. Everything renders in one rAF.
   ========================================================= */
const progress = $("#progress");
const renderAll = () => {
  renderHero();
  renderTunnel();
  onScroll();
  progress.style.transform = `scaleX(${clamp(SY / geo.docMax)})`;
};
let queued = false;
// fallback path (no Lenis): read the position at the very start of the frame, before any writes
const queue = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; SY = window.scrollY; renderAll(); }); } };
let rt = 0;
addEventListener("resize", () => {
  clearTimeout(rt);
  rt = setTimeout(() => { SY = window.scrollY; setTunnel(); drawSeams(); measure(); if (slabsBuilt) buildSlabs(); renderAll(); }, 120);
});
addEventListener("load", () => { SY = window.scrollY; measure(); renderAll(); });
measure();

if (window.Lenis) {
  // Lenis moves the page and we render in the very same frame → no 1-frame lag/judder
  const lenis = new Lenis({ lerp: 0.13, smoothWheel: true, wheelMultiplier: 1 });
  lenis.on("scroll", (l) => { SY = l.scroll; renderAll(); });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  addEventListener("scroll", () => { if (!lenis.isScrolling) queue(); }, { passive: true });   // e.g. keyboard / scrollbar drag
  // anchor links glide with Lenis too
  document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -70 });
  }));
} else {
  addEventListener("scroll", queue, { passive: true });
}
renderAll();

/* =========================================================
   DIGITAL RAIN — columns of falling green code behind the page.
   Drawn at a steady ~30 fps; scrolling makes the rain fall faster.
   The canvas fades old glyphs to transparent (not to black), so the
   background lights behind it still show through.
   ========================================================= */
(() => {
  const cv = $("#embers"), ctx = cv.getContext("2d");
  const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFZ:.=*+-<>¦|";
  let W, H, size, cols, drops = [], speeds = [], last = 0, lastY = SY, boost = 0;
  const resize = () => {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    size = innerWidth < 700 ? 14 : 16;
    cols = Math.ceil(W / size);
    drops = Array.from({ length: cols }, () => Math.random() * -H / size);
    speeds = Array.from({ length: cols }, () => 0.35 + Math.random() * 0.75);
    ctx.font = `${size}px "Share Tech Mono", ui-monospace, monospace`;
    ctx.textBaseline = "top";
  };
  const draw = (t) => {
    requestAnimationFrame(draw);
    const lite = document.documentElement.classList.contains("lite");
    if (t - last < (lite ? 66 : 33)) return;          // ~30 fps (15 in lite mode)
    last = t;
    const dy = Math.abs(SY - lastY); lastY = SY;
    boost = lerp(boost, Math.min(dy, 120), 0.2);
    const mul = 1 + boost * 0.04;                       // falls faster while you scroll

    ctx.globalCompositeOperation = "destination-out"; // fade trails to transparent
    ctx.fillStyle = "rgba(0,0,0,0.12)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "source-over";
    for (let i = 0; i < cols; i++) {
      const y = drops[i] * size, x = i * size;
      if (y > -size) {
        ctx.fillStyle = "#00e63a";                      // trail glyph
        ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], x, y - size);
        ctx.fillStyle = "#c9ffd6";                      // bright leading glyph
        ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], x, y);
      }
      drops[i] += speeds[i] * mul;
      if (y > H && Math.random() > 0.975) drops[i] = Math.random() * -20;
    }
  };
  addEventListener("resize", resize);
  resize(); requestAnimationFrame(draw);
})();

/* =========================================================
   AUTO "LITE" MODE — if this device can't keep up (e.g. the browser
   has no hardware acceleration), drop the purely decorative effects
   so scrolling stays smooth. Main animations stay on.
   ========================================================= */
(() => {
  let frames = 0, t0 = 0;
  const sample = (t) => {
    if (!t0) t0 = t;
    frames++;
    if (t - t0 < 2000) return requestAnimationFrame(sample);
    const fps = (frames * 1000) / (t - t0);
    if (fps < 42) {
      document.documentElement.classList.add("lite");
      if (slabsBuilt) buildSlabs();       // rebuild pieces with fewer layers
    }
  };
  setTimeout(() => requestAnimationFrame(sample), 1200);   // let the intro settle first
})();

/* =========================================================
   "HELLO, WORLD" INTRO — a short terminal boot sequence on every page
   load. Any click, key, scroll or touch skips it.
   ========================================================= */
(() => {
  const intro = $("#intro"), out = $("#introText");
  const heroName = document.querySelector(".hero-name");
  const decodeName = () => setTimeout(() => scramble(heroName), 150);
  if (!intro) { decodeName(); return; }   // plays on every page load

  const lines = [
    { text: "Hello, World.", speed: 70, pause: 550 },
    { text: "\n> loading portfolio: rickson_raphel", speed: 22, pause: 300 },
    { text: "\n> access granted", speed: 26, pause: 450 },
  ];
  let done = false, timer = 0;
  const finish = () => {
    if (done) return;
    done = true; clearTimeout(timer);
    intro.classList.add("out");
    setTimeout(() => intro.remove(), 700);
    decodeName();
  };
  let li = 0, ci = 0;
  const type = () => {
    if (done) return;
    const L = lines[li];
    if (ci < L.text.length) { out.textContent += L.text[ci++]; timer = setTimeout(type, L.speed); return; }
    li++; ci = 0;
    timer = setTimeout(li < lines.length ? type : finish, L.pause);
  };
  ["pointerdown", "keydown", "wheel", "touchstart"].forEach((ev) => addEventListener(ev, finish, { once: true, passive: true }));
  timer = setTimeout(type, 350);
})();
