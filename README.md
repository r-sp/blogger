# Blogger

## API Reference

This [API reference](https://developers.google.com/blogger/docs/3.0/reference) is organized by resource type. Each resource type has one or more data representations and one or more methods.

<details>
  <summary>Blog</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/blogs)
- [get](https://developers.google.com/blogger/docs/3.0/reference/blogs/get)
- [getByUrl](https://developers.google.com/blogger/docs/3.0/reference/blogs/getByUrl)
- [listByUser](https://developers.google.com/blogger/docs/3.0/reference/blogs/listByUser)
</details>
<details>
  <summary>Comments</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/comments)
- [list](https://developers.google.com/blogger/docs/3.0/reference/comments/list)
- [get](https://developers.google.com/blogger/docs/3.0/reference/comments/get)
- [approve](https://developers.google.com/blogger/docs/3.0/reference/comments/approve)
- [delete](https://developers.google.com/blogger/docs/3.0/reference/comments/delete)
- [listByBlog](https://developers.google.com/blogger/docs/3.0/reference/comments/listByBlog)
- [markAsSpam](https://developers.google.com/blogger/docs/3.0/reference/comments/markAsSpam)
- [removeContent](https://developers.google.com/blogger/docs/3.0/reference/comments/removeContent)
</details>
<details>
  <summary>Pages</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/pages)
- [list](https://developers.google.com/blogger/docs/3.0/reference/pages/list)
- [get](https://developers.google.com/blogger/docs/3.0/reference/pages/get)
- [delete](https://developers.google.com/blogger/docs/3.0/reference/pages/delete)
- [insert](https://developers.google.com/blogger/docs/3.0/reference/pages/insert)
- [patch](https://developers.google.com/blogger/docs/3.0/reference/pages/patch)
- [update](https://developers.google.com/blogger/docs/3.0/reference/pages/update)
</details>
<details>
  <summary>Posts</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/posts)
- [list](https://developers.google.com/blogger/docs/3.0/reference/posts/list)
- [get](https://developers.google.com/blogger/docs/3.0/reference/posts/get)
- [search](https://developers.google.com/blogger/docs/3.0/reference/posts/search)
- [delete](https://developers.google.com/blogger/docs/3.0/reference/posts/delete)
- [getByPath](https://developers.google.com/blogger/docs/3.0/reference/posts/getByPath)
- [insert](https://developers.google.com/blogger/docs/3.0/reference/posts/insert)
- [patch](https://developers.google.com/blogger/docs/3.0/reference/posts/patch)
- [update](https://developers.google.com/blogger/docs/3.0/reference/posts/update)
- [publish](https://developers.google.com/blogger/docs/3.0/reference/posts/publish)
- [revert](https://developers.google.com/blogger/docs/3.0/reference/posts/revert)
</details>
<details>
  <summary>Users</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/users)
- [get](https://developers.google.com/blogger/docs/3.0/reference/users/get)
</details>
<details>
  <summary>BlogUserInfos</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/blogUserInfos)
- [get](https://developers.google.com/blogger/docs/3.0/reference/blogUserInfos/get)
</details>
<details>
  <summary>PageViews</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/pageViews)
- [get](https://developers.google.com/blogger/docs/3.0/reference/pageViews/get)
</details>
<details>
  <summary>PostUserInfos</summary>

- [overview](https://developers.google.com/blogger/docs/3.0/reference/postUserInfos)
- [get](https://developers.google.com/blogger/docs/3.0/reference/postUserInfos/get)
- [list](https://developers.google.com/blogger/docs/3.0/reference/postUserInfos/list)
</details>

---

### Blogs

| Method     | HTTP request              | Description                 |
| ---------- | ------------------------- | --------------------------- |
| get        | `GET` /blogs/blogId       | Retrieves a blog by its ID. |
| getByUrl   | `GET` /blogs/byurl        | Retrieves a blog by URL.    |
| listByUser | `GET` /users/userId/blogs | Retrieves a list of blogs   |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#blog",
  "id": value,
  "name": value,
  "description": value,
  "published": value,
  "updated": value,
  "url": value,
  "selfLink": value,
  "posts": {
    "totalItems": value,
    "selfLink": value
  },
  "pages": {
    "totalItems": value,
    "selfLink": value
  },
  "locale": {
    "language": value,
    "country": value,
    "variant": value
  }
}
```

</details>

---

### Comments

| Method        | HTTP request                                                       | Description                                                                                                             |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| list          | `GET` /blogs/blogId/posts/postId/comments                          | Retrieves the list of comments for a post.                                                                              |
| get           | `GET` /blogs/blogId/posts/postId/comments/commentId                | Retrieves one comment resource by its commentId.                                                                        |
| approve       | `POST` /blogs/blogId/posts/postId/comments/commentId/approve       | Marks a comment as not spam.                                                                                            |
| delete        | `DELETE` /blogs/blogId/posts/postId/comments/commentId             | Delete a comment by ID.                                                                                                 |
| listByBlog    | `GET` /blogs/blogId/comments                                       | Retrieves the comments for a blog, across all posts, possibly filtered.                                                 |
| markAsSpam    | `POST` /blogs/blogId/posts/postId/comments/commentId/spam          | Marks a comment as spam. This will set the status of the comment to spam, and hide it in the default comment rendering. |
| removeContent | `POST` /blogs/blogId/posts/postId/comments/commentId/removecontent | Removes the content of a comment.                                                                                       |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#comment",
  "status": string,
  "id": string,
  "inReplyTo": {
    "id": string
  },
  "post": {
    "id": string
  },
  "blog": {
    "id": string
  },
  "published": datetime,
  "updated": datetime,
  "selfLink": string,
  "content": string,
  "author": {
    "id": string,
    "displayName": string,
    "url": string,
    "image": {
      "url": string
    }
  }
}
```

</details>

---

### Pages

| Method | HTTP request                        | Description                                          |
| ------ | ----------------------------------- | ---------------------------------------------------- |
| list   | `GET` /blogs/blogId/pages           | Retrieves the list of pages for a blog.              |
| get    | `GET` /blogs/blogId/pages/pageId    | Retrieves one pages resource by its page ID.         |
| delete | `DELETE` /blogs/blogId/pages/pageId | Delete a page by ID.                                 |
| insert | `POST` /blogs/blogId/pages          | Add a page.                                          |
| patch  | `PATCH` /blogs/blogId/pages/pageId  | Update a page. This method supports patch semantics. |
| update | `PUT` /blogs/blogId/pages/pageId    | Update a page.                                       |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#page",
  "id": string,
  "status": string,
  "blog": {
    "id": string
  },
  "published": datetime,
  "updated": datetime,
  "url": string,
  "selfLink": string,
  "title": string,
  "content": string,
  "author": {
    "id": string,
    "displayName": string,
    "url": string,
    "image": {
      "url": string
    }
  }
}
```

</details>

---

### Posts

| Method    | HTTP request                              | Description                                                                                                     |
| --------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| list      | `GET` /blogs/blogId/posts                 | Retrieves a list of posts.                                                                                      |
| get       | `GET` /blogs/blogId/posts/postId          | Retrieves one post by post ID.                                                                                  |
| search    | `GET` /blogs/blogId/posts/search          | Searches for a post that matches the given query terms.                                                         |
| insert    | `POST` /blogs/blogId/posts                | Adds a post.                                                                                                    |
| delete    | `DELETE` /blogs/blogId/posts/postId       | Deletes a post by ID.                                                                                           |
| getByPath | `GET` /blogs/blogId/posts/bypath          | Retrieves a post by path.                                                                                       |
| patch     | `PATCH` /blogs/blogId/posts/postId        | Updates a post. This method supports patch semantics.                                                           |
| update    | `PUT` /blogs/blogId/posts/postId          | Updates a post.                                                                                                 |
| publish   | `POST` /blogs/blogId/posts/postId/publish | Publish a draft post.                                                                                           |
| revert    | `POST` /blogs/blogId/posts/postId/revert  | Revert a published or scheduled post to draft state, which removes the post from the publicly viewable content. |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#post",
  "id": string,
  "blog": {
    "id": string
  },
  "published": datetime,
  "updated": datetime,
  "url": string,
  "selfLink": string,
  "title": string,
  "titleLink": string,
  "content": string,
  "images": [
    {
      "url": string
    }
  ],
  "customMetaData": string,
  "author": {
    "id": string,
    "displayName": string,
    "url": string,
    "image": {
      "url": string
    }
  },
  "replies": {
    "totalItems": long,
    "selfLink": string,
    "items": [
      comments Resource
    ]
  },
  "labels": [
    string
  ],
  "location": {
    "name": string,
    "lat": double,
    "lng": double,
    "span": string
  },
  "status": string
}
```

</details>

---

### Users

| Method | HTTP request        | Description                  |
| ------ | ------------------- | ---------------------------- |
| get    | `GET` /users/userId | Retrieves a user by user ID. |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#user",
  "id": string,
  "created": datetime,
  "url": string,
  "selfLink": string,
  "blogs": {
    "selfLink": string
  },
  "displayName": string,
  "about": string,
  "locale": {
    "language": string,
    "country": string,
    "variant": string
  }
}
```

</details>

---

### BlogUserInfos

| Method | HTTP request                     | Description                                            |
| ------ | -------------------------------- | ------------------------------------------------------ |
| get    | `GET` /users/userId/blogs/blogId | Gets one blog and user info pair by blogId and userId. |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#blogUserInfo",
  "blog": blogs Resource,
  "blog_user_info": {
    "kind": "blogger#blogPerUserInfo",
    "userId": string,
    "blogId": string,
    "photosAlbumKey": string,
    "hasAdminAccess": boolean
  }
}
```

</details>

---

### PageViews

| Method | HTTP request                  | Description                         |
| ------ | ----------------------------- | ----------------------------------- |
| get    | `GET` /blogs/blogId/pageviews | Retrieve pageview stats for a Blog. |

<details>
  <summary>View API</summary>

```json
{
  "kind": "blogger#page_views",
  "blogId": long,
  "counts": [
    {
      "timeRange": string,
      "count": long
    }
  ]
}
```

</details>

---

### PostsUserInfos

| Method | HTTP request                                  | Description                                                                                                                                                                         |
| ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get    | `GET` /users/userId/blogs/blogId/posts/postId | Gets one post and user info pair by postId and userId.                                                                                                                              |
| list   | `GET` /users/userId/blogs/blogId/posts        | Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user. |

<details>
  <summary>View API</summary>
  
```json
{
  "kind": "blogger#postUserInfo",
  "post": posts Resource,
  "post_user_info": {
    "kind": "blogger#postPerUserInfo",
    "userId": string,
    "blogId": string,
    "postId": string,
    "hasEditAccess": boolean
  }
}
```
</details>

---

Source:

- [API Reference v3.0](https://developers.google.com/blogger/docs/3.0/reference).
