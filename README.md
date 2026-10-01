# Iheb Najjar — Portfolio

A production-ready, dark-first Next.js 14 portfolio with TypeScript, Tailwind CSS, and Framer Motion animations.

---

## ✨ Features

- ⚡ **Next.js 14** App Router with TypeScript
- 🎨 **Dark-first design** — near-black bg, electric indigo/violet accent
- 🌊 **Framer Motion** animations with `prefers-reduced-motion` support
- 📱 **Fully responsive** — mobile, tablet, desktop
- ♿ **Accessible** — WCAG AA, semantic HTML, `aria-*` attributes, keyboard navigation
- 🔍 **SEO ready** — full metadata, Open Graph, Twitter card
- 🚀 **Vercel-ready** — one-click deploy
- 🧩 **Data-driven** — update projects/skills/timeline from TypeScript data files
- 🔒 **No backend required** — static, zero runtime dependencies at deploy

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Inter + Sora (Google Fonts via next/font) |
| Deploy | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/ihebnajjar/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B — Vercel Dashboard (recommended)

1. Push your project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — no configuration needed.
5. Click **Deploy**. Your site will be live in ~1 minute.

> **Custom domain**: In Vercel → Project → Settings → Domains, add your domain.

---

## 🎨 Customization Guide

### Personal Info
Edit **`src/app/layout.tsx`**:
- `title` — your name & role
- `description` — your SEO description
- `keywords` — relevant search terms
- `openGraph.url` — your domain
- `twitter.creator` — your Twitter handle

### Your Photo
1. Add your photo to `/public/` (e.g. `photo.jpg`)
2. Open `src/components/About.tsx`
3. Replace the `<User />` placeholder with:
   ```tsx
   <img src="/photo.jpg" alt="Iheb Najjar" className="w-32 h-32 rounded-2xl object-cover" />
   ```

### CV / Resume
1. Add your PDF to `/public/` (e.g. `cv-iheb-najjar.pdf`)
2. In `src/components/About.tsx`, the Download CV button already points to `/cv-iheb-najjar.pdf`

### Social Links
Search for `← EDITABLE` comments in:
- `src/components/Hero.tsx` — GitHub, LinkedIn hrefs
- `src/components/Contact.tsx` — email, GitHub, LinkedIn
- `src/components/Footer.tsx` — GitHub, LinkedIn

### Projects
Edit **`src/data/projects.ts`**:
```ts
{
  id: 'my-project',
  title: 'My Project',
  shortDescription: 'A one-line summary.',
  overview: 'What does it do, for whom, why?',
  challenge: 'What was the hardest part?',
  approach: 'How did you solve it?',
  features: ['Feature 1', 'Feature 2'],
  stack: ['React', 'Node.js', 'MongoDB'],
  myRole: 'I built the frontend and REST API.',
  image: '/my-project-screenshot.png', // add to /public
  repoUrl: 'https://github.com/you/project',
  liveUrl: 'https://my-project.com',
  status: 'completed',
  featured: true,
}
```

### Skills
Edit **`src/data/skills.ts`** — add, remove, or change skill levels:
```ts
{ name: 'Rust', level: 'learning', icon: 'rust' }
```
Levels: `'experienced'` (indigo) | `'project-used'` (violet) | `'learning'` (dashed)

### Timeline
Edit **`src/data/timeline.ts`**:
```ts
{
  id: 'cert-1',
  year: '2024',
  title: 'AWS Cloud Practitioner',
  institution: 'Amazon Web Services',
  description: 'Earned certification covering core AWS services.',
  type: 'certificate', // education | project | achievement | certificate
}
```

### Contact Form
To receive emails from the form, set up [Formspree](https://formspree.io):
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form and copy your **Form ID** (e.g. `xpzgkqrw`)
3. In `src/components/Contact.tsx`, find the `<form>` element and update:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onSubmit` handler and let the form submit naturally.

---

## 🔑 Environment Variables

No environment variables are required by default.

If you add integrations (analytics, form service, etc.), create `.env.local`:
```bash
# Example – not needed unless you add these
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts
│   ├── page.tsx         # Home page (composes all sections)
│   ├── globals.css      # Global styles, utilities, animations
│   └── not-found.tsx    # 404 page
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button (primary/secondary/ghost)
│   │   ├── Badge.tsx        # Tech badge/pill
│   │   └── SectionHeading.tsx
│   ├── Navigation.tsx   # Fixed nav with active tracking & mobile drawer
│   ├── Hero.tsx         # Full-viewport hero
│   ├── About.tsx        # About + avatar card
│   ├── Skills.tsx       # Skill groups grid
│   ├── Projects.tsx     # Featured projects cards
│   ├── Timeline.tsx     # Education & milestones
│   ├── Contact.tsx      # Contact form + info cards
│   └── Footer.tsx       # Footer + scroll-to-top
├── data/
│   ├── projects.ts      # ← Edit your projects here
│   ├── skills.ts        # ← Edit your skills here
│   └── timeline.ts      # ← Edit your timeline here
└── hooks/
    └── useScrollReveal.ts
```

---

## 📜 License

MIT — feel free to use this as a template for your own portfolio.
Built with ❤️ by Iheb Najjar.
