import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, m as maybeRenderHead, r as renderComponent, f as renderScript, d as addAttribute, b as createAstro, h as renderHead, e as renderSlot } from './astro/server_r_wwajli.mjs';
import 'piccolore';
/* empty css                                        */
import { $ as $$Image } from './_astro_assets_CofzE13t.mjs';
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

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const hamburger = createSvgComponent({"meta":{"src":"/_astro/hamburger.CEuMSxWR.svg","width":31,"height":14,"format":"svg"},"attributes":{"width":"31","height":"14","viewBox":"0 0 31 14","fill":"none"},"children":"\n<rect width=\"31\" height=\"2\" rx=\"1\" fill=\"#D9D9D9\" />\n<rect y=\"6\" width=\"31\" height=\"2\" rx=\"1\" fill=\"#D9D9D9\" />\n<rect y=\"12\" width=\"31\" height=\"2\" rx=\"1\" fill=\"#D9D9D9\" />\n"});

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

const location = createSvgComponent({"meta":{"src":"/_astro/location.CtKeYlM-.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<path d=\"M8.00001 6.87995C8.61854 6.87995 9.11994 6.37855 9.11994 5.76001C9.11994 5.14148 8.61854 4.64001 8.00001 4.64001C7.38147 4.64001 6.88 5.14148 6.88 5.76001C6.88 6.37855 7.38147 6.87995 8.00001 6.87995Z\" fill=\"white\" fill-opacity=\"0.7\" />\n<path d=\"M7.99998 0.160034C4.91215 0.160034 2.39978 2.56287 2.39978 5.51527C2.39978 6.92123 3.04065 8.79103 4.30451 11.0728C5.31955 12.9047 6.49388 14.5613 7.10465 15.3856C7.20788 15.5265 7.34281 15.641 7.49851 15.72C7.65428 15.7989 7.82641 15.84 8.00101 15.84C8.17565 15.84 8.34778 15.7989 8.50355 15.72C8.65928 15.641 8.79421 15.5265 8.89741 15.3856C9.50711 14.5613 10.6825 12.9047 11.6975 11.0728C12.9593 8.79173 13.6002 6.92193 13.6002 5.51527C13.6002 2.56287 11.0878 0.160034 7.99998 0.160034ZM7.99998 8.00033C7.55695 8.00033 7.12381 7.86897 6.75548 7.6228C6.38708 7.3767 6.09998 7.02683 5.93041 6.6175C5.76088 6.20817 5.71651 5.75777 5.80295 5.32323C5.88938 4.8887 6.10275 4.48953 6.41598 4.17627C6.72931 3.863 7.12841 3.64967 7.56298 3.56323C7.99751 3.47677 8.44788 3.52113 8.85725 3.6907C9.26655 3.86023 9.61641 4.14737 9.86255 4.51577C10.1087 4.8841 10.24 5.3172 10.24 5.76027C10.2394 6.35413 10.0032 6.92353 9.58325 7.3435C9.16331 7.76347 8.59391 7.99967 7.99998 8.00033Z\" fill=\"white\" fill-opacity=\"0.7\" />\n"});

const phone = createSvgComponent({"meta":{"src":"/_astro/phone.CBdJHCv_.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_4_145)\">\n<path d=\"M15.4943 4.852C15.3083 10.7643 10.4573 15.5 4.5 15.5C2.22233 15.5 0.5 13.7217 0.5 11.477C0.500017 11.1772 0.589863 10.8843 0.757948 10.6361C0.926033 10.3878 1.16465 10.1957 1.443 10.0843L3.498 9.26233C3.83113 9.12904 4.19604 9.09643 4.54752 9.16854C4.899 9.24065 5.2216 9.41431 5.47533 9.668L6.50067 10.6937C6.546 10.739 6.597 10.7443 6.628 10.735C7.59653 10.4392 8.47756 9.91004 9.19363 9.19397C9.90971 8.47789 10.4389 7.59686 10.7347 6.62833C10.7443 6.597 10.739 6.546 10.6937 6.50067L9.668 5.47533C9.41431 5.2216 9.24065 4.899 9.16854 4.54752C9.09643 4.19604 9.12904 3.83113 9.26233 3.498L10.0843 1.443C10.1957 1.16465 10.3878 0.926034 10.6361 0.757948C10.8843 0.589863 11.1772 0.500017 11.477 0.5C13.932 0.5 15.5323 2.45367 15.4943 4.852Z\" fill=\"white\" fill-opacity=\"0.7\" />\n</g>\n<defs>\n<clipPath id=\"clip0_4_145\">\n<rect width=\"16\" height=\"16\" fill=\"white\" />\n</clipPath>\n</defs>\n"});

const envelope = createSvgComponent({"meta":{"src":"/_astro/envelope.Y1pb98kf.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<path d=\"M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z\" fill=\"white\" fill-opacity=\"0.7\" />\n"});

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
  let schemaJSON = "{}";
  try {
    schemaJSON = JSON.stringify(schema);
  } catch (error) {
    console.error("Error serializing schema:", error);
  }
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJSON));
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

export { $$Layout as $, $$StructuredData as a, createSvgComponent as c };
