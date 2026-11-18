const A = "/images/";

const chapters = [

  {

    nav: "Arrival",

    title: "Anushka Choubey.<br><i>Computer Science student.</i>",

    copy: "I build full-stack applications, browser extensions and interactive experiences.",

    image: "1.jpeg",

    pos: "center 54%",

    tone: "blue",

  },

  {

    nav: "About",

    eyebrow: "01 — ABOUT",

    title: "Learning how things work.<br><i>Building what could.</i>",

    copy: "I’m Anushka, a Computer Science student and developer interested in the systems behind interfaces — how applications are structured, how data moves, and how thoughtful engineering can make everyday experiences better.",

    image: "2.jpeg",

    pos: "center 55%",

    tone: "violet",

  },

  {

    nav: "Toolkit",

    eyebrow: "02 — TOOLKIT",

    title: "A broad stack.<br><i>A curious mind.</i>",

    copy: "I enjoy moving between frontend, backend and the systems that connect them.",

    image: "3.jpeg",

    pos: "center 48%",

    tone: "green",

  },

  {

    nav: "Projects",

    eyebrow: "03 — SELECTED WORK",

    title: "Things I’ve built,<br><i>tested and explored.</i>",

    copy: "A selection of independent builds, experiments and product work.",

    image: "4.jpeg",

    pos: "center 52%",

    tone: "amber",

  },

  {

    nav: "Experience",

    eyebrow: "04 — EXPERIENCE",

    title: "Learning through<br><i>real work.</i>",

    copy: "Internships that introduced me to collaborative development, delivery and real-world systems.",

    image: "5.jpeg",

    pos: "center 68%",

    tone: "blue",

  },

  {

    nav: "Journey",

    eyebrow: "05 — LEADERSHIP & RECOGNITION",

    title: "More than<br><i>the code.</i>",

    copy: "Workshops, student communities, competitions and product ideas.",

    image: "6.jpeg",

    pos: "center 54%",

    tone: "violet",

  },

  {

    nav: "Contact",

    eyebrow: "06 — CONTACT",

    title: "Have something<br><i>worth building?</i>",

    copy: "I’m open to internship and entry-level opportunities, collaborations and conversations about thoughtful software.",

    image: "7.jpeg",

    pos: "center 54%",

    tone: "violet",

  },

];

