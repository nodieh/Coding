"use strict";
this.default_gsi = this.default_gsi || {};
(function(_) {
    var window = this;
    try {
        var aa, ba, ca, da, ea, fa, ja;
        aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };
        ca = function(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("a"); };
        da = ca(this);
        ea = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b })
            }
        };
        ea("Symbol", function(a) {
            if (a) return a;
            var b = function(e, f) {
                this.g = e;
                ba(this, "description", { configurable: !0, writable: !0, value: f })
            };
            b.prototype.toString = function() { return this.g };
            var c = 0,
                d = function(e) { if (this instanceof d) throw new TypeError("b"); return new b("jscomp_symbol_" + (e || "") + "_" + c++, e) };
            return d
        });
        ea("Symbol.iterator", function(a) {
            if (a) return a;
            a = Symbol("c");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = da[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, { configurable: !0, writable: !0, value: function() { return fa(aa(this)) } }) }
            return a
        });
        fa = function(a) {
            a = { next: a };
            a[Symbol.iterator] = function() { return this };
            return a
        };
        _.ha = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } };
        _.ia = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        };
        if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
        else {
            var ka;
            a: {
                var la = { a: !0 },
                    ma = {};
                try {
                    ma.__proto__ = la;
                    ka = ma.a;
                    break a
                } catch (a) {}
                ka = !1
            }
            ja = ka ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError("d`" + a); return a } : null
        }
        _.na = ja;
        ea("String.prototype.startsWith", function(a) {
            return a ? a : function(b, c) {
                if (null == this) throw new TypeError("e`startsWith");
                if (b instanceof RegExp) throw new TypeError("f`startsWith");
                var d = this.length,
                    e = b.length;
                c = Math.max(0, Math.min(c | 0, this.length));
                for (var f = 0; f < e && c < d;)
                    if (this[c++] != b[f++]) return !1;
                return f >= e
            }
        });
        var oa = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) },
            pa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d) oa(d, e) && (a[e] = d[e])
                }
                return a
            };
        ea("Object.assign", function(a) { return a || pa });
        ea("Promise", function(a) {
            function b() { this.g = null }

            function c(g) { return g instanceof e ? g : new e(function(h) { h(g) }) }
            if (a) return a;
            b.prototype.h = function(g) {
                if (null == this.g) {
                    this.g = [];
                    var h = this;
                    this.i(function() { h.l() })
                }
                this.g.push(g)
            };
            var d = da.setTimeout;
            b.prototype.i = function(g) { d(g, 0) };
            b.prototype.l = function() {
                for (; this.g && this.g.length;) {
                    var g = this.g;
                    this.g = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try { k() } catch (n) { this.j(n) }
                    }
                }
                this.g = null
            };
            b.prototype.j = function(g) {
                this.i(function() {
                    throw g;
                })
            };
            var e = function(g) {
                this.g = 0;
                this.i = void 0;
                this.h = [];
                this.o = !1;
                var h = this.j();
                try { g(h.resolve, h.reject) } catch (k) { h.reject(k) }
            };
            e.prototype.j = function() {
                function g(n) { return function(m) { k || (k = !0, n.call(h, m)) } }
                var h = this,
                    k = !1;
                return { resolve: g(this.D), reject: g(this.l) }
            };
            e.prototype.D = function(g) {
                if (g === this) this.l(new TypeError("g"));
                else if (g instanceof e) this.H(g);
                else {
                    a: switch (typeof g) {
                        case "object":
                            var h = null != g;
                            break a;
                        case "function":
                            h = !0;
                            break a;
                        default:
                            h = !1
                    }
                    h ? this.C(g) : this.m(g)
                }
            };
            e.prototype.C =
                function(g) { var h = void 0; try { h = g.then } catch (k) { this.l(k); return } "function" == typeof h ? this.F(h, g) : this.m(g) };
            e.prototype.l = function(g) { this.s(2, g) };
            e.prototype.m = function(g) { this.s(1, g) };
            e.prototype.s = function(g, h) {
                if (0 != this.g) throw Error("h`" + g + "`" + h + "`" + this.g);
                this.g = g;
                this.i = h;
                2 === this.g && this.B();
                this.u()
            };
            e.prototype.B = function() {
                var g = this;
                d(function() { if (g.v()) { var h = da.console; "undefined" !== typeof h && h.error(g.i) } }, 1)
            };
            e.prototype.v = function() {
                if (this.o) return !1;
                var g = da.CustomEvent,
                    h = da.Event,
                    k = da.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? g = new h("unhandledrejection", { cancelable: !0 }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return k(g)
            };
            e.prototype.u = function() {
                if (null != this.h) {
                    for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                    this.h = null
                }
            };
            var f = new b;
            e.prototype.H = function(g) {
                var h = this.j();
                g.Na(h.resolve, h.reject)
            };
            e.prototype.F = function(g, h) { var k = this.j(); try { g.call(h, k.resolve, k.reject) } catch (n) { k.reject(n) } };
            e.prototype.then = function(g, h) {
                function k(u, r) { return "function" == typeof u ? function(D) { try { n(u(D)) } catch (y) { m(y) } } : r }
                var n, m, p = new e(function(u, r) {
                    n = u;
                    m = r
                });
                this.Na(k(g, n), k(h, m));
                return p
            };
            e.prototype.catch = function(g) { return this.then(void 0, g) };
            e.prototype.Na = function(g, h) {
                function k() {
                    switch (n.g) {
                        case 1:
                            g(n.i);
                            break;
                        case 2:
                            h(n.i);
                            break;
                        default:
                            throw Error("i`" + n.g);
                    }
                }
                var n = this;
                null == this.h ? f.h(k) :
                    this.h.push(k);
                this.o = !0
            };
            e.resolve = c;
            e.reject = function(g) { return new e(function(h, k) { k(g) }) };
            e.race = function(g) { return new e(function(h, k) { for (var n = _.ha(g), m = n.next(); !m.done; m = n.next()) c(m.value).Na(h, k) }) };
            e.all = function(g) {
                var h = _.ha(g),
                    k = h.next();
                return k.done ? c([]) : new e(function(n, m) {
                    function p(D) {
                        return function(y) {
                            u[D] = y;
                            r--;
                            0 == r && n(u)
                        }
                    }
                    var u = [],
                        r = 0;
                    do u.push(void 0), r++, c(k.value).Na(p(u.length - 1), m), k = h.next(); while (!k.done)
                })
            };
            return e
        });
        var qa = function(a, b) {
            a instanceof String && (a += "");
            var c = 0,
                d = !1,
                e = {
                    next: function() {
                        if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                        d = !0;
                        return { done: !0, value: void 0 }
                    }
                };
            e[Symbol.iterator] = function() { return e };
            return e
        };
        ea("Array.prototype.keys", function(a) { return a ? a : function() { return qa(this, function(b) { return b }) } });
        ea("Array.prototype.values", function(a) { return a ? a : function() { return qa(this, function(b, c) { return c }) } });
        ea("WeakMap", function(a) {
            function b() {}

            function c(k) { var n = typeof k; return "object" === n && null !== k || "function" === n }

            function d(k) {
                if (!oa(k, f)) {
                    var n = new b;
                    ba(k, f, { value: n })
                }
            }

            function e(k) {
                var n = Object[k];
                n && (Object[k] = function(m) {
                    if (m instanceof b) return m;
                    Object.isExtensible(m) && d(m);
                    return n(m)
                })
            }
            if (function() {
                    if (!a || !Object.seal) return !1;
                    try {
                        var k = Object.seal({}),
                            n = Object.seal({}),
                            m = new a([
                                [k, 2],
                                [n, 3]
                            ]);
                        if (2 != m.get(k) || 3 != m.get(n)) return !1;
                        m.delete(k);
                        m.set(n, 4);
                        return !m.has(k) && 4 == m.get(n)
                    } catch (p) { return !1 }
                }()) return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0,
                h = function(k) { this.g = (g += Math.random() + 1).toString(); if (k) { k = _.ha(k); for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1]) } };
            h.prototype.set = function(k, n) {
                if (!c(k)) throw Error("j");
                d(k);
                if (!oa(k, f)) throw Error("k`" + k);
                k[f][this.g] = n;
                return this
            };
            h.prototype.get = function(k) { return c(k) && oa(k, f) ? k[f][this.g] : void 0 };
            h.prototype.has = function(k) { return c(k) && oa(k, f) && oa(k[f], this.g) };
            h.prototype.delete = function(k) {
                return c(k) &&
                    oa(k, f) && oa(k[f], this.g) ? delete k[f][this.g] : !1
            };
            return h
        });
        ea("Map", function(a) {
            if (function() {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({ x: 4 }),
                            k = new a(_.ha([
                                [h, "s"]
                            ]));
                        if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
                        var n = k.entries(),
                            m = n.next();
                        if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                        m = n.next();
                        return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
                    } catch (p) { return !1 }
                }()) return a;
            var b = new WeakMap,
                c = function(h) {
                    this.h = {};
                    this.g =
                        f();
                    this.size = 0;
                    if (h) { h = _.ha(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) }
                };
            c.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var n = d(this, h);
                n.list || (n.list = this.h[n.id] = []);
                n.O ? n.O.value = k : (n.O = { next: this.g, fa: this.g.fa, head: this.g, key: h, value: k }, n.list.push(n.O), this.g.fa.next = n.O, this.g.fa = n.O, this.size++);
                return this
            };
            c.prototype.delete = function(h) {
                h = d(this, h);
                return h.O && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.O.fa.next = h.O.next, h.O.next.fa = h.O.fa, h.O.head =
                    null, this.size--, !0) : !1
            };
            c.prototype.clear = function() {
                this.h = {};
                this.g = this.g.fa = f();
                this.size = 0
            };
            c.prototype.has = function(h) { return !!d(this, h).O };
            c.prototype.get = function(h) { return (h = d(this, h).O) && h.value };
            c.prototype.entries = function() { return e(this, function(h) { return [h.key, h.value] }) };
            c.prototype.keys = function() { return e(this, function(h) { return h.key }) };
            c.prototype.values = function() { return e(this, function(h) { return h.value }) };
            c.prototype.forEach = function(h, k) {
                for (var n = this.entries(), m; !(m = n.next()).done;) m =
                    m.value, h.call(k, m[1], m[0], this)
            };
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function(h, k) {
                    var n = k && typeof k;
                    "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
                    var m = h.h[n];
                    if (m && oa(h.h, n))
                        for (h = 0; h < m.length; h++) { var p = m[h]; if (k !== k && p.key !== p.key || k === p.key) return { id: n, list: m, index: h, O: p } }
                    return { id: n, list: m, index: -1, O: void 0 }
                },
                e = function(h, k) {
                    var n = h.g;
                    return fa(function() {
                        if (n) {
                            for (; n.head != h.g;) n = n.fa;
                            for (; n.next != n.head;) return n = n.next, { done: !1, value: k(n) };
                            n = null
                        }
                        return { done: !0, value: void 0 }
                    })
                },
                f = function() { var h = {}; return h.fa = h.next = h.head = h },
                g = 0;
            return c
        });
        ea("Set", function(a) {
            if (function() {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({ x: 4 }),
                            d = new a(_.ha([c]));
                        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
                        var e = d.entries(),
                            f = e.next();
                        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                        f = e.next();
                        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                    } catch (g) { return !1 }
                }()) return a;
            var b = function(c) {
                this.g = new Map;
                if (c) {
                    c =
                        _.ha(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
                this.size = this.g.size
            };
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.g.set(c, c);
                this.size = this.g.size;
                return this
            };
            b.prototype.delete = function(c) {
                c = this.g.delete(c);
                this.size = this.g.size;
                return c
            };
            b.prototype.clear = function() {
                this.g.clear();
                this.size = 0
            };
            b.prototype.has = function(c) { return this.g.has(c) };
            b.prototype.entries = function() { return this.g.entries() };
            b.prototype.values = function() { return this.g.values() };
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.g.forEach(function(f) { return c.call(d, f, f, e) })
            };
            return b
        });

    } catch (e) { _._DumpException(e) }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var ta;
        _.sa = function(a, b) {
            b = (0, _.ra)(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        };
        ta = function(a) { return Array.prototype.concat.apply([], arguments) };
        _.ua = function(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] };
        _.va = function(a) { return a ? "[GSI_LOGGER-" + a + "]: " : "[GSI_LOGGER]: " };
        _.q = function(a, b) { try { _.wa.debug >= _.wa[_.xa] && window.console && window.console.log && window.console.log(_.va(b) + a) } catch (c) {} };
        _.t = function(a, b) { try { _.wa.warn >= _.wa[_.xa] && window.console && window.console.warn && window.console.warn(_.va(b) + a) } catch (c) {} };
        _.v = function(a, b) { try { _.wa.error >= _.wa[_.xa] && window.console && window.console.error && window.console.error(_.va(b) + a) } catch (c) {} };
        _.ya = _.ya || {};
        _.w = this || self;
        _.za = function() {};
        _.Aa = function(a) { var b = typeof a; return "object" == b && null != a || "function" == b };
        _.x = function(a, b) {
            a = a.split(".");
            var c = _.w;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
        _.z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ma = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Pc = function(d, e, f) { for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h]; return b.prototype[e].apply(d, g) }
        };
        _.ra = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
        _.Ba = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) };
        _.Ca = Array.prototype.map ? function(a, b) { return Array.prototype.map.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d };
        _.Ea = Array.prototype.some ? function(a, b) { return Array.prototype.some.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
        _.Fa = Array.prototype.every ? function(a, b) { return Array.prototype.every.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };
        var Ga = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
            Ha = function(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Ga.length; f++) c = Ga[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
        var Ja;
        _.Ia = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };
        _.Ka = function(a, b) {
            var c = 0;
            a = (0, _.Ia)(String(a)).split(".");
            b = (0, _.Ia)(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ja(0 == f[2].length, 0 == g[2].length) || Ja(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        };
        Ja = function(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
        var Na, La;
        _.A = function(a, b) { this.h = b === La ? a : "" };
        _.A.prototype.la = !0;
        _.A.prototype.ka = function() { return this.h.toString() };
        _.A.prototype.ub = !0;
        _.A.prototype.g = function() { return 1 };
        _.Ma = function(a) { return a instanceof _.A && a.constructor === _.A ? a.h : "type_error:SafeUrl" };
        Na = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.Oa = function(a) {
            if (a instanceof _.A) return a;
            a = "object" == typeof a && a.la ? a.ka() : String(a);
            Na.test(a) || (a = "about:invalid#zClosurez");
            return new _.A(a, La)
        };
        La = {};
        a: {
            var Qa = _.w.navigator;
            if (Qa) { var Ra = Qa.userAgent; if (Ra) { _.Pa = Ra; break a } }
            _.Pa = ""
        }
        _.B = function(a) { return -1 != _.Pa.indexOf(a) };
        var Sa;
        Sa = function() { return _.B("Firefox") || _.B("FxiOS") };
        _.Ua = function() { return _.B("Safari") && !(_.Ta() || _.B("Coast") || _.B("Opera") || _.B("Edge") || _.B("Edg/") || _.B("OPR") || Sa() || _.B("Silk") || _.B("Android")) };
        _.Ta = function() { return (_.B("Chrome") || _.B("CriOS")) && !_.B("Edge") };
        var Ya;
        _.Wa = function(a, b, c) {
            this.h = c === _.Va ? a : "";
            this.i = b
        };
        _.Wa.prototype.ub = !0;
        _.Wa.prototype.g = function() { return this.i };
        _.Wa.prototype.la = !0;
        _.Wa.prototype.ka = function() { return this.h.toString() };
        _.Xa = function(a) { return a instanceof _.Wa && a.constructor === _.Wa ? a.h : "type_error:SafeHtml" };
        _.Va = {};
        Ya = new _.Wa(_.w.trustedTypes && _.w.trustedTypes.emptyHTML || "", 0, _.Va);
        _.Za = function(a) {
            var b = !1,
                c;
            return function() { b || (c = a(), b = !0); return c }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Xa(Ya);
            return !b.parentElement
        });
        _.$a = String.prototype.repeat ? function(a, b) { return a.repeat(b) } : function(a, b) { return Array(b + 1).join(a) };
        var ab;
        ab = function() { return _.B("iPhone") && !_.B("iPod") && !_.B("iPad") };
        _.bb = function() { return ab() || _.B("iPad") || _.B("iPod") };
        var cb = function(a) { cb[" "](a); return a };
        cb[" "] = _.za;
        var eb = function(a, b) { var c = db; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
        var lb, mb, db, sb;
        _.fb = _.B("Opera");
        _.gb = _.B("Trident") || _.B("MSIE");
        _.hb = _.B("Edge");
        _.ib = _.B("Gecko") && !(-1 != _.Pa.toLowerCase().indexOf("webkit") && !_.B("Edge")) && !(_.B("Trident") || _.B("MSIE")) && !_.B("Edge");
        _.jb = -1 != _.Pa.toLowerCase().indexOf("webkit") && !_.B("Edge");
        _.kb = _.bb();
        lb = function() { var a = _.w.document; return a ? a.documentMode : void 0 };
        a: {
            var nb = "",
                ob = function() { var a = _.Pa; if (_.ib) return /rv:([^\);]+)(\)|;)/.exec(a); if (_.hb) return /Edge\/([\d\.]+)/.exec(a); if (_.gb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (_.jb) return /WebKit\/(\S+)/.exec(a); if (_.fb) return /(?:Version)[ \/]?(\S+)/.exec(a) }();ob && (nb = ob ? ob[1] : "");
            if (_.gb) { var pb = lb(); if (null != pb && pb > parseFloat(nb)) { mb = String(pb); break a } }
            mb = nb
        }
        _.qb = mb;
        db = {};
        _.rb = function(a) { return eb(a, function() { return 0 <= _.Ka(_.qb, a) }) };
        if (_.w.document && _.gb) {
            var tb = lb();
            sb = tb ? tb : parseInt(_.qb, 10) || void 0
        } else sb = void 0;
        var ub = sb;
        _.vb = Sa();
        _.wb = ab() || _.B("iPod");
        _.yb = _.B("iPad");
        _.zb = _.B("Android") && !(_.Ta() || Sa() || _.B("Opera") || _.B("Silk"));
        _.Ab = _.Ta();
        _.Bb = _.Ua() && !_.bb();
        var Cb;
        Cb = {};
        _.Db = null;
        _.Eb = function() {
            if (!_.Db) {
                _.Db = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Cb[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === _.Db[f] && (_.Db[f] = e)
                    }
                }
            }
        };
        _.C = function() {};
        _.Fb = "function" == typeof Uint8Array;
        _.E = function(a, b, c, d, e) {
            a.g = null;
            b || (b = []);
            a.o = void 0;
            a.i = -1;
            a.J = b;
            a: {
                var f = a.J.length;b = -1;
                if (f && (b = f - 1, f = a.J[b], !(null === f || "object" != typeof f || Array.isArray(f) || _.Fb && f instanceof Uint8Array))) {
                    a.j = b - a.i;
                    a.h = f;
                    break a
                } - 1 < c ? (a.j = Math.max(c, b + 1 - a.i), a.h = null) : a.j = Number.MAX_VALUE
            }
            a.m = {};
            if (d)
                for (c = 0; c < d.length; c++) b = d[c], b < a.j ? (b += a.i, a.J[b] = a.J[b] || _.Gb) : (_.Hb(a), a.h[b] = a.h[b] || _.Gb);
            if (e && e.length)
                for (c = 0; c < e.length; c++) _.Ib(a, e[c])
        };
        _.Gb = [];
        _.Hb = function(a) {
            var b = a.j + a.i;
            a.J[b] || (a.h = a.J[b] = {})
        };
        _.F = function(a, b) { if (b < a.j) { b += a.i; var c = a.J[b]; return c === _.Gb ? a.J[b] = [] : c } if (a.h) return c = a.h[b], c === _.Gb ? a.h[b] = [] : c };
        _.G = function(a, b, c) { b < a.j ? a.J[b + a.i] = c : (_.Hb(a), a.h[b] = c); return a };
        _.Ib = function(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                    g = _.F(a, f);
                null != g && (c = f, d = g, _.G(a, f, void 0))
            }
            return c ? (_.G(a, c, d), c) : 0
        };
        _.C.prototype.l = _.Fb ? function() {
            var a = Uint8Array.prototype.toJSON;
            Uint8Array.prototype.toJSON = function() {
                var b;
                void 0 === b && (b = 0);
                _.Eb();
                b = Cb[b];
                for (var c = [], d = 0; d < this.length; d += 3) {
                    var e = this[d],
                        f = d + 1 < this.length,
                        g = f ? this[d + 1] : 0,
                        h = d + 2 < this.length,
                        k = h ? this[d + 2] : 0,
                        n = e >> 2;
                    e = (e & 3) << 4 | g >> 4;
                    g = (g & 15) << 2 | k >> 6;
                    k &= 63;
                    h || (k = 64, f || (g = 64));
                    c.push(b[n], b[e], b[g] || "", b[k] || "")
                }
                return c.join("")
            };
            try { return JSON.stringify(this.J && this.J, Jb) } finally { Uint8Array.prototype.toJSON = a }
        } : function() {
            return JSON.stringify(this.J &&
                this.J, Jb)
        };
        var Jb = function(a, b) { return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b) };
        _.C.prototype.toString = function() { return this.J.toString() };
        _.wa = { debug: 0, info: 1, warn: 2, error: 3 };
        _.xa = "warn";
        for (var Kb = [], Lb = 0; 63 > Lb; Lb++) Kb[Lb] = 0;
        _.Mb = ta(128, Kb);
        _.Nb = function() {
            this.wa = this.wa;
            this.m = this.m
        };
        _.Nb.prototype.wa = !1;
        _.Nb.prototype.S = function() { this.wa || (this.wa = !0, this.X()) };
        _.Nb.prototype.X = function() {
            if (this.m)
                for (; this.m.length;) this.m.shift()()
        };
        _.Ob = function(a, b) {
            this.type = a;
            this.g = this.target = b;
            this.defaultPrevented = this.h = !1
        };
        _.Ob.prototype.stopPropagation = function() { this.h = !0 };
        _.Ob.prototype.preventDefault = function() { this.defaultPrevented = !0 };
        var Pb;
        (Pb = !_.gb) || (Pb = 9 <= Number(ub));
        var Qb = Pb,
            Rb = _.gb && !_.rb("9"),
            Tb = function() {
                if (!_.w.addEventListener || !Object.defineProperty) return !1;
                var a = !1,
                    b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
                try { _.w.addEventListener("test", _.za, b), _.w.removeEventListener("test", _.za, b) } catch (c) {}
                return a
            }();
        var Vb = function(a, b) {
            _.Ob.call(this, a ? a.type : "");
            this.relatedTarget = this.g = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.j = this.i = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.T = null;
            if (a) {
                var c = this.type = a.type,
                    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
                this.target = a.target || a.srcElement;
                this.g = b;
                if (b = a.relatedTarget) {
                    if (_.ib) {
                        a: {
                            try {
                                cb(b.nodeName);
                                var e = !0;
                                break a
                            } catch (f) {}
                            e = !1
                        }
                        e || (b = null)
                    }
                } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
                this.relatedTarget = b;
                d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.i = _.jb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.j = _.jb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX =
                    a.screenX || 0, this.screenY = a.screenY || 0);
                this.button = a.button;
                this.keyCode = a.keyCode || 0;
                this.key = a.key || "";
                this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
                this.ctrlKey = a.ctrlKey;
                this.altKey = a.altKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.pointerId = a.pointerId || 0;
                this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ub[a.pointerType] || "";
                this.state = a.state;
                this.T = a;
                a.defaultPrevented && this.preventDefault()
            }
        };
        _.z(Vb, _.Ob);
        var Ub = { 2: "touch", 3: "pen", 4: "mouse" };
        Vb.prototype.stopPropagation = function() {
            Vb.ma.stopPropagation.call(this);
            this.T.stopPropagation ? this.T.stopPropagation() : this.T.cancelBubble = !0
        };
        Vb.prototype.preventDefault = function() {
            Vb.ma.preventDefault.call(this);
            var a = this.T;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, Rb) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {}
        };
        Vb.prototype.Bc = function() { return this.T };
        var Wb, Yb;
        Wb = "closure_listenable_" + (1E6 * Math.random() | 0);
        _.Xb = function(a) { return !(!a || !a[Wb]) };
        Yb = 0;
        var Zb = function(a, b, c, d, e) {
                this.listener = a;
                this.g = null;
                this.src = b;
                this.type = c;
                this.capture = !!d;
                this.qa = e;
                this.key = ++Yb;
                this.ya = this.Ma = !1
            },
            $b = function(a) {
                a.ya = !0;
                a.listener = null;
                a.g = null;
                a.src = null;
                a.qa = null
            };
        var ac = function(a) {
                this.src = a;
                this.g = {};
                this.h = 0
            },
            cc;
        ac.prototype.add = function(a, b, c, d, e) {
            var f = a.toString();
            a = this.g[f];
            a || (a = this.g[f] = [], this.h++);
            var g = bc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ma = !1)) : (b = new Zb(b, this.src, f, !!d, e), b.Ma = c, a.push(b));
            return b
        };
        cc = function(a, b) {
            var c = b.type;
            if (!(c in a.g)) return !1;
            var d = _.sa(a.g[c], b);
            d && ($b(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
            return d
        };
        _.dc = function(a, b) {
            b = b && b.toString();
            var c = 0,
                d;
            for (d in a.g)
                if (!b || d == b) {
                    for (var e = a.g[d], f = 0; f < e.length; f++) ++c, $b(e[f]);
                    delete a.g[d];
                    a.h--
                }
        };
        ac.prototype.Fa = function(a, b, c, d) {
            a = this.g[a.toString()];
            var e = -1;
            a && (e = bc(a, b, c, d));
            return -1 < e ? a[e] : null
        };
        var bc = function(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.ya && f.listener == b && f.capture == !!c && f.qa == d) return e } return -1 };
        var ec, fc, gc, jc, lc, oc, mc, rc, qc, nc, sc;
        ec = "closure_lm_" + (1E6 * Math.random() | 0);
        fc = {};
        gc = 0;
        _.H = function(a, b, c, d, e) {
            if (d && d.once) return _.hc(a, b, c, d, e);
            if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) _.H(a, b[f], c, d, e); return null }
            c = _.ic(c);
            return _.Xb(a) ? a.I(b, c, _.Aa(d) ? !!d.capture : !!d, e) : jc(a, b, c, !1, d, e)
        };
        jc = function(a, b, c, d, e, f) {
            if (!b) throw Error("o");
            var g = _.Aa(e) ? !!e.capture : !!e,
                h = _.kc(a);
            h || (a[ec] = h = new ac(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = lc();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Tb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(mc(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("p");
            gc++;
            return c
        };
        lc = function() {
            var a = nc,
                b = Qb ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c };
            return b
        };
        _.hc = function(a, b, c, d, e) {
            if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) _.hc(a, b[f], c, d, e); return null }
            c = _.ic(c);
            return _.Xb(a) ? a.xb(b, c, _.Aa(d) ? !!d.capture : !!d, e) : jc(a, b, c, !0, d, e)
        };
        oc = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) oc(a, b[f], c, d, e);
            else d = _.Aa(d) ? !!d.capture : !!d, c = _.ic(c), _.Xb(a) ? a.na(b, c, d, e) : a && (a = _.kc(a)) && (b = a.Fa(b, c, d, e)) && _.pc(b)
        };
        _.pc = function(a) {
            if ("number" === typeof a || !a || a.ya) return !1;
            var b = a.src;
            if (_.Xb(b)) return cc(b.Z, a);
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            gc--;
            (c = _.kc(b)) ? (cc(c, a), 0 == c.h && (c.src = null, b[ec] = null)) : $b(a);
            return !0
        };
        mc = function(a) { return a in fc ? fc[a] : fc[a] = "on" + a };
        rc = function(a, b, c, d) {
            var e = !0;
            if (a = _.kc(a))
                if (b = a.g[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.ya && (f = qc(f, d), e = e && !1 !== f)
                    }
            return e
        };
        qc = function(a, b) {
            var c = a.listener,
                d = a.qa || a.src;
            a.Ma && _.pc(a);
            return c.call(d, b)
        };
        nc = function(a, b) {
            if (a.ya) return !0;
            if (!Qb) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = _.w, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) { b = null; break a }
                    b = c
                }
                d = b;
                b = new Vb(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try { d.keyCode = -1; break a } catch (g) { e = !0 }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.g; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.h && 0 <= e; e--) {
                        b.g = d[e];
                        var f = rc(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.h && e < d.length; e++) b.g = d[e],
                    f = rc(d[e], a, !1,
                        b),
                    c = c && f
                }
                return c
            }
            return qc(a, new Vb(b, this))
        };
        _.kc = function(a) { a = a[ec]; return a instanceof ac ? a : null };
        sc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        _.ic = function(a) {
            if ("function" === typeof a) return a;
            a[sc] || (a[sc] = function(b) { return a.handleEvent(b) });
            return a[sc]
        };
        _.tc = function() {
            _.Nb.call(this);
            this.Z = new ac(this);
            this.sa = this;
            this.B = null
        };
        _.z(_.tc, _.Nb);
        _.tc.prototype[Wb] = !0;
        _.l = _.tc.prototype;
        _.l.addEventListener = function(a, b, c, d) { _.H(this, a, b, c, d) };
        _.l.removeEventListener = function(a, b, c, d) { oc(this, a, b, c, d) };
        _.l.dispatchEvent = function(a) {
            var b, c = this.B;
            if (c)
                for (b = []; c; c = c.B) b.push(c);
            c = this.sa;
            var d = a.type || a;
            if ("string" === typeof a) a = new _.Ob(a, c);
            else if (a instanceof _.Ob) a.target = a.target || c;
            else {
                var e = a;
                a = new _.Ob(d, c);
                Ha(a, e)
            }
            e = !0;
            if (b)
                for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                    var g = a.g = b[f];
                    e = uc(g, d, !0, a) && e
                }
            a.h || (g = a.g = c, e = uc(g, d, !0, a) && e, a.h || (e = uc(g, d, !1, a) && e));
            if (b)
                for (f = 0; !a.h && f < b.length; f++) g = a.g = b[f], e = uc(g, d, !1, a) && e;
            return e
        };
        _.l.X = function() {
            _.tc.ma.X.call(this);
            this.Z && _.dc(this.Z, void 0);
            this.B = null
        };
        _.l.I = function(a, b, c, d) { return this.Z.add(String(a), b, !1, c, d) };
        _.l.xb = function(a, b, c, d) { return this.Z.add(String(a), b, !0, c, d) };
        _.l.na = function(a, b, c, d) {
            var e = this.Z;
            a = String(a).toString();
            if (a in e.g) {
                var f = e.g[a];
                b = bc(f, b, c, d); - 1 < b && ($b(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--))
            }
        };
        var uc = function(a, b, c, d) {
            b = a.Z.g[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.ya && g.capture == c) {
                    var h = g.listener,
                        k = g.qa || g.src;
                    g.Ma && cc(a.Z, g);
                    e = !1 !== h.call(k, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        _.tc.prototype.Fa = function(a, b, c, d) { return this.Z.Fa(String(a), b, c, d) };
        var vc = function() {};
        vc.prototype.g = null;
        var xc;
        xc = function() {};
        _.z(xc, vc);
        _.wc = new xc;
        _.yc = "StopIteration" in _.w ? _.w.StopIteration : { message: "StopIteration", stack: "" };
        _.zc = function() {};
        _.zc.prototype.next = function() { throw _.yc; };
        _.zc.prototype.Ka = function() { return this };
        _.Ac = function(a, b) {
            this.h = {};
            this.g = [];
            this.j = this.i = 0;
            var c = arguments.length;
            if (1 < c) { if (c % 2) throw Error("r"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a)
                if (a instanceof _.Ac)
                    for (c = a.ca(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        };
        _.Ac.prototype.$ = function() { Bc(this); for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]); return a };
        _.Ac.prototype.ca = function() { Bc(this); return this.g.concat() };
        var Bc = function(a) {
            if (a.i != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    Cc(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.i != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], Cc(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
        _.Ac.prototype.get = function(a, b) { return Cc(this.h, a) ? this.h[a] : b };
        _.Ac.prototype.set = function(a, b) {
            Cc(this.h, a) || (this.i++, this.g.push(a), this.j++);
            this.h[a] = b
        };
        _.Ac.prototype.forEach = function(a, b) {
            for (var c = this.ca(), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = this.get(e);
                a.call(b, f, e, this)
            }
        };
        _.Ac.prototype.Ka = function(a) {
            Bc(this);
            var b = 0,
                c = this.j,
                d = this,
                e = new _.zc;
            e.next = function() { if (c != d.j) throw Error("s"); if (b >= d.g.length) throw _.yc; var f = d.g[b++]; return a ? f : d.h[f] };
            return e
        };
        var Cc = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
        var Ec;
        _.Dc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        Ec = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
        var Kc, Mc, Uc, Nc, Pc, Oc, Sc, Qc, Vc, Yc;
        _.Fc = function(a, b) {
            this.g = this.o = this.h = "";
            this.s = null;
            this.l = this.i = "";
            this.m = !1;
            var c;
            a instanceof _.Fc ? (this.m = void 0 !== b ? b : a.m, _.Gc(this, a.h), this.o = a.o, this.g = a.g, _.Hc(this, a.s), this.i = a.i, _.Ic(this, Jc(a.j)), this.l = a.l) : a && (c = String(a).match(_.Dc)) ? (this.m = !!b, _.Gc(this, c[1] || "", !0), this.o = Kc(c[2] || ""), this.g = Kc(c[3] || "", !0), _.Hc(this, c[4]), this.i = Kc(c[5] || "", !0), _.Ic(this, c[6] || "", !0), this.l = Kc(c[7] || "")) : (this.m = !!b, this.j = new _.Lc(null, this.m))
        };
        _.Fc.prototype.toString = function() {
            var a = [],
                b = this.h;
            b && a.push(Mc(b, Nc, !0), ":");
            var c = this.g;
            if (c || "file" == b) a.push("//"), (b = this.o) && a.push(Mc(b, Nc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
            if (c = this.i) this.g && "/" != c.charAt(0) && a.push("/"), a.push(Mc(c, "/" == c.charAt(0) ? Oc : Pc, !0));
            (c = this.j.toString()) && a.push("?", c);
            (c = this.l) && a.push("#", Mc(c, Qc));
            return a.join("")
        };
        _.Fc.prototype.resolve = function(a) {
            var b = new _.Fc(this),
                c = !!a.h;
            c ? _.Gc(b, a.h) : c = !!a.o;
            c ? b.o = a.o : c = !!a.g;
            c ? b.g = a.g : c = null != a.s;
            var d = a.i;
            if (c) _.Hc(b, a.s);
            else if (c = !!a.i) {
                if ("/" != d.charAt(0))
                    if (this.g && !this.i) d = "/" + d;
                    else { var e = b.i.lastIndexOf("/"); - 1 != e && (d = b.i.substr(0, e + 1) + d) }
                e = d;
                if (".." == e || "." == e) d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                        var h = e[g++];
                        "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 ==
                            f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                    }
                    d = f.join("/")
                } else d = e
            }
            c ? b.i = d : c = "" !== a.j.toString();
            c ? _.Ic(b, Jc(a.j)) : c = !!a.l;
            c && (b.l = a.l);
            return b
        };
        _.Gc = function(a, b, c) {
            a.h = c ? Kc(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        };
        _.Hc = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("w`" + b);
                a.s = b
            } else a.s = null
        };
        _.Ic = function(a, b, c) { b instanceof _.Lc ? (a.j = b, Rc(a.j, a.m)) : (c || (b = Mc(b, Sc)), a.j = new _.Lc(b, a.m)) };
        _.Tc = function(a) { return a instanceof _.Fc ? new _.Fc(a) : new _.Fc(a, void 0) };
        Kc = function(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" };
        Mc = function(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Uc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null };
        Uc = function(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) };
        Nc = /[#\/\?@]/g;
        Pc = /[#\?:]/g;
        Oc = /[#\?]/g;
        Sc = /[#\?@]/g;
        Qc = /#/g;
        _.Lc = function(a, b) {
            this.h = this.g = null;
            this.i = a || null;
            this.j = !!b
        };
        Vc = function(a) { a.g || (a.g = new _.Ac, a.h = 0, a.i && Ec(a.i, function(b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c) })) };
        _.Lc.prototype.add = function(a, b) {
            Vc(this);
            this.i = null;
            a = Wc(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        };
        _.Xc = function(a, b) {
            Vc(a);
            b = Wc(a, b);
            Cc(a.g.h, b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, Cc(a.h, b) && (delete a.h[b], a.i--, a.j++, a.g.length > 2 * a.i && Bc(a)))
        };
        Yc = function(a, b) {
            Vc(a);
            b = Wc(a, b);
            return Cc(a.g.h, b)
        };
        _.l = _.Lc.prototype;
        _.l.forEach = function(a, b) {
            Vc(this);
            this.g.forEach(function(c, d) { _.Ba(c, function(e) { a.call(b, e, d, this) }, this) }, this)
        };
        _.l.ca = function() {
            Vc(this);
            for (var a = this.g.$(), b = this.g.ca(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.l.$ = function(a) {
            Vc(this);
            var b = [];
            if ("string" === typeof a) Yc(this, a) && (b = ta(b, this.g.get(Wc(this, a))));
            else { a = this.g.$(); for (var c = 0; c < a.length; c++) b = ta(b, a[c]) }
            return b
        };
        _.l.set = function(a, b) {
            Vc(this);
            this.i = null;
            a = Wc(this, a);
            Yc(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        };
        _.l.get = function(a, b) {
            if (!a) return b;
            a = this.$(a);
            return 0 < a.length ? String(a[0]) : b
        };
        _.Zc = function(a, b, c) {
            _.Xc(a, b);
            0 < c.length && (a.i = null, a.g.set(Wc(a, b), _.ua(c)), a.h += c.length)
        };
        _.Lc.prototype.toString = function() {
            if (this.i) return this.i;
            if (!this.g) return "";
            for (var a = [], b = this.g.ca(), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = encodeURIComponent(String(d));
                d = this.$(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                    a.push(g)
                }
            }
            return this.i = a.join("&")
        };
        var Jc = function(a) {
                var b = new _.Lc;
                b.i = a.i;
                a.g && (b.g = new _.Ac(a.g), b.h = a.h);
                return b
            },
            Wc = function(a, b) {
                b = String(b);
                a.j && (b = b.toLowerCase());
                return b
            },
            Rc = function(a, b) {
                b && !a.j && (Vc(a), a.i = null, a.g.forEach(function(c, d) {
                    var e = d.toLowerCase();
                    d != e && (_.Xc(this, d), _.Zc(this, e, c))
                }, a));
                a.j = b
            };
        _.$c = window;

    } catch (e) { _._DumpException(e) }
    try {
        var bd, cd, dd, gd, hd, id, jd, kd, ld, md, nd, pd, qd;
        _.ad = function(a) {
            if (!a.startsWith(")]}'\n")) throw console.error("malformed JSON response:", a), Error("A");
            a = a.substr(5);
            return _.w.JSON.parse(a)
        };
        bd = function(a) { return a };
        dd = {};
        _.ed = function(a, b) { this.h = b === dd ? a : "" };
        _.ed.prototype.la = !0;
        _.ed.prototype.ka = function() { return this.h.toString() };
        _.ed.prototype.ub = !0;
        _.ed.prototype.g = function() { return 1 };
        _.fd = function(a) { return a instanceof _.ed && a.constructor === _.ed ? a.h : "type_error:TrustedResourceUrl" };
        gd = /&/g;
        hd = /</g;
        id = />/g;
        jd = /"/g;
        kd = /'/g;
        ld = /\x00/g;
        md = /[\x00&<>"']/;
        nd = function(a, b) {
            if (b) a = a.replace(gd, "&amp;").replace(hd, "&lt;").replace(id, "&gt;").replace(jd, "&quot;").replace(kd, "&#39;").replace(ld, "&#0;");
            else { if (!md.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(gd, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(hd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(id, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(jd, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(kd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ld, "&#0;")) }
            return a
        };
        pd = function(a, b) {
            if (void 0 === cd) {
                var c = null;
                var d = _.w.trustedTypes;
                if (d && d.createPolicy) {
                    try { c = d.createPolicy("goog#html", { createHTML: bd, createScript: bd, createScriptURL: bd }) } catch (e) { _.w.console && _.w.console.error(e.message) }
                    cd = c
                } else cd = c
            }
            a = (c = cd) ? c.createHTML(a) : a;
            return new _.Wa(a, b, _.Va)
        };
        qd = function(a) {
            if (a instanceof _.Wa) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.ub && (c = a.g());
            return pd(nd(b && a.la ? a.ka() : String(a)), c)
        };
        _.I = function(a, b) { a = _.F(a, b); return null == a ? a : !!a };
        _.J = function(a, b, c) {
            a.g || (a.g = {});
            if (!a.g[c]) {
                var d = _.F(a, c);
                d && (a.g[c] = new b(d))
            }
            return a.g[c]
        };
        _.rd = function(a) { _.E(this, a, -1, null, null) };
        _.z(_.rd, _.C);
        _.sd = function() {};
        _.sd.prototype.Ya = function(a) {
            var b = this;
            this.V && window.setTimeout(function() { b.V(a) }, 100)
        };
        _.td = function(a, b, c) {
            void 0 != c && (b.detail = c);
            a.Ya(b)
        };
        _.ud = function(a, b, c) { _.td(a, { timestamp: (new Date).getTime(), type: "ui_change", uiActivityType: b }, c) };
        _.vd = function(a, b, c) { _.td(a, { timestamp: (new Date).getTime(), type: "error", errorType: b }, c) };
        var wd;
        _.xd = function(a) {
            wd.g[a] = !0;
            _.q("Experiment " + a + " turned on.")
        };
        _.K = function(a) { return !!wd.g[a] };
        wd = new function() { this.g = {} };
        _.yd = function() {
            var a = this;
            this.h = this.i = null;
            this.g = new Promise(function(b, c) {
                a.i = b;
                a.h = c
            })
        };
        _.yd.prototype.resolve = function(a) {
            if (!this.i) throw Error("z");
            this.i(a);
            this.S()
        };
        _.yd.prototype.reject = function(a) {
            if (!this.h) throw Error("z");
            this.h(a);
            this.S()
        };
        _.yd.prototype.S = function() { this.h = this.i = null };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var zd, Cd;
        zd = {};
        _.Ad = {};
        _.Bd = {};
        Cd = function() { throw Error("B"); };
        Cd.prototype.Pa = null;
        Cd.prototype.toString = function() { return this.content };
        var Dd = function() { Cd.call(this) };
        _.z(Dd, Cd);
        Dd.prototype.va = zd;
        _.Ed = function(a, b) { return null != a && a.va === b };
        var Fd, Gd, Sd, Td, Ud, Vd, Od, Kd, Ld;
        Fd = function(a) {
            if (null != a) switch (a.Pa) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        };
        _.M = function(a) { return _.Ed(a, zd) ? a : a instanceof _.Wa ? (0, _.L)(_.Xa(a).toString(), a.g()) : (0, _.L)(Gd(String(a)), Fd(a)) };
        _.L = function(a) {
            function b(c) { this.content = c }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Pa = d);
                return c
            }
        }(Dd);
        _.Hd = function(a, b) { return a && b && a.Ec && b.Ec ? a.va !== b.va ? !1 : a.toString() === b.toString() : a instanceof Cd && b instanceof Cd ? a.va != b.va ? !1 : a.toString() == b.toString() : a == b };
        _.Id = function(a) { return a instanceof Cd ? !!a.content : !!a };
        _.Jd = function(a) {
            function b(c) { this.content = c }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.Pa = d);
                return c
            }
        }(Dd);
        _.N = function(a) { _.Ed(a, zd) ? (a = String(a.content).replace(Kd, "").replace(Ld, "&lt;"), a = _.Md(a)) : a = Gd(a); return a };
        _.Rd = function(a) { _.Ed(a, _.Ad) || _.Ed(a, _.Bd) ? a = _.Nd(a) : a instanceof _.A ? a = _.Nd(_.Ma(a)) : a instanceof _.ed ? a = _.Nd(_.fd(a).toString()) : (a = String(a), a = Od.test(a) ? a.replace(_.Pd, _.Qd) : "about:invalid#zSoyz"); return a };
        Gd = function(a) { a = String(a); return a = nd(a, void 0) };
        Sd = { "\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };
        Td = function(a) { return Sd[a] };
        Ud = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
        _.Qd = function(a) { return Ud[a] };
        Vd = /[\x00\x22\x27\x3c\x3e]/g;
        _.Pd = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
        Od = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
        _.Md = function(a) { return String(a).replace(Vd, Td) };
        _.Nd = function(a) { return String(a).replace(_.Pd, _.Qd) };
        Kd = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
        Ld = /</g;
        var Wd;
        _.Xd = function(a, b, c, d) {
            b = b(c || Wd, d);
            if (_.Aa(b))
                if (b instanceof Cd) {
                    if (b.va !== zd) throw Error("C");
                    b = pd(b.toString(), b.Pa || null)
                } else b = qd("zSoyz");
            else b = qd(String(b));
            if ((0, _.Za)())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = _.Xa(b)
        };
        Wd = {};
        _.Yd = function(a) { a = a || {}; return (0, _.L)((a.rb ? '<svg class="' + _.N("Bz112c") + " " + _.N("Bz112c-E3DyYd") + " " + _.N("Bz112c-uaxL4e") + '" aria-hidden=true viewBox="0 0 192 192">' : '<svg class="' + _.N("fFW7wc-ibnC6b-HiaYvf") + " " + _.N("zTETae-mzNpsf-Bz112c") + " " + _.N("n1UuX-DkfjY") + '" aria-hidden=true viewBox="0 0 192 192">') + '<path fill="#3185FF" d="M96 8C47.42 8 8 47.42 8 96s39.42 88 88 88 88-39.42 88-88S144.58 8 96 8z"/><path fill="#FFFFFF" d="M96 86c12.17 0 22-9.83 22-22s-9.83-22-22-22-22 9.83-22 22 9.83 22 22 22zM96 99c-26.89 0-48 13-48 25 10.17 15.64 27.97 26 48 26s37.83-10.36 48-26c0-12-21.11-25-48-25z"/></svg>') };
        _.Zd = function(a) { return { id: _.F(a, 1), givenName: _.F(a, 4), displayName: _.F(a, 3), profilePicture: _.F(a, 6) } };

        _.xd("cancelable_auto_select");

        _.xd("enable_inline_button");

    } catch (e) { _._DumpException(e) }
    try {
        var Ng, Tg, Ug;
        _.Og = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            if (b && 2 === b.Yb()) {
                c = void 0 === c ? !0 : c;
                var d = {};
                b && (d = { Ta: b.Ab(), shape: b.Ua(), size: b.Bb(), text: b.Va(), theme: b.Wa(), width: b.Xa(), ja: c });
                _.Xd(a, Lg, d)
            } else b && 2 === _.F(b, 10) && !_.K("disable_personalized_button") ? (c = void 0 === c ? !0 : c, b && null != _.F(b, 8) ? (d = {}, b && (d = { shape: b.Ua(), text: b.Va(), theme: b.Wa(), width: b.Xa(), Jc: _.Zd(_.J(b, _.rd, 8)), Kc: b.Xb(), ja: c }), _.Xd(a, Mg, d)) : Ng(a, b, c)) : Ng(a, b, c)
        };
        Ng = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {};
            b && (d = { Ta: b.Ab(), shape: b.Ua(), size: b.Bb(), text: b.Va(), theme: b.Wa(), width: b.Xa(), ja: c });
            _.Xd(a, Pg, d)
        };
        _.Sg = function() { return ![_.Ta() && !_.Qg() && !Rg(), _.Ta() && _.B("Android"), _.B("Edge")].some(function(a) { return a }) };
        Tg = {};
        Ug = function(a, b) { this.g = b === Tg ? a : "" };
        Ug.prototype.la = !0;
        Ug.prototype.ka = function() { return this.g };
        var Vg = {},
            Wg = function(a, b) {
                this.g = b === Vg ? a : "";
                this.la = !0
            };
        Wg.prototype.ka = function() { return this.g };
        _.Xg = function(a) { _.E(this, a, -1, null, null) };
        _.z(_.Xg, _.C);
        _.l = _.Xg.prototype;
        _.l.Bb = function() { return _.F(this, 1) };
        _.l.Wa = function() { return _.F(this, 2) };
        _.l.Ua = function() { return _.F(this, 3) };
        _.l.Xa = function() { return _.F(this, 4) };
        _.l.Va = function() { return _.F(this, 5) };
        _.l.Ab = function() { return _.F(this, 6) };
        _.l.Yb = function() { return _.F(this, 7) };
        _.l.Xb = function() { return _.F(this, 9) };
        var Yg = {},
            Zg = function(a) { return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>") },
            $g = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
            ah = function(a) {
                _.Ed(a, Yg) ? a = Zg(a.content) : null == a ? a = "" : a instanceof Ug ? a = Zg(a instanceof Ug && a.constructor === Ug ? a.g : "type_error:SafeStyle") : a instanceof Wg ? a = Zg(a instanceof Wg && a.constructor === Wg ? a.g : "type_error:SafeStyleSheet") :
                    (a = String(a), a = $g.test(a) ? a : "zSoyz");
                return a
            },
            bh = function() { return (0, _.L)('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="' + _.N("LgbsSe-Bz112c") + '"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>') };
        var gh = function(a) {
                a = a || {};
                var b = a.Ta,
                    c = a.size,
                    d = a.theme,
                    e = a.shape,
                    f = a.text,
                    g = a.width,
                    h = a.label,
                    k = a.ja;
                void 0 === k && (k = !0);
                a = a.icon;
                void 0 === a && (a = !1);
                h = h ? _.M(h) : f && 1 != f ? _.M(ch({ text: f })) : _.M(ch({ text: 2 }));
                var n = _.L;
                k = "<div" + (k ? ' tabindex="0"' : "") + ' role="button" aria-labelledby="button-label" class="' + _.N("nsm7Bb-HzV7m-LgbsSe") + " " + (a ? _.N("Bz112c-LgbsSe") : "") + " ";
                c = c = { size: c };
                var m = "";
                switch (c.size) {
                    case 2:
                        m += "pSzOP-SxQuSe";
                        break;
                    case 3:
                        m += "purZT-SxQuSe";
                        break;
                    default:
                        m += "hJDwNd-SxQuSe"
                }
                return n(k +
                    _.N(m) + " " + _.N(dh({ theme: d })) + " " + _.N(eh({ shape: e })) + '"' + (_.Id(g) && !a ? ' style="width:' + _.N(ah(g)) + 'px; max-width:400px; min-width:min-content;"' : "") + '><div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-MJoBVe") + '"></div><div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb") + " " + (_.Hd(b, 2) ? _.N("oXtfBe-l4eHX") : "") + '">' + fh({ ec: _.Hd(d, 2) || _.Hd(d, 3) }) + (a ? "" : '<span class="' + _.N("nsm7Bb-HzV7m-LgbsSe-BPrWId") + '">' + _.M(ch({ text: f })) + "</span>") + '<span class="' + _.N("L6cTce") + '" id="button-label">' + h + "</span></div></div>")
            },
            dh = function(a) {
                a = a || {};
                var b = "";
                switch (a.theme) {
                    case 2:
                        b += "MFS4be-v3pZbf-Ia7Qfc MFS4be-Ia7Qfc";
                        break;
                    case 3:
                        b += "MFS4be-JaPV2b-Ia7Qfc MFS4be-Ia7Qfc";
                        break;
                    default:
                        b += "i5vt6e-Ia7Qfc"
                }
                return b
            },
            eh = function(a) {
                a = a || {};
                var b = "";
                switch (a.shape) {
                    case 2:
                        b += "JGcpL-RbRzK";
                        break;
                    case 4:
                        b += "JGcpL-RbRzK";
                        break;
                    default:
                        b += "uaxL4e-RbRzK"
                }
                return b
            },
            ch = function(a) {
                a = a || {};
                var b = "";
                switch (a.text) {
                    case 1:
                        b += "Fazer login";
                        break;
                    case 3:
                        b += "Inscrever-se no Google";
                        break;
                    case 4:
                        b += "Continuar com o Google";
                        break;
                    default:
                        b +=
                            "Fazer login com o Google"
                }
                return b
            },
            fh = function(a) {
                a = a || {};
                a = a.ec;
                void 0 === a && (a = !1);
                return (0, _.L)(a ? '<div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf") + '"><div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-Bz112c") + '">' + bh() + "</div></div>" : '<div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-Bz112c") + '">' + bh() + "</div>")
            };
        var Pg = function(a) {
                a = a || {};
                var b = a.Ta,
                    c = a.shape,
                    d = a.size,
                    e = a.text,
                    f = a.theme,
                    g = a.width;
                a = a.ja;
                void 0 === a && (a = !0);
                return (0, _.L)(gh({ Ta: b, shape: c, size: d, text: e, theme: f, width: g, ja: a }))
            },
            Lg = function(a) {
                a = a || {};
                var b = a.shape,
                    c = a.size,
                    d = a.text,
                    e = a.theme;
                a = a.ja;
                void 0 === a && (a = !0);
                return (0, _.L)(gh({ icon: !0, shape: b, size: c, text: d, theme: e, ja: a }))
            },
            Mg = function(a) {
                var b = a.Jc,
                    c = a.Kc,
                    d = a.shape,
                    e = a.text,
                    f = a.theme,
                    g = a.width,
                    h = a.ja;
                void 0 === h && (h = !0);
                a = _.L;
                var k = h;
                void 0 === k && (k = !0);
                h = b.Cc ? b.Cc : b.displayName;
                d = "<div" +
                    (k ? ' tabindex="0"' : "") + ' role="button" aria-labelledby="button-label" class="' + _.N("nsm7Bb-HzV7m-LgbsSe") + " " + _.N("jVeSEe") + " " + _.N(dh({ theme: f })) + " " + _.N(eh({ shape: d })) + '" style="max-width:400px; min-width:200px;' + (g ? "width:" + _.N(ah(g)) + "px;" : "") + '"><div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-MJoBVe") + '"></div><div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb") + '">';
                b.profilePicture ? (d += '<img class="' + _.N("n1UuX-DkfjY") + '" src="' + _.N(_.Rd(b.profilePicture)) + '" alt="', g = "Imagem do perfil de " + _.N(h ?
                    h : b.id), d += _.Md(g), d += '">') : d += _.Yd(null);
                g = '<div class="' + _.N("nsm7Bb-HzV7m-LgbsSe-BPrWId") + '"><div class="' + _.N("ssJRIf") + '">';
                h = h = { displayName: h, text: e };
                e = h.text;
                h = h.displayName;
                k = "";
                if (h) switch (e) {
                    case 4:
                        k += "Continuar como " + h;
                        break;
                    default:
                        k += "Fazer login como " + h
                } else k += ch({ text: e });
                d += g + _.M(k) + '</div><div class="' + _.N("K4efff") + '"><div class="' + _.N("fmcmS") + '">' + _.M(b.id) + "</div>" + (1 < c ? (0, _.L)('<svg class="' + _.N("Bz112c") + " " + _.N("Bz112c-E3DyYd") + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>') :
                    "") + "</div></div>" + fh({ ec: _.Hd(f, 2) || _.Hd(f, 3) }) + "</div></div>";
                b = (0, _.L)(d);
                return a(b)
            };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Rg;
        _.Qg = function() { return !Rg() && (_.B("iPod") || _.B("iPhone") || _.B("Android") || _.B("IEMobile")) };
        Rg = function() { return _.B("iPad") || _.B("Android") && !_.B("Mobile") || _.B("Silk") };

    } catch (e) { _._DumpException(e) }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var ae, ke, le, me, $d, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, Ee, Fe, Ge, he, Re, Ue, $e;
        ae = function(a) {
            a: {
                var b = $d;
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        };
        _.be = function(a) { _.xa = void 0 === a ? "warn" : a };
        _.ce = function(a) {
            switch (_.F(a, 1)) {
                case 1:
                    _.v("The specified user is not signed in.");
                    break;
                case 2:
                    _.v("User has opted out of using Google Sign In.");
                    break;
                case 3:
                    _.v("The given client ID is not found.");
                    break;
                case 4:
                    _.v("The given client ID is not allowed to use Google Sign In.");
                    break;
                case 5:
                    _.v("The given origin is not allowed for the given client ID.");
                    break;
                case 6:
                    _.v("Request from the same origin is expected.");
                    break;
                case 7:
                    _.v("Google Sign In is only allowed with HTTPS.");
                    break;
                case 8:
                    _.v("Parameter " +
                        _.F(a, 2) + " is not set correctly.");
                    break;
                case 9:
                    _.v("The browser is not supported.");
                    break;
                case 12:
                    _.v("Google Sign In does not support web view.");
                    break;
                case 14:
                    _.v("The client is restricted to accounts within its organization.");
                    break;
                default:
                    _.v("An unknown error occurred.")
            }
        };
        _.de = function(a) {
            var b = {};
            if (a)
                for (var c = _.ha(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== a[d] && "" !== a[d] && (b[d] = a[d]);
            return b
        };
        _.fe = function(a, b) {
            a = new _.Fc(a);
            b && _.Ic(a, _.ee(_.de(b)));
            return a.toString()
        };
        _.ie = function(a) {
            var b = new ge;
            b.update(a, a.length);
            return he(b.digest())
        };
        _.je = function(a, b) {
            var c = document.createElement("form");
            document.body.appendChild(c);
            c.method = "post";
            a = a instanceof _.A ? a : _.Oa(a);
            c.action = _.Ma(a);
            if (b) {
                a = Object.keys(b);
                for (var d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = document.createElement("input");
                    f.type = "hidden";
                    f.name = e;
                    f.value = b[e].toString();
                    c.appendChild(f)
                }
            }
            c.submit()
        };
        ke = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        };
        le = function(a, b, c) { return a.call.apply(a.bind, arguments) };
        me = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() { return a.apply(b, arguments) }
        };
        _.ne = function(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.ne = le : _.ne = me; return _.ne.apply(null, arguments) };
        $d = function(a) { return "content-type" == a.toLowerCase() };
        oe = function(a) { if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.h = d } catch (e) {} } throw Error("q"); } return a.h };
        pe = function(a) {
            var b;
            (b = a.g) || (b = {}, oe(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
            return b
        };
        qe = function(a) { return (a = oe(a)) ? new ActiveXObject(a) : new XMLHttpRequest };
        re = function(a) {
            if (a.$ && "function" == typeof a.$) return a.$();
            if ("string" === typeof a) return a.split("");
            if (ke(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        };
        se = function(a) {
            if (a.ca && "function" == typeof a.ca) return a.ca();
            if (!a.$ || "function" != typeof a.$) {
                if (ke(a) || "string" === typeof a) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                b = [];
                c = 0;
                for (var d in a) b[c++] = d;
                return b
            }
        };
        te = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (ke(a) || "string" === typeof a) _.Ba(a, b, void 0);
            else
                for (var c = se(a), d = re(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        };
        ue = function(a, b, c) {
            if ("function" === typeof a) c && (a = (0, _.ne)(a, c));
            else if (a && "function" == typeof a.handleEvent) a = (0, _.ne)(a.handleEvent, a);
            else throw Error("u");
            return 2147483647 < Number(b) ? -1 : _.w.setTimeout(a, b || 0)
        };
        ve = /^https?$/i;
        we = ["POST", "PUT"];
        xe = [];
        ye = function(a) {
            a.A && a.Fb && (a.A.ontimeout = null);
            a.$a && (_.w.clearTimeout(a.$a), a.$a = null)
        };
        ze = function(a) { return _.gb && _.rb(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout };
        Ae = function(a) { a.qb || (a.qb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")) };
        Be = function(a, b) {
            if (a.A) {
                ye(a);
                var c = a.A,
                    d = a.fb[0] ? _.za : null;
                a.A = null;
                a.fb = null;
                b || a.dispatchEvent("ready");
                try { c.onreadystatechange = d } catch (e) {}
            }
        };
        Ce = function(a) { return a.A ? a.A.readyState : 0 };
        _.De = function(a) {
            var b = a.Ra();
            a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    var c = !0;
                    break a;
                default:
                    c = !1
            }
            if (!c) {
                if (b = 0 === b) a = String(a.wb).match(_.Dc)[1] || null, !a && _.w.self && _.w.self.location && (a = _.w.self.location.protocol, a = a.substr(0, a.length - 1)), b = !ve.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        };
        Ee = function(a) {
            if (a.ia && "undefined" != typeof _.ya && (!a.fb[1] || 4 != Ce(a) || 2 != a.Ra()))
                if (a.Sa && 4 == Ce(a)) ue(a.Wb, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Ce(a)) { a.ia = !1; try { _.De(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : Ae(a) } finally { Be(a) } }
        };
        Fe = function(a, b) { return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total } };
        Ge = function(a) {
            _.tc.call(this);
            this.headers = new _.Ac;
            this.gb = a || null;
            this.ia = !1;
            this.fb = this.A = null;
            this.wb = "";
            this.ra = this.vb = this.Sa = this.qb = !1;
            this.ab = 0;
            this.$a = null;
            this.$b = "";
            this.Fb = this.Hc = this.Ia = !1
        };
        _.z(Ge, _.tc);
        _.l = Ge.prototype;
        _.l.vc = function() {
            this.S();
            _.sa(xe, this)
        };
        _.l.send = function(a, b, c, d) {
            if (this.A) throw Error("v`" + this.wb + "`" + a);
            b = b ? b.toUpperCase() : "GET";
            this.wb = a;
            this.qb = !1;
            this.ia = !0;
            this.A = this.gb ? qe(this.gb) : qe(_.wc);
            this.fb = this.gb ? pe(this.gb) : pe(_.wc);
            this.A.onreadystatechange = (0, _.ne)(this.Wb, this);
            this.Hc && "onprogress" in this.A && (this.A.onprogress = (0, _.ne)(function(f) { this.Vb(f, !0) }, this), this.A.upload && (this.A.upload.onprogress = (0, _.ne)(this.Vb, this)));
            try { this.vb = !0, this.A.open(b, String(a), !0), this.vb = !1 } catch (f) { this.Y(5, f); return }
            a = c || "";
            var e =
                new _.Ac(this.headers);
            d && te(d, function(f, g) { e.set(g, f) });
            d = ae(e.ca());
            c = _.w.FormData && a instanceof _.w.FormData;
            !(0 <= (0, _.ra)(we, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            e.forEach(function(f, g) { this.A.setRequestHeader(g, f) }, this);
            this.$b && (this.A.responseType = this.$b);
            "withCredentials" in this.A && this.A.withCredentials !== this.Ia && (this.A.withCredentials = this.Ia);
            try {
                ye(this), 0 < this.ab && ((this.Fb = ze(this.A)) ? (this.A.timeout = this.ab, this.A.ontimeout = (0, _.ne)(this.bc,
                    this)) : this.$a = ue(this.bc, this.ab, this)), this.Sa = !0, this.A.send(a), this.Sa = !1
            } catch (f) { this.Y(5, f) }
        };
        _.l.bc = function() { "undefined" != typeof _.ya && this.A && (this.dispatchEvent("timeout"), this.abort(8)) };
        _.l.Y = function() {
            this.ia = !1;
            this.A && (this.ra = !0, this.A.abort(), this.ra = !1);
            Ae(this);
            Be(this)
        };
        _.l.abort = function() { this.A && this.ia && (this.ia = !1, this.ra = !0, this.A.abort(), this.ra = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Be(this)) };
        _.l.X = function() {
            this.A && (this.ia && (this.ia = !1, this.ra = !0, this.A.abort(), this.ra = !1), Be(this, !0));
            Ge.ma.X.call(this)
        };
        _.l.Wb = function() { this.wa || (this.vb || this.Sa || this.ra ? Ee(this) : this.Gc()) };
        _.l.Gc = function() { Ee(this) };
        _.l.Vb = function(a, b) {
            this.dispatchEvent(Fe(a, "progress"));
            this.dispatchEvent(Fe(a, b ? "downloadprogress" : "uploadprogress"))
        };
        _.l.Ra = function() { try { return 2 < Ce(this) ? this.A.status : -1 } catch (a) { return -1 } };
        _.l.getResponseHeader = function(a) { if (this.A && 4 == Ce(this)) return a = this.A.getResponseHeader(a), null === a ? void 0 : a };
        _.l.getAllResponseHeaders = function() { return this.A && 4 == Ce(this) ? this.A.getAllResponseHeaders() || "" : "" };
        _.He = function(a) { try { return a.A ? a.A.responseText : "" } catch (b) { return "" } };
        _.O = function(a, b) {
            a.prototype = (0, _.ia)(b.prototype);
            a.prototype.constructor = a;
            if (_.na)(0, _.na)(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ma = b.prototype
        };
        he = function(a) { return _.Ca(a, function(b) { b = b.toString(16); return 1 < b.length ? b : "0" + b }).join("") };
        _.Ie = function(a, b, c) { for (var d in a) b.call(c, a[d], d, a) };
        _.Je = function(a, b) {
            b = b instanceof _.A ? b : _.Oa(b);
            a.assign(_.Ma(b))
        };
        _.Ke = function(a) { _.E(this, a, -1, null, null) };
        _.z(_.Ke, _.C);
        var Le = function() { this.h = -1 },
            Me, Ne = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
                3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
            ],
            Oe = function(a, b) {
                this.h = 64;
                this.j = _.w.Uint8Array ? new Uint8Array(this.h) : Array(this.h);
                this.l = this.i = 0;
                this.g = [];
                this.o = a;
                this.m = b;
                this.s = _.w.Int32Array ? new Int32Array(64) : Array(64);
                void 0 === Me && (_.w.Int32Array ? Me = new Int32Array(Ne) : Me = Ne);
                this.reset()
            };
        _.z(Oe, Le);
        Oe.prototype.reset = function() {
            this.l = this.i = 0;
            this.g = _.w.Int32Array ? new Int32Array(this.m) : _.ua(this.m)
        };
        var Pe = function(a) {
            for (var b = a.j, c = a.s, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
            for (b = 16; 64 > b; b++) {
                e = c[b - 15] | 0;
                d = c[b - 2] | 0;
                var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                    g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
                c[b] = f + g | 0
            }
            d = a.g[0] | 0;
            e = a.g[1] | 0;
            var h = a.g[2] | 0,
                k = a.g[3] | 0,
                n = a.g[4] | 0,
                m = a.g[5] | 0,
                p = a.g[6] | 0;
            f = a.g[7] | 0;
            for (b = 0; 64 > b; b++) {
                var u = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
                g = n & m ^ ~n & p;
                f = f + ((n >>> 6 | n << 26) ^ (n >>> 11 | n << 21) ^ (n >>>
                    25 | n << 7)) | 0;
                g = g + (Me[b] | 0) | 0;
                g = f + (g + (c[b] | 0) | 0) | 0;
                f = p;
                p = m;
                m = n;
                n = k + g | 0;
                k = h;
                h = e;
                e = d;
                d = g + u | 0
            }
            a.g[0] = a.g[0] + d | 0;
            a.g[1] = a.g[1] + e | 0;
            a.g[2] = a.g[2] + h | 0;
            a.g[3] = a.g[3] + k | 0;
            a.g[4] = a.g[4] + n | 0;
            a.g[5] = a.g[5] + m | 0;
            a.g[6] = a.g[6] + p | 0;
            a.g[7] = a.g[7] + f | 0
        };
        Oe.prototype.update = function(a, b) {
            void 0 === b && (b = a.length);
            var c = 0,
                d = this.i;
            if ("string" === typeof a)
                for (; c < b;) this.j[d++] = a.charCodeAt(c++), d == this.h && (Pe(this), d = 0);
            else if (ke(a))
                for (; c < b;) {
                    var e = a[c++];
                    if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("m");
                    this.j[d++] = e;
                    d == this.h && (Pe(this), d = 0)
                } else throw Error("n");
            this.i = d;
            this.l += b
        };
        Oe.prototype.digest = function() {
            var a = [],
                b = 8 * this.l;
            56 > this.i ? this.update(_.Mb, 56 - this.i) : this.update(_.Mb, this.h - (this.i - 56));
            for (var c = 63; 56 <= c; c--) this.j[c] = b & 255, b /= 256;
            Pe(this);
            for (c = b = 0; c < this.o; c++)
                for (var d = 24; 0 <= d; d -= 8) a[b++] = this.g[c] >> d & 255;
            return a
        };
        var Qe = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            ge = function() { Oe.call(this, 8, Qe) };
        _.z(ge, Oe);
        _.Q = function(a) { var b = document; return "string" === typeof a ? b.getElementById(a) : a };
        Re = function(a, b, c) {
            var d;
            a = c || a;
            if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
            if (b && a.getElementsByClassName) { var e = a.getElementsByClassName(b); return e }
            e = a.getElementsByTagName("*");
            if (b) {
                var f = {};
                for (c = d = 0; a = e[c]; c++) {
                    var g = a.className,
                        h;
                    if (h = "function" == typeof g.split) h = 0 <= (0, _.ra)(g.split(/\s+/), b);
                    h && (f[d++] = a)
                }
                f.length = d;
                return f
            }
            return e
        };
        _.Se = function(a, b) { var c = b || document; return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Re(document, a, b) };
        _.Te = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Re(c, a, b)[0] || null
            }
            return a || null
        };
        Ue = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
        _.Ve = function(a, b) { _.Ie(b, function(c, d) { c && "object" == typeof c && c.la && (c = c.ka()); "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ue.hasOwnProperty(d) ? a.setAttribute(Ue[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c }) };
        _.We = function(a) { for (var b; b = a.firstChild;) a.removeChild(b) };
        _.Xe = function(a, b) {
            if (a)
                if (_.Xb(a)) a.Z && _.dc(a.Z, b);
                else if (a = _.kc(a)) {
                var c = 0;
                b = b && b.toString();
                for (var d in a.g)
                    if (!b || d == b)
                        for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) _.pc(e[f]) && ++c
            }
        };
        _.Ye = function(a, b, c, d, e, f, g) {
            var h = new Ge;
            xe.push(h);
            b && h.I("complete", b);
            h.xb("ready", h.vc);
            f && (h.ab = Math.max(0, f));
            g && (h.Ia = g);
            h.send(a, c, d, e)
        };
        _.ee = function(a) {
            var b = se(a);
            if ("undefined" == typeof b) throw Error("y");
            var c = new _.Lc(null, void 0);
            a = re(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                Array.isArray(f) ? _.Zc(c, e, f) : c.add(e, f)
            }
            return c
        };
        _.Ze = function(a) { this.g = a || { cookie: "" } };
        _.Ze.prototype.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.Uc;
                d = c.Vc || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.yb
            }
            if (/[;=\s]/.test(a)) throw Error("D`" + a);
            if (/[;\r\n]/.test(b)) throw Error("E`" + b);
            void 0 === h && (h = -1);
            this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        };
        _.Ze.prototype.get = function(a, b) { for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) { f = (0, _.Ia)(d[e]); if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length); if (f == a) return "" } return b };
        _.Ze.prototype.ca = function() { return $e(this).keys };
        _.Ze.prototype.$ = function() { return $e(this).values };
        $e = function(a) { a = (a.g.cookie || "").split(";"); for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.Ia)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1))); return { keys: b, values: c } };
        _.af = new _.Ze("undefined" == typeof document ? null : document);

    } catch (e) { _._DumpException(e) }
    try {
        var Gj;
        _.Fj = {};
        Gj = {};
        _.Hj = function(a, b) {
            this.g = a === _.Fj && b || "";
            this.h = Gj
        };
        _.Hj.prototype.la = !0;
        _.Hj.prototype.ka = function() { return this.g };
        _.Ij = function(a, b) {
            var c = Math.min(500, screen.width - 40);
            var d = Math.min(550, screen.height - 40);
            c = ["toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no", "width=" + c, "height=" + d, "top=" + (screen.height / 2 - d / 2), "left=" + (screen.width / 2 - c / 2)].join();
            d = a instanceof _.A ? a : _.Oa(a);
            b = _.w.open(_.Ma(d), b instanceof _.Hj ? b instanceof _.Hj && b.constructor === _.Hj && b.h === Gj ? b.g : "type_error:Const" : b || "", c, void 0);
            if (!b || b.closed || "undefined" == typeof b.closed) return _.v("Failed to open popup window on url: " +
                a + ". Maybe blocked by the browser?"), null;
            b.focus();
            return b
        };

    } catch (e) { _._DumpException(e) }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Mk;
        _.Ik = function(a, b) {
            var c = {},
                d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    if (e) {
                        var f = d.toLowerCase(),
                            g = b[f];
                        if (g) {
                            var h = window;
                            switch (g) {
                                case "bool":
                                    "true" === e.toLowerCase() ? c[f] = !0 : "false" === e.toLowerCase() ? c[f] = !1 : _.v("The value of '" + d + "' can only be true or false. Configuration ignored.");
                                    break;
                                case "num":
                                    e = Number(e);
                                    isNaN(e) ? _.v("Expected a number for '" + d + "'. Configuration ignored.") : c[f] = e;
                                    break;
                                case "func":
                                    "function" === typeof h[e] ? c[f] = h[e] : _.v("The value of '" + d + "' is not a function. Configuration ignored.");
                                    break;
                                case "str":
                                    c[f] = e;
                                    break;
                                case "origin":
                                    c[f] = "function" === typeof h[e] ? h[e] : 0 <= e.indexOf(",") ? e.split(",") : e;
                                    break;
                                default:
                                    _.v("Unrecognized type. Configuration ignored.")
                            }
                        }
                    }
                }
            return c
        };
        _.Jk = function(a) {
            var b = document;
            a = String(a);
            "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
            return b.createElement(a)
        };
        _.Kk = function(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) };
        _.Lk = function(a) {
            var b = a.match(_.Dc);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        };
        Mk = !_.gb && !_.Ua();
        _.Nk = function(a) {
            if (Mk && a.dataset) return a.dataset;
            var b = {};
            a = a.attributes;
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                if (0 == d.name.lastIndexOf("data-", 0)) {
                    var e = _.Kk(d.name.substr(5));
                    b[e] = d.value
                }
            }
            return b
        };

    } catch (e) { _._DumpException(e) }
    try {
        _.Ok = function(a, b, c) {
            b.sentinel = "onetap_google";
            _.q("Message sent to " + c + ". " + JSON.stringify(b), "Message Util");
            a.postMessage(b, c)
        };

    } catch (e) { _._DumpException(e) }
    try {
        var Tk, Zk, Vk, Uk, $k, Sk, Wk, Xk;
        _.Pk = function() {
            var a = new Uint32Array(2);
            (window.crypto || _.$c.msCrypto).getRandomValues(a);
            return a[0].toString(16) + a[1].toString(16)
        };
        _.Rk = function(a) { _.Ok(window.parent, a, _.Qk) };
        _.Yk = function(a, b, c) { Sk ? _.t("A previous attempt has been made to verify the parent origin and is still being processed.") : _.Qk ? (_.q("Parent origin has already been verified."), b && b()) : Tk(a) ? (Uk = a, Vk(), a = _.Pk(), _.Ok(window.parent, { command: "intermediate_iframe_ready", nonce: a }, "*"), Sk = a, Wk = b, Xk = c) : _.v("Invalid origin provided. Please provide a valid and secure (https) origin. If providing a list of origins, make sure all origins are valid and secure.") };
        Tk = function(a) {
            if ("function" === typeof a) return !0;
            if ("string" === typeof a) return Zk(a);
            if (Array.isArray(a)) {
                for (var b = 0; b < a.length; b++)
                    if ("string" !== typeof a[b] || !Zk(a[b])) return !1;
                return !0
            }
            return !1
        };
        Zk = function(a) { try { var b = _.Tc(a); if (!b.g || "https" !== b.h && "localhost" !== b.g) return !1 } catch (c) { return !1 } return !0 };
        Vk = function() {
            $k || ($k = _.H(window, "message", function(a) {
                a = a.T;
                if (a.data) {
                    var b = a.data;
                    "onetap_google" === b.sentinel && "parent_frame_ready" === b.command && (_.q("Message received: " + JSON.stringify(b)), window.parent && window.parent === a.source ? Sk ? b.nonce !== Sk ? _.t("Message ignored due to invalid nonce.") : (b = a.origin, ("string" === typeof Uk ? b === Uk : Array.isArray(Uk) ? 0 <= Uk.indexOf(b) : "function" === typeof Uk && Uk(b)) ? (_.Qk = a.origin, Wk && Wk()) : (_.t("Origin verification failed. Invalid origin - " + a.origin + "."), Xk && Xk()),
                        Xk = Wk = Sk = void 0, $k && (_.pc($k), $k = void 0)) : _.t("Message ignored. Origin verifier is not ready, or already done.") : _.t("Message ignored due to invalid source."))
                }
            }))
        };
        _.al = function(a) { _.Qk ? _.Rk({ command: "intermediate_iframe_resize", height: a }) : _.t("Resize command was not sent due to missing verified parent origin.") };
        _.bl = function() { _.Qk ? _.Rk({ command: "intermediate_iframe_close" }) : _.t("Close command was not sent due to missing verified parent origin.") };
        _.cl = function(a) { _.Qk ? _.Rk({ command: "set_tap_outside_mode", cancel: a }) : _.t("Set tap outside mode command was not sent due to missing verified parent origin.") };
        _.x("google.accounts.id.intermediate.verifyParentOrigin", _.Yk);
        _.x("google.accounts.id.intermediate.notifyParentResize", _.al);
        _.x("google.accounts.id.intermediate.notifyParentClose", _.bl);
        _.x("google.accounts.id.intermediate.notifyParentDone", function() { _.Qk ? _.Rk({ command: "intermediate_iframe_done" }) : _.t("Done command was not sent due to missing verified parent origin.") });
        _.x("google.accounts.id.intermediate.notifyParentTapOutsideMode", _.cl);

    } catch (e) { _._DumpException(e) }
    try {
        var Z = function(a, b) { try { _.wa.info >= _.wa[_.xa] && window.console && window.console.info && window.console.info(_.va(b) + a) } catch (c) {} },
            dl = function(a, b) { _.Ye(a, function(c) { b(_.He(c.target)) }, "GET", void 0, void 0, void 0, !0) },
            el = function(a, b, c) { _.Ye(a, function(d) { c(_.He(d.target)) }, "POST", b ? _.ee(_.de(b)).toString() : null, void 0, void 0, !0) },
            fl = function(a) {
                try {
                    var b = _.Tc(a),
                        c = b.h;
                    return !!b.g && ("https" === c || "http" === c && "localhost" === b.g)
                } catch (d) {}
                return !1
            },
            gl = function() {
                for (var a = _.ha(document.getElementsByTagName("META")),
                        b = a.next(); !b.done; b = a.next())
                    if (b = b.value, "google-signin-client_id" === b.getAttribute("name")) return b.getAttribute("content");
                a = _.ha(document.getElementsByTagName("IFRAME"));
                for (b = a.next(); !b.done; b = a.next())
                    if ((b = b.value.getAttribute("src")) && b.startsWith("https://accounts.google.com/o/oauth2/iframe")) return _.Tc(b).j.get("client_id") || null;
                return null
            },
            hl = function(a) {
                if (!a) return null;
                var b = a.indexOf("-");
                if (0 <= b) return a.substring(0, b);
                b = a.indexOf(".");
                return 0 <= b ? a.substring(0, b) : null
            },
            il = function(a,
                b) {
                var c = [];
                c.push(_.H(a, "click", b));
                c.push(_.H(a, "keydown", function(d) { var e = d.key; "Enter" !== e && " " !== e || b(d) }))
            },
            jl = function() {
                var a = _.Pk().toString();
                _.af.set("g_csrf_token", a, { yb: 300, path: "/" });
                return a
            },
            ml = function(a) {
                var b = void 0 === b ? "googleidentityservice" : b;
                if (document.getElementById(b) && kl[b]) return kl[b].g;
                var c = new _.yd,
                    d = document.getElementsByTagName("head")[0],
                    e = document.createElement("link");
                e.id = b;
                e.type = "text/css";
                e.media = "all";
                e.onload = function() { c.resolve() };
                ll(e, a);
                e.rel = "stylesheet";
                d.appendChild(e);
                kl[b] = c;
                return c.g
            },
            nl = function(a) { var b = document.getElementById("credential_picker_iframe"); return b ? (document.body.removeChild(b), !0) : a && (b = document.getElementById("credential_picker_container")) ? (a.removeChild(b), !0) : !1 },
            ol = function(a, b, c, d) {
                d = void 0 === d ? !1 : d;
                nl(a);
                c ? (a = document.createElement("iframe"), a.setAttribute("src", b), a.setAttribute("id", "credential_picker_iframe"), a.style.display = "none", a.style.height = "360px", a.style.width = "100%", a.style.zIndex = 9999, a.style.border = "none",
                    a.style.position = "fixed", a.style.left = "0", a.style.bottom = "0", document.body.appendChild(a)) : (c = document.createElement("div"), a !== document.body ? (c.style.position = "relative", c.style.zIndex = 9999, c.style.top = "0", c.style.left = "0", c.style.height = "auto", c.style.width = "auto") : (c.style.position = "fixed", c.style.zIndex = 9999), d && (c.style.top = "0", c.style.right = "0"), c.setAttribute("id", "credential_picker_container"), d = document.createElement("iframe"), d.setAttribute("src", b), d.style.display = "none", d.style.height =
                    "360px", d.style.width = "391px", d.style.overflow = "hidden", c.appendChild(d), a.appendChild(c))
            },
            pl = function(a, b, c, d) {
                d = void 0 === d ? !1 : d;
                var e = _.Jk("iframe");
                _.Ve(e, { src: b, id: c, style: "display: block;position: " + ((_.K("enable_inline_button") ? "absolute" : "relative") + ";top: 0;left: 0;height: 0;width: 0;border: 0;") });
                if (d) return b = _.Jk("div"), b.id = c + "-wrapper", b.classList.add("L5Fo6c-sM5MNb"), d = _.Jk("div"), _.Ve(d, { "aria-label": "Sign in with Google", id: c + "-overlay" }), d.classList.add("L5Fo6c-bF1uUb"), d.tabIndex =
                    0, e.tabIndex = -1, b.appendChild(e), b.appendChild(d), a.appendChild(b), d;
                a.appendChild(e);
                return e
            },
            ql = function(a) { return "number" === typeof a && !isNaN(a) && 0 < a },
            rl = function(a) { return (a = document.getElementById(a)) && "iframe" == a.tagName.toLowerCase() ? a : null },
            tl = function(a) {
                var b = _.Q("g_a11y_announcement");
                b || (b = _.Jk("div"), b.id = "g_a11y_announcement", document.body.appendChild(b));
                var c = _.Jk("span");
                sl(c, a);
                _.Ve(c, { role: "alert" });
                _.We(b);
                b.appendChild(c);
                setTimeout(function() { _.We(b) }, 3E3)
            },
            yl = function(a, b) {
                ul >=
                    (void 0 === b ? 100 : b) || (b = new _.Fc(vl), _.Ic(b, _.ee({ client_id: wl, as: xl, event: a.toString() })), _.Ye(b.toString(), void 0, "POST", void 0, void 0, void 0, "https://accounts.google.com/gsi/log" !== vl))
            },
            Bl = function(a, b) {
                for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
                c = new(Function.prototype.bind.apply(zl, [null, "onetap", a, "prompt"].concat(Al(c))));
                yl(c)
            },
            Cl = function(a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
                b = new(Function.prototype.bind.apply(zl, [null, "onetap", void 0, "closed"].concat(Al(b))));
                yl(b)
            },
            Dl = function(a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
                b = new(Function.prototype.bind.apply(zl, [null, "id", void 0, "init"].concat(Al(b))));
                yl(b)
            },
            Jl = function() {
                var a = document.getElementById("g_id_onload");
                if (a) {
                    var b = _.Nk(a);
                    a = _.Ik(b, El);
                    void 0 == a.auto_prompt && (a.auto_prompt = !0);
                    a.auto_prompt && a.skip_prompt_cookie && _.af.get(a.skip_prompt_cookie.toString()) && (a.auto_prompt = !1);
                    delete a.skip_prompt_cookie;
                    var c = {},
                        d;
                    for (d in b) b.hasOwnProperty(d) && 0 > Fl.indexOf(d.toLowerCase()) &&
                        (c[d] = b[d]);
                    a.state && (c.state = a.state);
                    if (d = a.login_uri) {
                        b = _.Tc(d);
                        b.g || (_.Gc(b, location.protocol), b.g = location.hostname, _.Hc(b, location.port), Dl("relativeLoginUri", d), _.t("Relative login_uri was provided. Use absolute url instead. Relative login_uri may be considered invalid in the future."));
                        if ("https" !== b.h && "localhost" !== b.g) throw Dl("unsecuredLoginUri", d), new Gl("Unsecured login_uri provided.");
                        d = b.toString();
                        a.login_uri = d
                    }
                    d && !a.callback && (a.callback = Hl(d, c));
                    "redirect" !== a.ux_mode || d || _.v("Missing required login_uri parameter for the redirect flow.");
                    d = a.native_login_uri;
                    delete a.native_login_uri;
                    d && a.native_callback ? _.v("Cannot set both data-native_login_uri and data-native_callback.") : d && (a.native_callback = Il(d, c, a.native_id_param || "email", a.native_password_param || "password"));
                    return a
                }
            },
            Hl = function(a, b) { return function(c) { c && c.credential ? (b.credential = c.credential, b.g_csrf_token = jl(), _.je(a, b)) : Z("No credential found in the response.") } },
            Il = function(a, b, c, d) { return function(e) { e && "password" === e.type ? (b[c] = e.id, b[d] = e.password, _.je(a, b)) : Z("No password credential returned.") } },
            Ll = function(a) { a = _.Nk(a); return _.Ik(a, Kl) },
            Ol = function(a) {
                a = new Ml(a);
                window.__G_ID_CLIENT__ = a;
                ml(a.K);
                Nl(a);
                return a
            },
            Pl = function(a, b) {
                var c = window.__G_ID_CLIENT__;
                c || (Ol(), c = window.__G_ID_CLIENT__);
                c.Za(a, b)
            },
            Rl = function(a, b, c) {
                if (a && b) {
                    var d = window.__G_ID_CLIENT__;
                    d ? Ql(d, a, b, c) : _.t("Failed to render button before calling initialize().")
                } else _.t("Failed to render button because there is no parent or options set.")
            },
            Ul = function() {
                var a = window.__G_ID_CLIENT__;
                a || (Ol(), a = window.__G_ID_CLIENT__);
                a = a.Aa;
                var b = Sl(a);
                b.disable_auto_select = !0;
                Tl(a, b)
            },
            Vl = function() {
                var a = void 0 === a ? document.readyState : a;
                for (var b = _.Se("g_id_signout"), c = 0; c < b.length; c++) _.H(b[c], "click", Ul);
                try {
                    var d = Jl();
                    if (d) {
                        var e = d.auto_prompt;
                        delete d.auto_prompt;
                        var f = d.moment_callback;
                        delete d.moment_callback;
                        Ol(d);
                        e && ("complete" === a ? Pl(f) : _.H(window, "load", function() { Pl(f) }, !1))
                    }
                    var g = _.Se("g_id_signin");
                    for (a = 0; a < g.length; a++) {
                        var h = Ll(g[a]);
                        Rl(g[a], h)
                    }
                } catch (k) { _.v("Error parsing configuration from HTML: " + k.message) }
            },
            Wl = function() {
                var a = window.onGoogleLibraryLoad;
                a && "function" === typeof a && a()
            },
            Xl = function() { var a = void 0 === a ? document.readyState : a; "complete" === a ? setTimeout(function() { Wl() }, 0) : _.H(window, "load", function() { Wl() }, !1) },
            Yl = function(a, b, c) { c && a.push(b + "=" + encodeURIComponent(c.trim())) },
            Zl = function(a, b, c) {
                var d = c.client_id,
                    e = c.scope,
                    f = "code" === a ? "code" : "token";
                if ("code" === a) { var g = "offline"; var h = c.select_account ? "select_account consent" : "consent" } else void 0 === c.prompt ? h = "select_account" : c.prompt && (h =
                    c.prompt);
                a = c.redirect_uri;
                if (c.hint) var k = c.hint;
                if (c.state) var n = c.state;
                if (c.hosted_domain) var m = c.hosted_domain;
                if (void 0 !== c.include_granted_scopes) var p = c.include_granted_scopes;
                c = [];
                Yl(c, "client_id", d);
                Yl(c, "scope", e);
                Yl(c, "redirect_uri", a);
                Yl(c, "prompt", h);
                Yl(c, "login_hint", k);
                Yl(c, "state", n);
                Yl(c, "access_type", g);
                Yl(c, "hd", m);
                Yl(c, "response_type", f);
                Yl(c, "include_granted_scopes", !1 === p ? "false" : "true");
                return b + "?" + c.join("&")
            },
            $l = function(a, b) {
                if (!b.client_id) throw Error("ca");
                if (!b.scope) throw Error("da");
                var c = { client_id: b.client_id, scope: b.scope, hint: b.hint, state: b.state, hosted_domain: b.hosted_domain, include_granted_scopes: b.include_granted_scopes };
                "code" === a ? (c.select_account = b.select_account, c.ux_mode = b.ux_mode, "redirect" === c.ux_mode && (c.redirect_uri = b.redirect_uri || [location.protocol, "//", location.host, location.pathname].join(""))) : "token" === a && (c.prompt = b.prompt);
                return c
            },
            am = function(a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
                c = [];
                if (b) {
                    b = _.ha(b);
                    for (var d = b.next(); !d.done; d =
                        b.next()) {
                        var e = (d = d.value) && d.trim();
                        !e && 0 <= e.indexOf(" ") ? (_.t("In hasGrantedAllScopes() method: invalid scope [" + d + "]. Scope should be a non-empty string without space."), d = null) : d = e;
                        if (null === d) return _.t("Invalid scope found."), null;
                        d && c.push(d)
                    }
                }
                return c
            },
            bm = function(a) { return (a = a && a.scope && a.scope.trim()) ? am.apply(null, Al(a.split(" "))) : null },
            cm = function(a, b) {
                for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
                var e = bm(a);
                return e && e.length ? (c = am.apply(null, Al(c))) && c.length ? _.Fa(c,
                    function(f) { return 0 <= (0, _.ra)(e, f) }) : !1 : !1
            },
            dm = function(a, b) { for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d]; var e = bm(a); return e && e.length ? (c = am.apply(null, Al(c))) && c.length ? _.Ea(c, function(f) { return 0 <= (0, _.ra)(e, f) }) : !1 : !1 },
            em = function(a) { _.ud(a, "prompt_closed", { Rc: !1 }) },
            fm = function(a, b, c) {
                b = { Tc: b };
                void 0 != c && (b.oldHeight = c);
                _.ud(a, "prompt_resized", b)
            },
            Al = function(a) {
                if (!(a instanceof Array)) {
                    a = _.ha(a);
                    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                    a = c
                }
                return a
            },
            ll = function(a,
                b) {
                a.rel = "";
                a.href = b instanceof _.ed ? _.fd(b).toString() : b instanceof _.A ? _.Ma(b) : _.Ma(_.Oa(b))
            },
            Gl = function() { return Error.apply(this, arguments) || this };
        _.O(Gl, Error);
        var sl = function(a, b) {
                if ("textContent" in a) a.textContent = b;
                else if (3 == a.nodeType) a.data = String(b);
                else if (a.firstChild && 3 == a.firstChild.nodeType) {
                    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                    a.firstChild.data = String(b)
                } else _.We(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
            },
            gm = ["debug", "info", "warn"],
            hm = function(a) { _.E(this, a, -1, null, null) };
        _.z(hm, _.C);
        var im = function(a) { _.E(this, a, -1, null, null) };
        _.z(im, _.C);
        var jm = { left: 1, center: 2 },
            km = { rectangular: 1, square: 3, pill: 2, circle: 4 },
            lm = { large: 1, medium: 2, small: 3 },
            mm = { signin: 1, signin_with: 2, signup_with: 3, continue_with: 4 },
            nm = { outline: 1, filled_blue: 2, filled_black: 3 },
            om = { standard: 1, icon: 2 },
            pm = function(a, b, c) {
                this.h = a;
                this.i = c;
                this.g = !1;
                a = new _.Xg;
                b && (b.g && _.G(a, 6, jm[b.g]), b.shape && _.G(a, 3, km[b.shape]), b.size && _.G(a, 1, lm[b.size]), b.text && _.G(a, 5, mm[b.text]), b.theme && _.G(a, 2, nm[b.theme]), b.type && _.G(a, 7, om[b.type]), b.width && !isNaN(b.width) && _.G(a, 4, b.width));
                this.l =
                    a;
                this.o = performance.now()
            },
            qm = function(a) {
                if (!a.g) {
                    _.Og(a.h, a.l);
                    var b = _.Te("nsm7Bb-HzV7m-LgbsSe", a.h);
                    b && a.i && il(b, function() { a.i && a.i.call(a) });
                    a.m = performance.now()
                }
            };
        pm.prototype.S = function() {
            if (!this.g) {
                var a = _.Te("nsm7Bb-HzV7m-LgbsSe", this.h);
                a && a && a.parentNode && a.parentNode.removeChild(a);
                this.g = !0;
                this.j = performance.now()
            }
        };
        var rm = function() {};
        _.l = rm.prototype;
        _.l.getMomentType = function() { return this.g };
        _.l.isDisplayMoment = function() { return "display" === this.g };
        _.l.isDisplayed = function() { return this.isDisplayMoment() && !!this.h };
        _.l.isNotDisplayed = function() { return this.isDisplayMoment() && !this.h };
        _.l.getNotDisplayedReason = function() { return this.isNotDisplayed() ? this.j : void 0 };
        _.l.isSkippedMoment = function() { return "skipped" === this.g };
        _.l.getSkippedReason = function() { return this.isSkippedMoment() ? this.l : void 0 };
        _.l.isDismissedMoment = function() { return "dismissed" === this.g };
        _.l.getDismissedReason = function() { return this.isDismissedMoment() ? this.i : void 0 };
        var kl = {};
        var zl = function(a, b, c, d) {
            for (var e = [], f = 3; f < arguments.length; ++f) e[f - 3] = arguments[f];
            this.j = a;
            this.i = b;
            this.g = c;
            this.h = e
        };
        zl.prototype.toString = function() {
            var a = [this.j];
            this.i && a.push(this.i);
            this.g && a.push(this.g);
            this.h && a.push.apply(a, Al(this.h));
            return a.join(".")
        };
        var ul = Math.floor(100 * Math.random()),
            vl = "https://accounts.google.com/gsi/log",
            wl, xl;
        var sm = [0, 7200, 86400, 604800, 2419200],
            tm = function(a, b, c) {
                this.i = a;
                this.g = void 0 === b ? "i_" : b;
                this.h = void 0 === c ? "g_state" : c
            },
            um = function(a) {
                if (a = _.af.get(a.h)) try { return JSON.parse(a) } catch (b) {}
                return {}
            },
            Sl = function(a) {
                var b = um(a),
                    c = {},
                    d = b[a.g + "p"];
                void 0 != d && (c.disable_auto_prompt = d);
                d = b[a.g + "s"];
                void 0 != d && (c.disable_auto_select = 1 == d);
                a = b[a.g + "l"];
                c.g = "number" === typeof a && !isNaN(a) && 0 <= a && 4 >= a ? a : 0;
                return c
            },
            Tl = function(a, b) {
                var c = a.g + "p",
                    d = a.g + "s",
                    e = a.g + "l",
                    f = um(a);
                void 0 == b.disable_auto_prompt ? delete f[c] :
                    f[c] = b.disable_auto_prompt;
                void 0 == b.disable_auto_select ? delete f[d] : f[d] = b.disable_auto_select ? 1 : 0;
                f[e] = b.g;
                b = JSON.stringify(f);
                a.i ? _.af.set(a.h, b, { yb: 15552E3, path: "/", domain: a.i }) : _.af.set(a.h, b, { yb: 15552E3, path: "/" })
            },
            vm = function(a) { a = Sl(a).disable_auto_prompt; return void 0 != a && a > (new Date).getTime() };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var wm = /^((?!\s)[a-zA-Z0-9\u0080-\u3001\u3003-\uff0d\uff0f-\uff60\uff62-\uffffFF-]+[\.\uFF0E\u3002\uFF61])+(?!\s)[a-zA-Z0-9\u0080-\u3001\u3003-\uff0d\uff0f-\uff60\uff62-\uffffFF-]{2,63}$/;
        var xm = function() {};
        var ym = function() {};
        _.z(ym, xm);
        var zm = function(a) { this.g = a };
        _.z(zm, ym);
        _.l = zm.prototype;
        _.l.set = function(a, b) { try { this.g.setItem(a, b) } catch (c) { if (0 == this.g.length) throw "Storage mechanism: Storage disabled"; throw "Storage mechanism: Quota exceeded"; } };
        _.l.get = function(a) { a = this.g.getItem(a); if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered"; return a };
        _.l.sb = function(a) { this.g.removeItem(a) };
        _.l.Ka = function(a) {
            var b = 0,
                c = this.g,
                d = new _.zc;
            d.next = function() {
                if (b >= c.length) throw _.yc;
                var e = c.key(b++);
                if (a) return e;
                e = c.getItem(e);
                if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
                return e
            };
            return d
        };
        _.l.key = function(a) { return this.g.key(a) };
        var Am = function() {
            var a = null;
            try { a = window.sessionStorage || null } catch (b) {}
            this.g = a
        };
        _.z(Am, zm);
        var Bm = function(a, b) {
            this.h = a;
            this.g = b + "::"
        };
        _.z(Bm, ym);
        Bm.prototype.set = function(a, b) { this.h.set(this.g + a, b) };
        Bm.prototype.get = function(a) { return this.h.get(this.g + a) };
        Bm.prototype.sb = function(a) { this.h.sb(this.g + a) };
        Bm.prototype.Ka = function(a) {
            var b = this.h.Ka(!0),
                c = this,
                d = new _.zc;
            d.next = function() { for (var e = b.next(); e.substr(0, c.g.length) != c.g;) e = b.next(); return a ? e.substr(c.g.length) : c.h.get(e) };
            return d
        };
        var Cm = new _.Hj(_.Fj, "g_credential_picker"),
            Dm = ["bottom_sheet", "card"],
            Em = ["signin", "signup", "use"],
            Gm = function(a, b) {
                b = void 0 === b ? "i_" : b;
                var c = new Am;
                if (c.g) try {
                    c.g.setItem("__sak", "1");
                    c.g.removeItem("__sak");
                    var d = !0
                } catch (e) { d = !1 } else d = !1;
                this.u = d ? new Bm(c, "g_state_id_") : null;
                this.Ca = b;
                this.m = a = Object.assign({}, a);
                this.C = this.W = !1;
                b = new Uint8Array(16);
                (window.crypto || _.$c.msCrypto).getRandomValues(b);
                this.s = btoa(String.fromCharCode.apply(String, Al(b))).replace(/=+$/, "");
                this.v = {};
                Fm(this, a)
            };
        _.O(Gm, _.sd);
        var Fm = function(a, b) {
            var c = a.u ? a.u.get("ll") || void 0 : void 0;
            if (c) a.za(c);
            else {
                if (c = void 0 !== b.log_level) c = b.log_level, c = void 0 === c || 0 <= (0, _.ra)(gm, c);
                c && a.za(b.log_level)
            }
            a.Ba = b.button_url || "https://accounts.google.com/gsi/button";
            a.pa = b.picker_url || "https://accounts.google.com/gsi/select";
            a.Ea = b.prompt_url || "https://accounts.google.com/gsi/iframe/select";
            a.ta = b.status_url || "https://accounts.google.com/gsi/status";
            a.H = _.Lk(a.ta);
            a.K = b.container_css_url || "https://accounts.google.com/gsi/style";
            a.sc =
                b.revoke_url || "https://accounts.google.com/gsi/revoke";
            c = a.H;
            var d = b.client_id,
                e = a.s;
            vl = c ? c + "/gsi/log" : "https://accounts.google.com/gsi/log";
            wl = d;
            xl = e;
            a.callback = b.callback;
            a.N = "redirect" === b.ux_mode ? "redirect" : "popup";
            c = b.ui_mode;
            void 0 != c && 0 <= (0, _.ra)(Dm, c) || (c = _.Qg() ? "bottom_sheet" : "card");
            a.o = c;
            a.D = (b.prompt_parent_id ? document.getElementById(b.prompt_parent_id) : null) || document.body;
            a.Da = 9E4;
            a.R = !1 !== b.cancel_on_tap_outside;
            c = b.state_cookie_domain;
            !c || null != c && wm.test(c) || (c = void 0);
            a.Aa = new tm(c,
                a.Ca, b.state_cookie_name);
            a.ha(b);
            c = {};
            void 0 != b.client_id && (c.client_id = b.client_id);
            void 0 != b.origin && (c.origin = b.origin);
            void 0 != b.auto_select && (c.auto_select = b.auto_select);
            c.ux_mode = a.N;
            "redirect" === c.ux_mode && b.login_uri && (c.login_uri = b.login_uri);
            c.ui_mode = a.o;
            void 0 !== b.context && 0 <= (0, _.ra)(Em, b.context) && (c.context = b.context);
            void 0 != b.hint && (c.hint = b.hint);
            void 0 != b.hosted_domain && (c.hosted_domain = b.hosted_domain);
            void 0 != b.existing && (c.existing = b.existing);
            void 0 != b.special_accounts && (c.special_accounts =
                b.special_accounts);
            void 0 != b.nonce && (c.nonce = b.nonce);
            void 0 != b.channel_id && (c.channel_id = b.channel_id);
            void 0 != b.state && (c.state = b.state);
            "warn" !== _.xa && (c.log_level = _.xa);
            void 0 != b.hl && (c.hl = b.hl);
            c.as = a.s;
            a.g = c
        };
        Gm.prototype.ha = function() {};
        var Nl = function(a) { a.W || (a.W = !0, _.H(window, "message", function(b) { Hm(a, b.T) }, !1), _.hc(document, "click", function() { a.R && Im(a, !1) && (Jm(a, "tap_outside"), Cl("tapOutside")) })) };
        Gm.prototype.Za = function(a, b) {
            var c = this;
            Im(this, !0) && (Km(this, "flow_restarted"), Cl("flowRestarted"));
            this.j = a;
            a = Object.assign({}, this.m, b);
            Fm(this, a);
            a = "bottom_sheet" === this.g.ui_mode ? "bottomSheet" : "card";
            this.g.client_id ? _.K("unsupported_browser") ? (Z("One Tap is not supported in this User Agent."), this.i("browser_not_supported"), _.vd(this, "prompt_display_failed", { cause: "Unsupported user agent for one tap." }), Bl(a, "browserNotSupported")) : vm(this.Aa) ? (Z("User has closed One Tap before. Still in the cool down period."),
                this.i("suppressed_by_user"), _.vd(this, "prompt_display_failed", { cause: "Prompt disabled by the user." }), Bl(a, "cooldown", (Sl(this.Aa).g || 0).toString())) : Lm(this, function(d) {
                d && _.I(d, 3) ? (c.g.auto_select = c.g.auto_select && !Sl(c.Aa).disable_auto_select, c.l = _.Pk(), c.g.channel_id = _.ie(c.l), c.g.origin = c.g.origin || location.origin, d = _.fe(c.Ea, c.g), c.C = !1, c.sa(d), _.ud(c, "prompt_displayed"), Mm(c), Nm(c, !0)) : d && null != _.F(d, 2) ? (_.ce(_.J(d, _.Ke, 2)), d = _.F(_.J(d, _.Ke, 2), 1), c.i(2 === d ? "opt_out_or_no_session" : 7 === d ? "secure_http_required" :
                    5 === d ? "unregistered_origin" : 3 === d || 4 === d ? "invalid_client" : 9 === d ? "browser_not_supported" : 12 === d ? "web_view_not_supported" : "unknown_reason"), _.vd(c, "prompt_display_failed", { cause: "Error while checking for the credential status." })) : d && !_.I(d, 3) ? (_.q("No sessions found in the browser."), c.i("opt_out_or_no_session"), _.vd(c, "prompt_display_failed", { cause: "No signed in Google accounts available." })) : (_.q("Invalid response from check credential status."), c.i("unknown_reason"), _.vd(c, "prompt_display_failed", { cause: "A network error was encountered while checking for the credential status." }))
            }) : (_.v("Missing required parameter: client_id."), this.i("missing_client_id"), _.vd(this, "prompt_display_failed", { cause: "Missing required parameter: client_id." }), Bl(a, "noClientId"))
        };
        var Ql = function(a, b, c, d) {
                _.We(b);
                _.Xe(b);
                var e = "gsi_" + Date.now() % 1E6 + "_" + Math.floor(1E6 * Math.random()),
                    f = new _.Fc(a.Ba),
                    g = Object.assign({}, c),
                    h = _.Jk("div");
                h.classList.add("S9gUrf-YoZ4jf");
                h.style.position = "relative";
                b.appendChild(h);
                b = _.K("enable_inline_button") ? Om(a, h, c, e) : void 0;
                a.v[e] = { h: e, qa: d, g: b, data: { nonce: g.nonce || a.m.nonce, state: g.state || a.m.state } };
                delete g.nonce;
                delete g.state;
                d = _.ee(g);
                d.add("client_id", a.m.client_id);
                d.add("iframe_id", e);
                d.add("as", a.s);
                g.locale && (d.add("hl", g.locale),
                    _.Xc(d, "locale"));
                "warn" !== _.xa && d.add("log_level", _.xa);
                _.Ic(f, d);
                g = _.Sg();
                f = pl(h, f.toString(), e, g);
                g && il(f, function(k) {
                    k.preventDefault();
                    k.stopPropagation();
                    Pm(a, e)
                })
            },
            Om = function(a, b, c, d) {
                var e = _.Jk("div");
                b.appendChild(e);
                var f = new pm(e, c, function() { Pm(a, d) });
                ml(a.K).then(function() { qm(f) });
                return f
            },
            Pm = function(a, b) {
                _.q("Processing click for button: " + b + ".");
                if (b) {
                    var c = _.Q(b),
                        d = a.v[b];
                    c || Z("The iframe containing the button was not found within the page.");
                    d ? d.qa ? (d.qa(d.data), _.q("Custom handler called for button: " +
                        b + ".")) : (b = {}, d.data && (d.data.nonce && (b.nonce = d.data.nonce), d.data.state && (b.state = d.data.state)), Im(a, !0) && (Km(a, "flow_restarted"), Cl("buttonFlowStarted")), d = Object.assign({}, a.m, b), Fm(a, d), "redirect" === a.N ? (a.g.login_uri || (a.g.login_uri = location.protocol + "//" + location.host + location.pathname), a.g.g_csrf_token = jl(), d = top.location, a = _.fe(a.pa, a.g), a = a instanceof _.A ? a : _.Oa(a), d.replace(_.Ma(a))) : (a.l = _.Pk(), a.g.channel_id = _.ie(a.l), a.g.origin = a.g.origin || location.origin, _.Ij(_.fe(a.pa, a.g), Cm) || yl(new zl("button",
                        "popup", "clicked", "popupNotOpened")))) : _.v("A button entry was not found for the given id.")
                }
            },
            Im = function(a, b) {
                var c = a.D;
                if (!(document.getElementById("credential_picker_iframe") || c && document.getElementById("credential_picker_container"))) return !1;
                if (!b && a.C) return Z("Cancel prompt request ignored, since user already interact with the prompt UI."), !1;
                if (!nl(a.D)) return Z("Failed to remove prompt iframe."), !1;
                em(a);
                return !0
            };
        Gm.prototype.i = function(a) { Nm(this, !1, a) };
        var Nm = function(a, b, c) {
                if (a.j) {
                    var d = a.j;
                    b || (a.j = void 0);
                    var e = new rm;
                    e.g = "display";
                    e.h = b;
                    b || (e.j = c || "unknown_reason");
                    d.call(a, e)
                }
            },
            Jm = function(a, b) {
                if (a.j) {
                    var c = a.j;
                    a.j = void 0;
                    var d = new rm;
                    d.g = "skipped";
                    d.l = b;
                    c.call(a, d)
                }
            },
            Km = function(a, b) {
                if (a.j) {
                    var c = a.j;
                    a.j = void 0;
                    var d = new rm;
                    d.g = "dismissed";
                    d.i = b;
                    c.call(a, d)
                }
            },
            Lm = function(a, b) {
                var c = { client_id: a.g.client_id };
                a.g.hint && (c.hint = a.g.hint);
                a.g.hosted_domain && (c.hosted_domain = a.g.hosted_domain);
                a.g.as && (c.as = a.g.as);
                c = _.fe(a.ta, c);
                dl(c, function(d) {
                    d &&
                        "null" !== d ? (d = new hm(_.ad(d)), b(d)) : (_.v("Check credential status returns invalid response."), a.i("unknown_reason"), _.vd(a, "network", { cause: "invalid_response" }))
                })
            };
        Gm.prototype.sa = function(a) { ol(this.D, a, "bottom_sheet" === this.o) };
        var Mm = function(a) { "bottom_sheet" === a.o && window.setTimeout(function() { Im(a, !1) && (Jm(a, "auto_cancel"), Cl("autoCancel")) }, a.Da) },
            Hm = function(a, b) {
                if (b.origin === a.H && b.data && "readyForConnect" === b.data.type) {
                    _.q("Setup message received: " + JSON.stringify(b.data));
                    var c = b.data.iframeId;
                    c ? a.v[c] && (c = new MessageChannel, c.port1.onmessage = function(d) {
                        if (d.data && d.data.type) {
                            _.q("Message received in button channel: " + JSON.stringify(d.data));
                            var e = d.data.type;
                            if ("command" !== e) _.t("Unknown event type (" + e + ") received in the button channel.");
                            else {
                                var f;
                                e = d.data.command;
                                switch (e) {
                                    case "clicked":
                                        var g = d.data.iframeId;
                                        _.q("Clicked command received for button: " + g + ".");
                                        Pm(a, g);
                                        break;
                                    case "resize":
                                        g = d.data.iframeId;
                                        _.q("Resize command received for button: " + g + ".");
                                        if (g) {
                                            e = d.data.height;
                                            var h = d.data.width;
                                            if ((f = rl(g)) && ql(e) && ql(h)) {
                                                f.style.height = e + "px";
                                                f.style.width = h + "px";
                                                var k = d.data.verticalMargin;
                                                d = d.data.horizontalMargin;
                                                if ("number" === typeof k && !isNaN(k) && "number" === typeof d && !isNaN(d) && (f.style.marginTop = k + "px", f.style.marginBottom =
                                                        k + "px", f.style.marginLeft = d + "px", f.style.marginRight = d + "px", (f = a.v[g]) && f.g)) {
                                                    g = rl(g);
                                                    d = f.g;
                                                    d.S();
                                                    f.g = void 0;
                                                    g.style.position = "relative";
                                                    a: {
                                                        if (performance && performance.getEntriesByType && (g = performance.getEntriesByType("navigation"), 0 < g.length)) { g = g[0].domComplete; break a }
                                                        g = performance && performance.timing && performance.timing.domComplete && performance.timeOrigin ? performance.timing.domComplete - performance.timeOrigin : void 0
                                                    }
                                                    g && yl(new zl("button", void 0, "rendered", "latency", Math.floor(d.m - g).toString(),
                                                        Math.floor(d.j - g).toString(), Math.floor(d.o - g).toString()), 1)
                                                }
                                                fm(a, h, e)
                                            } else f ? _.t("Unable to resize iframe. Invalid dimensions.") : _.t("Unable to resize iframe. No iframe found with id: " + (g + "."))
                                        }
                                        break;
                                    default:
                                        _.t("Unknown command type (" + e + ") received in the button channel.")
                                }
                            }
                        }
                    }, b.source.postMessage({ type: "channelConnect" }, a.H, [c.port2])) : b.data.channelId && a.l && (a.l && _.ie(a.l)) === b.data.channelId && (c = new MessageChannel, c.port1.onmessage = function(d) { a.F(d) }, b.source.postMessage({
                        type: "channelConnect",
                        nonce: a.l
                    }, a.H, [c.port2]))
                }
            };
        Gm.prototype.F = function(a) {
            if (a.data && a.data.type) switch (_.q("Message received: " + JSON.stringify(a.data)), a.data.type) {
                case "response":
                    var b = Im(this, !0),
                        c = a.data.response,
                        d = c && c.credential;
                    if (d) {
                        var e = this.Aa,
                            f = Sl(e);
                        delete f.disable_auto_prompt;
                        f.g && yl(new zl("onetap", void 0, "resetCooldown", f.g.toString()));
                        f.g = 0;
                        Tl(e, f);
                        f = Sl(e);
                        delete f.disable_auto_select;
                        Tl(e, f);
                        this.callback && (this.callback.call(this, c), _.q("Response received: " + JSON.stringify(c)));
                        c = this.g.client_id;
                        e = gl();
                        if (c && e) {
                            f = hl(c);
                            var g = hl(e);
                            !(f && g || c !== e) || f && g && f === g || _.t("The client ids used by Google Sign In and One Tap should be same or from the same project.\nOne Tap may be blocked in the near future if mismatched.")
                        }
                    }
                    b && (d ? Km(this, "credential_returned") : (Jm(this, "issuing_failed"), Cl("issuingFailed")), em(this));
                    a.data.announcement && tl(a.data.announcement);
                    break;
                case "activity":
                    a.data.activity && this.Ya(a.data.activity);
                    break;
                case "command":
                    if (b = a.data.command) switch (b) {
                        case "close":
                            a.data.suppress && (a = this.Aa, b = Sl(a),
                                b.g = Math.min(b.g + 1, 4), b.disable_auto_prompt = (new Date).getTime() + 1E3 * sm[b.g], yl(new zl("onetap", void 0, "startCooldown", b.g.toString())), Tl(a, b));
                            Im(this, !0) && (Jm(this, "user_cancel"), em(this), Cl("userCancel"));
                            break;
                        case "resize":
                            a = a.data.height;
                            if (ql(a)) {
                                a: {
                                    if (b = document.getElementById("credential_picker_container")) {
                                        if (d = b.getElementsByTagName("iframe"), 0 < d.length) {
                                            d = d.item(0);
                                            c = d.clientHeight;
                                            b.style.height = a + "px";
                                            d.style.height = a + "px";
                                            d.style.display = "";
                                            b = c;
                                            break a
                                        }
                                    } else if (b = document.getElementById("credential_picker_iframe")) {
                                        d =
                                            b.clientHeight;
                                        b.style.height = a + "px";
                                        b.style.display = "";
                                        b = d;
                                        break a
                                    }
                                    b = void 0
                                }
                                fm(this, a, b)
                            }
                            break;
                        case "cancel_protect_start":
                            this.C = !0;
                            break;
                        case "cancel_protect_end":
                            this.C = !1
                    }
            }
        };
        var Qm = function(a, b, c) {
            var d = { successful: !1 },
                e = a.g.client_id;
            e ? (b = { client_id: e, hint: b }, a.s && (b.as = a.s), el(a.sc, b, function(f) {
                if (f && "null" !== f) {
                    if (f = new im(_.ad(f)), d.successful = !!_.I(f, 3), Z("Revoke XHR status: " + d.successful), !d.successful)
                        if (null != _.F(f, 2)) {
                            f = _.J(f, _.Ke, 2);
                            _.ce(f);
                            switch (_.F(f, 1)) {
                                case 1:
                                case 2:
                                    f = "opt_out_or_no_session";
                                    break;
                                case 3:
                                    f = "client_not_found";
                                    break;
                                case 4:
                                    f = "client_not_allowed";
                                    break;
                                case 5:
                                    f = "invalid_origin";
                                    break;
                                case 6:
                                    f = "cross_origin_request_not_allowed";
                                    break;
                                case 7:
                                    f =
                                        "secure_http_required";
                                    break;
                                case 8:
                                    f = "invalid_parameter";
                                    break;
                                case 9:
                                    f = "browser_not_supported";
                                    break;
                                case 12:
                                    f = "web_view_not_supported";
                                    break;
                                default:
                                    f = "unknown_error"
                            }
                            d.error = f
                        } else d.error = "unknown_error"
                } else _.v("Invalid response is returned for revoke request."), d.error = "invalid_response";
                c && c(d)
            })) : (_.v("Failed to revoke. Missing config parameter client_id."), c && (d.error = "missing_client_id", c(d)))
        };
        Gm.prototype.za = function(a, b) {
            (void 0 === b ? 0 : b) && this.u && (a ? this.u.set("ll", a) : this.u.sb("ll"));
            _.be(a)
        };
        var El = { client_id: "str", auto_select: "bool", ux_mode: "str", ui_mode: "str", context: "str", nonce: "str", hosted_domain: "str", hint: "str", existing: "bool", special_accounts: "bool", state: "str", callback: "func", prompt_parent_id: "str", prompt_lifetime_sec: "num", cancel_on_tap_outside: "bool", state_cookie_domain: "str", native_callback: "func", login_uri: "str", native_login_uri: "str", native_id_param: "str", native_password_param: "str", auto_prompt: "bool", skip_prompt_cookie: "str", log_level: "str", moment_callback: "func", allowed_parent_origin: "origin" },
            Fl = Object.keys(El),
            Kl = { parent_id: "str", size: "str", theme: "str", text: "str", shape: "str", width: "num", min_width: "num", logo_alignment: "str", type: "str", locale: "str", nonce: "str", state: "str" };
        var Ml = function(a) {
            a = Object.assign(Object.assign({}, window.__G_ID_OPTIONS__), a);
            Gm.call(this, a);
            this.B = a && a.native_callback;
            this.h = a && a.allowed_parent_origin;
            this.ba = !1;
            this.G = !!this.h;
            if (this.h && this.h && "function" !== typeof this.h)
                if ("string" === typeof this.h) { if (!fl(this.h)) throw Error("aa"); } else if (Array.isArray(this.h))
                for (a = 0; a < this.h.length; a++)
                    if ("string" !== typeof this.h[a] || !fl(this.h[a])) throw Error("ba");
        };
        _.O(Ml, Gm);
        Ml.prototype.ha = function(a) { this.B = a.native_callback };
        Ml.prototype.i = function(a) {
            _.q("Prompt will not be displayed");
            this.B && Rm(this);
            Gm.prototype.i.call(this, a)
        };
        var Rm = function(a) { a.ba || (a.ba = !0, "credentials" in navigator && navigator.credentials.get({ password: !0, Sc: "required" }).then(function(b) { a.B && a.B(b) })) };
        Ml.prototype.Za = function(a, b) {
            var c = this;
            this.G && this.h ? (_.q("Verifying parent origin."), _.Yk(this.h, function() {
                _.Qk ? _.Rk({ command: "set_ui_mode", mode: c.o }) : _.t("Set ui mode command was not sent due to missing verified parent origin.");
                _.cl(c.R);
                Gm.prototype.Za.call(c, a, b)
            })) : Gm.prototype.Za.call(this, a, b)
        };
        Ml.prototype.F = function(a) {
            Gm.prototype.F.call(this, a);
            if (this.G && a.data && a.data.type) switch (a.data.type) {
                case "response":
                    a.data.response && a.data.response.credential && (this.rc = !0);
                    break;
                case "command":
                    switch (a.data.command) {
                        case "close":
                            this.rc ? _.al(0) : _.bl();
                            break;
                        case "resize":
                            a = a.data.height;
                            "number" === typeof a && !isNaN(a) && 0 < a && _.al(a);
                            break;
                        case "cancel_protect_start":
                            _.cl(!1);
                            break;
                        case "cancel_protect_end":
                            _.cl(this.R)
                    }
            }
        };
        Ml.prototype.sa = function(a) { ol(this.D, a, "bottom_sheet" === this.o, this.G) };
        (function(a) {
            a = void 0 === a ? document.readyState : a;
            "loading" !== a && (Vl(), Xl());
            _.H(document, "DOMContentLoaded", function() {
                Vl();
                Xl()
            }, !1)
        })();
        _.x("google.accounts.id.cancel", function() {
            var a = window.__G_ID_CLIENT__;
            a && Im(a, !0) && (Km(a, "cancel_called"), Cl("cancel"))
        });
        _.x("google.accounts.id.disableAutoSelect", Ul);
        _.x("google.accounts.id.initialize", Ol);
        _.x("google.accounts.id.prompt", Pl);
        _.x("google.accounts.id.PromptMomentNotification", rm);
        _.x("google.accounts.id.renderButton", Rl);
        _.x("google.accounts.id.revoke", function(a, b) {
            var c = window.__G_ID_CLIENT__;
            c ? Qm(c, a, b) : _.v("Attempt to call revoke() before initialize().")
        });
        _.x("google.accounts.id.storeCredential", function(a, b) { "credentials" in navigator ? navigator.credentials.store(a).then(function() { b && b() }).catch(function(c) { _.v("Store credential failed: " + JSON.stringify(c)) }) : b && b() });
        _.x("google.accounts.id.setLogLevel", function(a) {
            var b = window.__G_ID_CLIENT__;
            b || (Ol(), b = window.__G_ID_CLIENT__);
            a = a ? a.toLowerCase() : void 0;
            void 0 === a || 0 <= (0, _.ra)(gm, a) ? b.za(a, !0) : (_.v("Log level is invalid. Supported log levels are: info, warn, error. Log level set to warn by default"), b.za(void 0, !0))
        });
        var Sm = function(a, b) {
                this.i = b.auth_url || "https://accounts.google.com/o/oauth2/auth";
                this.j = $l(a, b);
                this.g = void 0;
                this.h = a;
                this.m = !1
            },
            Tm = function(a) {
                a.m || (a.m = !0, window.addEventListener("message", function(b) {
                    try {
                        if (b.data) {
                            var c = JSON.parse(b.data).params;
                            c ? a.g && c.id === a.g ? c.clientId !== a.j.client_id ? Z("Message ignored. Client id does not match.", "OAUTH2_CLIENT") : "authResult" !== c.type ? Z("Message ignored. Invalid event type.", "OAUTH2_CLIENT") : (a.g = void 0, a.l(c.authResult)) : Z("Message ignored. Request id does not match.",
                                "OAUTH2_CLIENT") : Z("Message ignored. No params in message.", "OAUTH2_CLIENT")
                        } else Z("Message ignored. No event data.", "OAUTH2_CLIENT")
                    } catch (d) { Z("Message ignored. Error in parsing event data.", "OAUTH2_CLIENT") }
                }, !1))
            },
            Um = function(a, b) {
                a.g = "auth" + Math.floor(1E6 * Math.random() + 1);
                var c = location.protocol,
                    d = location.host,
                    e = c.indexOf(":");
                0 < e && (c = c.substring(0, e));
                c = ["storagerelay://", c, "/", d, "?"];
                c.push("id=" + a.g);
                b.redirect_uri = c.join("")
            };
        var Vm = new _.Hj(_.Fj, "g_auth_code_window"),
            Wm = function(a) {
                Sm.call(this, "code", a);
                this.callback = a.callback;
                a: switch (a.ux_mode) {
                    case "redirect":
                        a = "redirect";
                        break a;
                    default:
                        a = "popup"
                }
                this.o = a;
                Z("Instantiated.", "CODE_CLIENT")
            };
        _.O(Wm, Sm);
        Wm.prototype.l = function(a) {
            Z("Handling response. " + JSON.stringify(a), "CODE_CLIENT");
            this.callback && this.callback.call(this, a)
        };
        Wm.prototype.requestCode = function() { if (_.K("enable_m3")) { var a = this.j; "redirect" === this.o ? (Z("Starting redirect flow.", "CODE_CLIENT"), _.Je(window.location, Zl(this.h, this.i, a))) : (Z("Starting popup flow.", "CODE_CLIENT"), Tm(this), Um(this, a), _.Ij(Zl(this.h, this.i, a), Vm)) } else _.v("Attempted to request code with the experiment off", "CODE_CLIENT") };
        var Xm = new _.Hj(_.Fj, "g_auth_token_window"),
            Ym = window,
            Zm = function(a) {
                Sm.call(this, "token", a);
                this.callback = a.callback;
                Z("Instantiated.", "TOKEN_CLIENT")
            };
        _.O(Zm, Sm);
        Zm.prototype.l = function(a) {
            Z("Handling response. " + JSON.stringify(a), "TOKEN_CLIENT");
            Z("Trying to set gapi client token.", "TOKEN_CLIENT");
            if (a.access_token)
                if (Ym.gapi && Ym.gapi.client && Ym.gapi.client.setToken) try { Ym.gapi.client.setToken.call(this, a) } catch (b) { _.v("Set token failed. Exception encountered.", "TOKEN_CLIENT"), console.g(b) } else _.t("Set token failed. Gapi.client.setToken undefined.", "TOKEN_CLIENT");
                else _.t("Set token failed. No access token in response.", "TOKEN_CLIENT");
            this.callback && this.callback.call(this,
                a)
        };
        Zm.prototype.requestAccessToken = function(a) {
            if (_.K("enable_m3")) {
                var b = this.j;
                a = a || {};
                b = $l(this.h, { client_id: b.client_id, scope: b.scope, prompt: void 0 === a.prompt ? b.prompt : a.prompt, hint: void 0 === a.hint ? b.hint : a.hint, state: void 0 === a.state ? b.state : a.state, hosted_domain: b.hosted_domain, include_granted_scopes: void 0 === a.include_granted_scopes ? b.include_granted_scopes : a.include_granted_scopes });
                Z("Starting popup flow.", "TOKEN_CLIENT");
                Tm(this);
                Um(this, b);
                _.Ij(Zl(this.h, this.i, b), Xm)
            } else _.v("Attempted to request access token with the experiment off", "TOKEN_CLIENT")
        };
        _.x("google.accounts.oauth2.initCodeClient", function(a) {
            if (_.K("enable_m3")) return new Wm(a);
            _.v("Attempted to initialize Code client with the experiment off.", "OAUTH2_API")
        });
        _.x("google.accounts.oauth2.CodeClient", Wm);
        _.x("google.accounts.oauth2.initTokenClient", function(a) {
            if (_.K("enable_m3")) return new Zm(a);
            _.v("Attempted to initialize Token client with the experiment off.", "OAUTH2_API")
        });
        _.x("google.accounts.oauth2.TokenClient", Zm);
        _.x("google.accounts.oauth2.hasGrantedAllScopes", function(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (_.K("enable_m3")) return cm.apply(null, [a].concat(Al(c)));
            _.v("Attempted to call hasGrantedAllScopes with the experiment off.", "OAUTH2_API")
        });
        _.x("google.accounts.oauth2.hasGrantedAnyScope", function(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (_.K("enable_m3")) return dm.apply(null, [a].concat(Al(c)));
            _.v("Attempted to call hasGrantedAnyScope with the experiment off.", "OAUTH2_API")
        });
        _.x("google.accounts.oauth2.revoke", function(a, b) { _.K("enable_m3") ? el("https://oauth2.googleapis.com/revoke", { token: a }, b) : _.v("Attempted to call revoke with the experiment off.", "OAUTH2_API") });

    } catch (e) { _._DumpException(e) }
}).call(this, this.default_gsi);
// Google Inc.

//# sourceURL=/_/gsi/_/js/k=gsi.gsi.pt_BR.1EYgsO5gAo8.O/am=EQ/d=1/ct=zgms/rs=AF0KOtWmLNJaR3YPldFLvxVj5w3q6xKWvA/m=gis_client_library