(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/sanitize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeArticle",
    ()=>sanitizeArticle,
    "sanitizeAuthor",
    ()=>sanitizeAuthor,
    "sanitizeDoi",
    ()=>sanitizeDoi,
    "sanitizeEmail",
    ()=>sanitizeEmail,
    "sanitizeHtml",
    ()=>sanitizeHtml,
    "sanitizeKeywords",
    ()=>sanitizeKeywords,
    "sanitizeText",
    ()=>sanitizeText,
    "sanitizeUrl",
    ()=>sanitizeUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/browser.js [app-client] (ecmascript)");
;
function sanitizeHtml(html) {
    if (!html || typeof html !== 'string') return '';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(html, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
        KEEP_CONTENT: true
    });
}
function sanitizeText(text) {
    if (!text || typeof text !== 'string') return '';
    // Use DOMPurify to escape HTML entities
    const div = typeof document !== 'undefined' ? document.createElement('div') : {
        textContent: ''
    };
    if (typeof document !== 'undefined') {
        div.textContent = text;
        return div.innerHTML;
    }
    // Server-side fallback: manually escape HTML entities
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
}
function sanitizeEmail(email) {
    if (!email || typeof email !== 'string') return '';
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitized = sanitizeText(email);
    // Only return if it matches email format and doesn't contain dangerous characters
    if (emailRegex.test(sanitized) && !/[<>"']/.test(email)) {
        return sanitized;
    }
    return '';
}
function sanitizeUrl(url) {
    if (!url || typeof url !== 'string') return '';
    // Remove dangerous protocols
    const dangerousProtocols = [
        'javascript:',
        'data:',
        'vbscript:',
        'file:'
    ];
    const lowerUrl = url.toLowerCase().trim();
    for (const protocol of dangerousProtocols){
        if (lowerUrl.startsWith(protocol)) {
            return '';
        }
    }
    // Only allow http, https, mailto, and relative URLs
    if (!/^(https?:\/\/|mailto:|#|\/)/.test(lowerUrl) && !lowerUrl.startsWith('/')) {
        // Allow relative paths
        if (!lowerUrl.startsWith('.')) {
            return '';
        }
    }
    return sanitizeText(url);
}
function sanitizeDoi(doi) {
    if (!doi || typeof doi !== 'string') return '';
    // DOI format: 10.xxxx/xxxxx (alphanumeric, dots, slashes, hyphens, underscores)
    const doiRegex = /^10\.\d{4,}\/[\w\.\-]+$/;
    const sanitized = sanitizeText(doi);
    if (doiRegex.test(sanitized)) {
        return sanitized;
    }
    // If it doesn't match strict format, still sanitize but return
    return sanitized.replace(/[<>"']/g, '');
}
function sanitizeKeywords(keywords) {
    if (!keywords || typeof keywords !== 'string') return [];
    return keywords.split(',').map((kw)=>sanitizeText(kw.trim())).filter((kw)=>kw.length > 0);
}
function sanitizeAuthor(author) {
    if (!author || typeof author !== 'object') return null;
    return {
        name: sanitizeText(author.name || ''),
        email: sanitizeEmail(author.email || ''),
        affiliation: sanitizeText(author.affiliation || ''),
        superscript: sanitizeText(author.superscript || '')
    };
}
function sanitizeArticle(article) {
    if (!article || typeof article !== 'object') return null;
    const sanitized = {
        ...article,
        title: sanitizeText(article.title || ''),
        abstract: sanitizeText(article.abstract || ''),
        keywords: article.keywords ? sanitizeText(article.keywords) : '',
        doi: article.doi ? sanitizeDoi(article.doi) : '',
        conflictOfInterest: sanitizeText(article.conflictOfInterest || ''),
        fundingInfo: sanitizeText(article.fundingInfo || ''),
        dataAvailability: sanitizeText(article.dataAvailability || '')
    };
    // Sanitize authors if present
    if (article.authorsJson) {
        try {
            const authors = typeof article.authorsJson === 'string' ? JSON.parse(article.authorsJson) : article.authorsJson;
            if (Array.isArray(authors)) {
                sanitized.authorsJson = authors.map(sanitizeAuthor).filter((a)=>a !== null);
            }
        } catch (e) {
            sanitized.authorsJson = [];
        }
    }
    return sanitized;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useAuth = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "30c64ce181e302c7c5ab5013d99fa69ba7073c11e721bf1a809017c4f4494aad") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30c64ce181e302c7c5ab5013d99fa69ba7073c11e721bf1a809017c4f4494aad";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "auth",
                "user"
            ],
            queryFn: _temp,
            retry: false,
            staleTime: 300000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
};
_s(useAuth, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("\uD83D\uDD04 Checking authentication...");
    }
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAuth"])();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("\u2705 Auth check complete:", data?.email || "No user");
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/article/[...slug]/ArticleContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/sanitize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ArticleContent({ article, initialTab }) {
    _s();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab || 'abstract');
    const [citationStyles, setCitationStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        apa: '',
        vancouver: '',
        bibtex: ''
    });
    const [activeStyle, setActiveStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('apa');
    const [loadingCitation, setLoadingCitation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCitation, setShowCitation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const authorsRaw = typeof article.authorsJson === 'string' ? JSON.parse(article.authorsJson) : article.authorsJson;
    // Sanitize all authors
    const authors = Array.isArray(authorsRaw) ? authorsRaw.map(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeAuthor"]).filter((a)=>a !== null) : [];
    const handleDownload = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadArticlePdf"])(article.id);
            const blobUrl = window.URL.createObjectURL(res.data);
            const a_0 = document.createElement('a');
            a_0.href = blobUrl;
            const safeTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(article.title || 'article').substring(0, 30).replace(/[<>:"/\\|?*]/g, '');
            a_0.download = `${safeTitle}.pdf`;
            a_0.click();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            // Check auth state to see if they have global access (this should have succeeded if so)
            // But if it failed (403), show modal
            setShowModal(true);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleContent.useEffect": ()=>{
            if (tab === 'cite' && !citationStyles.apa) {
                generateCitations();
            }
        }
    }["ArticleContent.useEffect"], [
        tab,
        citationStyles.apa
    ]);
    const generateCitations = async ()=>{
        setLoadingCitation(true);
        try {
            // Dynamically import citation-js only when needed
            const { default: Cite } = await __turbopack_context__.A("[project]/node_modules/citation-js/index.js [app-client] (ecmascript, async loader)");
            const authorsList = authors || [];
            const cslAuthors = authorsList.map((a_1)=>({
                    literal: a_1.name.trim()
                }));
            const date = article.publishedAt ? new Date(article.publishedAt) : new Date();
            const data = [
                {
                    id: article.id,
                    type: 'article-journal',
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(article.title || ''),
                    author: cslAuthors,
                    issued: {
                        'date-parts': [
                            [
                                date.getFullYear(),
                                date.getMonth() + 1,
                                date.getDate()
                            ]
                        ]
                    },
                    'container-title': 'Frontiers in Engineering and Informatics',
                    volume: article.volume?.number,
                    issue: article.issue?.number,
                    page: article.startPage && article.endPage ? `${article.startPage}-${article.endPage}` : undefined,
                    DOI: article.doi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeDoi"])(article.doi) : undefined,
                    ISSN: '3049-3412',
                    publisher: 'Crinfo Global Publishers'
                }
            ];
            const cite = new Cite(data);
            setCitationStyles({
                apa: cite.format('bibliography', {
                    template: 'apa',
                    lang: 'en-US'
                }),
                vancouver: cite.format('bibliography', {
                    template: 'vancouver',
                    lang: 'en-US'
                }),
                bibtex: cite.format('bibtex')
            });
        } catch (err_0) {
            console.error('Citation generation error:', err_0);
        } finally{
            setLoadingCitation(false);
        }
    };
    const copyToClipboard = (text, e)=>{
        const btn = e.currentTarget;
        const originalText = btn.textContent;
        navigator.clipboard.writeText(text).then(()=>{
            btn.textContent = 'Copied!';
            btn.classList.add('bg-green-600');
            setTimeout(()=>{
                btn.textContent = originalText;
                btn.classList.remove('bg-green-600');
            }, 2000);
        });
    };
    const { data: user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 animate-in fade-in duration-300",
                children: [
                    authors && Array.isArray(authors) && authors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 border-b pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: authors.map((author, i)=>{
                                const safeEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeEmail"])(author.email);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg text-[#083b7a]",
                                            children: author.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 116,
                                            columnNumber: 41
                                        }, this),
                                        author.affiliation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 text-sm italic",
                                            children: author.affiliation
                                        }, void 0, false, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 117,
                                            columnNumber: 64
                                        }, this),
                                        safeEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-3 h-3 text-gray-500",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                        lineNumber: 120,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                    lineNumber: 119,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${safeEmail}`,
                                                    className: "text-blue-600 text-sm hover:underline",
                                                    children: safeEmail
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                    lineNumber: 122,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 118,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                    lineNumber: 115,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 111,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4",
                        children: "Abstract"
                    }, void 0, false, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800 leading-relaxed whitespace-pre-wrap text-lg",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(article.abstract || '')
                    }, void 0, false, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this),
                    article.keywords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-6 border-t",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide",
                                children: "Keywords"
                            }, void 0, false, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeKeywords"])(article.keywords).map((kw, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100",
                                        children: kw
                                    }, i_0, false, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 136,
                                        columnNumber: 82
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 133,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-6 border-t flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-gray-50 p-6 rounded-xl border border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: article.doi && (()=>{
                                    const safeDoi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeDoi"])(article.doi);
                                    return safeDoi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `https://www.doi.org/${safeDoi}`,
                                        className: "inline-flex flex-col bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 hover:bg-orange-100 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-orange-800 uppercase tracking-wider mb-0.5",
                                                children: "DOI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-mono text-orange-900 break-all select-all font-medium",
                                                children: [
                                                    "www.doi.org/",
                                                    safeDoi
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                lineNumber: 148,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 146,
                                        columnNumber: 30
                                    }, this) : null;
                                })()
                            }, void 0, false, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `px-5 py-2.5 rounded-lg border transition-all font-medium flex items-center gap-2 ${showCitation ? 'bg-gray-200 border-gray-300 text-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                        onClick: ()=>{
                                            setShowCitation(!showCitation);
                                            if (!citationStyles.apa && !showCitation) generateCitations();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                    lineNumber: 157,
                                                    columnNumber: 108
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this),
                                            "Cite"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    article.pdfPath && (()=>{
                                        const safeDoi_0 = article.doi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeDoi"])(article.doi) : null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: safeDoi_0 ? `/article_repo/${safeDoi_0}.pdf` : '#',
                                            target: safeDoi_0 ? "_blank" : undefined,
                                            rel: safeDoi_0 ? "noopener noreferrer" : undefined,
                                            className: "px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium flex items-center gap-2 shadow-sm",
                                            onClick: !safeDoi_0 ? handleDownload : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                        lineNumber: 163,
                                                        columnNumber: 102
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this),
                                                safeDoi_0 ? 'View PDF' : 'Download PDF'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 162,
                                            columnNumber: 20
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    showCitation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 animate-in slide-in-from-top-4 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Cite this article"
                                    }, void 0, false, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex bg-gray-100 p-1 rounded-lg text-xs font-medium",
                                        children: [
                                            'apa',
                                            'vancouver',
                                            'bibtex'
                                        ].map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveStyle(style),
                                                className: `px-3 py-1 rounded-md transition-all ${activeStyle === style ? 'bg-white shadow-sm text-[#083b7a]' : 'text-gray-500 hover:text-gray-700'}`,
                                                children: style.toUpperCase()
                                            }, style, false, {
                                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                lineNumber: 174,
                                                columnNumber: 78
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 171,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-xl p-6 bg-gray-50/50 space-y-4",
                                children: loadingCitation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center py-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#083b7a]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                        lineNumber: 182,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                    lineNumber: 181,
                                    columnNumber: 48
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-800 leading-relaxed citation-content font-serif",
                                            children: citationStyles[activeStyle] || 'Generating citation...'
                                        }, void 0, false, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 184,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full md:w-auto px-6 py-2.5 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all text-sm font-semibold active:scale-95 flex items-center justify-center gap-2",
                                            onClick: (e_0)=>copyToClipboard(citationStyles[activeStyle], e_0),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                        lineNumber: 190,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                                    lineNumber: 189,
                                                    columnNumber: 41
                                                }, this),
                                                "Copy ",
                                                activeStyle.toUpperCase(),
                                                " Citation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                            lineNumber: 188,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 180,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                        lineNumber: 170,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-blue-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                    lineNumber: 203,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                lineNumber: 202,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                            lineNumber: 201,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-2",
                            children: "Request Full Access"
                        }, void 0, false, {
                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: user?.hasFullAccess ? "You have full access to all articles. Click download to get the PDF." : user?.hasPendingRequest ? "You have a pending request for full access. You will be notified via email once an admin approves it." : "Access restricted. Request full access once to download this and all other PDFs."
                        }, void 0, false, {
                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                            lineNumber: 207,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium",
                                    onClick: ()=>setShowModal(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, this),
                                !user?.hasFullAccess && !user?.hasPendingRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-6 py-2 rounded-xl bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-all font-semibold shadow-lg shadow-blue-200",
                                    onClick: async ()=>{
                                        try {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestDownload"])(article.id);
                                        } catch  {}
                                        setShowModal(false);
                                    },
                                    children: "Request Full Access"
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                                    lineNumber: 214,
                                    columnNumber: 82
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                            lineNumber: 210,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                    lineNumber: 200,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/article/[...slug]/ArticleContent.js",
                lineNumber: 199,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true);
}
_s(ArticleContent, "qawqGiE5fcj3lQ9SANWNJ66Y2Vk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ArticleContent;
var _c;
__turbopack_context__.k.register(_c, "ArticleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a5d79388._.js.map