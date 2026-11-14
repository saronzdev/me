export interface Social {
  label: string;
  href: string;
  handle: string;
}

export const site = {
  name: 'Ronald Sardiñas González',
  shortName: 'Ronald Sardiñas',
  alias: 'saronzdev',
  role: 'Full Stack Developer',
  location: 'Matanzas, Cuba',
  timezone: 'UTC−5',
  availability: 'Available for freelance',
  email: 'ronaldsrd@protonmail.com',
  title: 'Ronald Sardiñas González — Full Stack Developer',
  description:
    'Full Stack Developer and Computer Engineering student in Matanzas, Cuba. I build web products end to end with TypeScript, React, Preact, Node.js and Go.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/saronzdev', handle: '@saronzdev' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saronzdev', handle: 'in/saronzdev' },
    { label: 'X', href: 'https://x.com/saronzdev', handle: '@saronzdev' },
  ] satisfies Social[],
} as const;

export const hero = {
  headline: 'I build web products, end to end.',
  lede: `Full Stack Developer & Computer Engineering student based in ${site.location}. From the database to the last line of CSS.`,
  primaryCta: { label: 'Get in touch', href: '#contact' },
  secondaryCta: { label: 'See projects', href: '#projects' },
} as const;

export const about = {
  paragraphs: [
    `I’m ${site.name} — ${site.alias} online — a ${site.role} and Computer Engineering student based in ${site.location}. I build web products end to end: data models, APIs, and the interfaces people actually use. I care about fast, accessible experiences and code that stays easy to change.`,
    'Currently in my third year of Computer Engineering at Universidad Camilo Cienfuegos, and open to freelance work and interesting collaborations.',
  ],
  currently: [
    'Third-year Computer Engineering student at Universidad Camilo Cienfuegos.',
    'Building Frank Joyería, an e-commerce platform for a jewelry store in Cuba.',
    'Open to freelance projects and collaborations.',
  ],
} as const;
