import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_r_wwajli.mjs';
import 'piccolore';
import { c as createSvgComponent, $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_CuzQxiQ1.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_CoFdOZaw.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const cart = createSvgComponent({"meta":{"src":"/_astro/shopping-cart.upPunxhq.svg","width":48,"height":48,"format":"svg"},"attributes":{"width":"48","height":"48","viewBox":"0 0 48 48","fill":"none"},"children":"\n<path d=\"M14.625 40.875C14.625 41.3723 14.8225 41.8492 15.1742 42.2008C15.5258 42.5525 16.0027 42.75 16.5 42.75C16.9973 42.75 17.4742 42.5525 17.8258 42.2008C18.1775 41.8492 18.375 41.3723 18.375 40.875C18.375 40.3777 18.1775 39.9008 17.8258 39.5492C17.4742 39.1975 16.9973 39 16.5 39C16.0027 39 15.5258 39.1975 15.1742 39.5492C14.8225 39.9008 14.625 40.3777 14.625 40.875Z\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M35.25 40.875C35.25 41.3723 35.4475 41.8492 35.7992 42.2008C36.1508 42.5525 36.6277 42.75 37.125 42.75C37.6223 42.75 38.0992 42.5525 38.4508 42.2008C38.8025 41.8492 39 41.3723 39 40.875C39 40.3777 38.8025 39.9008 38.4508 39.5492C38.0992 39.1975 37.6223 39 37.125 39C36.6277 39 36.1508 39.1975 35.7992 39.5492C35.4475 39.9008 35.25 40.3777 35.25 40.875Z\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M5.34375 5.34375H9.09375L14.0813 28.6312C14.2642 29.4841 14.7388 30.2465 15.4232 30.7872C16.1077 31.328 16.9592 31.6132 17.8313 31.5938H36.1688C37.0222 31.5924 37.8497 31.2999 38.5144 30.7647C39.1792 30.2295 39.6415 29.4835 39.825 28.65L42.9188 14.7188H11.1\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

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
