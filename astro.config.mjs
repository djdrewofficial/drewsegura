// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://djdrewofficial.com",
  // Emit about.html (not about/index.html) so Cloudflare Pages serves /about
  // directly instead of 308-redirecting to /about/.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [sitemap()],
  server: { port: 4340 },
  devToolbar: { enabled: false },
});
