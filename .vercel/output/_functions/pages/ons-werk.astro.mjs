import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderComponent, g as renderScript, r as renderTemplate, b as addAttribute } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$CTA } from '../chunks/CTA_CVAxtg6H.mjs';
import { $ as $$Button } from '../chunks/Button_CqV9i-uR.mjs';
/* empty css                                    */
import { g as getCollection } from '../chunks/_astro_content_C24CrOD4.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_9cdBjiFt.mjs';
import { p as projectImages } from '../chunks/projectImages_BaXUgYb_.mjs';
import { $ as $$Heading } from '../chunks/Heading_VoDXhzC6.mjs';
import { $ as $$Layout } from '../chunks/Layout_xaltc5_f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.webmoov.be");
const $$Filter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Filter;
  return renderTemplate`${maybeRenderHead()}<div class="equal-columns filters" data-astro-cid-nhxjo3iv> ${renderComponent($$result, "Button", $$Button, { "label": "Alle", "hiddenLabel": "projecten", "href": "#", "data-filter": "all", "class": "filter-button active", "variant": "filter", "data-astro-cid-nhxjo3iv": true })} ${renderComponent($$result, "Button", $$Button, { "label": "Onepager", "hiddenLabel": "projecten", "href": "#", "data-filter": "onepager", "class": "filter-button", "variant": "filter", "data-astro-cid-nhxjo3iv": true })} ${renderComponent($$result, "Button", $$Button, { "label": "Premium", "hiddenLabel": "projecten", "href": "#", "data-filter": "premium", "class": "filter-button", "variant": "filter", "data-astro-cid-nhxjo3iv": true })} ${renderComponent($$result, "Button", $$Button, { "label": "E-commerce", "hiddenLabel": "projecten", "href": "#", "data-filter": "ecommerce", "class": "filter-button", "variant": "filter", "data-astro-cid-nhxjo3iv": true })} </div>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Filter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Filter.astro", void 0);

const $$Astro$1 = createAstro("https://www.webmoov.be");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const projectImage = projectImages[project.slug]?.hero;
  return renderTemplate`${maybeRenderHead()}<article class="project-card"${addAttribute(project.data.type, "data-type")} data-astro-cid-mspuyifq> <a${addAttribute(`/projects/${project.slug}`, "href")} class="project-link" data-astro-cid-mspuyifq> <div class="image-container" data-astro-cid-mspuyifq> ${projectImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": projectImage, "alt": project.data.title, "width": 400, "height": 250, "format": "webp", "quality": "high", "data-astro-cid-mspuyifq": true })}` : renderTemplate`<div class="image-placeholder" data-astro-cid-mspuyifq> <p data-astro-cid-mspuyifq>Image not available</p> </div>`} </div> <div class="project-info" data-astro-cid-mspuyifq> <h3 data-astro-cid-mspuyifq>${project.data.title}</h3> <p data-astro-cid-mspuyifq>${project.data.subtitle}</p> <div class="tech-stack" data-astro-cid-mspuyifq> ${project.data.tech.map((tech) => renderTemplate`<span data-astro-cid-mspuyifq>${tech}</span>`)} </div> </div> </a> </article> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://www.webmoov.be");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  let projects = [];
  try {
    projects = await getCollection("projects");
  } catch (error) {
    console.error("Error loading projects:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="projects-wrapper" data-astro-cid-amng4zvp> <div class="projects-grid" data-astro-cid-amng4zvp> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "data-astro-cid-amng4zvp": true })}`)} </div> <p class="no-projects hidden" data-astro-cid-amng4zvp>Geen projecten beschikbaar voor deze filter.</p> </div>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Projects.astro", void 0);

const $$OnsWerk = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ons Werk | Portfolio Web Design Projecten | Webmoov", "description": "Ontdek ons portfolio van maatwerk websites en succesvolle web development projecten. Van one-pager websites tot premium websites met CMS en e-commerce oplossingen. Bekijk onze realisaties en klantervaringen.", "data-astro-cid-nvbmjtcq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section section-work flow" data-width="medium" data-astro-cid-nvbmjtcq> <div class="container" data-astro-cid-nvbmjtcq> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-nvbmjtcq": true }, { "default": ($$result3) => renderTemplate` <h1 class="section-title" data-astro-cid-nvbmjtcq>Ons Portfolio - Maatwerk Website Projecten</h1> <p class="subtitle" data-astro-cid-nvbmjtcq>Ontdek onze web design en development projecten. Van one-pager websites tot premium websites met CMS en e-commerce oplossingen.</p> ` })} <div class="filter-container" data-astro-cid-nvbmjtcq> ${renderComponent($$result2, "Filter", $$Filter, { "data-astro-cid-nvbmjtcq": true })} </div> </div> <div class="container" data-astro-cid-nvbmjtcq> ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-nvbmjtcq": true })} </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-nvbmjtcq": true })} ` })} `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/ons-werk.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/ons-werk.astro";
const $$url = "/ons-werk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$OnsWerk,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
