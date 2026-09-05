import { apiGet } from "./api-config.js";

export async function fetchProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiGet(`/api/products${query ? `?${query}` : ""}`);
}

export async function fetchProductById(id) {
  return apiGet(`/api/products/${id}`);
}

export async function fetchFeaturedProducts() {
  return fetchProducts({ featured: "true" });
}
