import tailwindcss from "@tailwindcss/vite";
import type { NuxtPage } from "@nuxt/schema";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  dir: { pages: "features" },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: {
    public: {
      frontendURL: process.env.FRONTEND_URL || "http://localhost:3000",
      backendURL: process.env.BACKEND_URL || "http://localhost:8000",
      apiURL: process.env.API_URL || "http://localhost:8000/api",
      appName: process.env.APP_NAME || "Charon Auth UI",
      googleClientId: process.env.GOOGLE_CLIENT_ID || "",
      githubClientId: process.env.GITHUB_CLIENT_ID || "",
      githubRedirectUri: process.env.GITHUB_REDIRECT_URI || "",
    },
  },
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
  modules: ["@nuxt/image", "@nuxt/icon"],
});
