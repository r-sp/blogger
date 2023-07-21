async function getApi<T>(url: URL): Promise<T> {
  return fetch(url, {
    method: "GET",
  }).then((response) => {
    return response.json() as Promise<T>;
  });
}

function addElement(
  type: string = "div",
  target: HTMLElement = document.body,
  content: string = ""
): HTMLElement {
  const newElement = document.createElement(type);
  target.appendChild(newElement);
  const newContent = document.createTextNode(content);
  content && newElement.appendChild(newContent);
  return newElement;
}

export { getApi, addElement };
