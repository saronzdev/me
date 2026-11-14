# Portfolio — Ronald Sardiñas González

Personal portfolio of **Ronald Sardiñas González** (`saronzdev`), Full Stack Developer and
Computer Engineering student based in Matanzas, Cuba.

Static site built with [Astro](https://astro.build): one page, no client framework, no external
fonts, no tracking. Dark mode included, with a light/dark toggle and a system preference.

## Stack

- [Astro](https://astro.build) 7 — static output
- Vanilla CSS with custom properties (design tokens in `src/styles/global.css`)
- TypeScript for data and scripts
- Zero runtime dependencies beyond Astro

## Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `pnpm install`    | Install dependencies                             |
| `pnpm dev`        | Start the dev server at `http://localhost:4321`   |
| `pnpm build`      | Build the production site to `./dist/`            |
| `pnpm preview`    | Preview the production build locally              |
| `pnpm astro ...`  | Run Astro CLI commands (`astro check`, `astro add`) |

## Structure

```text
src/
├── assets/            # brand mark used in the hero
├── components/        # Header, Hero, About, Stack, Projects, Experience, Contact, Footer
├── data/              # Typed content: site, stack, projects, experience
├── layouts/           # BaseLayout: SEO, JSON-LD, theme bootstrap
├── pages/             # index.astro, 404.astro, robots.txt.ts, sitemap.xml.ts
├── scripts/           # reveal.ts (scroll reveal helper)
└── styles/            # global.css (tokens, reset, utilities)
public/                # favicon, OG image and manifest
.github/workflows/     # deploy.yml (build + GitHub Pages)
```

## Editing the content

Everything you will want to change lives in `src/data/`:

| File                   | What it holds                                              |
| :--------------------- | :--------------------------------------------------------- |
| `src/data/site.ts`     | Name, role, location, availability, email, socials, copy    |
| `src/data/stack.ts`    | Stack cards and the "also working with" list                |
| `src/data/projects.ts` | Projects, their stack, links and cover gradients            |
| `src/data/experience.ts` | Experience and education entries                          |

## Deployment

The site is published to GitHub Pages as a **project site**:

**https://saronzdev.github.io/me/**

- `astro.config.mjs` sets `site: 'https://saronzdev.github.io'` and `base: '/me'`
  (the `base` must match the repository name).
- Every public asset is resolved through `import.meta.env.BASE_URL` instead of a
  hardcoded `/`, so the subpath works.
- `.github/workflows/deploy.yml` builds the site on every push to `main` and deploys
  `dist/` through the official Pages actions. Pages must be set to
  **Settings → Pages → Source: GitHub Actions**.
- `src/pages/404.html` is picked up automatically by GitHub Pages as the error page.

If you move to a custom domain, set `site` to the domain, drop `base`, and add the
domain in **Settings → Pages → Custom domain**.

## License

Released under the [GNU General Public License v3.0](LICENSE) only.
Copyright © 2026 Ronald Sardiñas González.

## Notes

- Theme preference is stored in `localStorage` under `theme`; the first visit follows the OS
  preference and no flash of the wrong theme happens.
- Animations respect `prefers-reduced-motion`, and all content stays visible if JavaScript fails.
- `example.html` in the repository root is the original design reference. It is ignored by git and
  is not part of the build.
