// Portfolio Interactive Logic & Data Showcase
// NOTE: This is just a format of portfolio. All the data is collected randomly and by AI.

// 1. Projects Data
const projectsData = [
  {
    id: 1,
    title: "DevPulse - Cloud Architecture & Metrics Dashboard",
    category: "fullstack",
    tagline: "Real-time microservice monitoring, trace analysis & alerting engine",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    badge: "Featured",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    description: "High-throughput cloud observability platform processing over 12M events daily with sub-second querying, anomaly detection, and automated incident response.",
    metrics: "⚡ 65% faster root-cause analysis | 12M daily events handled",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Go Microservices", "PostgreSQL", "Redis", "Docker"],
    liveDemo: "https://example.com/demo/devpulse",
    github: "https://github.com/example/devpulse-platform",
    features: [
      "Real-time WebSocket telemetry visualizer with canvas-based graphs",
      "Custom query builder with instant filter execution under 80ms",
      "Role-Based Access Control (RBAC) and automated team alert escalations",
      "Fully responsive dark/light dashboard with accessible design"
    ]
  },
  {
    id: 2,
    title: "NeuroFlow - AI Workflow Automation Studio",
    category: "fullstack",
    tagline: "Visual drag-and-drop workflow canvas powered by LLM chains",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    badge: "Most Popular",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    description: "An intuitive node-based automation workspace that lets teams build multi-step AI reasoning pipelines and connect CRM, Slack, and REST APIs without coding.",
    metrics: "🚀 18,000+ active automations | 99.98% execution reliability",
    tech: ["React 18", "Tailwind CSS", "FastAPI", "Python", "LangChain", "Vector DB", "Redis"],
    liveDemo: "https://example.com/demo/neuroflow",
    github: "https://github.com/example/neuroflow-studio",
    features: [
      "Fluid node editor with interactive zooming, panning, and connection bezier curves",
      "Streaming markdown & code preview responses with zero latency jitter",
      "Integrated prompt playground with variable testing and model comparison",
      "Enterprise encryption for API credentials with secure vault integration"
    ]
  },
  {
    id: 3,
    title: "Vanguard UI - Enterprise Design System",
    category: "frontend",
    tagline: "Accessible, tokens-driven component library with 45+ UI primitives",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    badge: "Open Source",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    description: "Production-ready headless and styled component library built for rapid prototyping, accessibility compliance (WCAG 2.1 AAA), and extreme rendering performance.",
    metrics: "⭐ 2.4k GitHub Stars | 80k monthly npm downloads",
    tech: ["TypeScript", "Tailwind CSS", "Radix Primitives", "Storybook", "Framer Motion", "Rollup"],
    liveDemo: "https://example.com/demo/vanguard-ui",
    github: "https://github.com/example/vanguard-design-system",
    features: [
      "Full keyboard navigation and ARIA live announcement support",
      "Dynamic multi-brand design tokens system with seamless theme swapping",
      "Automated visual regression testing pipeline via GitHub Actions",
      "Zero-runtime CSS footprint with tree-shakeable atomic bundles"
    ]
  },
  {
    id: 4,
    title: "Aura Commerce - Next-Gen Headless Storefront",
    category: "frontend",
    tagline: "Sub-second page loads with edge caching and fluid 3D product previews",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    badge: "High Conversion",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    description: "High-performance e-commerce experience featuring dynamic search, optimistic cart mutations, three.js 3D model interaction, and localized checkout flows.",
    metrics: "📈 34% increase in mobile conversion | 99/100 Lighthouse score",
    tech: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "Stripe", "Three.js", "Zustand"],
    liveDemo: "https://example.com/demo/aura-commerce",
    github: "https://github.com/example/aura-ecommerce",
    features: [
      "Optimistic UI updates with instant cart state syncing across browser tabs",
      "Interactive 3D product inspection with customizable lighting and texture switching",
      "Comprehensive multi-currency support and automated tax calculation",
      "Edge middleware rendering localized currency and international landing banners"
    ]
  },
  {
    id: 5,
    title: "KubeScale - Serverless Deployment Orchestrator",
    category: "cloud",
    tagline: "CLI & Web Console for multi-region container deployments",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    badge: "Infrastructure",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    description: "Lightweight container orchestration console providing one-click rollouts, canary deployments, zero-downtime SSL provisioning, and log streaming.",
    metrics: "⏱️ Deployments reduced from 15m to 42s",
    tech: ["Node.js", "Kubernetes", "Tailwind CSS", "Docker", "GraphQL", "AWS ECS", "Terraform"],
    liveDemo: "https://example.com/demo/kubescale",
    github: "https://github.com/example/kubescale-orchestrator",
    features: [
      "Zero-downtime canary deployments with automatic rollbacks on error spike",
      "Live terminal streaming of build artifacts and container boot logs",
      "Automated Let's Encrypt TLS certificate generation and DNS challenge validation",
      "Resource allocation telemetry tracking CPU, memory, and bandwidth quotas"
    ]
  },
  {
    id: 6,
    title: "Zenith Pay - Cross-Border Payment Gateway",
    category: "fullstack",
    tagline: "Secure developer-first payments SDK & merchant transaction dashboard",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    badge: "FinTech",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    description: "Payment infrastructure supporting 40+ fiat currencies and instant settlement rails with built-in fraud scoring, invoice generation, and dispute mediation.",
    metrics: "🔒 PCI-DSS Level 1 compliant | $45M processed in 2025",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "Kafka"],
    liveDemo: "https://example.com/demo/zenithpay",
    github: "https://github.com/example/zenith-payment-gateway",
    features: [
      "Cryptographic webhook verification and idempotency protection against duplicate charges",
      "Interactive sandbox environment with simulated network errors and dispute testing",
      "Instant PDF invoice generator with localized language templates",
      "Real-time fraud rule scoring engine powered by rule-based heuristics"
    ]
  }
];

