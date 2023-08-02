import config from "./config";

let getApiBlogs = new URL(`${config.apiUrl}/${config.blogId}?`);
let blogsParam = new URLSearchParams(getApiBlogs.search);
blogsParam.set("key", config.apiKey);

let getApiPosts = new URL(`${config.apiUrl}/${config.blogId}/posts?`);
let postsParam = new URLSearchParams(getApiPosts.search);
postsParam.set("fetchBodies", "false");
postsParam.set("fetchImages", "true");
postsParam.set("orderBy", "updated");
postsParam.set("status", "live");
postsParam.set("key", config.apiKey);

let getApiPages = new URL(`${config.apiUrl}/${config.blogId}/pages?`);
let pagesParam = new URLSearchParams(getApiPages.search);
pagesParam.set("fetchBodies", "false");
pagesParam.set("status", "live");
pagesParam.set("key", config.apiKey);

const blogs = new URL(getApiBlogs + blogsParam.toString());
const posts = new URL(getApiPosts + postsParam.toString());
const pages = new URL(getApiPages + pagesParam.toString());

export const apiBlogUrl = {
  blogs,
  posts,
  pages,
};
