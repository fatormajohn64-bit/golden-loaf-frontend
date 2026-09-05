import { apiGet } from "./api-config.js";

export async function fetchPosts() {
  return apiGet("/api/posts");
}
