export function initNavbar(currentPage) {
  const navbar = document.querySelector("[data-navbar]");
  if (!navbar) return;

  const toggleBtn = navbar.querySelector("[data-navbar-toggle]");
  const mobileMenu = navbar.querySelector("[data-mobile-menu]");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.getAttribute("data-open") === "true";
      mobileMenu.setAttribute("data-open", String(!isOpen));
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  if (currentPage) {
    navbar.querySelectorAll(`[data-nav="${currentPage}"]`).forEach((link) => {
      link.setAttribute("aria-current", "page");
    });
  }
}
