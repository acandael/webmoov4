import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_r_wwajli.mjs';
import 'piccolore';
import { c as createSvgComponent, $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_CuzQxiQ1.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_CoFdOZaw.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const trophyicon = createSvgComponent({"meta":{"src":"/_astro/trophy.jPlSKdrk.svg","width":48,"height":48,"format":"svg"},"attributes":{"width":"48","height":"48","viewBox":"0 0 48 48","fill":"none"},"children":"\n<path d=\"M12.75 18.375H9.9375C8.6943 18.375 7.50201 17.8811 6.62294 17.0021C5.74386 16.123 5.25 14.9307 5.25 13.6875C5.25 12.4443 5.74386 11.252 6.62294 10.3729C7.50201 9.49386 8.6943 9 9.9375 9H12.75\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M35.25 18.375H38.0625C39.3057 18.375 40.498 17.8811 41.3771 17.0021C42.2561 16.123 42.75 14.9307 42.75 13.6875C42.75 12.4443 42.2561 11.252 41.3771 10.3729C40.498 9.49386 39.3057 9 38.0625 9H35.25\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M9 42.75H39\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M20.25 28.9878V33.3753C20.25 34.4065 19.3688 35.2128 18.4313 35.644C16.2188 36.6565 14.625 39.4503 14.625 42.7503\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M27.75 28.9878V33.3753C27.75 34.4065 28.6312 35.2128 29.5687 35.644C31.7812 36.6565 33.375 39.4503 33.375 42.7503\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M35.25 5.25H12.75V18.375C12.75 21.3587 13.9353 24.2202 16.045 26.33C18.1548 28.4397 21.0163 29.625 24 29.625C26.9837 29.625 29.8452 28.4397 31.955 26.33C34.0647 24.2202 35.25 21.3587 35.25 18.375V5.25Z\" stroke=\"#ED5C2E\" stroke-width=\"2.875\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const premiumWebsite = new Proxy({"src":"/_astro/premium-website.DxXjc3-G.jpg","width":1340,"height":744,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/premium-website.jpg";
							}
							
							return target[name];
						}
					});

const $$PremiumWebsite = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Meerdere pagina designs	"
    },
    {
      title: "Content Management System"
    },
    {
      title: "Geavanceerde SEO optimalisatie"
    },
    {
      title: "Blog integratie"
    },
    {
      title: "Nieuwsbrief integratie"
    },
    {
      title: "Aangepaste animaties"
    },
    {
      title: "Performance optimisatie"
    },
    {
      title: "Geavanceerde Analyse"
    }
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Premium Website",
    description: "Een volledig op maat gemaakte premium website met CMS-integratie, blog functionaliteit en geavanceerde SEO optimalisatie. Professioneel web design en development voor bedrijven die een krachtige online aanwezigheid nodig hebben.",
    provider: {
      "@type": "Organization",
      name: "Webmoov",
      url: "https://www.webmoov.be"
    },
    serviceType: "Web Design & Development",
    areaServed: {
      "@type": "Country",
      name: "Belgium"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Premium Website Features",
      itemListElement: features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Premium Website op Maat met CMS | Webmoov Web Design", "description": "Volledig op maat gemaakte premium websites met CMS integratie, blog functionaliteit en geavanceerde SEO optimalisatie. Professioneel web design en development voor bedrijven die meer nodig hebben dan een standaard website.", "image": premiumWebsite, "data-astro-cid-htrtvped": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": serviceSchema, "data-astro-cid-htrtvped": true })} ${renderComponent($$result2, "ProductSection", $$ProductSection, { "image": premiumWebsite, "icon": trophyicon, "title": "Premium Website", "subtitle": "Een volledig op maat gemaakte website met CMS-integratie.", "imageAlt": "Premium website op maat met modern web design, CMS integratie en professionele functionaliteiten", "data-astro-cid-htrtvped": true })} ${maybeRenderHead()}<section class="section intro-content" data-astro-cid-htrtvped> <div class="container" data-astro-cid-htrtvped> <div class="content-wrapper" data-astro-cid-htrtvped> <h2 data-astro-cid-htrtvped>Wat is een Premium Website op Maat?</h2> <p data-astro-cid-htrtvped>
Een <strong data-astro-cid-htrtvped>premium website op maat</strong> is de perfecte keuze voor bedrijven die meer nodig hebben dan een eenvoudige one-pager. Met professioneel <strong data-astro-cid-htrtvped>web design</strong> en <strong data-astro-cid-htrtvped>web development</strong>, CMS-integratie voor eenvoudig contentbeheer, en geavanceerde SEO optimalisatie, creëren wij een <strong data-astro-cid-htrtvped>maatwerk website</strong> die perfect aansluit bij uw bedrijf en doelstellingen.
</p> <p data-astro-cid-htrtvped>
Onze premium websites bieden uitgebreide functionaliteiten zoals blog integratie, nieuwsbrief systemen, en aangepaste animaties. Elk project wordt volledig op maat ontwikkeld met de nieuwste web development technieken, zodat uw website niet alleen visueel aantrekkelijk is, maar ook technisch excellent presteert.
</p> <h3 data-astro-cid-htrtvped>Voor wie is een Premium Website geschikt?</h3> <p data-astro-cid-htrtvped>
Deze <strong data-astro-cid-htrtvped>website op maat</strong> is ideaal voor groeiende bedrijven, consultancy bureaus, professionele dienstverleners en organisaties die regelmatig content publiceren. Met een krachtig <strong data-astro-cid-htrtvped>CMS systeem</strong> kunt u zelf eenvoudig pagina's, blog posts en andere content beheren zonder technische kennis.
</p> </div> </div> </section> ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "features": features, "data-astro-cid-htrtvped": true })} ${renderComponent($$result2, "ProcessTimeline", $$ProcessTimeline, { "data-astro-cid-htrtvped": true })} ${renderComponent($$result2, "FormSection", $$FormSection, { "product": "premium-website", "data-astro-cid-htrtvped": true })} ` })}  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/premium-website.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/premium-website.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/premium-website.astro";
const $$url = "/premium-website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PremiumWebsite,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
