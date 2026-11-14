export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Freelance Full Stack Developer',
    org: 'Self-employed',
    period: '2024 — Present',
    description:
      'Building web products end to end for clients, from database and API design to the frontend. Recent work: Frank Joyería.',
  },
  {
    role: 'Computer Engineering',
    org: 'Universidad Camilo Cienfuegos, Matanzas',
    period: 'In progress',
    description:
      'Currently in my third year, focused on software engineering, databases and web development.',
  },
];
