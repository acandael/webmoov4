import { a as createComponent, m as maybeRenderHead, e as renderComponent, g as renderScript, r as renderTemplate, f as defineStyleVars, b as addAttribute } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { a as $$StructuredData, $ as $$Layout } from '../chunks/Layout_BPgg4mbj.mjs';
import { $ as $$Button } from '../chunks/Button_CqV9i-uR.mjs';
/* empty css                                 */
import { $ as $$Heading } from '../chunks/Heading_VoDXhzC6.mjs';
import { c as ctaBackground, $ as $$CTA } from '../chunks/CTA_CVAxtg6H.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_9cdBjiFt.mjs';
import { c as customWebsite } from '../chunks/custom-website_Dbx2i_-D.mjs';
import { g as getCollection } from '../chunks/_astro_content_C24CrOD4.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section hero" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="wrapper" data-astro-cid-bbe6dxrz> <div class="heading-hero" data-astro-cid-bbe6dxrz> <h1 class="section-title animate-slide-down" data-astro-cid-bbe6dxrz>Maatwerk Websites op Maat | Web Design & Development</h1> <p class="subtitle animate-slide-up" data-astro-cid-bbe6dxrz>
Professioneel web design en development voor uw bedrijf. Van eenvoudige one-pager landingspagina's tot complexe e-commerce oplossingen met CMS-integratie. Wij bouwen websites die meegroeien met uw onderneming.
</p> </div> ${renderComponent($$result, "Button", $$Button, { "label": "Ontdek onze producten", "hiddenLabel": "een onepager website, een premium website of een e-commerce website", "href": "#producten", "align": "center", "data-astro-cid-bbe6dxrz": true })} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Hero.astro", void 0);

const paintbrush = new Proxy({"src":"/_astro/paintbrush.0JwOtl6F.svg","width":49,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/paintbrush.svg";
							}
							
							return target[name];
						}
					});

const cup = new Proxy({"src":"/_astro/cup.Bs0OZ-Tl.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/cup.svg";
							}
							
							return target[name];
						}
					});

const cart = new Proxy({"src":"/_astro/cart.CombzURh.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/cart.svg";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const $$definedVars = defineStyleVars([{ backgroundImage: `url(${ctaBackground.src})` }]);
  return renderTemplate`${maybeRenderHead()}<section id="producten" class="section services" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <div class="container" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-g5jplrhu": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title text-high-contrast" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>Onze producten</h2> <p class="subtitle text-low-contrast" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>Kies de perfecte oplossing voor uw bedrijf</p> ` })} <div class="service-cards" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <a href="/one-pager-website" class="card-link" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <article class="card" data-card data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <div class="card-icon" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <img${addAttribute(paintbrush.src, "src")} alt="One Pager Website" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> </div> <div class="card-content" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <h3 class="card-title" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>One Pager Website</h3> <p class="card-description" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>
Perfect voor kleine bedrijven en startups die snel online willen gaan.
</p> </div> <div class="card-arrow" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}></path> </svg> </div> </article> </a> <a href="/premium-website" class="card-link" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <article class="card" data-card data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <div class="card-icon" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <img${addAttribute(cup.src, "src")} alt="Premium Website" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> </div> <div class="card-content" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <h3 class="card-title" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>Premium Website</h3> <p class="card-description" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>
Een volledig op maat gemaakte website met CMS-integratie.
</p> </div> <div class="card-arrow" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}></path> </svg> </div> </article> </a> <a href="/ecommerce-website" class="card-link" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <article class="card" data-card data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <div class="card-icon" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <img${addAttribute(cart.src, "src")} alt="Ecommerce Website" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> </div> <div class="card-content" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <h3 class="card-title" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>Ecommerce Website</h3> <p class="card-description" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}>
Complete webshop oplossingen die meegroeien met uw bedrijf.
</p> </div> <div class="card-arrow" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}> <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g5jplrhu${addAttribute($$definedVars, "style")}></path> </svg> </div> </article> </a> </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Services.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Services.astro", void 0);

const check = new Proxy({"src":"/_astro/check.D4OI3utu.svg","width":20,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/check.svg";
							}
							
							return target[name];
						}
					});

const cross = new Proxy({"src":"/_astro/cross.CfK3dAT2.svg","width":20,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/cross.svg";
							}
							
							return target[name];
						}
					});

const templateWebsite = new Proxy({"src":"/_astro/template-website.LMHgAOP7.jpg","width":840,"height":602,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/template-website.jpg";
							}
							
							return target[name];
						}
					});

