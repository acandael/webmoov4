// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    ssr: {
      noExternal: ["astro"],
    },
  },
});
