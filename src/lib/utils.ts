/** get api via fetch */
async function getApi<T>(url: URL): Promise<T> {
  return fetch(url, {
    method: "GET",
  }).then((response) => {
    return response.json() as Promise<T>;
  });
}

/** create custom element */
function createElement(
  target: HTMLElement = document.body,
  tagName: string,
  className: string,
  textContent?: string,
  attributes?: Record<string, string> & Readonly<{}>,
  callback?: Function
): HTMLElement {
  const newElement = document.createElement(tagName);
  target.appendChild(newElement);

  /** set a custom className */
  newElement.className = className;

  /** text content only appears when triggered */
  if (textContent) {
    const newContent = document.createTextNode(textContent);
    newElement.appendChild(newContent);
  }

  /** set a custom element attributes */
  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      const value = attributes[key];
      newElement.setAttribute(key, value);
    });
  }

  /** don't try to use callbacks if it's not for the interaction of elements itself */
  if (callback) {
    callback();
  }

  /** give back the element */
  return newElement;
}

export { getApi, createElement };
