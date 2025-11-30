import { a as createComponent, e as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_BPgg4mbj.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_BCuFTIPi.mjs';
import { c as customWebsite } from '../chunks/custom-website_Dbx2i_-D.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const paintbrush = new Proxy({"src":"/_astro/paintbrush-big.BFP8NcMX.svg","width":80,"height":80,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/paintbrush-big.svg";
							}
							
							return target[name];
						}
					});

const $$OnePagerWebsite = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Design op maat"
    },
    {
      title: "Contactformulier"
    },
    {
      title: "SEO optimalisatie"
    },
    {
      title: "Social media integratie"
    },
    {
      title: "Web analytics"
    },
    {
      title: "Snelle laadtijd"
    },
    {
      title: "Secure Socket Layer (SSL)"
    },
    {
      title: "Responsive design"
    }
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "One Pager Website",
    description: "Perfect voor startups en kleine bedrijven die snel online willen gaan. Een professionele one-pager website op maat met responsive design, SEO optimalisatie en contactformulier. Snelle en betaalbare maatwerk website oplossing.",
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
      name: "One Pager Website Features",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "One Pager Website op Maat | Landingspagina Ontwikkeling | Webmoov", "description": "Professionele one-pager websites op maat voor startups en kleine bedrijven. Snelle landingspagina ontwikkeling met responsive design, SEO optimalisatie en contactformulier. Betaalbare maatwerk website oplossing om snel online te gaan.", "image": customWebsite, "data-astro-cid-bawi76zv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": serviceSchema, "data-astro-cid-bawi76zv": true })} ${renderComponent($$result2, "ProductSection", $$ProductSection, { "image": customWebsite, "icon": paintbrush, "title": "One Pager Website", "subtitle": "Perfect voor startups en kleine bedrijven die snel online willen gaan.", "imageAlt": "One pager website op maat met responsive design, SEO optimalisatie en moderne landingspagina ontwikkeling", "data-astro-cid-bawi76zv": true })} ${maybeRenderHead()}<section class="section intro-content" data-astro-cid-bawi76zv> <div class="container" data-astro-cid-bawi76zv> <div class="content-wrapper" data-astro-cid-bawi76zv> <h2 data-astro-cid-bawi76zv>Wat is een One Pager Website?</h2> <p data-astro-cid-bawi76zv>
Een <strong data-astro-cid-bawi76zv>one-pager website op maat</strong> is een compacte, effectieve oplossing voor bedrijven die snel online willen gaan. Met professioneel <strong data-astro-cid-bawi76zv>web design</strong> en slimme <strong data-astro-cid-bawi76zv>landingspagina ontwikkeling</strong> creëren wij een krachtige online aanwezigheid op één enkele pagina. Perfect voor startups, freelancers en kleine bedrijven die hun diensten of producten duidelijk willen presenteren.
</p> <p data-astro-cid-bawi76zv>
Onze <strong data-astro-cid-bawi76zv>maatwerk one-pager websites</strong> zijn volledig responsive, SEO geoptimaliseerd en laden razendsnel. Alle belangrijke informatie - uw diensten, portfolio, klantreviews en contactgegevens - is direct zichtbaar zonder dat bezoekers hoeven te navigeren. Dit verhoogt de conversie en zorgt voor een betere gebruikerservaring.
</p> <h3 data-astro-cid-bawi76zv>Voordelen van een One Pager Website</h3> <p data-astro-cid-bawi76zv>
Een <strong data-astro-cid-bawi76zv>one-pager website</strong> is niet alleen betaalbaar en snel te realiseren, maar ook uiterst effectief voor specifieke doeleinden zoals productlanceringen, events of diensten promotie. Met moderne <strong data-astro-cid-bawi76zv>web development</strong> technieken zorgen wij voor vloeiende scroll-animaties en interactieve elementen die bezoekers engageren.
</p> </div> </div> </section> ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "features": features, "data-astro-cid-bawi76zv": true })} ${renderComponent($$result2, "ProcessTimeline", $$ProcessTimeline, { "data-astro-cid-bawi76zv": true })} ${renderComponent($$result2, "FormSection", $$FormSection, { "product": "one-pager-website", "data-astro-cid-bawi76zv": true })} ` })}  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/one-pager-website.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/one-pager-website.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/one-pager-website.astro";
const $$url = "/one-pager-website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$OnePagerWebsite,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