// 2. Technical Skills Data
const skillsData = [
  {
    name: "TypeScript & JavaScript",
    category: "frontend",
    level: 95,
    levelName: "Expert",
    experience: "5+ Years",
    icon: `<svg class="w-7 h-7 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm15.65 14.5c.88 0 1.5-.47 1.83-1.05.15-.27.2-.6.2-.95 0-1.07-.64-1.7-1.95-2.22l-.63-.26c-.84-.34-1.19-.7-1.19-1.25 0-.66.52-1.11 1.34-1.11.75 0 1.25.32 1.57.88.1.18.23.27.39.27.22 0 .39-.17.39-.39 0-.17-.07-.3-.18-.49-.44-.76-1.2-1.2-2.17-1.2-1.37 0-2.31.85-2.31 2.05 0 1.05.62 1.69 1.88 2.2l.62.25c.95.39 1.33.8 1.33 1.42 0 .82-.69 1.35-1.63 1.35-.95 0-1.64-.47-2.02-1.2-.09-.17-.22-.26-.39-.26-.22 0-.39.17-.39.39 0 .15.08.31.2.49.5 1 1.48 1.52 2.75 1.52zm-6.72-.18c.24 0 .42-.18.42-.42V8.98c0-.24-.18-.42-.42-.42h-3.4c-.24 0-.42.18-.42.42v.87c0 .24.18.42.42.42h2.21v7.05c0 .24.18.42.42.42h.77z"/></svg>`,
    desc: "Strictly typed scalable architectures, generics, AST utilities, modern ESNext patterns."
  },
  {
    name: "React & Next.js",
    category: "frontend",
    level: 94,
    levelName: "Expert",
    experience: "5+ Years",
    icon: `<svg class="w-7 h-7 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5z" clip-rule="evenodd"/></svg>`,
    desc: "App Router, Server Components, SSR/SSG, Suspense, custom hooks & performance tuning."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 96,
    levelName: "Mastery",
    experience: "4+ Years",
    icon: `<svg class="w-7 h-7 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>`,
    desc: "Responsive design, keyframe animations, dark mode palettes, design systems, JIT optimization."
  },
  {
    name: "Node.js & Express",
    category: "backend",
    level: 90,
    levelName: "Advanced",
    experience: "4+ Years",
    icon: `<svg class="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.2l6.8 3.9L12 12 5.2 8.1 12 4.2zm-7 5.1l6 3.5v7.2l-6-3.5V9.3zm14 7.2l-6 3.5v-7.2l6-3.5v7.2z"/></svg>`,
    desc: "High concurrency microservices, RESTful & GraphQL APIs, authentication, streams, worker threads."
  },
  {
    name: "Python & FastAPI",
    category: "backend",
    level: 85,
    levelName: "Proficient",
    experience: "3+ Years",
    icon: `<svg class="w-7 h-7 text-amber-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-3.1 0-5.8 2.2-6 5.3H12v1.4H4.5C2.5 8.7 1 10.3 1 12.3c0 2 1.5 3.7 3.5 3.7h1.4V14H4.5c-.8 0-1.5-.7-1.5-1.7 0-1 .7-1.7 1.5-1.7H12v-2H5.9c.2-2.1 2-3.7 4.1-3.7h4v2H12V5.9c2.1-.2 3.7-2 3.7-4.1V1H12v1zm4.1 7.9c-.2 2.1-2 3.7-4.1 3.7H8v-2h2v1.9c-2.1.2-3.7 2-3.7 4.1V18h4v-1c0-3.1 2.7-5.8 5.8-6h-4.1v-1.4h7.5c2 0 3.5-1.6 3.5-3.6 0-2-1.5-3.7-3.5-3.7h-1.4v2h1.4c.8 0 1.5.7 1.5 1.7 0 1-.7 1.7-1.5 1.7H12v2h4.1z"/></svg>`,
    desc: "Asynchronous backend endpoints, Pydantic validation, AI pipeline orchestration, data processing."
  },
  {
    name: "PostgreSQL & Prisma",
    category: "database",
    level: 88,
    levelName: "Advanced",
    experience: "4+ Years",
    icon: `<svg class="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.03 3 3 5.69 3 9c0 2.24 1.86 4.19 4.67 5.15C7.25 15.3 7 16.63 7 18.06c0 1.48 2.24 2.94 5 2.94s5-1.46 5-2.94c0-1.43-.25-2.76-.67-3.91C19.14 13.19 21 11.24 21 9c0-3.31-4.03-6-9-6zm0 2c4.08 0 7 2.06 7 4s-2.92 4-7 4-7-2.06-7-4 2.92-4 7-4zm0 14c-1.87 0-3-.94-3-1.06.31-.95.73-1.86 1.25-2.69C10.82 15.42 11.4 15.5 12 15.5s1.18-.08 1.75-.25c.52.83.94 1.74 1.25 2.69 0 .12-1.13 1.06-3 1.06z"/></svg>`,
    desc: "Complex relational schemas, indexing strategies, query execution analysis, migrations, Redis caching."
  },
  {
    name: "Docker & Kubernetes",
    category: "tools",
    level: 84,
    levelName: "Proficient",
    experience: "3+ Years",
    icon: `<svg class="w-7 h-7 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13.98 11.08h2.32v2.32h-2.32zm-3.48 0h2.32v2.32h-2.32zm-3.48 0h2.32v2.32H7.02zm10.44 0h2.32v2.32h-2.32zm-6.96-3.48h2.32v2.32h-2.32zm3.48 0h2.32v2.32h-2.32zm3.48 0h2.32v2.32h-2.32zm-6.96-3.48h2.32v2.32h-2.32zm3.48 0h2.32v2.32h-2.32zm9.28 9.28c-.41-.26-1.57-.46-2.52-.36-.18-1.57-1.32-2.14-1.32-2.14s-.73 1.15-.36 2.37c-.73.34-1.57.49-2.56.5-4.48.05-6.84-2.88-6.84-2.88s-.36 1.1-1.32 1.48c-.68.27-1.78.29-2.45.1-.38-.11-.53-.18-.53-.18s-.24.51-.27 1.06c-.07 1.2.66 2.5 1.83 3.37 2.05 1.54 5.37 1.73 8.35 1.47 4.14-.36 6.84-2.48 7.87-4.79z"/></svg>`,
    desc: "Multi-stage Docker builds, container orchestration, helm charts, CI/CD automated deployments."
  },
  {
    name: "Git & CI/CD Actions",
    category: "tools",
    level: 92,
    levelName: "Advanced",
    experience: "5+ Years",
    icon: `<svg class="w-7 h-7 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 9.5a2.5 2.5 0 00-1.89 4.14l-2.4 2.4a2.49 2.49 0 00-.91-.04l-2.28-2.28a2.5 2.5 0 10-1.52.02l2.25 2.25a2.5 2.5 0 102.16 2.16l2.4-2.4A2.5 2.5 0 1019.5 9.5z"/></svg>`,
    desc: "Trunk-based development, semantic release pipelines, automated testing matrices, security scans."
  }
];

