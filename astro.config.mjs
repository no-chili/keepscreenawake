// @ts-check
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: true,
  },
  site: "https://keepscreenawake.org",
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        // 包含根路径和所有语言路径，带/结尾
        const url = new URL(page);
        const validPaths = [
          "/",
          "/zh/",
          "/ja/",
          "/ko/",
          "/es/",
          "/fr/",
          "/de/",
          "/ru/",
          "/en/",
        ];
        return validPaths.includes(url.pathname);
      },
      changefreq: "monthly",
      priority: 1.0,
    }),
    partytown({ config: { forward: ["dataLayer.push", "gtag"] } }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
