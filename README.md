# MSV TechHub — Website

A responsive React (Vite) website for MSV TechHub, built around the brand's logo colors
(deep navy background with a blue-to-ice gradient) and typography (Space Grotesk / Inter / IBM Plex Mono).

## Pages

- **Home** — hero, stats bar (3+ years, 35+ projects, 35+ clients), services grid, why-us, CTA
- **8 individual service pages** (`/services/:slug`) — one for each service, each with an overview,
  what's included, process, related services and a CTA:
  - Web Development
  - IT Application Development
  - Digital Marketing
  - Brand Promotion
  - Campaigns
  - IT Consulting
  - Cloud Computing
  - AI Applications
- **About Us** (`/about`) — story, mission/vision, values
- **Contact Us** (`/contact`) — free consultation form (name, email, phone, service, message) that
  opens the visitor's email client addressed to `msvtechhub@gmail.com`, plus contact details and
  social icons (ready to link once your social accounts are live)

The footer and contact page both include LinkedIn, Instagram, Facebook, X and YouTube icons —
just update the `href` values in `src/components/Footer.jsx` and `src/pages/Contact.jsx` once
your accounts are ready.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` that you can deploy to any static host
(Vercel, Netlify, GitHub Pages, cPanel, etc.).

## Editing content

- **Services**: all copy for the 8 service pages lives in `src/data/services.js` — edit text there
  and every service page updates automatically.
- **Contact info / social links**: `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
- **Colors / fonts**: CSS variables at the top of `src/index.css`.
- **Logo**: `public/logo.jpeg` (swap the file to update the logo everywhere).

## Notes

- The consultation form currently opens the user's default email app pre-filled with their
  details (no backend required). If you'd like it to submit directly to a database or email
  service (e.g. Formspree, EmailJS, or a custom API), that can be wired into
  `src/pages/Contact.jsx`.
