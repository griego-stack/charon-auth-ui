import tailwindcss from "@tailwindcss/vite";
import type { NuxtPage } from "@nuxt/schema";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  dir: { pages: "features" },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },

  hooks: {
    "pages:extend"(pages) {
      function filterAndFixPaths(pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = [];

        for (const page of pages) {
          if (page.file) {
            const isValid = /\/page\.(vue|js|jsx|mjs|ts|tsx)$/.test(page.file);

            if (!isValid) {
              pagesToRemove.push(page);
              continue;
            }

            page.path = page.path.replace(/\/page/, "");
          }

          if (page.children?.length) {
            filterAndFixPaths(page.children);
          }
        }

        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1);
        }
      }

      filterAndFixPaths(pages);
    },
  },

  modules: ["@nuxt/image"],
});