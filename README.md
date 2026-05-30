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

1. **Photos.** Every image is a sized `<Placeholder>` showing the exact px dimensions + a suggested filename. Drop real photos into `public/images/` and swap the `<Placeholder>` for an `<img>`. Priority shots: Drew portrait (900×1100), gallery dance-floor moments, couple avatars.
2. **Testimonials.** The three couples in `src/pages/index.astro` (`couples` array) are **placeholder copy** — replace with real, verified reviews (and real names/venues with permission).
3. **Lead form.** The `#leadForm` posts to `https://formspree.io/f/REPLACE_ME`. Create a free [Formspree](https://formspree.io) form (or your own endpoint) and paste the real action URL. Until then the form shows the success state but does **not** deliver. Leads can also text 954·233·0698.
4. **Domain.** Set the real domain in `astro.config.mjs` (`site`) and in `public/robots.txt`.
5. **OG image.** `public/og.svg` is a branded share card. For best compatibility on every platform, export it to a 1200×630 `og.png` and point `ogImage` (in `Base.astro`) at it.
6. **Real numbers.** Stats (150 weddings/yr, 100+ reviews, etc.) come from the Xpress profile — confirm before publishing.

## Structure

```
src/
  layouts/Base.astro        # <head>, SEO/OG, fonts, LocalBusiness JSON-LD
  components/
    Nav.astro  Footer.astro
    Placeholder.astro       # sized image placeholders
    Record.astro            # spinning vinyl SVG
    Equalizer.astro         # animated EQ bars
  pages/
    index.astro             # the whole one-page experience + all JS
    404.astro
  styles/global.css         # the entire design system
```

## Contact (real)

Phone **954·233·0698** · Email **drew@xpressdjs.com** · IG **@djdrewofficial**
