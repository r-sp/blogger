const blogId = "4252532404171836550";
const apiKey = "AIzaSyCtHRhfeAkoD_fALu93VAUydDDI8XqZWtM";

let apiv3Blogs = new URL(
  `https://www.googleapis.com/blogger/v3/blogs/${blogId}?`
);
let blogParams = new URLSearchParams(apiv3Blogs.search);
blogParams.set("key", apiKey);

let apiv3Posts = new URL(
  `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?`
);
let postParams = new URLSearchParams(apiv3Posts.search);
postParams.set("fetchBodies", "false");
postParams.set("fetchImages", "true");
postParams.set("orderBy", "updated");
postParams.set("status", "live");
postParams.set("key", apiKey);

let apiv3Pages = new URL(
  `https://www.googleapis.com/blogger/v3/blogs/${blogId}/pages?`
);
let pageParams = new URLSearchParams(apiv3Pages.search);
pageParams.set("fetchBodies", "false");
pageParams.set("status", "live");
pageParams.set("key", apiKey);

const apiBlogs = new URL(apiv3Blogs + blogParams.toString());
const apiPosts = new URL(apiv3Posts + postParams.toString());
const apiPages = new URL(apiv3Pages + pageParams.toString());

export const apiBlogURL = {
  apiBlogs,
  apiPosts,
  apiPages,
};
