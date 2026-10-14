# Codeharu Portfolio

A personal portfolio showcasing my projects, technical skills, certificates, and growth as an IT student and aspiring software developer.

Built with **React, Vite, TypeScript, Tailwind CSS, and Framer Motion**.

## Run It Locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

Other commands:

```bash
npm run build
npm run preview
```

Requires Node.js 18 or newer. Node.js 20 is recommended.

## Updating Your Content

Edit the files in `src/data/` to update your portfolio:

- `profile.ts` — name, tagline, bio, location, email, and social links.
- `skills.ts` — skill groups and items.
- `projects.ts` — portfolio websites and games.
- `certificates.ts` — certificates and achievements.

Add images to the `public/` folder and reference them in your code.

## Deploying to GitHub Pages

Repository: `code1haru-ctrl/codeharu-ctrl.github.io`

Website: https://code1haru-ctrl.github.io/

1. Push your project to the `main` branch.
2. Open your repository's **Settings → Pages**.
3. Set the deployment source to **GitHub Actions**.
4. Check the **Actions** tab to monitor deployment.

The repository is named `code1haru-ctrl.github.io`, so this is a personal GitHub Pages site. Ensure `vite.config.ts` uses `/` as its production base path for this URL.

## Motion and Accessibility

Animations respect visitors' reduced-motion preferences where supported, helping make the portfolio more accessible.