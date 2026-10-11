import ChannelProgramSiteImg from "../images/channelprogram.JPG";
import SightRightSiteImg from "../images/sightright.JPG";
import AllInOneWeldingSiteImg from "../images/all-in-one-welding-site-img.JPG";
import AIImgToolsSiteImg from "../images/aiimgtoolsimg.JPG";

export const Bio = {
  name: "Drew Johnson",
  title: "React Product Engineer",
  roles: [
    "Senior React Engineer",
    "Component Systems Builder",
    "Frontend Platform Developer",
    "Full Stack Collaborator",
  ],
  description:
    "I build polished React interfaces, resilient data flows, and production-ready frontend systems for teams that need software to feel fast, useful, and dependable.",
  email: "hello@drewjohnson.dev",
  github: "https://github.com/Drewsup123",
  resume:
    "https://docs.google.com/document/d/14AAYDgwfexiOtigIY4NrSJoG4qGsCDzOiqD9MJAXEfI/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/johnson-drew/",
};

export const metrics = [
  { value: "4+", label: "years building production React apps" },
  { value: "12+", label: "apps, portals, and business tools shipped" },
  { value: "3", label: "domains: SaaS, utilities, AI tooling" },
  { value: "100%", label: "focused on usable, maintainable UI" },
];

export const skillGroups = [
  {
    title: "React interfaces",
    summary:
      "Design systems, dashboard surfaces, route architecture, responsive UI, and component APIs that teams can extend.",
    skills: ["React", "TypeScript", "Component Systems", "Hooks", "Context", "Material UI", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Data and state",
    summary:
      "Client state, server cache, auth flows, and form-heavy workflows for real business applications.",
    skills: ["React Query", "Redux", "OAuth2", "REST APIs", "Firebase", "PostgreSQL", "SQLite", "Stripe"],
  },
  {
    title: "Frontend platform",
    summary:
      "Build tooling, shared packages, testing, documentation, and deployment habits that keep product teams moving.",
    skills: ["Vite", "Webpack", "Vitest", "Jest", "React Testing Library", "CI/CD", "Netlify", "Google Cloud"],
  },
  {
    title: "Full stack collaboration",
    summary:
      "Comfortable pairing with backend teams, shipping Node services, and integrating UI into existing systems.",
    skills: ["Node.js", "Express", "Python", "Golang Integration", "MongoDB", "ArcGIS JS API", "PowerShell", "Documentation"],
  },
];

export const skills = skillGroups.map((group) => ({
  title: group.title,
  skills: group.skills.map((name) => ({ name, image: "" })),
}));

export const experiences = [
  {
    id: 0,
    role: "Senior React Engineer",
    company: "Channel Program",
    date: "March 2022 - Present",
    desc:
      "Led frontend architecture for a partner-network SaaS platform, including React Query caching, context-driven state, charting, file editor workflows, subdomain routing, authentication, testing, onboarding, and developer documentation.",
    impact: [
      "Built reusable data patterns for global state and server cache",
      "Created complex charts and customizable file-editing workflows",
      "Improved team velocity through documentation and onboarding support",
    ],
    skills: ["React", "TypeScript", "React Query", "Context", "Material UI", "Vite", "Vitest"],
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "UtiliSource",
    date: "Aug 2022 - Present",
    desc:
      "Built a modern React application with code splitting, role-based permissions, token lifecycle management, private package distribution, component bundling for Golang integration, and custom ESRI map workflows.",
    impact: [
      "Created shared component packages for multiple applications",
      "Integrated React features into a Golang-backed product surface",
      "Built advanced ArcGIS querying and map interaction workflows",
    ],
    skills: ["React", "Redux", "TypeScript", "OAuth2", "Webpack", "Puppeteer", "ESRI ArcGIS JS API"],
  },
  {
    id: 2,
    role: "Analyst / Front End Engineer",
    company: "ELM Utility / LaunchPoint",
    date: "March 2020 - March 2022",
    desc:
      "Delivered responsive React interfaces, migrated legacy Backbone and .NET workflows into modern frontend experiences, and helped establish reusable component patterns across multiple utility products.",
    impact: [
      "Modernized legacy workflows into React experiences",
      "Built reusable UI patterns across LaunchPoint and ELM projects",
      "Shipped customer-facing tools for surveys, assignments, and reporting",
    ],
    skills: ["React", "Redux", "Bootstrap", "Highcharts", "Node.js", "BackboneJS", "TypeScript"],
  },
];

export const education = [
  {
    id: 0,
    school: "BloomTech",
    date: "Oct 2021 - Sep 2025",
    degree: "Full Stack Web Development and Computer Science",
    desc:
      "Full stack software training focused on practical web development, JavaScript, React, backend fundamentals, data structures, and team-based product work.",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Image Tools",
    date: "Aug 2024",
    description:
      "A production AI image editing app with premium flows, Firebase auth/database support, Stripe payments, and a polished React experience for multi-tool creative workflows.",
    image: AIImgToolsSiteImg,
    tags: ["React", "Firebase", "Stripe", "AI Tooling"],
    category: "web app",
    webapp: "https://www.aiimgtools.com/",
    featured: true,
  },
  {
    id: 1,
    title: "Channel Program",
    date: "2024",
    description:
      "A SaaS platform where vendors, MSPs, and investors coordinate programs, events, and relationship workflows through a React-heavy product interface.",
    image: ChannelProgramSiteImg,
    tags: ["React", "React Query", "Node.js", "PostgreSQL", "React Flow"],
    category: "web app",
    webapp: "https://channelprogram.com/",
    featured: true,
  },
  {
    id: 2,
    title: "SightRight",
    date: "Apr 2023 - May 2023",
    description:
      "A survey and incident workflow application with custom forms, pipeline/site survey tooling, and role-driven business actions.",
    image: SightRightSiteImg,
    tags: ["React", "MongoDB", "Node.js", "Express", "Redux"],
    category: "web app",
    webapp: "https://www.golaunchpoint.com/",
    featured: true,
  },
  {
    id: 3,
    title: "All In One Welding",
    date: "Jan 2024",
    description:
      "A responsive local-business web presence designed to be simple, fast, and easy for prospective customers to navigate.",
    image: AllInOneWeldingSiteImg,
    tags: ["React", "Responsive UI", "Local Business", "Node.js"],
    category: "web app",
    webapp: "https://www.all-in-onewelding.com/",
  },
  {
    id: 4,
    title: "Decentralized Drive",
    date: "Oct 2022 - Jan 2023",
    description:
      "A decentralized document storage concept for creating and importing documents, images, PDFs, and JavaScript files.",
    image: "https://i.imgur.com/S7OmElZ.png",
    tags: ["React", "MongoDB", "Node.js", "Express", "Redux", "NodeMailer"],
    category: "web app",
    github: "https://github.com/Drewsup123/BlockStack-App",
  },
  {
    id: 5,
    title: "Swooblz",
    date: "Jan 2023 - Mar 2023",
    description:
      "A Slack-style collaboration app with chat groups and private messaging built around realtime product interaction patterns.",
    image: "https://i.ibb.co/QQHk5q5/2019-05-07.png",
    tags: ["React", "Python", "Realtime UI", "Messaging"],
    category: "web app",
    github: "https://github.com/Drewsup123/Swooblz-official",
  },
];

export const processHighlights = [
  {
    title: "Design the component contract",
    description:
      "I start by making the interface boundaries obvious: what state flows in, what actions come out, and how future developers extend it safely.",
  },
  {
    title: "Model the data journey",
    description:
      "React Query, context, forms, and auth are treated as product infrastructure so users get fast screens and teams get predictable code.",
  },
  {
    title: "Animate with intent",
    description:
      "Motion is used to guide attention, communicate hierarchy, and make the product feel responsive without blocking the core experience.",
  },
  {
    title: "Ship with maintainability",
    description:
      "Testing, documentation, onboarding notes, and reusable patterns are part of the delivery so the next feature starts from a stronger base.",
  },
];