const projects = [

  {

    n: "01",

    name: "RECLAIM",

    logo: "reclaim.png",

    kind: "Chrome extension · Personalised discovery",

    status: "Ongoing",

    desc: "A user-controlled personalisation layer for the YouTube feed. RECLAIM builds a Taste Passport from interests, keywords, genres, moods, favourite channels and topics to see less of, then applies a weighted relevance score to make the feed feel more intentional.",

    idea: "Recommendation feeds can become repetitive and difficult to steer. RECLAIM explores a transparent layer of user preferences rather than replacing the platform or hiding how choices are made.",

    approach:

      "A Taste Passport captures explicit preferences. A weighted, rule-based relevance score is applied to already-rendered feed items, with Light, Balanced and Strict modes. Preferences persist locally through Chrome Storage.",

    contribution:

      "Designed the concept and extension architecture; built the preference system, scoring logic, feed processing and ranking, persistent settings, Spotify taste-import flow using OAuth 2.0 PKCE, and dashboard/assistant experience.",

    stack: [

      "JavaScript",

      "Manifest V3",

      "Chrome Storage",

      "Spotify Web API",

      "OAuth 2.0 PKCE",

    ],

    url: "https://github.com/Anushka-hiyu/reclaim",

    note: "Local unpacked extension; not published on the Chrome Web Store.",

  },

  {

    n: "02",

    logo: "forensic.jpeg",

    name: "VR FORENSIC CRIME SCENE",

    kind: "Godot · XR investigation simulation",

    status: "Completed",

    desc: "A simulated investigation experience in which a visitor explores a crime scene, examines suspicious objects and collects evidence. Built with Godot 4.6 and GDScript.",

    idea: "The project explores how an interactive 3D environment can guide a user through a structured evidence-gathering experience.",

    approach:

      "Scenes and environments were assembled programmatically, with interactive evidence points and collection logic forming the core investigation loop.",

    contribution:

      "Created the environments and scenes programmatically and implemented evidence collection and investigation interactions. Tested in simulation, not on a physical headset.",

    stack: ["Godot 4.6", "GDScript", "XR simulation"],

    note: "A headset-based test was not performed.",

  },

  {

    n: "03",

    logo: "rc.jpeg",

    name: "COACHINGMS",

    kind: "Full-stack · Management system",

    status: "Completed",

    desc: "A coaching institute management system independently developed for an internship interview round, bringing admin, student and teacher workflows into one application.",

    idea: "Coaching operations involve different users and repeated administrative tasks. The project brings common institute workflows into one role-aware application.",

    approach:

      "Separate Admin, Student and Teacher access, supported by modules for attendance, batches, subjects, notifications and dashboards.",

    contribution:

      "Independently built the application, including role-based authentication and separate access for Admin, Student and Teacher, plus the core management modules.",

    stack: ["Python", "Flask", "SQLite3", "HTML", "CSS", "JavaScript"],

    url: "https://github.com/Anushka-hiyu/coachingms",

    note: "Built independently as an interview-round project.",

  },

  {

    n: "04",

    name: "JACKERS",

    logo: "jackers.png",

    kind: "Founder-led product initiative · Fintech concept",

    status: "Demo · Research phase",

    desc: "A gamified finance-management concept exploring how tiered experiences, savings challenges and rewards might make healthier financial habits more engaging.",

    idea: "Traditional money tracking can feel like a chore. JACKERS explores whether progress, challenge design and meaningful rewards can make saving feel more approachable.",

    approach:

      "The concept includes a four-tier Suites structure, savings challenges and reward mechanics. Product feasibility and payment integration paths were considered while shaping the initial demo.",

    contribution:

      "Founder since August 2024. Led ideation, product direction, UX and feasibility research, and development of the initial demo. Co-founded with Rushda; product thinking and selected decisions were shared across the founding team.",

    stack: [

      "Product strategy",

      "UX research",

      "Prototyping",

      "Feasibility research",

    ],

    note: "Currently paused at demo stage while psychometric analysis is explored. Outcomes are design intentions, not measured results.",

  },

  {

    n: "05",

    logo: "ly.jpeg",

    name: "LYRICSDUMP",

    kind: "Python · Terminal creative utility",

    status: "Completed",

    desc: "A terminal-based synchronized text display inspired by lyric-video timing. Lines and pauses are manually timestamped; listeners play the audio separately.",

    idea: "A small experiment in synchronising text presentation with a separately played track, using manually authored timing.",

    approach:

      "A lightweight Python terminal interface controls line-by-line display and pauses based on configured timestamps.",

    contribution:

      "Built the timing and terminal presentation flow using Rich and Python utilities. Song lyrics are intentionally not reproduced in this portfolio.",

    stack: ["Python", "Rich", "colorsys", "sys", "time"],

    url: "https://github.com/Anushka-hiyu/Lyricsdump",

    note: "The application does not play or control music.",

  },

];

const skills = {

  Languages: ["Python", "Java", "C++", "JavaScript", "SQL"],

  Frontend: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],

  "Backend & APIs": ["Node.js", "Express", "Flask", "REST APIs"],

  Databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],

  "Tools & platforms": [

    "Git",

    "GitHub",

    "Postman",

    "Eclipse",

    "Godot",

    "Blender",

  ],

  "Current interests": [

    "Agentic AI",

    "System design",

    "DSA",

    "Computer networks",

  ],

};

const experience = [

  [

    "APR — OCT 2026",

    "Software Development Intern",

    "SDAC",

    "Worked on an ERP for a Netherlands-based company managing import and export operations. Used Java, MySQL, Eclipse and Tomcat while learning more about networking, servers and cloud concepts. Implementation details remain confidential.",

    ["Java", "MySQL", "Eclipse", "Tomcat"],

    "sdac.jpg",

  ],

  [

    "AUG 2025 — MAR 2026",

    "Software Development Intern",

    "Kaizennic",

    "Contributed in a team environment to ERP development, working with the MERN ecosystem, PostgreSQL, Cloudinary, Postman, cron jobs and supporting libraries. Company implementation details remain private.",

    ["MERN", "PostgreSQL", "Cloudinary", "Postman"],

    "kaizennic.png",

  ],

  [

    "FEB — JUL 2025",

    "Creative Intern · Video Editor",

    "Tasavvur Recruitment Services",

    "Created reels, promotional videos, brochures and presentations, including subtitles and supporting visual content.",

    ["Canva", "Video editing", "Visual communication"],

    "tasavvur.png",

  ],

];

