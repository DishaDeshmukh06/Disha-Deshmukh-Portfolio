# Disha.co — Portfolio

A premium, dark-editorial portfolio for **Disha Deshmukh**, Full Stack Developer (Fresher),
built with React 18, TypeScript, Vite, Tailwind CSS, and lucide-react.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

Verified: `npm run build` completes with **zero TypeScript errors**.

## ⚠️ About the hero images — read this first

The hero's signature interaction is a cursor-following "spotlight" that reveals a second
photo underneath the first. It needs **two** images in `public/images/`:

- `Base_image.png` — your professional portrait in the black blazer. **This is your real photo**, provided as uploaded.
- `Reveal_image.png` — meant to be your photo in the futuristic silver outfit with the chrome visor.

**That second photo was never provided to me**, and I'm not able to generate a new
photorealistic image of a real person to stand in for it. So right now, `Reveal_image.png`
is a **placeholder**: a silver/chrome duotone filter applied to your same base photo, just
so the interaction works and you can see the effect end-to-end.

**To finish it properly:** replace `public/images/Reveal_image.png` with your actual
futuristic-outfit photo, keeping the exact same filename. No code changes needed — the
hero already points at that path.

## Project structure

```
src/
  components/
    Navbar.tsx        fixed glass-pill nav, active section highlighting, mobile menu
    RevealLayer.tsx    canvas-based radial mask powering the cursor spotlight
    Hero.tsx           full-screen hero + cursor tracking logic
    About.tsx
    Skills.tsx
    Experience.tsx     internship timeline
    Projects.tsx
    Education.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
    icons.tsx          local Github/LinkedIn SVG icons (see note below)
  hooks/
    useReveal.ts        IntersectionObserver-based scroll-reveal hook
  App.tsx
  main.tsx
  index.css             fonts, Tailwind v4 theme tokens, hero keyframes
public/
  images/
    Base_image.png
    Reveal_image.png    ← placeholder, see above
  favicon.svg
```

## Notes on implementation choices

- **Tailwind v4**: the environment installed Tailwind CSS v4, which is configured via the
  `@tailwindcss/vite` plugin and a `@theme` block in `src/index.css` (design tokens:
  `--color-void`, `--color-black`, `--color-panel`, `--color-burgundy`, `--color-crimson`,
  `--color-cream`, `--color-stone`) rather than a `tailwind.config.js`. Functionally
  equivalent to Tailwind v3 config-based setup, just the current idiomatic approach.
- **Icons**: the pinned `lucide-react` version in this environment no longer ships brand
  icons (`Github`, `Linkedin`), so those two are small local SVG components in
  `src/components/icons.tsx`. Everything else (Menu, X, Mail, Phone, MapPin, ArrowUpRight,
  ArrowDown) comes from `lucide-react` as specified.
- All copy, skills, projects, experience, education, and certification content is sourced
  directly from the resume — nothing invented.
- Respects `prefers-reduced-motion`; spotlight interaction is disabled on touch devices;
  mobile menu traps scroll and is keyboard/focus accessible.

## Content source

All information is based strictly on the résumé provided — no fabricated employers,
titles, statistics, testimonials, or live deployment URLs.
