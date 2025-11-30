import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_r_wwajli.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.webmoov.be");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    label,
    hiddenLabel,
    href,
    class: className,
    "data-filter": dataFilter,
    align = "center",
    variant = "default"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`button ${className || ""} align-${align} variant-${variant}`, "class")}${addAttribute(dataFilter, "data-filter")} data-astro-cid-6ygtcg62> ${label} <span class="visually-hidden" data-astro-cid-6ygtcg62>${hiddenLabel}</span> </a> `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
