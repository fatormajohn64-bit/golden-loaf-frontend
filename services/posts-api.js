import { apiGet } from "./api-config.js";

/** GET /api/posts — backend only returns published posts to the public frontend. */
export async function fetchPosts() {
  return apiGet("/api/posts");
}
