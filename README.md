# DJ Drew Segura | djdrewofficial.com

Personal brand site for **DJ Drew Segura, "El Gringo Dominicano"**: a bilingual (EN/ES) DJ, MC and content creator.
It leads with **brands & activations** and also covers **weddings** and **nightlife**.

Built with **Astro** (no UI framework, vanilla CSS) and hosted on **Cloudflare Pages**.

## Run it

```bash
npm install
npm run dev        # http://localhost:4340
npm run build      # static output -> ./dist
npx wrangler pages dev dist   # test /api/lead + _redirects locally
```

## Design system (v2)

| Token | Value | Use |
|---|---|---|
| `--pink` | `#ff2d87` | hot pink, the primary brand color |
| `--noche` | `#13081a` | plum-black night background / text |
| `--palm` | `#0c5a48` | palm-leaf green |
| `--mango` | `#ffb627` | small sticker accents |
| `--blanco` | `#fff6fa` | pink-white light sections |

**Type:** Anton (display caps), Shrikhand (script, used for the Spanish lines and "El Gringo Dominicano"), DM Sans (body). All three come from Google Fonts.

**Signature moves:** procedurally drawn palm fronds (`Frond.astro`), arched photo frames, a hard-offset pink shadow on cards, Spanish script accents, and a ticker marquee.

## Structure

```
src/
  layouts/Brand.astro        # <head>, SEO/OG, JSON-LD, nav + footer, reveal script
  lib/site.ts                # SINGLE SOURCE OF TRUTH: contact, socials, nav, genres, venues, FAQs, SMS consent
  lib/icons.ts               # inline SVG icons
  components/
    SiteNav / SiteFooter     # shared chrome (nav `light` prop for dark heroes)
    PageHero                 # inner-page hero (pink | dark | palm)
    BookBand                 # closing CTA band (`type` pre-selects form)
    LeadForm                 # booking form → POST /api/lead
    Faq                      # accordion + FAQPage schema
    Shot                     # photo slot (real image or labeled placeholder)
    Frond                    # palm frond SVG
  pages/  index · about · brands · weddings · nightlife · book · 404
  styles/brand.css           # tokens, home sections
  styles/pages.css           # inner-page sections
functions/api/lead.js        # Cloudflare Pages Function → GoHighLevel webhook
public/_redirects            # old v1 URLs → new pages
public/images/               # web-sized photos (originals live in Dropbox, gitignored _photos/)
```

## Lead form

`/book` (and the homepage form) POST JSON to `/api/lead`. The function forwards it to the GoHighLevel inbound webhook.
Each lead is tagged `djdrewofficial-{brand|nightlife|wedding|other}` with source `Website — djdrewofficial.com (…)`.

Set this in Cloudflare Pages → Settings → Environment variables:

- `GHL_WEBHOOK_URL`: the HighLevel inbound webhook URL

Until it's set, the form tells visitors to text 954-233-0698.

## Still to do

- **Brand logos** for the "Brands I've worked with" row (homepage + /brands).
- **Reels:** swap the content-grid stills for short muted video clips if wanted.
- Real reviews/testimonials (the v1 placeholder reviews were removed on purpose).
