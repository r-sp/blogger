const blogApi = {
  _url: "https://www.googleapis.com/blogger/v3/blogs/4252532404171836550/",
  _key: "?key=AIzaSyCtHRhfeAkoD_fALu93VAUydDDI8XqZWtM",
  _posts: "posts",
  _pages: "pages",
};

const blogOrigin = blogApi._url + blogApi._key;
const blogPosts = blogApi._url + blogApi._posts + blogApi._key;
const blogPages = blogApi._url + blogApi._pages + blogApi._key;

export const Blogger = {
  origin: blogOrigin,
  posts: blogPosts,
  pages: blogPages,
};
