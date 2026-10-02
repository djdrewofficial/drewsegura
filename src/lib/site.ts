// =====================================================================
//  Single source of truth for djdrewofficial.com (v2, "El Gringo Dominicano").
//  Contact info, nav, socials, venues and FAQs live here so every page
//  stays consistent.
// =====================================================================

export const CONTACT = {
  name: "Drew Segura",
  brand: "DJ Drew Segura",
  persona: "El Gringo Dominicano",
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

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/weddings", label: "Weddings" },
  { href: "/nightlife", label: "Nightlife" },
];

export const GENRES = [
  "Reggaetón", "Salsa", "Merengue", "Bachata", "Dembow", "2000s Hip-Hop", "Afrobeats",
  "House", "Pop", "Throwbacks", "Cumbia", "Freestyle", "Amapiano", "Top 40",
];

export const NIGHT_VENUES = ["Vibe Las Olas", "American Social", "The Manor", "Scorpio", "Rumors", "Johnsons", "Leboy"];

// "Brands I've worked with". Logos: white-on-transparent PNGs in public/images/brands/ (keep them uniform).
export const BRANDS: { name: string; logo?: string }[] = [
  { name: "Big Gay Cruise", logo: "/images/brands/big-gay-cruise.png" },
  { name: "Hunters Nightclub", logo: "/images/brands/hunters-nightclub.png" },
  { name: "DRV PNK Stadium", logo: "/images/brands/drv-pnk-stadium.png" },
  { name: "El Car Wash", logo: "/images/brands/el-car-wash.png" },
  { name: "VITAS Healthcare", logo: "/images/brands/vitas-healthcare.png" },
];

// Featured reels on the homepage "Follow the vibe" grid. Covers live in public/images/reels/.
export const REELS: { platform: "tiktok" | "instagram"; url: string; embed: string; thumb: string; cap: string }[] = [
  { platform: "tiktok", cap: "El Tao Tao",
    url: "https://www.tiktok.com/@djdrewofficiall/video/7521451275133668639",
    embed: "https://www.tiktok.com/embed/v2/7521451275133668639", thumb: "/images/reels/tt-el-tao-tao.jpg" },
  { platform: "tiktok", cap: "Mi gente latina",
    url: "https://www.tiktok.com/@djdrewofficiall/video/7667323693571263774",
    embed: "https://www.tiktok.com/embed/v2/7667323693571263774", thumb: "/images/reels/tt-gente-latina.jpg" },
  { platform: "instagram", cap: "Crazy in Love mashup",
    url: "https://www.instagram.com/reel/Dc1QeDBx4iN/",
    embed: "https://www.instagram.com/reel/Dc1QeDBx4iN/embed/", thumb: "/images/reels/ig-crazy-in-love.jpg" },
  { platform: "instagram", cap: "A little fun",
    url: "https://www.instagram.com/reel/DccWkYfRUOK/",
    embed: "https://www.instagram.com/reel/DccWkYfRUOK/embed/", thumb: "/images/reels/ig-little-fun.jpg" },
  { platform: "instagram", cap: "Lady, at Hunters",
    url: "https://www.instagram.com/reel/Da_pwGDx0QU/",
    embed: "https://www.instagram.com/reel/Da_pwGDx0QU/embed/", thumb: "/images/reels/ig-hunters-modjo.jpg" },
];

export const EVENT_TYPES = [
  { value: "brand", label: "Brand / Activation" },
  { value: "nightlife", label: "Club / Venue" },
  { value: "wedding", label: "Wedding" },
  { value: "other", label: "Something else" },
];

export const WEDDING_FAQS = [
  { q: "How much does it cost to book you for a wedding?",
    a: "It depends on the day: how many hours, how many guests, whether you need ceremony sound, lighting and extras. Send me your date and I'll send back real numbers in a clear package, with no surprise fees in the fine print." },
  { q: "Do you really MC in both English and Spanish?",
    a: "Every single time. I grew up Dominican-American switching between both at home, so on the mic it's just natural. Your abuelos and your college friends are locked into the same moment." },
  { q: "Can we pick the songs, and the ones we never want to hear?",
    a: "100%. Your must-plays, your do-not-play list and your special dances are all yours. From there I read the actual room and adjust on the fly." },
  { q: "Do you cover the ceremony, cocktail hour and reception?",
    a: "All of it, run as one continuous night: wireless mics for your vows, easy open-format during cocktail hour, then a reception that keeps everybody on the floor." },
  { q: "What if gear fails mid-reception?",
    a: "I carry backups for every important piece of gear and show up early to soundcheck all of it. After well over a thousand events, I have never missed a date." },
  { q: "Are you a solo DJ or a whole company?",
    a: "Both. I DJ your wedding personally, and I'm backed by Xpress Entertainment, the company I built. There's a full team behind the scenes for logistics, backups, photo booths and lighting." },
  { q: "How far ahead should we book?",
    a: "Peak-season Saturdays, especially in the fall, usually book 9 to 14 months out. If your date is sooner, still reach out. I sometimes have room." },
];

export const BRAND_FAQS = [
  { q: "What kinds of brand events do you work?",
    a: "Activations, launches, pop-ups, store openings, festivals, corporate events, sports and halftime moments, and galas. If there's a crowd that needs energy and a mic that needs a voice, I'm in." },
  { q: "Can you host in both English and Spanish?",
    a: "Yes. I MC fully bilingual, which matters a lot in South Florida. Your message lands with the whole crowd, not half of it." },
  { q: "Do you create content at the event?",
    a: "I can. I capture reels, TikToks and behind-the-scenes while it's happening and post to my own audience. We agree up front on what gets made, what you need to approve, and how you can use it." },
  { q: "Do you bring your own sound and equipment?",
    a: "I can bring a full professional setup through Xpress Entertainment, including sound, mics and lighting, or plug into your production team's system. Tell me what the venue has and I'll fill the gaps." },
  { q: "Do you travel?",
    a: "Yes. I'm based in South Florida and work all over Miami, Fort Lauderdale and Palm Beach. I travel for the right event, too. Send the details and we'll figure it out." },
];

export const LEAD_CONSENT =
  "I consent to receive SMS messages from DJ Drew Segura / Xpress Entertainment about my inquiry and booking. Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for help.";
