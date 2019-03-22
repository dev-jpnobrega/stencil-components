"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * labelcomponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n, t) { return "sc-" + n.t + (t && t !== c ? "-" + t : ""); }
function t(n, t) { return n + (t ? "-h" : "-s"); }
function e(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    k.push(arguments[f]); for (; k.length > 0;) {
    var c = k.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            k.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && k.push(f);
        t.class = k.join(" "), k.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], j) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, i: void 0, o: !1 }; }
exports.h = e;
function r(n, t, e) { void 0 === e && (e = {}); var r = Array.isArray(t) ? t : [t], i = n.document, o = e.hydratedCssClass || "hydrated", u = e.exclude; u && (r = r.filter(function (n) { return -1 === u.indexOf(n[0]); })); var c = r.map(function (n) { return n[0]; }); if (c.length > 0) {
    var a = i.createElement("style");
    a.innerHTML = c.join() + "{visibility:hidden}." + o + "{visibility:inherit}", a.setAttribute("data-styles", ""), i.head.insertBefore(a, i.head.firstChild);
} var s = e.namespace || "labelcomponent"; return R || (R = !0, function l(n, t, e) { (n["s-apps"] = n["s-apps"] || []).push(t), e.componentOnReady || (e.componentOnReady = function t() { function e(t) { if (r.nodeName.indexOf("-") > 0) {
    for (var e = n["s-apps"], i = 0, o = 0; o < e.length; o++)
        if (n[e[o]].componentOnReady) {
            if (n[e[o]].componentOnReady(r, t))
                return;
            i++;
        }
    if (i < e.length)
        return void (n["s-cr"] = n["s-cr"] || []).push([r, t]);
} t(null); } var r = this; return n.Promise ? new n.Promise(e) : { then: e }; }); }(n, s, n.HTMLElement.prototype)), applyPolyfills(n).then(function () { function t() { r.forEach(function (t) { var e; !function r(n) { return /\{\s*\[native code\]\s*\}/.test("" + n); }(n.customElements.define) ? (e = function (t) { return n.HTMLElement.call(this, t); }).prototype = Object.create(n.HTMLElement.prototype, { constructor: { value: e, configurable: !0 } }) : e = new Function("w", "return class extends w.HTMLElement{}")(n), N[s].u(function i(n) { var t = $(n), e = t.s, r = p(n[0]); return t.s = function (n) { var t = n.mode, i = n.scoped; return function o(n, t, e) { return Promise.resolve().then(function () { return require("./build/" + n + (t ? ".sc" : "") + ".entry.js"); }).then(function (n) { return n[e]; }); }("string" == typeof e ? e : e[t], i, r); }, t; }(t), e); }); } if (!N[s]) {
    var u = {}, c = e.resourcesUrl || "./";
    f(s, u, n, i, c, o), N[s] = P(s, u, n, i, c, o, r);
} if (window.customStyleShim)
    return N[s].l = window.customStyleShim, N[s].l.initShim().then(t); t(); }); }
