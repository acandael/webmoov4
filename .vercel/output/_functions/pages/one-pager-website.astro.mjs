import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_r_wwajli.mjs';
import 'piccolore';
import { c as createSvgComponent, $ as $$Layout, a as $$StructuredData } from '../chunks/Layout_CuzQxiQ1.mjs';
import { $ as $$ProductSection, a as $$FeaturesGrid, b as $$ProcessTimeline, c as $$FormSection } from '../chunks/FormSection_CoFdOZaw.mjs';
import { c as customWebsite } from '../chunks/custom-website_Dbx2i_-D.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const paintbrush = createSvgComponent({"meta":{"src":"/_astro/paintbrush-big.BFP8NcMX.svg","width":80,"height":80,"format":"svg"},"attributes":{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none"},"children":"\n<path d=\"M48.1943 58.4278L14.8193 49.3247\" stroke=\"#ED5C2E\" stroke-width=\"5.125\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M59.9266 10.6944C61.1707 9.45035 62.8579 8.75146 64.6173 8.75146C66.3766 8.75146 68.0638 9.45035 69.3079 10.6944C70.5519 11.9384 71.2508 13.6257 71.2508 15.385C71.2508 17.1443 70.5519 18.8316 69.3079 20.0756L56.7516 32.635C56.4587 32.928 56.2941 33.3254 56.2941 33.7397C56.2941 34.154 56.4587 34.5514 56.7516 34.8444L59.7016 37.7944C61.1138 39.2067 61.9071 41.1222 61.9071 43.1194C61.9071 45.1166 61.1138 47.032 59.7016 48.4444L56.7516 51.3944C56.4586 51.6873 56.0613 51.8519 55.6469 51.8519C55.2326 51.8519 54.8353 51.6873 54.5422 51.3944L28.6079 25.4631C28.3149 25.1701 28.1504 24.7728 28.1504 24.3584C28.1504 23.9441 28.3149 23.5468 28.6079 23.2538L31.5579 20.3038C32.9702 18.8916 34.8857 18.0983 36.8829 18.0983C38.8801 18.0983 40.7955 18.8916 42.2079 20.3038L45.1579 23.2538C45.4509 23.5467 45.8482 23.7112 46.2626 23.7112C46.6769 23.7112 47.0742 23.5467 47.3672 23.2538L59.9266 10.6944Z\" stroke=\"#ED5C2E\" stroke-width=\"5.125\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M30.6246 27.5C24.9871 35.9688 18.2184 38.3125 10.0528 39.8375C9.78187 39.887 9.52855 40.0062 9.31777 40.1833C9.107 40.3605 8.94604 40.5896 8.85077 40.848C8.75551 41.1063 8.72922 41.3851 8.7745 41.6567C8.81978 41.9283 8.93507 42.1834 9.10901 42.3969L31.984 70.1563C32.4486 70.6497 33.0611 70.9788 33.729 71.0938C34.397 71.2087 35.0842 71.1035 35.6871 70.7938C42.2965 66.2656 52.4996 54.975 52.4996 49.375\" stroke=\"#ED5C2E\" stroke-width=\"5.125\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

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
