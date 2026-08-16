import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { postPath, ui } from "@/i18n/ui";

export async function GET(context: APIContext) {
  const posts = (
    await getCollection("blog", (post) => post.data.lang === "en" && !post.data.draft)
  ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${ui.en.title} ${ui.en.blogIndex.title}`,
    description: ui.en.blogIndex.description,
    site: context.site ?? "https://giovalgas.dev.br",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      categories: [post.data.tag],
      link: postPath("en", post.data.slug),
    })),
    customData: "<language>en</language>",
  });
}
