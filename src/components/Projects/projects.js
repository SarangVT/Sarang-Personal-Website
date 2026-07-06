export const projects = [
  {
  featured: true,
  category: "FULL STACK",
  title: "Nidhaan",
  subtitle: "Healthcare & E-Pharmacy Platform",

  description:
    "Built core workflows for a healthcare platform integrating an online pharmacy, doctor consultations, appointment scheduling, and seller onboarding. Developed GraphQL APIs, PostgreSQL-backed services, low-latency medicine search with Meilisearch, and scalable media storage using Cloudflare R2 while working across independently maintained frontend and backend services.",

  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Apollo GraphQL",
    "PostgreSQL",
    "Meilisearch",
    "Cloudflare R2",
    "Docker",
  ],

  github: "https://github.com/SarangVT/NidhaanFrontend",
  image: `${import.meta.env.BASE_URL}projects/nidhaan.png`,
},

  {
  category: "SYSTEMS",

  title: "Vortex",

  subtitle: "Cinema Streaming Platform",

  description:
    "Designed and implemented a cinema management platform featuring a custom HTTP Live Streaming (HLS) server capable of converting media into adaptive streaming playlists and segments. Built administrative workflows, media management, and database architecture supporting users, subscriptions, watch history, and content delivery.",

  tech: [
    "Next.js",
    "Node.js",
    "HLS",
    "FFmpeg",
    "PostgreSQL",
  ],

  github:
    "https://github.com/TanishqDhari/Vortex",

  image: "/projects/vortex.png",
},

{
  category: "ENTERPRISE",

  title: "R&D Portal",

  subtitle: "Research Workflow Automation",

  description:
    "Developed a workflow automation platform for IIT Indore to digitize research administration and approval processes. Designed multi-stage verification pipelines, automated notifications, project tracking, and vacancy management to replace paper-based workflows with a centralized digital system.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
  ],

  github: "https://github.com/saranshhalwai/iiti-rnd",

  image: "/projects/rdportal.png",
},

{
  category: "FULL STACK",

  title: "Yearbook Portal",

  subtitle: "Official IIT Indore Yearbook",

  description:
    "Contributed to the official institute yearbook platform by leading the migration from Cloudinary to Openinary, providing complete control over media infrastructure while reducing operational costs. Engineered the interactive Memory Map feature and managed Linux deployment using PM2 for reliable production hosting.",

  tech: [
    "React",
    "Node.js",
    "Firebase",
    "Openinary",
    "PM2",
  ],

  github:
    "https://github.com/IITIYearbookPortal/YearBook-Portal-2024-25",

  image:
    "/projects/yearbook.png",
},

{
  category: "OPEN SOURCE",

  title: "OpenMRS",

  subtitle: "Electronic Medical Record System",

  description:
    "Contributed to OpenMRS by improving patient timeline ordering, optimizing rendering performance through React memoization, and refactoring TypeScript definitions to improve maintainability while following enterprise contribution standards.",

  tech: [
    "React",
    "TypeScript",
    "OpenMRS",
    "Jest",
  ],

  github:
    "https://github.com/openmrs/openmrs-esm-patient-chart/pull/2294",

  image:
    "/projects/openmrs.png",
},

{
  category: "FINTECH",

  title: "FinTrack",

  subtitle: "Personal Finance Manager",

  description:
    "Built a finance management application for tracking expenses, budgeting, and portfolio planning with real-time currency conversion support. Focused on intuitive financial visualization and efficient data management.",

  tech: [
    "React",
    "Node.js",
    "MongoDB",
  ],

  github: "https://github.com/SarangVT/FinanceTrackerApp",

  image:
    "/projects/fintrack.png",
},

{
  category: "FULL STACK",

  title: "BlogX",

  subtitle: "Publishing Platform",

  description:
    "Developed a blogging platform featuring authentication, a rich-text editor, nested discussions, and optimized content rendering with an emphasis on clean user experience and maintainable backend architecture.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ],

  github: "https://github.com/SarangVT/GDSCWDBlogX",

  image:
    "/projects/blogx.png",
},

{
  category: "EXPERIMENT",

  title: "Chrome Dino AI",

  subtitle: "Reinforcement Learning Experiment",

  description:
    "Built and trained a reinforcement learning agent to play the Chrome Dino game from visual input. Explored reward design, state representation, and training strategies while experimenting with autonomous decision-making in a simple game environment.",

  tech: [
    "Python",
    "PyTorch",
    "OpenCV",
    "Reinforcement Learning",
  ],
},

{
  category: "EXPERIMENT",

  title: "CodeBuddy",

  subtitle: "Codeforces Problem Classification Extension",

description:
  "Built a browser extension that enriches Codeforces problems with AI-generated semantic tags, providing more precise classifications than the platform's default labels. The extension helps competitive programmers organize practice, identify underlying algorithmic patterns, and revisit problems through meaningful topic groupings.",

  tech: [
    "JavaScript",
    "Chrome Extension API",
    "HTML",
    "CSS"
  ],

  github: "https://github.com/saranshhalwai/CodeBuddy",

  image: "/projects/codebuddy.png",
}
];