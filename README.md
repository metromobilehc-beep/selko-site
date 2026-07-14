# selko-site

Public marketing site for Selko — homepage plus `/cred` and `/comply` product
pages. Next.js (App Router), Tailwind, no backend/Supabase dependency.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Structure

- `app/page.js` — homepage
- `app/cred/page.js` — Cred product page (own SEO metadata + FAQ schema)
- `app/comply/page.js` — Comply product page (own SEO metadata + FAQ schema)
- `app/layout.js` — fonts, global metadata, Organization schema
- `app/sitemap.js` — auto-generated sitemap.xml
- `components/Nav.js`, `components/Footer.js`, `components/Stamp.js`

Add a new product page (e.g. `/hep`) by copying `app/cred/page.js` as a
starting point, then add the route to `app/sitemap.js` and to `Nav.js`.

## Push to GitHub

```bash
cd selko-site
git init
git add .
git commit -m "Initial marketing site"
git branch -M main
git remote add origin https://github.com/<your-username>/selko-site.git
git push -u origin main
```

## Deploy on Vercel

1. In Vercel, "Add New Project" → import the `selko-site` GitHub repo.
2. Framework preset auto-detects as Next.js — no config changes needed.
3. Add the domain `selko360.com` (root/apex) to this Vercel project, and
   point its DNS at Vercel per their domain instructions. Keep
   `cred.selko360.com`, `comply.selko360.com`, and `hep.selko360.com` on
   their existing app projects — this project only owns the root domain
   (and optionally `www`).
4. Every push to `main` auto-deploys.

## Before going live

- Swap `hello@selko360.com` in `components/Footer.js` for the real inbox.
- Confirm `https://app.selko360.com` in `components/Nav.js` is the right
  sign-in URL once app subdomain routing is finalized.
- Add real Open Graph image (`app/opengraph-image` or a static image
  referenced in `layout.js` metadata) — currently text-only OG tags.
- Consider a `/pricing` page once pricing is finalized; it's one of the
  highest-intent pages for this kind of search traffic.