const highlights = [

  [

    "2026",

    "Interview Ready: Building Your Professional Presence",

    "Planned & led · Tech Nexus",

    "Independently planned and conducted a professional-readiness workshop for FY and SY students on 26 September 2026.",

    "ir.jpeg"

  ],

  [

    "2026",

    "WebCraft Cloning",

    "Event judge",

    "Judged a website-cloning challenge for FY students, assessing UI accuracy and understanding of the underlying web technologies.",

    "web.jpeg"

  ],

  [

    "2024",

    "Presentomania · Neuromorphic Computing",

    "Second place · Team of three",

    "Presented neuromorphic computing with a three-person team in a CS-department competition.",

    "nc.jpg"

  ],

  [

    "2024–",

    "JACKERS",

    "Founder",

    "Led a gamified finance product concept; recognised in the interdepartmental ideation category and presented at an intercollegiate Shark Tank.",

    "jackers.png"

  ],

];

const $ = (s) => document.querySelector(s);

let current = 0,

  entered = false,

  musicOn = false,

  vol = 0.13,

  detailOpen = false,

  touchStart = 0;

const app = $("#app");

app.innerHTML = `<a class="skip" href="#sceneContent">Skip to portfolio content</a><audio id="greeting" src="/audio/shinobu-greeting.mp3" preload="auto"></audio><audio id="music" src="/audio/ambient-track.mp3" preload="none" loop></audio><div class="scene-bg" id="sceneBg"></div><div class="mist mist-a"></div><div class="mist mist-b"></div><div class="petals" aria-hidden="true"></div><div class="butterfly-layer" id="butterflyLayer" aria-hidden="true"><span class="butterfly butterfly-1"><i></i></span><span class="butterfly butterfly-2"><i></i></span><span class="butterfly butterfly-3"><i></i></span><span class="butterfly butterfly-4"><i></i></span><span class="butterfly butterfly-5"><i></i></span><span class="butterfly butterfly-6"><i></i></span><span class="butterfly butterfly-7"><i></i></span><span class="butterfly butterfly-8"><i></i></span></div><div class="grain"></div><div class="shade"></div><style>

.hero h2.hero-name {

  font-size: clamp(52px, 6.2vw, 88px);

  line-height: 0.98;

  letter-spacing: -0.065em;

  margin: 0 0 16px;

  font-weight: 700;

}

.hero h2.hero-name i { font-size: 0.82em; }

.hero .hero-role {

  font-family: "DM Mono", monospace;

  font-size: 9px;

  letter-spacing: 0.13em;

  color: #e5c4f5;

  margin-bottom: 18px;

  line-height: 1.8;

}

@media (max-width: 600px) {

  .hero h2.hero-name {

    font-size: clamp(42px, 11vw, 62px);

    letter-spacing: -0.055em;

  }

  .hero .hero-role { font-size: 8px; letter-spacing: 0.08em; }

}

</style><header class="topbar"><button class="menu-btn" id="menuBtn" type="button" aria-label="Open navigation" aria-expanded="false"><span aria-hidden="true">☰</span></button></header><section class="entry" id="entry"><div class="entry-text"><div class="eyebrow"><i></i></div><h1>ANUSHKA<br><em>SHRIKANT</em><br>CHOUBEY<span></span></h1><p>Computer Science student and software developer.<br>Interested in full-stack systems, product engineering and interactive experiences.</p><button class="enter-btn" id="enterBtn"> ENTER THE WORLD <b>↗</b></button><small></small></div><img class="shinobu" src="/images/shinobu.png" alt="Shinobu Kocho in her butterfly haori"><div class="entry-foot"><span>01 / 07</span> </div></section><nav class="nav" id="nav">${chapters.map((c, i) => `<button data-go="${i}"><small>0${i + 1}</small>${c.nav}</button>`).join("")}</nav><section class="scene-head" id="sceneHead"><div hidden><div class="eyebrow" id="eyebrow"></div><p id="place"></p></div><span id="count">01 / 07</span></section><main id="sceneContent" class="content"></main><div class="scene-figure" id="sceneFigure"><img src="/images/shinobu.png" alt="" aria-hidden="true"></div><div class="side-controls"><button id="prev" aria-label="Previous section">↑</button><div class="progress"><i id="progress"></i></div><button id="next" aria-label="Next section">↓</button></div><div class="soundbar"><button id="musicToggle" aria-label="Toggle background music">♫ <span>AMBIENCE OFF</span></button><input id="volume" type="range" min="0" max=".3" step=".01" value=".13" aria-label="Background music volume"><span class="sound-divider"></span><span class="hint">SCROLL OR USE ↑ ↓</span></div><footer class="footer"><span> Scroll using ↑ ↓ </span></footer><div class="detail-layer" id="detailLayer" hidden><article class="detail"><button class="close" id="closeDetail" aria-label="Close project detail"></button><div class="eyebrow" id="detailMeta"></div><div class="detail-brand" id="detailBrand"></div><h2 id="detailTitle"></h2><p class="detail-kind" id="detailKind"></p><div id="detailBody"></div><div class="tags" id="detailTags"></div><p class="note" id="detailNote"></p><a class="action" id="detailLink" target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a></article></div><div class="toast" id="toast" hidden>Audio could not start. Use the music control to try again.</div><div class="mobile-nav" id="mobileNav">${chapters.map((c, i) => `<button data-go="${i}">${c.nav}</button>`).join("")}</div>`;

