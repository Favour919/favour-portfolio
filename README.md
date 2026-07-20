# Favour Bassey — Portfolio

A React + TypeScript + Tailwind CSS portfolio built from Favour's resume.

## Structure

```
favour-portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx        # React entry point
    ├── App.tsx          # Composes all sections
    ├── data.ts          # All resume content (edit this to update text)
    ├── index.css        # Tailwind directives + base styles
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Skills.tsx
        ├── Journey.tsx       # Education + work timeline
        ├── Projects.tsx
        ├── Certificates.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Editing content

Almost everything on the page (name, skills, work history, projects,
certificates, contact info) lives in `src/data.ts`. Update that file and the
whole site updates — no need to touch the components.
