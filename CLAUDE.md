# Ozem+ affiliate/SEO site (ozem-shop)

**What it is:** German-language affiliate/SEO site for **Ozem+ (Oz+)** weight-loss capsules, using the "seriös oder Betrug?" legit-check angle, with DE + NL/IT/PL geo sub-pages, funnelling to the Ozem+ affiliate offer. This is the LIVE, launched direct-brand sibling of the staging `ozem-hub` (Abnehmcheck) site.
**Status:** **LIVE.** Domain https://ozem-plus.store returns HTTP 200 (`CNAME` in repo); `robots.txt` = Allow, homepage `index,follow`, sitemap live, 3 Telegraph backlinks logged. Actively worked — most recent commit 2026-07-11 (`12bd35d`, Apotheke pages + GSC keyword enrichment).

## Live assets
- Live: **https://ozem-plus.store** (`CNAME` = ozem-plus.store; HTTPS via GitHub Pages).
- Repo: **joangoodwin10190/joangoodwin10190.github.io** (user Pages repo; public). Remote uses a `ghp_...` token in the git URL.
- Build dir: `/root/workspace/ozem-shop`.
- Pages: DE root `index.html` (Ozem+ Erfahrungen), `erfahrungen.html`, `kaufen.html`, `apotheke.html`; geo trees `nl/` (ervaringen/kopen/apotheek), `it/` (recensioni/acquista/farmacia), `pl/` (opinie/kup/apteka). Legal: `impressum.html`, `datenschutz.html`, `widerruf.html`, `haftungsausschluss.html`. `sitemap.xml` (16 URLs), `favicon.svg`, `assets/` (config.js, site.css, img/*.webp).
- `backlinks-log.json` — 3 live German Telegraph backlinks to ozem-plus.store (logged 2026-07-10).

## Key facts
- Offer network **Stellar Yonder (Everflow)** — same as `ozem-hub`. Affiliate links are geo-specific, all under `slmw4qtrk.com/ZZ2GX/…`:
  - DE (root `/go/`): `HQS89X` · NL (`/nl/go/`): `JMS5JT` · IT (`/it/go/`): `K1JBP4` · PL (`/pl/go/`): `K2X7FP`.
- **Link masking:** the real affiliate URL is never in the page DOM. Every CTA points at a first-party `/go/` path (per geo) which builds and fires the link via `window.location.replace` (no back-button entry). `/go/` is `noindex` and Disallowed in robots.
- Tracking (`assets/config.js` + `/go/`): **`sub1` = gclid if a paid click-id is present, else the organic tag `ozshopde`** (DE). Click-ids captured to `localStorage` (`oz_track`).
- On-page pricing (JSON-LD + copy): 1 pack **€54,90** / 2-pack **€79,95** / 3-pack **€109,95**; 30-day money-back claim.
- Impressum is **email-only**: `kontakt@ozem-plus.store` (no physical address).
- Homepage title uses a special char + legit-check hook: "Ozem+ Erfahrungen: Seriös oder Betrug? ⭐ Ehrlicher Test 2026" (CTR lever); Product + FAQPage + BreadcrumbList JSON-LD present.

## Decisions already made
- Domain + brand settled on **ozem-plus.store / "Ozem+"** (git history shows a switch away from an earlier `ozem-shop.de` brand).
- **"Ozem+ seriös oder Betrug?" legit-check section** added as the traffic driver (the Coolizi pattern).
- **"Not the seller / not official" language was deliberately REMOVED** across the site (commit `9f3e5c0`); affiliate disclosure is kept. Do not re-add the "not official" wording.
- Link masking via `/go/`, email-only Impressum, and NL/IT/PL geo pages built to parity with DE.
- Sitemap is index-only for content pages; legal pages are `noindex`.

## Dead ends — do NOT redo
- OZEM / Oz+ is on Germany's Verbraucherzentrale official fake-advertising scam list (verified in the sibling `offer-strategy` research). The site deliberately does NOT reproduce the fake "Höhle der Löwen" endorsement or a prescription-drug comparison (German HWG/UWG compliance). Keep it that way.
- Do NOT re-introduce "we are not the official seller" language — it was removed on purpose.

## Open / next
- **Tracking inconsistency to resolve:** this site puts the gclid on `sub1`, but the sibling `ozem-hub` config and the `offer-strategy` research both say the merchant may overwrite `sub1` and the gclid should ride on `sub2` for the Everflow postback. Confirm which sub-param actually survives to the postback before relying on paid-conversion attribution.
- No other open items evidenced on disk — ongoing SEO/content. Ask Dominic before any push to this live, ranking-sensitive site.
