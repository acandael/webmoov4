import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_C24CrOD4.mjs';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
export { renderers } from '../renderers.mjs';

const parser = new MarkdownIt();
async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Webmoov’s Blog",
    description: "Blog over web design, web development, process en samenwerken met klanten.",
    site: context.site?.toString() ?? "",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body ?? "")),
      image: post.data.image
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
