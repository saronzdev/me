export interface StackItem {
  name: string;
  category: string;
}

export const stack: StackItem[] = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React · Preact', category: 'Frontend' },
  { name: 'Astro', category: 'Frontend' },
  { name: 'Node.js · Express', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'PostgreSQL · MongoDB', category: 'Data' },
];

export const alsoWith: string[] = [
  'Tailwind CSS',
  'Vite',
  'Turso / libSQL',
  'Redis',
  'Zod',
  'Vitest',
  'Git',
  'GitHub Actions',
];
