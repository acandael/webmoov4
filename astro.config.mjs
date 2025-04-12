// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    ssr: {
      noExternal: ["astro"],
    },
  },
  output: "server",
  adapter: vercel(),
});