const bg = $("#sceneBg"),

  content = $("#sceneContent"),

  entry = $("#entry"),

  greeting = $("#greeting"),

  music = $("#music");

function sectionHTML(i) {

  if (i === 0)

    return `<div class="hero"><h2 class="hero-name">Anushka<br><i>Shrikant Choubey.</i></h2><div class="hero-role">COMPUTER SCIENCE STUDENT · SOFTWARE DEVELOPER</div><p>${chapters[0].copy}</p><div class="actions"><button class="action" data-go="3">EXPLORE MY WORK ↗</button><button class="quiet" data-go="1">A LITTLE ABOUT ME →</button></div></div>`;

  if (i === 1)

    return `<article class="glass-panel"><div class="panel-label">01 — ABOUT</div><h2>About me.</h2><p>${chapters[1].copy}</p><p>I’ve worked across full-stack applications, browser extensions and interactive 3D environments. I’m currently exploring agentic AI, system design, data structures and algorithms, and computer networks.</p><div class="facts"><div><b>01</b><span>Full-stack<br>development</span></div><div><b>02</b><span>Product<br>thinking</span></div><div><b>03</b><span>Learning across<br>the stack</span></div></div><div class="panel-label sub">EDUCATION</div><div class="education"><div><b>TY B.Sc. Computer Science</b><span>Thakur College of Science and Commerce · Current</span></div><div><b>SY B.Sc. · Thakur College</b><span>Sem 3: 9.0 CGPA · Sem 4: 8.09 CGPA</span></div><div><b>FY B.Sc. · Royal College</b><span>Sem 1: 9.45 CGPA · Sem 2: 9.55 CGPA</span></div><div><b>Earlier academics</b><span>HSC: 89.5% · SSC: 90%</span></div></div></article>`;

  if (i === 2)

    return `<article class="glass-panel"><div class="panel-label">02 — TECHNICAL TOOLKIT</div><h2>Technical toolkit.</h2><p>${chapters[2].copy}</p><div class="skills">${Object.entries(

      skills,

    )

      .map(

        ([k, v]) =>

          `<section><h3>${k}</h3><div>${v.map((x) => `<span>${x}</span>`).join("")}</div></section>`,

      )

      .join(

        "",

      )}</div><div class="panel-label sub">CURRENTLY EXPLORING</div><p>System design  |  Agentic AI</p></article>`;

  if (i === 3)

    return `<article class="glass-panel work-panel"><div class="panel-label">03 — SELECTED PROJECTS <span>05 ENTRIES</span></div><div class="projects">${projects.map((p, j) => `<button class="project" data-project="${j}">${p.logo ? `<span class="project-brand"><img src="${A}logos/${p.logo}" alt="${p.name} logo"></span>` : `<span class="num">${p.n}</span>`}<span class="project-copy"><b>${p.name}</b><small>${p.kind}</small></span><em>${p.status}</em><strong>↗</strong></button>`).join("")}</div><p class="fineprint">SELECTED WORK  |  CONFIDENTIAL INTERNSHIP SYSTEMS ARE NOT SHOWN</p></article>`;

  if (i === 4)

    return `<article class="glass-panel"><div class="panel-label">04 — EXPERIENCE</div><h2>Learning through<br><i>real work.</i></h2><div class="timeline">${experience.map((e) => `<section><time>${e[0]}</time><div class="experience-entry">${e[5] ? `<img class="experience-logo" src="${A}logos/${e[5]}" alt="${e[2]} logo">` : ""}<div><h3>${e[1]}</h3><b>${e[2]}</b><p>${e[3]}</p><div class="pills">${e[4].map((t) => `<span>${t}</span>`).join("")}</div></div></div></section>`).join("")}</div></article>`;

  if (i === 5)

    return `<article class="glass-panel"><div class="panel-label">05 — LEADERSHIP & RECOGNITION</div><h2>Leadership &amp; recognition.</h2><div class="highlights">${highlights.map((h) => `
  <section class="highlight-entry">
    <time>${h[0]}</time>
    <div class="highlight-content">
      ${h[4] ? `
        <img
          class="highlight-logo"
          src="${A}logos/${h[4]}"
          alt="${h[1]} logo"
        >
      ` : ""}
      <div>
        <h3>${h[1]}</h3>
        <b>${h[2]}</b>
        <p>${h[3]}</p>
      </div>
    </div>
  </section>
`).join("")}</div><div class="community"><img src="${A}logos/tech-nexus.png" alt="Tech Nexus logo"><div><b>COMMUNITY</b><span>Coding Club · Thakur Placement Cell</span></div></div></article>`;

  return `<article class="glass-panel contact-panel"><div class="panel-label">06 — CONTACT</div><h2>Get in touch.</h2><p>${chapters[6].copy}</p><a class="email" href="mailto:chaubeyanush2006@gmail.com">chaubeyanush2006@gmail.com ↗</a><div class="contact-links"><a href="https://github.com/Anushka-hiyu" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/anushka-chaturvedi-080495297/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="/docs/Anushka-Choubey-Resume.pdf" download>RESUME ↓</a></div><p class="contact-note">OPEN TO INTERNSHIPS  |  ENTRY-LEVEL ROLES  |  COLLABORATIONS</p></article>`;

  }

