/** get api via fetch */
async function getApi<T>(url: URL): Promise<T> {
  return fetch(url, {
    method: "GET",
  }).then((response) => {
    /** show an error when the API response differs as expected */
    if (!response.ok) {
      throw new Error(`HTTP: error: ${response.status}`);
    }
    /** give back the response as promised */
    return response.json() as Promise<T>;
  });
}

/** create custom element */
function createElement(
  target: HTMLElement = document.body,
  tagName: string,
  className: string,
  textContent?: string
): HTMLElement {
  /** create a new element */
  const newElement = document.createElement(tagName);
  target.appendChild(newElement);
  /** set a custom className */
  newElement.className = className;
  /** text content only appears when triggered */
  if (textContent) {
    const newContent = document.createTextNode(textContent);
    newElement.appendChild(newContent);
  }
  /** give back the element */
  return newElement;
}

export { getApi, createElement };
