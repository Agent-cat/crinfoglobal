(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data:d1c845 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409d195f62bcc858bcd258b84f89912aed64cd766d":"revalidateContent"},"app/actions.js",""] */ __turbopack_context__.s([
    "revalidateContent",
    ()=>revalidateContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var revalidateContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409d195f62bcc858bcd258b84f89912aed64cd766d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "revalidateContent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnXG5cbi8qKlxuICogUmV2YWxpZGF0ZXMgdGhlIE5leHQuanMgY2FjaGUgZm9yIGEgc3BlY2lmaWMgdGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIGNhY2hlIHRhZyB0byByZXZhbGlkYXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXZhbGlkYXRlQ29udGVudCh0YWcpIHtcbiAgICBpZiAoIXRhZykgcmV0dXJuO1xuICAgIHJldmFsaWRhdGVUYWcodGFnKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBUXNCIn0=
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
"[project]/app/admin/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:d1c845 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVolumes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useArticles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDownloadRequests.js [app-client] (ecmascript)");
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
const AdminPage = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(92);
    if ($[0] !== "26d89bf8d51c200564fe94f1b70c9f6caaea172a38106b25971fa68fd08bf5ec") {
        for(let $i = 0; $i < 92; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26d89bf8d51c200564fe94f1b70c9f6caaea172a38106b25971fa68fd08bf5ec";
    }
    const { data: user, isLoading: authLoading, error: authError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { data: t0, refetch: refetchVolumes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVolumes"])();
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? [] : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const volumes = t1;
    const { data: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmittedArticles"])();
    t2 === undefined ? [] : t2;
    const { data: t3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishedArticles"])();
    t3 === undefined ? [] : t3;
    const { data: t4 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDownloadRequests"])();
    t4 === undefined ? [] : t4;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishArticle"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApproveDownloadRequest"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDenyDownloadRequest"])();
    const [newVolumeNumber, setNewVolumeNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            volumeId: "",
            number: "",
            month: "",
            year: ""
        };
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    const [newIssue, setNewIssue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {};
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    const [editingVolume, setEditingVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingIssue, setEditingIssue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t7;
    if ($[5] !== newVolumeNumber || $[6] !== refetchVolumes) {
        t7 = async (e)=>{
            e.preventDefault();
            const num = parseInt(newVolumeNumber, 10);
            if (!num) {
                return;
            }
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVolume"])(num);
                setNewVolumeNumber("");
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t8) {
                const error = t8;
                console.error("Failed to create volume:", error);
                alert("Failed to create volume: " + error.message);
            }
        };
        $[5] = newVolumeNumber;
        $[6] = refetchVolumes;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const handleCreateVolume = t7;
    let t8;
    if ($[8] !== newIssue || $[9] !== refetchVolumes) {
        t8 = async (e_0)=>{
            e_0.preventDefault();
            const { volumeId, number, month, year } = newIssue;
            if (!volumeId || !number || !month || !year) {
                return;
            }
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIssue"])(volumeId, parseInt(number, 10), month, parseInt(year, 10));
                setNewIssue({
                    volumeId: "",
                    number: "",
                    month: "",
                    year: ""
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t9) {
                const error_0 = t9;
                console.error("Failed to create issue:", error_0);
                alert("Failed to create issue: " + error_0.message);
            }
        };
        $[8] = newIssue;
        $[9] = refetchVolumes;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const handleCreateIssue = t8;
    let t9;
    if ($[11] !== refetchVolumes) {
        t9 = async (volumeId_0, number_0)=>{
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateVolume"])(volumeId_0, parseInt(number_0, 10));
                setEditingVolume(null);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t10) {
                const error_2 = t10;
                console.error("Failed to update volume:", error_2);
                alert("Failed to update volume: " + error_2.message);
            }
        };
        $[11] = refetchVolumes;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const handleUpdateVolume = t9;
    let t10;
    if ($[13] !== refetchVolumes) {
        t10 = async (volumeId_1)=>{
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteVolume"])(volumeId_1);
                setDeleteConfirm(null);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t11) {
                const error_3 = t11;
                console.error("Failed to delete volume:", error_3);
                alert("Failed to delete volume: " + error_3.message);
            }
        };
        $[13] = refetchVolumes;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const handleDeleteVolume = t10;
    let t11;
    if ($[15] !== refetchVolumes) {
        t11 = async (issueId_0, number_1, month_0, year_0)=>{
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateIssue"])(issueId_0, parseInt(number_1, 10), month_0, parseInt(year_0, 10));
                setEditingIssue(null);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t12) {
                const error_4 = t12;
                console.error("Failed to update issue:", error_4);
                alert("Failed to update issue: " + error_4.message);
            }
        };
        $[15] = refetchVolumes;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const handleUpdateIssue = t11;
    let t12;
    if ($[17] !== refetchVolumes) {
        t12 = async (issueId_1)=>{
            ;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteIssue"])(issueId_1);
                setDeleteConfirm(null);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$d1c845__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateContent"])("volumes");
                refetchVolumes();
            } catch (t13) {
                const error_5 = t13;
                console.error("Failed to delete issue:", error_5);
                alert("Failed to delete issue: " + error_5.message);
            }
        };
        $[17] = refetchVolumes;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const handleDeleteIssue = t12;
    if (authLoading) {
        let t13;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-40 bg-gray-200 animate-pulse rounded mb-6"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 230,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 230,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 230,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[19] = t13;
        } else {
            t13 = $[19];
        }
        return t13;
    }
    if (authError || !user) {
        let t13;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: "Please sign in."
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 240,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 240,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t13;
        } else {
            t13 = $[20];
        }
        return t13;
    }
    if (user.role !== "EDITOR") {
        let t13;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white mt-16 py-8 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: "Forbidden. Editor access required."
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 250,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 250,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[21] = t13;
        } else {
            t13 = $[21];
        }
        return t13;
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl md:text-3xl font-bold",
            children: "Admin Panel"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/submitted",
                            className: "px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm text-center",
                            children: "Submitted Articles"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 266,
                            columnNumber: 131
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/published",
                            className: "px-4 py-2 rounded-lg bg-black text-white  transition-colors text-sm text-center",
                            children: "Published Articles"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 266,
                            columnNumber: 278
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/publish",
                            className: "px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors text-sm text-center",
                            children: "📨 Publish Articles"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 266,
                            columnNumber: 425
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/download-requests",
                            className: "px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm text-center",
                            children: "📥 Full Access Requests"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 266,
                            columnNumber: 593
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _temp,
                            className: "px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors",
                            children: "← Back"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 266,
                            columnNumber: 777
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 266,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: "Volumes & Issues Management"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-medium mb-3 text-gray-700",
            children: "Add New Volume"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = (e_1)=>setNewVolumeNumber(e_1.target.value);
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== newVolumeNumber) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            className: "flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            placeholder: "Volume number",
            value: newVolumeNumber,
            onChange: t17
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 294,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = newVolumeNumber;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors",
            children: "Add Volume"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== handleCreateVolume || $[31] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-4 mb-6 shadow-sm",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateVolume,
                    className: "flex gap-2",
                    children: [
                        t18,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 309,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = handleCreateVolume;
        $[31] = t18;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-medium mb-3 text-gray-700",
            children: "Add New Issue"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 318,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    const t22 = newIssue.volumeId;
    let t23;
    let t24;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = (e_2)=>setNewIssue((s)=>({
                    ...s,
                    volumeId: e_2.target.value
                }));
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select Volume"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t23;
        $[35] = t24;
    } else {
        t23 = $[34];
        t24 = $[35];
    }
    let t25;
    if ($[36] !== volumes) {
        t25 = volumes.map(_temp2);
        $[36] = volumes;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== newIssue.volumeId || $[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            value: t22,
            onChange: t23,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 348,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = newIssue.volumeId;
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = (e_3)=>setNewIssue((s_0)=>({
                    ...s_0,
                    number: e_3.target.value
                }));
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== newIssue.number) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            className: "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            placeholder: "Issue #",
            value: newIssue.number,
            onChange: t27
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 367,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = newIssue.number;
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    const t29 = newIssue.month;
    let t30;
    let t31;
    let t32;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = (e_4)=>setNewIssue((s_1)=>({
                    ...s_1,
                    month: e_4.target.value
                }));
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Month"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 382,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t32 = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ].map(_temp3);
        $[44] = t30;
        $[45] = t31;
        $[46] = t32;
    } else {
        t30 = $[44];
        t31 = $[45];
        t32 = $[46];
    }
    let t33;
    if ($[47] !== newIssue.month) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            value: t29,
            onChange: t30,
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 394,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = newIssue.month;
        $[48] = t33;
    } else {
        t33 = $[48];
    }
    let t34;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = (e_5)=>setNewIssue((s_2)=>({
                    ...s_2,
                    year: e_5.target.value
                }));
        $[49] = t34;
    } else {
        t34 = $[49];
    }
    let t35;
    if ($[50] !== newIssue.year) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            className: "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#083b7a]",
            placeholder: "Year",
            value: newIssue.year,
            onChange: t34
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 412,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = newIssue.year;
        $[51] = t35;
    } else {
        t35 = $[51];
    }
    let t36;
    if ($[52] !== t28 || $[53] !== t33 || $[54] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-2",
            children: [
                t28,
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 420,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t28;
        $[53] = t33;
        $[54] = t35;
        $[55] = t36;
    } else {
        t36 = $[55];
    }
    let t37;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full px-4 py-2 rounded-lg bg-[#083b7a] text-white hover:bg-[#0a4ea3] transition-colors",
            children: "Add Issue"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 430,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t37;
    } else {
        t37 = $[56];
    }
    let t38;
    if ($[57] !== handleCreateIssue || $[58] !== t26 || $[59] !== t36) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-4 mb-6 shadow-sm",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateIssue,
                    className: "space-y-3",
                    children: [
                        t26,
                        t36,
                        t37
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 437,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 437,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = handleCreateIssue;
        $[58] = t26;
        $[59] = t36;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    let t39;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-medium text-gray-700 p-4 bg-gray-100 border-b",
            children: "Existing Volumes"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 447,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t39;
    } else {
        t39 = $[61];
    }
    let t40;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-50 border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                        children: "Volume Number"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 454,
                        columnNumber: 54
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                        children: "Issues"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 454,
                        columnNumber: 144
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-3 text-right text-sm font-semibold text-gray-700",
                        children: "Actions"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 454,
                        columnNumber: 227
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 454,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 454,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t40;
    } else {
        t40 = $[62];
    }
    let t41;
    if ($[63] !== editingIssue || $[64] !== editingVolume || $[65] !== handleUpdateIssue || $[66] !== handleUpdateVolume || $[67] !== volumes) {
        let t42;
        if ($[69] !== editingIssue || $[70] !== editingVolume || $[71] !== handleUpdateIssue || $[72] !== handleUpdateVolume) {
            t42 = (v_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: editingVolume?.id === v_0.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "border rounded px-2 py-1 w-24",
                                        value: editingVolume.number,
                                        onChange: (e_6)=>setEditingVolume({
                                                ...editingVolume,
                                                number: e_6.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 463,
                                        columnNumber: 140
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800",
                                        children: [
                                            "Volume ",
                                            v_0.number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 466,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 463,
                                    columnNumber: 82
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-600",
                                    children: [
                                        v_0.issues?.length || 0,
                                        " issue(s)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 466,
                                    columnNumber: 100
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 justify-end",
                                        children: editingVolume?.id === v_0.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleUpdateVolume(v_0.id, editingVolume.number),
                                                    className: "px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700",
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 466,
                                                    columnNumber: 298
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEditingVolume(null),
                                                    className: "px-3 py-1 text-sm rounded bg-gray-500 text-white hover:bg-gray-600",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 466,
                                                    columnNumber: 465
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEditingVolume({
                                                            id: v_0.id,
                                                            number: v_0.number
                                                        }),
                                                    className: "px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 466,
                                                    columnNumber: 614
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDeleteConfirm({
                                                            type: "volume",
                                                            id: v_0.id,
                                                            name: `Volume ${v_0.number}`,
                                                            issueCount: v_0.issues?.length || 0
                                                        }),
                                                    className: "px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 469,
                                                    columnNumber: 113
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 466,
                                        columnNumber: 224
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 466,
                                    columnNumber: 187
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 463,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        v_0.issues && v_0.issues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: "3",
                                className: "px-4 py-2 bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-semibold text-gray-600",
                                                            children: "Issue #"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 322
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-semibold text-gray-600",
                                                            children: "Month"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 406
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-semibold text-gray-600",
                                                            children: "Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 488
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-right text-xs font-semibold text-gray-600",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 474,
                                                            columnNumber: 569
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 474,
                                                    columnNumber: 281
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 474,
                                                columnNumber: 274
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: v_0.issues.map((issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                children: editingIssue?.id === issue.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    className: "border rounded px-2 py-1 w-20",
                                                                    value: editingIssue.number,
                                                                    onChange: (e_7)=>setEditingIssue({
                                                                            ...editingIssue,
                                                                            number: e_7.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 474,
                                                                    columnNumber: 814
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        "#",
                                                                        issue.number
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 477,
                                                                    columnNumber: 32
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.js",
                                                                lineNumber: 474,
                                                                columnNumber: 755
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                children: editingIssue?.id === issue.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "border rounded px-2 py-1",
                                                                    value: editingIssue.month,
                                                                    onChange: (e_8)=>setEditingIssue({
                                                                            ...editingIssue,
                                                                            month: e_8.target.value
                                                                        }),
                                                                    children: [
                                                                        "January",
                                                                        "February",
                                                                        "March",
                                                                        "April",
                                                                        "May",
                                                                        "June",
                                                                        "July",
                                                                        "August",
                                                                        "September",
                                                                        "October",
                                                                        "November",
                                                                        "December"
                                                                    ].map(_temp4)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 477,
                                                                    columnNumber: 145
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: issue.month
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 480,
                                                                    columnNumber: 175
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.js",
                                                                lineNumber: 477,
                                                                columnNumber: 86
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                children: editingIssue?.id === issue.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    className: "border rounded px-2 py-1 w-24",
                                                                    value: editingIssue.year,
                                                                    onChange: (e_9)=>setEditingIssue({
                                                                            ...editingIssue,
                                                                            year: e_9.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 480,
                                                                    columnNumber: 286
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: issue.year
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 483,
                                                                    columnNumber: 32
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.js",
                                                                lineNumber: 480,
                                                                columnNumber: 227
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2 justify-end",
                                                                    children: editingIssue?.id === issue.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleUpdateIssue(issue.id, editingIssue.number, editingIssue.month, editingIssue.year),
                                                                                className: "px-2 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700",
                                                                                children: "Save"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.js",
                                                                                lineNumber: 483,
                                                                                columnNumber: 195
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setEditingIssue(null),
                                                                                className: "px-2 py-1 text-xs rounded bg-gray-500 text-white hover:bg-gray-600",
                                                                                children: "Cancel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.js",
                                                                                lineNumber: 483,
                                                                                columnNumber: 401
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setEditingIssue({
                                                                                        id: issue.id,
                                                                                        number: issue.number,
                                                                                        month: issue.month,
                                                                                        year: issue.year
                                                                                    }),
                                                                                className: "px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700",
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.js",
                                                                                lineNumber: 483,
                                                                                columnNumber: 549
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setDeleteConfirm({
                                                                                        type: "issue",
                                                                                        id: issue.id,
                                                                                        name: `Issue #${issue.number} (${issue.month} ${issue.year})`
                                                                                    }),
                                                                                className: "px-2 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700",
                                                                                children: "Delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.js",
                                                                                lineNumber: 488,
                                                                                columnNumber: 123
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.js",
                                                                    lineNumber: 483,
                                                                    columnNumber: 120
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.js",
                                                                lineNumber: 483,
                                                                columnNumber: 83
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, issue.id, true, {
                                                        fileName: "[project]/app/admin/page.js",
                                                        lineNumber: 474,
                                                        columnNumber: 699
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 474,
                                                columnNumber: 667
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 474,
                                        columnNumber: 248
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 474,
                                    columnNumber: 226
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 474,
                                columnNumber: 177
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 474,
                            columnNumber: 173
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, v_0.id, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 463,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0));
            $[69] = editingIssue;
            $[70] = editingVolume;
            $[71] = handleUpdateIssue;
            $[72] = handleUpdateVolume;
            $[73] = t42;
        } else {
            t42 = $[73];
        }
        t41 = volumes.map(t42);
        $[63] = editingIssue;
        $[64] = editingVolume;
        $[65] = handleUpdateIssue;
        $[66] = handleUpdateVolume;
        $[67] = volumes;
        $[68] = t41;
    } else {
        t41 = $[68];
    }
    let t42;
    if ($[74] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full",
            children: [
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-gray-200",
                    children: t41
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 513,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t41;
        $[75] = t42;
    } else {
        t42 = $[75];
    }
    let t43;
    if ($[76] !== volumes.length) {
        t43 = volumes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 py-8",
            children: "No volumes created yet"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 521,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = volumes.length;
        $[77] = t43;
    } else {
        t43 = $[77];
    }
    let t44;
    if ($[78] !== t42 || $[79] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm overflow-hidden",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: [
                        t42,
                        t43
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 529,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 529,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t42;
        $[79] = t43;
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] !== t20 || $[82] !== t38 || $[83] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-50 w-full rounded-lg p-6",
                children: [
                    t15,
                    t20,
                    t38,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 538,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 538,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = t20;
        $[82] = t38;
        $[83] = t44;
        $[84] = t45;
    } else {
        t45 = $[84];
    }
    let t46;
    if ($[85] !== deleteConfirm || $[86] !== handleDeleteIssue || $[87] !== handleDeleteVolume) {
        t46 = deleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg max-w-md w-full p-6 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-red-600",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 548,
                                columnNumber: 380
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 548,
                            columnNumber: 288
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 191
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-center text-gray-900 mb-2",
                        children: "Confirm Deletion"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 598
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-600 mb-4",
                        children: [
                            "Are you sure you want to delete ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: deleteConfirm.name
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 548,
                                columnNumber: 762
                            }, ("TURBOPACK compile-time value", void 0)),
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 684
                    }, ("TURBOPACK compile-time value", void 0)),
                    deleteConfirm.type === "volume" && deleteConfirm.issueCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-yellow-800",
                            children: [
                                "⚠️ This will also delete ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: [
                                        deleteConfirm.issueCount,
                                        " issue(s)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 548,
                                    columnNumber: 1047
                                }, ("TURBOPACK compile-time value", void 0)),
                                " associated with this volume."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 548,
                            columnNumber: 983
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 908
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-gray-500 mb-6",
                        children: "This action cannot be undone."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 1161
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDeleteConfirm(null),
                                className: "flex-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors font-medium",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 548,
                                columnNumber: 1276
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (deleteConfirm.type === "volume") {
                                        handleDeleteVolume(deleteConfirm.id);
                                    } else {
                                        handleDeleteIssue(deleteConfirm.id);
                                    }
                                },
                                className: "flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 548,
                                columnNumber: 1452
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 548,
                        columnNumber: 1248
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 548,
                columnNumber: 124
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 548,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = deleteConfirm;
        $[86] = handleDeleteIssue;
        $[87] = handleDeleteVolume;
        $[88] = t46;
    } else {
        t46 = $[88];
    }
    let t47;
    if ($[89] !== t45 || $[90] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full text-justify text-black bg-white mt-16 py-8 px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t14,
                    t45,
                    t46
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 564,
                columnNumber: 97
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 564,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t45;
        $[90] = t46;
        $[91] = t47;
    } else {
        t47 = $[91];
    }
    return t47;
};
_s(AdminPage, "63cWYY6Ykut/nOrBlN76V2kxmHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVolumes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVolumes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmittedArticles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishedArticles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDownloadRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useArticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishArticle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApproveDownloadRequest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDownloadRequests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDenyDownloadRequest"]
    ];
});
_c = AdminPage;
const __TURBOPACK__default__export__ = AdminPage;
function _temp() {
    return window.history.back();
}
function _temp2(v) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: v.id,
        children: [
            "Volume ",
            v.number
        ]
    }, v.id, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 578,
        columnNumber: 10
    }, this);
}
function _temp3(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m,
        children: m
    }, m, false, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 581,
        columnNumber: 10
    }, this);
}
function _temp4(m_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m_0,
        children: m_0
    }, m_0, false, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 584,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_34726cd6._.js.map