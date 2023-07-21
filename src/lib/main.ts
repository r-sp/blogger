import { Blogger } from "./api";
import { getApi } from "./utils";
import type { OriginTypes } from "./types";

import { Banner } from "src/components/banner";

console.log("origin: " + Blogger.origin);
console.log("posts: " + Blogger.posts);
console.log("pages: " + Blogger.pages);

const blogOrigin = getApi<OriginTypes>(new URL(Blogger.origin)).then((data) => {
  const header = Banner({ blog: data });
  console.log(header);
});

// const blogPosts = getApi<BlogPostsTypes>(new URL(Blogger.posts)).then((data) => console.log(data));
// const blogPages = getApi<BlogPagesTypes>(new URL(Blogger.pages)).then((data) => console.log(data));
