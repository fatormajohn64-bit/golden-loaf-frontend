/**
 * Golden Loaf Footer behavior.
 * Call initFooter() once per page after the footer markup is in the DOM.
 */
export function initFooter() {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
