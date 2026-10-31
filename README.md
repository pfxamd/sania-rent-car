# SANIA RENT CAR

Modern car-rental website concept in Tétouan, Morocco. Designed and developed by [PFXAMD](https://pfxamd.com).

## Features

- 12 vehicles with individual pages and color-block SVG placeholders
- Fleet filters and three-car comparison
- Four-language interface: French, English, Spanish, Arabic (RTL)
- Booking request calculator with optional extras and WhatsApp message sharing
- Responsive, keyboard-friendly, reduced-motion-aware interface
- Static pages for GitHub Pages under the `/sania-rent-car/` base path

## Development

Use `pnpm install` and `pnpm dev`. Build with `pnpm build` (Astro 7). The `docs/` directory also includes the initial, dependency-free prebuilt static deployment so GitHub Pages can publish directly from `main` → `/docs` without GitHub Actions.

**Important:** The first build uses illustrative prices, specifications and flat placeholders. There is no backend, availability database, actual reservation confirmation, payment handling or real agency contact number. WhatsApp sharing prepares a request message, not a confirmed booking.

## GitHub Pages

Set **Settings → Pages → Deploy from a branch → main → /docs → Save**.

Site: https://pfxamd.github.io/sania-rent-car/