// 3. Terminal Mockup Code Snippets
const terminalSnippets = {
  ts: `// DeveloperProfile.ts
export interface Engineer {
  name: string;
  role: string;
  focus: string[];
  openForHire: boolean;
}

export const developer: Engineer = {
  name: "Alex Rivera",
  role: "Full-Stack Engineer & UI Architect",
  focus: [
    "High-Performance Web Apps",
    "Scalable Microservices",
    "Design Systems & DX"
  ],
  openForHire: true
};

console.log("🚀 Ready to build something game-changing!");`,

  json: `{
  "developer": "Alex Rivera",
  "status": "Available for Projects",
  "preferredStack": {
    "frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "backend": ["Node.js", "Go", "Python FastAPI", "PostgreSQL"],
    "devops": ["Docker", "Kubernetes", "AWS", "GitHub Actions"]
  },
  "metrics": {
    "projectsDelivered": "40+",
    "clientSatisfaction": "100%",
    "averageLighthouseScore": "98+"
  }
}`,

  sh: `#!/bin/bash
# Initialize high-impact developer collaboration

curl -X POST https://api.alexrivera.dev/v1/hire \\
  -H "Content-Type: application/json" \\
  -d '{
    "partnership": "Freelance | Full-Time",
    "responseSpeed": "< 24 hours",
    "status": "Ready to accelerate your roadmap"
  }'

# ✨ Response: 200 OK - Let's connect and build!`
};

