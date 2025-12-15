const BASE =
  typeof import.meta !== "undefined"
    ? import.meta.env.VITE_RAWG_PROXY_URL || "http://localhost:4000"
    : "http://localhost:4000";

async function checkResponse(res) {
  const text = await res.text();
  let parsed;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch {
    parsed = text;
  }
  if (!res.ok) {
    const message =
      (parsed && typeof parsed === "object" && parsed.message) ||
      (typeof parsed === "string" ? parsed : res.statusText);
    throw new Error(
      `Proxy returned ${res.status}${message ? `: ${message}` : ""}`
    );
  }
  return parsed;
}

export async function getPopular({ page_size = 9, page = 1 } = {}) {
  const url = `${BASE}/api/rawg/popular?page_size=${page_size}&page=${page}`;
  const res = await fetch(url);
  return checkResponse(res);
}
