// =====================================================================
//  Mixes page data. Add a mix: drop a 960×540 cover in public/images/mixes/
//  and add an entry under the right genre.
//   - Mixcloud: `mixcloud` = the path after mixcloud.com (e.g. "/djdrewofficial/slug/")
//   - YouTube:  `youtube`  = the video id
// =====================================================================

export type Mix = {
  title: string;
  sub: string;           // genres / vibe line
  img: string;
  length?: string;       // e.g. "31 min"
  year?: string;
  mixcloud?: string;
  youtube?: string;
};

export type Genre = { id: string; name: string; script: string; blurb: string; mixes: Mix[] };

export const GENRES_MIXES: Genre[] = [
  {
    id: "latin", name: "Latin", script: "pa' que bailes",
    blurb: "Reggaetón, merengue, dembow, salsa and bachata. The stuff that gets the tías up first.",
    mixes: [
      { title: "Dominican x Afrobeats Wedding Live Set", sub: "Reggaetón · Merengue · Dembow · Salsa · Afrobeats", img: "/images/mixes/dominican-afrobeats.jpg",
        length: "31 min", year: "2026", mixcloud: "/djdrewofficial/dominican-x-afrobeats-wedding-live-set-2026-reggaeton-merengue-dembow-salsa-miami-wedding/" },
      { title: "Live Wedding DJ Set", sub: "Reggaetón · 00s Hip-Hop · Salsa · South Florida", img: "/images/mixes/live-wedding-set.jpg",
        youtube: "8jkro4IHl2g" },
      { title: "Latin Music Quick Mix", sub: "Salsa · Merengue · Dembow · Reggaetón · Latin Pop", img: "/images/mixes/latin-quick-mix.jpg",
        length: "24 min", year: "2022", mixcloud: "/djdrewofficial/latin-music-quick-mix-salsa-merengue-dembow-reggaeton-latin-pop/" },
    ],
  },
  {
    id: "hiphop-rnb", name: "Hip-Hop & R&B", script: "throwback vibes",
    blurb: "2000s R&B, hip-hop classics and slow-burn singalongs.",
    mixes: [
      { title: "2000s R&B Balcony Set", sub: "Vacation vibes · 2000s R&B", img: "/images/mixes/rnb-balcony.jpg",
        youtube: "N8tCOLNTKTk" },
    ],
  },
  {
    id: "edm-house", name: "EDM & House", script: "hasta que salga el sol",
    blurb: "Club edits, bootlegs, house and big-room energy, straight from the warm-up slot.",
    mixes: [
      { title: "Weekend Warm-up Mix · EP. 004", sub: "EDM · House · DJ Edits · Remixes", img: "/images/mixes/warmup-004.jpg",
        length: "60 min", year: "2022", mixcloud: "/djdrewofficial/dj-drews-weekend-warm-up-mix-ep-004/" },
      { title: "Weekend Warm-up Mix · EP. 003", sub: "EDM · Dance · Bootlegs · Remixes", img: "/images/mixes/warmup-003.jpg",
        length: "64 min", year: "2022", mixcloud: "/djdrewofficial/dj-drews-weekend-warm-up-mix-ep-003/" },
      { title: "Weekend Warm-up Mix · EP. 002", sub: "EDM · Pop Remixes · Mash-ups · Club", img: "/images/mixes/warmup-002.jpg",
        length: "63 min", year: "2022", mixcloud: "/djdrewofficial/dj-drews-weekend-warm-up-mix-ep-002/" },
      { title: "Weekend Warm-up Mix · EP. 001", sub: "EDM · Pop · Mash-ups · Club", img: "/images/mixes/warmup-001.jpg",
        length: "58 min", year: "2022", mixcloud: "/djdrewofficial/dj-drews-weekend-warm-up-mix-ep-001/" },
      { title: "Chemistry Nightclub Warm-up", sub: "House · Tribal · Greensboro, NC", img: "/images/mixes/chemistry-nc.jpg",
        length: "75 min", year: "2021", mixcloud: "/djdrewofficial/djdrewofficial-chemistry-nightclub-greensboro-nc-warmup-mix/" },
    ],
  },
  {
    id: "live", name: "Live Sets", script: "en vivo",
    blurb: "Filmed from the booth: real rooms, real crowds, open format.",
    mixes: [
      { title: "Live at Hunters Nightclub", sub: "Sept 12, 2026 · Wilton Manors", img: "/images/mixes/hunters-live-2026.jpg",
        youtube: "QDsjlruq4As" },
      { title: "DJ + Live Sax Set", sub: "Live sax on a packed wedding floor", img: "/images/mixes/live-sax.jpg",
        youtube: "bOpxsFJ2WGI" },
    ],
  },
];
