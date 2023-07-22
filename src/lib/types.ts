export type OriginTypes = {
  kind: string;
  id: string;
  name: string;
  description: string;
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  posts: {
    totalItems: number;
    selfLink: string;
  };
  pages: {
    totalItems: number;
    selfLink: string;
  };
  locale: {
    language: string;
    country: string;
    variant: string;
  };
};

export type BlogItemsTypes = {
  kind: string;
  nextPageToken: string;
  items: Array<{
    kind: string;
    id: string;
    blog: Array<{
      id: string;
    }>;
    published: string;
    updated: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: Array<{
      id: string;
      displayName: string;
      url: string;
      image: Array<{
        url: string;
      }>;
    }>;
    replies?: Array<{
      totalItems: string;
      selfLink: string;
    }>;
    labels?: Array<[string]>;
    etag: string;
  }>;
  etag: string;
};