function render() {

  const c = chapters[current];

  bg.style.backgroundImage = `url("${A + c.image}")`;

  bg.style.backgroundPosition = c.pos;

  bg.dataset.tone = c.tone;

  $("#eyebrow").innerHTML = `<i></i>${c.eyebrow}`;

  $("#place").textContent = c.place || "";

  $("#count").textContent = `0${current + 1} / 07`;

  content.innerHTML = sectionHTML(current);

  content.classList.remove("appear");

  void content.offsetWidth;

  content.classList.add("appear");

  $("#progress").style.height = `${((current + 1) / 7) * 100}%`;

  $("#progress").style.setProperty(

    "--progress",

    `${((current + 1) / 7) * 100}%`,

  );

  $("#prev").disabled = current === 0;

  $("#next").disabled = current === 6;

  document

    .querySelectorAll(".nav button,.mobile-nav button")

    .forEach((b) =>

      b.classList.toggle("active", Number(b.dataset.go) === current),

    );

  $("#sceneFigure").classList.add("show");

}

function go(i) {

  current = Math.max(0, Math.min(6, i));

  render();

  $("#mobileNav").classList.remove("open");
  $("#menuBtn").setAttribute("aria-expanded", "false");
  $("#menuBtn").setAttribute("aria-label", "Open navigation");
  $("#menuBtn").querySelector("span").textContent = "☰";

}

function startTrack() {

  music.volume = vol;

  music

    .play()

    .then(() => {

      musicOn = true;

      $("#musicToggle").innerHTML = "♫ <span>AMBIENCE ON</span>";

    })

    .catch(() => {

      $("#toast").hidden = false;

    });

}

async function enter() {

  if (entered) return;

  entered = true;

  entry.classList.add("leave");

  setTimeout(() => {

    entry.hidden = true;
    entry.style.display = "none";

    document.body.classList.add("entered");

    render();

  }, 650);

  try {

    greeting.currentTime = 0;

    await greeting.play();

  } catch (e) {

    console.warn("Greeting audio failed:", e);

    $("#toast").hidden = false;

    startTrack();

  }

}

