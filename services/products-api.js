import { apiGet } from "./api-config.js";

/** GET /api/products — optionally filtered by query params (category, featured, etc). */
export async function fetchProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiGet(`/api/products${query ? `?${query}` : ""}`);
}

/** GET /api/products/:id */
export async function fetchProductById(id) {
  return apiGet(`/api/products/${id}`);
}

/** Convenience: products marked featured=true, used for Best Sellers. */
export async function fetchFeaturedProducts() {
  return fetchProducts({ featured: "true" });
}
