// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.webmoov.be",
	output: "server",
	adapter: vercel(),
	integrations: [react(), sitemap()],
	redirects: {
		"/en": {
			status: 302,
			destination: "/",
		},
		"/nl": {
			status: 302,
			destination: "/",
		},
		"/en/ecommerce-website": {
			status: 302,
			destination: "/ecommerce-website",
		},
		"/nl/standard-website//": {
			status: 302,
			destination: "/one-pager-website",
		},
		"/en/services/": {
			status: 302,
			destination: "/#producten",
		},
		"/nl/blog/": {
			status: 302,
			destination: "/blog",
		},
		"/en/premium-website/": {
			status: 302,
			destination: "/premium-website",
		},
		"/nl/services/": {
			status: 302,
			destination: "/#producten",
		},
		"/en/terms-of-service/": {
			status: 302,
			destination: "/algemene-voorwaarden",
		},
		"/nl/contact/": {
			status: 302,
			destination: "/contact",
		},
		"/nl/ecommerce-website/": {
			status: 302,
			destination: "/ecommerce-website",
		},
		"/nl/about/": {
			status: 302,
			destination: "/over-ons",
		},
		"/nl/premium-website/": {
			status: 302,
			destination: "/premium-website",
		},
		"/nl/terms-of-service/": {
			status: 302,
			destination: "/algemene-voorwaarden",
		},
	},
});