// State Variables
let currentProjectFilter = 'all';
let currentSkillFilter = 'all';
let skillSearchQuery = '';

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initTerminalTabs();
  renderSkills();
  renderProjects();
  initProjectModals();
  initContactForm();
  initScrollSpy();
  initBackToTop();
  initClipboardButtons();
  initStatsCounter();
});

// Theme Management (Supports Instant Day/Night Mode)
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  
  if (storedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    updateThemeIcon(false);
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    updateThemeIcon(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      const shouldBeDark = !isCurrentlyDark;

      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('portfolio-theme', 'dark');
        updateThemeIcon(true);
        showToast('Night Mode Activated 🌙');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('portfolio-theme', 'light');
        updateThemeIcon(false);
        showToast('Day Mode Activated ☀️');
      }
    });
  }
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById('theme-icon');
  if (!themeIcon) return;
  if (isDark) {
    // In Dark Mode: show Sun icon to switch to Day
    themeIcon.innerHTML = `<svg class="w-5 h-5 text-amber-300 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
  } else {
    // In Light Mode: show Moon icon to switch to Night
    themeIcon.innerHTML = `<svg class="w-5 h-5 text-indigo-600 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }
}

// Navbar & Mobile Menu
function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const header = document.getElementById('main-header');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = !mobileMenu.classList.contains('hidden');
      menuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    });
  }

  // Header blur and shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-md', 'shadow-slate-200/50', 'dark:shadow-black/30');
    } else {
      header?.classList.remove('shadow-md', 'shadow-slate-200/50', 'dark:shadow-black/30');
    }
  });
}

// Terminal Mockup Tab Switching
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const terminalCode = document.getElementById('terminal-code');
  if (!terminalCode) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-slate-800', 'text-white', 'border-b-2', 'border-blue-500');
        t.classList.add('text-slate-400', 'hover:text-slate-200');
      });
      tab.classList.add('bg-slate-800', 'text-white', 'border-b-2', 'border-blue-500');
      tab.classList.remove('text-slate-400');

      const fileType = tab.getAttribute('data-tab');
      if (terminalSnippets[fileType]) {
        terminalCode.textContent = terminalSnippets[fileType];
      }
    });
  });
}

// Render Skills with Dynamic Filtering and Search
function renderSkills() {
  const container = document.getElementById('skills-container');
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const searchInput = document.getElementById('skill-search');

  if (!container) return;

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/25');
        b.classList.add('bg-white', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-transparent', 'hover:bg-slate-100', 'dark:hover:bg-slate-700/80');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/25');
      btn.classList.remove('bg-white', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'hover:bg-slate-100');

      currentSkillFilter = btn.getAttribute('data-filter');
      filterAndDisplaySkills();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      skillSearchQuery = e.target.value.toLowerCase().trim();
      filterAndDisplaySkills();
    });
  }

  filterAndDisplaySkills();
}

function filterAndDisplaySkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const filtered = skillsData.filter(skill => {
    const matchesCategory = (currentSkillFilter === 'all') || (skill.category === currentSkillFilter);
    const matchesSearch = !skillSearchQuery || 
      skill.name.toLowerCase().includes(skillSearchQuery) || 
      skill.desc.toLowerCase().includes(skillSearchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="text-lg font-medium text-slate-800 dark:text-slate-200">No skills matching "${skillSearchQuery}"</p>
        <p class="text-sm text-slate-500 mt-1">Try searching for TypeScript, React, Docker, or reset filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((skill) => `
    <div class="glow-card group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 shadow-sm dark:shadow-none backdrop-blur-md transition-all duration-300">
      <div class="flex items-start justify-between mb-4">
        <div class="w-13 h-13 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
          ${skill.icon}
        </div>
        <div class="flex flex-col items-end">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
            ${skill.levelName}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">${skill.experience}</span>
        </div>
      </div>
      
      <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        ${skill.name}
      </h3>
      
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-4 leading-relaxed line-clamp-2">
        ${skill.desc}
      </p>

      <!-- Animated Progress Bar -->
      <div class="space-y-1.5">
        <div class="flex justify-between text-xs font-mono">
          <span class="text-slate-500 dark:text-slate-400">Proficiency</span>
          <span class="text-blue-600 dark:text-blue-400 font-semibold">${skill.level}%</span>
        </div>
        <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out" style="width: ${skill.level}%"></div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Featured Projects Grid
function renderProjects() {
  const container = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  if (!container) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/25');
        b.classList.add('bg-white', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-transparent', 'hover:bg-slate-100', 'dark:hover:bg-slate-700/80');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/25');
      btn.classList.remove('bg-white', 'dark:bg-slate-800/80', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'hover:bg-slate-100');

      currentProjectFilter = btn.getAttribute('data-filter');
      displayProjects();
    });
  });

  displayProjects();
}

function displayProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = projectsData.filter(project => {
    return (currentProjectFilter === 'all') || (project.category === currentProjectFilter);
  });

  container.innerHTML = filtered.map(project => `
    <article class="glow-card group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 shadow-md dark:shadow-none backdrop-blur-md overflow-hidden transition-all duration-300">
      <div>
        <!-- Project Image Banner with Overlay -->
        <div class="relative h-56 overflow-hidden bg-slate-950">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div class="absolute top-4 left-4">
            <span class="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border ${project.badgeColor} backdrop-blur-md shadow-sm">
              ${project.badge}
            </span>
          </div>

          <button 
            onclick="openProjectModal(${project.id})"
            class="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 shadow-lg"
            title="Inspect Architecture"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </button>
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <p class="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-1">${project.tagline}</p>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ${project.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            ${project.description}
          </p>

          <!-- Impact Metric Banner -->
          <div class="mt-4 p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-medium text-blue-700 dark:text-blue-300">
            ${project.metrics}
          </div>

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-1.5 mt-4">
            ${project.tech.map(t => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Card Action Footer -->
      <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-3">
        <a 
          href="${project.liveDemo}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35"
        >
          <span>Live Demo</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>

        <a 
          href="${project.github}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all duration-200"
          title="View Source on GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
        </a>
      </div>
    </article>
  `).join('');
}

// Project Details Modal
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeProjectModal();
      }
    });
  }
}

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-body');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-slate-950">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      <div class="absolute top-4 left-4">
        <span class="text-xs font-bold px-3 py-1 rounded-full border ${project.badgeColor} backdrop-blur-md">
          ${project.badge}
        </span>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6">
      <div>
        <p class="text-sm font-mono text-cyan-600 dark:text-cyan-400">${project.tagline}</p>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">${project.title}</h2>
      </div>

      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${project.description}</p>

      <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 font-medium">
        ${project.metrics}
      </div>

      <div>
        <h4 class="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200 uppercase mb-3">Key Technical Architecture</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          ${project.features.map(f => `
            <li class="flex items-start gap-2.5">
              <span class="text-blue-600 dark:text-blue-400 mt-0.5">▹</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200 uppercase mb-3">Technologies Leveraged</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map(t => `
            <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
        <a 
          href="${project.liveDemo}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-500/25"
        >
          <span>Launch Live App</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>

        <a 
          href="${project.github}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 transition-all"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
          <span>Repository</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Contact Form Handling with Feedback
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Submit state animation
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Transmitting...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg class="w-5 h-5 text-emerald-400 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <span>Message Delivered!</span>
        `;
        showToast('Thank you! Your message has been sent successfully.', 'success');
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3000);
      }, 1200);
    }
  });
}

// Toast Notifications
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const borderCol = type === 'error' ? 'border-rose-500/50' : (type === 'success' ? 'border-emerald-500/50' : 'border-blue-500/50');
  const icon = type === 'error' ? '⚠️' : (type === 'success' ? '✅' : 'ℹ️');

  toast.className = `pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0 flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 text-sm font-medium border ${borderCol} shadow-2xl backdrop-blur-md`;
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Scroll Spy for Nav links
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-bold');
      }
    });
  });
}

// Back to Top Button
function initBackToTop() {
  const topBtn = document.getElementById('back-to-top');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    } else {
      topBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Copy to Clipboard buttons
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy') || 'alex.rivera.dev@example.com';
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
      });
    });
  });
}

// Animated Numerical Stats Counters
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + (counter.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
