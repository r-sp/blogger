import { Blogger } from "./api";
import { getApi } from "./utils";
import type { OriginTypes, BlogItemsTypes } from "./types";

import { Banner } from "src/components/banner";
import { Feeds } from "src/components/feeds";

console.log("origin: " + Blogger.origin);
console.log("posts: " + Blogger.posts);
console.log("pages: " + Blogger.pages);

const blogOrigin = getApi<OriginTypes>(new URL(Blogger.origin)).then((data) => {
  const header = Banner({ blog: data });
  console.log(header);

  const blogPosts = getApi<BlogItemsTypes>(new URL(Blogger.posts)).then(
    (data) => {
      const posts = Feeds({ blog: data });
      console.log(posts);

      const blogPages = getApi<BlogItemsTypes>(new URL(Blogger.pages)).then(
        (data) => {
          const pages = Feeds({ blog: data });
          console.log(pages);
        }
      );
    }
  );
});
