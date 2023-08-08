import type { BlogItemsTypes } from "../api/types";

export async function fetchPosts(url: URL): Promise<BlogItemsTypes> {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json: BlogItemsTypes = await response.json();
  return json;
}

export async function listPosts(
  url: URL,
  token?: string
): Promise<BlogItemsTypes> {
  const requestedUrl = new URL(url);

  const nextPageParam = new URLSearchParams(requestedUrl.search);
  if (token) nextPageParam.set("pageToken", token);
  const nextPageUrl = new URL(requestedUrl + nextPageParam.toString());

  const apiPostsUrl = token ? nextPageUrl : requestedUrl;

  const posts = fetchPosts(apiPostsUrl);
  return posts;
}
