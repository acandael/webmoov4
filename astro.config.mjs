// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.webmoov.be",
	integrations: [react(), sitemap()],

	vite: {
		ssr: {
			noExternal: ["astro"],
		},
	},
	output: "server",
	adapter: vercel(),
});
