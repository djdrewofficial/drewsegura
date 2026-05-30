// =====================================================================
//  Single source of truth for DJ Drew Segura's site.
//  All pages import from here so nav, contact info, services, reviews
//  and SEO copy stay consistent.
// =====================================================================

export const CONTACT = {
  name: "Drew Segura",
  brand: "DJ Drew Segura",
  phoneDisplay: "954·233·0698",
  phoneDial: "+19542330698",
  phoneSms: "19542330698",
  email: "drew@xpressdjs.com",
  company: "Xpress Entertainment",
  companyUrl: "https://xpressdjs.com",
  areas: ["Miami", "Fort Lauderdale", "Palm Beach", "Boca Raton", "The Florida Keys"],
};

export const SOCIALS = [
  { label: "Instagram", handle: "@djdrewofficial", href: "https://instagram.com/djdrewofficial", icon: "ig" },
  { label: "TikTok", handle: "@djdrewofficiall", href: "https://tiktok.com/@djdrewofficiall", icon: "tt" },
  { label: "YouTube", handle: "@djdrewofficial", href: "https://youtube.com/@djdrewofficial", icon: "yt" },
  { label: "MixCloud", handle: "djdrewofficial", href: "https://mixcloud.com/djdrewofficial", icon: "mc" },
  { label: "SoundCloud", handle: "djdrewofficial", href: "https://soundcloud.com/djdrewofficial", icon: "sc" },
];

// Primary nav — every item is a real page.
export const NAV = [
  { href: "/weddings", label: "Weddings" },
  { href: "/about", label: "My Story" },
  { href: "/build-your-floor", label: "Build Your Floor" },
  { href: "/reviews", label: "Real Couples" },
  { href: "/faq", label: "FAQ" },
];

export const VENUES = [
  "The Biltmore", "Villa Toscana", "The Cruz Building", "Temple House",
  "Deering Estate", "W Fort Lauderdale", "Crystal Ballroom", "Rusty Pelican",
];

export const GENRES = [
  "Reggaetón", "Salsa", "Merengue", "Bachata", "2000s Hip-Hop", "Afrobeats",
  "EDM / House", "Pop Anthems", "Throwbacks", "Cumbia", "Freestyle", "Amapiano",
];

// The "tracklist" of what a wedding with Drew includes.
export const TRACKS = [
  { no: "A1", t: "Ceremony Sound", rt: "I DO", slug: "ceremony",
    d: "Clean wireless mics so your vows actually get heard, and the right song cued the second those doors open. nobody fumbling with a phone, no feedback squeal — just the part where everybody tears up a little.",
    tags: ["Wireless Mics", "Processional", "Cues"] },
  { no: "A2", t: "Cocktail Hour", rt: "60:00", slug: "cocktail",
    d: "Easy open-format while everybody finds the bar, their seat, and their second drink. this is the part nobody notices i'm doing, which is kinda the point — i'm quietly setting the temperature for the whole night.",
    tags: ["Open Format", "Lounge", "Vibe-setting"] },
  { no: "A3", t: "The Grand Entrance", rt: "1:30", slug: "entrance",
    d: "I announce you two like you're headlining the building. you walk in to your song, the room loses it, and the party officially has a heartbeat. this is where the energy for the whole night gets set.",
    tags: ["Hype", "MC", "Custom Intro"] },
  { no: "B1", t: "The Dance Floor", rt: "∞", slug: "dance-floor",
    d: "the whole reason you hire a real dj and not a playlist. open-format mixing that jumps reggaetón into 2000s hip-hop into a salsa your tía screams for into the edm your friends came for — and never clears the floor doing it.",
    tags: ["Reggaetón", "Salsa", "2000s", "EDM", "Throwbacks"] },
  { no: "B2", t: "Bilingual MC / Hosting", rt: "INCL.", slug: "mc",
    d: "i run the whole night in english and spanish so nobody's standing there lost and both sides of the family feel it. announcements that sound like a person, not a robot reading cards. transitions you never even notice happening.",
    tags: ["EN / ES", "Crowd Control", "Hosting"] },
  { no: "B3", t: "The Extras", rt: "+ADD-ON", slug: "extras",
    d: "want the wow stuff? uplighting in your colors, your monogram on the dance floor, cold sparks for the first dance, dancing on the clouds. we add what makes you say 'oh that's sick' and skip whatever you don't care about.",
    tags: ["Uplighting", "Monogram", "Cold Sparks", "Clouds"] },
];

