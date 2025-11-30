import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Ch6siUc9.mjs';
import { manifest } from './manifest_CNsaZT6k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/algemene-voorwaarden.astro.mjs');
const _page2 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page3 = () => import('./pages/blog/_page_.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/ecommerce-website.astro.mjs');
const _page7 = () => import('./pages/one-pager-website.astro.mjs');
const _page8 = () => import('./pages/ons-werk.astro.mjs');
const _page9 = () => import('./pages/over-ons.astro.mjs');
const _page10 = () => import('./pages/premium-website.astro.mjs');
const _page11 = () => import('./pages/projects/_project_.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/algemene-voorwaarden.astro", _page1],
    ["src/pages/api/sendEmail.json.ts", _page2],
    ["src/pages/blog/[page].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/ecommerce-website.astro", _page6],
    ["src/pages/one-pager-website.astro", _page7],
    ["src/pages/ons-werk.astro", _page8],
    ["src/pages/over-ons.astro", _page9],
    ["src/pages/premium-website.astro", _page10],
    ["src/pages/projects/[project].astro", _page11],
    ["src/pages/rss.xml.ts", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c064f51d-815b-471c-a0a1-c43dbac74e06",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
