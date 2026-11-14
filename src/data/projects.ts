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
  featured?: boolean;
  cover?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  coverTone?: string;
}

export const projects: Project[] = [
  {
    slug: 'frank-joyeria',
    name: 'Frank Joyería',
    status: 'Live',
    year: '2026',
    featured: true,
    description:
      'Full e-commerce platform for a jewelry store in Cuba: dynamic catalog, admin dashboard with product CRUD and image uploads, WhatsApp reservations, and a PWA frontend backed by its own REST API.',
    stack: ['Preact', 'TypeScript', 'Express', 'Turso', 'Redis', 'Vitest'],
    links: [
      { label: 'Live site', href: 'https://frankjoyeriacuba.com' },
      { label: 'Frontend', href: 'https://github.com/saronzdev/frankjw' },
      { label: 'Backend', href: 'https://github.com/saronzdev/frankjw-api' },
    ],
    cover: {
      src: '/images/projects/frank-joyeria.jpg',
      alt: 'Frank Joyería storefront showing a collection of gold jewelry',
      width: 1200,
      height: 630,
    },
  },
  {
    slug: 'bird',
    name: 'Bird',
    status: 'Open source',
    year: '2024',
    description:
      'A social network inspired by X, built as two independent apps: a React frontend and an Express/MongoDB API with JWT authentication.',
    stack: ['React', 'JavaScript', 'Express', 'MongoDB', 'Tailwind CSS'],
    links: [
      { label: 'Frontend', href: 'https://github.com/saronzdev/bird' },
      { label: 'Backend', href: 'https://github.com/saronzdev/bird-api' },
    ],
    coverTone: '#8fb0ff',
  },
];
