export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  status: string;
  year: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  coverTone: string;
  coverToneMid?: string;
  coverToneTo: string;
}

export const projects: Project[] = [
  {
    slug: 'frank-joyeria',
    name: 'Frank Joyería',
    status: 'Live',
    year: '2026',
    description:
      'Full e-commerce platform for a jewelry store in Cuba: dynamic catalog, admin dashboard with product CRUD and image uploads, WhatsApp reservations, and a PWA frontend backed by its own REST API.',
    stack: ['Preact', 'TypeScript', 'Express', 'Turso', 'Redis', 'Vitest'],
    links: [
      { label: 'Live site', href: 'https://frankjoyeriacuba.com' },
      { label: 'Frontend', href: 'https://github.com/saronzdev/frankjw' },
      { label: 'Backend', href: 'https://github.com/saronzdev/frankjw-api' },
    ],
    coverTone: '#c6a15b',
    coverToneTo: '#17171a',
  },
  {
    slug: 'topikgram',
    name: 'Topikgram',
    status: 'Live',
    year: '2026',
    description:
      'Social network with posts tagged by topics (1–3 topics), a personalized feed, likes, saves, threaded comments, follows, and an interest-weighting system that tunes the feed to each user.',
    stack: ['Go', 'PostgreSQL', 'JWT', 'Preact', 'TypeScript', 'Vite'],
    links: [
      { label: 'Live site', href: 'https://topikgram.vercel.app' },
      { label: 'Code', href: 'https://github.com/saronzdev/topikgram' },
    ],
    coverTone: '#ec4899',
    coverToneMid: '#863bff',
    coverToneTo: '#1c1917',
  },
];
