# DuckFlooring presentation website

A responsive, accessible contractor website built from the supplied DuckFlooring demo package. The site is intentionally marked as a presentation demo and is not approved for public launch.

## Run locally

Use Node.js 22.13 or newer. Run `npm install`, then `npm run dev`. Create a production build with `npm run build`; run the server-render test with `node --test tests/rendered-html.test.mjs`.

## Before launch

Confirm and replace the following with owner-approved information and media:

- Official legal/business name and high-resolution logo.
- Complete service list, service area, business email, and preferred public address policy.
- Phone number and hours shown in the supplied listing snapshot.
- Original, publishable project photography and any before/after pairs.
- Exact testimonial wording and permission to publish.
- License, insurance, warranty, financing, social-link, and availability claims, if used.
- Domain name, privacy notice, and approved destination for quote requests.

The quote form is front-end only. It does not transmit or store personal information.

## Deployment handoff

Do not deploy until the owner approves the content and media. This project targets the included Cloudflare-compatible Sites runtime. For Netlify or GitHub Pages, first export or adapt it as a static site; the current build is server-rendered and is not a drop-in static Pages bundle. Never place form-service secrets in client code.
