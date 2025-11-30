import { a as createComponent, e as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_xaltc5_f.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_BCuFTIPi.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const trophyicon = new Proxy({"src":"/_astro/trophy.jPlSKdrk.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/trophy.svg";
							}
							
							return target[name];
						}
					});

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
