/**
 * Single place that knows where the backend lives.
 * Swap BASE_URL for the real backend origin once it's deployed.
 */
export const BASE_URL = "http://localhost:4000";

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}
