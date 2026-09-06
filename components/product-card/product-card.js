/**
 * Renders one product card element from a real product object
 * shaped like: { id, name, price, category, available, imageUrl, badge }
 * No fallback/sample data — the caller is responsible for supplying
 * real backend data or not calling this at all.
 *
 * NOTE: the wishlist heart and cart button are UI-only right now.
 * They render for visual completeness but aren't wired to anything —
 * real wishlist/cart logic comes later (Phase 13, per the project brief).
 */
export function createProductCard(product) {
  const el = document.createElement("article");
  el.className = "gl-card";

  const mediaHtml = product.imageUrl
    ? `<img src="${product.imageUrl}" alt="${product.name}" loading="lazy" />`
    : "";

  const badgeHtml = product.badge
    ? `<span class="gl-card__badge">${product.badge}</span>`
    : "";

  el.innerHTML = `
    <div class="gl-card__media gl-imgph" data-photo-brief="${product.name}">
      ${mediaHtml}
      ${badgeHtml}
      <button class="gl-card__wishlist" type="button" aria-label="Add ${product.name} to wishlist">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21c-4-3-8-6-8-10.5A5.5 5.5 0 0 1 9.5 5c1 0 2 .5 2.5 1.3C12.5 5.5 13.5 5 14.5 5A5.5 5.5 0 0 1 20 10.5C20 15 16 18 12 21z"/></svg>
      </button>
    </div>
    <div class="gl-card__body">
      <h3 class="gl-card__name">${product.name}</h3>
      <div class="gl-card__meta">
        <span class="gl-card__price">${formatPrice(product.price)}</span>
        ${
          product.available === false
            ? '<span class="gl-card__unavailable">Out of stock</span>'
            : `<button class="gl-card__cart-btn" type="button" aria-label="Add ${product.name} to cart">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
               </button>`
        }
      </div>
    </div>
  `;
  return el;
}

function formatPrice(price) {
  if (typeof price !== "number") return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
