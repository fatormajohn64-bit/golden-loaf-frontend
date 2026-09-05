import { initNavbar } from "/components/navbar/navbar.js";
import { initFooter } from "/components/footer/footer.js";
import { createProductCard } from "/components/product-card/product-card.js";
import { fetchFeaturedProducts, fetchProducts } from "/services/products-api.js";
import { fetchPosts } from "/services/posts-api.js";

initNavbar("home");
initFooter();

renderRail({
  container: document.querySelector("[data-bestsellers]"),
  loader: fetchFeaturedProducts,
  emptyMessage: "No best sellers yet. Check back soon.",
});

renderRail({
  container: document.querySelector("[data-fresh]"),
  loader: () => fetchProducts(),
  emptyMessage: "No products available yet.",
});

renderStories();

async function renderRail({ container, loader, emptyMessage }) {
  if (!container) return;
  try {
    const products = await loader();
    if (!products || products.length === 0) {
      container.innerHTML = `<p class="gl-rail__empty">${emptyMessage}</p>`;
      return;
    }
    container.innerHTML = "";
    products.forEach((product) => container.appendChild(createProductCard(product)));
  } catch (err) {
    container.innerHTML = `<p class="gl-rail__error">Unable to load products. Please try again.</p>`;
  }
}

async function renderStories() {
  const container = document.querySelector("[data-stories]");
  if (!container) return;
  try {
    const posts = await fetchPosts();
    if (!posts || posts.length === 0) {
      container.innerHTML = `<p class="gl-rail__empty">No stories posted yet.</p>`;
      return;
    }
    container.innerHTML = "";
    posts.forEach((post) => container.appendChild(createStoryCard(post)));
  } catch (err) {
    container.innerHTML = `<p class="gl-rail__error">Unable to load stories right now.</p>`;
  }
}

function createStoryCard(post) {
  const el = document.createElement("article");
  el.className = "gl-card";
  const mediaHtml = post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" loading="lazy" />` : "";
  el.innerHTML = `
    <div class="gl-card__media gl-imgph" data-photo-brief="${post.title}">${mediaHtml}</div>
    <div class="gl-card__body">
      <h3 class="gl-card__name">${post.title}</h3>
    </div>
  `;
  return el;
}
