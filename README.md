# Arthur Martins Maciel — Portfolio

Personal portfolio for Arthur Martins Maciel, Software Engineer focused on backend engineering, system design, cloud and business-aware software.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Lucide React and ESLint.

## Local setup

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Structure

- `src/components` — reusable navigation, project cards and section headings.
- `src/data` — centralized project, experience and skill content.
- `src/styles` — global theme, responsive layout and motion.
- `public/profile.jpg` — local profile image extracted from the original HTML.

## Editing content

Update `src/data/projects.ts` to add, edit, reorder or remove projects. Update `src/data/content.ts` for experience and technology badges.

To update the profile photo, replace `public/profile.jpg` with a new image while keeping the same filename and suitable portrait proportions.

## Deploying to Vercel

Import the repository into Vercel. The default Vite settings work without additional rewrites: build command `npm run build`, output directory `dist`.