const $$Comparison = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section comparison-section background-light-gray" data-padding="custom" data-astro-cid-sjh5edtt> <div class="container flow" data-width="narrow" data-astro-cid-sjh5edtt> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-sjh5edtt": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title" data-astro-cid-sjh5edtt>Maatwerk vs Template</h2> <p class="subtitle" data-astro-cid-sjh5edtt>
Wij bouwen maatwerk websites met unieke designs en aangepaste functionaliteit,<br data-astro-cid-sjh5edtt> waarmee
				uw bedrijf zich onderscheidt van template websites.
</p> ` })} <div class="equal-columns cards" data-gap="large" data-alignment="centered" data-astro-cid-sjh5edtt> <article class="card" data-astro-cid-sjh5edtt> <h2 class="card__title" data-astro-cid-sjh5edtt>Maatwerk website</h2> ${renderComponent($$result, "Image", $$Image, { "src": customWebsite, "alt": "Custom website example showing modern and unique design", "width": 500, "height": 300, "class": "comparison-image", "data-astro-cid-sjh5edtt": true })} <div class="items" data-astro-cid-sjh5edtt> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Unieke merkidentiteit die perfect bij uw bedrijf past</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Aangepaste functionaliteit.</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Optimale laadsnelheid en prestaties</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Uitgebreide beveiligingsmaatregelen</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Makkelijk schaalbaar met uw bedrijf mee</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(check.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Superieure SEO-mogelijkheden</p> </div> </div> </article> <article class="card" data-astro-cid-sjh5edtt> <h2 class="card__title" data-astro-cid-sjh5edtt>Template website</h2> ${renderComponent($$result, "Image", $$Image, { "src": templateWebsite, "alt": "Template website example showing generic design", "width": 500, "height": 300, "class": "comparison-image", "data-astro-cid-sjh5edtt": true })} <div class="items" data-astro-cid-sjh5edtt> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Generiek ontwerp met beperkte aanpassingen</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Vooraf bepaalde functionaliteit met beperkingen</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Trage laadtijden door overbodige code</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Standaard beveiliging met bekende kwetsbaarheden</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Beperkte schaalbaarheid door platformrestricties</p> </div> <div class="item" data-astro-cid-sjh5edtt> <img${addAttribute(cross.src, "src")} alt="item 1" data-astro-cid-sjh5edtt> <p data-astro-cid-sjh5edtt>Basis SEO-optimalisatie</p> </div> </div> </article> </div> <div class="cta-wrapper" data-astro-cid-sjh5edtt> ${renderComponent($$result, "Button", $$Button, { "label": "Bekijk ons werk", "href": "/ons-werk", "data-astro-cid-sjh5edtt": true })} </div> </div> </section> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Comparison.astro", void 0);

const anniekLambrechtAvatar = new Proxy({"src":"/_astro/anniek-lambrecht.DM4eWxGF.jpg","width":160,"height":160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/testimonials/skincenter-anniek-lambrecht/anniek-lambrecht.jpg";
							}
							
							return target[name];
						}
					});

const anniekLambrechtLogo = new Proxy({"src":"/_astro/logo.WUiUbgf6.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/testimonials/skincenter-anniek-lambrecht/logo.png";
							}
							
							return target[name];
						}
					});

const frederiekTroubleynAvatar = new Proxy({"src":"/_astro/frederiek-troubleyn.cCdRGFmP.jpg","width":160,"height":160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/testimonials/actionmaker/frederiek-troubleyn.jpg";
							}
							
							return target[name];
						}
					});

const actionMakerLogo = new Proxy({"src":"/_astro/logo.N0duct6Z.png","width":236,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/testimonials/actionmaker/logo.png";
							}
							
							return target[name];
						}
					});

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await getCollection("testimonials");
  const testimonialImages = {
    "skincenter-anniek-lambrecht": {
      avatar: anniekLambrechtAvatar,
      logo: anniekLambrechtLogo
    },
    "action-maker": {
      avatar: frederiekTroubleynAvatar,
      logo: actionMakerLogo
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="section testimonials-section" data-astro-cid-aadlzisc> <div class="container flow" data-astro-cid-aadlzisc> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-aadlzisc": true }, { "default": async ($$result2) => renderTemplate` <h2 class="section-title" data-astro-cid-aadlzisc>Klant ervaringen</h2> <p class="subtitle" data-astro-cid-aadlzisc>Ontdek wat onze klanten over ons zeggen.</p> ` })} <div class="equal-columns testimonial-cards" data-astro-cid-aadlzisc> ${testimonials.map((testimonial, index) => renderTemplate`<article class="card" data-testimonial-card${addAttribute(index, "data-index")} data-astro-cid-aadlzisc> <div class="quote-icon" data-astro-cid-aadlzisc> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-aadlzisc> <path d="M10 18C10 14.6863 12.6863 12 16 12V12C16 8.68629 13.3137 6 10 6V6C6.68629 6 4 8.68629 4 12V18C4 21.3137 6.68629 24 10 24V24V18Z" fill="currentColor" opacity="0.15" data-astro-cid-aadlzisc></path> <path d="M30 18C30 14.6863 32.6863 12 36 12V12C36 8.68629 33.3137 6 30 6V6C26.6863 6 24 8.68629 24 12V18C24 21.3137 26.6863 24 30 24V24V18Z" fill="currentColor" opacity="0.15" data-astro-cid-aadlzisc></path> </svg> </div> <div class="body" data-astro-cid-aadlzisc> <blockquote data-astro-cid-aadlzisc>${testimonial.data.text}</blockquote> </div> <div class="divider" data-astro-cid-aadlzisc></div> <div class="footer-content" data-astro-cid-aadlzisc> <div class="heading" data-astro-cid-aadlzisc> <div class="testimonial-avatar" data-astro-cid-aadlzisc> ${renderComponent($$result, "Image", $$Image, { "src": testimonialImages[testimonial.data.project].avatar, "alt": `${testimonial.data.name} avatar`, "width": 64, "height": 64, "format": "webp", "quality": "high", "data-astro-cid-aadlzisc": true })} </div> <div class="heading__text" data-astro-cid-aadlzisc> <h3 class="card__title" data-astro-cid-aadlzisc>${testimonial.data.name}</h3> <p class="role" data-astro-cid-aadlzisc>${testimonial.data.role}</p> </div> </div> <div class="company-logo" data-astro-cid-aadlzisc> ${testimonialImages[testimonial.data.project].logo && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": testimonialImages[testimonial.data.project].logo, "alt": `${testimonial.data.project} logo`, "width": 80, "height": 32, "format": "webp", "quality": "high", "data-astro-cid-aadlzisc": true })}`} </div> </div> </article>`)} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Testimonials.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqData = [
    {
      question: "Wat is inbegrepen bij het One Pager Website pakket?",
      answer: "Een onepager website is een eenvoudige en snel te maken website die bestaat uit \xE9\xE9n pagina. Deze pagina bevat alle belangrijke informatie over uw bedrijf en is bedoeld om potenti\xEBle klanten te bereiken."
    },
    {
      question: "Hoe lang duurt het om een Premium Website te bouwen?",
      answer: "Een Premium Website kan gebouwd worden in 4 tot 8 weken, afhankelijk van het aantal pagina's en de complexiteit van de website."
    },
    {
      question: "Hoe lang duurt het om een Ecommerce Website te bouwen?",
      answer: "Een Ecommerce Website kan gebouwd worden in 6 tot 12 weken, afhankelijk van het aantal producten en de complexiteit van de website."
    },
    {
      question: "Bieden jullie doorlopende ondersteuning en onderhoud?",
      answer: "Ja, we bieden doorlopende ondersteuning en onderhoud aan al onze websites. Dit omvat het updaten van de website, en het toevoegen van nieuwe functies."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-z6gx6xcw": true })} ${maybeRenderHead()}<section class="section faq-section" data-astro-cid-z6gx6xcw> <div class="container flow" data-astro-cid-z6gx6xcw> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-z6gx6xcw": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title" data-astro-cid-z6gx6xcw>Veelgestelde vragen</h2> <p class="subtitle" data-astro-cid-z6gx6xcw>Alles wat u moet weten over onze diensten</p> ` })} <div class="faq-items" data-astro-cid-z6gx6xcw> ${faqData.map((faq) => renderTemplate`<div class="faq-item" data-faq-item data-astro-cid-z6gx6xcw> <button class="question" aria-expanded="false" data-astro-cid-z6gx6xcw> <span class="question-text" data-astro-cid-z6gx6xcw>${faq.question}</span> <span class="icon-wrapper" data-astro-cid-z6gx6xcw> <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-z6gx6xcw> <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-z6gx6xcw></path> </svg> </span> </button> <div class="answer-wrapper" data-astro-cid-z6gx6xcw> <p class="answer" data-astro-cid-z6gx6xcw>${faq.answer}</p> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/Faq.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Maatwerk Website op Maat | Web Design & Development | Webmoov", "description": "Professionele maatwerk websites op maat van uw bedrijf. Web design en development voor one-pager websites, premium websites met CMS en e-commerce oplossingen. SEO geoptimaliseerd en mobiel responsive." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Comparison", $$Comparison, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/index.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
