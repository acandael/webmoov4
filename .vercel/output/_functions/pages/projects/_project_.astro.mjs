import { b as createAstro, c as createComponent, m as maybeRenderHead, f as renderScript, d as addAttribute, u as unescapeHTML, a as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_r_wwajli.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BXp6EixN.mjs';
import { $ as $$Layout, a as $$StructuredData } from '../../chunks/Layout_CuzQxiQ1.mjs';
import { $ as $$Heading } from '../../chunks/Heading_AkU23SkB.mjs';
import 'clsx';
/* empty css                                        */
import { $ as $$Image } from '../../chunks/_astro_assets_CofzE13t.mjs';
import { p as projectImages } from '../../chunks/projectImages_BaXUgYb_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.webmoov.be");
const $$ProjectResults = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectResults;
  const { project } = Astro2.props;
  const icons = {
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    compass: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path></svg>`
  };
  function getIcon(label) {
    const l = label.toLowerCase();
    if (l.includes("bestelling")) return icons.arrowUp;
    if (l.includes("verwerking")) return icons.clock;
    if (l.includes("tevredenheid") || l.includes("klant")) return icons.users;
    if (l.includes("lead")) return icons.compass;
    if (l.includes("sessie")) return icons.clock;
    if (l.includes("conversie")) return icons.arrowUp;
    return icons.arrowUp;
  }
  return renderTemplate`${maybeRenderHead()}<section class="section results-section" data-astro-cid-ir5c7344> <div class="container" data-astro-cid-ir5c7344> <div class="results-header" data-animate-header data-astro-cid-ir5c7344> <h2 class="section-title" data-astro-cid-ir5c7344>Resultaten</h2> <p class="subtitle" data-astro-cid-ir5c7344>De impact die we samen hebben bereikt</p> </div> <div class="results-grid" data-astro-cid-ir5c7344> ${project.data.results.map(([number, label], index) => renderTemplate`<div class="result-card"${addAttribute(index, "data-index")} data-result-card data-astro-cid-ir5c7344> <div class="card-inner" data-astro-cid-ir5c7344> <div class="icon-wrapper" data-astro-cid-ir5c7344> <div class="stats-icon" data-astro-cid-ir5c7344>${unescapeHTML(getIcon(label))}</div> </div> <div class="stats-content" data-astro-cid-ir5c7344> <p class="stats-number"${addAttribute(number, "data-number")} data-astro-cid-ir5c7344> ${number} </p> <p class="stats-label" data-astro-cid-ir5c7344>${label}</p> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProjectResults.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProjectResults.astro", void 0);

const $$Astro$1 = createAstro("https://www.webmoov.be");
const $$ProjectInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectInfo;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${maybeRenderHead()}<section class="section project-info-section" data-astro-cid-2qkbpd5c> <div class="container" data-astro-cid-2qkbpd5c> <div class="project-info-grid" data-astro-cid-2qkbpd5c> <div class="project-description" data-animate data-astro-cid-2qkbpd5c> <h2 class="section-title" data-astro-cid-2qkbpd5c>Over het project</h2> <div class="description-content" data-astro-cid-2qkbpd5c> ${renderComponent($$result, "Content", Content, { "data-astro-cid-2qkbpd5c": true })} </div> <div class="tech-stack-wrapper" data-astro-cid-2qkbpd5c> <h3 class="tech-heading" data-astro-cid-2qkbpd5c> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2qkbpd5c> <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> </svg>
Technologie
</h3> <ul class="tech-list" data-astro-cid-2qkbpd5c> ${project.data.tech.map((tech) => renderTemplate`<li class="tech-item" data-astro-cid-2qkbpd5c> <span class="tech-dot" data-astro-cid-2qkbpd5c></span> ${tech} </li>`)} </ul> </div> </div> <div class="project-meta" data-animate data-astro-cid-2qkbpd5c> <div class="meta-card" data-astro-cid-2qkbpd5c> <div class="meta-item" data-astro-cid-2qkbpd5c> <div class="meta-icon" data-astro-cid-2qkbpd5c> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2qkbpd5c> <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> </svg> </div> <div class="meta-content" data-astro-cid-2qkbpd5c> <h3 data-astro-cid-2qkbpd5c>Client</h3> <p data-astro-cid-2qkbpd5c>${project.data.client}</p> </div> </div> <div class="meta-item" data-astro-cid-2qkbpd5c> <div class="meta-icon" data-astro-cid-2qkbpd5c> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2qkbpd5c> <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> <path d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60704C11.7642 9.26324 11.0684 9.05885 10.3533 9.00763C9.63816 8.95641 8.92037 9.05963 8.24861 9.31018C7.57685 9.56073 6.96684 9.9529 6.46 10.46L3.46 13.46C2.54921 14.403 2.04524 15.666 2.05663 16.977C2.06802 18.288 2.59387 19.5421 3.52091 20.4691C4.44795 21.3961 5.70201 21.922 7.01299 21.9334C8.32397 21.9448 9.58698 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> </svg> </div> <div class="meta-content" data-astro-cid-2qkbpd5c> <h3 data-astro-cid-2qkbpd5c>Website</h3> <a${addAttribute(project.data.website, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-2qkbpd5c> ${project.data.website.replace(/^https?:\/\/(www\.)?/, "")} </a> </div> </div> <div class="meta-item" data-astro-cid-2qkbpd5c> <div class="meta-icon" data-astro-cid-2qkbpd5c> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2qkbpd5c> <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></rect> <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></line> <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></line> <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></line> </svg> </div> <div class="meta-content" data-astro-cid-2qkbpd5c> <h3 data-astro-cid-2qkbpd5c>Tijdlijn</h3> <p data-astro-cid-2qkbpd5c>${project.data.timeline}</p> </div> </div> <div class="meta-item services-item" data-astro-cid-2qkbpd5c> <div class="meta-icon" data-astro-cid-2qkbpd5c> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2qkbpd5c> <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2qkbpd5c></path> </svg> </div> <div class="meta-content" data-astro-cid-2qkbpd5c> <h3 data-astro-cid-2qkbpd5c>Services</h3> <div class="services" data-astro-cid-2qkbpd5c> ${project.data.services.map((service) => renderTemplate`<span class="service-tag" data-astro-cid-2qkbpd5c>${service}</span>`)} </div> </div> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProjectInfo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProjectInfo.astro", void 0);

const $$Astro = createAstro("https://www.webmoov.be");
const $$project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project: projectSlug } = Astro2.params;
  let project;
  let projectTestimonials = [];
  try {
    const projects = await getCollection("projects");
    project = projects.find((p) => p.slug === projectSlug);
    if (project) {
      const allTestimonials = await getCollection("testimonials");
      projectTestimonials = allTestimonials.filter(
        (testimonial) => testimonial.data.project === project?.slug
      );
    }
  } catch (error) {
    console.error("Error fetching project:", error);
  }
  const projectImage = project ? projectImages[project.slug] : void 0;
  console.log("Current URL slug:", projectSlug);
  console.log("Project found:", !!project);
  if (project) {
    console.log("Project details:", {
      slug: project.slug,
      title: project.data.title,
      type: project.data.type
    });
  }
  const reviewSchemas = project && projectTestimonials.length > 0 ? projectTestimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "WebSite",
      name: project?.data?.title || "Website Project",
      url: project?.data?.website || "https://www.webmoov.be"
    },
    author: {
      "@type": "Person",
      name: testimonial?.data?.name || "Anonymous"
    },
    reviewBody: testimonial?.data?.text || "",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    }
  })) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project?.data.title} | Webmoov Project`, "description": project?.data.subtitle, "image": projectImage?.hero, "data-astro-cid-6vkduold": true }, { "default": async ($$result2) => renderTemplate`${reviewSchemas.map((schema) => renderTemplate`${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": schema, "data-astro-cid-6vkduold": true })}`)}${project && projectImage ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-6vkduold": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-6vkduold> <div class="container" data-astro-cid-6vkduold> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-6vkduold": true }, { "default": async ($$result4) => renderTemplate` <h1 class="section-title" data-astro-cid-6vkduold>Project: ${project.data.title}</h1> <p class="subtitle" data-astro-cid-6vkduold>${project.data.subtitle}</p> ` })} <div class="hero-image" data-astro-cid-6vkduold> ${renderComponent($$result3, "Image", $$Image, { "src": projectImage.hero, "alt": project.data.title, "width": 1200, "height": 800, "class": "hero-image", "data-astro-cid-6vkduold": true })} </div> </div> </section> ${renderComponent($$result3, "ProjectInfo", $$ProjectInfo, { "project": project, "data-astro-cid-6vkduold": true })} <section class="section gallery-section" data-astro-cid-6vkduold> <div class="container" data-astro-cid-6vkduold> <div class="project-gallery" data-astro-cid-6vkduold> ${projectImage.gallery.map((image, index) => renderTemplate`<div class="gallery-item" data-astro-cid-6vkduold> ${renderComponent($$result3, "Image", $$Image, { "src": image, "alt": `${project.data.title} gallery image ${index + 1}`, "width": 800, "height": 600, "class": "gallery-image", "data-astro-cid-6vkduold": true })} </div>`)} </div> </div> </section> ${renderComponent($$result3, "ProjectResults", $$ProjectResults, { "project": project, "data-astro-cid-6vkduold": true })} ${projectTestimonials.length > 0 && renderTemplate`<section class="section testimonial-section background-broken-white" data-astro-cid-6vkduold> <div class="container" data-astro-cid-6vkduold> ${projectTestimonials.map((testimonial) => renderTemplate`<article class="testimonial" data-astro-cid-6vkduold> <blockquote class="testimonial-text" data-astro-cid-6vkduold>"${testimonial.data.text}"</blockquote> <div class="testimonial-author" data-astro-cid-6vkduold> ${renderComponent($$result3, "Image", $$Image, { "src": projectImages[project.slug].hero, "alt": `${testimonial.data.name} avatar`, "width": 64, "height": 64, "class": "author-image", "data-astro-cid-6vkduold": true })} <div class="author-info" data-astro-cid-6vkduold> <h3 data-astro-cid-6vkduold>${testimonial.data.name}</h3> <p data-astro-cid-6vkduold>${testimonial.data.role}</p> </div> </div> </article>`)} </div> </section>`}` })}` : renderTemplate`<section class="section" data-astro-cid-6vkduold> <div class="container" data-astro-cid-6vkduold> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-6vkduold": true }, { "default": async ($$result3) => renderTemplate` <h1 class="section-title" data-astro-cid-6vkduold>Project niet gevonden</h1> <p class="subtitle" data-astro-cid-6vkduold>
Het project dat u zoekt bestaat niet of is niet meer beschikbaar.
</p> ` })} </div> </section>`}` })} `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/projects/[project].astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/projects/[project].astro";
const $$url = "/projects/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$project,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
