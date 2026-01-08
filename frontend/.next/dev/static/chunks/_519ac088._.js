(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constants/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navLinks",
    ()=>navLinks
]);
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/volumes",
        label: "Volumes"
    },
    {
        href: "/submit",
        label: "Submit"
    },
    {
        href: "/contact",
        label: "Contact"
    },
    {
        href: "/admin",
        label: "Admin Panel",
        requiresRole: "EDITOR"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "approveDownloadRequest",
    ()=>approveDownloadRequest,
    "checkAuth",
    ()=>checkAuth,
    "createAndPublishArticle",
    ()=>createAndPublishArticle,
    "createIssue",
    ()=>createIssue,
    "createVolume",
    ()=>createVolume,
    "deleteArticle",
    ()=>deleteArticle,
    "deleteIssue",
    ()=>deleteIssue,
    "deleteVolume",
    ()=>deleteVolume,
    "denyDownloadRequest",
    ()=>denyDownloadRequest,
    "downloadArticlePdf",
    ()=>downloadArticlePdf,
    "fetchArticle",
    ()=>fetchArticle,
    "fetchIssue",
    ()=>fetchIssue,
    "forgotPassword",
    ()=>forgotPassword,
    "listDownloadRequests",
    ()=>listDownloadRequests,
    "listPublicVolumes",
    ()=>listPublicVolumes,
    "listPublishedArticles",
    ()=>listPublishedArticles,
    "listSubmittedArticles",
    ()=>listSubmittedArticles,
    "listVolumes",
    ()=>listVolumes,
    "logout",
    ()=>logout,
    "publishArticle",
    ()=>publishArticle,
    "requestDownload",
    ()=>requestDownload,
    "resendOTP",
    ()=>resendOTP,
    "resetPassword",
    ()=>resetPassword,
    "signin",
    ()=>signin,
    "signup",
    ()=>signup,
    "submitArticle",
    ()=>submitArticle,
    "updateArticle",
    ()=>updateArticle,
    "updateIssue",
    ()=>updateIssue,
    "updateVolume",
    ()=>updateVolume,
    "verifyOTP",
    ()=>verifyOTP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/auth") || "http://localhost:8000/api/auth";
const CONTENT_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/content") || "http://localhost:8000/api/content";
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
const getToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem('jwt');
    }
    //TURBOPACK unreachable
    ;
};
// Set token in localStorage
const setToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('jwt', token);
    }
};
// Remove token from localStorage
const removeToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem('jwt');
    }
};
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    withCredentials: true
});
// Add request interceptor to include JWT token in headers
api.interceptors.request.use((config)=>{
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const signin = async (email, password)=>{
    const response = await api.post(`/signin`, {
        email,
        password
    });
    // Extract token from response if available
    if (response.data.token) {
        setToken(response.data.token);
    }
    return response.data.data;
};
const signup = async (email, userName, password)=>{
    const response = await api.post(`/signup`, {
        email,
        userName,
        password
    });
    return response.data;
};
const verifyOTP = async (email, otp)=>{
    const response = await api.post(`/verify-otp`, {
        email,
        otp
    });
    return response.data;
};
const resendOTP = async (email)=>{
    const response = await api.post(`/resend-otp`, {
        email
    });
    return response.data;
};
const forgotPassword = async (email)=>{
    const response = await api.post(`/forgot-password`, {
        email
    });
    return response.data;
};
const resetPassword = async (token, password)=>{
    const response = await api.post(`/reset-password`, {
        token,
        password
    });
    return response.data;
};
const logout = async ()=>{
    try {
        const res = await api.post(`/logout`);
        removeToken(); // Remove token from localStorage
        if (res.status !== 200) {
            throw new Error('Logout failed');
        }
    } catch (error) {
        // Even if logout fails on server, remove token locally
        removeToken();
        throw error;
    }
};
const checkAuth = async ()=>{
    const token = getToken();
    if (!token) {
        throw new Error('No token found');
    }
    const response = await api.get(`/check`);
    return response.data.data;
};
// Content/admin API
const contentApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: CONTENT_URL,
    withCredentials: true,
    maxContentLength: 15 * 1024 * 1024,
    maxBodyLength: 15 * 1024 * 1024,
    timeout: 300000 // 5 minutes timeout for large file uploads
});
// Add request interceptor to include JWT token in headers for content API
contentApi.interceptors.request.use((config)=>{
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // Add headers to prevent caching for admin/content operations
    config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    config.headers['Pragma'] = 'no-cache';
    config.headers['Expires'] = '0';
    return config;
});
const createVolume = async (number)=>{
    const res = await contentApi.post(`/volumes`, {
        number
    });
    return res.data.data;
};
const createIssue = async (volumeId, number, month, year)=>{
    const res = await contentApi.post(`/volumes/${volumeId}/issues`, {
        number,
        month,
        year
    });
    return res.data.data;
};
const listVolumes = async ()=>{
    const res = await contentApi.get(`/volumes`);
    return res.data.data;
};
const updateVolume = async (volumeId, number)=>{
    const res = await contentApi.put(`/volumes/${volumeId}`, {
        number
    });
    return res.data.data;
};
const deleteVolume = async (volumeId)=>{
    const res = await contentApi.delete(`/volumes/${volumeId}`);
    return res.data;
};
const updateIssue = async (issueId, number, month, year)=>{
    const res = await contentApi.put(`/issues/${issueId}`, {
        number,
        month,
        year
    });
    return res.data.data;
};
const deleteIssue = async (issueId)=>{
    const res = await contentApi.delete(`/issues/${issueId}`);
    return res.data;
};
const listPublicVolumes = async ()=>{
    const res = await contentApi.get(`/public/volumes`);
    return res.data.data;
};
const submitArticle = async (payload)=>{
    const res = await contentApi.post(`/articles`, payload);
    return res.data.data;
};
const listSubmittedArticles = async ()=>{
    const res = await contentApi.get(`/articles`);
    return res.data.data;
};
const listPublishedArticles = async ()=>{
    const res = await contentApi.get(`/articles/published`);
    return res.data.data;
};
const publishArticle = async (articleId, issueId)=>{
    const res = await contentApi.post(`/articles/${articleId}/publish`, {
        issueId
    });
    return res.data.data;
};
const updateArticle = async (articleId, data)=>{
    const res = await contentApi.put(`/articles/${articleId}`, data);
    return res.data.data;
};
const deleteArticle = async (articleId)=>{
    const res = await contentApi.delete(`/articles/${articleId}`);
    return res.data;
};
const createAndPublishArticle = async (formData)=>{
    const response = await contentApi.post('/articles/create-publish', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data.data;
};
const fetchIssue = async (issueId)=>{
    const res = await contentApi.get(`/public/issue/${issueId}`);
    return res.data.data;
};
const fetchArticle = async (articleId)=>{
    const res = await contentApi.get(`/public/article/${articleId}`);
    return res.data.data;
};
const requestDownload = async (articleId)=>{
    const res = await contentApi.post(`/articles/${articleId}/request-download`);
    return res.data.data;
};
const listDownloadRequests = async ()=>{
    const res = await contentApi.get(`/download-requests`);
    return res.data.data;
};
const approveDownloadRequest = async (id)=>{
    const res = await contentApi.post(`/download-requests/${id}/approve`);
    return res.data.data;
};
const denyDownloadRequest = async (id)=>{
    const res = await contentApi.post(`/download-requests/${id}/deny`);
    return res.data.data;
};
const downloadArticlePdf = async (articleId)=>{
    // Attempts a gated download; throws on 403/404 etc.
    const res = await contentApi.get(`/articles/${articleId}/download`, {
        responseType: 'blob'
    });
    return res;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/authEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const authEvents = {
    subscribe (eventName, callback) {
        document.addEventListener(eventName, callback);
    },
    unsubscribe (eventName, callback) {
        document.removeEventListener(eventName, callback);
    },
    dispatch (eventName, data) {
        document.dispatchEvent(new CustomEvent(eventName, {
            detail: data
        }));
    }
};
const __TURBOPACK__default__export__ = authEvents;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ui/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/authEvents.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "69dc3f87819c053c9c8d16b3172917f75855ebb6062372afb799ff0bbc054827") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "69dc3f87819c053c9c8d16b3172917f75855ebb6062372afb799ff0bbc054827";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authLoaded, setAuthLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const loadUser = async ()=>{
                ;
                try {
                    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAuth"])();
                    setUser(me);
                } catch (t3) {
                    setUser(null);
                }
                setAuthLoaded(true);
            };
            loadUser();
            const handleLogin = (e)=>{
                setUser(e?.detail || null);
                setAuthLoaded(true);
            };
            const handleLogoutEvent = ()=>{
                setUser(null);
                setAuthLoaded(true);
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].subscribe("loginSuccess", handleLogin);
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].subscribe("logoutSuccess", handleLogoutEvent);
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].unsubscribe("loginSuccess", handleLogin);
                __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].unsubscribe("logoutSuccess", handleLogoutEvent);
            };
        };
        t2 = [];
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== router) {
        t3 = async ()=>{
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
                setUser(null);
                setIsProfileOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$authEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dispatch("logoutSuccess");
                router.push("/");
            } catch (t4) {
                const e_0 = t4;
            }
        };
        $[5] = router;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleLogout = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center hover:opacity-80 transition-opacity relative group",
            "aria-label": "Company Logo - Home",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-white/60 blur-xl rounded-full scale-150 transform -translate-x-2 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 93,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/fei.png",
                    alt: "Frontiers in Engineering and Informatics",
                    className: "h-16 scale-150 pt-1.5 w-auto relative z-10"
                }, void 0, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 93,
                    columnNumber: 263
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== authLoaded || $[9] !== isActive || $[10] !== user) {
        let t6;
        if ($[12] !== authLoaded || $[13] !== user) {
            t6 = (link)=>{
                if (!link.requiresRole) {
                    return true;
                }
                if (!authLoaded) {
                    return false;
                }
                return user && user.role === link.requiresRole;
            };
            $[12] = authLoaded;
            $[13] = user;
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        let t7;
        if ($[15] !== isActive) {
            t7 = (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: link_0.href,
                    className: `px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${isActive(link_0.href) ? "bg-white text-[#083b7a] shadow-sm font-semibold" : "text-white hover:bg-white/10 hover:shadow-sm"}`,
                    "aria-current": isActive(link_0.href) ? "page" : undefined,
                    children: link_0.label
                }, link_0.href, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 119,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            $[15] = isActive;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].filter(t6).map(t7);
        $[8] = authLoaded;
        $[9] = isActive;
        $[10] = user;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex flex-1 justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-1",
                children: t5
            }, void 0, false, {
                fileName: "[project]/ui/Navbar.js",
                lineNumber: 135,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 135,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== authLoaded || $[20] !== handleLogout || $[21] !== isProfileOpen || $[22] !== user) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-2",
            children: !authLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-32 h-8 rounded bg-white/10 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/ui/Navbar.js",
                lineNumber: 143,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0)) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsProfileOpen(!isProfileOpen),
                        className: "flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: user.userName || user.email
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 143,
                                columnNumber: 426
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 9l-7 7-7-7"
                                }, void 0, false, {
                                    fileName: "[project]/ui/Navbar.js",
                                    lineNumber: 143,
                                    columnNumber: 547
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 143,
                                columnNumber: 468
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 143,
                        columnNumber: 178
                    }, ("TURBOPACK compile-time value", void 0)),
                    isProfileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 border border-gray-100 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/profile",
                                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                                onClick: ()=>setIsProfileOpen(false),
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 143,
                                columnNumber: 790
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 143,
                                columnNumber: 933
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 143,
                        columnNumber: 668
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/ui/Navbar.js",
                lineNumber: 143,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/signin",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/60",
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/ui/Navbar.js",
                            lineNumber: 143,
                            columnNumber: 1107
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 143,
                        columnNumber: 1081
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/signup",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] border border-white/0 transition-colors shadow-sm",
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/ui/Navbar.js",
                            lineNumber: 143,
                            columnNumber: 1338
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 143,
                        columnNumber: 1312
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 143,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = authLoaded;
        $[20] = handleLogout;
        $[21] = isProfileOpen;
        $[22] = user;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ()=>setIsOpen(_temp);
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    const t9 = isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16";
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/60",
            "aria-label": "Open main menu",
            onClick: t8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: t9
                }, void 0, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 162,
                    columnNumber: 286
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/ui/Navbar.js",
                lineNumber: 162,
                columnNumber: 207
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10 || $[28] !== t6 || $[29] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between h-16",
            children: [
                t4,
                t6,
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 170,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t10;
        $[28] = t6;
        $[29] = t7;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    if ($[31] !== authLoaded || $[32] !== handleLogout || $[33] !== isActive || $[34] !== isOpen || $[35] !== user) {
        t12 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] border-t border-[#083b7a] px-3 pt-3 pb-4 shadow-md/40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-stretch space-y-1 mb-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].filter((link_1)=>{
                        if (!link_1.requiresRole) {
                            return true;
                        }
                        if (!authLoaded) {
                            return false;
                        }
                        return user && user.role === link_1.requiresRole;
                    }).map((link_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link_2.href,
                            onClick: ()=>setIsOpen(false),
                            className: `block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive(link_2.href) ? "bg-white text-[#083b7a] shadow-sm font-semibold" : "text-white hover:bg-white/10 hover:shadow-sm"}`,
                            "aria-current": isActive(link_2.href) ? "page" : undefined,
                            children: link_2.label
                        }, link_2.href, false, {
                            fileName: "[project]/ui/Navbar.js",
                            lineNumber: 188,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 180,
                    columnNumber: 147
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-2",
                    children: !authLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-48 h-8 rounded bg-white/10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 188,
                        columnNumber: 494
                    }, ("TURBOPACK compile-time value", void 0)) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-sm mb-2",
                                children: [
                                    "Welcome, ",
                                    user.userName || user.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 188,
                                columnNumber: 568
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        onClick: ()=>setIsOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10",
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/ui/Navbar.js",
                                            lineNumber: 188,
                                            columnNumber: 740
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/ui/Navbar.js",
                                        lineNumber: 188,
                                        columnNumber: 685
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleLogout();
                                            setIsOpen(false);
                                        },
                                        className: "px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] shadow-sm",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/ui/Navbar.js",
                                        lineNumber: 188,
                                        columnNumber: 878
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 188,
                                columnNumber: 653
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/signin",
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/ui/Navbar.js",
                                    lineNumber: 191,
                                    columnNumber: 242
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 191,
                                columnNumber: 183
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/signup",
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] shadow-sm",
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "[project]/ui/Navbar.js",
                                    lineNumber: 191,
                                    columnNumber: 439
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/ui/Navbar.js",
                                lineNumber: 191,
                                columnNumber: 380
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/Navbar.js",
                        lineNumber: 191,
                        columnNumber: 151
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/ui/Navbar.js",
                    lineNumber: 188,
                    columnNumber: 425
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 180,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = authLoaded;
        $[32] = handleLogout;
        $[33] = isActive;
        $[34] = isOpen;
        $[35] = user;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t11 || $[38] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] border-b border-[#083b7a] ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full px-4 sm:px-6 lg:px-8",
                children: [
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/ui/Navbar.js",
                lineNumber: 203,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/ui/Navbar.js",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t11;
        $[38] = t12;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    return t13;
};
_s(Navbar, "84FoCYIRdcqwJQov6OwvHYXv3Ro=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
function _temp(open) {
    return !open;
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ui/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const links = [
    {
        href: "/overview",
        label: "Journal Overview"
    },
    {
        href: "/indexing",
        label: "Indexing & Abstracting"
    },
    {
        href: "/editorial-board",
        label: "Editorial Board"
    },
    {
        href: "/instructions",
        label: "Instructions for Authors"
    },
    {
        href: "/apc",
        label: "Article Processing Charge"
    },
    {
        href: "/ethics",
        label: "Publication Ethics"
    },
    {
        href: "/contact",
        label: "Contact Information"
    },
    {
        href: "/special-issues",
        label: "Open Special Issues"
    },
    {
        href: "/privacy-policy",
        label: "Privacy Policy"
    },
    {
        href: "/terms",
        label: "Terms and Conditions"
    },
    {
        href: "/refunds",
        label: "Cancellations & Refunds"
    }
];
const Sidebar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "ab3cc22a97ab49d49fdeaf6ff72ddb093f64d4d4b15a5aa0f0e65b11c9e309b3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ab3cc22a97ab49d49fdeaf6ff72ddb093f64d4d4b15a5aa0f0e65b11c9e309b3";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== pathname) {
        t0 = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    if ($[3] !== isCollapsed) {
        t1 = ()=>setIsCollapsed(!isCollapsed);
        $[3] = isCollapsed;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const t2 = `fixed top-20 z-50 w-10 h-10 rounded-full bg-[#083b7a] text-white flex items-center justify-center shadow-lg hover:bg-[#0a4ea3] transition-all duration-300 ${isCollapsed ? "left-2" : "left-[17rem]"}`;
    const t3 = isCollapsed ? "Expand sidebar" : "Collapse sidebar";
    let t4;
    if ($[5] !== isCollapsed) {
        t4 = isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 73,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 73,
            columnNumber: 63
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = isCollapsed;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: t2,
            "aria-label": t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const t6 = `shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-[#083b7a]/20 bg-white transition-all duration-300 ease-in-out ${isCollapsed ? "w-0 border-0" : "w-72"}`;
    const t7 = `p-4 transition-opacity duration-300 ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] text-white font-semibold",
            children: "Journal Navigation"
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== isActive) {
        t9 = links.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href) ? "bg-[#e6f0ff] text-[#083b7a] border border-[#0a4ea3]/30" : "text-[#083b7a] hover:bg-[#e6f0ff]"}`,
                children: item.label
            }, item.href, false, {
                fileName: "[project]/ui/Sidebar.js",
                lineNumber: 101,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)));
        $[13] = isActive;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "space-y-1",
            children: t9
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 117,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
        $[18] = t7;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t6,
            children: t11
        }, void 0, false, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t11;
        $[21] = t6;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block relative",
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/ui/Sidebar.js",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t12;
        $[24] = t5;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    return t13;
};
_s(Sidebar, "UcWkLXTbdBOZNTGAQRDdfpMLVOc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Providers({ children }) {
    _s();
    // Use useRef to ensure QueryClient is only created once per client session
    const queryClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!queryClientRef.current) {
        queryClientRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    // Data is considered stale immediately
                    staleTime: 0,
                    // Data stays in cache for 10 minutes after becoming unused
                    gcTime: 10 * 60 * 1000,
                    // Retry failed requests twice
                    retry: 2,
                    // Refetch on window focus for better consistency
                    refetchOnWindowFocus: true,
                    // Refetch on mount to ensure data is fresh
                    refetchOnMount: true,
                    // Refetch on reconnect for better consistency
                    refetchOnReconnect: true
                }
            }
        });
    // Log when QueryClient is created (only in development)
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClientRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers.js",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(Providers, "iItkkGw1Z2ULl97LUo0SCMOt9IM=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_519ac088._.js.map