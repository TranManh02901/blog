// NOTE: this key ships in the public JS bundle (and this repo is public on
// GitHub Pages), so it is visible to anyone — fine for a free/low-stakes
// key, but don't reuse a key here that guards anything sensitive.
const GNEWS_API_KEY = 'ffccb006ef048838cbb701b67acebbd5';
export const GNEWS_URL = `https://gnews.io/api/v4/top-headlines?lang=vi&country=vn&apikey=${GNEWS_API_KEY}`;

const CACHE_KEY = 'gnews_articles';

// GNews has no "get article by id" endpoint, so the list page caches the
// last fetched batch here and the detail page reads from it, only
// re-fetching the list itself if the id isn't found (e.g. direct page load).
export function cacheArticles(articles) {
    try {
        window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(articles));
    } catch (err) {
        // storage unavailable (private mode, quota, etc.) — detail page will refetch
    }
}

export function getCachedArticle(id) {
    try {
        const raw = window.sessionStorage.getItem(CACHE_KEY);
        const articles = raw ? JSON.parse(raw) : [];
        return articles.find((a) => String(a.id) === String(id)) || null;
    } catch (err) {
        return null;
    }
}

export function formatDate(iso) {
    return new Date(iso).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
