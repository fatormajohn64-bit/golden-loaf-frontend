export function createProductCard(product) {
  const el = document.createElement("article");
  el.className = "gl-card";

  const mediaHtml = product.imageUrl
    ? `<img src="${product.imageUrl}" alt="${product.name}" loading="lazy" />`
    : "";

  el.innerHTML = `
    <div class="gl-card__media gl-imgph" data-photo-brief="${product.name}">${mediaHtml}</div>
    <div class="gl-card__body">
      <h3 class="gl-card__name">${product.name}</h3>
      <div class="gl-card__meta">
        <span class="gl-card__price">${formatPrice(product.price)}</span>
        ${product.available === false ? '<span class="gl-card__unavailable">Out of stock</span>' : ""}
      </div>
    </div>
  `;
  return el;
}

function formatPrice(price) {
  if (typeof price !== "number") return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
