export default defineNuxtPlugin({
  name: "env",
  enforce: "pre",
  setup(nuxtApp) {
    nuxtApp.provide("env", {
      frontendURL: process.env.FRONTEND_URL || "http://localhost:3000",
      backendURL: process.env.BACKEND_URL || "http://localhost:8000",
      appName: process.env.APP_NAME || "Charon Auth UI",
      // Google OAuth
      googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    });
  },
});
