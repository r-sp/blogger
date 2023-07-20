const config = {
  blogId: "4252532404171836550",
  apiKey: "AIzaSyCtHRhfeAkoD_fALu93VAUydDDI8XqZWtM",
  apiUrl: "https://www.googleapis.com/blogger/v3/blogs/",
};

const blogOrigin = config.apiUrl + config.blogId + "?key=" + config.apiKey;

async function getApi(data) {
  const response = await fetch(data, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

function addElement(type = "div", target = document.body, content) {
  const newElement = document.createElement(type);
  target.appendChild(newElement);
  const newContent = document.createTextNode(content);
  content && newElement.appendChild(newContent);
  return newElement;
}

function renderOrigin(blog) {
  const app = document.getElementById("app");
  const card = addElement("div", app);
  const title = addElement("h1", card, blog.name);
  const description = addElement("p", card, blog.description);
  const totalPages = addElement("p", card, blog.pages.totalItems + " pages");
  const totalPosts = addElement("p", card, blog.posts.totalItems + " posts");
  const lastOnline = addElement(
    "time",
    card,
    "Last online: " + new Date(blog.updated).toLocaleString()
  );

  card.classList.add("blog-details");
  title.classList.add("blog-name");
  description.classList.add("blog-description");
  totalPages.classList.add("blog-total-pages");
  totalPosts.classList.add("blog-total-posts");
  lastOnline.classList.add("blog-last-online");
  lastOnline.setAttribute("datetime", blog.updated);
}

getApi(blogOrigin).then((data) => renderOrigin(data));
