import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://me.knutech.net",
  outDir: "../../dist/apps/me",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
