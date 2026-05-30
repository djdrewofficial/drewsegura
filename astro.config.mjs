// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to the live domain before launch.
export default defineConfig({
  site: "https://djdrewofficial.com",
  integrations: [sitemap()],
  server: { port: 4340 },
  devToolbar: { enabled: false },
});