exports.defineCustomElement = r;
this && this.v;
var i = this && this.p || function (n, t, e, r) { return new (e || (e = Promise))(function (i, o) { function u(n) { try {
    c(r.next(n));
}
catch (n) {
    o(n);
} } function f(n) { try {
    c(r.throw(n));
}
catch (n) {
    o(n);
} } function c(n) { n.done ? i(n.value) : new e(function (t) { t(n.value); }).then(u, f); } c((r = r.apply(n, t || [])).next()); }); }, o = this && this.m || function (n, t) { function e(e) { return function (u) { return function c(e) { if (r)
    throw new TypeError("Generator is already executing."); for (; f;)
    try {
        if (r = 1, i && (o = 2 & e[0] ? i.return : e[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, e[1])).done)
            return o;
        switch (i = 0, o && (e = [2 & e[0], o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4: return f.label++, { value: e[1], done: !1 };
            case 5:
                f.label++, i = e[1], e = [0];
                continue;
            case 7:
                e = f.M.pop(), f.g.pop();
                continue;
            default:
                if (!(o = (o = f.g).length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    f = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    f.label = e[1];
                    break;
                }
                if (6 === e[0] && f.label < o[1]) {
                    f.label = o[1], o = e;
                    break;
                }
                if (o && f.label < o[2]) {
                    f.label = o[2], f.M.push(e);
                    break;
                }
                o[2] && f.M.pop(), f.g.pop();
                continue;
        }
        e = t.call(n, f);
    }
    catch (n) {
        e = [6, n], i = 0;
    }
    finally {
        r = o = 0;
    } if (5 & e[0])
    throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 }; }([e, u]); }; } var r, i, o, u, f = { label: 0, k: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, g: [], M: [] }; return u = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; }, u = this, f = function () { };
function applyPolyfills(n) { n.j = function () { function t() { var n = setTimeout; return function () { return n(e, 1); }; } function e() { for (var n = 0; n < m; n += 2)
    (0, S[n])(S[n + 1]), S[n] = void 0, S[n + 1] = void 0; m = 0; } function r(n, t) { var e = this, r = new this.constructor(o); void 0 === r[_] && h(r); var i = e.A; if (i) {
    var u = arguments[i - 1];
    g(function () { return d(i, r, u, e.C); });
}
else
    v(e, r, n, t); return r; } function i(n) { if (n && "object" == typeof n && n.constructor === this)
    return n; var t = new this(o); return c(t, n), t; } function o() { } function u(n) { try {
    return n.then;
}
catch (n) {
    return P.error = n, P;
} } function f(n, t, e) { t.constructor === n.constructor && e === r && t.constructor.resolve === i ? function (n, t) { t.A === W ? s(n, t.C) : t.A === x ? l(n, t.C) : v(t, void 0, function (t) { return c(n, t); }, function (t) { return l(n, t); }); }(n, t) : e === P ? (l(n, P.error), P.error = null) : void 0 === e ? s(n, t) : "function" == typeof e ? function (n, t, e) { g(function (n) { var r = !1, i = function (n, t, e, r) { try {
    n.call(t, e, r);
}
catch (n) {
    return n;
} }(e, t, function (e) { r || (r = !0, t !== e ? c(n, e) : s(n, e)); }, function (t) { r || (r = !0, l(n, t)); }, n.S); !r && i && (r = !0, l(n, i)); }, n); }(n, t, e) : s(n, t); } function c(n, t) { if (n === t)
    l(n, new TypeError("cannot resolve promise w/ itself"));
else {
    var e = typeof t;
    null === t || "object" !== e && "function" !== e ? s(n, t) : f(n, t, u(t));
} } function a(n) { n.O && n.O(n.C), p(n); } function s(n, t) { n.A === T && (n.C = t, n.A = W, 0 !== n._.length && g(p, n)); } function l(n, t) { n.A === T && (n.A = x, n.C = t, g(a, n)); } function v(n, t, e, r) { var i = n._, o = i.length; n.O = null, i[o] = t, i[o + W] = e, i[o + x] = r, 0 === o && n.A && g(p, n); } function p(n) { var t = n._, e = n.A; if (0 !== t.length) {
    for (var r, i, o = n.C, u = 0; u < t.length; u += 3)
        r = t[u], i = t[u + e], r ? d(e, r, i, o) : i(o);
    n._.length = 0;
} } function d(n, t, e, r) { var i = "function" == typeof e, o = void 0, u = void 0, f = void 0, a = void 0; if (i) {
    try {
        o = e(r);
    }
    catch (n) {
        P.error = n, o = P;
    }
    if (o === P ? (a = !0, u = o.error, o.error = null) : f = !0, t === o)
        return void l(t, new TypeError("Cannot return same promise"));
}
else
    o = r, f = !0; t.A === T && (i && f ? c(t, o) : a ? l(t, u) : n === W ? s(t, o) : n === x && l(t, o)); } function h(n) { n[_] = N++, n.A = void 0, n.C = void 0, n._ = []; } var y, w = Array.isArray ? Array.isArray : function (n) { return "[object Array]" === Object.prototype.toString.call(n); }, m = 0, b = void 0, M = void 0, g = function (n, t) { S[m] = n, S[m + 1] = t, 2 === (m += 2) && (M ? M(e) : O()); }, k = (y = void 0 !== n ? n : void 0) || {}, j = k.MutationObserver || k.WebKitMutationObserver; k = "undefined" == typeof self; var $, A, E, C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, S = Array(1e3), O = void 0; O = j ? ($ = 0, A = new j(e), E = document.createTextNode(""), A.observe(E, { characterData: !0 }), function () { E.data = $ = ++$ % 2; }) : C ? function () { var n = new MessageChannel; return n.port1.onmessage = e, function () { return n.port2.postMessage(0); }; }() : void 0 === y && "function" == typeof require ? function () { try {
    var n = Function("return this")().require("vertx");
    return void 0 !== (b = n.T || n.W) ? function () { b(e); } : t();
}
catch (n) {
    return t();
} }() : t(); var _ = Math.random().toString(36).substring(2), T = void 0, W = 1, x = 2, P = { error: null }, N = 0, R = function () { function n(n, t) { this.P = n, this.N = new n(o), this.N[_] || h(this.N), w(t) ? (this.R = this.length = t.length, this.C = Array(this.length), 0 === this.length ? s(this.N, this.C) : (this.length = this.length || 0, this.L(t), 0 === this.R && s(this.N, this.C))) : l(this.N, Error("Array Methods must be provided an Array")); } return n.prototype.L = function (n) { for (var t = 0; this.A === T && t < n.length; t++)
    this.D(n[t], t); }, n.prototype.D = function (n, t) { var e = this.P, c = e.resolve; c === i ? (c = u(n)) === r && n.A !== T ? this.F(n.A, t, n.C) : "function" != typeof c ? (this.R--, this.C[t] = n) : e === L ? (f(e = new e(o), n, c), this.H(e, t)) : this.H(new e(function (t) { return t(n); }), t) : this.H(c(n), t); }, n.prototype.F = function (n, t, e) { var r = this.N; r.A === T && (this.R--, n === x ? l(r, e) : this.C[t] = e), 0 === this.R && s(r, this.C); }, n.prototype.H = function (n, t) { var e = this; v(n, void 0, function (n) { return e.F(W, t, n); }, function (n) { return e.F(x, t, n); }); }, n; }(), L = function () { function n(t) { if (this[_] = N++, this.C = this.A = void 0, this._ = [], o !== t) {
    if ("function" != typeof t)
        throw new TypeError("Must pass a resolver fn as 1st arg");
    if (!(this instanceof n))
        throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");
    !function (n, t) { try {
        t(function (t) { c(n, t); }, function (t) { l(n, t); });
    }
    catch (t) {
        l(n, t);
    } }(this, t);
} } return n.prototype.catch = function (n) { return this.then(null, n); }, n.prototype.q = function (n) { var t = this.constructor; return this.then(function (e) { return t.resolve(n()).then(function () { return e; }); }, function (e) { return t.resolve(n()).then(function () { throw e; }); }); }, n; }(); return L.prototype.then = r, L.all = function (n) { return new R(this, n).N; }, L.race = function (n) { var t = this; return w(n) ? new t(function (e, r) { for (var i = n.length, o = 0; o < i; o++)
    t.resolve(n[o]).then(e, r); }) : new t(function (n, t) { return t(new TypeError("Must pass array to race")); }); }, L.resolve = i, L.reject = function (n) { var t = new this(o); return l(t, n), t; }, L.U = function (n) { M = n; }, L.B = function (n) { g = n; }, L.I = g, L.G = function () { var n = void 0; if ("undefined" != typeof global)
    n = global;
else if ("undefined" != typeof self)
    n = self;
else
    try {
        n = Function("return this")();
    }
    catch (n) {
        throw Error("polyfill failed");
    } var t = n.Promise; if (t) {
    var e = null;
    try {
        e = Object.prototype.toString.call(t.resolve());
    }
    catch (n) { }
    if ("[object Promise]" === e && !t.cast)
        return;
} n.Promise = L; }, L.Promise = L, L.G(), L; }(); var t = []; return n.customElements && (!n.Element || n.Element.prototype.closest && n.Element.prototype.matches && n.Element.prototype.remove) || t.push(Promise.resolve().then(function () { return require("./polyfills/dom.js"); })), "function" == typeof Object.assign && Object.entries || t.push(Promise.resolve().then(function () { return require("./polyfills/object.js"); })), Array.prototype.find && Array.prototype.includes || t.push(Promise.resolve().then(function () { return require("./polyfills/array.js"); })), String.prototype.startsWith && String.prototype.endsWith || t.push(Promise.resolve().then(function () { return require("./polyfills/string.js"); })), n.fetch || t.push(Promise.resolve().then(function () { return require("./polyfills/fetch.js"); })), "undefined" != typeof WeakMap && n.CSS && n.CSS.supports && n.CSS.supports("color", "var(--c)") || t.push(Promise.resolve().then(function () { return require("./polyfills/css-shim.js"); })), function e() { try {
    var n = new URL("b", "http://a");
    return n.pathname = "c%20d", "http://a/c%20d" === n.href && n.searchParams;
}
catch (n) {
    return !1;
} } || t.push(Promise.resolve().then(function () { return require("./polyfills/url.js"); })), Promise.all(t).then(function (t) { t.forEach(function (t) { try {
    t.applyPolyfill(n, n.document);
}
catch (n) {
    console.error(n);
} }); }); }
var c = "$", a = {}, s = function (t, e, r, i) { var o = r.t + c, u = r[o]; if ((2 === r.Y || 1 === r.Y && !t.J.Z) && (i["s-sc"] = u ? n(r, i.mode) : n(r)), u) {
    var f = e.K.head, a = t.V.get(f);
    if (a || t.V.set(f, a = {}), !a[o]) {
        var s = void 0;
        if (t.l ? s = t.l.createHostStyle(i, o, u) : ((s = e.X("style")).innerHTML = u, a[o] = !0), s) {
            var l = f.querySelectorAll("[data-styles]");
            e.nn(f, s, l.length && l[l.length - 1].nextSibling || f.firstChild);
        }
    }
} }, l = function (n) { return null != n; }, v = function (n) { return n.toLowerCase(); }, p = function (n) { return v(n).split("-").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(""); }, d = "http://www.w3.org/1999/xlink", h = function (n, t, e, r, i, o) { if ("class" !== e || o)
    if ("style" === e) {
        for (var u in r)
            i && null != i[u] || (/-/.test(u) ? t.style.removeProperty(u) : t.style[u] = "");
        for (var u in i)
            r && i[u] === r[u] || (/-/.test(u) ? t.style.setProperty(u, i[u]) : t.style[u] = i[u]);
    }
    else if ("o" !== e[0] || "n" !== e[1] || !/[A-Z]/.test(e[2]) || e in t)
        if ("list" !== e && "type" !== e && !o && (e in t || -1 !== ["object", "function"].indexOf(typeof i) && null !== i)) {
            var f = n.tn(t);
            f && f.en && f.en[e] ? w(t, e, i) : "ref" !== e && (w(t, e, null == i ? "" : i), null != i && !1 !== i || n.J.rn(t, e));
        }
        else
            null != i && "key" !== e ? function (n, t, e, r, i) { void 0 === r && (r = "boolean" == typeof e), i = t !== (t = t.replace(/^xlink\:?/, "")), null == e || r && (!e || "false" === e) ? i ? n.removeAttributeNS(d, v(t)) : n.removeAttribute(t) : "function" != typeof e && (e = r ? "" : e.toString(), i ? n.setAttributeNS(d, v(t), e) : n.setAttribute(t, e)); }(t, e, i) : (o || n.J.in(t, e) && (null == i || !1 === i)) && n.J.rn(t, e);
    else
        e = v(e) in t ? v(e.substring(2)) : v(e[2]) + e.substring(3), i ? i !== r && n.J.on(t, e, i, 0) : n.J.un(t, e, 0);
else if (r !== i) {
    var c = y(r), a = y(i), s = c.filter(function (n) { return !a.includes(n); }), l = y(t.className).filter(function (n) { return !s.includes(n); }), p = a.filter(function (n) { return !c.includes(n) && !l.includes(n); });
    l.push.apply(l, p), t.className = l.join(" ");
} }, y = function (n) { return null == n || "" === n ? [] : n.trim().split(/\s+/); }, w = function (n, t, e) { try {
    n[t] = e;
}
catch (n) { } }, m = function (n, t, e, r, i) { var o = 11 === e.i.nodeType && e.i.host ? e.i.host : e.i, u = t && t.vattrs || a, f = e.vattrs || a; for (i in u)
    f && null != f[i] || null == u[i] || h(n, o, i, u[i], void 0, r, e.o); for (i in f)
    i in u && f[i] === ("value" === i || "checked" === i ? o[i] : u[i]) || h(n, o, i, u[i], f[i], r, e.o); }, b = !1, M = function (n, t) { n && (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.i), n.vchildren && n.vchildren.forEach(function (n) { M(n, t); })); }, g = function (n, t) { var e = 0, r = !1, i = function () { return t.performance.now(); }, o = !1 !== n.asyncQueue, u = Promise.resolve(), f = [], c = [], a = [], s = [], l = function (t) { return function (e) { t.push(e), r || (r = !0, n.raf(d)); }; }, v = function (n) { for (var t = 0; t < n.length; t++)
    try {
        n[t](i());
    }
    catch (n) {
        console.error(n);
    } n.length = 0; }, p = function (n, t) { for (var e, r = 0; r < n.length && (e = i()) < t;)
    try {
        n[r++](e);
    }
    catch (n) {
        console.error(n);
    } r === n.length ? n.length = 0 : 0 !== r && n.splice(0, r); }, d = function () { e++, v(c); var t = o ? i() + 7 * Math.ceil(e * (1 / 22)) : Infinity; p(a, t), p(s, t), a.length > 0 && (s.push.apply(s, a), a.length = 0), (r = c.length + a.length + s.length > 0) ? n.raf(d) : e = 0; }; return n.raf || (n.raf = t.requestAnimationFrame.bind(t)), { tick: function (n) { f.push(n), 1 === f.length && u.then(function () { return v(f); }); }, read: l(c), write: l(a) }; }, k = [], j = { forEach: function (n, t) { return n.forEach(t); }, map: function (n, t) { return n.map(t); } }, $ = function (n, t, e) { var r = n[0], i = n[1], o = n[3], u = n[4], f = n[5], c = { color: { fn: "color" } }; if (o)
    for (t = 0; t < o.length; t++)
        c[(e = o[t])[0]] = { cn: e[1], an: !!e[2], fn: "string" == typeof e[3] ? e[3] : e[3] ? e[0] : 0, sn: e[4] }; return { t: r, s: i, en: Object.assign({}, c), Y: u, ln: f ? f.map(A) : void 0 }; }, A = function (n) { return { vn: n[0], pn: n[1], dn: !!n[2], hn: !!n[3], yn: !!n[4] }; }, E = function (n, t) { return l(t) && "object" != typeof t && "function" != typeof t ? n === Boolean || 4 === n ? "false" !== t && ("" === t || !!t) : n === Number || 8 === n ? parseFloat(t) : n === String || 2 === n ? t.toString() : t : t; }, C = function (n, t, e) { n.wn.add(t), n.mn.has(t) || (n.mn.set(t, !0), n.bn ? n.queue.write(function () { return S(n, t, e); }) : n.queue.tick(function () { return S(n, t, e); })); }, S = function (n, r, f, c, a, s) { return i(u, void 0, void 0, function () { var i, u; return o(this, function (o) { switch (o.label) {
    case 0: return n.mn.delete(r), n.Mn.has(r) ? [3, 12] : (a = n.gn.get(r)) ? [3, 6] : (s = n.kn.get(r)) && !s["s-rn"] ? ((s["s-rc"] = s["s-rc"] || []).push(function () { S(n, r, f); }), [2]) : (a = T(n, r, n.jn.get(r), f), [3, 5]);
    case 1: return o.g.push([1, 4, , 5]), a.componentWillLoad ? [4, a.componentWillLoad()] : [3, 3];
    case 2: o.k(), o.label = 3;
    case 3: return [3, 5];
    case 4: return i = o.k(), n.$n(i, 3, r), [3, 5];
    case 5:
    case 6: return [3, 11];
    case 7: return o.g.push([7, 10, , 11]), a.componentWillUpdate ? [4, a.componentWillUpdate()] : [3, 9];
    case 8: o.k(), o.label = 9;
    case 9: return [3, 11];
    case 10: return u = o.k(), n.$n(u, 5, r), [3, 11];
    case 11: (function (n, r, i, o) { try {
        var u = r.An.host, f = r.An.encapsulation, c = i;
        if (!i["s-rn"]) {
            n.En(n, n.J, r, i);
            var a = i["s-sc"];
            a && (n.J.Cn(i, t(a, !0)), "scoped" === f && n.J.Cn(i, t(a)));
        }
        if (o.render || o.hostData || u) {
            n.Sn = !0;
            var s = o.render && o.render();
            n.Sn = !1;
            var l = e(null, void 0, s), v = n.On.get(i) || {};
            v.i = c, n.On.set(i, n.render(i, v, l, !1, f));
        }
        n.l && n.l.updateHost(i), i["s-rn"] = !0, i["s-rc"] && (i["s-rc"].forEach(function (n) { return n(); }), i["s-rc"] = null);
    }
    catch (t) {
        n.Sn = !1, n.$n(t, 8, i, !0);
    } })(n, n.tn(r), r, a), r["s-init"](), o.label = 12;
    case 12: return [2];
} }); }); }, O = function (n, t, e, r, i, o, u) { (u = n._n.get(t)) || n._n.set(t, u = {}), r !== u[e] && (u[e] = r, n.gn.get(t) && !n.Sn && t["s-rn"] && C(n, t, i)); }, _ = function (n, t, e, r) { Object.defineProperty(n, t, { configurable: !0, get: e, set: r }); }, T = function (n, t, e, r, i, o) { try {
    i = new (o = n.tn(t).An), function (n, t, e, r, i, o) { n.Tn.set(r, e), n._n.has(e) || n._n.set(e, {}), Object.entries(Object.assign({ color: { type: String } }, t.properties, { mode: { type: String } })).forEach(function (t) { var u = t[0], f = t[1]; (function (n, t, e, r, i, o, u, f, c) { if (t.type) {
        var a = n._n.get(e);
        !t.attr || void 0 !== a[i] && "" !== a[i] || (f = o && o.Wn) && l(c = f[t.attr]) && (a[i] = E(t.type, c)), e.hasOwnProperty(i) && (void 0 === a[i] && (a[i] = E(t.type, e[i])), "mode" !== i && delete e[i]), r.hasOwnProperty(i) && void 0 === a[i] && (a[i] = r[i]), _(r, i, function s(t) { return (t = n._n.get(n.Tn.get(this))) && t[i]; }, function v(e, r) { (r = n.Tn.get(this)) && t.mutable && O(n, r, i, e, u); });
    } })(n, f, e, r, u, i, o); }); }(n, o, t, i, e, r);
}
catch (e) {
    i = {}, n.$n(e, 7, t, !0);
} return n.gn.set(t, i), i; }, W = function (n, t) { for (var e = 0; e < t.childNodes.length; e++) {
    var r = t.childNodes[e];
    if (1 === r.nodeType) {
        if (n.tn(r) && !n.xn.has(r))
            return !1;
        if (!W(n, r))
            return !1;
    }
} return !0; }, x = function (n, t, e, r, i, o) { if (n.wn.delete(t), (i = n.kn.get(t)) && ((r = i["s-ld"]) && ((e = r.indexOf(t)) > -1 && r.splice(e, 1), r.length || i["s-init"] && i["s-init"]()), n.kn.delete(t)), n.Pn.length && !n.wn.size)
    for (; o = n.Pn.shift();)
        o(); }, P = function (n, t, r, i, o, u) { var f = r.performance, a = { html: {} }, p = r[n] = r[n] || {}, d = function (n, t, e) { var r = new WeakMap, i = { K: e, Z: !!e.documentElement.attachShadow, Nn: !1, Rn: function (n) { return n.nodeType; }, X: function (n) { return e.createElement(n); }, Ln: function (n, t) { return e.createElementNS(n, t); }, Dn: function (n) { return e.createTextNode(n); }, Fn: function (n) { return e.createComment(n); }, nn: function (n, t, e) { return n.insertBefore(t, e); }, Hn: function (n) { return n.remove(); }, qn: function (n, t) { return n.appendChild(t); }, Cn: function (n, t) { if (n.classList)
        n.classList.add(t);
    else if ("svg" === n.nodeName.toLowerCase()) {
        var e = n.getAttribute("class") || "";
        e.split(" ").includes(t) || (e += " " + t), n.setAttribute("class", e.trim());
    } }, Un: function (n) { return n.childNodes; }, Bn: function (n) { return n.parentNode; }, In: function (n) { return n.nextSibling; }, Gn: function (n) { return n.previousSibling; }, Qn: function (n) { return v(n.nodeName); }, Yn: function (n) { return n.textContent; }, Zn: function (n, t) { return n.textContent = t; }, zn: function (n, t) { return n.getAttribute(t); }, Jn: function (n, t, e) { return n.setAttribute(t, e); }, rn: function (n, t) { return n.removeAttribute(t); }, in: function (n, t) { return n.hasAttribute(t); }, Kn: function (t) { return t.getAttribute("mode") || (n.Context || {}).mode; }, Vn: function (n, r) { return "child" === r ? n.firstElementChild : "parent" === r ? i.Xn(n) : "body" === r ? e.body : "document" === r ? e : "window" === r ? t : n; }, on: function (t, e, o, u, f, c, a, s, l, v) { var p = t, d = o, h = r.get(t); v = e + u, h && h[v] && h[v](), "object" == typeof a && (p = a), p && (s = i.Nn ? { capture: !!f, passive: !!c } : !!f, n.ael(p, e, d, s), h || r.set(t, h = {}), h[v] = function () { p && n.rel(p, e, d, s), h[v] = null; }); }, un: function (n, t, e, i) { (i = r.get(n)) && (t ? i[t + e] && i[t + e]() : Object.keys(i).forEach(function (n) { i[n] && i[n](); })); }, nt: function (n, e, r, i) { return i = new t.CustomEvent(e, r), n && n.dispatchEvent(i), i; }, Xn: function (n, t) { return (t = i.Bn(n)) && 11 === i.Rn(t) ? t.host : t; }, tt: function (n, t, e, r) { return n.setAttributeNS(t, e, r); } }; return "function" != typeof t.CustomEvent && (t.CustomEvent = function (n, t, r) { return t = t || {}, (r = e.createEvent("CustomEvent")).initCustomEvent(n, t.bubbles, t.cancelable, t.detail), r; }, t.CustomEvent.prototype = t.Event.prototype), n.ael || (n.ael = function (n, t, e, r) { return n.addEventListener(t, e, r); }, n.rel = function (n, t, e, r) { return n.removeEventListener(t, e, r); }), i; }(p, r, i), h = d.K.documentElement, y = r["s-defined"] = r["s-defined"] || {}, w = { J: d, u: function (n, t) { r.customElements.get(n.t) || (function (n, t, e, r, i) { if (e.connectedCallback = function () { (function (n, t, e) { n.Mn.delete(e), n.xn.has(e) || (n.et = !0, n.wn.add(e), n.xn.set(e, !0), function (n, t, e) { for (e = t; e = n.J.Xn(e);)
        if (n.rt(e)) {
            n.it.has(t) || (n.kn.set(t, e), (e["s-ld"] = e["s-ld"] || []).push(t));
            break;
        } }(n, e), n.queue.tick(function () { n.jn.set(e, function (n, t, e, r, i) { if (e.mode || (e.mode = n.Kn(e)), e["s-cr"] || n.zn(e, "ssrv") || n.Z && 1 === t.Y || (e["s-cr"] = n.Dn(""), e["s-cr"]["s-cn"] = !0, n.nn(e, e["s-cr"], n.Un(e)[0])), !n.Z && 1 === t.Y)
        try {
            !window.HTMLElement || "shadowRoot" in window.HTMLElement.prototype || (e.shadowRoot = e);
        }
        catch (n) { } return r = { Wn: {} }, t.en && Object.keys(t.en).forEach(function (o) { (i = t.en[o].fn) && (r.Wn[i] = n.zn(e, i)); }), r; }(n.J, t, e)), n.ot(t, e); })); })(n, t, this); }, e.disconnectedCallback = function () { (function (n, t) { !n.ut && function (n, t) { for (; t;) {
        if (!n.Bn(t))
            return 9 !== n.Rn(t);
        t = n.Bn(t);
    } }(n.J, t) && (n.Mn.set(t, !0), x(n, t), M(n.On.get(t), !0), n.J.un(t), n.ft.delete(t), n.l && n.l.removeHost(t), [n.kn, n.ct, n.jn].forEach(function (n) { return n.delete(t); })); })(n, this); }, e["s-init"] = function () { (function (n, t, e, r, i, o) { if (W(n, t) && n.gn.get(t) && !n.Mn.has(t) && (!t["s-ld"] || !t["s-ld"].length)) {
        n.it.set(t, !0), n.at.has(t) || (n.at.set(t, !0), t["s-ld"] = void 0, n.J.Cn(t, e));
        try {
            M(n.On.get(t)), (o = n.ct.get(t)) && (o.forEach(function (n) { return n(t); }), n.ct.delete(t));
        }
        catch (e) {
            n.$n(e, 4, t);
        }
        x(n, t);
    } })(n, this, r); }, e.forceUpdate = function () { C(n, this, i); }, t.en) {
        var o = Object.entries(t.en), u = {};
        o.forEach(function (n) { var t = n[0], e = n[1].fn; e && (u[e] = t); }), u = Object.assign({}, u), e.attributeChangedCallback = function (n, t, e) { (function r(n, t, e, i) { var o = n[v(e)]; o && (t[o] = (null !== i || "boolean" != typeof t[o]) && i); })(u, this, n, e); }, function (n, t, e, r) { o.forEach(function (t) { var i = t[0], o = t[1]; 3 & o.cn && _(e, i, function t() { return (n._n.get(this) || {})[i]; }, function t(e) { O(n, this, i, E(o.sn, e), r); }); }); }(n, 0, e, i);
    } }(w, a[n.t] = n, t.prototype, u, f), t.observedAttributes = Object.values(n.en).map(function (n) { return n.fn; }).filter(function (n) { return !!n; }), r.customElements.define(n.t, t)); }, tn: function (n) { return a[d.Qn(n)]; }, st: function (n) { return t[n]; }, isClient: !0, rt: function (n) { return !(!y[d.Qn(n)] && !w.tn(n)); }, $n: function (n, t, e) { return console.error(n, t, e && e.tagName); }, queue: t.queue = g(p, r), ot: function (n, t) { var e = { mode: t.mode, scoped: !1 }; n.s(e).then(function (e) { try {
        n.An = e, function r(n, t, e, i, o) { if (i) {
            var u = t.t + (o || c);
            t[u] || (t[u] = i);
        } }(0, n, n.Y, e.style, e.styleMode);
    }
    catch (t) {
        console.error(t), n.An = function i() { };
    } C(w, t, f); }); }, Sn: !1, bn: !1, ut: !1, En: s, kn: new WeakMap, V: new WeakMap, xn: new WeakMap, ft: new WeakMap, at: new WeakMap, it: new WeakMap, Tn: new WeakMap, jn: new WeakMap, gn: new WeakMap, Mn: new WeakMap, mn: new WeakMap, ct: new WeakMap, lt: new WeakMap, On: new WeakMap, _n: new WeakMap, wn: new Set, Pn: [] }; return t.isServer = t.isPrerender = !(t.isClient = !0), t.window = r, t.location = r.location, t.document = i, t.resourcesUrl = t.publicPath = o, p.h = e, p.Context = t, p.onReady = function () { return new Promise(function (n) { return w.queue.write(function () { return w.wn.size ? w.Pn.push(n) : n(); }); }); }, w.render = function (n, t) { var e, r, i, o, u, f, c, a = function (i, v, p, d, h, y, w, M, g) { if (M = v.vchildren[p], e || (o = !0, "slot" === M.vtag && (r && t.Cn(d, r + "-s"), M.vchildren ? M.vt = !0 : M.pt = !0)), l(M.vtext))
    M.i = t.Dn(M.vtext);
else if (M.pt)
    M.i = t.Dn("");
else {
    if (y = M.i = b || "svg" === M.vtag ? t.Ln("http://www.w3.org/2000/svg", M.vtag) : t.X(M.vt ? "slot-fb" : M.vtag), n.rt(y) && n.it.delete(c), b = "svg" === M.vtag || "foreignObject" !== M.vtag && b, m(n, null, M, b), l(r) && y["s-si"] !== r && t.Cn(y, y["s-si"] = r), M.vchildren)
        for (h = 0; h < M.vchildren.length; ++h)
            (w = a(i, M, h, y)) && t.qn(y, w);
    "svg" === M.vtag && (b = !1);
} return M.i["s-hn"] = f, (M.vt || M.pt) && (M.i["s-sr"] = !0, M.i["s-cr"] = u, M.i["s-sn"] = M.vname || "", (g = i && i.vchildren && i.vchildren[p]) && g.vtag === M.vtag && i.i && s(i.i)), M.i; }, s = function (e, r, i, u) { n.ut = !0; var c = t.Un(e); for (i = c.length - 1; i >= 0; i--)
    (u = c[i])["s-hn"] !== f && u["s-ol"] && (t.Hn(u), t.nn(y(u), u, h(u)), t.Hn(u["s-ol"]), u["s-ol"] = null, o = !0), r && s(u, r); n.ut = !1; }, v = function (n, e, r, i, o, u, c, s) { var v = n["s-cr"]; for ((c = v && t.Bn(v) || n).shadowRoot && t.Qn(c) === f && (c = c.shadowRoot); o <= u; ++o)
    i[o] && (s = l(i[o].vtext) ? t.Dn(i[o].vtext) : a(null, r, o, n)) && (i[o].i = s, t.nn(c, s, h(e))); }, p = function (n, e, r, o) { for (; e <= r; ++e)
    l(n[e]) && (o = n[e].i, i = !0, o["s-ol"] ? t.Hn(o["s-ol"]) : s(o, !0), t.Hn(o)); }, d = function (n, t) { return n.vtag === t.vtag && n.vkey === t.vkey && ("slot" !== n.vtag || n.vname === t.vname); }, h = function (n) { return n && n["s-ol"] ? n["s-ol"] : n; }, y = function (n) { return t.Bn(n["s-ol"] ? n["s-ol"] : n); }, w = function (e, r, i) { var o = r.i = e.i, u = e.vchildren, f = r.vchildren; b = r.i && l(t.Xn(r.i)) && void 0 !== r.i.ownerSVGElement, b = "svg" === r.vtag || "foreignObject" !== r.vtag && b, l(r.vtext) ? (i = o["s-cr"]) ? t.Zn(t.Bn(i), r.vtext) : e.vtext !== r.vtext && t.Zn(o, r.vtext) : ("slot" !== r.vtag && m(n, e, r, b), l(u) && l(f) ? function (n, e, r, i, o, u, f, c) { for (var m = 0, b = 0, M = e.length - 1, g = e[0], k = e[M], j = i.length - 1, $ = i[0], A = i[j]; m <= M && b <= j;)
    if (null == g)
        g = e[++m];
    else if (null == k)
        k = e[--M];
    else if (null == $)
        $ = i[++b];
    else if (null == A)
        A = i[--j];
    else if (d(g, $))
        w(g, $), g = e[++m], $ = i[++b];
    else if (d(k, A))
        w(k, A), k = e[--M], A = i[--j];
    else if (d(g, A))
        "slot" !== g.vtag && "slot" !== A.vtag || s(t.Bn(g.i)), w(g, A), t.nn(n, g.i, t.In(k.i)), g = e[++m], A = i[--j];
    else if (d(k, $))
        "slot" !== g.vtag && "slot" !== A.vtag || s(t.Bn(k.i)), w(k, $), t.nn(n, k.i, g.i), k = e[--M], $ = i[++b];
    else {
        for (o = null, u = m; u <= M; ++u)
            if (e[u] && l(e[u].vkey) && e[u].vkey === $.vkey) {
                o = u;
                break;
            }
        l(o) ? ((c = e[o]).vtag !== $.vtag ? f = a(e && e[b], r, o, n) : (w(c, $), e[o] = void 0, f = c.i), $ = i[++b]) : (f = a(e && e[b], r, b, n), $ = i[++b]), f && t.nn(y(g.i), f, h(g.i));
    } m > M ? v(n, null == i[j + 1] ? null : i[j + 1].i, r, i, b, j) : b > j && p(e, m, M); }(o, u, r, f) : l(f) ? (l(e.vtext) && t.Zn(o, ""), v(o, null, r, f, 0, f.length - 1)) : l(u) && p(u, 0, u.length - 1)), b && "svg" === r.vtag && (b = !1); }, M = function (n, e, r, i, o, u, f, c) { for (i = 0, o = (r = t.Un(n)).length; i < o; i++)
    if (e = r[i], 1 === t.Rn(e)) {
        if (e["s-sr"])
            for (f = e["s-sn"], e.hidden = !1, u = 0; u < o; u++)
                if (r[u]["s-hn"] !== e["s-hn"])
                    if (c = t.Rn(r[u]), "" !== f) {
                        if (1 === c && f === t.zn(r[u], "slot")) {
                            e.hidden = !0;
                            break;
                        }
                    }
                    else if (1 === c || 3 === c && "" !== t.Yn(r[u]).trim()) {
                        e.hidden = !0;
                        break;
                    }
        M(e);
    } }, g = [], k = function (n, e, r, o, u, f, c, a, s, l) { for (u = 0, f = (e = t.Un(n)).length; u < f; u++) {
    if ((r = e[u])["s-sr"] && (o = r["s-cr"]))
        for (a = t.Un(t.Bn(o)), s = r["s-sn"], c = a.length - 1; c >= 0; c--)
            (o = a[c])["s-cn"] || o["s-nr"] || o["s-hn"] === r["s-hn"] || ((3 === (l = t.Rn(o)) || 8 === l) && "" === s || 1 === l && null === t.zn(o, "slot") && "" === s || 1 === l && t.zn(o, "slot") === s) && (g.some(function (n) { return n.dt === o; }) || (i = !0, o["s-sn"] = s, g.push({ ht: r, dt: o })));
    1 === t.Rn(r) && k(r);
} }; return function (a, s, l, v, p, d, h, y, m, b, j, $) { if (c = a, f = t.Qn(c), u = c["s-cr"], e = v, r = c["s-sc"], o = i = !1, w(s, l), o) {
    for (k(l.i), h = 0; h < g.length; h++)
        (y = g[h]).dt["s-ol"] || ((m = t.Dn(""))["s-nr"] = y.dt, t.nn(t.Bn(y.dt), y.dt["s-ol"] = m, y.dt));
    for (n.ut = !0, h = 0; h < g.length; h++) {
        for (y = g[h], j = t.Bn(y.ht), $ = t.In(y.ht), m = y.dt["s-ol"]; m = t.Gn(m);)
            if ((b = m["s-nr"]) && b && b["s-sn"] === y.dt["s-sn"] && j === t.Bn(b) && (b = t.In(b)) && b && !b["s-nr"]) {
                $ = b;
                break;
            }
        (!$ && j !== t.Bn(y.dt) || t.In(y.dt) !== $) && y.dt !== $ && (t.Hn(y.dt), t.nn(j, y.dt, $));
    }
    n.ut = !1;
} return i && M(l.i), g.length = 0, l; }; }(w, d), h["s-ld"] = [], h["s-rn"] = !0, h["s-init"] = function () { w.it.set(h, p.loaded = w.bn = !0), d.nt(r, "appload", { detail: { namespace: n } }); }, function (n, t, e, r, i, o) { if (t.componentOnReady = function (t, e) { if (!t.nodeName.includes("-"))
    return e(null), !1; var r = n.tn(t); if (r)
    if (n.it.has(t))
        e(t);
    else {
        var i = n.ct.get(t) || [];
        i.push(e), n.ct.set(t, i);
    } return !!r; }, i) {
    for (o = i.length - 1; o >= 0; o--)
        t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
    for (o = 0; o < r.length; o++)
        if (!e[r[o]].componentOnReady)
            return;
    for (o = 0; o < i.length; o++)
        i[o][1](null);
    i.length = 0;
} }(w, p, r, r["s-apps"], r["s-cr"]), p.initialized = !0, w; }, N = {}, R = !1;
