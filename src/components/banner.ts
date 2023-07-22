import type { OriginTypes } from "src/lib/types";
import { createElement } from "src/lib/utils";

export function Banner({ blog }: { blog: OriginTypes }) {
  const card = createElement(document.body, "header", "banner");
  const name = createElement(card, "h1", "title", blog.name);
  const text = createElement(card, "p", "description", blog.description);

  const info =
    blog.posts.totalItems + " Posts, " + blog.pages.totalItems + " Pages.";
  const stats = createElement(card, "p", "details", info);

  const lastOnline = "Last online: " + new Date(blog.updated).toLocaleString();
  const status = createElement(card, "date", "status", lastOnline);
  status.setAttribute("datetime", lastOnline);
  return { name, text, stats, status };
}