// NOTE: placeholder reviews — swap for real, verified ones (with permission) before launch.
export const REVIEWS = [
  { q: "our dance floor did not empty one single time the entire night. drew had my colombian side and my husband's jersey crew dancing to the same songs. i still don't know how he did it.",
    n: "Daniela & Marcus", v: "Villa Toscana, Miami", date: "Mar 2025", source: "Google" },
  { q: "having a bilingual MC meant my abuela understood every word and my friends never stopped screaming. that combo is so hard to find and drew just gets it.",
    n: "Sofía & James", v: "The Cruz Building", date: "Nov 2024", source: "The Knot" },
  { q: "we literally handed him three songs and said 'read the room from here.' best call we made the entire wedding. not even close.",
    n: "Ana & Chris", v: "W Fort Lauderdale", date: "Jun 2025", source: "Zola" },
  { q: "i'm a planner and i've worked with a LOT of djs. drew is on a different level with how he reads a crowd. my couple cried, then danced for four hours straight.",
    n: "Marisol R.", v: "Wedding Planner · Miami", date: "Feb 2025", source: "Google" },
  { q: "he texted me back the same day, gave me a real price with no weird upsells, and then absolutely delivered. the whole thing was easy from start to finish.",
    n: "Kayla & Devin", v: "Deering Estate", date: "Apr 2025", source: "The Knot" },
  { q: "the grand entrance he gave us is still the thing our families talk about. he made us feel like celebrities walking into our own party.",
    n: "Priya & Luis", v: "Temple House, Miami Beach", date: "Dec 2024", source: "Google" },
];

export const FAQS = [
  { q: "How much does a wedding DJ cost in South Florida?",
    a: "honestly it depends on the day — how many guests, how many hours, whether you want ceremony sound, lighting, all the fun extras. most of my couples land in a clear custom package with no surprise fees hiding in the fine print. send me your date and i'll send back real numbers. no pressure either way, i promise i'm not gonna chase you around." },
  { q: "Do you really MC a wedding in both English and Spanish?",
    a: "yep, every single time. i host bilingually so your abuelos and your college friends are all locked into the same moment. i grew up dominican-american switching between both languages at home, so on the mic it's just natural — it's not a gimmick i bolt on." },
  { q: "Can we pick the songs — and the ones we never want to hear?",
    a: "100%. your must-plays, your absolutely-do-not-play list, your special dances — all yours. from there i read the actual room and adjust on the fly. it stays your night. i'm just the guy making sure it never drags." },
  { q: "What happens if your gear dies in the middle of the reception?",
    a: "it won't leave you stranded — i carry full backups for every important piece of gear and i show up early to soundcheck all of it. fifteen years and well over a thousand events in, i have never once missed a date. that's not luck, it's just how i prepare." },
  { q: "Do you travel outside Miami and Fort Lauderdale?",
    a: "for sure. i play palm beach, boca, naples, the keys, and destination weddings pretty regularly. if you've got a venue and a date anywhere in or around south florida, just ask and we'll figure it out." },
  { q: "Do you cover the ceremony, cocktail hour, AND reception?",
    a: "all of it, and it flows like one continuous night — wireless mics for your vows, easy open-format during cocktail hour, then a reception that does not let anybody important sit down." },
  { q: "How far in advance should we book?",
    a: "peak-season saturdays (especially in the fall) tend to book 9 to 14 months out. if your date's sooner than that, still reach out — i sometimes have room and i genuinely love a good last-minute floor." },
  { q: "Are you a one-man show or a whole company?",
    a: "both, kinda. i dj your wedding personally — that part's me. but i'm backed by Xpress Entertainment, the company i built, so there's a real team behind the scenes handling logistics, backups, photo booths, lighting, all of it. you get a solo artist with a full crew behind him." },
];
