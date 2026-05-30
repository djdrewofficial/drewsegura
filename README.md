# DJ Drew Segura — djdrewofficial.com

The lead-generation site for **DJ Drew Segura**, a bilingual (EN/ES) wedding DJ & MC serving Miami, Fort Lauderdale & South Florida.

Built with **Astro** (no UI framework, vanilla CSS). Concept: **"Your Wedding Mixtape"** — a warm, editorial *vinyl liner-notes* aesthetic. Deliberately different from the dark/neon-gradient look of the Xpress Entertainment and REmixed Events sites.

## Run it

```bash
npm install
npm run dev        # http://localhost:4340
npm run build      # static output -> ./dist
npm run preview    # preview the build on :4340
```

Node 18.20+ / 20.3+ / 22+ recommended.

## Design system

| Token | Value | Use |
|---|---|---|
| Paper | `#F3EBDD` | warm cream background |
| Ink | `#1B1714` | espresso near-black text |
| Tangerine | `#F0502E` | Miami-sunset primary accent |
| Pine | `#124C44` | deep palm-green secondary |
| Gold | `#B5832B` | small premium accents |

**Type:** Bricolage Grotesque (display) · Hanken Grotesk (UI) · Space Mono (liner-note labels). All from Google Fonts.

**Signature moves:** spinning vinyl + tonearm hero, services as a numbered **tracklist** (Side A / Side B), an interactive **"Build Your Dance Floor"** genre mixer, **ticket-stub** testimonials, a **contact-sheet** gallery, sticker buttons with hard offset shadows, paper grain, clip-wipe reveals, plus easter eggs (click the record to scratch; Konami code for confetti 🎧).

## Before launch — replace these

1. **Photos.** Every image is a sized `<Placeholder>` showing the exact px dimensions + a suggested filename. Drop real photos into `public/images/` and swap the `<Placeholder>` for an `<img>`. Priority shots: Drew portrait (900×1100), the four story photos for `/about`, the `/weddings` per-service shots, gallery moments, couple avatars.
2. **Testimonials.** The reviews live in `src/lib/site.ts` (`REVIEWS`) and are **placeholder copy** — replace with real, verified reviews (real names/venues with permission).
3. **Lead form.** `src/pages/check-availability.astro` posts to `https://formspree.io/f/REPLACE_ME`. Create a free [Formspree](https://formspree.io) form (or your own endpoint) and paste the real action URL. Until then the form shows the success state but does **not** deliver. Leads can also text 954·233·0698. (The Build-Your-Floor mixer passes the chosen vibe through to this form via `?vibe=`.)
4. **Domain.** Set the real domain in `astro.config.mjs` (`site`) and in `public/robots.txt`.
5. **OG image.** `public/og.svg` is a branded share card. For best compatibility, export it to a 1200×630 `og.png` and point `ogImage` (in `Base.astro`) at it.
6. **Real numbers.** Stats (150 weddings/yr, 100+ reviews, 15 yrs) come from the Xpress profile / Drew's story — confirm before publishing.
7. **Audio rights.** `public/audio/drew-salsa-60.mp3` is a stock salsa loop from your Downloads. Confirm it's cleared for web use, or swap in one of Drew's own mixes.

## Structure

Multipage site — every nav item is a real, SEO-targeted page.

```
src/
  layouts/Base.astro        # <head>, SEO/OG, fonts, JSON-LD, site-wide reveal
  lib/site.ts               # SINGLE SOURCE OF TRUTH: contact, socials, nav,
                            #   venues, genres, tracklist, reviews, FAQs
  components/
    Nav.astro  Footer.astro
    Turntable.astro         # spinning vinyl + CLICK-TO-PLAY salsa track
    Record.astro            # vinyl SVG  ·  Equalizer.astro  ·  Carousel.astro
    CtaBand.astro           # reusable closing call-to-action band
    Placeholder.astro       # sized image placeholders
  pages/
    index.astro             # expanded homepage (hero → teasers for each page)
    weddings.astro          # /weddings  — full "the set" service deep-dive
    about.astro             # /about     — Drew's story in chapters + carousels
    build-your-floor.astro  # /build-your-floor — interactive genre mixer
    reviews.astro           # /reviews   — testimonials + Review schema
    faq.astro               # /faq       — FAQ + FAQPage schema
    check-availability.astro# /check-availability — the lead-capture form
    404.astro
  styles/global.css         # the entire design system
public/audio/               # drew-salsa-60.mp3 (click-to-play), -15.mp3
```

### The turntable (hero + 404)
`Turntable.astro` spins the record via `requestAnimationFrame` (decoupled
from scroll, so it never skips), and **plays/pauses a salsa clip when the
record is clicked**. It speeds up while playing, only one track plays at a
time, and it pauses when you leave the tab. Respects `prefers-reduced-motion`.
To change the song, drop a file in `public/audio/` and pass `track=` to the
component.

## Contact (real)

Phone **954·233·0698** · Email **drew@xpressdjs.com** · IG **@djdrewofficial**
