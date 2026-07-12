document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const skillIcon = (path) =>
  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${path}</svg>`;

const SKILLS = [
  {
    title: "Adobe Experience Manager",
    icon: skillIcon('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>'),
    detail: "12+ years architecting AEM components, templates, and authoring workflows across Verizon's consumer web properties, including a 500,000+ URL platform migration.",
  },
  {
    title: "Frontend architecture & components",
    icon: skillIcon('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>'),
    detail: "Led the migration of a 50+ component legacy framework to a modern, design-system-aligned library, establishing a single source of truth org-wide.",
  },
  {
    title: "Engineering team leadership",
    icon: skillIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    detail: "Lead an 11-person distributed engineering team across the US, Costa Rica, and India, recruiting, mentoring, and retaining talent through organizational change.",
  },
  {
    title: "CI/CD pipeline management",
    icon: skillIcon('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M18 6a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/>'),
    detail: "Established governance across Alpha, Beta, Canary, Staging, and Production — resolving recurring deployment failures and eliminating a critical single point of failure.",
  },
  {
    title: "Email platform engineering",
    icon: skillIcon('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
    detail: "Own marketing and transactional email systems built on Adobe Journey Optimizer and Adobe Campaign Classic, serving millions of Verizon customers.",
  },
  {
    title: "Accessibility compliance",
    icon: skillIcon('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1.5"/><path d="M12 8v.01M8 12h8M9 20l1.5-6M15 20l-1.5-6"/>'),
    detail: "Drove adoption of an internal AI-assisted accessibility checker, embedding WCAG/ARIA compliance directly into the component development workflow.",
  },
  {
    title: "Cross-channel personalization",
    icon: skillIcon('<path d="M4 4h16v16H4z" opacity="0"/><path d="M3 12h18M12 3v18"/><circle cx="12" cy="12" r="9"/>'),
    detail: "Co-led the initiative that split Verizon's homepage into prospect and authenticated-customer experiences, coordinating six teams through phased rollouts.",
  },
  {
    title: "AI-assisted development",
    icon: skillIcon('<path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h1V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z"/><path d="M9 21h6"/>'),
    detail: "Champion agentic coding workflows across the team, accelerating defect resolution and reducing manual QA effort on day-to-day delivery work.",
  },
  {
    title: "Technical roadmap & strategy",
    icon: skillIcon('<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>'),
    detail: "Own the strategic roadmap for frontend development, aligning engineering capacity with product and marketing priorities across quarterly release cycles.",
  },
];

const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map(
  (skill, i) => `
  <div class="skill-card" data-index="${i}">
    <div class="skill-card-head">
      <div class="icon-badge">${skill.icon}</div>
      <div>
        <div class="skill-card-title">${skill.title}</div>
        <div class="skill-card-hint">Select to learn more</div>
      </div>
    </div>
    <div class="skill-card-detail">${skill.detail}</div>
  </div>
