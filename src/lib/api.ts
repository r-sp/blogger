const blogApi = {
  _url: "https://www.googleapis.com/blogger/v3/blogs/4252532404171836550/",
  _key: "?key=AIzaSyCtHRhfeAkoD_fALu93VAUydDDI8XqZWtM",
  _posts: "posts",
  _postsParams:
    "&fetchBodies=false&fetchImages=false&orderBy=updated&status=live",
  _pages: "pages",
  _pagesParams: "&fetchBodies=false&status=live",
};

const blogOrigin = blogApi._url + blogApi._key;
const blogPosts =
  blogApi._url + blogApi._posts + blogApi._key + blogApi._postsParams;
const blogPages =
  blogApi._url + blogApi._pages + blogApi._key + blogApi._pagesParams;

export const Blogger = {
  origin: blogOrigin,
  posts: blogPosts,
  pages: blogPages,
};
