# EduVerse — Vercel Deployment Guide

This document tracks the Phase-1 deployment-readiness changes and walks you
through pushing the site live on Vercel.

## Changes applied

| # | File | Change |
|---|------|--------|
| 1 | `next.config.ts` | Removed `output: "standalone"` (Docker-only, not needed on Vercel) |
| 2 | `src/core/config/env.ts` | Made `DATABASE_URL`, `REDIS_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET` optional so Phase-1 static site builds without backend infrastructure |
| 3 | `next.config.ts` | Removed invalid `experimental.cpus` option |
| 4a | `src/app/not-found.tsx` | Branded 404 page with SiteHeader and navigation back |
| 4b | `src/app/error.tsx` | Client error boundary with retry, digest surfacing, and safe fallback |
| 4c | `src/app/loading.tsx` | Global loading skeleton for App Router segment transitions |
| 5a | `src/app/sitemap.ts` | Generates all 458 URLs (subjects, chapters, lessons, scientists, phenomena, hub features) |
| 5b | `src/app/robots.ts` | Allows crawling everything except `/api/`, points to sitemap |
| 6 | `src/app/layout.tsx` | Added `metadataBase`, canonical alternate, Open Graph, Twitter card, theme color viewport |
| — | `src/core/auth/jwt.ts` | Defensive runtime guards so JWT helpers throw a clear error if secrets missing |
| — | `src/core/cache/client.ts` | Same guard for Redis URL |
| — | `.env.example` | Updated: Phase-2 vars commented out, added `NEXT_PUBLIC_SITE_URL` |

## Verification

- `npx tsc --noEmit` → clean
- `npx next build` → clean, all 458 URLs prerendered
- `sitemap.xml` output validated (proper XML, all routes present)
- `robots.txt` output validated

## Deploying to Vercel

### 1. Push the changes

```bash
git add .
git commit -m "chore(vercel): deploy-readiness — sitemap, robots, error pages, env fixes"
git push origin main
```

### 2. Import the project

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select `VishwakarmaAjay1992/EduVerse`
4. Framework preset should auto-detect as **Next.js**
5. Root directory: `./` (leave default)
6. Build command: `next build` (leave default)
7. Output directory: `.next` (leave default)

### 3. Environment variables

Add these in the Vercel dashboard (Settings → Environment Variables) for
**Production**, **Preview**, and **Development**:

| Variable | Value | Why |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` (or your custom domain) | Sitemap/robots/OG absolute URLs. Update after adding a custom domain. |

That is the **only** required variable for Phase 1. The DB/Redis/JWT vars
stay unset until Phase 2.

### 4. Deploy

Click **Deploy**. First build takes 2–4 minutes for 379 static + sitemap +
robots pages. Once green:

- Verify `https://your-domain.vercel.app/sitemap.xml` returns XML
- Verify `https://your-domain.vercel.app/robots.txt` returns the rules
- Verify `https://your-domain.vercel.app/not-a-real-page` shows the branded 404
- Verify a lesson URL like
  `/subjects/mathematics/whole-numbers-and-arithmetic/understanding-place-value`
  renders

### 5. Custom domain (optional)

Vercel dashboard → Settings → Domains → **Add** your domain. Vercel gives
you DNS records to point at (`A 76.76.21.21` or a CNAME to
`cname.vercel-dns.com`). Once it's live, update `NEXT_PUBLIC_SITE_URL`
in the env vars to match, and redeploy so the sitemap uses the real
domain.

### 6. Submit to Google

- Google Search Console → Add property → your domain
- Sitemaps → Submit → `sitemap.xml`
- Wait 24–72 hours; Google will start indexing the 458 pages.

## What's still open (from the earlier review)

Not fixed in this pass because they're **improvements**, not blockers:

- **Bundle bloat** — `phenomena.ts` (4.4k lines), `science-qa.ts` (2.7k),
  `scientists.ts` (1.9k) are imported wholesale. Convert to JSON like
  `curriculum/` for meaningful First-Load-JS reduction.
- **`public/geometry-pdf/` images** — 1 MB of WebPs served without
  `next/image`. Wrap in `<Image>` for CDN optimization.
- **Progress store on localStorage** — will address with the Google
  Sign-in feature discussed separately.
- **CI workflows** — `.github/` exists; verify workflows run `typecheck`,
  `lint`, and `build` on PRs.

## Reverting Phase-2 tightening (future)

When Phase 2 (backend + auth) is wired up:

1. In `src/core/config/env.ts`, remove `.optional()` from `DATABASE_URL`,
   `REDIS_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`.
2. Add matching production secrets to Vercel env vars.
3. The runtime guards in `jwt.ts` and `cache/client.ts` can stay — they
   become no-ops once the values are set.
