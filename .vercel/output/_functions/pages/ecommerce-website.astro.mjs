import { a as createComponent, e as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_BPgg4mbj.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_BCuFTIPi.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const cart = new Proxy({"src":"/_astro/shopping-cart.upPunxhq.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/shopping-cart.svg";
							}
							
							return target[name];
						}
					});

const ecommerceWebsite = new Proxy({"src":"/_astro/ecommerce-website.m9gBzHeU.jpg","width":1168,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/ecommerce-website.jpg";
							}
							
							return target[name];
						}
					});

const $$EcommerceWebsite = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Product Information Management (PIM)"
    },
    {
      title: "Veilige betalingen"
    },
    {
      title: "Voorraadbeheer"
    },
    {
      title: "Order beheer"
    },
    {
      title: "Klant accounts"
    },
    {
      title: "Geavanceerd zoeken"
    },
    {
      title: "Prijs kortingen"
    },
    {
      title: "Analytics dashboard"
    }
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-commerce Website",
    description: "Complete webshop oplossingen op maat van jouw bedrijf. Professionele e-commerce website met product management, veilige betalingen, voorraadbeheer en analytics. Webshop ontwikkeling die meegroeien met uw onderneming.",
    provider: {
      "@type": "Organization",
      name: "Webmoov",
      url: "https://www.webmoov.be"
    },
    serviceType: "E-commerce Development",
    areaServed: {
      "@type": "Country",
      name: "Belgium"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-commerce Website Features",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "E-commerce Website op Maat | Webshop Ontwikkeling | Webmoov", "description": "Complete e-commerce oplossingen op maat van uw bedrijf. Professionele webshop ontwikkeling met product management, veilige betalingen, voorraadbeheer en analytics dashboard. Schaalbare e-commerce websites die meegroeien met uw onderneming.", "image": ecommerceWebsite, "data-astro-cid-chlcetbx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": serviceSchema, "data-astro-cid-chlcetbx": true })} ${renderComponent($$result2, "ProductSection", $$ProductSection, { "image": ecommerceWebsite, "icon": cart, "title": "E-commerce Website", "subtitle": "Complete webshop oplossingen op maat van jouw bedrijf.", "imageAlt": "E-commerce website op maat met webshop functionaliteiten, product management en veilige betalingen", "data-astro-cid-chlcetbx": true })} ${maybeRenderHead()}<section class="section intro-content" data-astro-cid-chlcetbx> <div class="container" data-astro-cid-chlcetbx> <div class="content-wrapper" data-astro-cid-chlcetbx> <h2 data-astro-cid-chlcetbx>Professionele E-commerce Website Ontwikkeling</h2> <p data-astro-cid-chlcetbx>
Een <strong data-astro-cid-chlcetbx>e-commerce website op maat</strong> is essentieel voor bedrijven die online willen verkopen. Onze <strong data-astro-cid-chlcetbx>webshop ontwikkeling</strong> combineert krachtige functionaliteit met uitstekend <strong data-astro-cid-chlcetbx>web design</strong>, zodat uw klanten een optimale shopping ervaring krijgen. Van product management tot veilige betalingen en voorraadbeheer - wij bouwen complete <strong data-astro-cid-chlcetbx>e-commerce oplossingen</strong> die schaalbaar zijn.
</p> <p data-astro-cid-chlcetbx>
Met onze <strong data-astro-cid-chlcetbx>maatwerk e-commerce websites</strong> krijgt u een platform dat perfect aansluit bij uw bedrijfsprocessen. Integraties met betaalsystemen, verzendpartners en boekhoudsoftware zorgen voor een gestroomlijnde workflow. Uw webshop is volledig responsive, SEO geoptimaliseerd en klaar om te groeien met uw bedrijf.
</p> <h3 data-astro-cid-chlcetbx>Waarom kiezen voor een E-commerce Website op Maat?</h3> <p data-astro-cid-chlcetbx>
In tegenstelling tot standaard webshop templates, biedt een <strong data-astro-cid-chlcetbx>e-commerce website op maat</strong> volledige flexibiliteit. U bent niet gebonden aan beperkingen van platforms, maar krijgt een oplossing die exact doet wat u nodig heeft. Perfect voor bedrijven met specifieke producten, complexe prijsstructuren of unieke klantervaringen.
</p> </div> </div> </section> ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "features": features, "data-astro-cid-chlcetbx": true })} ${renderComponent($$result2, "ProcessTimeline", $$ProcessTimeline, { "data-astro-cid-chlcetbx": true })} ${renderComponent($$result2, "FormSection", $$FormSection, { "product": "ecommerce-website", "data-astro-cid-chlcetbx": true })} ` })}  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/ecommerce-website.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/ecommerce-website.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/ecommerce-website.astro";
const $$url = "/ecommerce-website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EcommerceWebsite,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
