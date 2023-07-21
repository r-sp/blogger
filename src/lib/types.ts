export type OriginTypes = {
  kind: string;
  id: string;
  name: string;
  description: string;
  published: string;
  updated: string;
  url: string | URL;
  selfLink: string | URL;
  posts: {
    totalItems: number;
    selfLink: string | URL;
  };
  pages: {
    totalItems: number;
    selfLink: string | URL;
  };
  locale: {
    language: string;
    country: string;
    variant: string;
  };
};

export type BlogPostsTypes = {
  kind: string;
  items: Array<{
    kind: string;
    id: string;
    blog: Array<{
      id: string;
    }>;
    published: string;
    updated: string;
    url: string | URL;
    selfLink: string | URL;
    title: string;
    content: string;
    author: Array<{
      id: string;
      displayName: string;
      url: string | URL;
      image: Array<{
        url: string | URL;
      }>;
    }>;
    replies: Array<{
      totalItems: string;
      selfLink: string | URL;
    }>;
    labels: Array<[string]>;
    etag: string;
  }>;
  etag: string;
};

export type BlogPagesTypes = {
  kind: string;
  items: Array<{
    kind: string;
    id: string;
    blog: Array<{
      id: string;
    }>;
    published: string;
    updated: string;
    url: string | URL;
    selfLink: string | URL;
    title: string;
    content: string;
    author: Array<{
      id: string;
      displayName: string;
      url: string | URL;
      image: Array<{
        url: string | URL;
      }>;
    }>;
    etag: string;
  }>;
  etag: string;
};
