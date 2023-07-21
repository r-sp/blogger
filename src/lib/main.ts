import { Blogger } from "./api";
import { getApi, addElement } from "./utils";
import type { OriginTypes, BlogPostsTypes, BlogPagesTypes } from "./types";

console.log("origin: " + Blogger.origin);
console.log("posts: " + Blogger.posts);
console.log("pages: " + Blogger.pages);

function renderOrigin(blog: OriginTypes) {
  const app = document.getElementById("app");
  if (!app) return false;
  const card = addElement("div", app);
  const title = addElement("h1", card, blog.name);
  const description = addElement("p", card, blog.description);
  const totalPages = addElement("p", card, blog.pages.totalItems + " pages");
  const totalPosts = addElement("p", card, blog.posts.totalItems + " posts");
  const lastOnline = addElement(
    "time",
    card,
    "Last online: " + new Date(blog.updated).toLocaleString()
  );

  card.classList.add("blog-details");
  title.classList.add("blog-name");
  description.classList.add("blog-description");
  totalPages.classList.add("blog-total-pages");
  totalPosts.classList.add("blog-total-posts");
  lastOnline.classList.add("blog-last-online");
  lastOnline.setAttribute("datetime", blog.updated);
}

const blogOrigin = getApi<OriginTypes>(new URL(Blogger.origin)).then((data) =>
  renderOrigin(data)
);
// const blogPosts = getApi<BlogPostsTypes>(new URL(Blogger.posts)).then((data) => console.log(data));
// const blogPages = getApi<BlogPagesTypes>(new URL(Blogger.pages)).then((data) => console.log(data));
