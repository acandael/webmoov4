import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, g as renderScript, r as renderTemplate } from './astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_CqV9i-uR.mjs';
import { $ as $$Image } from './_astro_assets_9cdBjiFt.mjs';
/* empty css                                     */
import { $ as $$Heading } from './Heading_VoDXhzC6.mjs';
import { C as ContactForm } from './ContactForm_BzOloBEe.mjs';

const $$Astro$2 = createAstro("https://www.webmoov.be");
const $$ProductSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductSection;
  const { title, subtitle, image, icon, imageAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section product-section" data-astro-cid-ww43nytm> <div class="container" data-astro-cid-ww43nytm> <div class="product-grid" data-astro-cid-ww43nytm> <div class="content-col" data-animate data-astro-cid-ww43nytm> <div class="heading" data-astro-cid-ww43nytm> <div class="brush-icon" data-astro-cid-ww43nytm> <img${addAttribute(icon.src, "src")} alt="paintbrush" data-astro-cid-ww43nytm> </div> <h1 class="section-title" data-astro-cid-ww43nytm>${title}</h1> </div> <p class="subtitle" data-astro-cid-ww43nytm> ${subtitle} </p> ${renderComponent($$result, "Button", $$Button, { "label": "Start het gesprek", "hiddenLabel": "en we contacteren je binnen 24 uur", "href": "#contact", "align": "left", "data-astro-cid-ww43nytm": true })} </div> <div class="image-col" data-animate data-astro-cid-ww43nytm> <div class="image-wrapper" data-astro-cid-ww43nytm> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt || `${title} - Professioneel web design en development voorbeeld`, "class": "hero-image", "width": 800, "height": 600, "data-astro-cid-ww43nytm": true })} </div> </div> </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProductSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProductSection.astro", void 0);

const $$Astro$1 = createAstro("https://www.webmoov.be");
const $$FeaturesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesGrid;
  const { features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section features-section" data-astro-cid-yobonxjp> <div class="container flow" data-astro-cid-yobonxjp> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-yobonxjp": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title" data-astro-cid-yobonxjp>Wat je krijgt</h2> <p class="subtitle" data-astro-cid-yobonxjp>Alles wat je nodig hebt voor een succesvolle online aanwezigheid</p> ` })} <div class="features-grid" data-astro-cid-yobonxjp> ${features.map((feature, index) => renderTemplate`<div class="feature-card" data-feature-card${addAttribute(index, "data-index")} data-astro-cid-yobonxjp> <div class="icon-wrapper" data-astro-cid-yobonxjp> <div class="icon-background" data-astro-cid-yobonxjp> <svg class="check-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-yobonxjp> <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yobonxjp></path> </svg> </div> </div> <h3 class="feature-title" data-astro-cid-yobonxjp>${feature.title}</h3> </div>`)} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/FeaturesGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/FeaturesGrid.astro", void 0);

const strategyImage = new Proxy({"src":"/_astro/strategy.-aPoSu_o.jpg","width":1600,"height":1056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/process/strategy.jpg";
							}
							
							return target[name];
						}
					});

const designImage = new Proxy({"src":"/_astro/design.Dnndy_C1.jpg","width":1600,"height":1056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/process/design.jpg";
							}
							
							return target[name];
						}
					});

const developmentImage = new Proxy({"src":"/_astro/development.6VY4oQhC.jpg","width":1600,"height":1056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/process/development.jpg";
							}
							
							return target[name];
						}
					});

const launchImage = new Proxy({"src":"/_astro/launch._fEseP0b.jpg","width":1600,"height":1056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/process/launch.jpg";
							}
							
							return target[name];
						}
					});

const $$ProcessTimeline = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "1",
      title: "Strategie",
      description: "We leren uw bedrijf, doelen en doelgroep kennen",
      image: strategyImage
    },
    {
      number: "2",
      title: "Design",
      description: "Een ontwerp op maat dat past bij uw merk",
      image: designImage
    },
    {
      number: "3",
      title: "Ontwikkeling",
      description: "We bouwen uw website met robuuste, effici\xEBnte code",
      image: developmentImage
    },
    {
      number: "4",
      title: "Lancering",
      description: "We lanceren uw website en verzorgen de training",
      image: launchImage
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section process-section" data-astro-cid-yen2ri6k> <div class="container" data-astro-cid-yen2ri6k> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-yen2ri6k": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title" data-astro-cid-yen2ri6k>Ons proces</h2> ` })} <div class="process-container" data-astro-cid-yen2ri6k> <div class="process-timeline" data-astro-cid-yen2ri6k> ${steps.map((step) => renderTemplate`<div class="process-step"${addAttribute(step.number, "data-step")} data-astro-cid-yen2ri6k> <div class="step-number" data-astro-cid-yen2ri6k>${step.number}</div> <div class="step-content" data-astro-cid-yen2ri6k> <h3 data-astro-cid-yen2ri6k>${step.title}</h3> <p data-astro-cid-yen2ri6k>${step.description}</p> </div> </div>`)} </div> <div class="process-images" data-astro-cid-yen2ri6k> ${steps.map((step) => renderTemplate`<div class="process-image"${addAttribute(step.number, "data-step")} data-astro-cid-yen2ri6k> ${renderComponent($$result, "Image", $$Image, { "src": step.image, "alt": `${step.title} illustration`, "width": 500, "height": 400, "data-astro-cid-yen2ri6k": true })} </div>`)} </div> </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProcessTimeline.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ProcessTimeline.astro", void 0);

const $$Astro = createAstro("https://www.webmoov.be");
const $$FormSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormSection;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section form-section" id="contact" data-astro-cid-wgrbvptb> <div class="container" data-width="medium" data-astro-cid-wgrbvptb> <div class="contactform-container" data-astro-cid-wgrbvptb> ${renderComponent($$result, "ContactForm", ContactForm, { "align": "center", "product": product, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ContactForm", "client:component-export": "default", "data-astro-cid-wgrbvptb": true })} </div> </div> </section> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/FormSection.astro", void 0);

export { $$ProductSection as $, $$FeaturesGrid as a, $$ProcessTimeline as b, $$FormSection as c };
