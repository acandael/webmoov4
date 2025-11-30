import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, e as renderComponent, r as renderTemplate } from '../chunks/astro/server_D6Uo94ps.mjs';
import 'kleur/colors';
import { C as ContactForm } from '../chunks/ContactForm_BzOloBEe.mjs';
import { $ as $$Heading } from '../chunks/Heading_VoDXhzC6.mjs';
import { $ as $$Layout } from '../chunks/Layout_xaltc5_f.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro = createAstro("https://www.webmoov.be");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/anthonycandaele/Projects/webmoov4/website/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Mail = createLucideIcon("mail", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]]);

const MapPin = createLucideIcon("map-pin", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }]]);

const Phone = createLucideIcon("phone", [["path", { "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Maatwerk Website Aanvragen | Webmoov", "description": "Neem contact op met Webmoov voor professioneel web design en development. Vraag een offerte aan voor uw maatwerk website project. Telefoon: +32 498137260 | Email: info@webmoov.be | Blankenberge, Belgi\xEB.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section section-contact" data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` <h1 class="section-title" data-astro-cid-uw5kdbxl>Neem contact op</h1> <p class="subtitle" data-astro-cid-uw5kdbxl>
Heeft u een vraag over onze diensten? Klaar om uw project te starten? We horen het graag
					van u.
</p> ` })} <div class="contact-grid" data-astro-cid-uw5kdbxl> <div class="contact-form-container" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/anthonycandaele/Projects/webmoov4/website/src/components/ContactForm.tsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </div> <div class="contact-info" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Contact informatie</h2> <ul class="contact-list" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "MapPin", MapPin, { "color": "#FF5733", "size": 24, "data-astro-cid-uw5kdbxl": true })} <div data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Adres</h3> <p data-astro-cid-uw5kdbxl>Grote Edestraat 50, 8370 Blankenberge</p> </div> </div> </li> <li data-astro-cid-uw5kdbxl> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Phone", Phone, { "color": "#FF5733", "size": 24, "data-astro-cid-uw5kdbxl": true })} <div data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Bel ons</h3> <p data-astro-cid-uw5kdbxl><a href="tel:+32498137260" data-astro-cid-uw5kdbxl>+32 498137260</a></p> </div> </div> </li> <li data-astro-cid-uw5kdbxl> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Mail", Mail, { "color": "#FF5733", "size": 24, "data-astro-cid-uw5kdbxl": true })} <div data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Email ons</h3> <p data-astro-cid-uw5kdbxl><a href="mailto:info@webmoov.be" data-astro-cid-uw5kdbxl>info@webmoov.be</a></p> </div> </div> </li> </ul> </div> </div> </div> </section> ` })} `;
}, "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/contact.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/webmoov4/website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
