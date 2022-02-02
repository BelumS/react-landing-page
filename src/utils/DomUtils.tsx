export const addElement = (element: Element, className: string) => {
  element.classList.add(className);
};

export const toggleElement = (element: Element, className: string) => element.classList.toggle(className);

export const elementHasClass = (element: Element, className: string) => element.classList.contains(className);