$("#enterBtn").addEventListener("click", enter);

greeting.addEventListener("ended", startTrack);

$("#musicToggle").addEventListener("click", () => {

  if (musicOn) {

    music.pause();

    musicOn = false;

    $("#musicToggle").innerHTML = "♫ <span>AMBIENCE OFF</span>";

  } else startTrack();

});

$("#volume").addEventListener("input", (e) => {

  vol = Number(e.target.value);

  music.volume = vol;

});

$("#prev").addEventListener("click", () => go(current - 1));

$("#next").addEventListener("click", () => go(current + 1));

$("#menuBtn").addEventListener("click", () => {
  const menu = $("#mobileNav");
  const isOpen = menu.classList.toggle("open");
  $("#menuBtn").setAttribute("aria-expanded", String(isOpen));
  $("#menuBtn").setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  $("#menuBtn").querySelector("span").textContent = isOpen ? "×" : "☰";
});

document.addEventListener("click", (e) => {

  const n = e.target.closest("[data-go]");

  if (n && entered) go(Number(n.dataset.go));

  const p = e.target.closest("[data-project]");

  if (p) openProject(Number(p.dataset.project));

});

$("#closeDetail").addEventListener("click", closeProject);

$("#detailLayer").addEventListener("click", (e) => {

  if (e.target.id === "detailLayer") closeProject();

});

function openProject(i) {

  const p = projects[i];

  $("#detailMeta").textContent = `PROJECT ${p.n} · ${p.status}`;

  $("#detailTitle").textContent = p.name;

  $("#detailKind").textContent = p.kind;

  $("#detailBrand").innerHTML = p.logo

    ? `<img src="${A}logos/${p.logo}" alt="${p.name} logo">`

    : "";

  $("#detailBody").innerHTML =

    `<h4>OVERVIEW</h4><p>${p.desc}</p><h4>THE IDEA</h4><p>${p.idea}</p><h4>APPROACH</h4><p>${p.approach}</p><h4>MY CONTRIBUTION</h4><p>${p.contribution}</p>`;

  $("#detailTags").innerHTML = p.stack.map((x) => `<span>${x}</span>`).join("");

  $("#detailNote").textContent = p.note;

  $("#detailLink").hidden = !p.url;

  if (p.url) $("#detailLink").href = p.url;

  $("#detailLayer").hidden = false;

  detailOpen = true;

}

function closeProject() {

  $("#detailLayer").hidden = true;

  detailOpen = false;

}

document.addEventListener("keydown", (e) => {

  if (!entered) return;

  if (e.key === "Escape") {

    closeProject();

    $("#mobileNav").classList.remove("open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
    $("#menuBtn").setAttribute("aria-label", "Open navigation");
    $("#menuBtn").querySelector("span").textContent = "☰";

  }

  if (detailOpen) return;

  if (["ArrowDown", "PageDown", " "].includes(e.key)) {

    e.preventDefault();

    go(current + 1);

  }

  if (["ArrowUp", "PageUp"].includes(e.key)) {

    e.preventDefault();

    go(current - 1);

  }

});

let wheelLock = false;

window.addEventListener(

  "wheel",

  (e) => {

    if (!entered || detailOpen || wheelLock || Math.abs(e.deltaY) < 35) return;

    if (e.target.closest(".content, .detail")) return;

    wheelLock = true;

    go(current + (e.deltaY > 0 ? 1 : -1));

    setTimeout(() => (wheelLock = false), 850);

  },

  { passive: true },

);

window.addEventListener(

  "touchstart",

  (e) => {

    touchStart = e.changedTouches[0].clientY;

  },

  { passive: true },

);

window.addEventListener(

  "touchend",

  (e) => {

    if (!entered || detailOpen) return;

    const d = touchStart - e.changedTouches[0].clientY;

    if (Math.abs(d) > 60) go(current + (d > 0 ? 1 : -1));

  },

  { passive: true },

);

window.addEventListener("pointermove", (e) => {

  if (matchMedia("(pointer:fine)").matches) {

    bg.style.setProperty("--px", `${(e.clientX / innerWidth - 0.5) * 12}px`);

    bg.style.setProperty("--py", `${(e.clientY / innerHeight - 0.5) * 8}px`);

  }

});

render();