import type { BlogItemsTypes } from "src/lib/types";
import { createElement } from "src/lib/utils";

export function Feeds({ blog }: { blog: BlogItemsTypes }) {
  const feed = createElement(document.body, "section", "feeds");
  const list = createElement(feed, "ul", "list");

  const posts = blog.items.map((post) => {
    const item = createElement(list, "li", "item");
    item.setAttribute("id", post.id);
    const link = createElement(item, "a", "link", post.title);
    link.setAttribute("href", post.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "nofollow noopener");
    return link;
  });
  return posts;
}