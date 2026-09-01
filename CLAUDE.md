# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static single-page marketing site for Seng Soon Air-Cond & Refrigerator Servicing, a local aircond shop serving Klang, Kapar, Bukit Raja and Setia Alam, Selangor, Malaysia. Plain HTML/CSS/JS, no build step, deployed as-is to Cloudflare Pages.

Canonical domain: `https://sengsoonaircond.my/`. Canonical metadata, sitemap URLs, structured data URLs, and Open Graph image URLs must use this custom domain, not a Cloudflare Pages subdomain.

## Files

- `index.html` — entire page markup, all SEO/AEO meta tags, and JSON-LD structured data (LocalBusiness/HomeAndConstructionBusiness/HVACBusiness, FAQ, etc.) live inline in `<head>` and per-section `<script type="application/ld+json">` blocks.
- `script.js` — vanilla JS, no dependencies. No modules/bundler; loaded directly via `<script>` in `index.html`.
- `styles.css` — single stylesheet, no preprocessor. Linked with a cache-busting query string (`styles.css?v=N`) — bump `N` in `index.html` when styles.css changes so Cloudflare's edge cache doesn't serve a stale copy.
- `assets/brand/`, `assets/brands/`, `assets/images/` — logo, brand logos (Daikin/Panasonic/Midea/Acson), shopfront and OG images.
- `sitemap.xml`, `robots.txt`, `google9de4e7867cf16800.html` — SEO/search console files served at site root.
- `site.webmanifest`, `favicon.*`, `apple-touch-icon.png` — PWA/icon metadata.
- `.claude/skills/build-seo-landing-page/` — installed Claude Code skill (from [Luci6n/seo-landing-page-skill](https://github.com/Luci6n/seo-landing-page-skill)) for building/improving/auditing this landing page: SEO/AEO/GEO and local-SEO guidance, structured-data and metadata templates, and the Node validation scripts below. Claude Code loads it automatically as `build-seo-landing-page`; invoke it for anything beyond a tiny copy/style edit.
- `skill-dev-notes/` and `temp/` — gitignored local scratch space; the original draft this skill was packaged from. Superseded by `.claude/skills/build-seo-landing-page/` — prefer the installed skill; these only matter if further developing the skill itself upstream.

There is no `package.json`, build tool, linter, or test suite for the site itself — treat any HTML/CSS/JS change as directly shipping to production once deployed.

## Running locally

No dev server is configured. Preview by opening `index.html` directly in a browser, or serve the directory root with any static file server (e.g. `npx serve .`) so absolute root paths (`/favicon.svg`, `/site.webmanifest`, etc.) resolve correctly.

## Validation scripts (`.claude/skills/build-seo-landing-page/scripts/`)

Standalone Node scripts (no install step beyond Node itself) that audit this exact site — metadata, structured data, links, and site files. Run them from the repo root:

```bash
node .claude/skills/build-seo-landing-page/scripts/check-metadata.mjs index.html
node .claude/skills/build-seo-landing-page/scripts/check-structured-data.mjs index.html
node .claude/skills/build-seo-landing-page/scripts/check-links.mjs index.html [--network]
node .claude/skills/build-seo-landing-page/scripts/check-site-files.mjs
node .claude/skills/build-seo-landing-page/scripts/check-placeholders.mjs
```

Add `--no-write` to any of the `check-*` scripts to avoid writing a report to `reports/` (gitignored). `run-lighthouse.mjs` / `run-pagespeed.mjs` and the Search Console scripts (`list-search-console-sites.mjs`, `submit-sitemap.mjs`, `inspect-url.mjs`) require a deployed URL and credentials (`PAGESPEED_API_KEY`, `GOOGLE_SEARCH_CONSOLE_ACCESS_TOKEN`) — don't attempt these without the relevant token/network access, and never fake their output (scores, indexing status, deployment status).

## Architecture: i18n

The site supports English, Malay, and Chinese via a single client-side translation system in `script.js`, no i18n library:

- `translations` (script.js:14) is one object keyed by `en` / `ms` / `zh`, each with `htmlLang`, various UI strings, `dayNames`, `heroCopy`, and a flat `text` map of `"section.key": "string"` pairs.
- Markup elements opt into translation via `data-i18n="section.key"` attributes; `setLanguage()` (script.js:413) walks all `[data-i18n]` elements and swaps in `translations[lang].text[key]`.
- The active language is persisted to `localStorage` (`seng-soon-language`) and otherwise inferred from the browser (`getInitialLanguage()` / `normalizeLanguage()`).
- When adding or changing user-facing copy: add the key to `text` in **all three** language blocks in `translations`, then reference it with `data-i18n` in `index.html`. Don't hardcode new English strings directly into markup that should be translatable.

## Architecture: opening hours

`hours` (script.js:4) defines a Mon–Sat schedule (Sunday closed) as 24h `open`/`close` strings. `malaysiaNow()`, `updateOpenStatus()`, and `nextOpenFrom()` compute live "open now / closed / opens at" status in Malaysia time and render it into the status strip — update `hours` if the shop's actual hours change, not the display strings directly.

## Conventions

- Keep structured data (JSON-LD in `index.html`), `sitemap.xml`, canonical URLs, and OG/Twitter meta tags consistent with each other and with the live domain — these are hand-maintained, not generated.
- Respect `prefers-reduced-motion` for any new animation (see existing `@media (prefers-reduced-motion: …)` blocks in `styles.css` and the reveal/FAQ animation guards in `script.js`) — prior fixes in this repo's history specifically targeted animation-induced CLS (cumulative layout shift), so new motion must not reintroduce layout shift.
- WhatsApp is the primary contact channel throughout the copy and UI; phone number and message text are defined once (`businessAddress`, `translations.*.whatsappMessage`) and reused rather than duplicated.
