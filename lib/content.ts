/*
  Content — Amani Kanu, "The Tech Evangelist"
  Sourced from the Readdy portfolio and official conference speaker profiles
  (RubyConf Africa, Sailsconf). Retained facts only; copy refined for editorial quality.
*/

export const profile = {
  name: "Amani Kanu",
  brand: "The Tech Evangelist",
  role: "Senior Frontend Engineer · Developer Relations",
  location: "Lagos, Nigeria",
  availability: "Open for speaking, mentorship & collaboration",
  email: "kanuamani@gmail.com",
  phone: "+234 816 091 6203",
  shortBio:
    "Developer Relations professional with 6+ years of experience as a Senior Frontend Engineer. I blend deep technical expertise with a passion for community, content, and communication.",
  aboutLead:
    "I'm a Developer Relations professional with 6+ years of experience as a Senior Frontend Engineer. I blend deep technical expertise with a passion for community, content, and communication.",
  aboutBody:
    "From building scalable web apps to breaking down complex concepts on stage or in docs, I help developers succeed and connect them with the tools and teams that power innovation. I have shipped high-traffic products with React and Next.js, led frontend architecture for fintech and HR platforms, and trained developers across Africa, the United States, and online communities.",
  belief:
    "Developers grow best when someone who has shipped real software is willing to walk the path with them — and when communities are built so that nobody learns alone.",
  stats: [
    { value: "6+", label: "Years building" },
    { value: "30+", label: "Talks delivered" },
    { value: "2", label: "Communities founded" },
    { value: "4,000", label: "Developers in community" },
  ],
  status: [
    { key: "Role", value: "Senior Frontend Engineer & DevRel" },
    { key: "Based", value: "Lagos, Nigeria — working worldwide" },
    { key: "Status", value: "Available for speaking & collaboration" },
    { key: "Focus", value: "Frontend performance, AI-native building, communities" },
  ],
} as const;

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Developer Relations",
  "Community Building",
  "Public Speaking",
  "Frontend Performance",
  "AWS",
  "Mentorship",
  "Node.js",
  "Open Source",
  "Accessibility",
] as const;

