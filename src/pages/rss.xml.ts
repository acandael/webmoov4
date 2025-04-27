import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
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
			image: post.data.image,
		})),
	});
}