`
).join("");

skillsGrid.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("click", () => {
    const wasActive = card.classList.contains("active");
    skillsGrid.querySelectorAll(".skill-card").forEach((c) => c.classList.remove("active"));
    if (!wasActive) card.classList.add("active");
  });
});

const EXPERIENCE = [
  {
    title: "Associate Director, Frontend Engineering",
    company: "Verizon Consumer Group — Digital",
    dates: "May 2025 – Present",
    bullets: [
      "Lead an 11-person distributed engineering team (4 US, 1 Costa Rica, 6 India) responsible for frontend component development, email platform engineering, and digital content delivery.",
      "Architected and led migration of a 50+ component legacy framework to a modern, design-system-aligned component library.",
      "Drove adoption of AI-assisted development tooling, including an internal accessibility checker and agentic coding workflows.",
      "Launched and co-led a major homepage personalization initiative, splitting the consumer homepage into prospect and authenticated-customer experiences.",
      "Established CI/CD pipeline governance across Alpha, Beta, Canary, Staging, and Production, eliminating a critical single point of failure.",
      "Defined and executed AEM platform security strategy, transitioning 170+ users to a standardized role-based access model.",
    ],
  },
  {
    title: "Senior Manager, Frontend Development",
    company: "Verizon Consumer Group — Digital",
    dates: "Dec 2023 – May 2025",
    bullets: [
      "Defined and owned the strategic roadmap for frontend development across Verizon's consumer web and email platforms.",
      "Led cross-functional delivery of major consumer product launches, including flagship device releases and plan restructuring.",
      "Led the design and implementation of a cross-channel content sharing architecture in AEM, reducing redundant authoring effort by ~40%.",
      "Served as AEM and frontend subject matter expert, establishing coding standards and component governance adopted org-wide.",
    ],
  },
  {
    title: "Manager, Frontend Development",
    company: "Verizon Consumer Group — Digital",
    dates: "Apr 2020 – Dec 2023",
    bullets: [
      "Managed frontend development execution across AEM-based web and email platforms for a distributed engineering team.",
      "Coordinated onshore and offshore development, maintaining delivery velocity through the transition to fully remote operations.",
      "Led the implementation of Verizon's email platform component refresh, reducing per-campaign build time.",
      "Introduced structured code review, QA validation, and release management processes, reducing post-deployment rollbacks.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Verizon Consumer Group — Digital",
    dates: "Oct 2016 – Apr 2020",
    bullets: [
      "Designed, built, and maintained frontend solutions across Verizon's AEM-based digital properties for web and email channels.",
      "Led development of reusable AEM component sets used across multiple product lines.",
      "Contributed to the migration of Verizon.com to a component-based AEM architecture, including a 500,000+ URL restructuring effort.",
      "Managed coordination with offshore development partners, establishing documentation and handoff standards.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Verizon — Contract",
    dates: "Sep 2014 – Oct 2016",
    bullets: [
      "Developed and maintained frontend components and templates in AEM for Verizon's consumer digital properties.",
      "Supported cross-functional digital marketing campaigns and product page launches under tight release windows.",
      "Rapidly acquired AEM platform expertise, converting from contractor to full-time employee within two years based on performance.",
    ],
  },
  {
    title: "Web Developer & Digital Marketing Manager",
    company: "Berlitz Languages, Inc.",
    dates: "2011 – 2014",
    bullets: [
      "Owned web development, digital marketing, and online campaign strategy for eight web properties across Berlitz U.S., Canada, TMC, and SLTI.",
      "Achieved 450% ROAS in Q2 2014, a 75% year-over-year improvement, through optimized SEM, SEO, social, and email marketing.",
      "Improved lead generation by 46% and reduced cost per lead by 33% through conversion rate optimization and landing page redesign.",
      "Increased unique page views by 120%+ through SEO strategy, site architecture, and performance optimization.",
    ],
  },
];

const experienceList = document.getElementById("experienceList");
const experienceDetail = document.getElementById("experienceDetail");

function renderExperienceDetail(index) {
  const role = EXPERIENCE[index];
  experienceDetail.innerHTML = `
    <span class="experience-detail-dates">${role.dates}</span>
    <h3>${role.title}</h3>
    <p class="experience-detail-company">${role.company}</p>
    <ul>${role.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  `;
}

function renderExperienceList(activeIndex) {
  experienceList.innerHTML = EXPERIENCE.map(
    (role, i) => `
    <button class="experience-item${i === activeIndex ? " active" : ""}" data-index="${i}">
      <span>
        <span class="experience-item-title">${role.title}</span>
        <div class="experience-item-dates">${role.company} · ${role.dates}</div>
      </span>
      <svg class="experience-item-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `
  ).join("");

  experienceList.querySelectorAll(".experience-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      renderExperienceList(idx);
      renderExperienceDetail(idx);
    });
  });
}

renderExperienceList(0);
renderExperienceDetail(0);