export type Capability = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Building scalable, performant web applications with modern frameworks and best practices — React, Next.js, and the architecture behind pages that load fast on low-end devices.",
    tags: ["React", "Next.js", "TypeScript", "Performance", "Accessibility"],
  },
  {
    index: "02",
    title: "Developer Relations",
    description:
      "Livestreams, workshops, and technical content that keep developers engaged and informed. Bridging the gap between developers and the technology that powers innovation.",
    tags: ["DevRel", "Livestreaming", "Technical Content", "Advocacy"],
  },
  {
    index: "03",
    title: "Technical Education",
    description:
      "Simplifying complex technical concepts through workshops, talks, and documentation — from frontend performance to AI-driven development — for audiences from students to senior engineers.",
    tags: ["Workshops", "Talks", "Documentation", "Mentorship"],
  },
  {
    index: "04",
    title: "Community Building",
    description:
      "Creating inclusive spaces where developers can learn, share, and grow together — inclusive tech communities that turn curiosity into careers.",
    tags: ["Communities", "Mentorship", "Inclusive Spaces", "Growth"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Developer Relations",
    company: "Must Company",
    period: "Mar 2025 — Present",
    location: "Seoul, South Korea",
    description:
      "Developer advocacy, technical content, livestreams and community development for a remote-first engineering org.",
    achievements: [
      "Hosts livestreams and workshops for the developer community",
      "Drives community development and engagement",
    ],
    tags: ["DevRel", "Livestreams", "Workshops", "Community"],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Must Company",
    period: "Oct 2023 — Present",
    location: "Seoul, South Korea",
    description:
      "Lead frontend development for high-traffic products including 54DNA and point2u.",
    achievements: [
      "Developed and maintained frontend components for the 54DNA and point2u apps — improved page load times by 25%",
      "Mentored junior developers on best practices and code conventions",
    ],
    tags: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind", "AWS", "Firebase"],
  },
  {
    role: "Software Engineer",
    company: "Fluna",
    period: "Aug 2022 — Oct 2023",
    location: "New York, USA",
    description:
      "Led frontend development initiatives and system architecture design for fintech products.",
    achievements: [
      "Led frontend development initiatives and system architecture design",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
    ],
    tags: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
  },
  {
    role: "Frontend Engineer",
    company: "Parallel Score",
    period: "Jun 2020 — Feb 2022",
    location: "Lagos, Nigeria",
    description:
      "Built responsive and performant web applications with modern frontend architectures.",
    achievements: [
      "Developed responsive and performant web applications",
      "Implemented modern frontend architectures and best practices",
    ],
    tags: ["React", "JavaScript", "CSS3", "Responsive Design", "Redux"],
  },
  {
    role: "Software Engineer",
    company: "Decagon (Indeed)",
    period: "Feb 2018 — May 2020",
    location: "Austin, Texas, USA",
    description:
      "Built scalable web applications using modern JavaScript frameworks in a remote-first product team.",
    achievements: [
      "Built scalable web applications using modern JavaScript frameworks",
      "Collaborated with product teams to implement features and improvements",
    ],
    tags: ["JavaScript", "React", "Node.js", "HTML5", "CSS3"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "Must Break AI",
    description:
      "Advanced AI platform for natural language processing and machine learning applications.",
    tags: ["Next.js", "TypeScript", "Python", "TensorFlow"],
    url: "https://mustbreak.ai/",
  },
  {
    name: "Must Mate",
    description:
      "Comprehensive HR and workforce management platform with integrated payroll solutions.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    url: "https://must-mate.ai/",
  },
  {
    name: "Treasury Platform",
    description:
      "Enterprise treasury management system for financial institutions.",
    tags: ["React", "Node.js", "FinTech"],
    url: "https://www.fluna.co/",
  },
  {
    name: "Resume Builder",
    description:
      "Professional resume builder platform with advanced templates and AI-powered suggestions.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    url: "https://www.resume.com/",
  },
  {
    name: "Chimoney",
    description: "Global payment infrastructure for digital transactions.",
    tags: ["React", "Payments", "API"],
    url: "https://chimoney.io/",
  },
  {
    name: "Fluna Investor",
    description: "Investment platform for managing and tracking portfolios.",
    tags: ["React", "TypeScript", "Finance"],
    url: "https://www.investor.fluna.co/",
  },
  {
    name: "Exceptionly",
    description: "Tech talent recruitment and management platform.",
    tags: ["React", "Node.js", "HR Tech"],
    url: "https://exceptionly.com/",
  },
  {
    name: "Pace",
    description: "African fintech platform for digital banking services.",
    tags: ["React", "FinTech", "Mobile"],
    url: "https://pace.africa/",
  },
  {
    name: "Startup Academy",
    description: "E-learning platform for startup founders and entrepreneurs.",
    tags: ["React", "EdTech", "LMS"],
    url: "https://accelerate.thebulb.africa/",
  },
];

export type SpeakingItem = {
  talk: string;
  event: string;
  location: string;
  date: string;
};

export const speaking: { year: string; items: SpeakingItem[] }[] = [
  {
    year: "2026",
    items: [
      {
        talk: "Beyond Code — From Ruby Engineers to AI-Native Builders",
        event: "RubyConf Africa",
        location: "Nairobi, Kenya",
        date: "Feb 2026",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        talk: "Mastering Modern Frontend Performance: Strategies for Faster and More Efficient Web Applications",
        event: "Sailsconf 2025",
        location: "Abuja, Nigeria",
        date: "May 22–24",
      },
      {
        talk: "Work Without Borders: Navigating Remote Work, Freelancing & the Gig Economy",
        event: "Shapers Network Africa",
        location: "Online",
        date: "May 19–31",
      },
      {
        talk: "From Local Project to Global Impact: The Developer's Journey",
        event: "BCP Origins",
        location: "Calabar, Nigeria",
        date: "May 15",
      },
      {
        talk: "Judge — Kidsthatcode Hackathon 2025: Code for Change",
        event: "Kidsthatcode",
        location: "Lagos, Nigeria",
        date: "Apr 5",
      },
      {
        talk: "Passion to Profession: Overcoming Self-Limiting Beliefs and Building a Thriving Tech Career",
        event: "FEMMEFLUENCE Africa",
        location: "Calabar, Nigeria",
        date: "Apr 26",
      },
      {
        talk: "Personal Branding and How to Leverage AI to Amplify Your Voice",
        event: "Must Company",
        location: "Lagos, Nigeria",
        date: "Mar 8",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        talk: "Enhancing Developer Productivity with Google Chrome DevTools and AI",
        event: "GDG Owerri",
        location: "Owerri, Nigeria",
        date: "Nov 16",
      },
      {
        talk: "Building Scalable Web3 Frontend Applications",
        event: "Web3Bridge Web3 Lagos Conference 3.0",
        location: "Lagos, Nigeria",
        date: "Sep 5–7",
      },
      {
        talk: "You and Work-Life Balance",
        event: "ETH Safari",
        location: "Kilifi, Kenya",
        date: "Sep 8–15",
      },
      {
        talk: "Leveraging AI as a Studentpreneur",
        event: "Microsoft Learn Student Ambassadors, OAU Community",
        location: "Virtual",
        date: "Aug 17",
      },
      {
        talk: "Building the Future — Your Journey in Tech Starts Here",
        event: "Kidsthatcode",
        location: "Lagos, Nigeria",
        date: "Aug 24",
      },
      {
        talk: "Breaking into Tech",
        event: "Decagon",
        location: "Online",
        date: "Jul 26",
      },
      {
        talk: "Standing Out in an Evolving Tech Landscape",
        event: "Bincom Dev Center",
        location: "Online",
        date: "Oct 15",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        talk: "Building Fast Apps for Slow Networks and Low-End Devices",
        event: "React Summit US",
        location: "United States",
        date: "Mar 2023",
      },
      {
        talk: "Senior Developer Mindset",
        event: "Decadev Alumni Network",
        location: "Lagos, Nigeria",
        date: "Nov 9",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        talk: "Web Accessibility",
        event: "Devfest 2022",
        location: "Seoul, South Korea",
        date: "Nov 2022",
      },
    ],
  },
];

export type CommunityItem = {
  name: string;
  role: string;
  period: string;
  description: string;
};

export const community: CommunityItem[] = [
  {
    name: "Decagon Alumni Network (Decadev centre)",
    role: "Founder & community lead",
    period: "2019 — Present",
    description:
      "Leading the Decagon alumni community — a thriving network of tech professionals sharing knowledge, referrals and career growth.",
  },
  {
    name: "Calabar Tech Community",
    role: "Founder & community lead",
    period: "2020 — Present",
    description:
      "Founded the Calabar tech community, building a vibrant ecosystem connecting professionals, learners and opportunities in the region.",
  },
  {
    name: "Amiva",
    role: "Founder",
    period: "—",
    description:
      "Building practical tools and initiatives that support young African developers — from first principles to shipped products.",
  },
  {
    name: "Tech in School",
    role: "Founder",
    period: "—",
    description:
      "An initiative bringing practical technology education and exposure into schools, so students meet the tools of the industry before the industry meets them.",
  },
  {
    name: "GDG Ajah",
    role: "Staff volunteer",
    period: "2021 — Present",
    description:
      "Supporting Google Developer Group activities and events — logistics, community and knowledge-sharing work behind the scenes.",
  },
  {
    name: "Mentorship programmes",
    role: "Mentor",
    period: "2023 — Present",
    description:
      "Technical mentor at Semicolon.africa (2023), Nexascale Miva bootcamp and Alt School Africa Hacksultan (2024) — guiding mentees through real engineering work and career development.",
  },
];

export const socials = [
  { label: "LinkedIn", handle: "5.2k+ followers", url: "https://www.linkedin.com/in/amani-kanu/" },
  { label: "Facebook", handle: "5.5k+ followers", url: "https://www.facebook.com/sirsuccess/" },
  { label: "WhatsApp", handle: "4,000 members", url: "https://whatsapp.com/channel/0029Vb5ezhHC1FuFX611P80z" },
  { label: "YouTube", handle: "5k+ views", url: "https://www.youtube.com/@Tech_Kolo" },
  { label: "GitHub", handle: "amanikanu", url: "https://github.com/amanikanu" },
  { label: "X / Twitter", handle: "@AmaniKanu", url: "https://x.com/AmaniKanu" },
] as const;

export const availability = [
  "Available for full-time or contract roles",
  "Available for speaking engagements",
  "Limited availability for consulting",
];

/* ---------- Skills ---------- */

export type SkillCategory = {
  id: string;
  label: string;
  short: string;
};

export const skillCategories: SkillCategory[] = [
  { id: "languages", label: "Languages", short: "Lang" },
  { id: "frameworks", label: "Frameworks", short: "FW" },
  { id: "design", label: "Design & CSS", short: "CSS" },
  { id: "state", label: "State Management", short: "State" },
  { id: "tools", label: "Tooling & Testing", short: "Tools" },
  { id: "cloud", label: "Cloud & APIs", short: "Cloud" },
];

export type Skill = {
  name: string;
  category: string;
  level: 1 | 2 | 3 | 4 | 5;
  years: number;
};

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", level: 5, years: 6 },
  { name: "JavaScript", category: "languages", level: 5, years: 8 },
  { name: "HTML5", category: "languages", level: 5, years: 8 },
  { name: "CSS3", category: "languages", level: 5, years: 8 },
  // Frameworks
  { name: "React", category: "frameworks", level: 5, years: 7 },
  { name: "Next.js", category: "frameworks", level: 5, years: 5 },
  { name: "Node.js", category: "frameworks", level: 5, years: 6 },
  { name: "Express.js", category: "frameworks", level: 4, years: 5 },
  { name: "Remix", category: "frameworks", level: 4, years: 3 },
  { name: "Gatsby", category: "frameworks", level: 4, years: 3 },
  // Design & CSS
  { name: "Tailwind CSS", category: "design", level: 5, years: 5 },
  { name: "SCSS", category: "design", level: 5, years: 7 },
  { name: "CSS Grid", category: "design", level: 5, years: 6 },
  { name: "Flexbox", category: "design", level: 5, years: 7 },
  { name: "styled-components", category: "design", level: 4, years: 4 },
  // State Management
  { name: "Redux Toolkit", category: "state", level: 5, years: 5 },
  { name: "Redux", category: "state", level: 5, years: 6 },
  { name: "Zustand", category: "state", level: 4, years: 3 },
  { name: "Context API", category: "state", level: 5, years: 5 },
  // Tooling & Testing
  { name: "Git", category: "tools", level: 5, years: 8 },
  { name: "GitHub", category: "tools", level: 5, years: 8 },
  { name: "Jest", category: "tools", level: 4, years: 5 },
  { name: "React Testing Library", category: "tools", level: 4, years: 5 },
  { name: "ESLint", category: "tools", level: 5, years: 6 },
  { name: "Prettier", category: "tools", level: 5, years: 6 },
  { name: "Cypress", category: "tools", level: 3, years: 3 },
  // Cloud & APIs
  { name: "AWS", category: "cloud", level: 5, years: 5 },
  { name: "Firebase", category: "cloud", level: 4, years: 4 },
  { name: "RESTful APIs", category: "cloud", level: 5, years: 7 },
  { name: "GraphQL", category: "cloud", level: 4, years: 4 },
  { name: "DynamoDB", category: "cloud", level: 4, years: 3 },
  { name: "Amplify", category: "cloud", level: 4, years: 3 },
];

export const skillStats = [
  { value: "31", label: "Technologies" },
  { value: "6", label: "Categories" },
  { value: "8", label: "Years of experience" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Speaking", href: "#speaking" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
] as const;
