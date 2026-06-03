# miltonln.dev

My personal website. A fast, static single-page site built with [Vite](https://vitejs.dev/) + React, deployed to GitHub Pages at [miltonln.dev](https://miltonln.dev).

## Editing content

All text and data live in `src/content/` — you rarely need to touch components.
See [CONTENT.md](CONTENT.md) for the full guide and the voice notes.

| File | Controls |
| --- | --- |
| `src/content/profile.js` | Name, headline, hero, current focus, contact copy |
| `src/content/projects.js` | Selected projects |
| `src/content/journey.js` | Work history, education, speaking & community |
| `src/content/interests.js` | Personal interests |
| `src/content/links.js` | Email, CV link, socials |

Design tokens (colors, type, spacing) live at the top of `src/styles/global.css`.

- Photo: replace `public/images/milton.jpg`
- CV: replace `public/cv.pdf`

## Develop

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploy

Deployment is automatic via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):
push to the `dev` branch and the site builds and publishes to GitHub Pages.

One-time setup in the repo: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.

The custom domain (`miltonln.dev`) is configured by `public/CNAME`, which ships in every build.
