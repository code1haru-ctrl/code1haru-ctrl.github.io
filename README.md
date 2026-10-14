# Codeharu Portfolio

A personal portfolio built with **React + Vite + TypeScript + Tailwind CSS** and **Framer Motion**.
It tracks websites, games, and certificates, with scroll-driven motion throughout.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

> Requires Node 18 or newer (Node 20 recommended).

## Project structure

```
codeharu-portfolio/
├── .github/workflows/deploy.yml   # builds and deploys to GitHub Pages on push to main
├── public/                        # static files (favicon, resume PDF, certificate images)
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/              # Hero, About, Skills, Projects, Certificates, Contact
│   │   └── ui/                    # reusable pieces: TiltCard, Reveal, MagneticButton, ...
│   ├── data/                      # <-- edit these to change your content
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── certificates.ts
│   ├── hooks/                     # useTypewriter, useActiveSection, usePrefersReducedMotion
│   ├── lib/                       # small helpers
│   ├── types/index.ts             # shared TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Tailwind entry + global styles
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig*.json
```

## Updating your content

You only need to edit files in `src/data/`:

- **`profile.ts`**: name, tagline, bio, location, email, social links.
- **`skills.ts`**: skill groups and items.
- **`projects.ts`**: one object per website or game (`category: "website" | "game"`).
- **`certificates.ts`**: one object per certificate.

Dates use the `YYYY-MM` format, and lists sort newest-first automatically.
Use `"#"` for any link you don't have yet; the button is hidden until you add a real URL.

To add images, drop them in `public/` and reference them like `"/certificates/my-cert.png"`.

## Deploying to GitHub Pages

The repo is `code1haru-ctrl/codeharu-ctrl.github.io`, so the site is served at
`https://code1haru-ctrl.github.io/codeharu-ctrl.github.io/`, and `vite.config.ts` sets that
as the production `base` path.

1. Push this project to the `main` branch of the repo.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and deploys automatically (see the **Actions** tab).

**Want the clean address `https://code1haru-ctrl.github.io/`?** GitHub only serves that from a repo
named exactly `code1haru-ctrl.github.io`. Rename the repo, then change `base` in
`vite.config.ts` to `"/"`.

## Motion and accessibility

Animations respect the visitor's "reduce motion" system setting: the cursor glow, tilt, and
magnetic effects switch off, and CSS animations are shortened.
