import { apiGet } from "./api-config.js";

/**
 * GET /api/posts — backend only returns published posts to the public frontend.
 * Optional params, e.g. { category: "offer" }, filter which posts come back.
 */
export async function fetchPosts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiGet(`/api/posts${query ? `?${query}` : ""}`);
}
