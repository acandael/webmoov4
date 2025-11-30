import { c as createComponent, g as defineStyleVars, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_r_wwajli.mjs';
import { $ as $$Button } from './Button_ColBcMks.mjs';
import { $ as $$Heading } from './Heading_AkU23SkB.mjs';
/* empty css                         */

const ctaBackground = new Proxy({"src":"/_astro/cta-background.B6dYlGn_.png","width":2880,"height":1316,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/cta-background.png";
							}
							
							return target[name];
						}
					});

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const $$definedVars = defineStyleVars([{ backgroundImage: `url(${ctaBackground.src})` }]);
  return renderTemplate`${maybeRenderHead()}<section class="section cta-section" data-gap="medium" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}> <div class="container" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-4xty6sx2": true }, { "default": ($$result2) => renderTemplate` <h2 class="section-title text-high-contrast" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}>
Klaar om uw digitale aanwezigheid te transformeren?
</h2> <p class="subtitle text-low-contrast" data-astro-cid-4xty6sx2${addAttribute($$definedVars, "style")}>
Laten we bespreken hoe we uw bedrijf kunnen laten groeien met een op maat gemaakte website.
</p> ` })} ${renderComponent($$result, "Button", $$Button, { "label": "Start het gesprek", "hiddenLabel": "over je project via ons contactformulier", "href": "/contact", "data-astro-cid-4xty6sx2": true })} </div> </section> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/CTA.astro", void 0);

export { $$CTA as $, ctaBackground as c };
