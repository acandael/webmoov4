import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_xaltc5_f.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "500 - Server Error | Webmoov", "description": "Er is een fout opgetreden", "data-astro-cid-5v2qf5k4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section error-page" data-astro-cid-5v2qf5k4> <div class="container" data-astro-cid-5v2qf5k4> <h1 data-astro-cid-5v2qf5k4>500 - Server Fout</h1> <p data-astro-cid-5v2qf5k4>Er is een onverwachte fout opgetreden. Probeer het later opnieuw.</p> <a href="/" class="button" data-astro-cid-5v2qf5k4>Terug naar home</a> </div> </section> ` })} `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/500.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$500,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
