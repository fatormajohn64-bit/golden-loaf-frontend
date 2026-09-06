/**
 * Golden Loaf Navbar behavior.
 * Call initNavbar() once per page after the navbar markup is in the DOM.
 * Pass the current page key ("home" | "shop" | "about" | "contact")
 * so the matching link gets aria-current="page".
 *
 * Nav links are always visible in the header now (no hidden mobile
 * drawer), so this only handles marking the active page.
 */
export function initNavbar(currentPage) {
  const navbar = document.querySelector("[data-navbar]");
  if (!navbar || !currentPage) return;

  navbar.querySelectorAll(`[data-nav="${currentPage}"]`).forEach((link) => {
    link.setAttribute("aria-current", "page");
  });
}
