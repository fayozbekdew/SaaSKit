import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "autoUpdate",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "SaaS Kit",
    short_name: "SaaS",
    description: "Saas PWA App",
    icons: [
      {
        src: "/logo-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-180.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    runtimeCaching: [
      {
        urlPattern: /^http:\/\/localhost:5173\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "image-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 7 },
        },
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  server: {
    headers: {
      "Content-Type": "application/javascript",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  // plugins: [react()],
});
