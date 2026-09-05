import { initNavbar } from "../../components/navbar/navbar.js";
import { initFooter } from "../../components/footer/footer.js";
import { createProductCard } from "../../components/product-card/product-card.js";
import { fetchProducts } from "../../services/products-api.js";

initNavbar("shop");
initFooter();

const grid = document.querySelector("[data-product-grid]");
const filterBar = document.querySelector("[data-category-filter]");

let activeCategory = "all";

if (filterBar) {
  filterBar.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-category]");
    if (!btn) return;

    filterBar.querySelectorAll("[data-category]").forEach((chip) => {
      chip.setAttribute("aria-pressed", "false");
    });
    btn.setAttribute("aria-pressed", "true");

    activeCategory = btn.dataset.category;
    loadProducts(activeCategory);
  });
}

loadProducts(activeCategory);

async function loadProducts(category) {
  if (!grid) return;
  grid.innerHTML = `<p class="gl-shop-empty">Loading products…</p>`;

  try {
    const params = category && category !== "all" ? { category } : {};
    const products = await fetchProducts(params);

    if (!products || products.length === 0) {
      grid.innerHTML = `
        <div class="gl-shop-empty">
          <h3>No products available yet.</h3>
          <p>Check back soon — new bakes go up every morning.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = "";
    products.forEach((product) => grid.appendChild(createProductCard(product)));
  } catch (err) {
    grid.innerHTML = `
      <div class="gl-shop-error">
        <h3>Unable to load products.</h3>
        <p>Please try again in a moment.</p>
      </div>
    `;
  }
}
