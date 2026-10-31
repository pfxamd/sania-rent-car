# SANIA RENT CAR

A modern car-rental website concept based in Tétouan, Morocco. Designed and developed by [PFXAMD](https://pfxamd.com).

**Live site:** https://pfxamd.github.io/sania-rent-car/

## Features
- 12 cars with individual detail pages
- Fleet filtering, up-to-three-car comparison
- 4 UI languages: French, English, Spanish and Arabic with RTL
- Price estimator and WhatsApp booking-request composer (no booking confirmations)
- Responsive custom layout and flat-color car artwork placeholders
- SEO metadata, sitemap and static pages

## Publishing
GitHub Pages is configured to publish **main / (root)**. The ready-to-serve static site lives at the repository root: `index.html`, `assets/`, the route folders and `.nojekyll`. Any push to `main` updates that live site through GitHub Pages.

The mirrored `docs/` output is retained for source-build workflows; it is **not** the active publishing location.

## Development
The Astro/TypeScript source lives in `src/`. Development scripts: `pnpm install`, `pnpm dev`, `pnpm build`. Keep the root static export synchronized with the updated site when publishing from `main / (root)`.

**Concept disclaimer:** prices, models, years, vehicle specifications, and services are illustrative. No real vehicle inventory, confirmed availability, real agency phone number, or payment processing is connected. Photos and brand asset production are deliberately deferred.
