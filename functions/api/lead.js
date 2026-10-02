/**
 * Cloudflare Pages Function — djdrewofficial.com booking inquiry.
 *
 * The browser POSTs JSON to /api/lead. This validates it, drops honeypot
 * spam, and forwards a clean payload to the GoHighLevel inbound webhook, so
 * the webhook URL never appears in page source.
 *
 * Cloudflare Pages → Settings → Environment variables:
 *   GHL_WEBHOOK_URL = https://services.leadconnectorhq.com/hooks/.....
 */
const TYPE_LABEL = {
  brand: "Brand / Activation",
  nightlife: "Club / Venue",
  wedding: "Wedding",
  other: "Other",
};

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: real people never fill this. Pretend success so bots don't retry.
  if (data.website) return json({ ok: true });

  if (!data.firstName || !data.email || !data.phone) {
    return json({ ok: false, error: "Please add your name, email and phone." }, 422);
  }

  const webhook = env.GHL_WEBHOOK_URL;
  if (!webhook) {
    return json({ ok: false, error: "Online booking isn't connected yet." }, 503);
  }

  const type = TYPE_LABEL[data.eventType] ? data.eventType : "other";
  const payload = {
    firstName: str(data.firstName),
    lastName: str(data.lastName),
    email: str(data.email),
    phone: str(data.phone),
    eventType: TYPE_LABEL[type],
    eventDate: str(data.eventDate),
    venueName: str(data.venueName),
    notes: str(data.notes),
    smsConsent: data.smsConsent ? "Yes" : "No",
    consentText: data.smsConsent ? str(data.consentText) : "",
    source: `Website — djdrewofficial.com (${TYPE_LABEL[type]})`,
    sourcePage: str(data.sourcePage),
    tag: `djdrewofficial-${type}`,
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return json({ ok: false, error: "Couldn't send that right now." }, 502);
  } catch {
    return json({ ok: false, error: "Network error." }, 502);
  }
  return json({ ok: true });
}

const str = (v) => (v == null ? "" : String(v).trim().slice(0, 2000));

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
