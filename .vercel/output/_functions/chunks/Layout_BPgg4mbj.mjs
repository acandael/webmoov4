import { a as createComponent, m as maybeRenderHead, e as renderComponent, g as renderScript, r as renderTemplate, b as addAttribute, c as createAstro, u as unescapeHTML, o as renderHead, d as renderSlot } from './astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
/* empty css                                        */
import { $ as $$Image } from './_astro_assets_9cdBjiFt.mjs';
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.vnaj-rwq.png","width":357,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const hamburger = new Proxy({"src":"/_astro/hamburger.CEuMSxWR.svg","width":31,"height":14,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/hamburger.svg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="site-header__inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "webmoov logo", "width": 250, "height": 100, "data-astro-cid-3ef6ksr2": true })} Webmoov
</a> <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": hamburger, "alt": "", "width": 24, "height": 24, "data-astro-cid-3ef6ksr2": true })} <span class="visually-hidden" data-astro-cid-3ef6ksr2>Menu</span> </button> <nav class="primary-navigation" id="primary-nav" data-visible="false" data-astro-cid-3ef6ksr2> <ul role="list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/over-ons" data-astro-cid-3ef6ksr2>Over Ons</a></li> <li data-astro-cid-3ef6ksr2><a href="/#producten" data-astro-cid-3ef6ksr2>Onze Producten</a></li> <li data-astro-cid-3ef6ksr2><a href="/ons-werk" data-astro-cid-3ef6ksr2>Ons Werk</a></li> <li data-astro-cid-3ef6ksr2><a href="/blog" data-astro-cid-3ef6ksr2>Blog</a></li> <li data-astro-cid-3ef6ksr2><a href="/contact" class="button-link" data-astro-cid-3ef6ksr2>Contact</a></li> </ul> </nav> </div> </div> </header>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Header.astro", void 0);

const logoDark = new Proxy({"src":"/_astro/logo-dark.B_4P2RrU.png","width":357,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/logo-dark.png";
							}
							
							return target[name];
						}
					});

const location = new Proxy({"src":"/_astro/location.CtKeYlM-.svg","width":16,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/location.svg";
							}
							
							return target[name];
						}
					});

const phone = new Proxy({"src":"/_astro/phone.CBdJHCv_.svg","width":16,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/phone.svg";
							}
							
							return target[name];
						}
					});

const envelope = new Proxy({"src":"/_astro/envelope.Y1pb98kf.svg","width":16,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/envelope.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="section site-footer text-low-contrast" data-padding="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": logoDark, "alt": "webmoov logo", "width": 300, "height": 80, "data-astro-cid-sz7xmlte": true })} <span class="footer-logo-text" data-astro-cid-sz7xmlte>Webmoov</span> </div> <p class="text-low-contrast" data-astro-cid-sz7xmlte>Digitale ervaringen die inspireren en converteren.</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Bedrijf</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/over-ons" data-astro-cid-sz7xmlte>Over ons</a></li> <li data-astro-cid-sz7xmlte><a href="/ons-werk" data-astro-cid-sz7xmlte>Over ons werk</a></li> <li data-astro-cid-sz7xmlte><a href="/#producten" data-astro-cid-sz7xmlte>Producten</a></li> <li data-astro-cid-sz7xmlte><a href="/blog" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Contact</a></li> </ul> </div> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Producten</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/one-pager-website" data-astro-cid-sz7xmlte>One Pager Website</a></li> <li data-astro-cid-sz7xmlte><a href="/premium-website" data-astro-cid-sz7xmlte>Premium Website</a></li> <li data-astro-cid-sz7xmlte><a href="/ecommerce-website" data-astro-cid-sz7xmlte>E-commerce Website</a></li> </ul> </div> <div class="column" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Contact</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="#" data-astro-cid-sz7xmlte><img${addAttribute(location.src, "src")} alt="map" data-astro-cid-sz7xmlte>Grote Edestraat 50, 8370 Blankenberge</a> </li> <li data-astro-cid-sz7xmlte><a href="tel:+32498137260" data-astro-cid-sz7xmlte><img${addAttribute(phone.src, "src")} alt="phone" data-astro-cid-sz7xmlte>0498 137260</a></li> <li data-astro-cid-sz7xmlte> <a href="mailto:info@webmoov.be" data-astro-cid-sz7xmlte><img${addAttribute(envelope.src, "src")} alt="mail" data-astro-cid-sz7xmlte>info@webmoov.be</a> </li> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>IBAN: BE527370 2593 4409</a></li> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>VAT: BE0861036534</a></li> </ul> </div> </div> </div> <div class="footer-copyright" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
© 2025 Webmoov. Alle rechten voorbehouden. <a href="/algemene-voorwaarden" data-astro-cid-sz7xmlte>Algemene voorwaarden</a> </p> </div> </footer> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://www.webmoov.be");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.webmoov.be");
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const { schema } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/StructuredData.astro", void 0);

const $$Astro = createAstro("https://www.webmoov.be");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Maatwerk Website op Maat | Web Design & Development | Webmoov",
    description = "Professionele maatwerk websites op maat van uw bedrijf. Web design en development voor one-pager, premium websites en e-commerce oplossingen. CMS integratie en SEO optimalisatie.",
    image = "src/assets/logo.png"
  } = Astro2.props;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webmoov",
    url: "https://www.webmoov.be",
    logo: "https://www.webmoov.be/logo.png",
    description: "Webmoov is een web design en development bureau gespecialiseerd in maatwerk websites op maat. Van one-pager websites tot premium websites met CMS en e-commerce oplossingen.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE"
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://www.webmoov.be/contact"
    },
    areaServed: {
      "@type": "Country",
      name: "Belgium"
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Maatwerk Websites",
      "CMS Development",
      "E-commerce Development",
      "SEO Optimization"
    ]
  };
  return renderTemplate`<html lang="nl" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical"${addAttribute(Astro2.url, "href")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:alt"${addAttribute(description, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><meta property="twitter:image:alt"${addAttribute(description, "content")}><!-- Structured Data -->${renderComponent($$result, "StructuredData", $$StructuredData, { "schema": organizationSchema, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head>  <a class="skip-to-main" href="#main" data-astro-cid-sckkx6r4>Sla navigatie over</a> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main id="main" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-sckkx6r4": true })} </html>`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$StructuredData as a };
