# Kittituch Wongwatcharapaiboon — Portfolio

Personal portfolio website for Kittituch Wongwatcharapaiboon, Machine Learning Engineer and Data Scientist based in Sydney, Australia.

## Tech Stack

- **React 18** + **Vite** + **TypeScript** — Fast, modern SPA
- **Tailwind CSS** — Utility-first styling (dark mode by default)
- **Framer Motion** — Smooth animations and page transitions
- **Lucide React** — Icon library
- **Recharts** — Skill visualization charts
- **Custom Canvas API** — Animated particle background

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Deployment on Vercel

1. Push to GitHub
2. Import repo in [Vercel Dashboard](https://vercel.com/dashboard)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

The `vercel.json` handles SPA routing rewrites automatically.

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, About, Experience, Projects, etc.
│   │   ├── canvas/        # ParticleCanvas
│   │   ├── charts/        # SkillRadar, SkillBar
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── data/              # resume.ts — all content data
│   ├── styles/            # globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── vercel.json
```

## Updating Content

All portfolio content is centralized in **`src/data/resume.ts`**.

To update:
- **Projects**: Edit the `projects` array
- **Experience**: Edit the `experiences` array
- **Publications**: Edit the `publications` array
- **Skills**: Edit the `skillGroups` array
- **Awards**: Edit the `awards` array
- **Contact info**: Edit the `contact` object

No other files need to be touched for content updates.
