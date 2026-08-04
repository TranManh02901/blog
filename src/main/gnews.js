// NOTE: this key ships in the public JS bundle (and this repo is public on
// GitHub Pages), so it is visible to anyone — fine for a free/low-stakes
// key, but don't reuse a key here that guards anything sensitive.
const GNEWS_API_KEY = 'ffccb006ef048838cbb701b67acebbd5';
export const GNEWS_URL = `https://gnews.io/api/v4/top-headlines?lang=vi&country=vn&apikey=${GNEWS_API_KEY}`;

// GNews's free plan has a tight rate limit, and this key is shared by every
// visitor's browser (it's public in the bundle) — so a handful of page
// views close together is enough to get a 429. Caching the result in
// localStorage for a while means most visits are served from cache instead
// of hitting GNews at all, and it also doubles as the lookup the detail
// page uses since GNews has no "get article by id" endpoint.
const CACHE_KEY = 'gnews_articles_cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function readCache() {
    try {
        const raw = window.localStorage.getItem(CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        return null;
    }
}

function writeCache(articles) {
    try {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), articles }));
    } catch (err) {
        // storage unavailable (private mode, quota, etc.) — safe to skip caching
    }
}

export async function fetchArticles({ forceRefresh = false } = {}) {
    const cached = readCache();
    if (!forceRefresh && cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
        return cached.articles;
    }

    // GNews appears to only send CORS headers on successful responses —
    // when it's rate-limited (429) it can omit them entirely, which makes
    // the browser reject the request outright (fetch() rejects before a
    // response is even readable, showing up as a CORS error in devtools
    // even though the real cause is the rate limit). So *any* failure here
    // — rejected fetch, non-ok status, or a malformed body — falls back to
    // whatever was cached before, rather than only handling non-ok responses.
    try {
        const res = await fetch(GNEWS_URL);
        const data = await res.json();

        if (!res.ok || !Array.isArray(data.articles)) {
            throw new Error(data.errors?.[0] || `GNews request failed (${res.status})`);
        }

        writeCache(data.articles);
        return data.articles;
    } catch (err) {
        if (cached) return cached.articles;
        throw err;
    }
}

export function getCachedArticle(id) {
    const cached = readCache();
    if (!cached) return null;
    return cached.articles.find((a) => String(a.id) === String(id)) || null;
}

export function formatDate(iso) {
    return new Date(iso).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
