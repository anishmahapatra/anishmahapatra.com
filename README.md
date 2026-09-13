# anishmahapatra.com

Source for [anishmahapatra.com](https://anishmahapatra.com) — Anish Mahapatra's personal website.

## Stack

- [Astro](https://astro.build/) — static site generator, zero client-side JS by default
- Hand-written CSS (no framework) — design tokens for light/dark themes in `src/styles/global.css`
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for automatic sitemap generation
- No database, no backend, no build-time API calls — fully static output

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built output locally
```

## Project structure

```
src/
  layouts/Layout.astro   # shared <head>, header, footer, theme toggle, SEO/OG/JSON-LD
  pages/
    index.astro           # single-page site: hero, about, experience, work, writing, stack
    404.astro
  styles/global.css        # design tokens (light/dark), typography, layout
public/
  favicon.svg, favicon-32.png, apple-touch-icon.png
  og-image.png              # Open Graph / social preview image
  robots.txt
```

Content (experience, projects, writing links) is defined as plain data arrays at the top of
`src/pages/index.astro` — update it there when something changes, no CMS required.

## Deployment

- **Hosting:** Cloudflare Pages, connected directly to this GitHub repository.
- **Production branch:** `main`. Every push to `main` triggers an automatic build and deploy.
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Domain:** `anishmahapatra.com` (apex) and `www.anishmahapatra.com`, both attached to the
  Cloudflare Pages project. `www` redirects to the apex domain.
- **DNS:** managed in Cloudflare (the domain's nameservers point to Cloudflare). The domain
  itself stays registered at Namecheap — only DNS hosting moved.
- **HTTPS:** issued and managed automatically by Cloudflare.

There is no server to maintain, no container to rebuild, and no manual deploy step — pushing to
`main` is the entire release process.

## Updating content

1. Edit the relevant array in `src/pages/index.astro` (experience, projects, or writing).
2. `npm run build` locally to sanity-check.
3. Commit and push to `main` — Cloudflare Pages deploys automatically within a minute or two.
