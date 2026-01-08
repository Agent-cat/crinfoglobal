(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/hooks/useVolumes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVolumes",
    ()=>useVolumes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useVolumes = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "cab3a53d2a05631d291efeafe7e010d695b1f6b3df6206b60b2b9b63db2c57a3") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cab3a53d2a05631d291efeafe7e010d695b1f6b3df6206b60b2b9b63db2c57a3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "volumes"
            ],
            queryFn: _temp,
            staleTime: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
};
_s(useVolumes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listVolumes"])();
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useArticles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateAndPublishArticle",
    ()=>useCreateAndPublishArticle,
    "useDeleteArticle",
    ()=>useDeleteArticle,
    "usePublishArticle",
    ()=>usePublishArticle,
    "usePublishedArticles",
    ()=>usePublishedArticles,
    "useSubmittedArticles",
    ()=>useSubmittedArticles,
    "useUpdateArticle",
    ()=>useUpdateArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
const useSubmittedArticles = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "articles",
                "submitted"
            ],
            queryFn: _temp,
            staleTime: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
};
_s(useSubmittedArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const usePublishedArticles = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "articles",
                "published"
            ],
            queryFn: _temp2,
            staleTime: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
};
_s1(usePublishedArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const usePublishArticle = ()=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp3,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "submitted"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "published"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s2(usePublishArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useCreateAndPublishArticle = ()=>{
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp4,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "published"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s3(useCreateAndPublishArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useUpdateArticle = ()=>{
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp5,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "published"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "submitted"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s4(useUpdateArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useDeleteArticle = ()=>{
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "865c2fd2bcc0f006724ee3b1a2e202678f3442b37c81acd9c4461e1cf884a9d1";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp6,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "published"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "articles",
                        "submitted"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s5(useDeleteArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
async function _temp() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listSubmittedArticles"])();
    return data;
}
async function _temp2() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPublishedArticles"])();
    return data;
}
function _temp3(t0) {
    const { articleId, issueId } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishArticle"])(articleId, issueId);
}
function _temp4(formData) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAndPublishArticle"])(formData);
}
function _temp5(t0) {
    const { articleId, data } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateArticle"])(articleId, data);
}
function _temp6(articleId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteArticle"])(articleId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDownloadRequests.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApproveDownloadRequest",
    ()=>useApproveDownloadRequest,
    "useDenyDownloadRequest",
    ()=>useDenyDownloadRequest,
    "useDownloadRequests",
    ()=>useDownloadRequests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
const useDownloadRequests = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "downloadRequests"
            ],
            queryFn: _temp,
            staleTime: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
};
_s(useDownloadRequests, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useApproveDownloadRequest = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp2,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "downloadRequests"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s1(useApproveDownloadRequest, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useDenyDownloadRequest = ()=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65cb3e5e4fa4909b1ef85a4b09ac2b4cb3060512c5165c72140113db27dafe3d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp3,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "downloadRequests"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
};
_s2(useDenyDownloadRequest, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
async function _temp() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listDownloadRequests"])();
    return data;
}
function _temp2(requestId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["approveDownloadRequest"])(requestId);
}
function _temp3(requestId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denyDownloadRequest"])(requestId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/admin/publish/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVolumes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useArticles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDownloadRequests.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/sanitize.js [app-client] (ecmascript)");
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
;
;
const PublishArticlesPage = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(155);
    if ($[0] !== "2861fc59483c1466ccbc912371ebe393dd6433f8cd9c0d6f17b611ebe18546a2") {
        for(let $i = 0; $i < 155; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2861fc59483c1466ccbc912371ebe393dd6433f8cd9c0d6f17b611ebe18546a2";
    }
    const { data: user, isLoading: authLoading, error: authError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { data: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVolumes"])();
    const volumes = t0 === undefined ? [] : t0;
    const { data: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmittedArticles"])();
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const submittedArticles = t2;
    const { data: t3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishedArticles"])();
    let t4;
    if ($[3] !== t3) {
        t4 = t3 === undefined ? [] : t3;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const publishedArticles = t4;
    const { data: t5 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDownloadRequests"])();
    let t6;
    if ($[5] !== t5) {
        t6 = t5 === undefined ? [] : t5;
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const downloadRequests = t6;
    const createAndPublishMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAndPublishArticle"])();
    const [expandedArticleId, setExpandedArticleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {};
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t7);
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            title: "",
            abstract: "",
            keywords: "",
            pages: "",
            doi: "",
            issueId: "",
            file: null,
            scriptFile: null,
            authors: [
                {
                    name: "",
                    email: "",
                    affiliation: "",
                    superscript: ""
                }
            ]
        };
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const [publishForm, setPublishForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t8);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const publishArticleMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishArticle"])();
    let t9;
    if ($[9] !== publishArticleMutation) {
        t9 = async (articleId, issueId)=>{
            if (!issueId) {
                alert("Please select an issue first");
                return;
            }
            ;
            try {
                await publishArticleMutation.mutateAsync({
                    articleId,
                    issueId
                });
                alert("Article published successfully!");
            } catch (t10) {
                const error = t10;
                console.error("Failed to publish article:", error);
                alert("Failed to publish article. Please try again.");
            }
        };
        $[9] = publishArticleMutation;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const handlePublish = t9;
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ()=>{
            setPublishForm(_temp);
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const addAuthor = t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = (index)=>{
            setPublishForm((prev_0)=>({
                    ...prev_0,
                    authors: prev_0.authors.filter((_, i)=>i !== index)
                }));
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const removeAuthor = t11;
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = (index_0, field, value)=>{
            setPublishForm((prev_1)=>({
                    ...prev_1,
                    authors: prev_1.authors.map((author, i_0)=>i_0 === index_0 ? {
                            ...author,
                            [field]: value
                        } : author)
                }));
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const updateAuthor = t12;
    let t13;
    if ($[14] !== createAndPublishMutation || $[15] !== publishForm.abstract || $[16] !== publishForm.authors || $[17] !== publishForm.doi || $[18] !== publishForm.file || $[19] !== publishForm.issueId || $[20] !== publishForm.keywords || $[21] !== publishForm.pages || $[22] !== publishForm.scriptFile || $[23] !== publishForm.title) {
        t13 = async (e)=>{
            e.preventDefault();
            if (!publishForm.title || !publishForm.abstract || !publishForm.issueId) {
                setSubmitMessage("Please fill in all required fields (Title, Abstract, and Issue)");
                return;
            }
            if (!publishForm.authors.some(_temp2)) {
                setSubmitMessage("Please add at least one author with name and email");
                return;
            }
            setSubmitMessage("");
            ;
            try {
                const formData = new FormData();
                formData.append("title", publishForm.title);
                formData.append("abstract", publishForm.abstract);
                formData.append("keywords", publishForm.keywords);
                formData.append("pages", publishForm.pages);
                formData.append("doi", publishForm.doi);
                formData.append("issueId", publishForm.issueId);
                formData.append("authors", JSON.stringify(publishForm.authors));
                if (publishForm.file) {
                    formData.append("file", publishForm.file);
                }
                if (publishForm.scriptFile) {
                    formData.append("script", publishForm.scriptFile);
                }
                await createAndPublishMutation.mutateAsync(formData);
                setSubmitMessage("Article published successfully!");
                setPublishForm({
                    title: "",
                    abstract: "",
                    keywords: "",
                    pages: "",
                    doi: "",
                    issueId: "",
                    file: null,
                    scriptFile: null,
                    authors: [
                        {
                            name: "",
                            email: "",
                            affiliation: "",
                            superscript: ""
                        }
                    ]
                });
            } catch (t14) {
                const error_0 = t14;
                console.error("Failed to publish article:", error_0);
                setSubmitMessage(error_0.response?.data?.message || "Failed to publish article. Please try again.");
            }
        };
        $[14] = createAndPublishMutation;
        $[15] = publishForm.abstract;
        $[16] = publishForm.authors;
        $[17] = publishForm.doi;
        $[18] = publishForm.file;
        $[19] = publishForm.issueId;
        $[20] = publishForm.keywords;
        $[21] = publishForm.pages;
        $[22] = publishForm.scriptFile;
        $[23] = publishForm.title;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    const handlePublishArticle = t13;
    if (authLoading) {
        let t14;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-40 bg-gray-200 animate-pulse rounded mb-6"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 237,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 237,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 237,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[25] = t14;
        } else {
            t14 = $[25];
        }
        return t14;
    }
    if (authError || !user) {
        let t14;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: "Please sign in."
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 247,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 247,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        return t14;
    }
    if (user.role !== "EDITOR") {
        let t14;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: "Forbidden. Editor access required."
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 257,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 257,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[27] = t14;
        } else {
            t14 = $[27];
        }
        return t14;
    }
    const t14 = "min-h-screen w-full text-black bg-white mt-16 py-8 px-5";
    const t15 = "max-w-7xl mx-auto";
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl md:text-3xl font-bold",
            children: "Publish Articles"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        className: "px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors",
                        children: "← Back to Admin"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 275,
                        columnNumber: 100
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 275,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    const t18 = "bg-gray-50 rounded-lg p-4 md:p-6";
    let t19;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: "Publish New Article"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== submitMessage) {
        t20 = submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mb-4 p-3 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`,
            children: submitMessage
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 290,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = submitMessage;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    const t21 = "bg-white rounded-lg p-6 shadow-sm";
    const t22 = "grid md:grid-cols-2 gap-6";
    let t23;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: [
                "Upload Article ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 300,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            accept: ".pdf",
            className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            onChange: (e_0)=>setPublishForm((prev_2)=>({
                        ...prev_2,
                        file: e_0.target.files[0]
                    }))
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    const t25 = publishForm.file ? publishForm.file.name : "No file chosen";
    let t26;
    if ($[35] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-1",
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 318,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 318,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t25;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Upload Script File (Optional)"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 326,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            onChange: (e_1)=>setPublishForm((prev_3)=>({
                        ...prev_3,
                        scriptFile: e_1.target.files[0]
                    }))
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 333,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    const t29 = publishForm.scriptFile ? publishForm.scriptFile.name : "Upload any scripts or code files related to the research";
    let t30;
    if ($[39] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-1",
                    children: t29
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 344,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 344,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t29;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: [
                "Title ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 352,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 352,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t31;
    } else {
        t31 = $[41];
    }
    let t32;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = (e_2)=>setPublishForm((prev_4)=>({
                    ...prev_4,
                    title: e_2.target.value
                }));
        $[42] = t32;
    } else {
        t32 = $[42];
    }
    let t33;
    if ($[43] !== publishForm.title) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                    value: publishForm.title,
                    onChange: t32,
                    placeholder: "Article title",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 369,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 369,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = publishForm.title;
        $[44] = t33;
    } else {
        t33 = $[44];
    }
    let t34;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: [
                "Abstract ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 377,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t34;
    } else {
        t34 = $[45];
    }
    let t35;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = (e_3)=>setPublishForm((prev_5)=>({
                    ...prev_5,
                    abstract: e_3.target.value
                }));
        $[46] = t35;
    } else {
        t35 = $[46];
    }
    let t36;
    if ($[47] !== publishForm.abstract) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a] h-24",
                    value: publishForm.abstract,
                    onChange: t35,
                    placeholder: "Article abstract",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 394,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 394,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = publishForm.abstract;
        $[48] = t36;
    } else {
        t36 = $[48];
    }
    let t37;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Keywords"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 402,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t37;
    } else {
        t37 = $[49];
    }
    let t38;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = (e_4)=>setPublishForm((prev_6)=>({
                    ...prev_6,
                    keywords: e_4.target.value
                }));
        $[50] = t38;
    } else {
        t38 = $[50];
    }
    let t39;
    if ($[51] !== publishForm.keywords) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                    value: publishForm.keywords,
                    onChange: t38,
                    placeholder: "Keywords (comma separated)"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 419,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 419,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = publishForm.keywords;
        $[52] = t39;
    } else {
        t39 = $[52];
    }
    let t40;
    if ($[53] !== t26 || $[54] !== t30 || $[55] !== t33 || $[56] !== t36 || $[57] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t26,
                t30,
                t33,
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 427,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t26;
        $[54] = t30;
        $[55] = t33;
        $[56] = t36;
        $[57] = t39;
        $[58] = t40;
    } else {
        t40 = $[58];
    }
    const t41 = "space-y-4";
    let t42;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Pages"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 440,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t42;
    } else {
        t42 = $[59];
    }
    let t43;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = (e_5)=>setPublishForm((prev_7)=>({
                    ...prev_7,
                    pages: e_5.target.value
                }));
        $[60] = t43;
    } else {
        t43 = $[60];
    }
    let t44;
    if ($[61] !== publishForm.pages) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                    value: publishForm.pages,
                    onChange: t43,
                    placeholder: "e.g., 1-15"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 457,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = publishForm.pages;
        $[62] = t44;
    } else {
        t44 = $[62];
    }
    let t45;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "DOI"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t45;
    } else {
        t45 = $[63];
    }
    let t46;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = (e_6)=>setPublishForm((prev_8)=>({
                    ...prev_8,
                    doi: e_6.target.value
                }));
        $[64] = t46;
    } else {
        t46 = $[64];
    }
    let t47;
    if ($[65] !== publishForm.doi) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                    value: publishForm.doi,
                    onChange: t46,
                    placeholder: "DOI"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 482,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 482,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = publishForm.doi;
        $[66] = t47;
    } else {
        t47 = $[66];
    }
    let t48;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: [
                "Select Issue ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 490,
                    columnNumber: 88
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 490,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t48;
    } else {
        t48 = $[67];
    }
    const t49 = "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]";
    const t50 = publishForm.issueId;
    let t51;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = (e_7)=>setPublishForm((prev_9)=>({
                    ...prev_9,
                    issueId: e_7.target.value
                }));
        $[68] = t51;
    } else {
        t51 = $[68];
    }
    const t52 = true;
    let t53;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select Issue"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 510,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t53;
    } else {
        t53 = $[69];
    }
    const t54 = volumes.flatMap(_temp3).map(_temp4);
    let t55;
    if ($[70] !== publishForm.issueId || $[71] !== t51 || $[72] !== t53 || $[73] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: t49,
            value: t50,
            onChange: t51,
            required: t52,
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 518,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = publishForm.issueId;
        $[71] = t51;
        $[72] = t53;
        $[73] = t54;
        $[74] = t55;
    } else {
        t55 = $[74];
    }
    let t56;
    if ($[75] !== t48 || $[76] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t48,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 529,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t48;
        $[76] = t55;
        $[77] = t56;
    } else {
        t56 = $[77];
    }
    let t57;
    if ($[78] !== t44 || $[79] !== t47 || $[80] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t41,
            children: [
                t44,
                t47,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 538,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t44;
        $[79] = t47;
        $[80] = t56;
        $[81] = t57;
    } else {
        t57 = $[81];
    }
    let t58;
    if ($[82] !== t40 || $[83] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: [
                t40,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 548,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t40;
        $[83] = t57;
        $[84] = t58;
    } else {
        t58 = $[84];
    }
    let t59;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-800 mb-4",
            children: "Authors"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 557,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t59;
    } else {
        t59 = $[85];
    }
    let t60;
    if ($[86] !== publishForm.authors || $[87] !== removeAuthor || $[88] !== updateAuthor) {
        let t61;
        if ($[90] !== publishForm.authors.length || $[91] !== removeAuthor || $[92] !== updateAuthor) {
            t61 = (author_1, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        "Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 566,
                                            columnNumber: 212
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 143
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                                    value: author_1.name,
                                    onChange: (e_8)=>updateAuthor(index_1, "name", e_8.target.value),
                                    placeholder: "Author name",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 259
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 566,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        "Email ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 566,
                                            columnNumber: 588
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 518
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                                    value: author_1.email,
                                    onChange: (e_9)=>updateAuthor(index_1, "email", e_9.target.value),
                                    placeholder: "Author email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 635
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 566,
                            columnNumber: 513
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Affiliation"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 898
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                                    value: author_1.affiliation,
                                    onChange: (e_10)=>updateAuthor(index_1, "affiliation", e_10.target.value),
                                    placeholder: "Institution"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 981
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 566,
                            columnNumber: 893
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Superscript"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 566,
                                            columnNumber: 1297
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
                                            value: author_1.superscript,
                                            onChange: (e_11)=>updateAuthor(index_1, "superscript", e_11.target.value),
                                            placeholder: "1, 2, etc."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 566,
                                            columnNumber: 1380
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 1273
                                }, ("TURBOPACK compile-time value", void 0)),
                                publishForm.authors.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",
                                    onClick: ()=>removeAuthor(index_1),
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 566,
                                    columnNumber: 1668
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 566,
                            columnNumber: 1235
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index_1, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 566,
                    columnNumber: 36
                }, ("TURBOPACK compile-time value", void 0));
            $[90] = publishForm.authors.length;
            $[91] = removeAuthor;
            $[92] = updateAuthor;
            $[93] = t61;
        } else {
            t61 = $[93];
        }
        t60 = publishForm.authors.map(t61);
        $[86] = publishForm.authors;
        $[87] = removeAuthor;
        $[88] = updateAuthor;
        $[89] = t60;
    } else {
        t60 = $[89];
    }
    let t61;
    if ($[94] !== addAuthor) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
            onClick: addAuthor,
            children: "➕ Add Author"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 584,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = addAuthor;
        $[95] = t61;
    } else {
        t61 = $[95];
    }
    let t62;
    if ($[96] !== t60 || $[97] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t60,
                        t61
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 592,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 592,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[96] = t60;
        $[97] = t61;
        $[98] = t62;
    } else {
        t62 = $[98];
    }
    const t63 = createAndPublishMutation.isPending ? "Publishing..." : "\uD83D\uDCE8 Upload Article";
    let t64;
    if ($[99] !== createAndPublishMutation.isPending || $[100] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: createAndPublishMutation.isPending,
                className: "flex items-center gap-2 px-6 py-2 bg-[#083b7a] text-white rounded-lg hover:bg-[#0a4ea3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                children: t63
            }, void 0, false, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 602,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 602,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = createAndPublishMutation.isPending;
        $[100] = t63;
        $[101] = t64;
    } else {
        t64 = $[101];
    }
    let t65;
    if ($[102] !== handlePublishArticle || $[103] !== t58 || $[104] !== t62 || $[105] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handlePublishArticle,
            className: t21,
            children: [
                t58,
                t62,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 611,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[102] = handlePublishArticle;
        $[103] = t58;
        $[104] = t62;
        $[105] = t64;
        $[106] = t65;
    } else {
        t65 = $[106];
    }
    let t66;
    if ($[107] !== t19 || $[108] !== t20 || $[109] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t18,
            children: [
                t19,
                t20,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 622,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[107] = t19;
        $[108] = t20;
        $[109] = t65;
        $[110] = t66;
    } else {
        t66 = $[110];
    }
    let t67;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: "Submitted Articles"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 632,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[111] = t67;
    } else {
        t67 = $[111];
    }
    let t68;
    if ($[112] !== expandedArticleId || $[113] !== handlePublish || $[114] !== setExpandedArticleId || $[115] !== submittedArticles || $[116] !== volumes) {
        let t69;
        if ($[118] !== expandedArticleId || $[119] !== handlePublish || $[120] !== setExpandedArticleId || $[121] !== volumes) {
            t69 = (a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border rounded-lg p-4 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-gray-800 mb-1",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a.title || "")
                        }, void 0, false, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 641,
                            columnNumber: 87
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600 mb-3",
                            children: a.articleType
                        }, void 0, false, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 641,
                            columnNumber: 172
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-sm transition-colors",
                                    onClick: ()=>setExpandedArticleId(expandedArticleId === a.id ? null : a.id),
                                    children: expandedArticleId === a.id ? "Hide Details" : "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 641,
                                    columnNumber: 291
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "flex-1 border rounded px-2 py-1 text-sm",
                                    defaultValue: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "Select Issue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 641,
                                            columnNumber: 621
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        volumes.flatMap(_temp5).map(_temp6)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 641,
                                    columnNumber: 545
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-3 py-1 rounded bg-[#083b7a] text-white hover:bg-[#0a4ea3] text-sm transition-colors",
                                    onClick: (e_12)=>{
                                        const select = e_12.currentTarget.previousSibling;
                                        if (!select || !(select instanceof HTMLSelectElement) || !select.value) {
                                            return;
                                        }
                                        handlePublish(a.id, select.value);
                                    },
                                    children: "Publish"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 641,
                                    columnNumber: 721
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 641,
                            columnNumber: 237
                        }, ("TURBOPACK compile-time value", void 0)),
                        expandedArticleId === a.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-700 border-t pt-3 mt-3 space-y-2",
                            children: [
                                a.keywords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Keywords:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 647,
                                            columnNumber: 155
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a.keywords)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 647,
                                    columnNumber: 150
                                }, ("TURBOPACK compile-time value", void 0)),
                                a.abstract && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium mb-1",
                                            children: "Abstract"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 647,
                                            columnNumber: 255
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "whitespace-pre-wrap text-gray-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a.abstract)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 647,
                                            columnNumber: 303
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 647,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0)),
                                a.pdfPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-blue-700 hover:underline",
                                            href: a.pdfPath.startsWith("/api/") ? `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${a.pdfPath}` : a.pdfPath,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 647,
                                            columnNumber: 448
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        typeof a.totalPages === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500",
                                            children: [
                                                "(",
                                                a.totalPages,
                                                " pages)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 647,
                                            columnNumber: 656
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 647,
                                    columnNumber: 407
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 647,
                            columnNumber: 67
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, a.id, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 641,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0));
            $[118] = expandedArticleId;
            $[119] = handlePublish;
            $[120] = setExpandedArticleId;
            $[121] = volumes;
            $[122] = t69;
        } else {
            t69 = $[122];
        }
        t68 = submittedArticles.map(t69);
        $[112] = expandedArticleId;
        $[113] = handlePublish;
        $[114] = setExpandedArticleId;
        $[115] = submittedArticles;
        $[116] = volumes;
        $[117] = t68;
    } else {
        t68 = $[117];
    }
    let t69;
    if ($[123] !== submittedArticles.length) {
        t69 = submittedArticles.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 py-8 bg-white rounded-lg border",
            children: "No submissions pending"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 668,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0));
        $[123] = submittedArticles.length;
        $[124] = t69;
    } else {
        t69 = $[124];
    }
    let t70;
    if ($[125] !== t68 || $[126] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gray-50 rounded-lg p-6 mt-8",
            children: [
                t67,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t68,
                        t69
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 676,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 676,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[125] = t68;
        $[126] = t69;
        $[127] = t70;
    } else {
        t70 = $[127];
    }
    let t71;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: "Published Articles"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 685,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[128] = t71;
    } else {
        t71 = $[128];
    }
    let t72;
    if ($[129] !== expandedArticleId || $[130] !== publishedArticles || $[131] !== setExpandedArticleId) {
        let t73;
        if ($[133] !== expandedArticleId || $[134] !== setExpandedArticleId) {
            t73 = (a_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border rounded-lg p-4 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-gray-800 mb-1",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a_0.title || "")
                        }, void 0, false, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 694,
                            columnNumber: 91
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600 mb-2",
                            children: a_0.articleType
                        }, void 0, false, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 694,
                            columnNumber: 178
                        }, ("TURBOPACK compile-time value", void 0)),
                        a_0.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 mb-2",
                            children: [
                                "Volume ",
                                a_0.issue.volume?.number,
                                " • Issue ",
                                a_0.issue.number,
                                " (",
                                a_0.issue.month,
                                " ",
                                a_0.issue.year,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 694,
                            columnNumber: 259
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2 mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-sm transition-colors",
                                onClick: ()=>setExpandedArticleId(expandedArticleId === a_0.id ? null : a_0.id),
                                children: expandedArticleId === a_0.id ? "Hide Details" : "View Details"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/publish/page.js",
                                lineNumber: 694,
                                columnNumber: 461
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 694,
                            columnNumber: 407
                        }, ("TURBOPACK compile-time value", void 0)),
                        expandedArticleId === a_0.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-700 border-t pt-3 mt-3 space-y-2",
                            children: [
                                a_0.doi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "DOI:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 845
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a_0.doi)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 694,
                                    columnNumber: 840
                                }, ("TURBOPACK compile-time value", void 0)),
                                a_0.keywords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Keywords:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 939
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a_0.keywords)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 694,
                                    columnNumber: 934
                                }, ("TURBOPACK compile-time value", void 0)),
                                a_0.abstract && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium mb-1",
                                            children: "Abstract"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 1043
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "whitespace-pre-wrap text-gray-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeText"])(a_0.abstract)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 1091
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 694,
                                    columnNumber: 1038
                                }, ("TURBOPACK compile-time value", void 0)),
                                a_0.pdfPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-blue-700 hover:underline",
                                            href: a_0.pdfPath.startsWith("/api/") ? `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${a_0.pdfPath}` : a_0.pdfPath,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 1240
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        typeof a_0.totalPages === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500",
                                            children: [
                                                "(",
                                                a_0.totalPages,
                                                " pages)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/publish/page.js",
                                            lineNumber: 694,
                                            columnNumber: 1456
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/publish/page.js",
                                    lineNumber: 694,
                                    columnNumber: 1199
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/publish/page.js",
                            lineNumber: 694,
                            columnNumber: 760
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, a_0.id, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 694,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0));
            $[133] = expandedArticleId;
            $[134] = setExpandedArticleId;
            $[135] = t73;
        } else {
            t73 = $[135];
        }
        t72 = publishedArticles.map(t73);
        $[129] = expandedArticleId;
        $[130] = publishedArticles;
        $[131] = setExpandedArticleId;
        $[132] = t72;
    } else {
        t72 = $[132];
    }
    let t73;
    if ($[136] !== publishedArticles.length) {
        t73 = publishedArticles.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 py-8 bg-white rounded-lg border",
            children: "No published articles"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 711,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0));
        $[136] = publishedArticles.length;
        $[137] = t73;
    } else {
        t73 = $[137];
    }
    let t74;
    if ($[138] !== t72 || $[139] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gray-50 rounded-lg p-6 mt-8",
            children: [
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t72,
                        t73
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 719,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 719,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[138] = t72;
        $[139] = t73;
        $[140] = t74;
    } else {
        t74 = $[140];
    }
    let t75;
    if ($[141] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: "Download Requests"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 728,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[141] = t75;
    } else {
        t75 = $[141];
    }
    let t76;
    if ($[142] !== downloadRequests) {
        t76 = downloadRequests.map(_temp7);
        $[142] = downloadRequests;
        $[143] = t76;
    } else {
        t76 = $[143];
    }
    let t77;
    if ($[144] !== downloadRequests.length) {
        t77 = downloadRequests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 py-8 bg-white rounded-lg border",
            children: "No download requests"
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 743,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0));
        $[144] = downloadRequests.length;
        $[145] = t77;
    } else {
        t77 = $[145];
    }
    let t78;
    if ($[146] !== t76 || $[147] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gray-50 rounded-lg p-6 mt-8",
            children: [
                t75,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t76,
                        t77
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/publish/page.js",
                    lineNumber: 751,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 751,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[146] = t76;
        $[147] = t77;
        $[148] = t78;
    } else {
        t78 = $[148];
    }
    let t79;
    if ($[149] !== t17 || $[150] !== t66 || $[151] !== t70 || $[152] !== t74 || $[153] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t15,
                children: [
                    t17,
                    t66,
                    t70,
                    t74,
                    t78
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 760,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/publish/page.js",
            lineNumber: 760,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[149] = t17;
        $[150] = t66;
        $[151] = t70;
        $[152] = t74;
        $[153] = t78;
        $[154] = t79;
    } else {
        t79 = $[154];
    }
    return t79;
};
_s(PublishArticlesPage, "1DXiNg5YAJPTkarNlmkQN9X2llY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVolumes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmittedArticles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishedArticles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDownloadRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAndPublishArticle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishArticle"]
    ];
});
_c = PublishArticlesPage;
const __TURBOPACK__default__export__ = PublishArticlesPage;
function _temp(prev) {
    return {
        ...prev,
        authors: [
            ...prev.authors,
            {
                name: "",
                email: "",
                affiliation: "",
                superscript: ""
            }
        ]
    };
}
function _temp2(author_0) {
    return author_0.name && author_0.email;
}
function _temp3(v) {
    return (v.issues || []).map((i_1)=>({
            ...i_1,
            volumeNumber: v.number
        }));
}
function _temp4(i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: i_2.id,
        children: [
            "Vol ",
            i_2.volumeNumber,
            " - Issue ",
            i_2.number,
            " (",
            i_2.month,
            " ",
            i_2.year,
            ")"
        ]
    }, i_2.id, true, {
        fileName: "[project]/app/admin/publish/page.js",
        lineNumber: 794,
        columnNumber: 10
    }, this);
}
function _temp5(v_0) {
    return (v_0.issues || []).map((i_3)=>({
            ...i_3,
            volumeNumber: v_0.number
        }));
}
function _temp6(i_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: i_4.id,
        children: [
            "Vol ",
            i_4.volumeNumber,
            " - Issue ",
            i_4.number,
            " (",
            i_4.month,
            " ",
            i_4.year,
            ")"
        ]
    }, i_4.id, true, {
        fileName: "[project]/app/admin/publish/page.js",
        lineNumber: 803,
        columnNumber: 10
    }, this);
}
function _temp7(req) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-gray-900",
                        children: req.article?.title || "\u2014"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 806,
                        columnNumber: 187
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600",
                        children: [
                            "Volume ",
                            req.article?.issue?.volume?.number ?? "\u2014",
                            typeof req.article?.issue?.number === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    " • Issue ",
                                    req.article.issue.number
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/publish/page.js",
                                lineNumber: 806,
                                columnNumber: 407
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 806,
                        columnNumber: 270
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600",
                        children: [
                            "Request by: ",
                            req.user?.email || req.userId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 806,
                        columnNumber: 462
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/publish/page.js",
                                lineNumber: 806,
                                columnNumber: 547
                            }, this),
                            " ",
                            req.status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 806,
                        columnNumber: 542
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 806,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    req.status !== "APPROVED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm",
                        onClick: async ()=>{
                            await approveDownloadRequest(req.id);
                            setDownloadRequests((prev_10)=>prev_10.map((r)=>r.id === req.id ? {
                                        ...r,
                                        status: "APPROVED"
                                    } : r));
                        },
                        children: "Approve"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 806,
                        columnNumber: 674
                    }, this),
                    req.status === "PENDING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm",
                        onClick: async ()=>{
                            await denyDownloadRequest(req.id);
                            setDownloadRequests((prev_11)=>prev_11.map((r_0)=>r_0.id === req.id ? {
                                        ...r_0,
                                        status: "DENIED"
                                    } : r_0));
                        },
                        children: "Deny"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/publish/page.js",
                        lineNumber: 812,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/publish/page.js",
                lineNumber: 806,
                columnNumber: 616
            }, this)
        ]
    }, req.id, true, {
        fileName: "[project]/app/admin/publish/page.js",
        lineNumber: 806,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PublishArticlesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d164d362._.js.map