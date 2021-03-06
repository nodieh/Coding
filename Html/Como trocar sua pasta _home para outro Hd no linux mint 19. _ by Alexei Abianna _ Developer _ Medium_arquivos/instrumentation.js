(window.webpackJsonp = window.webpackJsonp || []).push([
    [63], {
        "./src/framework/perf/PerformanceLogger.ts": function(e, n, r) {
            "use strict";
            r.r(n);
            var t = r("./node_modules/opentracing/lib/index.js"),
                o = r("./node_modules/react/index.js"),
                i = r("./node_modules/react-redux/es/index.js"),
                s = r("./src/components/session/useFlag.tsx"),
                c = r("./src/framework/reporter/performance.tsx"),
                a = r("./src/routes/RoutingContext.tsx"),
                u = r("./src/store/actions/debug.ts"),
                l = r("./src/store/selectors/session.ts"),
                f = r("./src/util/performance.ts"),
                d = r("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                p = r.n(d),
                g = r("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                m = r.n(g),
                b = r("./src/log/datapupLogger.ts"),
                v = r("./src/util/observable/extras.ts"),
                _ = function(e) { return function(n) { return m()({}, e, n) } };
            n.default = function() {
                var e, n;
                return n = { glyph_embed_commands: null !== (e = Object(s.c)().glyph_embed_commands) && void 0 !== e ? e : "control" }, o.useEffect((function() {
                        var e = Object(v.a)(f.f, f.d, f.b).map((function(e) {
                                var n = p()(e, 3),
                                    r = n[0],
                                    t = n[1],
                                    o = n[2];
                                return { responseEndToLCP: new f.a(r.response.end, t.end), responseEndToFCP: new f.a(r.response.end, o.end) }
                            })),
                            r = Object(v.a)(f.f, f.c.map(_("fid")), f.b.map(_("fcp")), f.d.map(_("lcp")), e);
                        f.h.observe((function(e) {
                            e || r.observe((function(e) {
                                var r = e.reduce((function(e, n) { return Object.assign(e, n) }), {}),
                                    t = Object.keys(r).reduce((function(e, n) { var t = r[n].duration; return e[n] = t % 1 == 0 ? t : Number(t.toFixed(1)), e }), {}),
                                    o = document.children[0],
                                    i = { html: null == o ? void 0 : o.innerHTML.length, redux: JSON.stringify(window.__PRELOADED_STATE__).length, apollo: JSON.stringify(window.__APOLLO_STATE__).length };
                                b.a.log("client hydrated", { perf: t, sizes: i, experimentFlags: n })
                            }))
                        })), f.g.observe((function(e) { return b.a.log("client resource sizes", { resources: e }) }))
                    }), []),
                    function() {
                        var e, n = Object(i.f)((function(e) { return e.tracing.tracer })),
                            r = Object(i.f)((function(e) { return e.tracing.originalSpan })),
                            d = Object(i.f)((function(e) { return e.client.isBot })),
                            p = Object(i.f)((function(e) { return e.client.isCustomDomain })),
                            g = Object(i.f)((function(e) { return e.auroraPage.isAuroraPageEnabled })),
                            m = Object(i.f)((function(e) { return e.session.user.id })),
                            b = Object(i.f)((function(e) { return e.config.performanceTags })),
                            v = Object(i.e)(),
                            _ = Object(a.c)(),
                            h = null !== (e = Object(s.c)().glyph_embed_commands) && void 0 !== e ? e : "control",
                            O = Object(c.c)();
                        o.useEffect((function() {
                            var e;
                            if (n && O && !d) {
                                var o = _(window.location.pathname),
                                    i = null !== (e = null == o ? void 0 : o.route.metricName) && void 0 !== e ? e : "unidentified",
                                    s = { "user.logged_in": Object(l.a)(m), "req.route_name": i, "req.route": i, "req.glyph_embed": h, "req.is_custom_domain": p };
                                b.forEach((function(e) { return s["req.".concat(e)] = 1 }));
                                var c = { loggedIn: Object(l.a)(m), route: i, auroraPage: g, withinWriterProfileRedesignExperiment: b.includes("enable_writer_profile_redesign") },
                                    a = function(e) { return Math.round(1e3 * e) },
                                    j = function(e, r, t, o) {
                                        var i = t.start,
                                            c = t.end,
                                            u = n.startSpan("timing.".concat(r), { childOf: e, tags: s }).setBeginMicros(a(i)).setEndMicros(a(c));
                                        return null != o && o(u), u.finish(), u
                                    };
                                f.f.observe((function(e) {
                                    var o, i, l, f;
                                    O.reportRender(c, e);
                                    var d = n.startSpan("timing.navigation", { references: r ? [Object(t.followsFrom)(r)] : void 0, tags: s }).setBeginMicros(a(e.load.start)).setEndMicros(a(e.load.end)).log({ redirect_count: null !== (o = null === (i = window) || void 0 === i || null === (l = i.performance) || void 0 === l || null === (f = l.navigation) || void 0 === f ? void 0 : f.redirectCount) && void 0 !== o ? o : 0 });
                                    j(d, "beforeDomainLookup", e.beforeDomainLookup), j(d, "domainLookup", e.domainLookup), j(d, "connect", e.connect), j(d, "request", e.request), j(d, "response", e.response), j(d, "processing", e.processing);
                                    var p = e.overallFCP,
                                        g = e.client,
                                        m = e.render;
                                    null != p && j(d, "firstContentfulPaint", p), null != g && j(d, "client", g, (function(e) { null != m && j(e, "render", m) })), d.finish(), v(Object(u.f)(d.generateTraceURL()))
                                })), f.b.observe((function(e) { O.reportFirstContentfulPaint(c, e), n.startSpan("timing.firstContentfulPaint.v2", { references: r ? [Object(t.followsFrom)(r)] : void 0, tags: s }).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish() })), f.d.observe((function(e) { O.reportLargestContentfulPaint(c, e), n.startSpan("timing.largestContentfulPaint", { references: r ? [Object(t.followsFrom)(r)] : void 0, tags: s }).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish() })), f.h.observe((function(e) { e && O.reportUnsupportedPerfObserver(c) })), f.c.observe((function(e) { O.reportInput(c, e), n.startSpan("timing.input.first.delay", { references: r ? [Object(t.followsFrom)(r)] : void 0, tags: s }).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish() }))
                            }
                        }), [n])
                    }(), null
            }
        },
        "./src/util/observable/extras.ts": function(e, n, r) {
            "use strict";
            r.d(n, "a", (function() { return o }));
            var t = r("./src/util/observable/index.ts");

            function o() { for (var e = new t.a, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]; if (0 === r.length) return e; var i = r.map((function() { return [] })); return r.forEach((function(n, r) { n.observe((function(n) { i[r].push(n), i.every((function(e) { return e.length > 0 })) && e.set(i.map((function(e) { return e.shift() }))) })) })), e }
        },
        "./src/util/tracing.ts": function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, "init", (function() { return i })), r.d(n, "extractSpan", (function() { return s }));
            var t = r("./node_modules/lightstep-tracer/browser.js"),
                o = r("./node_modules/opentracing/lib/index.js"),
                i = function(e) {
                    var n = e.name,
                        r = e.host,
                        i = e.token,
                        s = e.appVersion,
                        c = new t.Tracer({ component_name: n, xhr_instrumentation: !1, access_token: i, collector_host: r, default_span_tags: { "component.version": s } });
                    return Object(o.initGlobalTracer)(c), c
                },
                s = function(e, n) { if (n) return e.extract(o.FORMAT_HTTP_HEADERS, n) }
        }
    }
]);
//# sourceMappingURL=instrumentation.911463ab.chunk.js.map