module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/utils/serverApi.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPublishedArticles",
    ()=>getAllPublishedArticles,
    "getArticle",
    ()=>getArticle,
    "getIssue",
    ()=>getIssue,
    "getLatestArticles",
    ()=>getLatestArticles,
    "getPublicVolumes",
    ()=>getPublicVolumes,
    "getPublishedArticles",
    ()=>getPublishedArticles
]);
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
const API_BASE = `${BASE_URL}/api`;
async function getPublicVolumes() {
    console.log('Fetching volumes from:', `${API_BASE}/content/public/volumes`);
    const res = await fetch(`${API_BASE}/content/public/volumes`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch volumes");
    const data = await res.json();
    return data.data;
}
async function getIssue(issueId) {
    const res = await fetch(`${API_BASE}/content/public/issue/${issueId}`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch issue");
    const data = await res.json();
    return data.data;
}
async function getArticle(articleId) {
    const res = await fetch(`${API_BASE}/content/public/article/${encodeURIComponent(articleId)}`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch article");
    const data = await res.json();
    return data.data;
}
async function getPublishedArticles() {
    const res = await fetch(`${API_BASE}/content/articles/published`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch articles");
    const data = await res.json();
    return data.data;
}
async function getLatestArticles() {
    const res = await fetch(`${API_BASE}/content/public/articles/latest`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch latest articles");
    const data = await res.json();
    return data.data;
}
async function getAllPublishedArticles() {
    const res = await fetch(`${API_BASE}/content/public/articles/all`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error("Failed to fetch all published articles");
    const data = await res.json();
    return data.data;
}
}),
"[project]/app/sitemap.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$serverApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/serverApi.js [app-route] (ecmascript)");
;
const dynamic = 'force-dynamic';
async function sitemap() {
    const baseUrl = 'https://fei.crinfoglobal.com';
    // Static routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/volumes`,
            lastModified: new Date()
        }
    ];
    try {
        // 1. Fetch Volumes & Issues
        const volumes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$serverApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPublicVolumes"])();
        const issueUrls = [];
        if (Array.isArray(volumes)) {
            volumes.forEach((vol)=>{
                if (vol.issues && Array.isArray(vol.issues)) {
                    vol.issues.forEach((issue)=>{
                        issueUrls.push({
                            url: `${baseUrl}/issue/${issue.id}`,
                            lastModified: new Date(issue.updatedAt || new Date())
                        });
                    });
                }
            });
        }
        // 2. Fetch Articles
        // The user example shows article URLs using DOI: /article/10.63949/crinfo.v1i1.001
        const articles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$serverApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllPublishedArticles"])();
        const articleUrls = [];
        if (Array.isArray(articles)) {
            articles.forEach((article)=>{
                if (article.doi) {
                    articleUrls.push({
                        url: `${baseUrl}/article/${article.doi}`,
                        lastModified: new Date(article.updatedAt || new Date())
                    });
                } else if (article.id) {
                // Fallback to ID if no DOI, though the user requested DOI style.
                // However based on user sample, only DOI ones are shown.
                // I will verify if I should include ID based URLs. 
                // The user example ONLY shows DOI. I'll prioritize DOI.
                }
            });
        }
        return [
            ...routes,
            ...issueUrls,
            ...articleUrls
        ];
    } catch (error) {
        console.error('Sitemap generation failed:', error);
        return routes;
    }
}
}),
"[project]/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.js"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "dynamic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamic"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f97abc4c._.js.map