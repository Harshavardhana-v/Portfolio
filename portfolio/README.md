# Harshavardhana V — Developer Portfolio

Single-page React 18 + TypeScript portfolio (Vite). Package manager: **npm**.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Setup

1. Replace `public/resume.pdf` with your real resume.
2. Copy `.env.example` to `.env` and add a [Web3Forms](https://web3forms.com/) access key (`VITE_WEB3FORMS_ACCESS_KEY`).
3. Update placeholder URLs in `src/data/profile.ts` and `src/data/projects.ts` (GitHub, LinkedIn, LeetCode, email, live demos).
4. Replace `public/og-image.png` and update the sitemap domain in `public/sitemap.xml` and `public/robots.txt`.

## Content

All copy lives in `src/data/`. Components are presentational and should not hardcode profile/project text.

## Product decisions in this scaffold

- Single-page with anchor scroll (React Router was not added).
- Phone number is not displayed.
- Co-author names are not listed on the research paper.
- Accent: teal on near-black / warm off-white, with Space Grotesk + Inter.

## Deploy

Vercel or Netlify: connect the `portfolio/` folder, build command `npm run build`, output `dist`.
