! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = "length" in e && e.length,
            i = oe.type(e);
        return "function" === i || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return oe.filter(t, e, i);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== i
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function s(e) {
        var t = we[e] = {};
        return oe.each(e.match(ye) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function r() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), oe.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Te.test(i) ? oe.parseJSON(i) : i
                } catch (o) {}
                oe.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, i, n) {
        if (oe.acceptData(e)) {
            var o, s, r = oe.expando,
                a = e.nodeType,
                l = a ? oe.cache : e,
                c = a ? e[r] : e[r] && r;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) return c || (c = a ? e[r] = V.pop() || oe.guid++ : r), l[c] || (l[c] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (n ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), s = l[c], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[oe.camelCase(t)] = i), "string" == typeof t ? (o = s[t], null == o && (o = s[oe.camelCase(t)])) : o = s, o
        }
    }

    function d(e, t, i) {
        if (oe.acceptData(e)) {
            var n, o, s = e.nodeType,
                r = s ? oe.cache : e,
                a = s ? e[oe.expando] : oe.expando;
            if (r[a]) {
                if (t && (n = i ? r[a] : r[a].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in n ? t = [t] : (t = oe.camelCase(t), t = t in n ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete n[t[o]];
                    if (i ? !c(n) : !oe.isEmptyObject(n)) return
                }(i || (delete r[a].data, c(r[a]))) && (s ? oe.cleanData([e], !0) : ie.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Me.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function g(e, t) {
        var i, n, o = 0,
            s = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || oe.nodeName(n, t) ? s.push(n) : oe.merge(s, g(n, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], s) : s
    }

    function v(e) {
        Le.test(e.type) && (e.defaultChecked = e.checked)
    }

    function b(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) oe._data(i, "globalEval", !t || oe._data(t[n], "globalEval"))
    }

    function S(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var i, n, o, s = oe._data(e),
                r = oe._data(t, s),
                a = s.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (n = 0, o = a[i].length; o > n; n++) oe.event.add(t, i, a[i][n])
            }
            r.data && (r.data = oe.extend({}, r.data))
        }
    }

    function C(e, t) {
        var i, n, o;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (n in o.events) oe.removeEvent(t, n, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === i && t.text !== e.text ? (y(t).text = e.text, w(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "inputs" === i && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("inputs" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function T(t, i) {
        var n, o = oe(i.createElement(t)).appendTo(i.body),
            s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(o[0])) ? n.display : oe.css(o[0], "display");
        return o.detach(), s
    }

    function k(e) {
        var t = fe,
            i = Ze[e];
        return i || (i = T(e, t), "none" !== i && i || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), i = T(e, t), Je.detach()), Ze[e] = i), i
    }

    function E(e, t) {
        return {
            get: function() {
                var i = e();
                return null != i ? i ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function A(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = pt.length; o--;)
            if (t = pt[o] + i, t in e) return t;
        return n
    }

    function D(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; a > r; r++) n = e[r], n.style && (s[r] = oe._data(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && De(n) && (s[r] = oe._data(n, "olddisplay", k(n.nodeName)))) : (o = De(n), (i && "none" !== i || !o) && oe._data(n, "olddisplay", o ? i : oe.css(n, "display"))));
        for (r = 0; a > r; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function _(e, t, i) {
        var n = lt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function L(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += oe.css(e, i + Ae[s], !0, o)), n ? ("content" === i && (r -= oe.css(e, "padding" + Ae[s], !0, o)), "margin" !== i && (r -= oe.css(e, "border" + Ae[s] + "Width", !0, o))) : (r += oe.css(e, "padding" + Ae[s], !0, o), "padding" !== i && (r += oe.css(e, "border" + Ae[s] + "Width", !0, o)));
        return r
    }

    function N(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = et(e),
            r = ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = tt(e, t, s), (0 > o || null == o) && (o = e.style[t]), nt.test(o)) return o;
            n = r && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + L(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function H(e, t, i, n, o) {
        return new H.prototype.init(e, t, i, n, o)
    }

    function P() {
        return setTimeout(function() {
            ht = void 0
        }), ht = oe.now()
    }

    function z(e, t) {
        var i, n = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) i = Ae[o], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function F(e, t, i) {
        for (var n, o = (yt[t] || []).concat(yt["*"]), s = 0, r = o.length; r > s; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function M(e, t, i) {
        var n, o, s, r, a, l, c, u, d = this,
            p = {},
            h = e.style,
            f = e.nodeType && De(e),
            m = oe._data(e, "fxshow");
        i.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = oe.css(e, "display"), u = "none" === c ? oe._data(e, "olddisplay") || k(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function() {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n], mt.exec(o)) {
                if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[n]) continue;
                    f = !0
                }
                p[n] = m && m[n] || oe.style(e, n)
            } else c = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === c ? k(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = oe._data(e, "fxshow", {}), s && (m.hidden = !f), f ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in p) oe.style(e, t, p[t])
            });
            for (n in p) r = F(f ? m[n] : 0, n, d), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function O(e, t) {
        var i, n, o, s, r;
        for (i in e)
            if (n = oe.camelCase(i), o = t[n], s = e[i], oe.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), r = oe.cssHooks[n], r && "expand" in r) {
                s = r.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = o)
            } else t[n] = o
    }

    function W(e, t, i) {
        var n, o, s = 0,
            r = bt.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ht || P(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                return a.notifyWith(e, [c, s, i]), 1 > s && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: ht || P(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = oe.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (O(u, c.opts.specialEasing); r > s; s++)
            if (n = bt[s].call(c, e, u, c.opts)) return n;
        return oe.map(u, F, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function I(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                s = t.toLowerCase().match(ye) || [];
            if (oe.isFunction(i))
                for (; n = s[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function R(e, t, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, oe.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {},
            r = e === qt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function j(e, t) {
        var i, n, o = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function $(e, t, i) {
        for (var n, o, s, r, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (r in a)
                if (a[r] && a[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                n || (n = r)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function q(e, t, i, n) {
        var o, s, r, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (s = u.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (r = c[l + " " + s] || c["* " + s], !r)
                for (o in c)
                    if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], u.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: r ? d : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e, t, i, n) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            i || Ut.test(e) ? n(e, o) : Y(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== oe.type(t)) n(e, t);
        else
            for (o in t) Y(e + "[" + o + "]", t[o], i, n)
    }

    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = [],
        Q = V.slice,
        G = V.concat,
        K = V.push,
        J = V.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ie = {},
        ne = "1.11.3",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        re = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ne,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || oe.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (n in o) e = r[n], i = o[n], r !== i && (c && i && (oe.isPlainObject(i) || (t = oe.isArray(i))) ? (t ? (t = !1, s = e && oe.isArray(e) ? e : []) : s = e && oe.isPlainObject(e) ? e : {}, r[n] = oe.extend(c, s, i)) : void 0 !== i && (r[n] = i));
        return r
    }, oe.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(re, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var o, s = 0,
                r = e.length,
                a = i(e);
            if (n) {
                if (a)
                    for (; r > s && (o = t.apply(e[s], n), o !== !1); s++);
                else
                    for (s in e)
                        if (o = t.apply(e[s], n), o === !1) break
            } else if (a)
                for (; r > s && (o = t.call(e[s], s, e[s]), o !== !1); s++);
            else
                for (s in e)
                    if (o = t.call(e[s], s, e[s]), o === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (J) return J.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[o++] = t[n++];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n, o = [], s = 0, r = e.length, a = !i; r > s; s++) n = !t(e[s], s), n !== a && o.push(e[s]);
            return o
        },
        map: function(e, t, n) {
            var o, s = 0,
                r = e.length,
                a = i(e),
                l = [];
            if (a)
                for (; r > s; s++) o = t(e[s], s, n), null != o && l.push(o);
            else
                for (s in e) o = t(e[s], s, n), null != o && l.push(o);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (i = Q.call(arguments, 2), n = function() {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, n.guid = e.guid = e.guid || oe.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, i, n) {
            var o, s, r, a, l, c, d, h, f, m;
            if ((t ? t.ownerDocument || t : R) !== H && N(t), t = t || H, i = i || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && z) {
                if (11 !== a && (o = be.exec(e)))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (s = t.getElementById(r), !s || !s.parentNode) return i;
                            if (s.id === r) return i.push(s), i
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && W(t, s) && s.id === r) return i.push(s), i
                    } else {
                        if (o[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = o[3]) && x.getElementsByClassName) return J.apply(i, t.getElementsByClassName(r)), i
                    }
                if (x.qsa && (!F || !F.test(e))) {
                    if (h = d = I, f = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = k(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                        f = ye.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return J.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > S.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[I] = !0, e
        }

        function o(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) S.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "inputs" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("inputs" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function h(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                s = $++;
            return t.first ? function(t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, s)
            } : function(t, i, r) {
                var a, l, c = [j, s];
                if (r) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, r)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if (l = t[I] || (t[I] = {}), (a = l[n]) && a[0] === j && a[1] === s) return c[2] = a[2];
                            if (l[n] = c, c[2] = e(t, i, r)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function m(e, i, n) {
            for (var o = 0, s = i.length; s > o; o++) t(e, i[o], n);
            return n
        }

        function g(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (!i || i(s, n, o)) && (r.push(s), c && t.push(a));
            return r
        }

        function v(e, t, i, o, s, r) {
            return o && !o[I] && (o = v(o)), s && !s[I] && (s = v(s, r)), n(function(n, r, a, l) {
                var c, u, d, p = [],
                    h = [],
                    f = r.length,
                    v = n || m(t || "*", a.nodeType ? [a] : a, []),
                    b = !e || !n && t ? v : g(v, p, e, a, l),
                    y = i ? s || (n ? e : f || o) ? [] : r : b;
                if (i && i(b, y, a, l), o)
                    for (c = g(y, h), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(b[h[u]] = d));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                            s(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = s ? ee(n, d) : p[u]) > -1 && (n[c] = !(r[c] = d))
                    }
                } else y = g(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : J.apply(r, y)
            })
        }

        function b(e) {
            for (var t, i, n, o = e.length, s = S.relative[e[0].type], r = s || S.relative[" "], a = s ? 1 : 0, l = h(function(e) {
                    return e === t
                }, r, !0), c = h(function(e) {
                    return ee(t, e) > -1
                }, r, !0), u = [function(e, i, n) {
                    var o = !s && (n || i !== D) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, o
                }]; o > a; a++)
                if (i = S.relative[e[a].type]) u = [h(f(u), i)];
                else {
                    if (i = S.filter[e[a].type].apply(null, e[a].matches), i[I]) {
                        for (n = ++a; o > n && !S.relative[e[n].type]; n++);
                        return v(a > 1 && f(u), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && b(e.slice(a, n)), o > n && b(e = e.slice(n)), o > n && p(e))
                    }
                    u.push(i)
                }
            return f(u)
        }

        function y(e, i) {
            var o = i.length > 0,
                s = e.length > 0,
                r = function(n, r, a, l, c) {
                    var u, d, p, h = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        b = D,
                        y = n || s && S.find.TAG("*", c),
                        w = j += null == b ? 1 : Math.random() || .1,
                        x = y.length;
                    for (c && (D = r !== H && r); f !== x && null != (u = y[f]); f++) {
                        if (s && u) {
                            for (d = 0; p = e[d++];)
                                if (p(u, r, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (j = w)
                        }
                        o && ((u = !p && u) && h--, n && m.push(u))
                    }
                    if (h += f, o && f !== h) {
                        for (d = 0; p = i[d++];) p(m, v, r, a);
                        if (n) {
                            if (h > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (j = w, D = b), m
                };
            return o ? n(r) : r
        }
        var w, x, S, C, T, k, E, A, D, _, L, N, H, P, z, F, M, O, W, I = "sizzle" + 1 * new Date,
            R = e.document,
            j = 0,
            $ = 0,
            q = i(),
            Y = i(),
            B = i(),
            X = function(e, t) {
                return e === t && (L = !0), 0
            },
            U = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            K = Q.push,
            J = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ne.replace("w", "w#"),
            se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ce = new RegExp("^" + ie + "*," + ie + "*"),
            ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(re),
            he = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:inputs|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Se = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Ce = function() {
                N()
            };
        try {
            J.apply(Q = Z.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
        } catch (Te) {
            J = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : R;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, P = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Ce, !1) : i.attachEvent && i.attachEvent("onunload", Ce)), z = !T(n), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName), x.getById = o(function(e) {
                return P.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (S.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && z) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(xe, Se);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(xe, Se);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), S.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, S.find.CLASS = x.getElementsByClassName && function(e, t) {
                return z ? t.getElementsByClassName(e) : void 0
            }, M = [], F = [], (x.qsa = ve.test(n.querySelectorAll)) && (o(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }), o(function(e) {
                var t = n.createElement("inputs");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (x.matchesSelector = ve.test(O = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", re)
            }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(P.compareDocumentPosition), W = t || ve.test(P.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === R && W(R, e) ? -1 : t === n || t.ownerDocument === R && W(R, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var i, o = 0,
                    s = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!s || !a) return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : _ ? ee(_, e) - ee(_, t) : 0;
                if (s === a) return r(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? r(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0
            }, n) : H
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== H && N(e), i = i.replace(de, "='$1']"), !(!x.matchesSelector || !z || M && M.test(i) || F && F.test(i))) try {
                var n = O.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (o) {}
            return t(i, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && N(e), W(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && N(e);
            var i = S.attrHandle[t.toLowerCase()],
                n = i && V.call(S.attrHandle, t.toLowerCase()) ? i(e, t, !z) : void 0;
            return void 0 !== n ? n : x.attributes || !z ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (L = !x.detectDuplicates, _ = !x.sortStable && e.slice(0), e.sort(X), L) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return _ = null, e
        }, C = t.getText = function(e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += C(t);
            return i
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Se), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && pe.test(i) && (t = k(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Se).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, d, p, h, f, m = s !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            b = !l && !a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && b) {
                                for (u = g[I] || (g[I] = {}), c = u[e] || [], h = c[0] === j && c[1], p = c[0] === j && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        u[e] = [j, h, p];
                                        break
                                    }
                            } else if (b && (c = (t[I] || (t[I] = {}))[e]) && c[0] === j) p = c[1];
                            else
                                for (;
                                    (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (b && ((d[I] || (d[I] = {}))[e] = [j, p]), d !== t)););
                            return p -= o, p === n || p % n === 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var o, s = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[I] ? s(i) : s.length > 1 ? (o = [e, e, "", i], S.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, o = s(e, i), r = o.length; r--;) n = ee(e, o[r]), e[n] = !(t[n] = o[r])
                    }) : function(e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        o = E(e.replace(le, "$1"));
                    return o[I] ? n(function(e, t, i, n) {
                        for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function(e, n, s) {
                        return t[0] = e, o(t, null, s, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(xe, Se),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Se).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = z ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "inputs" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                inputs: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "inputs" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "inputs" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) S.pseudos[w] = l(w);
        return d.prototype = S.filters = S.pseudos, S.setFilters = new d, k = t.tokenize = function(e, i) {
            var n, o, s, r, a, l, c, u = Y[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = e, l = [], c = S.preFilter; a;) {
                (!n || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ue.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (r in S.filter) !(o = fe[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(),
                    s.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : Y(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var i, n = [],
                o = [],
                s = B[e + " "];
            if (!s) {
                for (t || (t = k(e)), i = t.length; i--;) s = b(t[i]), s[I] ? n.push(s) : o.push(s);
                s = B(e, y(o, n)), s.selector = e
            }
            return s
        }, A = t.select = function(e, t, i, n) {
            var o, s, r, a, l, c = "function" == typeof e && e,
                d = !n && k(e = c.selector || e);
            if (i = i || [], 1 === d.length) {
                if (s = d[0] = d[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === t.nodeType && z && S.relative[s[1].type]) {
                    if (t = (S.find.ID(r.matches[0].replace(xe, Se), t) || [])[0], !t) return i;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !S.relative[a = r.type]);)
                    if ((l = S.find[a]) && (n = l(r.matches[0].replace(xe, Se), ye.test(s[0].type) && u(t.parentNode) || t))) {
                        if (s.splice(o, 1), e = n.length && p(s), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (c || E(e, d))(n, t, !z, i, ye.test(e) && u(t.parentNode) || t), i
        }, x.sortStable = I.split("").sort(X).join("") === I, x.detectDuplicates = !!L, N(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<inputs/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, i) {
            return i || "inputs" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var ue = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? oe.find.matchesSelector(n, e) ? [n] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(n[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, n[t], i);
            return i = this.pushStack(o > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && ue.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var he, fe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function(e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), de.test(i[1]) && oe.isPlainObject(t))
                        for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return he.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, he = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, i) {
            for (var n = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !oe(o).is(i));) 1 === o.nodeType && n.push(o), o = o[t];
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, i = oe(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (oe.contains(this, i[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, s = [], r = ue.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? oe.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return oe.dir(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return oe.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return oe.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(i, n) {
            var o = oe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = oe.filter(n, o)), this.length > 1 && (be[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var ye = /\S+/g,
        we = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || s(e) : oe.extend({}, e);
        var t, i, n, o, r, a, l = [],
            c = !e.once && [],
            u = function(s) {
                for (i = e.memory && s, n = !0, r = a || 0, a = 0, o = l.length, t = !0; l && o > r; r++)
                    if (l[r].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                t = !1, l && (c ? c.length && u(c.shift()) : i ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function s(t) {
                            oe.each(t, function(t, i) {
                                var n = oe.type(i);
                                "function" === n ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), t ? o = l.length : i && (a = n, u(i))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, i) {
                        for (var n;
                            (n = oe.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (o >= n && o--, r >= n && r--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, i || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, i) {
                    return !l || n && !c || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? c.push(i) : u(i)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(i) {
                            oe.each(t, function(t, s) {
                                var r = oe.isFunction(e[t]) && e[t];
                                o[s[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, oe.each(t, function(e, s) {
                var r = s[2],
                    a = s[3];
                n[s[1]] = r.add, a && r.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, i, n, o = 0,
                s = Q.call(arguments),
                r = s.length,
                a = 1 !== r || e && oe.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : oe.Deferred(),
                c = function(e, i, n) {
                    return function(o) {
                        i[e] = this, n[e] = arguments.length > 1 ? Q.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (t = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && oe.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, t)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!xe)
            if (xe = oe.Deferred(), "complete" === fe.readyState) setTimeout(oe.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == e.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    r(), oe.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var Se, Ce = "undefined";
    for (Se in oe(ie)) break;
    ie.ownLast = "0" !== Se, ie.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ie.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !c(e)
        },
        data: function(e, t, i) {
            return u(e, t, i)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, i) {
            return u(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(s), 1 === s.nodeType && !oe._data(s, "parsedAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(s, n, o[n])));
                    oe._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : s ? l(s, e, oe.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = oe._data(e, t), i && (!n || oe.isArray(i) ? n = oe._data(e, t, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = oe.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = oe._queueHooks(e, t),
                r = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return oe._data(e, i) || oe._data(e, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, i)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = oe.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = oe._data(s[r], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ae = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        _e = oe.access = function(e, t, i, n, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === oe.type(i)) {
                o = !0;
                for (a in i) oe.access(e, t, a, i[a], !0, s, r)
            } else if (void 0 !== n && (o = !0, oe.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(oe(e), i)
                })), t))
                for (; l > a; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
        },
        Le = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = fe.createElement("inputs"),
            t = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><inputs type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<inputs type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, n = fe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (ie[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), ie[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ne = /^(?:inputs|select|textarea)$/i,
        He = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        ze = /^(?:focusinfocus|focusoutblur)$/,
        Fe = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var s, r, a, l, c, u, d, p, h, f, m, g = oe._data(e);
            if (g) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = oe.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                        return typeof oe === Ce || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(ye) || [""], a = t.length; a--;) s = Fe.exec(t[a]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h && (c = oe.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = oe.event.special[h] || {}, d = oe.extend({
                    type: h,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (p = r[h]) || (p = r[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, n, f, u) !== !1 || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), oe.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, u, d, p, h, f, m, g = oe.hasData(e) && oe._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(ye) || [""], c = t.length; c--;)
                    if (a = Fe.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = oe.event.special[h] || {}, h = (n ? d.delegateType : d.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) r = p[s], !o && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, d.remove && d.remove.call(e, r));
                        l && !p.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || oe.removeEvent(e, h, g.handle), delete u[h])
                    } else
                        for (h in u) oe.event.remove(e, h + t[c], i, n, !0);
                oe.isEmptyObject(u) && (delete g.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, o) {
            var s, r, a, l, c, u, d, p = [n || fe],
                h = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !ze.test(h + oe.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), r = h.indexOf(":") < 0 && "on" + h, t = t[oe.expando] ? t : new oe.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : oe.makeArray(i, [t]), c = oe.event.special[h] || {}, o || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!o && !c.noBubble && !oe.isWindow(n)) {
                    for (l = c.delegateType || h, ze.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), u = a;
                    u === (n.ownerDocument || fe) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (a = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || h, s = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), s && s.apply(a, i), s = r && a[r], s && s.apply && oe.acceptData(a) && (t.result = s.apply(a, i), t.result === !1 && t.preventDefault());
                if (t.type = h, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && oe.acceptData(n) && r && n[h] && !oe.isWindow(n)) {
                    u = n[r], u && (n[r] = null), oe.event.triggered = h;
                    try {
                        n[h]()
                    } catch (m) {}
                    oe.event.triggered = void 0, u && (n[r] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, i, n, o, s, r = [],
                a = Q.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (r = oe.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, s = 0;
                        (n = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, i = ((oe.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], s = 0; a > s; s++) n = t[s], i = n.selector + " ", void 0 === o[i] && (o[i] = n.needsContext ? oe(i, this).index(l) >= 0 : oe.find(i, this, null, [l]).length), o[i] && o.push(n);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, i, n, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Pe.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new oe.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
            return e.target || (e.target = s.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, o, s = t.button,
                    r = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || fe, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "inputs") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var o = oe.extend(new oe.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === Ce && (e[n] = null), e.detachEvent(n, i))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                return (!o || o !== n && !oe.contains(n, o)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ie.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "formsss") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    i = oe.nodeName(t, "inputs") || oe.nodeName(t, "button") ? t.formsss : void 0;
                i && !oe._data(i, "submitBubbles") && (oe.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "formsss") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Ne.test(this.nodeName)
        }
    }), ie.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = oe._data(n, t);
                o || n.addEventListener(e, i, !0), oe._data(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = oe._data(n, t) - 1;
                o ? oe._data(n, t, o) : (n.removeEventListener(e, i, !0), oe._removeData(n, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, i, n, o) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (s in e) this.on(s, t, i, e[s], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = h;
            else if (!n) return this;
            return 1 === o && (r = n, n = function(e) {
                return oe().off(e), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, oe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = h), this.each(function() {
                oe.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? oe.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        We = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Ie = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|inputs|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        $e = /<tbody/i,
        qe = /<|&#?\w+;/,
        Ye = /<(?:script|style|link)/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xe = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = m(fe),
        Ke = Ge.appendChild(fe.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, oe.extend({
        clone: function(e, t, i) {
            var n, o, s, r, a, l = oe.contains(e.ownerDocument, e);
            if (ie.html5Clone || oe.isXMLDoc(e) || !We.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(s = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (n = g(s), a = g(e), r = 0; null != (o = a[r]); ++r) n[r] && C(o, n[r]);
            if (t)
                if (i)
                    for (a = a || g(e), n = n || g(s), r = 0; null != (o = a[r]); r++) S(o, n[r]);
                else S(e, s);
            return n = g(s, "script"), n.length > 0 && x(n, !l && g(e, "script")), n = a = o = null, s
        },
        buildFragment: function(e, t, i, n) {
            for (var o, s, r, a, l, c, u, d = e.length, p = m(t), h = [], f = 0; d > f; f++)
                if (s = e[f], s || 0 === s)
                    if ("object" === oe.type(s)) oe.merge(h, s.nodeType ? [s] : s);
                    else if (qe.test(s)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (je.exec(s) || ["", ""])[1].toLowerCase(), u = Qe[l] || Qe._default, a.innerHTML = u[1] + s.replace(Re, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                if (!ie.leadingWhitespace && Ie.test(s) && h.push(t.createTextNode(Ie.exec(s)[0])), !ie.tbody)
                    for (s = "table" !== l || $e.test(s) ? "<table>" !== u[1] || $e.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;) oe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (oe.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else h.push(t.createTextNode(s));
            for (a && p.removeChild(a), ie.appendChecked || oe.grep(g(h, "inputs"), v), f = 0; s = h[f++];)
                if ((!n || -1 === oe.inArray(s, n)) && (r = oe.contains(s.ownerDocument, s), a = g(p.appendChild(s), "script"), r && x(a), i))
                    for (o = 0; s = a[o++];) Xe.test(s.type || "") && i.push(s);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var i, n, o, s, r = 0, a = oe.expando, l = oe.cache, c = ie.deleteExpando, u = oe.event.special; null != (i = e[r]); r++)
                if ((t || oe.acceptData(i)) && (o = i[a], s = o && l[o])) {
                    if (s.events)
                        for (n in s.events) u[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, s.handle);
                    l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== Ce ? i.removeAttribute(a) : i[a] = null, V.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return _e(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? oe.filter(e, this) : this, o = 0; null != (i = n[o]); o++) t || 1 !== i.nodeType || oe.cleanData(g(i)), i.parentNode && (t && oe.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return _e(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof e || Ye.test(e) || !ie.htmlSerialize && We.test(e) || !ie.leadingWhitespace && Ie.test(e) || Qe[(je.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Re, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var i, n, o, s, r, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = e[0],
                h = oe.isFunction(p);
            if (h || c > 1 && "string" == typeof p && !ie.checkClone && Be.test(p)) return this.each(function(i) {
                var n = u.eq(i);
                h && (e[0] = p.call(this, i, n.html())), n.domManip(e, t)
            });
            if (c && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (s = oe.map(g(a, "script"), y), o = s.length; c > l; l++) n = a, l !== d && (n = oe.clone(n, !0, !0), o && oe.merge(s, g(n, "script"))), t.call(this[l], n, l);
                if (o)
                    for (r = s[s.length - 1].ownerDocument, oe.map(s, w), l = 0; o > l; l++) n = s[l], Xe.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(r, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ve, "")));
                a = i = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var i, n = 0, o = [], s = oe(e), r = s.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), oe(s[n])[t](i), K.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var Je, Ze = {};
    ! function() {
        var e;
        ie.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    }();
    var et, tt, it = /^margin/,
        nt = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, i) {
        var n, o, s, r, a = e.style;
        return i = i || et(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== r || oe.contains(e.ownerDocument, e) || (r = oe.style(e, t)), nt.test(r) && it.test(t) && (n = a.width, o = a.minWidth,
            s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
    }) : fe.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, i) {
        var n, o, s, r, a = e.style;
        return i = i || et(e), r = i ? i[t] : void 0, null == r && a && a[t] && (r = a[t]), nt.test(r) && !ot.test(t) && (n = a.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
    }), ! function() {
        function t() {
            var t, i, n, o;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = r = !1, l = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(fe.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), i.removeChild(n))
        }
        var i, n, o, s, r, a, l;
        i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><inputs type='checkbox'/>", o = i.getElementsByTagName("a")[0], (n = o && o.style) && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, oe.extend(ie, {
            reliableHiddenOffsets: function() {
                return null == a && t(), a
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelPosition: function() {
                return null == s && t(), s
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), oe.swap = function(e, t, i, n) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        o = i.apply(e, n || []);
        for (s in t) e.style[s] = r[s];
        return o
    };
    var st = /alpha\([^)]*\)/i,
        rt = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Ee + ")", "i"),
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = tt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = A(l, a)), r = oe.cssHooks[t] || oe.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
                if (s = typeof i, "string" === s && (o = ct.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), s = "number"), null != i && i === i && ("number" !== s || oe.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n))))) try {
                    l[t] = i
                } catch (c) {}
            }
        },
        css: function(e, t, i, n) {
            var o, s, r, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = A(e.style, a)), r = oe.cssHooks[t] || oe.cssHooks[a], r && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = tt(e, t, n)), "normal" === s && t in dt && (s = dt[t]), "" === i || i ? (o = parseFloat(s), i === !0 || oe.isNumeric(o) ? o || 0 : s) : s
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ut, function() {
                    return N(e, t, n)
                }) : N(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var o = n && et(e);
                return _(e, i, n ? L(e, t, n, ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ie.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(s.replace(st, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = st.test(s) ? s.replace(st, o) : s + " " + o)
        }
    }), oe.cssHooks.marginRight = E(ie.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Ae[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, it.test(e) || (oe.cssHooks[e + t].set = _)
    }), oe.fn.extend({
        css: function(e, t) {
            return _e(this, function(e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (oe.isArray(t)) {
                    for (n = et(e), o = t.length; o > r; r++) s[t[r]] = oe.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? oe.style(e, t, i) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = H.prototype.init, oe.fx.step = {};
    var ht, ft, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        bt = [M],
        yt = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    o = gt.exec(t),
                    s = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    r = (oe.cssNumber[e] || "px" !== s && +n) && gt.exec(oe.css(i.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +n || 1;
                    do a = a || ".5", r /= a, oe.style(i.elem, e, r + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    oe.Animation = oe.extend(W, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, o = e.length; o > n; n++) i = e[n], yt[i] = yt[i] || [], yt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bt.unshift(e) : bt.push(e)
            }
        }), oe.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: i || !i && t || oe.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !oe.isFunction(t) && t
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(De).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var o = oe.isEmptyObject(e),
                    s = oe.speed(t, i, n),
                    r = function() {
                        var t = W(this, oe.extend({}, e), s);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        s = oe.timers,
                        r = oe._data(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && vt.test(o) && n(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                    (t || !i) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = oe._data(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        s = oe.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var i = oe.fn[t];
            oe.fn[t] = function(e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(z(t, !0), e, n, o)
            }
        }), oe.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                i = 0;
            for (ht = oe.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || oe.fx.stop(), ht = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ft || (ft = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(ft), ft = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e, t, i, n, o;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><inputs type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = fe.createElement("select"), o = i.appendChild(fe.createElement("option")), e = t.getElementsByTagName("inputs")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = o.selected, ie.enctype = !!fe.createElement("formsss").enctype, i.disabled = !0, ie.optDisabled = !o.disabled, e = fe.createElement("inputs"), e.setAttribute("value", ""), ie.inputs = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = oe.isFunction(e), this.each(function(i) {
                var o;
                1 === this.nodeType && (o = n ? e.call(this, i, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(wt, "") : null == i ? "" : i)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== o || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && oe.nodeName(i.parentNode, "optgroup"))) {
                            if (t = oe(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = oe.makeArray(t), r = o.length; r--;)
                        if (n = o[r], oe.inArray(oe.valHooks.option.get(n), s) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, St, Ct = oe.expr.attrHandle,
        Tt = /^(?:checked|selected)$/i,
        kt = ie.getSetAttribute,
        Et = ie.inputs;
    oe.fn.extend({
        attr: function(e, t) {
            return _e(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === Ce ? oe.prop(e, t, i) : (1 === s && oe.isXMLDoc(e) || (t = t.toLowerCase(), n = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? St : xt)), void 0 === i ? n && "get" in n && null !== (o = n.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""), i) : void oe.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                s = t && t.match(ye);
            if (s && 1 === e.nodeType)
                for (; i = s[o++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) ? Et && kt || !Tt.test(i) ? e[n] = !1 : e[oe.camelCase("default-" + i)] = e[n] = !1 : oe.attr(e, i, ""), e.removeAttribute(kt ? i : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "inputs")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), St = {
        set: function(e, t, i) {
            return t === !1 ? oe.removeAttr(e, i) : Et && kt || !Tt.test(i) ? e.setAttribute(!kt && oe.propFix[i] || i, i) : e[oe.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = Ct[t] || oe.find.attr;
        Ct[t] = Et && kt || !Tt.test(t) ? function(e, t, n) {
            var o, s;
            return n || (s = Ct[t], Ct[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, Ct[t] = s), o
        } : function(e, t, i) {
            return i ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Et && kt || (oe.attrHooks.value = {
        set: function(e, t, i) {
            return oe.nodeName(e, "inputs") ? void(e.defaultValue = t) : xt && xt.set(e, t, i)
        }
    }), kt || (xt = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: xt.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, i) {
            xt.set(e, "" === t ? !1 : t, i)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), ie.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var At = /^(?:inputs|select|textarea|button|object)$/i,
        Dt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return _e(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, o, s, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? (s = 1 !== r || !oe.isXMLDoc(e), s && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ie.enctype || (oe.propFix.enctype = "encoding");
    var _t = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, i, n, o, s, r, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(ye) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_t, " ") : " ")) {
                        for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = oe.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, s, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(ye) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_t, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        r = e ? oe.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(i) {
                oe(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function() {
                if ("string" === i)
                    for (var t, n = 0, o = oe(this), s = e.match(ye) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(i === Ce || "boolean" === i) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(_t, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var Lt = oe.now(),
        Nt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(Ht, function(e, t, o, s) {
            return i && t && (n = 0), 0 === n ? e : (i = o || t, n += !s - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (o) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), i
    };
    var Pt, zt, Ft = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        qt = {},
        Yt = "*/".concat("*");
    try {
        zt = location.href
    } catch (Bt) {
        zt = fe.createElement("a"), zt.href = "", zt = zt.href
    }
    Pt = jt.exec(zt.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zt,
            type: "GET",
            isLocal: Wt.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-formsss-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? j(j(e, oe.ajaxSettings), t) : j(oe.ajaxSettings, e)
        },
        ajaxPrefilter: I($t),
        ajaxTransport: I(qt),
        ajax: function(e, t) {
            function i(e, t, i, n) {
                var o, u, v, b, w, S = t;
                2 !== y && (y = 2, a && clearTimeout(a), c = void 0, r = n || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = $(d, x, i)), b = q(d, b, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (oe.etag[s] = w)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, u = b.data, v = b.error, o = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || S) + "", o ? f.resolveWith(p, [u, S, x]) : f.rejectWith(p, [x, S, v]), x.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), m.fireWith(p, [x, S]), l && (h.trigger("ajaxComplete", [x, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, o, s, r, a, l, c, u, d = oe.ajaxSetup({}, t),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                f = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                b = {},
                y = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!u)
                                for (u = {}; t = Ot.exec(r);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return y || (e = b[i] = b[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || zt) + "").replace(Ft, "").replace(Rt, Pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (n = jt.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Pt[1] && n[2] === Pt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), R($t, d, t, x), 2 === y) return x;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !It.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Nt.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(s) ? s.replace(Mt, "$1_=" + Lt++) : s + (Nt.test(s) ? "&" : "?") + "_=" + Lt++)), d.ifModified && (oe.lastModified[s] && x.setRequestHeader("If-Modified-Since", oe.lastModified[s]), oe.etag[s] && x.setRequestHeader("If-None-Match", oe.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (c = R(qt, d, t, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, c.send(v, i)
                } catch (S) {
                    if (!(2 > y)) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, i) {
            return oe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, i, n, o) {
            return oe.isFunction(i) && (o = o || n, n = i, i = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(oe.isFunction(e) ? function(t) {
                oe(this).wrapInner(e.call(this, t))
            } : function() {
                var t = oe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(i) {
                oe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Xt = /%20/g,
        Ut = /\[\]$/,
        Vt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:inputs|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) Y(i, e[i], t, o);
        return n.join("&").replace(Xt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Le.test(e))
            }).map(function(e, t) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Vt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || X()
    } : B;
    var Kt = 0,
        Jt = {},
        Zt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Jt) Jt[e](void 0, !0)
    }), ie.cors = !!Zt && "withCredentials" in Zt, Zt = ie.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ie.cors) {
            var t;
            return {
                send: function(i, n) {
                    var o, s = e.xhr(),
                        r = ++Kt;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null), t = function(i, o) {
                        var a, l, c;
                        if (t && (o || 4 === s.readyState))
                            if (delete Jt[r], t = void 0, s.onreadystatechange = oe.noop, o) 4 !== s.readyState && s.abort();
                            else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (u) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && n(a, l, c, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Jt[r] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function(n, o) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || o(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ti = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ei.pop() || oe.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, s, r, a = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-formsss-urlencoded") && ti.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ti, "$1" + o) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || oe.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, n.always(function() {
            e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, ei.push(o)), r && oe.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || fe;
        var n = de.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], n.childNodes))
    };
    var ii = oe.fn.load;
    oe.fn.load = function(e, t, i) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (n = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && oe.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, r.html(n ? oe("<div>").append(oe.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            r.each(i, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ni = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a, l, c, u = oe.css(e, "position"),
                d = oe(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), s = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [s, l]) > -1, c ? (n = d.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (p.top = t.top - a.top + r), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (t = s.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Ce && (n = o.getBoundingClientRect()), i = U(s), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ni; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || ni
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = /Y/.test(t);
        oe.fn[e] = function(n) {
            return _e(this, function(e, n, o) {
                var s = U(e);
                return void 0 === o ? s ? t in s ? s[t] : s.document.documentElement[n] : e[n] : void(s ? s.scrollTo(i ? oe(s).scrollLeft() : o, i ? o : oe(s).scrollTop()) : e[n] = o)
            }, e, n, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = E(ie.pixelPosition, function(e, i) {
            return i ? (i = tt(e, t), nt.test(i) ? oe(e).position()[t] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            oe.fn[n] = function(n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (n === !0 || o === !0 ? "margin" : "border");
                return _e(this, function(t, i, n) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? oe.css(t, i, r) : oe.style(t, i, n, r)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var oi = e.jQuery,
        si = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = si), t && e.jQuery === oe && (e.jQuery = oi), oe
    }, typeof t === Ce && (e.jQuery = e.$ = oe), oe
}), ! function(e, t, i, n) {
    "use strict";
    e.fn.accordion = function(i) {
        var o, s = e(this),
            r = (new Date).getTime(),
            a = [],
            l = arguments[0],
            c = "string" == typeof l,
            u = [].slice.call(arguments, 1);
        return t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            setTimeout(e, 0)
        }, s.each(function() {
            var d, p, h = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.accordion.settings, i) : e.extend({}, e.fn.accordion.settings),
                f = h.className,
                m = h.namespace,
                g = h.selector,
                v = h.error,
                b = "." + m,
                y = "module-" + m,
                w = s.selector || "",
                x = e(this),
                S = x.find(g.title),
                C = x.find(g.content),
                T = this,
                k = x.data(y);
            p = {
                initialize: function() {
                    p.debug("Initializing", x), p.bind.events(), h.observeChanges && p.observeChanges(), p.instantiate()
                },
                instantiate: function() {
                    k = p, x.data(y, p)
                },
                destroy: function() {
                    p.debug("Destroying previous instance", x), x.off(b).removeData(y)
                },
                refresh: function() {
                    S = x.find(g.title), C = x.find(g.content)
                },
                observeChanges: function() {
                    "MutationObserver" in t && (d = new MutationObserver(function(e) {
                        p.debug("DOM tree modified, updating selector cache"), p.refresh()
                    }), d.observe(T, {
                        childList: !0,
                        subtree: !0
                    }), p.debug("Setting up mutation observer", d))
                },
                bind: {
                    events: function() {
                        p.debug("Binding delegated events"), x.on(h.on + b, g.trigger, p.event.click)
                    }
                },
                event: {
                    click: function() {
                        p.toggle.call(this)
                    }
                },
                toggle: function(t) {
                    var i = t !== n ? "number" == typeof t ? S.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                        o = i.next(C),
                        s = o.hasClass(f.animating),
                        r = o.hasClass(f.active),
                        a = r && !s,
                        l = !r && s;
                    p.debug("Toggling visibility of content", i), a || l ? h.collapsible ? p.close.call(i) : p.debug("Cannot close accordion content collapsing is disabled") : p.open.call(i)
                },
                open: function(t) {
                    var i = t !== n ? "number" == typeof t ? S.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                        o = i.next(C),
                        s = o.hasClass(f.animating),
                        r = o.hasClass(f.active),
                        a = r || s;
                    return a ? void p.debug("Accordion already open, skipping", o) : (p.debug("Opening accordion content", i), h.onOpening.call(o), h.exclusive && p.closeOthers.call(i), i.addClass(f.active), o.stop(!0, !0).addClass(f.animating), h.animateChildren && (e.fn.transition !== n && x.transition("is supported") ? o.children().transition({
                        animation: "fade in",
                        queue: !1,
                        useFailSafe: !0,
                        debug: h.debug,
                        verbose: h.verbose,
                        duration: h.duration
                    }) : o.children().stop(!0, !0).animate({
                        opacity: 1
                    }, h.duration, p.resetOpacity)), void o.slideDown(h.duration, h.easing, function() {
                        o.removeClass(f.animating).addClass(f.active), p.reset.display.call(this), h.onOpen.call(this), h.onChange.call(this)
                    }))
                },
                close: function(t) {
                    var i = t !== n ? "number" == typeof t ? S.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                        o = i.next(C),
                        s = o.hasClass(f.animating),
                        r = o.hasClass(f.active),
                        a = !r && s,
                        l = r && s;
                    !r && !a || l || (p.debug("Closing accordion content", o), h.onClosing.call(o), i.removeClass(f.active), o.stop(!0, !0).addClass(f.animating), h.animateChildren && (e.fn.transition !== n && x.transition("is supported") ? o.children().transition({
                        animation: "fade out",
                        queue: !1,
                        useFailSafe: !0,
                        debug: h.debug,
                        verbose: h.verbose,
                        duration: h.duration
                    }) : o.children().stop(!0, !0).animate({
                        opacity: 0
                    }, h.duration, p.resetOpacity)), o.slideUp(h.duration, h.easing, function() {
                        o.removeClass(f.animating).removeClass(f.active), p.reset.display.call(this), h.onClose.call(this), h.onChange.call(this)
                    }))
                },
                closeOthers: function(t) {
                    var i, o, s, r = t !== n ? S.eq(t) : e(this).closest(g.title),
                        a = r.parents(g.content).prev(g.title),
                        l = r.closest(g.accordion),
                        c = g.title + "." + f.active + ":visible",
                        u = g.content + "." + f.active + ":visible";
                    h.closeNested ? (i = l.find(c).not(a), s = i.next(C)) : (i = l.find(c).not(a), o = l.find(u).find(c).not(a), i = i.not(o), s = i.next(C)), i.length > 0 && (p.debug("Exclusive enabled, closing other content", i), i.removeClass(f.active), s.removeClass(f.animating).stop(!0, !0), h.animateChildren && (e.fn.transition !== n && x.transition("is supported") ? s.children().transition({
                        animation: "fade out",
                        useFailSafe: !0,
                        debug: h.debug,
                        verbose: h.verbose,
                        duration: h.duration
                    }) : s.children().stop(!0, !0).animate({
                        opacity: 0
                    }, h.duration, p.resetOpacity)), s.slideUp(h.duration, h.easing, function() {
                        e(this).removeClass(f.active), p.reset.display.call(this)
                    }))
                },
                reset: {
                    display: function() {
                        p.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    },
                    opacity: function() {
                        p.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    }
                },
                setting: function(t, i) {
                    if (p.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (i === n) return h[t];
                        h[t] = i
                    }
                },
                internal: function(t, i) {
                    return p.debug("Changing internal", t, i), i === n ? p[t] : void(e.isPlainObject(t) ? e.extend(!0, p, t) : p[t] = i)
                },
                debug: function() {
                    h.debug && (h.performsssance ? p.performsssance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), p.debug.apply(console, arguments)))
                },
                verbose: function() {
                    h.verbose && h.debug && (h.performsssance ? p.performsssance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), p.verbose.apply(console, arguments)))
                },
                error: function() {
                    p.error = Function.prototype.bind.call(console.error, console, h.name + ":"), p.error.apply(console, arguments)
                },
                performsssance: {
                    log: function(e) {
                        var t, i, n;
                        h.performsssance && (t = (new Date).getTime(), n = r || t, i = t - n, r = t, a.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": i
                        })), clearTimeout(p.performsssance.timer), p.performsssance.timer = setTimeout(p.performsssance.display, 500)
                    },
                    display: function() {
                        var t = h.name + ":",
                            i = 0;
                        r = !1, clearTimeout(p.performsssance.timer), e.each(a, function(e, t) {
                            i += t["Execution Time"]
                        }), t += " " + i + "ms", w && (t += " '" + w + "'"), (console.group !== n || console.table !== n) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), a = []
                    }
                },
                invoke: function(t, i, s) {
                    var r, a, l, c = k;
                    return i = i || u, s = T || s, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                        var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                        if (e.isPlainObject(c[s]) && i != r) c = c[s];
                        else {
                            if (c[s] !== n) return a = c[s], !1;
                            if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : (p.error(v.method, t), !1);
                            c = c[o]
                        }
                    })), e.isFunction(a) ? l = a.apply(s, i) : a !== n && (l = a), e.isArray(o) ? o.push(l) : o !== n ? o = [o, l] : l !== n && (o = l), a
                }
            }, c ? (k === n && p.initialize(), p.invoke(l)) : (k !== n && k.invoke("destroy"), p.initialize())
        }), o !== n ? o : this
    }, e.fn.accordion.settings = {
        name: "Accordion",
        namespace: "accordion",
        debug: !1,
        verbose: !1,
        performsssance: !0,
        on: "click",
        observeChanges: !0,
        exclusive: !0,
        collapsible: !0,
        closeNested: !1,
        animateChildren: !0,
        duration: 350,
        easing: "easeOutQuad",
        onOpening: function() {},
        onOpen: function() {},
        onClosing: function() {},
        onClose: function() {},
        onChange: function() {},
        error: {
            method: "The method you called is not defined"
        },
        className: {
            active: "active",
            animating: "animating"
        },
        selector: {
            accordion: ".accordion",
            title: ".title",
            trigger: ".title",
            content: ".content"
        }
    }, e.extend(e.easing, {
        easeOutQuad: function(e, t, i, n, o) {
            return -n * (t /= o) * (t - 2) + i
        }
    })
}(jQuery, window, document), ! function(e, t, i, n) {
    "use strict";
    e.fn.dimmer = function(t) {
        var o, s = e(this),
            r = (new Date).getTime(),
            a = [],
            l = arguments[0],
            c = "string" == typeof l,
            u = [].slice.call(arguments, 1);
        return s.each(function() {
            var d, p, h, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                m = f.selector,
                g = f.namespace,
                v = f.className,
                b = f.error,
                y = "." + g,
                w = "module-" + g,
                x = s.selector || "",
                S = "ontouchstart" in i.documentElement ? "touchstart" : "click",
                C = e(this),
                T = this,
                k = C.data(w);
            h = {
                preinitialize: function() {
                    h.is.dimmer() ? (p = C.parent(), d = C) : (p = C, d = h.has.dimmer() ? f.dimmerName ? p.find(m.dimmer).filter("." + f.dimmerName) : p.find(m.dimmer) : h.create())
                },
                initialize: function() {
                    h.debug("Initializing dimmer", f), h.bind.events(), h.set.dimmable(), h.instantiate()
                },
                instantiate: function() {
                    h.verbose("Storing instance of module", h), k = h, C.data(w, k)
                },
                destroy: function() {
                    h.verbose("Destroying previous module", d), h.unbind.events(), h.remove.variation(), p.off(y)
                },
                bind: {
                    events: function() {
                        "hover" == f.on ? p.on("mouseenter" + y, h.show).on("mouseleave" + y, h.hide) : "click" == f.on && p.on(S + y, h.toggle), h.is.page() && (h.debug("Setting as a page dimmer", p), h.set.pageDimmer()), h.is.closable() && (h.verbose("Adding dimmer close event", d), p.on(S + y, m.dimmer, h.event.click))
                    }
                },
                unbind: {
                    events: function() {
                        C.removeData(w)
                    }
                },
                event: {
                    click: function(t) {
                        h.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(m.content)) && (h.hide(), t.stopImmediatePropagation())
                    }
                },
                addContent: function(t) {
                    var i = e(t);
                    h.debug("Add content to dimmer", i), i.parent()[0] !== d[0] && i.detach().appendTo(d)
                },
                create: function() {
                    var t = e(f.template.dimmer());
                    return f.variation && (h.debug("Creating dimmer with variation", f.variation), t.addClass(f.variation)), f.dimmerName && (h.debug("Creating named dimmer", f.dimmerName), t.addClass(f.dimmerName)), t.appendTo(p), t
                },
                show: function(t) {
                    t = e.isFunction(t) ? t : function() {}, h.debug("Showing dimmer", d, f), h.is.dimmed() && !h.is.animating() || !h.is.enabled() ? h.debug("Dimmer is already shown or disabled") : (h.animate.show(t), f.onShow.call(T), f.onChange.call(T))
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t : function() {}, h.is.dimmed() || h.is.animating() ? (h.debug("Hiding dimmer", d), h.animate.hide(t), f.onHide.call(T), f.onChange.call(T)) : h.debug("Dimmer is not visible")
                },
                toggle: function() {
                    h.verbose("Toggling dimmer visibility", d), h.is.dimmed() ? h.hide() : h.show()
                },
                animate: {
                    show: function(t) {
                        t = e.isFunction(t) ? t : function() {}, f.useCSS && e.fn.transition !== n && d.transition("is supported") ? ("auto" !== f.opacity && h.set.opacity(), d.transition({
                            animation: f.transition + " in",
                            queue: !1,
                            duration: h.get.duration(),
                            useFailSafe: !0,
                            onStart: function() {
                                h.set.dimmed()
                            },
                            onComplete: function() {
                                h.set.active(), t()
                            }
                        })) : (h.verbose("Showing dimmer animation with javascript"), h.set.dimmed(), "auto" == f.opacity && (f.opacity = .8), d.stop().css({
                            opacity: 0,
                            width: "100%",
                            height: "100%"
                        }).fadeTo(h.get.duration(), f.opacity, function() {
                            d.removeAttr("style"), h.set.active(), t()
                        }))
                    },
                    hide: function(t) {
                        t = e.isFunction(t) ? t : function() {}, f.useCSS && e.fn.transition !== n && d.transition("is supported") ? (h.verbose("Hiding dimmer with css"), d.transition({
                            animation: f.transition + " out",
                            queue: !1,
                            duration: h.get.duration(),
                            useFailSafe: !0,
                            onStart: function() {
                                h.remove.dimmed()
                            },
                            onComplete: function() {
                                h.remove.active(), t()
                            }
                        })) : (h.verbose("Hiding dimmer with javascript"), h.remove.dimmed(), d.stop().fadeOut(h.get.duration(), function() {
                            h.remove.active(), d.removeAttr("style"), t()
                        }))
                    }
                },
                get: {
                    dimmer: function() {
                        return d
                    },
                    duration: function() {
                        return "object" == typeof f.duration ? h.is.active() ? f.duration.hide : f.duration.show : f.duration
                    }
                },
                has: {
                    dimmer: function() {
                        return f.dimmerName ? C.find(m.dimmer).filter("." + f.dimmerName).length > 0 : C.find(m.dimmer).length > 0
                    }
                },
                is: {
                    active: function() {
                        return d.hasClass(v.active)
                    },
                    animating: function() {
                        return d.is(":animated") || d.hasClass(v.animating)
                    },
                    closable: function() {
                        return "auto" == f.closable ? "hover" == f.on ? !1 : !0 : f.closable
                    },
                    dimmer: function() {
                        return C.hasClass(v.dimmer)
                    },
                    dimmable: function() {
                        return C.hasClass(v.dimmable)
                    },
                    dimmed: function() {
                        return p.hasClass(v.dimmed)
                    },
                    disabled: function() {
                        return p.hasClass(v.disabled)
                    },
                    enabled: function() {
                        return !h.is.disabled()
                    },
                    page: function() {
                        return p.is("body")
                    },
                    pageDimmer: function() {
                        return d.hasClass(v.pageDimmer)
                    }
                },
                can: {
                    show: function() {
                        return !d.hasClass(v.disabled)
                    }
                },
                set: {
                    opacity: function(e) {
                        var t = d.css("background-color"),
                            i = t.split(","),
                            n = i && 4 == i.length;
                        e = f.opacity || e, n ? (i[3] = e + ")", t = i.join(",")) : t = "rgba(0, 0, 0, " + e + ")", h.debug("Setting opacity to", e), d.css("background-color", t)
                    },
                    active: function() {
                        d.addClass(v.active)
                    },
                    dimmable: function() {
                        p.addClass(v.dimmable)
                    },
                    dimmed: function() {
                        p.addClass(v.dimmed)
                    },
                    pageDimmer: function() {
                        d.addClass(v.pageDimmer)
                    },
                    disabled: function() {
                        d.addClass(v.disabled)
                    },
                    variation: function(e) {
                        e = e || f.variation, e && d.addClass(e)
                    }
                },
                remove: {
                    active: function() {
                        d.removeClass(v.active)
                    },
                    dimmed: function() {
                        p.removeClass(v.dimmed)
                    },
                    disabled: function() {
                        d.removeClass(v.disabled)
                    },
                    variation: function(e) {
                        e = e || f.variation, e && d.removeClass(e)
                    }
                },
                setting: function(t, i) {
                    if (h.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (i === n) return f[t];
                        f[t] = i
                    }
                },
                internal: function(t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (i === n) return h[t];
                        h[t] = i
                    }
                },
                debug: function() {
                    f.debug && (f.performsssance ? h.performsssance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), h.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performsssance ? h.performsssance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), h.verbose.apply(console, arguments)))
                },
                error: function() {
                    h.error = Function.prototype.bind.call(console.error, console, f.name + ":"), h.error.apply(console, arguments)
                },
                performsssance: {
                    log: function(e) {
                        var t, i, n;
                        f.performsssance && (t = (new Date).getTime(), n = r || t, i = t - n, r = t, a.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": i
                        })), clearTimeout(h.performsssance.timer), h.performsssance.timer = setTimeout(h.performsssance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                            i = 0;
                        r = !1, clearTimeout(h.performsssance.timer), e.each(a, function(e, t) {
                            i += t["Execution Time"]
                        }), t += " " + i + "ms", x && (t += " '" + x + "'"), s.length > 1 && (t += " (" + s.length + ")"), (console.group !== n || console.table !== n) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), a = []
                    }
                },
                invoke: function(t, i, s) {
                    var r, a, l, c = k;
                    return i = i || u, s = T || s, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                        var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                        if (e.isPlainObject(c[s]) && i != r) c = c[s];
                        else {
                            if (c[s] !== n) return a = c[s], !1;
                            if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : (h.error(b.method, t), !1);
                            c = c[o]
                        }
                    })), e.isFunction(a) ? l = a.apply(s, i) : a !== n && (l = a), e.isArray(o) ? o.push(l) : o !== n ? o = [o, l] : l !== n && (o = l), a
                }
            }, h.preinitialize(), c ? (k === n && h.initialize(), h.invoke(l)) : (k !== n && k.invoke("destroy"), h.initialize())
        }), o !== n ? o : this
    }, e.fn.dimmer.settings = {
        name: "Dimmer",
        namespace: "dimmer",
        debug: !1,
        verbose: !1,
        performsssance: !0,
        dimmerName: !1,
        variation: !1,
        closable: "auto",
        useCSS: !0,
        transition: "fade",
        on: !1,
        opacity: "auto",
        duration: {
            show: 500,
            hide: 500
        },
        onChange: function() {},
        onShow: function() {},
        onHide: function() {},
        error: {
            method: "The method you called is not defined."
        },
        className: {
            active: "active",
            animating: "animating",
            dimmable: "dimmable",
            dimmed: "dimmed",
            dimmer: "dimmer",
            disabled: "disabled",
            hide: "hide",
            pageDimmer: "page",
            show: "show"
        },
        selector: {
            dimmer: "> .ui.dimmer",
            content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
        },
        template: {
            dimmer: function() {
                return e("<div />").attr("class", "ui dimmer")
            }
        }
    }
}(jQuery, window, document), ! function(e, t, i, n) {
    "use strict";
    e.fn.dropdown = function(o) {
        var s, r = e(this),
            a = e(i),
            l = r.selector || "",
            c = "ontouchstart" in i.documentElement,
            u = (new Date).getTime(),
            d = [],
            p = arguments[0],
            h = "string" == typeof p,
            f = [].slice.call(arguments, 1);
        return r.each(function(m) {
            var g, v, b, y, w, x, S, C = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
                T = C.className,
                k = C.message,
                E = C.fields,
                A = C.metadata,
                D = C.namespace,
                _ = C.regExp,
                L = C.selector,
                N = C.error,
                H = C.templates,
                P = "." + D,
                z = "module-" + D,
                F = e(this),
                M = e(C.context),
                O = F.find(L.text),
                W = F.find(L.search),
                I = F.find(L.inputs),
                R = F.find(L.icon),
                j = F.prev().find(L.text).length > 0 ? F.prev().find(L.text) : F.prev(),
                $ = F.children(L.menu),
                q = $.find(L.item),
                Y = !1,
                B = !1,
                X = !1,
                U = this,
                V = F.data(z);
            S = {
                initialize: function() {
                    S.debug("Initializing dropdown", C), S.is.alreadySetup() ? S.setup.reference() : (S.setup.layout(), S.refreshData(), S.save.defaults(), S.restore.selected(), S.create.id(), S.bind.events(), S.observeChanges(), S.instantiate())
                },
                instantiate: function() {
                    S.verbose("Storing instance of dropdown", S), V = S, F.data(z, S)
                },
                destroy: function() {
                    S.verbose("Destroying previous dropdown", F), S.remove.tabbable(), F.off(P).removeData(z), $.off(P), a.off(b), w && w.disconnect(), x && x.disconnect()
                },
                observeChanges: function() {
                    "MutationObserver" in t && (w = new MutationObserver(function(e) {
                        S.debug("<select> modified, recreating menu"), S.setup.select()
                    }), x = new MutationObserver(function(e) {
                        S.debug("Menu modified, updating selector cache"), S.refresh()
                    }), S.has.inputs() && w.observe(I[0], {
                        childList: !0,
                        subtree: !0
                    }), S.has.menu() && x.observe($[0], {
                        childList: !0,
                        subtree: !0
                    }), S.debug("Setting up mutation observer", w, x))
                },
                create: {
                    id: function() {
                        y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, S.verbose("Creating unique id for element", y)
                    },
                    userChoice: function(t) {
                        var i, o, s;
                        return (t = t || S.get.userValues()) ? (t = e.isArray(t) ? t : [t], e.each(t, function(t, r) {
                            S.get.item(r) === !1 && (s = C.templates.addition(S.add.variables(k.addResult, r)), o = e("<div />").html(s).attr("data-" + A.value, r).attr("data-" + A.text, r).addClass(T.addition).addClass(T.item), i = i === n ? o : i.add(o), S.verbose("Creating user choices for value", r, o))
                        }), i) : !1
                    },
                    userLabels: function(t) {
                        var i = S.get.userValues();
                        i && (S.debug("Adding user labels", i), e.each(i, function(e, t) {
                            S.verbose("Adding custom user value"), S.add.label(t, t)
                        }))
                    },
                    menu: function() {
                        $ = e("<div />").addClass(T.menu).appendTo(F)
                    }
                },
                search: function(e) {
                    e = e !== n ? e : S.get.query(), S.verbose("Searching for query", e), S.filter(e)
                },
                select: {
                    firstUnfiltered: function() {
                        S.verbose("Selecting first non-filtered element"), S.remove.selectedItem(), q.not(L.unselectable).eq(0).addClass(T.selected)
                    },
                    nextAvailable: function(e) {
                        e = e.eq(0);
                        var t = e.nextAll(L.item).not(L.unselectable).eq(0),
                            i = e.prevAll(L.item).not(L.unselectable).eq(0),
                            n = t.length > 0;
                        n ? (S.verbose("Moving selection to", t), t.addClass(T.selected)) : (S.verbose("Moving selection to", i), i.addClass(T.selected))
                    }
                },
                setup: {
                    api: function() {
                        var e = {
                            debug: C.debug,
                            on: !1
                        };
                        S.verbose("First request, initializing API"), F.api(e)
                    },
                    layout: function() {
                        F.is("select") && (S.setup.select(), S.setup.returnedObject()), S.has.menu() || S.create.menu(), S.is.search() && !S.has.search() && (S.verbose("Adding search inputs"), W = e("<inputs />").addClass(T.search).insertBefore(O)), C.allowTab && S.set.tabbable()
                    },
                    select: function() {
                        var t = S.get.selectValues();
                        S.debug("Dropdown initialized on a select", t), F.is("select") && (I = F), I.parent(L.dropdown).length > 0 ? (S.debug("UI dropdown already exists. Creating dropdown menu only"), F = I.closest(L.dropdown), S.has.menu() || S.create.menu(), $ = F.children(L.menu), S.setup.menu(t)) : (S.debug("Creating entire dropdown from select"), F = e("<div />").attr("class", I.attr("class")).addClass(T.selection).addClass(T.dropdown).html(H.dropdown(t)).insertBefore(I), I.hasClass(T.multiple) && I.prop("multiple") === !1 && (S.error(N.missingMultiple), I.prop("multiple", !0)), I.is("[multiple]") && S.set.multiple(), I.removeAttr("class").detach().prependTo(F)), S.refresh()
                    },
                    menu: function(e) {
                        $.html(H.menu(e, E)), q = $.find(L.item)
                    },
                    reference: function() {
                        S.debug("Dropdown behavior was called on select, replacing with closest dropdown"), F = F.parent(L.dropdown), S.refresh(), S.setup.returnedObject(), h && (V = S, S.invoke(p))
                    },
                    returnedObject: function() {
                        var e = r.slice(0, m),
                            t = r.slice(m + 1);
                        r = e.add(F).add(t)
                    }
                },
                refresh: function() {
                    S.refreshSelectors(), S.refreshData()
                },
                refreshSelectors: function() {
                    S.verbose("Refreshing selector cache"), O = F.find(L.text), W = F.find(L.search), I = F.find(L.inputs), R = F.find(L.icon), j = F.prev().find(L.text).length > 0 ? F.prev().find(L.text) : F.prev(), $ = F.children(L.menu), q = $.find(L.item)
                },
                refreshData: function() {
                    S.verbose("Refreshing cached metadata"), q.removeData(A.text).removeData(A.value), F.removeData(A.defaultText).removeData(A.defaultValue).removeData(A.placeholderText)
                },
                toggle: function() {
                    S.verbose("Toggling menu visibility"), S.is.active() ? S.hide() : S.show()
                },
                show: function(t) {
                    if (t = e.isFunction(t) ? t : function() {}, S.can.show() && !S.is.active()) {
                        if (S.debug("Showing dropdown"), S.is.multiple() && !S.has.search() && S.is.allFiltered()) return !0;
                        S.has.message() && !S.has.maxSelections() && S.remove.message(), C.onShow.call(U) !== !1 && S.animate.show(function() {
                            S.can.click() && S.bind.intent(), S.set.visible(), t.call(U)
                        })
                    }
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t : function() {}, S.is.active() && (S.debug("Hiding dropdown"), C.onHide.call(U) !== !1 && S.animate.hide(function() {
                        S.remove.visible(), t.call(U)
                    }))
                },
                hideOthers: function() {
                    S.verbose("Finding other dropdowns to hide"), r.not(F).has(L.menu + "." + T.visible).dropdown("hide")
                },
                hideMenu: function() {
                    S.verbose("Hiding menu  instantaneously"), S.remove.active(), S.remove.visible(), $.transition("hide")
                },
                hideSubMenus: function() {
                    var e = $.children(L.item).find(L.menu);
                    S.verbose("Hiding sub menus", e), e.transition("hide")
                },
                bind: {
                    events: function() {
                        c && S.bind.touchEvents(), S.bind.keyboardEvents(), S.bind.inputsEvents(), S.bind.mouseEvents()
                    },
                    touchEvents: function() {
                        S.debug("Touch device detected binding additional touch events"), S.is.searchSelection() || S.is.single() && F.on("touchstart" + P, S.event.test.toggle), $.on("touchstart" + P, L.item, S.event.item.mouseenter)
                    },
                    keyboardEvents: function() {
                        S.verbose("Binding keyboard events"), F.on("keydown" + P, S.event.keydown), S.has.search() && F.on(S.get.inputsEvent() + P, L.search, S.event.inputs), S.is.multiple() && a.on("keydown" + b, S.event.document.keydown)
                    },
                    inputsEvents: function() {
                        S.verbose("Binding inputs change events"), F.on("change" + P, L.inputs, S.event.change)
                    },
                    mouseEvents: function() {
                        S.verbose("Binding mouse events"), S.is.multiple() && F.on("click" + P, L.label, S.event.label.click).on("click" + P, L.remove, S.event.remove.click), S.is.searchSelection() ? (F.on("mousedown" + P, L.menu, S.event.menu.mousedown).on("mouseup" + P, L.menu, S.event.menu.mouseup).on("click" + P, L.icon, S.event.icon.click).on("click" + P, L.search, S.show).on("focus" + P, L.search, S.event.search.focus).on("blur" + P, L.search, S.event.search.blur).on("click" + P, L.text, S.event.text.focus), S.is.multiple() && F.on("click" + P, S.event.click)) : ("click" == C.on ? F.on("click" + P, L.icon, S.event.icon.click).on("click" + P, S.event.test.toggle) : "hover" == C.on ? F.on("mouseenter" + P, S.delay.show).on("mouseleave" + P, S.delay.hide) : F.on(C.on + P, S.toggle), F.on("mousedown" + P, S.event.mousedown).on("mouseup" + P, S.event.mouseup).on("focus" + P, S.event.focus).on("blur" + P, S.event.blur)), $.on("mouseenter" + P, L.item, S.event.item.mouseenter).on("mouseleave" + P, L.item, S.event.item.mouseleave).on("click" + P, L.item, S.event.item.click)
                    },
                    intent: function() {
                        S.verbose("Binding hide intent event to document"), c && a.on("touchstart" + b, S.event.test.touch).on("touchmove" + b, S.event.test.touch), a.on("click" + b, S.event.test.hide)
                    }
                },
                unbind: {
                    intent: function() {
                        S.verbose("Removing hide intent event from document"), c && a.off("touchstart" + b).off("touchmove" + b), a.off("click" + b)
                    }
                },
                filter: function(e) {
                    var t = e !== n ? e : S.get.query(),
                        i = function() {
                            S.is.multiple() && S.filterActive(), S.select.firstUnfiltered(), S.has.allResultsFiltered() ? C.onNoResults.call(U, t) ? C.allowAdditions || (S.verbose("All items filtered, showing message", t), S.add.message(k.noResults)) : (S.verbose("All items filtered, hiding dropdown", t), S.hideMenu()) : S.remove.message(), C.allowAdditions && S.add.userSuggestion(e), S.is.searchSelection() && S.can.show() && S.is.focusedOnSearch() && S.show()
                        };
                    C.useLabels && S.has.maxSelections() || (C.apiSettings ? S.can.useAPI() ? S.queryRemote(t, function() {
                        i()
                    }) : S.error(N.noAPI) : (S.filterItems(t), i()))
                },
                queryRemote: function(t, i) {
                    var n = {
                        errorDuration: !1,
                        throttle: C.throttle,
                        urlData: {
                            query: t
                        },
                        onError: function() {
                            S.add.message(k.serverError), i()
                        },
                        onFailure: function() {
                            S.add.message(k.serverError), i()
                        },
                        onSuccess: function(e) {
                            S.remove.message(), S.setup.menu({
                                values: e.results
                            }), i()
                        }
                    };
                    F.api("get request") || S.setup.api(), n = e.extend(!0, {}, n, C.apiSettings), F.api("setting", n).api("query")
                },
                filterItems: function(t) {
                    var i = t !== n ? t : S.get.query(),
                        o = e(),
                        s = S.escape.regExp(i),
                        r = new RegExp("^" + s, "igm");
                    S.has.query() ? (S.verbose("Searching for matching values", i), q.each(function() {
                        var t, n, s = e(this);
                        if ("both" == C.match || "text" == C.match) {
                            if (t = String(S.get.choiceText(s, !1)), -1 !== t.search(r)) return o = o.add(s), !0;
                            if (C.fullTextSearch && S.fuzzySearch(i, t)) return o = o.add(s), !0
                        }
                        if ("both" == C.match || "value" == C.match) {
                            if (n = String(S.get.choiceValue(s, t)), -1 !== n.search(r)) return o = o.add(s), !0;
                            if (C.fullTextSearch && S.fuzzySearch(i, n)) return o = o.add(s), !0
                        }
                    })) : o = q, S.debug("Showing only matched items", i), S.remove.filteredItem(), q.not(o).addClass(T.filtered)
                },
                fuzzySearch: function(e, t) {
                    var i = t.length,
                        n = e.length;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), n > i) return !1;
                    if (n === i) return e === t;
                    e: for (var o = 0, s = 0; n > o; o++) {
                        for (var r = e.charCodeAt(o); i > s;)
                            if (t.charCodeAt(s++) === r) continue e;
                        return !1
                    }
                    return !0
                },
                filterActive: function() {
                    C.useLabels && q.filter("." + T.active).addClass(T.filtered)
                },
                focusSearch: function() {
                    S.is.search() && !S.is.focusedOnSearch() && W[0].focus()
                },
                forceSelection: function() {
                    var e = q.not(T.filtered).filter("." + T.selected).eq(0),
                        t = q.not(T.filtered).filter("." + T.active).eq(0),
                        i = e.length > 0 ? e : t,
                        n = i.size() > 0;
                    n && S.has.query() ? (S.debug("Forcing partial selection to selected item", i), S.event.item.click.call(i)) : S.hide()
                },
                event: {
                    change: function() {
                        X || (S.debug("inputs changed, updating selection"), S.set.selected())
                    },
                    focus: function() {
                        C.showOnFocus && !Y && S.is.hidden() && !v && S.show()
                    },
                    click: function(t) {
                        var i = e(t.target);
                        i.is(F) && !S.is.focusedOnSearch() && S.focusSearch()
                    },
                    blur: function(e) {
                        v = i.activeElement === this, Y || v || (S.remove.activeLabel(), S.hide())
                    },
                    mousedown: function() {
                        Y = !0
                    },
                    mouseup: function() {
                        Y = !1
                    },
                    search: {
                        focus: function() {
                            Y = !0, S.is.multiple() && S.remove.activeLabel(), C.showOnFocus && S.show()
                        },
                        blur: function(e) {
                            v = i.activeElement === this, B || v ? v && C.forceSelection && S.forceSelection() : S.is.multiple() ? (S.remove.activeLabel(), S.hide()) : C.forceSelection ? S.forceSelection() : S.hide()
                        }
                    },
                    icon: {
                        click: function(e) {
                            S.toggle(), e.stopPropagation()
                        }
                    },
                    text: {
                        focus: function(e) {
                            Y = !0, S.focusSearch()
                        }
                    },
                    inputs: function(e) {
                        (S.is.multiple() || S.is.searchSelection()) && S.set.filtered(), clearTimeout(S.timer), S.timer = setTimeout(S.search, C.delay.search)
                    },
                    label: {
                        click: function(t) {
                            var i = e(this),
                                n = F.find(L.label),
                                o = n.filter("." + T.active),
                                s = i.nextAll("." + T.active),
                                r = i.prevAll("." + T.active),
                                a = s.length > 0 ? i.nextUntil(s).add(o).add(i) : i.prevUntil(r).add(o).add(i);
                            t.shiftKey ? (o.removeClass(T.active), a.addClass(T.active)) : t.ctrlKey ? i.toggleClass(T.active) : (o.removeClass(T.active), i.addClass(T.active)), C.onLabelSelect.apply(this, n.filter("." + T.active))
                        }
                    },
                    remove: {
                        click: function() {
                            var t = e(this).parent();
                            t.hasClass(T.active) ? S.remove.activeLabels() : S.remove.activeLabels(t)
                        }
                    },
                    test: {
                        toggle: function(e) {
                            var t = S.is.multiple() ? S.show : S.toggle;
                            S.determine.eventOnElement(e, t) && e.preventDefault()
                        },
                        touch: function(e) {
                            S.determine.eventOnElement(e, function() {
                                "touchstart" == e.type ? S.timer = setTimeout(function() {
                                    S.hide()
                                }, C.delay.touch) : "touchmove" == e.type && clearTimeout(S.timer)
                            }), e.stopPropagation()
                        },
                        hide: function(e) {
                            S.determine.eventInModule(e, S.hide)
                        }
                    },
                    menu: {
                        mousedown: function() {
                            B = !0
                        },
                        mouseup: function() {
                            B = !1
                        }
                    },
                    item: {
                        mouseenter: function(t) {
                            var i = e(this).children(L.menu),
                                n = e(this).siblings(L.item).children(L.menu);
                            i.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function() {
                                S.verbose("Showing sub-menu", i), e.each(n, function() {
                                    S.animate.hide(!1, e(this))
                                }), S.animate.show(!1, i)
                            }, C.delay.show), t.preventDefault())
                        },
                        mouseleave: function(t) {
                            var i = e(this).children(L.menu);
                            i.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function() {
                                S.verbose("Hiding sub-menu", i), S.animate.hide(!1, i)
                            }, C.delay.hide))
                        },
                        touchend: function() {},
                        click: function(t) {
                            var i = e(this),
                                n = e(t ? t.target : ""),
                                o = i.find(L.menu),
                                s = S.get.choiceText(i),
                                r = S.get.choiceValue(i, s),
                                a = o.length > 0,
                                l = o.find(n).length > 0;
                            l || a && !C.allowCategorySelection || (C.useLabels || (S.remove.filteredItem(), S.remove.searchTerm(), S.set.scrollPosition(i)), S.determine.selectAction.call(this, s, r))
                        }
                    },
                    document: {
                        keydown: function(e) {
                            var t = e.which,
                                i = S.get.shortcutKeys(),
                                n = S.is.inObject(t, i);
                            if (n) {
                                var o = F.find(L.label),
                                    s = o.filter("." + T.active),
                                    r = (s.data(A.value), o.index(s)),
                                    a = o.length,
                                    l = s.length > 0,
                                    c = s.length > 1,
                                    u = 0 === r,
                                    d = r + 1 == a,
                                    p = S.is.searchSelection(),
                                    h = S.is.focusedOnSearch(),
                                    f = S.is.focused(),
                                    m = h && 0 === S.get.caretPosition();
                                if (p && !l && !h) return;
                                t == i.leftArrow ? !f && !m || l ? l && (e.shiftKey ? S.verbose("Adding previous label to selection") : (S.verbose("Selecting previous label"), o.removeClass(T.active)), u && !c ? s.addClass(T.active) : s.prev(L.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (S.verbose("Selecting previous label"), o.last().addClass(T.active)) : t == i.rightArrow ? (f && !l && o.first().addClass(T.active), l && (e.shiftKey ? S.verbose("Adding next label to selection") : (S.verbose("Selecting next label"), o.removeClass(T.active)), d ? p ? h ? o.removeClass(T.active) : S.focusSearch() : c ? s.next(L.siblingLabel).addClass(T.active) : s.addClass(T.active) : s.next(L.siblingLabel).addClass(T.active), e.preventDefault())) : t == i.deleteKey || t == i.backspace ? l ? (S.verbose("Removing active labels"), d && p && !h && S.focusSearch(), s.last().next(L.siblingLabel).addClass(T.active), S.remove.activeLabels(s), e.preventDefault()) : m && !l && t == i.backspace && (S.verbose("Removing last label on inputs backspace"), s = o.last().addClass(T.active), S.remove.activeLabels(s)) : s.removeClass(T.active)
                            }
                        }
                    },
                    keydown: function(e) {
                        var t = e.which,
                            i = S.get.shortcutKeys(),
                            n = S.is.inObject(t, i);
                        if (n) {
                            var o, s, r = q.not(L.unselectable).filter("." + T.selected).eq(0),
                                a = $.children("." + T.active).eq(0),
                                l = r.length > 0 ? r : a,
                                c = l.length > 0 ? l.siblings(":not(." + T.filtered + ")").andSelf() : $.children(":not(." + T.filtered + ")"),
                                u = l.children(L.menu),
                                d = l.closest(L.menu),
                                p = d.hasClass(T.visible) || d.hasClass(T.animating) || d.parent(L.menu).length > 0,
                                h = u.length > 0,
                                f = l.length > 0,
                                m = l.not(L.unselectable).length > 0;
                            if (S.is.visible()) {
                                if ((t == i.enter || t == i.delimiter) && (t == i.enter && f && h && !C.allowCategorySelection ? (S.verbose("Pressed enter on unselectable category, opening sub menu"), t = i.rightArrow) : m && (S.verbose("Selecting item from keyboard shortcut", l), S.event.item.click.call(l, e), S.is.searchSelection() && S.remove.searchTerm()), e.preventDefault()), t == i.leftArrow && (s = d[0] !== $[0], s && (S.verbose("Left key pressed, closing sub-menu"), S.animate.hide(!1, d), l.removeClass(T.selected), d.closest(L.item).addClass(T.selected), e.preventDefault())), t == i.rightArrow && h && (S.verbose("Right key pressed, opening sub-menu"), S.animate.show(!1, u), l.removeClass(T.selected), u.find(L.item).eq(0).addClass(T.selected), e.preventDefault()), t == i.upArrow) {
                                    if (o = f && p ? l.prevAll(L.item + ":not(" + L.unselectable + ")").eq(0) : q.eq(0), c.index(o) < 0) return S.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                    S.verbose("Up key pressed, changing active item"), l.removeClass(T.selected), o.addClass(T.selected), S.set.scrollPosition(o), e.preventDefault()
                                }
                                if (t == i.downArrow) {
                                    if (o = f && p ? o = l.nextAll(L.item + ":not(" + L.unselectable + ")").eq(0) : q.eq(0), 0 === o.length) return S.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                    S.verbose("Down key pressed, changing active item"), q.removeClass(T.selected), o.addClass(T.selected), S.set.scrollPosition(o), e.preventDefault()
                                }
                                t == i.pageUp && (S.scrollPage("up"), e.preventDefault()), t == i.pageDown && (S.scrollPage("down"), e.preventDefault()), t == i.escape && (S.verbose("Escape key pressed, closing dropdown"), S.hide())
                            } else t == i.delimiter && e.preventDefault(), t == i.downArrow && (S.verbose("Down key pressed, showing dropdown"), S.show(), e.preventDefault())
                        } else S.is.selection() && !S.is.search() && S.set.selectedLetter(String.fromCharCode(t))
                    }
                },
                determine: {
                    selectAction: function(t, i) {
                        S.verbose("Determining action", C.action), e.isFunction(S.action[C.action]) ? (S.verbose("Triggering preset action", C.action, t, i), S.action[C.action].call(this, t, i)) : e.isFunction(C.action) ? (S.verbose("Triggering user action", C.action, t, i), C.action.call(this, t, i)) : S.error(N.action, C.action)
                    },
                    eventInModule: function(t, n) {
                        var o = e(t.target),
                            s = o.closest(i.documentElement).length > 0,
                            r = o.closest(F).length > 0;
                        return n = e.isFunction(n) ? n : function() {}, s && !r ? (S.verbose("Triggering event", n), n(), !0) : (S.verbose("Event occurred in dropdown, canceling callback"), !1)
                    },
                    eventOnElement: function(t, i) {
                        var n = e(t.target),
                            o = n.closest(L.siblingLabel),
                            s = 0 === F.find(o).length,
                            r = 0 === n.closest($).length;
                        return i = e.isFunction(i) ? i : function() {}, s && r ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                    }
                },
                action: {
                    nothing: function() {},
                    activate: function(t, i) {
                        if (i = i !== n ? i : t, S.can.activate(e(this))) {
                            if (S.set.selected(i, e(this)), S.is.multiple() && !S.is.allFiltered()) return;
                            S.hideAndClear()
                        }
                    },
                    select: function(e, t) {
                        S.action.activate.call(this)
                    },
                    combo: function(t, i) {
                        i = i !== n ? i : t, S.set.selected(i, e(this)), S.hideAndClear()
                    },
                    hide: function(e, t) {
                        S.set.value(t), S.hideAndClear()
                    }
                },
                get: {
                    id: function() {
                        return y
                    },
                    defaultText: function() {
                        return F.data(A.defaultText)
                    },
                    defaultValue: function() {
                        return F.data(A.defaultValue)
                    },
                    placeholderText: function() {
                        return F.data(A.placeholderText) || ""
                    },
                    text: function() {
                        return O.text()
                    },
                    query: function() {
                        return e.trim(W.val())
                    },
                    searchWidth: function(e) {
                        return e * C.glyphWidth + "em"
                    },
                    selectionCount: function() {
                        var t, i = S.get.values();
                        return t = S.is.multiple() ? e.isArray(i) ? i.length : 0 : "" !== S.get.value() ? 1 : 0
                    },
                    transition: function(e) {
                        return "auto" == C.transition ? S.is.upward(e) ? "slide up" : "slide down" : C.transition
                    },
                    userValues: function() {
                        var t = S.get.values();
                        return t ? (t = e.isArray(t) ? t : [t], e.grep(t, function(e) {
                            return S.get.item(e) === !1
                        })) : !1
                    },
                    uniqueArray: function(t) {
                        return e.grep(t, function(i, n) {
                            return e.inArray(i, t) === n
                        })
                    },
                    caretPosition: function() {
                        var e, t, n = W.get(0);
                        return "selectionStart" in n ? n.selectionStart : i.selection ? (n.focus(), e = i.selection.createRange(), t = e.text.length, e.moveStart("character", -n.value.length), e.text.length - t) : void 0
                    },
                    shortcutKeys: function() {
                        return {
                            backspace: 8,
                            delimiter: 188,
                            deleteKey: 46,
                            enter: 13,
                            escape: 27,
                            pageUp: 33,
                            pageDown: 34,
                            leftArrow: 37,
                            upArrow: 38,
                            rightArrow: 39,
                            downArrow: 40
                        }
                    },
                    value: function() {
                        var t = I.length > 0 ? I.val() : F.data(A.value);
                        return e.isArray(t) && 1 === t.length && "" === t[0] ? "" : t
                    },
                    values: function() {
                        var e = S.get.value();
                        return "" === e ? "" : !S.has.selectinputs() && S.is.multiple() ? "string" == typeof e ? e.split(C.delimiter) : "" : e
                    },
                    remoteValues: function() {
                        var t = S.get.values(),
                            i = !1;
                        return t && ("string" == typeof t && (t = [t]), i = {}, e.each(t, function(e, t) {
                            var n = S.read.remoteData(t);
                            S.verbose("Restoring value from session data", n, t), i[t] = n ? n : t
                        })), i
                    },
                    choiceText: function(t, i) {
                        return i = i !== n ? i : C.preserveHTML, t ? (t.find(L.menu).length > 0 && (S.verbose("Retreiving text of element with sub-menu"), t = t.clone(), t.find(L.menu).remove(), t.find(L.menuIcon).remove()), t.data(A.text) !== n ? t.data(A.text) : e.trim(i ? t.html() : t.text())) : void 0
                    },
                    choiceValue: function(t, i) {
                        return i = i || S.get.choiceText(t), t ? t.data(A.value) !== n ? String(t.data(A.value)) : "string" == typeof i ? e.trim(i.toLowerCase()) : String(i) : !1
                    },
                    inputsEvent: function() {
                        var e = W[0];
                        return e ? e.oninputs !== n ? "inputs" : e.onpropertychange !== n ? "propertychange" : "keyup" : !1
                    },
                    selectValues: function() {
                        var t = {};
                        return t.values = [], F.find("option").each(function() {
                            var i = e(this),
                                o = i.html(),
                                s = i.attr("disabled"),
                                r = i.attr("value") !== n ? i.attr("value") : o;
                            "auto" === C.placeholder && "" === r ? t.placeholder = o : t.values.push({
                                name: o,
                                value: r,
                                disabled: s
                            })
                        }), C.placeholder && "auto" !== C.placeholder && (S.debug("Setting placeholder value to", C.placeholder), t.placeholder = C.placeholder), C.sortSelect ? (t.values.sort(function(e, t) {
                            return e.name > t.name ? 1 : -1
                        }), S.debug("Retrieved and sorted values from select", t)) : S.debug("Retreived values from select", t), t
                    },
                    activeItem: function() {
                        return q.filter("." + T.active)
                    },
                    selectedItem: function() {
                        var e = q.not(L.unselectable).filter("." + T.selected);
                        return e.length > 0 ? e : q.eq(0)
                    },
                    itemWithAdditions: function(e) {
                        var t = S.get.item(e),
                            i = S.create.userChoice(e),
                            n = i && i.length > 0;
                        return n && (t = t.length > 0 ? t.add(i) : i), t
                    },
                    item: function(t, i) {
                        var o, s, r = !1;
                        return t = t !== n ? t : S.get.values() !== n ? S.get.values() : S.get.text(), o = s ? t.length > 0 : t !== n && null !== t, s = S.is.multiple() && e.isArray(t), i = "" === t || 0 === t ? !0 : i || !1, o && q.each(function() {
                            var o = e(this),
                                a = S.get.choiceText(o),
                                l = S.get.choiceValue(o, a);
                            if (null !== l && l !== n)
                                if (s)(-1 !== e.inArray(String(l), t) || -1 !== e.inArray(a, t)) && (r = r ? r.add(o) : o);
                                else if (i) {
                                if (S.verbose("Ambiguous dropdown value using strict type check", o, t), l === t || a === t) return r = o, !0
                            } else if (String(l) == String(t) || a == t) return S.verbose("Found select item by value", l, t), r = o, !0
                        }), r
                    }
                },
                check: {
                    maxSelections: function(e) {
                        return C.maxSelections ? (e = e !== n ? e : S.get.selectionCount(), e >= C.maxSelections ? (S.debug("Maximum selection count reached"), C.useLabels && (q.addClass(T.filtered), S.add.message(k.maxSelections)), !0) : (S.verbose("No longer at maximum selection count"), S.remove.message(), S.remove.filteredItem(), S.is.searchSelection() && S.filterItems(), !1)) : !0
                    }
                },
                restore: {
                    defaults: function() {
                        S.clear(), S.restore.defaultText(), S.restore.defaultValue()
                    },
                    defaultText: function() {
                        var e = S.get.defaultText(),
                            t = S.get.placeholderText;
                        e === t ? (S.debug("Restoring default placeholder text", e), S.set.placeholderText(e)) : (S.debug("Restoring default text", e), S.set.text(e))
                    },
                    defaultValue: function() {
                        var e = S.get.defaultValue();
                        e !== n && (S.debug("Restoring default value", e), "" !== e ? (S.set.value(e), S.set.selected()) : (S.remove.activeItem(), S.remove.selectedItem()))
                    },
                    labels: function() {
                        C.allowAdditions && (C.useLabels || (S.error(N.labels), C.useLabels = !0), S.debug("Restoring selected values"), S.create.userLabels()), S.check.maxSelections()
                    },
                    selected: function() {
                        S.restore.values(), S.is.multiple() ? (S.debug("Restoring previously selected values and labels"), S.restore.labels()) : S.debug("Restoring previously selected values")
                    },
                    values: function() {
                        S.set.initialLoad(), C.apiSettings ? C.saveRemoteData ? S.restore.remoteValues() : S.clearValue() : S.set.selected(), S.remove.initialLoad()
                    },
                    remoteValues: function() {
                        var t = S.get.remoteValues();
                        S.debug("Recreating selected from session data", t), t && (S.is.single() ? e.each(t, function(e, t) {
                            S.set.text(t)
                        }) : e.each(t, function(e, t) {
                            S.add.label(e, t)
                        }))
                    }
                },
                read: {
                    remoteData: function(e) {
                        var i;
                        return t.Storage === n ? void S.error(N.noStorage) : (i = sessionStorage.getItem(e), i !== n ? i : !1)
                    }
                },
                save: {
                    defaults: function() {
                        S.save.defaultText(), S.save.placeholderText(), S.save.defaultValue()
                    },
                    defaultValue: function() {
                        var e = S.get.value();
                        S.verbose("Saving default value as", e), F.data(A.defaultValue, e)
                    },
                    defaultText: function() {
                        var e = S.get.text();
                        S.verbose("Saving default text as", e), F.data(A.defaultText, e)
                    },
                    placeholderText: function() {
                        var e;
                        C.placeholder !== !1 && O.hasClass(T.placeholder) && (e = S.get.text(), S.verbose("Saving placeholder text as", e), F.data(A.placeholderText, e))
                    },
                    remoteData: function(e, i) {
                        return t.Storage === n ? void S.error(N.noStorage) : (S.verbose("Saving remote data to session storage", i, e), void sessionStorage.setItem(i, e))
                    }
                },
                clear: function() {
                    S.is.multiple() ? S.remove.labels() : (S.remove.activeItem(), S.remove.selectedItem()), S.set.placeholderText(), S.clearValue()
                },
                clearValue: function() {
                    S.set.value("")
                },
                scrollPage: function(e, t) {
                    var i, n, o, s = t || S.get.selectedItem(),
                        r = s.closest(L.menu),
                        a = r.outerHeight(),
                        l = r.scrollTop(),
                        c = q.eq(0).outerHeight(),
                        u = Math.floor(a / c),
                        d = (r.prop("scrollHeight"), "up" == e ? l - c * u : l + c * u),
                        p = q.not(L.unselectable);
                    o = "up" == e ? p.index(s) - u : p.index(s) + u, i = "up" == e ? o >= 0 : o < p.length, n = i ? p.eq(o) : "up" == e ? p.first() : p.last(), n.length > 0 && (S.debug("Scrolling page", e, n), s.removeClass(T.selected), n.addClass(T.selected), r.scrollTop(d))
                },
                set: {
                    filtered: function() {
                        var e = S.is.multiple(),
                            t = S.is.searchSelection(),
                            i = e && t,
                            n = t ? S.get.query() : "",
                            o = "string" == typeof n && n.length > 0,
                            s = S.get.searchWidth(n.length),
                            r = "" !== n;
                        e && o && (S.verbose("Adjusting inputs width", s, C.glyphWidth), W.css("width", s)), o || i && r ? (S.verbose("Hiding placeholder text"), O.addClass(T.filtered)) : (!e || i && !r) && (S.verbose("Showing placeholder text"), O.removeClass(T.filtered))
                    },
                    loading: function() {
                        F.addClass(T.loading)
                    },
                    placeholderText: function(e) {
                        e = e || S.get.placeholderText(), S.debug("Setting placeholder text", e), S.set.text(e), O.addClass(T.placeholder)
                    },
                    tabbable: function() {
                        S.has.search() ? (S.debug("Added tabindex to searchable dropdown"), W.val("").attr("tabindex", 0), $.attr("tabindex", -1)) : (S.debug("Added tabindex to dropdown"), F.attr("tabindex") || (F.attr("tabindex", 0), $.attr("tabindex", -1)))
                    },
                    initialLoad: function() {
                        S.verbose("Setting initial load"), g = !0
                    },
                    activeItem: function(e) {
                        e.addClass(C.allowAdditions && e.filter(L.addition).length > 0 ? T.filtered : T.active)
                    },
                    scrollPosition: function(e, t) {
                        var i, o, s, r, a, l, c, u, d, p = 5;
                        e = e || S.get.selectedItem(), i = e.closest(L.menu), o = e && e.length > 0, t = t !== n ? t : !1, e && i.length > 0 && o && (r = e.position().top, i.addClass(T.loading), l = i.scrollTop(), a = i.offset().top, r = e.offset().top, s = l - a + r, t || (c = i.height(), d = s + p > l + c, u = l > s - p), S.debug("Scrolling to active item", s), (t || u || d) && i.scrollTop(s), i.removeClass(T.loading))
                    },
                    text: function(e) {
                        "select" !== C.action && ("combo" == C.action ? (S.debug("Changing combo button text", e, j), C.preserveHTML ? j.html(e) : j.text(e)) : (e !== S.get.placeholderText() && O.removeClass(T.placeholder), S.debug("Changing text", e, O), O.removeClass(T.filtered), C.preserveHTML ? O.html(e) : O.text(e)))
                    },
                    selectedLetter: function(t) {
                        var i, n = q.filter("." + T.selected),
                            o = n.length > 0 && S.has.firstLetter(n, t),
                            s = !1;
                        o && (i = n.nextAll(q).eq(0), S.has.firstLetter(i, t) && (s = i)), s || q.each(function() {
                            return S.has.firstLetter(e(this), t) ? (s = e(this), !1) : void 0
                        }), s && (S.verbose("Scrolling to next value with letter", t), S.set.scrollPosition(s), n.removeClass(T.selected), s.addClass(T.selected))
                    },
                    direction: function(e) {
                        "auto" == C.direction ? S.is.onScreen(e) ? S.remove.upward(e) : S.set.upward(e) : "upward" == C.direction && S.set.upward(e)
                    },
                    upward: function(e) {
                        var t = e || F;
                        t.addClass(T.upward)
                    },
                    value: function(e, t, i) {
                        var o = I.length > 0,
                            s = (!S.has.value(e), S.get.values()),
                            r = e !== n ? String(e) : e;
                        if (o) {
                            if (r == s && (S.verbose("Skipping value update already same value", e, s), !S.is.initialLoad())) return;
                            S.is.single() && S.has.selectinputs() && S.can.extendSelect() && (S.debug("Adding user option", e), S.add.optionValue(e)), S.debug("Updating inputs value", e, s), X = !0, I.val(e), C.fireOnInit === !1 && S.is.initialLoad() ? S.debug("inputs native change event ignored on initial load") : I.trigger("change"), X = !1
                        } else S.verbose("Storing value in metadata", e, I), e !== s && F.data(A.value, r);
                        C.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("No callback on initial load", C.onChange) : C.onChange.call(U, e, t, i)
                    },
                    active: function() {
                        F.addClass(T.active)
                    },
                    multiple: function() {
                        F.addClass(T.multiple)
                    },
                    visible: function() {
                        F.addClass(T.visible)
                    },
                    exactly: function(e, t) {
                        S.debug("Setting selected to exact values"), S.clear(), S.set.selected(e, t)
                    },
                    selected: function(t, i) {
                        var n = S.is.multiple();
                        i = C.allowAdditions ? i || S.get.itemWithAdditions(t) : i || S.get.item(t), i && (S.debug("Setting selected menu item to", i), S.is.single() ? (S.remove.activeItem(), S.remove.selectedItem()) : C.useLabels && S.remove.selectedItem(), i.each(function() {
                            var t = e(this),
                                o = S.get.choiceText(t),
                                s = S.get.choiceValue(t, o),
                                r = t.hasClass(T.filtered),
                                a = t.hasClass(T.active),
                                l = t.hasClass(T.addition),
                                c = n && 1 == i.length;
                            n ? !a || l ? (C.apiSettings && C.saveRemoteData && S.save.remoteData(o, s), C.useLabels ? (S.add.value(s, o, t), S.add.label(s, o, c), S.set.activeItem(t), S.filterActive(), S.select.nextAvailable(i)) : (S.add.value(s, o, t), S.set.text(S.add.variables(k.count)), S.set.activeItem(t))) : r || (S.debug("Selected active value, removing label"), S.remove.selected(s)) : (C.apiSettings && C.saveRemoteData && S.save.remoteData(o, s), S.set.text(o), S.set.value(s, o, t), t.addClass(T.active).addClass(T.selected))
                        }))
                    }
                },
                add: {
                    label: function(t, i, n) {
                        var o, s = S.is.searchSelection() ? W : O;
                        return o = e("<a />").addClass(T.label).attr("data-value", t).html(H.label(t, i)), o = C.onLabelCreate.call(o, t, i), S.has.label(t) ? void S.debug("Label already exists, skipping", t) : (C.label.variation && o.addClass(C.label.variation), void(n === !0 ? (S.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(s).transition(C.label.transition, C.label.duration)) : (S.debug("Adding selection label", o), o.insertBefore(s))))
                    },
                    message: function(t) {
                        var i = $.children(L.message),
                            n = C.templates.message(S.add.variables(t));
                        i.length > 0 ? i.html(n) : i = e("<div/>").html(n).addClass(T.message).appendTo($)
                    },
                    optionValue: function(t) {
                        var i = I.find('option[value="' + t + '"]'),
                            n = i.length > 0;
                        n || (w && (w.disconnect(), S.verbose("Temporarily disconnecting mutation observer", t)), S.is.single() && (S.verbose("Removing previous user addition"), I.find("option." + T.addition).remove()), e("<option/>").prop("value", t).addClass(T.addition).html(t).appendTo(I), S.verbose("Adding user addition as an <option>", t), w && w.observe(I[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    },
                    userSuggestion: function(e) {
                        var t, i = $.children(L.addition),
                            n = S.get.item(e),
                            o = n && n.not(L.addition).length,
                            s = i.length > 0;
                        if (!C.useLabels || !S.has.maxSelections()) {
                            if ("" === e || o) return void i.remove();
                            q.removeClass(T.selected), s ? (t = C.templates.addition(S.add.variables(k.addResult, e)), i.html(t).attr("data-" + A.value, e).attr("data-" + A.text, e).removeClass(T.filtered).addClass(T.selected), S.verbose("Replacing user suggestion with new value", i)) : (i = S.create.userChoice(e), i.prependTo($).addClass(T.selected), S.verbose("Adding item choice to menu corresponding with user choice addition", i))
                        }
                    },
                    variables: function(e, t) {
                        var i, n, o = -1 !== e.search("{count}"),
                            s = -1 !== e.search("{maxCount}"),
                            r = -1 !== e.search("{term}");
                        return S.verbose("Adding templated variables to message", e), o && (i = S.get.selectionCount(), e = e.replace("{count}", i)), s && (i = S.get.selectionCount(), e = e.replace("{maxCount}", C.maxSelections)), r && (n = t || S.get.query(), e = e.replace("{term}", n)), e
                    },
                    value: function(t, i, n) {
                        var o, s = S.get.values();
                        return "" === t ? void S.debug("Cannot select blank values from multiselect") : (e.isArray(s) ? (o = s.concat([t]), o = S.get.uniqueArray(o)) : o = [t], S.has.selectinputs() ? S.can.extendSelect() && (S.debug("Adding value to select", t, o, I), S.add.optionValue(t)) : (o = o.join(C.delimiter), S.debug("Setting hidden inputs to delimited value", o, I)), C.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("Skipping onadd callback on initial load", C.onAdd) : C.onAdd.call(U, t, i, n), S.set.value(o, t, i, n), void S.check.maxSelections())
                    }
                },
                remove: {
                    active: function() {
                        F.removeClass(T.active)
                    },
                    activeLabel: function() {
                        F.find(L.label).removeClass(T.active)
                    },
                    loading: function() {
                        F.removeClass(T.loading)
                    },
                    initialLoad: function() {
                        g = !1
                    },
                    upward: function(e) {
                        var t = e || F;
                        t.removeClass(T.upward)
                    },
                    visible: function() {
                        F.removeClass(T.visible)
                    },
                    activeItem: function() {
                        q.removeClass(T.active)
                    },
                    filteredItem: function() {
                        C.useLabels && S.has.maxSelections() || (C.useLabels && S.is.multiple() ? q.not("." + T.active).removeClass(T.filtered) : q.removeClass(T.filtered))
                    },
                    optionValue: function(e) {
                        var t = I.find('option[value="' + e + '"]'),
                            i = t.length > 0;
                        i && t.hasClass(T.addition) && (w && (w.disconnect(), S.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), S.verbose("Removing user addition as an <option>", e), w && w.observe(I[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    },
                    message: function() {
                        $.children(L.message).remove()
                    },
                    searchTerm: function() {
                        S.verbose("Cleared search term"), W.val(""), S.set.filtered()
                    },
                    selected: function(t, i) {
                        return (i = C.allowAdditions ? i || S.get.itemWithAdditions(t) : i || S.get.item(t)) ? void i.each(function() {
                            var t = e(this),
                                i = S.get.choiceText(t),
                                n = S.get.choiceValue(t, i);
                            S.is.multiple() ? C.useLabels ? (S.remove.value(n, i, t), S.remove.label(n)) : (S.remove.value(n, i, t), 0 === S.get.selectionCount() ? S.set.placeholderText() : S.set.text(S.add.variables(k.count))) : S.remove.value(n, i, t), t.removeClass(T.filtered).removeClass(T.active), C.useLabels && t.removeClass(T.selected)
                        }) : !1
                    },
                    selectedItem: function() {
                        q.removeClass(T.selected)
                    },
                    value: function(e, t, i) {
                        var n, o = S.get.values();
                        S.has.selectinputs() ? (S.verbose("inputs is <select> removing selected option", e), n = S.remove.arrayValue(e, o), S.remove.optionValue(e)) : (S.verbose("Removing from delimited values", e), n = S.remove.arrayValue(e, o), n = n.join(C.delimiter)), C.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("No callback on initial load", C.onRemove) : C.onRemove.call(U, e, t, i), S.set.value(n, t, i), S.check.maxSelections()
                    },
                    arrayValue: function(t, i) {
                        return e.isArray(i) || (i = [i]), i = e.grep(i, function(e) {
                            return t != e
                        }), S.verbose("Removed value from delimited string", t, i), i
                    },
                    label: function(e, t) {
                        var i = F.find(L.label),
                            n = i.filter('[data-value="' + e + '"]');
                        S.verbose("Removing label", n), n.remove()
                    },
                    activeLabels: function(e) {
                        e = e || F.find(L.label).filter("." + T.active), S.verbose("Removing active label selections", e), S.remove.labels(e)
                    },
                    labels: function(t) {
                        t = t || F.find(L.label), S.verbose("Removing labels", t), t.each(function() {
                            var t = e(this).data(A.value),
                                i = t !== n ? String(t) : t,
                                o = S.is.userValue(i);
                            o ? (S.remove.value(i), S.remove.label(i)) : S.remove.selected(i)
                        })
                    },
                    tabbable: function() {
                        S.has.search() ? (S.debug("Searchable dropdown initialized"), W.attr("tabindex", "-1"), $.attr("tabindex", "-1")) : (S.debug("Simple selection dropdown initialized"), F.attr("tabindex", "-1"), $.attr("tabindex", "-1"))
                    }
                },
                has: {
                    search: function() {
                        return W.length > 0
                    },
                    selectinputs: function() {
                        return I.is("select")
                    },
                    firstLetter: function(e, t) {
                        var i, n;
                        return e && 0 !== e.length && "string" == typeof t ? (i = S.get.choiceText(e, !1), t = t.toLowerCase(), n = String(i).charAt(0).toLowerCase(), t == n) : !1
                    },
                    inputs: function() {
                        return I.length > 0
                    },
                    items: function() {
                        return q.length > 0
                    },
                    menu: function() {
                        return $.length > 0
                    },
                    message: function() {
                        return 0 !== $.children(L.message).length
                    },
                    label: function(e) {
                        var t = F.find(L.label);
                        return t.filter('[data-value="' + e + '"]').length > 0
                    },
                    maxSelections: function() {
                        return C.maxSelections && S.get.selectionCount() >= C.maxSelections
                    },
                    allResultsFiltered: function() {
                        return q.filter(L.unselectable).length === q.length
                    },
                    query: function() {
                        return "" !== S.get.query()
                    },
                    value: function(t) {
                        var i = S.get.values(),
                            n = e.isArray(i) ? i && -1 !== e.inArray(t, i) : i == t;
                        return n ? !0 : !1
                    }
                },
                is: {
                    active: function() {
                        return F.hasClass(T.active)
                    },
                    alreadySetup: function() {
                        return F.is("select") && F.parent(L.dropdown).length > 0 && 0 === F.prev().length
                    },
                    animating: function(e) {
                        return e ? e.transition && e.transition("is animating") : $.transition && $.transition("is animating")
                    },
                    disabled: function() {
                        return F.hasClass(T.disabled)
                    },
                    focused: function() {
                        return i.activeElement === F[0]
                    },
                    focusedOnSearch: function() {
                        return i.activeElement === W[0]
                    },
                    allFiltered: function() {
                        return (S.is.multiple() || S.has.search()) && !S.has.message() && S.has.allResultsFiltered()
                    },
                    hidden: function(e) {
                        return !S.is.visible(e)
                    },
                    initialLoad: function() {
                        return g
                    },
                    onScreen: function(e) {
                        var t, i = e || $,
                            n = !0,
                            o = {};
                        return i.addClass(T.loading), t = {
                            context: {
                                scrollTop: M.scrollTop(),
                                height: M.outerHeight()
                            },
                            menu: {
                                offset: i.offset(),
                                height: i.outerHeight()
                            }
                        }, o = {
                            above: t.context.scrollTop <= t.menu.offset.top - t.menu.height,
                            below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height
                        }, o.below ? (S.verbose("Dropdown can fit in context downward", o), n = !0) : o.below || o.above ? (S.verbose("Dropdown cannot fit below, opening upward", o), n = !1) : (S.verbose("Dropdown cannot fit in either direction, favoring downward", o), n = !0), i.removeClass(T.loading), n
                    },
                    inObject: function(t, i) {
                        var n = !1;
                        return e.each(i, function(e, i) {
                            return i == t ? (n = !0, !0) : void 0
                        }), n
                    },
                    multiple: function() {
                        return F.hasClass(T.multiple)
                    },
                    single: function() {
                        return !S.is.multiple()
                    },
                    selectMutation: function(t) {
                        var i = !1;
                        return e.each(t, function(t, n) {
                            return n.target && e(n.target).is("select") ? (i = !0, !0) : void 0
                        }), i
                    },
                    search: function() {
                        return F.hasClass(T.search)
                    },
                    searchSelection: function() {
                        return S.has.search() && 1 === W.parent(L.dropdown).length
                    },
                    selection: function() {
                        return F.hasClass(T.selection)
                    },
                    userValue: function(t) {
                        return -1 !== e.inArray(t, S.get.userValues())
                    },
                    upward: function(e) {
                        var t = e || F;
                        return t.hasClass(T.upward)
                    },
                    visible: function(e) {
                        return e ? e.hasClass(T.visible) : $.hasClass(T.visible)
                    }
                },
                can: {
                    activate: function(e) {
                        return C.useLabels ? !0 : S.has.maxSelections() ? S.has.maxSelections() && e.hasClass(T.active) ? !0 : !1 : !0
                    },
                    click: function() {
                        return c || "click" == C.on
                    },
                    extendSelect: function() {
                        return C.allowAdditions || C.apiSettings
                    },
                    show: function() {
                        return !S.is.disabled() && (S.has.items() || S.has.message())
                    },
                    useAPI: function() {
                        return e.fn.api !== n
                    }
                },
                animate: {
                    show: function(t, i) {
                        var o, s = i || $,
                            r = i ? function() {} : function() {
                                S.hideSubMenus(), S.hideOthers(), S.set.active()
                            };
                        t = e.isFunction(t) ? t : function() {}, S.verbose("Doing menu show animation", s), S.set.direction(i), o = S.get.transition(i), S.is.selection() && S.set.scrollPosition(S.get.selectedItem(), !0), (S.is.hidden(s) || S.is.animating(s)) && ("none" == o ? (r(), s.transition("show"), t.call(U)) : e.fn.transition !== n && F.transition("is supported") ? s.transition({
                            animation: o + " in",
                            debug: C.debug,
                            verbose: C.verbose,
                            duration: C.duration,
                            queue: !0,
                            onStart: r,
                            onComplete: function() {
                                t.call(U)
                            }
                        }) : S.error(N.noTransition, o))
                    },
                    hide: function(t, i) {
                        var o = i || $,
                            s = (i ? .9 * C.duration : C.duration, i ? function() {} : function() {
                                S.can.click() && S.unbind.intent(), S.remove.active()
                            }),
                            r = S.get.transition(i);
                        t = e.isFunction(t) ? t : function() {}, (S.is.visible(o) || S.is.animating(o)) && (S.verbose("Doing menu hide animation", o), "none" == r ? (s(), o.transition("hide"), t.call(U)) : e.fn.transition !== n && F.transition("is supported") ? o.transition({
                            animation: r + " out",
                            duration: C.duration,
                            debug: C.debug,
                            verbose: C.verbose,
                            queue: !0,
                            onStart: s,
                            onComplete: function() {
                                "auto" == C.direction && S.remove.upward(i), t.call(U)
                            }
                        }) : S.error(N.transition))
                    }
                },
                hideAndClear: function() {
                    S.remove.searchTerm(), S.has.maxSelections() || (S.has.search() ? S.hide(function() {
                        S.remove.filteredItem()
                    }) : S.hide())
                },
                delay: {
                    show: function() {
                        S.verbose("Delaying show event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.show, C.delay.show)
                    },
                    hide: function() {
                        S.verbose("Delaying hide event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.hide, C.delay.hide)
                    }
                },
                escape: {
                    regExp: function(e) {
                        return e = String(e), e.replace(_.escape, "\\$&")
                    }
                },
                setting: function(t, i) {
                    if (S.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, C, t);
                    else {
                        if (i === n) return C[t];
                        C[t] = i
                    }
                },
                internal: function(t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, S, t);
                    else {
                        if (i === n) return S[t];
                        S[t] = i
                    }
                },
                debug: function() {
                    C.debug && (C.performsssance ? S.performsssance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), S.debug.apply(console, arguments)))
                },
                verbose: function() {
                    C.verbose && C.debug && (C.performsssance ? S.performsssance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), S.verbose.apply(console, arguments)))
                },
                error: function() {
                    S.error = Function.prototype.bind.call(console.error, console, C.name + ":"), S.error.apply(console, arguments)
                },
                performsssance: {
                    log: function(e) {
                        var t, i, n;
                        C.performsssance && (t = (new Date).getTime(), n = u || t, i = t - n, u = t, d.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: U,
                            "Execution Time": i
                        })), clearTimeout(S.performsssance.timer), S.performsssance.timer = setTimeout(S.performsssance.display, 500)
                    },
                    display: function() {
                        var t = C.name + ":",
                            i = 0;
                        u = !1, clearTimeout(S.performsssance.timer), e.each(d, function(e, t) {
                            i += t["Execution Time"]
                        }), t += " " + i + "ms", l && (t += " '" + l + "'"), (console.group !== n || console.table !== n) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), d = []
                    }
                },
                invoke: function(t, i, o) {
                    var r, a, l, c = V;
                    return i = i || f, o = U || o, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                        var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                        if (e.isPlainObject(c[s]) && i != r) c = c[s];
                        else {
                            if (c[s] !== n) return a = c[s], !1;
                            if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : (S.error(N.method, t), !1);
                            c = c[o]
                        }
                    })), e.isFunction(a) ? l = a.apply(o, i) : a !== n && (l = a), e.isArray(s) ? s.push(l) : s !== n ? s = [s, l] : l !== n && (s = l), a
                }
            }, h ? (V === n && S.initialize(), S.invoke(p)) : (V !== n && V.invoke("destroy"), S.initialize())
        }), s !== n ? s : r
    }, e.fn.dropdown.settings = {
        debug: !1,
        verbose: !1,
        performsssance: !0,
        on: "click",
        action: "activate",
        apiSettings: !1,
        saveRemoteData: !0,
        throttle: 200,
        context: t,
        direction: "auto",
        keepOnScreen: !0,
        match: "both",
        fullTextSearch: !1,
        placeholder: "auto",
        preserveHTML: !0,
        sortSelect: !1,
        forceSelection: !0,
        allowAdditions: !1,
        maxSelections: !1,
        useLabels: !0,
        delimiter: ",",
        showOnFocus: !0,
        allowTab: !0,
        allowCategorySelection: !1,
        fireOnInit: !1,
        transition: "auto",
        duration: 200,
        glyphWidth: 1.0714,
        label: {
            transition: "scale",
            duration: 200,
            variation: !1
        },
        delay: {
            hide: 300,
            show: 200,
            search: 20,
            touch: 50
        },
        onChange: function(e, t, i) {},
        onAdd: function(e, t, i) {},
        onRemove: function(e, t, i) {},
        onLabelSelect: function(e) {},
        onLabelCreate: function(t, i) {
            return e(this)
        },
        onNoResults: function(e) {
            return !0
        },
        onShow: function() {},
        onHide: function() {},
        name: "Dropdown",
        namespace: "dropdown",
        message: {
            addResult: "Add <b>{term}</b>",
            count: "{count} selected",
            maxSelections: "Max {maxCount} selections",
            noResults: "No results found.",
            serverError: "There was an error contacting the server"
        },
        error: {
            action: "You called a dropdown action that was not defined",
            alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
            labels: "Allowing user additions currently requires the use of labels.",
            missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
            method: "The method you called is not defined.",
            noAPI: "The API module is required to load resources remotely",
            noStorage: "Saving remote data requires session storage",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
        },
        regExp: {
            escape: /[-[\]{}()*+?.,\\^$|#\s]/g
        },
        metadata: {
            defaultText: "defaultText",
            defaultValue: "defaultValue",
            placeholderText: "placeholder",
            text: "text",
            value: "value"
        },
        fields: {
            values: "values",
            name: "name",
            value: "value"
        },
        selector: {
            addition: ".addition",
            dropdown: ".ui.dropdown",
            icon: "> .dropdown.icon",
            inputs: '> inputs[type="hidden"], > select',
            item: ".item",
            label: "> .label",
            remove: "> .label > .delete.icon",
            siblingLabel: ".label",
            menu: ".menu",
            message: ".message",
            menuIcon: ".dropdown.icon",
            search: "input.search, .menu > .search > input",
            text: "> .text:not(.icon)",
            unselectable: ".disabled, .filtered"
        },
        className: {
            active: "active",
            addition: "addition",
            animating: "animating",
            disabled: "disabled",
            dropdown: "ui dropdown",
            filtered: "filtered",
            hidden: "hidden transition",
            item: "item",
            label: "ui label",
            loading: "loading",
            menu: "menu",
            message: "message",
            multiple: "multiple",
            placeholder: "default",
            search: "search",
            selected: "selected",
            selection: "selection",
            upward: "upward",
            visible: "visible"
        }
    }, e.fn.dropdown.settings.templates = {
        dropdown: function(t) {
            var i = t.placeholder || !1,
                n = (t.values || {}, "");
            return n += '<i class="dropdown icon"></i>', n += t.placeholder ? '<div class="default text">' + i + "</div>" : '<div class="text"></div>', n += '<div class="menu">', e.each(t.values, function(e, t) {
                n += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
            }), n += "</div>"
        },
        menu: function(t, i) {
            var n = (t.values || {}, "");
            return e.each(t[i.values], function(e, t) {
                n += '<div class="item" data-value="' + t[i.value] + '">' + t[i.name] + "</div>"
            }), n
        },
        label: function(e, t) {
            return t + '<i class="delete icon"></i>'
        },
        message: function(e) {
            return e
        },
        addition: function(e) {
            return e
        }
    }
}(jQuery, window, document),
function() {
    var e, t, i, n, o, s, r, a, l = [].slice,
        c = {}.hasOwnProperty,
        u = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) c.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    r = function() {}, t = function() {
        function e() {}
        return e.prototype.addEventListener = e.prototype.on, e.prototype.on = function(e, t) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
        }, e.prototype.emit = function() {
            var e, t, i, n, o, s;
            if (n = arguments[0], e = 2 <= arguments.length ? l.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, i = this._callbacks[n])
                for (o = 0, s = i.length; s > o; o++) t = i[o], t.apply(this, e);
            return this
        }, e.prototype.removeListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, e.prototype.removeEventListener = e.prototype.off, e.prototype.off = function(e, t) {
            var i, n, o, s, r;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (n = this._callbacks[e], !n) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (o = s = 0, r = n.length; r > s; o = ++s)
                if (i = n[o], i === t) {
                    n.splice(o, 1);
                    break
                }
            return this
        }, e
    }(), e = function(e) {
        function i(e, t) {
            var o, s, r;
            if (this.element = e, this.version = i.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (i.instances.push(this), this.element.dropzone = this, o = null != (r = i.optionsForElement(this.element)) ? r : {}, this.options = n({}, this.defaultOptions, o, null != t ? t : {}), this.options.forceFallback || !i.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (s = this.getExistingFallback()) && s.parentNode && s.parentNode.removeChild(s), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = i.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = i.getElements(this.options.clickable, "clickable")), this.init()
        }
        var n, o;
        return u(i, e), i.prototype.Emitter = t, i.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], i.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback formsss below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(e, t) {
                return t()
            },
            init: function() {
                return r
            },
            forceFallback: !1,
            fallback: function() {
                var e, t, n, o, s, r;
                for (this.element.className = "" + this.element.className + " dz-browser-not-supported", r = this.element.getElementsByTagName("div"), o = 0, s = r.length; s > o; o++) e = r[o], /(^| )dz-message($| )/.test(e.className) && (t = e, e.className = "dz-message");
                return t || (t = i.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(t)), n = t.getElementsByTagName("span")[0], n && (null != n.textContent ? n.textContent = this.options.dictFallbackMessage : null != n.innerText && (n.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackformsss())
            },
            resize: function(e) {
                var t, i, n;
                return t = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: e.width,
                        srcHeight: e.height
                    }, i = e.width / e.height, t.optWidth = this.options.thumbnailWidth, t.optHeight = this.options.thumbnailHeight, null == t.optWidth && null == t.optHeight ? (t.optWidth = t.srcWidth, t.optHeight = t.srcHeight) : null == t.optWidth ? t.optWidth = i * t.optHeight : null == t.optHeight && (t.optHeight = 1 / i * t.optWidth), n = t.optWidth / t.optHeight, e.height < t.optHeight || e.width < t.optWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : i > n ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * n) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / n), t.srcX = (e.width - t.srcWidth) / 2,
                    t.srcY = (e.height - t.srcHeight) / 2, t
            },
            drop: function(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragstart: r,
            dragend: function(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragenter: function(e) {
                return this.element.classList.add("dz-drag-hover")
            },
            dragover: function(e) {
                return this.element.classList.add("dz-drag-hover")
            },
            dragleave: function(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            paste: r,
            reset: function() {
                return this.element.classList.remove("dz-started")
            },
            addedfile: function(e) {
                var t, n, o, s, r, a, l, c, u, d, p, h, f;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                    for (e.previewElement = i.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), d = e.previewElement.querySelectorAll("[data-dz-name]"), s = 0, l = d.length; l > s; s++) t = d[s], t.textContent = e.name;
                    for (p = e.previewElement.querySelectorAll("[data-dz-size]"), r = 0, c = p.length; c > r; r++) t = p[r], t.innerHTML = this.filesize(e.size);
                    for (this.options.addRemoveLinks && (e._removeLink = i.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink)), n = function(t) {
                            return function(n) {
                                return n.preventDefault(), n.stopPropagation(), e.status === i.UPLOADING ? i.confirm(t.options.dictCancelUploadConfirmation, function() {
                                    return t.removeFile(e)
                                }) : t.options.dictRemoveFileConfirmation ? i.confirm(t.options.dictRemoveFileConfirmation, function() {
                                    return t.removeFile(e)
                                }) : t.removeFile(e)
                            }
                        }(this), h = e.previewElement.querySelectorAll("[data-dz-remove]"), f = [], a = 0, u = h.length; u > a; a++) o = h[a], f.push(o.addEventListener("click", n));
                    return f
                }
            },
            removedfile: function(e) {
                var t;
                return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail: function(e, t) {
                var i, n, o, s;
                if (e.previewElement) {
                    for (e.previewElement.classList.remove("dz-file-preview"), s = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), n = 0, o = s.length; o > n; n++) i = s[n], i.alt = e.name, i.src = t;
                    return setTimeout(function(t) {
                        return function() {
                            return e.previewElement.classList.add("dz-image-preview")
                        }
                    }(this), 1)
                }
            },
            error: function(e, t) {
                var i, n, o, s, r;
                if (e.previewElement) {
                    for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), s = e.previewElement.querySelectorAll("[data-dz-errormessage]"), r = [], n = 0, o = s.length; o > n; n++) i = s[n], r.push(i.textContent = t);
                    return r
                }
            },
            errormultiple: r,
            processing: function(e) {
                return e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink) ? e._removeLink.textContent = this.options.dictCancelUpload : void 0
            },
            processingmultiple: r,
            uploadprogress: function(e, t, i) {
                var n, o, s, r, a;
                if (e.previewElement) {
                    for (r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), a = [], o = 0, s = r.length; s > o; o++) n = r[o], "PROGRESS" === n.nodeName ? a.push(n.value = t) : a.push(n.style.width = "" + t + "%");
                    return a
                }
            },
            totaluploadprogress: r,
            sending: r,
            sendingmultiple: r,
            success: function(e) {
                return e.previewElement ? e.previewElement.classList.add("dz-success") : void 0
            },
            successmultiple: r,
            canceled: function(e) {
                return this.emit("error", e, "Upload canceled.")
            },
            canceledmultiple: r,
            complete: function(e) {
                return e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement ? e.previewElement.classList.add("dz-complete") : void 0
            },
            completemultiple: r,
            maxfilesexceeded: r,
            maxfilesreached: r,
            queuecomplete: r,
            addedfiles: r,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
        }, n = function() {
            var e, t, i, n, o, s, r;
            for (n = arguments[0], i = 2 <= arguments.length ? l.call(arguments, 1) : [], s = 0, r = i.length; r > s; s++) {
                t = i[s];
                for (e in t) o = t[e], n[e] = o
            }
            return n
        }, i.prototype.getAcceptedFiles = function() {
            var e, t, i, n, o;
            for (n = this.files, o = [], t = 0, i = n.length; i > t; t++) e = n[t], e.accepted && o.push(e);
            return o
        }, i.prototype.getRejectedFiles = function() {
            var e, t, i, n, o;
            for (n = this.files, o = [], t = 0, i = n.length; i > t; t++) e = n[t], e.accepted || o.push(e);
            return o
        }, i.prototype.getFilesWithStatus = function(e) {
            var t, i, n, o, s;
            for (o = this.files, s = [], i = 0, n = o.length; n > i; i++) t = o[i], t.status === e && s.push(t);
            return s
        }, i.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(i.QUEUED)
        }, i.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(i.UPLOADING)
        }, i.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(i.ADDED)
        }, i.prototype.getActiveFiles = function() {
            var e, t, n, o, s;
            for (o = this.files, s = [], t = 0, n = o.length; n > t; t++) e = o[t], (e.status === i.UPLOADING || e.status === i.QUEUED) && s.push(e);
            return s
        }, i.prototype.init = function() {
            var e, t, n, o, s, r, a;
            for ("formsss" === this.element.tagName && this.element.setAttribute("enctype", "multipart/formsss-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(i.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (n = function(e) {
                    return function() {
                        return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function() {
                            var t, i, o, s;
                            if (i = e.hiddenFileInput.files, i.length)
                                for (o = 0, s = i.length; s > o; o++) t = i[o], e.addFile(t);
                            return e.emit("addedfiles", i), n()
                        })
                    }
                }(this))(), this.URL = null != (r = window.URL) ? r : window.webkitURL, a = this.events, o = 0, s = a.length; s > o; o++) e = a[o], this.on(e, this.options[e]);
            return this.on("uploadprogress", function(e) {
                return function() {
                    return e.updateTotalUploadProgress()
                }
            }(this)), this.on("removedfile", function(e) {
                return function() {
                    return e.updateTotalUploadProgress()
                }
            }(this)), this.on("canceled", function(e) {
                return function(t) {
                    return e.emit("complete", t)
                }
            }(this)), this.on("complete", function(e) {
                return function(t) {
                    return 0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length ? setTimeout(function() {
                        return e.emit("queuecomplete")
                    }, 0) : void 0
                }
            }(this)), t = function(e) {
                return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }, this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function(e) {
                        return function(t) {
                            return e.emit("dragstart", t)
                        }
                    }(this),
                    dragenter: function(e) {
                        return function(i) {
                            return t(i), e.emit("dragenter", i)
                        }
                    }(this),
                    dragover: function(e) {
                        return function(i) {
                            var n;
                            try {
                                n = i.dataTransfer.effectAllowed
                            } catch (o) {}
                            return i.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", t(i), e.emit("dragover", i)
                        }
                    }(this),
                    dragleave: function(e) {
                        return function(t) {
                            return e.emit("dragleave", t)
                        }
                    }(this),
                    drop: function(e) {
                        return function(i) {
                            return t(i), e.drop(i)
                        }
                    }(this),
                    dragend: function(e) {
                        return function(t) {
                            return e.emit("dragend", t)
                        }
                    }(this)
                }
            }], this.clickableElements.forEach(function(e) {
                return function(t) {
                    return e.listeners.push({
                        element: t,
                        events: {
                            click: function(n) {
                                return (t !== e.element || n.target === e.element || i.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                            }
                        }
                    })
                }
            }(this)), this.enable(), this.options.init.call(this)
        }, i.prototype.destroy = function() {
            var e;
            return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, i.instances.splice(i.instances.indexOf(this), 1)
        }, i.prototype.updateTotalUploadProgress = function() {
            var e, t, i, n, o, s, r, a;
            if (n = 0, i = 0, e = this.getActiveFiles(), e.length) {
                for (a = this.getActiveFiles(), s = 0, r = a.length; r > s; s++) t = a[s], n += t.upload.bytesSent, i += t.upload.total;
                o = 100 * n / i
            } else o = 100;
            return this.emit("totaluploadprogress", o, i, n)
        }, i.prototype._getParamName = function(e) {
            return "function" == typeof this.options.paramName ? this.options.paramName(e) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
        }, i.prototype.getFallbackformsss = function() {
            var e, t, n, o;
            return (e = this.getExistingFallback()) ? e : (n = '<div class="dz-fallback">', this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', t = i.createElement(n), "formsss" !== this.element.tagName ? (o = i.createElement('<formsss action="' + this.options.url + '" enctype="multipart/formsss-data" method="' + this.options.method + '"></formsss>'), o.appendChild(t)) : (this.element.setAttribute("enctype", "multipart/formsss-data"), this.element.setAttribute("method", this.options.method)), null != o ? o : t)
        }, i.prototype.getExistingFallback = function() {
            var e, t, i, n, o, s;
            for (t = function(e) {
                    var t, i, n;
                    for (i = 0, n = e.length; n > i; i++)
                        if (t = e[i], /(^| )fallback($| )/.test(t.className)) return t
                }, s = ["div", "formsss"], n = 0, o = s.length; o > n; n++)
                if (i = s[n], e = t(this.element.getElementsByTagName(i))) return e
        }, i.prototype.setupEventListeners = function() {
            var e, t, i, n, o, s, r;
            for (s = this.listeners, r = [], n = 0, o = s.length; o > n; n++) e = s[n], r.push(function() {
                var n, o;
                n = e.events, o = [];
                for (t in n) i = n[t], o.push(e.element.addEventListener(t, i, !1));
                return o
            }());
            return r
        }, i.prototype.removeEventListeners = function() {
            var e, t, i, n, o, s, r;
            for (s = this.listeners, r = [], n = 0, o = s.length; o > n; n++) e = s[n], r.push(function() {
                var n, o;
                n = e.events, o = [];
                for (t in n) i = n[t], o.push(e.element.removeEventListener(t, i, !1));
                return o
            }());
            return r
        }, i.prototype.disable = function() {
            var e, t, i, n, o;
            for (this.clickableElements.forEach(function(e) {
                    return e.classList.remove("dz-clickable")
                }), this.removeEventListeners(), n = this.files, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(this.cancelUpload(e));
            return o
        }, i.prototype.enable = function() {
            return this.clickableElements.forEach(function(e) {
                return e.classList.add("dz-clickable")
            }), this.setupEventListeners()
        }, i.prototype.filesize = function(e) {
            var t, i, n, o, s, r, a, l;
            if (n = 0, o = "b", e > 0) {
                for (r = ["TB", "GB", "MB", "KB", "b"], i = a = 0, l = r.length; l > a; i = ++a)
                    if (s = r[i], t = Math.pow(this.options.filesizeBase, 4 - i) / 10, e >= t) {
                        n = e / Math.pow(this.options.filesizeBase, 4 - i), o = s;
                        break
                    }
                n = Math.round(10 * n) / 10
            }
            return "<strong>" + n + "</strong> " + o
        }, i.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }, i.prototype.drop = function(e) {
            var t, i;
            e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, this.emit("addedfiles", t), t.length && (i = e.dataTransfer.items, i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)))
        }, i.prototype.paste = function(e) {
            var t, i;
            if (null != (null != e && null != (i = e.clipboardData) ? i.items : void 0)) return this.emit("paste", e), t = e.clipboardData.items, t.length ? this._addFilesFromItems(t) : void 0
        }, i.prototype.handleFiles = function(e) {
            var t, i, n, o;
            for (o = [], i = 0, n = e.length; n > i; i++) t = e[i], o.push(this.addFile(t));
            return o
        }, i.prototype._addFilesFromItems = function(e) {
            var t, i, n, o, s;
            for (s = [], n = 0, o = e.length; o > n; n++) i = e[n], null != i.webkitGetAsEntry && (t = i.webkitGetAsEntry()) ? t.isFile ? s.push(this.addFile(i.getAsFile())) : t.isDirectory ? s.push(this._addFilesFromDirectory(t, t.name)) : s.push(void 0) : null != i.getAsFile && (null == i.kind || "file" === i.kind) ? s.push(this.addFile(i.getAsFile())) : s.push(void 0);
            return s
        }, i.prototype._addFilesFromDirectory = function(e, t) {
            var i, n;
            return i = e.createReader(), n = function(e) {
                return function(i) {
                    var n, o, s;
                    for (o = 0, s = i.length; s > o; o++) n = i[o], n.isFile ? n.file(function(i) {
                        return e.options.ignoreHiddenFiles && "." === i.name.substring(0, 1) ? void 0 : (i.fullPath = "" + t + "/" + i.name, e.addFile(i))
                    }) : n.isDirectory && e._addFilesFromDirectory(n, "" + t + "/" + n.name)
                }
            }(this), i.readEntries(n, function(e) {
                return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(e) : void 0
            })
        }, i.prototype.accept = function(e, t) {
            return e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : i.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
        }, i.prototype.addFile = function(e) {
            return e.upload = {
                progress: 0,
                total: e.size,
                bytesSent: 0
            }, this.files.push(e), e.status = i.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function(t) {
                return function(i) {
                    return i ? (e.accepted = !1, t._errorProcessing([e], i)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
                }
            }(this))
        }, i.prototype.enqueueFiles = function(e) {
            var t, i, n;
            for (i = 0, n = e.length; n > i; i++) t = e[i], this.enqueueFile(t);
            return null
        }, i.prototype.enqueueFile = function(e) {
            if (e.status !== i.ADDED || e.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            return e.status = i.QUEUED, this.options.autoProcessQueue ? setTimeout(function(e) {
                return function() {
                    return e.processQueue()
                }
            }(this), 0) : void 0
        }, i.prototype._thumbnailQueue = [], i.prototype._processingThumbnail = !1, i.prototype._enqueueThumbnail = function(e) {
            return this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(e), setTimeout(function(e) {
                return function() {
                    return e._processThumbnailQueue()
                }
            }(this), 0)) : void 0
        }, i.prototype._processThumbnailQueue = function() {
            return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function(e) {
                return function() {
                    return e._processingThumbnail = !1, e._processThumbnailQueue()
                }
            }(this)))
        }, i.prototype.removeFile = function(e) {
            return e.status === i.UPLOADING && this.cancelUpload(e), this.files = a(this.files, e), this.emit("removedfile", e), 0 === this.files.length ? this.emit("reset") : void 0
        }, i.prototype.removeAllFiles = function(e) {
            var t, n, o, s;
            for (null == e && (e = !1), s = this.files.slice(), n = 0, o = s.length; o > n; n++) t = s[n], (t.status !== i.UPLOADING || e) && this.removeFile(t);
            return null
        }, i.prototype.createThumbnail = function(e, t) {
            var i;
            return i = new FileReader, i.onload = function(n) {
                return function() {
                    return "image/svg+xml" === e.type ? (n.emit("thumbnail", e, i.result), void(null != t && t())) : n.createThumbnailFromUrl(e, i.result, t)
                }
            }(this), i.readAsDataURL(e)
        }, i.prototype.createThumbnailFromUrl = function(e, t, i, n) {
            var o;
            return o = document.createElement("img"), n && (o.crossOrigin = n), o.onload = function(t) {
                return function() {
                    var n, r, a, l, c, u, d, p;
                    return e.width = o.width, e.height = o.height, a = t.options.resize.call(t, e), null == a.trgWidth && (a.trgWidth = a.optWidth), null == a.trgHeight && (a.trgHeight = a.optHeight), n = document.createElement("canvas"), r = n.getContext("2d"), n.width = a.trgWidth, n.height = a.trgHeight, s(r, o, null != (c = a.srcX) ? c : 0, null != (u = a.srcY) ? u : 0, a.srcWidth, a.srcHeight, null != (d = a.trgX) ? d : 0, null != (p = a.trgY) ? p : 0, a.trgWidth, a.trgHeight), l = n.toDataURL("image/png"), t.emit("thumbnail", e, l), null != i ? i() : void 0
                }
            }(this), null != i && (o.onerror = i), o.src = t
        }, i.prototype.processQueue = function() {
            var e, t, i, n;
            if (t = this.options.parallelUploads, i = this.getUploadingFiles().length, e = i, !(i >= t) && (n = this.getQueuedFiles(), n.length > 0)) {
                if (this.options.uploadMultiple) return this.processFiles(n.slice(0, t - i));
                for (; t > e;) {
                    if (!n.length) return;
                    this.processFile(n.shift()), e++
                }
            }
        }, i.prototype.processFile = function(e) {
            return this.processFiles([e])
        }, i.prototype.processFiles = function(e) {
            var t, n, o;
            for (n = 0, o = e.length; o > n; n++) t = e[n], t.processing = !0, t.status = i.UPLOADING, this.emit("processing", t);
            return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
        }, i.prototype._getFilesWithXhr = function(e) {
            var t, i;
            return i = function() {
                var i, n, o, s;
                for (o = this.files, s = [], i = 0, n = o.length; n > i; i++) t = o[i], t.xhr === e && s.push(t);
                return s
            }.call(this)
        }, i.prototype.cancelUpload = function(e) {
            var t, n, o, s, r, a, l;
            if (e.status === i.UPLOADING) {
                for (n = this._getFilesWithXhr(e.xhr), o = 0, r = n.length; r > o; o++) t = n[o], t.status = i.CANCELED;
                for (e.xhr.abort(), s = 0, a = n.length; a > s; s++) t = n[s], this.emit("canceled", t);
                this.options.uploadMultiple && this.emit("canceledmultiple", n)
            } else((l = e.status) === i.ADDED || l === i.QUEUED) && (e.status = i.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
            return this.options.autoProcessQueue ? this.processQueue() : void 0
        }, o = function() {
            var e, t;
            return t = arguments[0], e = 2 <= arguments.length ? l.call(arguments, 1) : [], "function" == typeof t ? t.apply(this, e) : t
        }, i.prototype.uploadFile = function(e) {
            return this.uploadFiles([e])
        }, i.prototype.uploadFiles = function(e) {
            var t, s, r, a, l, c, u, d, p, h, f, m, g, v, b, y, w, x, S, C, T, k, E, A, D, _, L, N, H, P, z, F, M, O;
            for (S = new XMLHttpRequest, C = 0, A = e.length; A > C; C++) t = e[C], t.xhr = S;
            m = o(this.options.method, e), w = o(this.options.url, e), S.open(m, w, !0), S.withCredentials = !!this.options.withCredentials, b = null, r = function(i) {
                return function() {
                    var n, o, s;
                    for (s = [], n = 0, o = e.length; o > n; n++) t = e[n], s.push(i._errorProcessing(e, b || i.options.dictResponseError.replace("{{statusCode}}", S.status), S));
                    return s
                }
            }(this), y = function(i) {
                return function(n) {
                    var o, s, r, a, l, c, u, d, p;
                    if (null != n)
                        for (s = 100 * n.loaded / n.total, r = 0, c = e.length; c > r; r++) t = e[r], t.upload = {
                            progress: s,
                            total: n.total,
                            bytesSent: n.loaded
                        };
                    else {
                        for (o = !0, s = 100, a = 0, u = e.length; u > a; a++) t = e[a], (100 !== t.upload.progress || t.upload.bytesSent !== t.upload.total) && (o = !1), t.upload.progress = s, t.upload.bytesSent = t.upload.total;
                        if (o) return
                    }
                    for (p = [], l = 0, d = e.length; d > l; l++) t = e[l], p.push(i.emit("uploadprogress", t, s, t.upload.bytesSent));
                    return p
                }
            }(this), S.onload = function(t) {
                return function(n) {
                    var o;
                    if (e[0].status !== i.CANCELED && 4 === S.readyState) {
                        if (b = S.responseText, S.getResponseHeader("content-type") && ~S.getResponseHeader("content-type").indexOf("application/json")) try {
                            b = JSON.parse(b)
                        } catch (s) {
                            n = s, b = "Invalid JSON response from server."
                        }
                        return y(), 200 <= (o = S.status) && 300 > o ? t._finished(e, b, n) : r()
                    }
                }
            }(this), S.onerror = function(t) {
                return function() {
                    return e[0].status !== i.CANCELED ? r() : void 0
                }
            }(this), v = null != (H = S.upload) ? H : S, v.onprogress = y, c = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && n(c, this.options.headers);
            for (a in c) l = c[a], l && S.setRequestHeader(a, l);
            if (s = new formsssData, this.options.params) {
                P = this.options.params;
                for (f in P) x = P[f], s.append(f, x)
            }
            for (T = 0, D = e.length; D > T; T++) t = e[T], this.emit("sending", t, S, s);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", e, S, s), "formsss" === this.element.tagName)
                for (z = this.element.querySelectorAll("input, textarea, select, button"), k = 0, _ = z.length; _ > k; k++)
                    if (d = z[k], p = d.getAttribute("name"), h = d.getAttribute("type"), "SELECT" === d.tagName && d.hasAttribute("multiple"))
                        for (F = d.options, E = 0, L = F.length; L > E; E++) g = F[E], g.selected && s.append(p, g.value);
                    else(!h || "checkbox" !== (M = h.toLowerCase()) && "radio" !== M || d.checked) && s.append(p, d.value);
            for (u = N = 0, O = e.length - 1; O >= 0 ? O >= N : N >= O; u = O >= 0 ? ++N : --N) s.append(this._getParamName(u), e[u], e[u].name);
            return this.submitRequest(S, s, e)
        }, i.prototype.submitRequest = function(e, t, i) {
            return e.send(t)
        }, i.prototype._finished = function(e, t, n) {
            var o, s, r;
            for (s = 0, r = e.length; r > s; s++) o = e[s], o.status = i.SUCCESS, this.emit("success", o, t, n), this.emit("complete", o);
            return this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, i.prototype._errorProcessing = function(e, t, n) {
            var o, s, r;
            for (s = 0, r = e.length; r > s; s++) o = e[s], o.status = i.ERROR, this.emit("error", o, t, n), this.emit("complete", o);
            return this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, i
    }(t), e.version = "4.2.0", e.options = {}, e.optionsForElement = function(t) {
        return t.getAttribute("id") ? e.options[i(t.getAttribute("id"))] : void 0
    }, e.instances = [], e.forElement = function(e) {
        if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return e.dropzone
    }, e.autoDiscover = !0, e.discover = function() {
        var t, i, n, o, s, r;
        for (document.querySelectorAll ? n = document.querySelectorAll(".dropzone") : (n = [], t = function(e) {
                var t, i, o, s;
                for (s = [], i = 0, o = e.length; o > i; i++) t = e[i], /(^| )dropzone($| )/.test(t.className) ? s.push(n.push(t)) : s.push(void 0);
                return s
            }, t(document.getElementsByTagName("div")), t(document.getElementsByTagName("formsss"))), r = [], o = 0, s = n.length; s > o; o++) i = n[o], e.optionsForElement(i) !== !1 ? r.push(new e(i)) : r.push(void 0);
        return r
    }, e.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], e.isBrowserSupported = function() {
        var t, i, n, o, s;
        if (t = !0, window.File && window.FileReader && window.FileList && window.Blob && window.formsssData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (s = e.blacklistedBrowsers, n = 0, o = s.length; o > n; n++) i = s[n], i.test(navigator.userAgent) && (t = !1);
            else t = !1;
        else t = !1;
        return t
    }, a = function(e, t) {
        var i, n, o, s;
        for (s = [], n = 0, o = e.length; o > n; n++) i = e[n], i !== t && s.push(i);
        return s
    }, i = function(e) {
        return e.replace(/[\-_](\w)/g, function(e) {
            return e.charAt(1).toUpperCase()
        })
    }, e.createElement = function(e) {
        var t;
        return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0]
    }, e.elementInside = function(e, t) {
        if (e === t) return !0;
        for (; e = e.parentNode;)
            if (e === t) return !0;
        return !1
    }, e.getElement = function(e, t) {
        var i;
        if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e), null == i) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return i
    }, e.getElements = function(e, t) {
        var i, n, o, s, r, a, l, c;
        if (e instanceof Array) {
            o = [];
            try {
                for (s = 0, a = e.length; a > s; s++) n = e[s], o.push(this.getElement(n, t))
            } catch (u) {
                i = u, o = null
            }
        } else if ("string" == typeof e)
            for (o = [], c = document.querySelectorAll(e), r = 0, l = c.length; l > r; r++) n = c[r], o.push(n);
        else null != e.nodeType && (o = [e]);
        if (null == o || !o.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return o
    }, e.confirm = function(e, t, i) {
        return window.confirm(e) ? t() : null != i ? i() : void 0
    }, e.isValidFile = function(e, t) {
        var i, n, o, s, r;
        if (!t) return !0;
        for (t = t.split(","), n = e.type, i = n.replace(/\/.*$/, ""), s = 0, r = t.length; r > s; s++)
            if (o = t[s], o = o.trim(), "." === o.charAt(0)) {
                if (-1 !== e.name.toLowerCase().indexOf(o.toLowerCase(), e.name.length - o.length)) return !0
            } else if (/\/\*$/.test(o)) {
            if (i === o.replace(/\/.*$/, "")) return !0
        } else if (n === o) return !0;
        return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(t) {
        return this.each(function() {
            return new e(this, t)
        })
    }), "undefined" != typeof module && null !== module ? module.exports = e : window.Dropzone = e, e.ADDED = "added", e.QUEUED = "queued", e.ACCEPTED = e.QUEUED, e.UPLOADING = "uploading", e.PROCESSING = e.UPLOADING, e.CANCELED = "canceled", e.ERROR = "error", e.SUCCESS = "success", o = function(e) {
        var t, i, n, o, s, r, a, l, c, u;
        for (a = e.naturalWidth, r = e.naturalHeight, i = document.createElement("canvas"), i.width = 1, i.height = r, n = i.getContext("2d"), n.drawImage(e, 0, 0), o = n.getImageData(0, 0, 1, r).data, u = 0, s = r, l = r; l > u;) t = o[4 * (l - 1) + 3], 0 === t ? s = l : u = l, l = s + u >> 1;
        return c = l / r, 0 === c ? 1 : c
    }, s = function(e, t, i, n, s, r, a, l, c, u) {
        var d;
        return d = o(t), e.drawImage(t, i, n, s, r, a, l, c, u / d)
    }, n = function(e, t) {
        var i, n, o, s, r, a, l, c, u;
        if (o = !1, u = !0, n = e.document, c = n.documentElement, i = n.addEventListener ? "addEventListener" : "attachEvent", l = n.addEventListener ? "removeEventListener" : "detachEvent", a = n.addEventListener ? "" : "on", s = function(i) {
                return "readystatechange" !== i.type || "complete" === n.readyState ? (("load" === i.type ? e : n)[l](a + i.type, s, !1), !o && (o = !0) ? t.call(e, i.type || i) : void 0) : void 0
            }, r = function() {
                var e;
                try {
                    c.doScroll("left")
                } catch (t) {
                    return e = t, void setTimeout(r, 50)
                }
                return s("poll")
            }, "complete" !== n.readyState) {
            if (n.createEventObject && c.doScroll) {
                try {
                    u = !e.frameElement
                } catch (d) {}
                u && r()
            }
            return n[i](a + "DOMContentLoaded", s, !1), n[i](a + "readystatechange", s, !1), e[i](a + "load", s, !1)
        }
    }, e._autoDiscoverFunction = function() {
        return e.autoDiscover ? e.discover() : void 0
    }, n(window, e._autoDiscoverFunction)
}.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t, n) {
            var o, s, r, a = t.nodeName.toLowerCase();
            return "area" === a ? (o = t.parentNode, s = o.name, t.href && s && "map" === o.nodeName.toLowerCase() ? (r = e("img[usemap='#" + s + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t)
        }

        function i(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            scrollParent: function(t) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    s = this.parents().filter(function() {
                        var t = e(this);
                        return n && "static" === t.css("position") ? !1 : o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && s.length ? s : e(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(i) {
                    return !!e.data(i, t)
                }
            }) : function(t, i, n) {
                return !!e.data(t, n[3])
            },
            focusable: function(i) {
                return t(i, !isNaN(e.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var n = e.attr(i, "tabindex"),
                    o = isNaN(n);
                return (o || n >= 0) && t(i, !o)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
            function n(t, i, n, s) {
                return e.each(o, function() {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                s = i.toLowerCase(),
                r = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function(t) {
                return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                    e(this).css(s, n(this, t) + "px")
                })
            }, e.fn["outer" + i] = function(t, o) {
                return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                    e(this).css(s, n(this, t, !0, o) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
            focus: function(t) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), n && n.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function() {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(e + ".ui-disableSelection", function(e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var i, n, o = e(this[0]); o.length && o[0] !== document;) {
                        if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        o = o.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, i, n) {
                var o, s = e.ui[t].prototype;
                for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
            },
            call: function(e, t, i, n) {
                var o, s = e.plugins[t];
                if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (o = 0; s.length > o; o++) e.options[s[o][0]] && s[o][1].apply(e.element, i)
            }
        };
        var n = 0,
            o = Array.prototype.slice;
        e.cleanData = function(t) {
            return function(i) {
                var n, o, s;
                for (s = 0; null != (o = i[s]); s++) try {
                    n = e._data(o, "events"), n && n.remove && e(o).triggerHandler("remove")
                } catch (r) {}
                t(i)
            }
        }(e.cleanData), e.widget = function(t, i, n) {
            var o, s, r, a, l = {},
                c = t.split(".")[0];
            return t = t.split(".")[1], o = c + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
                return !!e.data(t, o)
            }, e[c] = e[c] || {}, s = e[c][t], r = e[c][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
            }, e.extend(r, s, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
                return e.isFunction(n) ? void(l[t] = function() {
                    var e = function() {
                            return i.prototype[t].apply(this, arguments)
                        },
                        o = function(e) {
                            return i.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t, i = this._super,
                            s = this._superApply;
                        return this._super = e, this._superApply = o, t = n.apply(this, arguments), this._super = i, this._superApply = s, t
                    }
                }()) : void(l[t] = n)
            }), r.prototype = e.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || t : t
            }, l, {
                constructor: r,
                namespace: c,
                widgetName: t,
                widgetFullName: o
            }), s ? (e.each(s._childConstructors, function(t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, r, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r
        }, e.widget.extend = function(t) {
            for (var i, n, s = o.call(arguments, 1), r = 0, a = s.length; a > r; r++)
                for (i in s[r]) n = s[r][i], s[r].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : n);
            return t
        }, e.widget.bridge = function(t, i) {
            var n = i.prototype.widgetFullName || t;
            e.fn[t] = function(s) {
                var r = "string" == typeof s,
                    a = o.call(arguments, 1),
                    l = this;
                return r ? this.each(function() {
                    var i, o = e.data(this, n);
                    return "instance" === s ? (l = o, !1) : o ? e.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
                }) : (a.length && (s = e.widget.extend.apply(null, [s].concat(a))), this.each(function() {
                    var t = e.data(this, n);
                    t ? (t.option(s || {}), t._init && t._init()) : e.data(this, n, new i(s, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var n, o, s, r = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (r = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (o = r[t] = e.widget.extend({}, this.options[t]), s = 0; n.length - 1 > s; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                        o[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        r[t] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, i, n) {
                var o, s = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), e.each(n, function(n, r) {
                    function a() {
                        return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + s.eventNamespace,
                        u = l[2];
                    u ? o.delegate(u, c, a) : i.bind(c, a)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, n) {
                var o, s, r = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                    for (o in s) o in i || (i[o] = s[o]);
                return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            e.Widget.prototype["_" + t] = function(n, o, s) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var r, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : t;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), r = !e.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && e.effects && e.effects.effect[a] ? n[t](o) : a !== t && n[a] ? n[a](o.duration, o.easing, s) : n.queue(function(i) {
                    e(this)[t](), s && s.call(n[0]), i()
                })
            }
        }), e.widget;
        var s = !1;
        e(document).mouseup(function() {
                s = !1
            }), e.widget("ui.mouse", {
                version: "1.11.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e)
                    }).bind("click." + this.widgetName, function(i) {
                        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if (!s) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                        var i = this,
                            n = 1 === t.which,
                            o = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                        return n && !o && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                            return i._mouseMove(e)
                        }, this._mouseUpDelegate = function(e) {
                            return i._mouseUp(e)
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), s = !0, !0)) : !0
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                        if (!t.which) return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(t) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), s = !1, !1
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            }),
            function() {
                function t(e, t, i) {
                    return [parseFloat(e[0]) * (h.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (h.test(e[1]) ? i / 100 : 1)]
                }

                function i(t, i) {
                    return parseInt(e.css(t, i), 10) || 0
                }

                function n(t) {
                    var i = t[0];
                    return 9 === i.nodeType ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : e.isWindow(i) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }
                e.ui = e.ui || {};
                var o, s, r = Math.max,
                    a = Math.abs,
                    l = Math.round,
                    c = /left|center|right/,
                    u = /top|center|bottom/,
                    d = /[\+\-]\d+(\.[\d]+)?%?/,
                    p = /^\w+/,
                    h = /%$/,
                    f = e.fn.position;
                e.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== o) return o;
                            var t, i, n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                s = n.children()[0];
                            return e("body").append(n), t = s.offsetWidth, n.css("overflow", "scroll"), i = s.offsetWidth, t === i && (i = n[0].clientWidth), n.remove(), o = t - i
                        },
                        getScrollInfo: function(t) {
                            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                                n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                                o = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                                s = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
                            return {
                                width: s ? e.position.scrollbarWidth() : 0,
                                height: o ? e.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(t) {
                            var i = e(t || window),
                                n = e.isWindow(i[0]),
                                o = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: o,
                                offset: i.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: n || o ? i.width() : i.outerWidth(),
                                height: n || o ? i.height() : i.outerHeight()
                            }
                        }
                    }, e.fn.position = function(o) {
                        if (!o || !o.of) return f.apply(this, arguments);
                        o = e.extend({}, o);
                        var h, m, g, v, b, y, w = e(o.of),
                            x = e.position.getWithinInfo(o.within),
                            S = e.position.getScrollInfo(x),
                            C = (o.collision || "flip").split(" "),
                            T = {};
                        return y = n(w), w[0].preventDefault && (o.at = "left top"), m = y.width, g = y.height, v = y.offset, b = e.extend({}, v), e.each(["my", "at"], function() {
                            var e, t, i = (o[this] || "").split(" ");
                            1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], o[this] = [p.exec(i[0])[0], p.exec(i[1])[0]]
                        }), 1 === C.length && (C[1] = C[0]), "right" === o.at[0] ? b.left += m : "center" === o.at[0] && (b.left += m / 2), "bottom" === o.at[1] ? b.top += g : "center" === o.at[1] && (b.top += g / 2), h = t(T.at, m, g), b.left += h[0], b.top += h[1], this.each(function() {
                            var n, c, u = e(this),
                                d = u.outerWidth(),
                                p = u.outerHeight(),
                                f = i(this, "marginLeft"),
                                y = i(this, "marginTop"),
                                k = d + f + i(this, "marginRight") + S.width,
                                E = p + y + i(this, "marginBottom") + S.height,
                                A = e.extend({}, b),
                                D = t(T.my, u.outerWidth(), u.outerHeight());
                            "right" === o.my[0] ? A.left -= d : "center" === o.my[0] && (A.left -= d / 2), "bottom" === o.my[1] ? A.top -= p : "center" === o.my[1] && (A.top -= p / 2), A.left += D[0], A.top += D[1], s || (A.left = l(A.left), A.top = l(A.top)), n = {
                                marginLeft: f,
                                marginTop: y
                            }, e.each(["left", "top"], function(t, i) {
                                e.ui.position[C[t]] && e.ui.position[C[t]][i](A, {
                                    targetWidth: m,
                                    targetHeight: g,
                                    elemWidth: d,
                                    elemHeight: p,
                                    collisionPosition: n,
                                    collisionWidth: k,
                                    collisionHeight: E,
                                    offset: [h[0] + D[0], h[1] + D[1]],
                                    my: o.my,
                                    at: o.at,
                                    within: x,
                                    elem: u
                                })
                            }), o.using && (c = function(e) {
                                var t = v.left - A.left,
                                    i = t + m - d,
                                    n = v.top - A.top,
                                    s = n + g - p,
                                    l = {
                                        target: {
                                            element: w,
                                            left: v.left,
                                            top: v.top,
                                            width: m,
                                            height: g
                                        },
                                        element: {
                                            element: u,
                                            left: A.left,
                                            top: A.top,
                                            width: d,
                                            height: p
                                        },
                                        horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                        vertical: 0 > s ? "top" : n > 0 ? "bottom" : "middle"
                                    };
                                d > m && m > a(t + i) && (l.horizontal = "center"), p > g && g > a(n + s) && (l.vertical = "middle"), l.important = r(a(t), a(i)) > r(a(n), a(s)) ? "horizontal" : "vertical", o.using.call(this, e, l)
                            }), u.offset(e.extend(A, {
                                using: c
                            }))
                        })
                    }, e.ui.position = {
                        fit: {
                            left: function(e, t) {
                                var i, n = t.within,
                                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                                    s = n.width,
                                    a = e.left - t.collisionPosition.marginLeft,
                                    l = o - a,
                                    c = a + t.collisionWidth - s - o;
                                t.collisionWidth > s ? l > 0 && 0 >= c ? (i = e.left + l + t.collisionWidth - s - o, e.left += l - i) : e.left = c > 0 && 0 >= l ? o : l > c ? o + s - t.collisionWidth : o : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = r(e.left - a, e.left)
                            },
                            top: function(e, t) {
                                var i, n = t.within,
                                    o = n.isWindow ? n.scrollTop : n.offset.top,
                                    s = t.within.height,
                                    a = e.top - t.collisionPosition.marginTop,
                                    l = o - a,
                                    c = a + t.collisionHeight - s - o;
                                t.collisionHeight > s ? l > 0 && 0 >= c ? (i = e.top + l + t.collisionHeight - s - o, e.top += l - i) : e.top = c > 0 && 0 >= l ? o : l > c ? o + s - t.collisionHeight : o : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = r(e.top - a, e.top)
                            }
                        },
                        flip: {
                            left: function(e, t) {
                                var i, n, o = t.within,
                                    s = o.offset.left + o.scrollLeft,
                                    r = o.width,
                                    l = o.isWindow ? o.scrollLeft : o.offset.left,
                                    c = e.left - t.collisionPosition.marginLeft,
                                    u = c - l,
                                    d = c + t.collisionWidth - r - l,
                                    p = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                    h = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                    f = -2 * t.offset[0];
                                0 > u ? (i = e.left + p + h + f + t.collisionWidth - r - s, (0 > i || a(u) > i) && (e.left += p + h + f)) : d > 0 && (n = e.left - t.collisionPosition.marginLeft + p + h + f - l, (n > 0 || d > a(n)) && (e.left += p + h + f))
                            },
                            top: function(e, t) {
                                var i, n, o = t.within,
                                    s = o.offset.top + o.scrollTop,
                                    r = o.height,
                                    l = o.isWindow ? o.scrollTop : o.offset.top,
                                    c = e.top - t.collisionPosition.marginTop,
                                    u = c - l,
                                    d = c + t.collisionHeight - r - l,
                                    p = "top" === t.my[1],
                                    h = p ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                    f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                    m = -2 * t.offset[1];
                                0 > u ? (n = e.top + h + f + m + t.collisionHeight - r - s, (0 > n || a(u) > n) && (e.top += h + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + h + f + m - l, (i > 0 || d > a(i)) && (e.top += h + f + m))
                            }
                        },
                        flipfit: {
                            left: function() {
                                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var t, i, n, o, r, a = document.getElementsByTagName("body")[0],
                            l = document.createElement("div");
                        t = document.createElement(a ? "div" : "body"), n = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, a && e.extend(n, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (r in n) t.style[r] = n[r];
                        t.appendChild(l), i = a || document.documentElement, i.insertBefore(t, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", o = e(l).offset().left, s = o > 10 && 11 > o, t.innerHTML = "", i.removeChild(t)
                    }()
            }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
                },
                _setOption: function(e, t) {
                    this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
                },
                _destroy: function() {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
                },
                _mouseCapture: function(t) {
                    var i = this.options;
                    return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
                },
                _blockFrames: function(t) {
                    this.iframeBlocks = this.document.find(t).map(function() {
                        var t = e(this);
                        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _blurActiveElement: function(t) {
                    var i = this.document[0];
                    if (this.handleElement.is(t.target)) try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
                    } catch (n) {}
                },
                _mouseStart: function(t) {
                    var i = this.options;
                    return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return "fixed" === e(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                },
                _refreshOffsets: function(e) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(t, i) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                        var n = this._uiHash();
                        if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                        this.position = n.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
                },
                _mouseStop: function(t) {
                    var i = this,
                        n = !1;
                    return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        i._trigger("stop", t) !== !1 && i._clear()
                    }) : this._trigger("stop", t) !== !1 && this._clear(), !1
                },
                _mouseUp: function(t) {
                    return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                },
                _getHandle: function(t) {
                    return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this.handleElement.removeClass("ui-draggable-handle")
                },
                _createHelper: function(t) {
                    var i = this.options,
                        n = e.isFunction(i.helper),
                        o = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                    return o.parents("body").length || o.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _isRootNode: function(e) {
                    return /(html|body)/i.test(e.tagName) || e === this.document[0]
                },
                _getParentOffset: function() {
                    var t = this.offsetParent.offset(),
                        i = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" !== this.cssPosition) return {
                        top: 0,
                        left: 0
                    };
                    var e = this.element.position(),
                        t = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, i, n, o = this.options,
                        s = this.document[0];
                    return this.relativeContainer = null, o.containment ? "window" === o.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = e(o.containment), n = i[0], void(n && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
                },
                _convertPositionTo: function(e, t) {
                    t || (t = this.position);
                    var i = "absolute" === e ? 1 : -1,
                        n = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                        left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function(e, t) {
                    var i, n, o, s, r = this.options,
                        a = this._isRootNode(this.scrollParent[0]),
                        l = e.pageX,
                        c = e.pageY;
                    return a && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }), t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - r.grid[1] : o + r.grid[1] : o, s = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? s - this.offset.click.left >= i[0] || s - this.offset.click.left > i[2] ? s : s - this.offset.click.left >= i[0] ? s - r.grid[0] : s + r.grid[0] : s), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), {
                        top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                },
                _normalizeRightBottom: function() {
                    "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
                },
                _trigger: function(t, i, n) {
                    return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, n)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }), e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, i, n) {
                    var o = e.extend({}, i, {
                        item: n.element
                    });
                    n.sortables = [], e(n.options.connectToSortable).each(function() {
                        var i = e(this).sortable("instance");
                        i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, o))
                    })
                },
                stop: function(t, i, n) {
                    var o = e.extend({}, i, {
                        item: n.element
                    });
                    n.cancelHelperRemoval = !1, e.each(n.sortables, function() {
                        var e = this;
                        e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                            position: e.placeholder.css("position"),
                            top: e.placeholder.css("top"),
                            left: e.placeholder.css("left")
                        }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, o))
                    })
                },
                drag: function(t, i, n) {
                    e.each(n.sortables, function() {
                        var o = !1,
                            s = this;
                        s.positionAbs = n.positionAbs, s.helperProportions = n.helperProportions, s.offset.click = n.offset.click, s._intersectsWith(s.containerCache) && (o = !0, e.each(n.sortables, function() {
                            return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (o = !1), o
                        })), o ? (s.isOver || (s.isOver = 1, n._parent = i.helper.parent(), s.currentItem = i.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function() {
                            return i.helper[0]
                        }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = n.offset.click.top, s.offset.click.left = n.offset.click.left, s.offset.parent.left -= n.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= n.offset.parent.top - s.offset.parent.top, n._trigger("toSortable", t), n.dropped = s.element, e.each(n.sortables, function() {
                            this.refreshPositions()
                        }), n.currentItem = n.element, s.fromOutside = n), s.currentItem && (s._mouseDrag(t), i.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger("fromSortable", t), n.dropped = !1, e.each(n.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }), e.ui.plugin.add("draggable", "cursor", {
                start: function(t, i, n) {
                    var o = e("body"),
                        s = n.options;
                    o.css("cursor") && (s._cursor = o.css("cursor")), o.css("cursor", s.cursor)
                },
                stop: function(t, i, n) {
                    var o = n.options;
                    o._cursor && e("body").css("cursor", o._cursor)
                }
            }), e.ui.plugin.add("draggable", "opacity", {
                start: function(t, i, n) {
                    var o = e(i.helper),
                        s = n.options;
                    o.css("opacity") && (s._opacity = o.css("opacity")), o.css("opacity", s.opacity)
                },
                stop: function(t, i, n) {
                    var o = n.options;
                    o._opacity && e(i.helper).css("opacity", o._opacity)
                }
            }), e.ui.plugin.add("draggable", "scroll", {
                start: function(e, t, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                },
                drag: function(t, i, n) {
                    var o = n.options,
                        s = !1,
                        r = n.scrollParentNotHidden[0],
                        a = n.document[0];
                    r !== a && "HTML" !== r.tagName ? (o.axis && "x" === o.axis || (n.overflowOffset.top + r.offsetHeight - t.pageY < o.scrollSensitivity ? r.scrollTop = s = r.scrollTop + o.scrollSpeed : t.pageY - n.overflowOffset.top < o.scrollSensitivity && (r.scrollTop = s = r.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (n.overflowOffset.left + r.offsetWidth - t.pageX < o.scrollSensitivity ? r.scrollLeft = s = r.scrollLeft + o.scrollSpeed : t.pageX - n.overflowOffset.left < o.scrollSensitivity && (r.scrollLeft = s = r.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (t.pageY - e(a).scrollTop() < o.scrollSensitivity ? s = e(a).scrollTop(e(a).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < o.scrollSensitivity && (s = e(a).scrollTop(e(a).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (t.pageX - e(a).scrollLeft() < o.scrollSensitivity ? s = e(a).scrollLeft(e(a).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < o.scrollSensitivity && (s = e(a).scrollLeft(e(a).scrollLeft() + o.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
                }
            }), e.ui.plugin.add("draggable", "snap", {
                start: function(t, i, n) {
                    var o = n.options;
                    n.snapElements = [], e(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                        var t = e(this),
                            i = t.offset();
                        this !== n.element[0] && n.snapElements.push({
                            item: this,
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            top: i.top,
                            left: i.left
                        })
                    })
                },
                drag: function(t, i, n) {
                    var o, s, r, a, l, c, u, d, p, h, f = n.options,
                        m = f.snapTolerance,
                        g = i.offset.left,
                        v = g + n.helperProportions.width,
                        b = i.offset.top,
                        y = b + n.helperProportions.height;
                    for (p = n.snapElements.length - 1; p >= 0; p--) l = n.snapElements[p].left - n.margins.left, c = l + n.snapElements[p].width, u = n.snapElements[p].top - n.margins.top, d = u + n.snapElements[p].height, l - m > v || g > c + m || u - m > y || b > d + m || !e.contains(n.snapElements[p].item.ownerDocument, n.snapElements[p].item) ? (n.snapElements[p].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                        snapItem: n.snapElements[p].item
                    })), n.snapElements[p].snapping = !1) : ("inner" !== f.snapMode && (o = m >= Math.abs(u - y),
                        s = m >= Math.abs(d - b), r = m >= Math.abs(l - v), a = m >= Math.abs(c - g), o && (i.position.top = n._convertPositionTo("relative", {
                            top: u - n.helperProportions.height,
                            left: 0
                        }).top), s && (i.position.top = n._convertPositionTo("relative", {
                            top: d,
                            left: 0
                        }).top), r && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: l - n.helperProportions.width
                        }).left), a && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: c
                        }).left)), h = o || s || r || a, "outer" !== f.snapMode && (o = m >= Math.abs(u - b), s = m >= Math.abs(d - y), r = m >= Math.abs(l - g), a = m >= Math.abs(c - v), o && (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0
                    }).top), s && (i.position.top = n._convertPositionTo("relative", {
                        top: d - n.helperProportions.height,
                        left: 0
                    }).top), r && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left), a && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c - n.helperProportions.width
                    }).left)), !n.snapElements[p].snapping && (o || s || r || a || h) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                        snapItem: n.snapElements[p].item
                    })), n.snapElements[p].snapping = o || s || r || a || h)
                }
            }), e.ui.plugin.add("draggable", "stack", {
                start: function(t, i, n) {
                    var o, s = n.options,
                        r = e.makeArray(e(s.stack)).sort(function(t, i) {
                            return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                        });
                    r.length && (o = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(t) {
                        e(this).css("zIndex", o + t)
                    }), this.css("zIndex", o + r.length))
                }
            }), e.ui.plugin.add("draggable", "zIndex", {
                start: function(t, i, n) {
                    var o = e(i.helper),
                        s = n.options;
                    o.css("zIndex") && (s._zIndex = o.css("zIndex")), o.css("zIndex", s.zIndex)
                },
                stop: function(t, i, n) {
                    var o = n.options;
                    o._zIndex && e(i.helper).css("zIndex", o._zIndex)
                }
            }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(e) {
                    return parseInt(e, 10) || 0
                },
                _isNumber: function(e) {
                    return !isNaN(parseInt(e, 10))
                },
                _hasScroll: function(t, i) {
                    if ("hidden" === e(t).css("overflow")) return !1;
                    var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                        o = !1;
                    return t[n] > 0 ? !0 : (t[n] = 1, o = t[n] > 0, t[n] = 0, o)
                },
                _create: function() {
                    var t, i, n, o, s, r = this,
                        a = this.options;
                    if (this.element.addClass("ui-resizable"), e.extend(this, {
                            _aspectRatio: !!a.aspectRatio,
                            aspectRatio: a.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }), this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })), this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }), this._proportionallyResize()), this.handles = a.handles || (e(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) n = e.trim(t[i]), s = "ui-resizable-" + n, o = e("<div class='ui-resizable-handle " + s + "'></div>"), o.css({
                            zIndex: a.zIndex
                        }), "se" === n && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(o);
                    this._renderAxis = function(t) {
                        var i, n, o, s;
                        t = t || this.element;
                        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                            mousedown: r._mouseDown
                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element), s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(o, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                    }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                    }), a.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        a.disabled || (e(this).removeClass("ui-resizable-autohide"), r._handles.show())
                    }).mouseleave(function() {
                        a.disabled || r.resizing || (e(this).addClass("ui-resizable-autohide"), r._handles.hide())
                    })), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t, i = function(t) {
                        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                        position: t.css("position"),
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: t.css("top"),
                        left: t.css("left")
                    }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
                },
                _mouseCapture: function(t) {
                    var i, n, o = !1;
                    for (i in this.handles) n = e(this.handles[i])[0], (n === t.target || e.contains(n, t.target)) && (o = !0);
                    return !this.options.disabled && o
                },
                _mouseStart: function(t) {
                    var i, n, o, s = this.options,
                        r = this.element;
                    return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), s.containment && (i += e(s.containment).scrollLeft() || 0, n += e(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: i,
                        top: n
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: r.width(),
                        height: r.height()
                    }, this.originalSize = this._helper ? {
                        width: r.outerWidth(),
                        height: r.outerHeight()
                    } : {
                        width: r.width(),
                        height: r.height()
                    }, this.sizeDiff = {
                        width: r.outerWidth() - r.width(),
                        height: r.outerHeight() - r.height()
                    }, this.originalPosition = {
                        left: i,
                        top: n
                    }, this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
                },
                _mouseDrag: function(t) {
                    var i, n, o = this.originalMousePosition,
                        s = this.axis,
                        r = t.pageX - o.left || 0,
                        a = t.pageY - o.top || 0,
                        l = this._change[s];
                    return this._updatePrevProperties(), l ? (i = l.apply(this, [t, r, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var i, n, o, s, r, a, l, c = this.options,
                        u = this;
                    return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), o = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, s = n ? 0 : u.sizeDiff.width, r = {
                        width: u.helper.width() - s,
                        height: u.helper.height() - o
                    }, a = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, l = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, c.animate || this.element.css(e.extend(r, {
                        top: l,
                        left: a
                    })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !c.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var e = {};
                    return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
                },
                _updateVirtualBoundaries: function(e) {
                    var t, i, n, o, s, r = this.options;
                    s = {
                        minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                        maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                        minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                        maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                    }, (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio, n = s.minWidth / this.aspectRatio, i = s.maxHeight * this.aspectRatio, o = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), n > s.minHeight && (s.minHeight = n), s.maxWidth > i && (s.maxWidth = i), s.maxHeight > o && (s.maxHeight = o)), this._vBoundaries = s
                },
                _updateCache: function(e) {
                    this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
                },
                _updateRatio: function(e) {
                    var t = this.position,
                        i = this.size,
                        n = this.axis;
                    return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
                },
                _respectSize: function(e) {
                    var t = this._vBoundaries,
                        i = this.axis,
                        n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                        o = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                        s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                        r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                        a = this.originalPosition.left + this.originalSize.width,
                        l = this.position.top + this.size.height,
                        c = /sw|nw|w/.test(i),
                        u = /nw|ne|n/.test(i);
                    return s && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), o && (e.height = t.maxHeight), s && c && (e.left = a - t.minWidth), n && c && (e.left = a - t.maxWidth), r && u && (e.top = l - t.minHeight), o && u && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
                },
                _getPaddingPlusBorderDimensions: function(e) {
                    for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], o = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(n[t], 10) || 0, i[t] += parseInt(o[t], 10) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                },
                _renderProxy: function() {
                    var t = this.element,
                        i = this.options;
                    this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++i.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(e, t) {
                        return {
                            width: this.originalSize.width + t
                        }
                    },
                    w: function(e, t) {
                        var i = this.originalSize,
                            n = this.originalPosition;
                        return {
                            left: n.left + t,
                            width: i.width - t
                        }
                    },
                    n: function(e, t, i) {
                        var n = this.originalSize,
                            o = this.originalPosition;
                        return {
                            top: o.top + i,
                            height: n.height - i
                        }
                    },
                    s: function(e, t, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function(t, i, n) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                    },
                    sw: function(t, i, n) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                    },
                    ne: function(t, i, n) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                    },
                    nw: function(t, i, n) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                    }
                },
                _propagate: function(t, i) {
                    e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }), e.ui.plugin.add("resizable", "animate", {
                stop: function(t) {
                    var i = e(this).resizable("instance"),
                        n = i.options,
                        o = i._proportionallyResizeElements,
                        s = o.length && /textarea/i.test(o[0].nodeName),
                        r = s && i._hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                        a = s ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - a,
                            height: i.size.height - r
                        },
                        c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                        u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(e.extend(l, u && c ? {
                        top: u,
                        left: c
                    } : {}), {
                        duration: n.animateDuration,
                        easing: n.animateEasing,
                        step: function() {
                            var n = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            o && o.length && e(o[0]).css({
                                width: n.width,
                                height: n.height
                            }), i._updateCache(n), i._propagate("resize", t)
                        }
                    })
                }
            }), e.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var t, i, n, o, s, r, a, l = e(this).resizable("instance"),
                        c = l.options,
                        u = l.element,
                        d = c.containment,
                        p = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
                    p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
                        left: 0,
                        top: 0
                    }, l.containerPosition = {
                        left: 0,
                        top: 0
                    }, l.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }) : (t = e(p), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                        i[e] = l._num(t.css("padding" + n))
                    }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                        height: t.innerHeight() - i[3],
                        width: t.innerWidth() - i[1]
                    }, n = l.containerOffset, o = l.containerSize.height, s = l.containerSize.width, r = l._hasScroll(p, "left") ? p.scrollWidth : s, a = l._hasScroll(p) ? p.scrollHeight : o, l.parentData = {
                        element: p,
                        left: n.left,
                        top: n.top,
                        width: r,
                        height: a
                    }))
                },
                resize: function(t) {
                    var i, n, o, s, r = e(this).resizable("instance"),
                        a = r.options,
                        l = r.containerOffset,
                        c = r.position,
                        u = r._aspectRatio || t.shiftKey,
                        d = {
                            top: 0,
                            left: 0
                        },
                        p = r.containerElement,
                        h = !0;
                    p[0] !== document && /static/.test(p.css("position")) && (d = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - d.left), u && (r.size.height = r.size.width / r.aspectRatio, h = !1), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio, h = !1), r.position.top = r._helper ? l.top : 0), o = r.containerElement.get(0) === r.element.parent().get(0), s = /relative|absolute/.test(r.containerElement.css("position")), o && s ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - d.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - d.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio, h = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, u && (r.size.width = r.size.height * r.aspectRatio, h = !1)), h || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
                },
                stop: function() {
                    var t = e(this).resizable("instance"),
                        i = t.options,
                        n = t.containerOffset,
                        o = t.containerPosition,
                        s = t.containerElement,
                        r = e(t.helper),
                        a = r.offset(),
                        l = r.outerWidth() - t.sizeDiff.width,
                        c = r.outerHeight() - t.sizeDiff.height;
                    t._helper && !i.animate && /relative/.test(s.css("position")) && e(this).css({
                        left: a.left - o.left - n.left,
                        width: l,
                        height: c
                    }), t._helper && !i.animate && /static/.test(s.css("position")) && e(this).css({
                        left: a.left - o.left - n.left,
                        width: l,
                        height: c
                    })
                }
            }), e.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var t = e(this).resizable("instance"),
                        i = t.options;
                    e(i.alsoResize).each(function() {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                },
                resize: function(t, i) {
                    var n = e(this).resizable("instance"),
                        o = n.options,
                        s = n.originalSize,
                        r = n.originalPosition,
                        a = {
                            height: n.size.height - s.height || 0,
                            width: n.size.width - s.width || 0,
                            top: n.position.top - r.top || 0,
                            left: n.position.left - r.left || 0
                        };
                    e(o.alsoResize).each(function() {
                        var t = e(this),
                            n = e(this).data("ui-resizable-alsoresize"),
                            o = {},
                            s = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(s, function(e, t) {
                            var i = (n[t] || 0) + (a[t] || 0);
                            i && i >= 0 && (o[t] = i || null)
                        }), t.css(o)
                    })
                },
                stop: function() {
                    e(this).removeData("resizable-alsoresize")
                }
            }), e.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var t = e(this).resizable("instance"),
                        i = t.options,
                        n = t.size;
                    t.ghost = t.originalElement.clone(), t.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: n.height,
                        width: n.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
                },
                resize: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative",
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }), e.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var t, i = e(this).resizable("instance"),
                        n = i.options,
                        o = i.size,
                        s = i.originalSize,
                        r = i.originalPosition,
                        a = i.axis,
                        l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                        c = l[0] || 1,
                        u = l[1] || 1,
                        d = Math.round((o.width - s.width) / c) * c,
                        p = Math.round((o.height - s.height) / u) * u,
                        h = s.width + d,
                        f = s.height + p,
                        m = n.maxWidth && h > n.maxWidth,
                        g = n.maxHeight && f > n.maxHeight,
                        v = n.minWidth && n.minWidth > h,
                        b = n.minHeight && n.minHeight > f;
                    n.grid = l, v && (h += c), b && (f += u), m && (h -= c), g && (f -= u), /^(se|s|e)$/.test(a) ? (i.size.width = h, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = h, i.size.height = f, i.position.top = r.top - p) : /^(sw)$/.test(a) ? (i.size.width = h, i.size.height = f, i.position.left = r.left - d) : ((0 >= f - u || 0 >= h - c) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = r.top - p) : (f = u - t.height, i.size.height = f, i.position.top = r.top + s.height - f), h - c > 0 ? (i.size.width = h, i.position.left = r.left - d) : (h = c - t.width, i.size.width = h, i.position.left = r.left + s.width - h))
                }
            }), e.ui.resizable
    }),
    function(e) {
        function t() {
            for (var e = new Date(this.toString()), t = 28, i = e.getMonth(); e.getMonth() == i;) ++t, e.setDate(t);
            return t - 1
        }
        e.addDays = function(e) {
            this.setDate(this.getDate() + e)
        }, e.addMonths = function(e) {
            var i = this.getDate();
            this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(i, t.apply(this)))
        }, e.addYears = function(e) {
            var i = this.getDate();
            this.setDate(1), this.setFullYear(this.getFullYear() + e), this.setDate(Math.min(i, t.apply(this)))
        }, e.getDayOfYear = function() {
            var e = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0),
                t = new Date(this.getFullYear(), 0, 0, 0, 0, 0),
                i = e - t;
            return Math.floor(i / 24 * 60 * 60 * 1e3)
        }
    }(Date.prototype),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t() {
            var t, i, o, s, r, a, l, c = e(this).data("pickmeup-options"),
                u = this.pickmeup,
                d = Math.floor(c.calendars / 2),
                p = c.date,
                h = c.current,
                f = c.min ? new Date(c.min) : null,
                m = c.max ? new Date(c.max) : null,
                g = (new Date).setHours(0, 0, 0, 0).valueOf();
            f && (f.setDate(1), f.addMonths(1), f.addDays(-1)), m && (m.setDate(1), m.addMonths(1), m.addDays(-1)), u.find(".pmu-instance > :not(nav)").remove();
            for (var v = 0; v < c.calendars; v++)
                if (t = new Date(h), s = u.find(".pmu-instance").eq(v), u.hasClass("pmu-view-years") ? (t.addYears(12 * (v - d)), i = t.getFullYear() - 6 + " - " + (t.getFullYear() + 5)) : u.hasClass("pmu-view-months") ? (t.addYears(v - d), i = t.getFullYear()) : u.hasClass("pmu-view-days") && (t.addMonths(v - d), i = n(t, "B, Y", c.locale)), !a && m && (l = new Date(t), c.select_day ? l.addMonths(c.calendars - 1) : c.select_month ? l.addYears(c.calendars - 1) : l.addYears(12 * (c.calendars - 1)), l > m)) --v, h.addMonths(-1), a = void 0;
                else if (a = new Date(t), !r && (r = new Date(t), r.setDate(1), r.addMonths(1), r.addDays(-1), f && f > r)) --v, h.addMonths(1), r = void 0;
            else {
                s.find(".pmu-month").text(i), o = "";
                var b = function(e) {
                        return "range" == c.mode && e >= new Date(p[0]).getFullYear() && e <= new Date(p[1]).getFullYear() || "multiple" == c.mode && -1 !== p.reduce(function(e, t) {
                            return e.push(new Date(t).getFullYear()), e
                        }, []).indexOf(e) || new Date(p).getFullYear() == e
                    },
                    w = function(e, t) {
                        var i = new Date(p[0]).getFullYear(),
                            n = new Date(p[1]).getFullYear(),
                            o = new Date(p[0]).getMonth(),
                            s = new Date(p[1]).getMonth();
                        return "range" == c.mode && e > i && n > e || "range" == c.mode && e == i && n > e && t >= o || "range" == c.mode && e > i && e == n && s >= t || "range" == c.mode && e == i && e == n && t >= o && s >= t || "multiple" == c.mode && -1 !== p.reduce(function(e, t) {
                            return t = new Date(t), e.push(t.getFullYear() + "-" + t.getMonth()), e
                        }, []).indexOf(e + "-" + t) || new Date(p).getFullYear() == e && new Date(p).getMonth() == t
                    };
                ! function() {
                    for (var e, i = [], n = t.getFullYear() - 6, s = new Date(c.min).getFullYear(), r = new Date(c.max).getFullYear(), a = 0; 12 > a; ++a) e = {
                        text: n + a,
                        class_name: []
                    }, c.min && e.text < s || c.max && e.text > r ? e.class_name.push("pmu-disabled") : b(e.text) && e.class_name.push("pmu-selected"), e.class_name = e.class_name.join(" "), i.push(e);
                    o += y.body(i, "pmu-years")
                }(),
                function() {
                    for (var e, i = [], n = t.getFullYear(), s = new Date(c.min).getFullYear(), r = new Date(c.min).getMonth(), a = new Date(c.max).getFullYear(), l = new Date(c.max).getMonth(), u = 0; 12 > u; ++u) e = {
                        text: c.locale.monthsShort[u],
                        class_name: []
                    }, c.min && (s > n || r > u && n == s) || c.max && (n > a || u > l && n >= a) ? e.class_name.push("pmu-disabled") : w(n, u) && e.class_name.push("pmu-selected"), e.class_name = e.class_name.join(" "), i.push(e);
                    o += y.body(i, "pmu-months")
                }(),
                function() {
                    var i, n = [],
                        s = t.getMonth();
                    ! function() {
                        t.setDate(1);
                        var e = (t.getDay() - c.first_day) % 7;
                        t.addDays(-(e + (0 > e ? 7 : 0)))
                    }();
                    for (var r = 0; 42 > r; ++r) {
                        i = {
                            text: t.getDate(),
                            class_name: []
                        }, s != t.getMonth() && i.class_name.push("pmu-not-in-month"), 0 == t.getDay() ? i.class_name.push("pmu-sunday") : 6 == t.getDay() && i.class_name.push("pmu-saturday");
                        var a = c.render(new Date(t)) || {},
                            l = t.valueOf(),
                            u = c.min && c.min > t || c.max && c.max < t;
                        a.disabled || u ? i.class_name.push("pmu-disabled") : (a.selected || c.date == l || -1 !== e.inArray(l, c.date) || "range" == c.mode && l >= c.date[0] && l <= c.date[1]) && i.class_name.push("pmu-selected"), l == g && i.class_name.push("pmu-today"), a.class_name && i.class_name.push(a.class_name), i.class_name = i.class_name.join(" "), n.push(i), t.addDays(1)
                    }
                    o += y.body(n, "pmu-days")
                }(), s.append(o)
            }
            r.setDate(1), a.setDate(1), a.addMonths(1), a.addDays(-1), u.find(".pmu-prev").css("visibility", c.min && c.min >= r ? "hidden" : "visible"), u.find(".pmu-next").css("visibility", c.max && c.max <= a ? "hidden" : "visible"), c.fill.apply(this)
        }

        function i(t, n, o, s) {
            if (t.constructor == Date) return t;
            if (!t) return new Date;
            var r = t.split(o);
            if (r.length > 1) return r.forEach(function(t, r, a) {
                a[r] = i(e.trim(t), n, o, s)
            }), r;
            for (var a, l, c, u, d, p = s.monthsShort.join(")(") + ")(" + s.months.join(")("), o = new RegExp("[^0-9a-zA-Z(" + p + ")]+"), h = t.split(o), f = n.split(o), m = new Date, g = 0; g < h.length; g++) switch (f[g]) {
                case "b":
                    l = s.monthsShort.indexOf(h[g]);
                    break;
                case "B":
                    l = s.months.indexOf(h[g]);
                    break;
                case "d":
                case "e":
                    a = parseInt(h[g], 10);
                    break;
                case "m":
                    l = parseInt(h[g], 10) - 1;
                    break;
                case "Y":
                case "y":
                    c = parseInt(h[g], 10), c += c > 100 ? 0 : 29 > c ? 2e3 : 1900;
                    break;
                case "H":
                case "I":
                case "k":
                case "l":
                    u = parseInt(h[g], 10);
                    break;
                case "P":
                case "p":
                    /pm/i.test(h[g]) && 12 > u ? u += 12 : /am/i.test(h[g]) && u >= 12 && (u -= 12);
                    break;
                case "M":
                    d = parseInt(h[g], 10)
            }
            var v = new Date(void 0 === c ? m.getFullYear() : c, void 0 === l ? m.getMonth() : l, void 0 === a ? m.getDate() : a, void 0 === u ? m.getHours() : u, void 0 === d ? m.getMinutes() : d, 0);
            return isNaN(1 * v) && (v = new Date), v
        }

        function n(e, t, i) {
            var n = e.getMonth(),
                o = e.getDate(),
                s = e.getFullYear(),
                r = e.getDay(),
                a = e.getHours(),
                l = a >= 12,
                c = l ? a - 12 : a,
                u = e.getDayOfYear();
            0 == c && (c = 12);
            for (var d, p = e.getMinutes(), h = e.getSeconds(), f = t.split(""), m = 0; m < f.length; m++) {
                switch (d = f[m]) {
                    case "a":
                        d = i.daysShort[r];
                        break;
                    case "A":
                        d = i.days[r];
                        break;
                    case "b":
                        d = i.monthsShort[n];
                        break;
                    case "B":
                        d = i.months[n];
                        break;
                    case "C":
                        d = 1 + Math.floor(s / 100);
                        break;
                    case "d":
                        d = 10 > o ? "0" + o : o;
                        break;
                    case "e":
                        d = o;
                        break;
                    case "H":
                        d = 10 > a ? "0" + a : a;
                        break;
                    case "I":
                        d = 10 > c ? "0" + c : c;
                        break;
                    case "j":
                        d = 100 > u ? 10 > u ? "00" + u : "0" + u : u;
                        break;
                    case "k":
                        d = a;
                        break;
                    case "l":
                        d = c;
                        break;
                    case "m":
                        d = 9 > n ? "0" + (1 + n) : 1 + n;
                        break;
                    case "M":
                        d = 10 > p ? "0" + p : p;
                        break;
                    case "p":
                    case "P":
                        d = l ? "PM" : "AM";
                        break;
                    case "s":
                        d = Math.floor(e.getTime() / 1e3);
                        break;
                    case "S":
                        d = 10 > h ? "0" + h : h;
                        break;
                    case "u":
                        d = r + 1;
                        break;
                    case "w":
                        d = r;
                        break;
                    case "y":
                        d = ("" + s).substr(2, 2);
                        break;
                    case "Y":
                        d = s
                }
                f[m] = d
            }
            return f.join("")
        }

        function o() {
            var t, i = e(this),
                n = i.data("pickmeup-options"),
                o = n.current;
            switch (n.mode) {
                case "multiple":
                    t = o.setHours(0, 0, 0, 0).valueOf(), -1 !== e.inArray(t, n.date) ? e.each(n.date, function(e, i) {
                        return i == t ? (n.date.splice(e, 1), !1) : !0
                    }) : n.date.push(t);
                    break;
                case "range":
                    n.lastSel || (n.date[0] = o.setHours(0, 0, 0, 0).valueOf()), t = o.setHours(0, 0, 0, 0).valueOf(), t <= n.date[0] ? (n.date[1] = n.date[0], n.date[0] = t) : n.date[1] = t, n.lastSel = !n.lastSel;
                    break;
                default:
                    n.date = o.valueOf()
            }
            var s = r(n);
            return i.is("input") && i.val("single" == n.mode ? s[0] : s[0].join(n.separator)), n.change.apply(this, s), n.flat || !n.hide_on_select || "range" == n.mode && n.lastSel ? void 0 : (n.binded.hide(), !1)
        }

        function s(t) {
            var i = e(t.target);
            if (i.hasClass("pmu-button") || (i = i.closest(".pmu-button")), i.length) {
                if (i.hasClass("pmu-disabled")) return !1;
                var n = e(this),
                    o = n.data("pickmeup-options"),
                    s = i.parents(".pmu-instance").eq(0),
                    r = s.parent(),
                    a = e(".pmu-instance", r).index(s);
                if (i.parent().is("nav")) i.hasClass("pmu-month") ? (o.current.addMonths(a - Math.floor(o.calendars / 2)), r.hasClass("pmu-view-years") ? ("single" != o.mode ? o.current = new Date(o.date[o.date.length - 1]) : o.current = new Date(o.date), o.select_day ? r.removeClass("pmu-view-years").addClass("pmu-view-days") : o.select_month && r.removeClass("pmu-view-years").addClass("pmu-view-months")) : r.hasClass("pmu-view-months") ? o.select_year ? r.removeClass("pmu-view-months").addClass("pmu-view-years") : o.select_day && r.removeClass("pmu-view-months").addClass("pmu-view-days") : r.hasClass("pmu-view-days") && (o.select_month ? r.removeClass("pmu-view-days").addClass("pmu-view-months") : o.select_year && r.removeClass("pmu-view-days").addClass("pmu-view-years"))) : i.hasClass("pmu-prev") ? o.binded.prev(!1) : o.binded.next(!1);
                else if (!i.hasClass("pmu-disabled"))
                    if (r.hasClass("pmu-view-years")) o.current.setFullYear(parseInt(i.text(), 10)), o.select_month ? r.removeClass("pmu-view-years").addClass("pmu-view-months") : o.select_day ? r.removeClass("pmu-view-years").addClass("pmu-view-days") : o.binded.update_date();
                    else if (r.hasClass("pmu-view-months")) o.current.setMonth(s.find(".pmu-months .pmu-button").index(i)), o.current.setFullYear(parseInt(s.find(".pmu-month").text(), 10)), o.select_day ? r.removeClass("pmu-view-months").addClass("pmu-view-days") : o.binded.update_date(), o.current.addMonths(Math.floor(o.calendars / 2) - a);
                else {
                    var l = parseInt(i.text(), 10);
                    o.current.addMonths(a - Math.floor(o.calendars / 2)), i.hasClass("pmu-not-in-month") && o.current.addMonths(l > 15 ? -1 : 1), o.current.setDate(l), o.binded.update_date()
                }
                o.binded.fill()
            }
            return !1
        }

        function r(t) {
            var i;
            return "single" == t.mode ? (i = new Date(t.date), [n(i, t.formsssat, t.locale), i]) : (i = [
                [],
                []
            ], e.each(t.date, function(e, o) {
                var s = new Date(o);
                i[0].push(n(s, t.formsssat, t.locale)), i[1].push(s)
            }), i)
        }

        function a(t) {
            var n = this.pickmeup;
            if (t || !n.is(":visible")) {
                var o = e(this),
                    s = o.data("pickmeup-options"),
                    r = o.offset(),
                    a = {
                        l: document.documentElement.scrollLeft,
                        t: document.documentElement.scrollTop,
                        w: document.documentElement.clientWidth,
                        h: document.documentElement.clientHeight
                    },
                    l = r.top,
                    c = r.left;
                if (s.binded.fill(), o.is("input") && (o.pickmeup("set_date", i(o.val() ? o.val() : s.default_date, s.formsssat, s.separator, s.locale)).keydown(function(e) {
                        9 == e.which && o.pickmeup("hide")
                    }), s.lastSel = !1), s.before_show(), 0 == s.show()) return;
                if (!s.flat) {
                    switch (s.position) {
                        case "top":
                            l -= n.outerHeight();
                            break;
                        case "left":
                            c -= n.outerWidth();
                            break;
                        case "right":
                            c += this.offsetWidth;
                            break;
                        case "bottom":
                            l += this.offsetHeight
                    }
                    l + n.offsetHeight > a.t + a.h && (l = r.top - n.offsetHeight), l < a.t && (l = r.top + this.offsetHeight + n.offsetHeight), c + n.offsetWidth > a.l + a.w && (c = r.left - n.offsetWidth), c < a.l && (c = r.left + this.offsetWidth), n.css({
                        display: "inline-block",
                        top: l + "px",
                        left: c + "px"
                    }), e(document).on("mousedown" + s.events_namespace + " touchstart" + s.events_namespace, s.binded.hide).on("resize" + s.events_namespace, [!0], s.binded.forced_show)
                }
            }
        }

        function l() {
            a.call(this, !0)
        }

        function c(t) {
            if (!t || !t.target || t.target != this && !(16 & this.pickmeup.get(0).compareDocumentPosition(t.target))) {
                var i = this.pickmeup,
                    n = e(this).data("pickmeup-options");
                0 != n.hide() && (i.hide(), e(document).off("mousedown touchstart", n.binded.hide).off("resize", n.binded.forced_show), n.lastSel = !1)
            }
        }

        function u() {
            var t = e(this).data("pickmeup-options");
            e(document).off("mousedown", t.binded.hide).off("resize", t.binded.forced_show), t.binded.forced_show()
        }

        function d() {
            var t = e(this).data("pickmeup-options");
            "single" != t.mode && (t.date = [], t.lastSel = !1, t.binded.fill())
        }

        function p(t) {
            "undefined" == typeof t && (t = !0);
            var i = this.pickmeup,
                n = e(this).data("pickmeup-options");
            i.hasClass("pmu-view-years") ? n.current.addYears(-12) : i.hasClass("pmu-view-months") ? n.current.addYears(-1) : i.hasClass("pmu-view-days") && n.current.addMonths(-1), t && n.binded.fill()
        }

        function h(t) {
            "undefined" == typeof t && (t = !0);
            var i = this.pickmeup,
                n = e(this).data("pickmeup-options");
            i.hasClass("pmu-view-years") ? n.current.addYears(12) : i.hasClass("pmu-view-months") ? n.current.addYears(1) : i.hasClass("pmu-view-days") && n.current.addMonths(1), t && n.binded.fill()
        }

        function f(t) {
            var i = e(this).data("pickmeup-options"),
                o = r(i);
            if ("string" == typeof t) {
                var s = o[1];
                return s.constructor == Date ? n(s, t, i.locale) : s.map(function(e) {
                    return n(e, t, i.locale)
                })
            }
            return o[t ? 0 : 1]
        }

        function m(t) {
            var n = e(this),
                o = n.data("pickmeup-options");
            if (o.date = t, "string" == typeof o.date ? o.date = i(o.date, o.formsssat, o.separator, o.locale).setHours(0, 0, 0, 0) : o.date.constructor == Date && o.date.setHours(0, 0, 0, 0), o.date || (o.date = new Date, o.date.setHours(0, 0, 0, 0)), "single" != o.mode)
                if (o.date.constructor != Array) o.date = [o.date.valueOf()], "range" == o.mode && o.date.push(new Date(o.date[0]).setHours(0, 0, 0, 0).valueOf());
                else {
                    for (var s = 0; s < o.date.length; s++) o.date[s] = i(o.date[s], o.formsssat, o.separator, o.locale).setHours(0, 0, 0, 0).valueOf();
                    "range" == o.mode && (o.date[1] = new Date(o.date[1]).setHours(0, 0, 0, 0).valueOf())
                }
            else(n.val() || o.default_date !== !1) && (o.date = o.date.constructor == Array ? o.date[0].valueOf() : o.date.valueOf());
            if (o.current = new Date("single" != o.mode ? o.date[0] : o.date), o.binded.fill(), n.is("input")) {
                var a = r(o);
                n.val("single" == o.mode ? o.default_date === !1 ? n.val() : a[0] : a[0].join(o.separator))
            }
        }

        function g() {
            var t = e(this),
                i = t.data("pickmeup-options");
            t.removeData("pickmeup-options"), t.off(i.events_namespace), e(document).off(i.events_namespace), e(this.pickmeup).remove()
        }
        var v = 0;
        e.pickmeup = e.extend(e.pickmeup || {}, {
            date: new Date,
            default_date: new Date,
            flat: !1,
            first_day: 1,
            prev: "&#9664;",
            next: "&#9654;",
            mode: "single",
            select_year: !0,
            select_month: !0,
            select_day: !0,
            view: "days",
            calendars: 1,
            formsssat: "d-m-Y",
            position: "bottom",
            trigger_event: "click touchstart",
            class_name: "",
            separator: " - ",
            hide_on_select: !1,
            min: null,
            max: null,
            render: function() {},
            change: function() {
                return !0
            },
            before_show: function() {
                return !0
            },
            show: function() {
                return !0
            },
            hide: function() {
                return !0
            },
            fill: function() {
                return !0
            },
            locale: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        });
        var b = {
                years: "pmu-view-years",
                months: "pmu-view-months",
                days: "pmu-view-days"
            },
            y = {
                wrapper: '<div class="pickmeup" />',
                head: function(e) {
                    for (var t = "", i = 0; 7 > i; ++i) t += "<div>" + e.day[i] + "</div>";
                    return '<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">' + e.prev + '</div><div class="pmu-month pmu-button" /><div class="pmu-next pmu-button">' + e.next + '</div></nav><nav class="pmu-day-of-week">' + t + "</nav></div>"
                },
                body: function(e, t) {
                    for (var i = "", n = 0; n < e.length; ++n) i += '<div class="' + e[n].class_name + ' pmu-button">' + e[n].text + "</div>";
                    return '<div class="' + t + '">' + i + "</div>"
                }
            };
        e.fn.pickmeup = function(n) {
            if ("string" == typeof n) {
                var r, w = Array.prototype.slice.call(arguments, 1);
                switch (n) {
                    case "hide":
                    case "show":
                    case "clear":
                    case "update":
                    case "prev":
                    case "next":
                    case "destroy":
                        this.each(function() {
                            r = e(this).data("pickmeup-options"), r && r.binded[n]()
                        });
                        break;
                    case "get_date":
                        return r = this.data("pickmeup-options"), r ? r.binded.get_date(w[0]) : null;
                    case "set_date":
                        this.each(function() {
                            r = e(this).data("pickmeup-options"), r && r.binded[n].apply(this, w)
                        })
                }
                return this
            }
            return this.each(function() {
                var r = e(this);
                if (!r.data("pickmeup-options")) {
                    var w, x, S = e.extend({}, e.pickmeup, n || {});
                    for (w in S) x = r.data("pmu-" + w), "undefined" != typeof x && (S[w] = x);
                    if ("days" != S.view || S.select_day || (S.view = "months"), "months" != S.view || S.select_month || (S.view = "years"), "years" != S.view || S.select_year || (S.view = "days"), "days" != S.view || S.select_day || (S.view = "months"), S.calendars = Math.max(1, parseInt(S.calendars, 10) || 1), S.mode = /single|multiple|range/.test(S.mode) ? S.mode : "single", "string" == typeof S.min ? S.min = i(S.min, S.formsssat, S.separator, S.locale).setHours(0, 0, 0, 0) : S.min && S.min.constructor == Date && S.min.setHours(0, 0, 0, 0), "string" == typeof S.max ? S.max = i(S.max, S.formsssat, S.separator, S.locale).setHours(0, 0, 0, 0) : S.max && S.max.constructor == Date && S.max.setHours(0, 0, 0, 0), S.select_day || (S.min && (S.min = new Date(S.min), S.min.setDate(1), S.min = S.min.valueOf()), S.max && (S.max = new Date(S.max), S.max.setDate(1), S.max = S.max.valueOf())), "string" == typeof S.date ? S.date = i(S.date, S.formsssat, S.separator, S.locale).setHours(0, 0, 0, 0) : S.date.constructor == Date && S.date.setHours(0, 0, 0, 0), S.date || (S.date = new Date, S.date.setHours(0, 0, 0, 0)), "single" != S.mode) {
                        if (S.date.constructor != Array) S.date = [S.date.valueOf()], "range" == S.mode && S.date.push(new Date(S.date[0]).setHours(0, 0, 0, 0).valueOf());
                        else {
                            for (w = 0; w < S.date.length; w++) S.date[w] = i(S.date[w], S.formsssat, S.separator, S.locale).setHours(0, 0, 0, 0).valueOf();
                            "range" == S.mode && (S.date[1] = new Date(S.date[1]).setHours(0, 0, 0, 0).valueOf())
                        }
                        if (S.current = new Date(S.date[0]), !S.select_day)
                            for (w = 0; w < S.date.length; ++w) S.date[w] = new Date(S.date[w]), S.date[w].setDate(1), S.date[w] = S.date[w].valueOf(), "range" != S.mode && S.date.indexOf(S.date[w]) !== w && (delete S.date.splice(w, 1), --w)
                    } else S.date = S.date.valueOf(), S.current = new Date(S.date), S.select_day || (S.date = new Date(S.date), S.date.setDate(1), S.date = S.date.valueOf());
                    S.current.setDate(1), S.current.setHours(0, 0, 0, 0);
                    var C, T = e(y.wrapper);
                    this.pickmeup = T, S.class_name && T.addClass(S.class_name);
                    var k = "";
                    for (w = 0; w < S.calendars; w++) C = S.first_day, k += y.head({
                        prev: S.prev,
                        next: S.next,
                        day: [S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7], S.locale.daysMin[C++ % 7]]
                    });
                    r.data("pickmeup-options", S);
                    for (w in S) - 1 != ["render", "change", "before_show", "show", "hide"].indexOf(w) && (S[w] = S[w].bind(this));
                    if (S.binded = {
                            fill: t.bind(this),
                            update_date: o.bind(this),
                            click: s.bind(this),
                            show: a.bind(this),
                            forced_show: l.bind(this),
                            hide: c.bind(this),
                            update: u.bind(this),
                            clear: d.bind(this),
                            prev: p.bind(this),
                            next: h.bind(this),
                            get_date: f.bind(this),
                            set_date: m.bind(this),
                            destroy: g.bind(this)
                        }, S.events_namespace = ".pickmeup-" + ++v, T.on("click touchstart", S.binded.click).addClass(b[S.view]).append(k).on(e.support.selectstart ? "selectstart" : "mousedown", function(e) {
                            e.preventDefault()
                        }), S.binded.fill(), S.flat) T.appendTo(this).css({
                        position: "relative",
                        display: "inline-block"
                    });
                    else {
                        T.appendTo(document.body);
                        var E = S.trigger_event.split(" ");
                        for (w = 0; w < E.length; ++w) E[w] += S.events_namespace;
                        E = E.join(" "), r.on(E, S.binded.show)
                    }
                }
            })
        }
    }), ! function(e, t, i, n) {
        "use strict";
        e.fn.modal = function(o) {
            var s, r = e(this),
                a = e(t),
                l = e(i),
                c = e("body"),
                u = r.selector || "",
                d = (new Date).getTime(),
                p = [],
                h = arguments[0],
                f = "string" == typeof h,
                m = [].slice.call(arguments, 1),
                g = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 0)
                };
            return r.each(function() {
                var r, v, b, y, w, x, S, C, T, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
                    E = k.selector,
                    A = k.className,
                    D = k.namespace,
                    _ = k.error,
                    L = "." + D,
                    N = "module-" + D,
                    H = e(this),
                    P = e(k.context),
                    z = H.find(E.close),
                    F = this,
                    M = H.data(N);
                T = {
                    initialize: function() {
                        T.verbose("Initializing dimmer", P), T.create.id(), T.create.dimmer(), T.refreshModals(), T.bind.events(), k.observeChanges && T.observeChanges(), T.instantiate()
                    },
                    instantiate: function() {
                        T.verbose("Storing instance of modal"), M = T, H.data(N, M)
                    },
                    create: {
                        dimmer: function() {
                            var t = {
                                    debug: k.debug,
                                    dimmerName: "modals",
                                    duration: {
                                        show: k.duration,
                                        hide: k.duration
                                    }
                                },
                                i = e.extend(!0, t, k.dimmerSettings);
                            return k.inverted && (i.variation = i.variation !== n ? i.variation + " inverted" : "inverted"), e.fn.dimmer === n ? void T.error(_.dimmer) : (T.debug("Creating dimmer with settings", i), y = P.dimmer(i), k.detachable ? (T.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", H)) : T.set.undetached(), k.blurring && y.addClass(A.blurring), void(w = y.dimmer("get dimmer")))
                        },
                        id: function() {
                            S = (Math.random().toString(16) + "000000000").substr(2, 8), x = "." + S, T.verbose("Creating unique id for element", S)
                        }
                    },
                    destroy: function() {
                        T.verbose("Destroying previous modal"), H.removeData(N).off(L), a.off(x), z.off(L), P.dimmer("destroy")
                    },
                    observeChanges: function() {
                        "MutationObserver" in t && (C = new MutationObserver(function(e) {
                            T.debug("DOM tree modified, refreshing"), T.refresh()
                        }), C.observe(F, {
                            childList: !0,
                            subtree: !0
                        }), T.debug("Setting up mutation observer", C))
                    },
                    refresh: function() {
                        T.remove.scrolling(), T.cacheSizes(), T.set.screenHeight(), T.set.type(), T.set.position()
                    },
                    refreshModals: function() {
                        v = H.siblings(E.modal), r = v.add(H)
                    },
                    attachEvents: function(t, i) {
                        var n = e(t);
                        i = e.isFunction(T[i]) ? T[i] : T.toggle, n.length > 0 ? (T.debug("Attaching modal events to element", t, i), n.off(L).on("click" + L, i)) : T.error(_.notFound, t)
                    },
                    bind: {
                        events: function() {
                            T.verbose("Attaching events"), H.on("click" + L, E.close, T.event.close).on("click" + L, E.approve, T.event.approve).on("click" + L, E.deny, T.event.deny), a.on("resize" + x, T.event.resize)
                        }
                    },
                    get: {
                        id: function() {
                            return (Math.random().toString(16) + "000000000").substr(2, 8)
                        }
                    },
                    event: {
                        approve: function() {
                            return k.onApprove.call(F, e(this)) === !1 ? void T.verbose("Approve callback returned false cancelling hide") : void T.hide()
                        },
                        deny: function() {
                            return k.onDeny.call(F, e(this)) === !1 ? void T.verbose("Deny callback returned false cancelling hide") : void T.hide()
                        },
                        close: function() {
                            T.hide()
                        },
                        click: function(t) {
                            var n = e(t.target),
                                o = n.closest(E.modal).length > 0,
                                s = e.contains(i.documentElement, t.target);
                            !o && s && (T.debug("Dimmer clicked, hiding all modals"), T.is.active() && (T.remove.clickaway(), k.allowMultiple ? T.hide() : T.hideAll()))
                        },
                        debounce: function(e, t) {
                            clearTimeout(T.timer), T.timer = setTimeout(e, t)
                        },
                        keyboard: function(e) {
                            var t = e.which,
                                i = 27;
                            t == i && (k.closable ? (T.debug("Escape key pressed hiding modal"), T.hide()) : T.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                        },
                        resize: function() {
                            y.dimmer("is active") && g(T.refresh)
                        }
                    },
                    toggle: function() {
                        T.is.active() || T.is.animating() ? T.hide() : T.show()
                    },
                    show: function(t) {
                        t = e.isFunction(t) ? t : function() {}, T.refreshModals(), T.showModal(t)
                    },
                    hide: function(t) {
                        t = e.isFunction(t) ? t : function() {}, T.refreshModals(), T.hideModal(t)
                    },
                    showModal: function(t) {
                        t = e.isFunction(t) ? t : function() {}, T.is.animating() || !T.is.active() ? (T.showDimmer(), T.cacheSizes(), T.set.position(), T.set.screenHeight(), T.set.type(), T.set.clickaway(), !k.allowMultiple && T.others.active() ? T.hideOthers(T.showModal) : (k.onShow.call(F), k.transition && e.fn.transition !== n && H.transition("is supported") ? (T.debug("Showing modal with css animations"), H.transition({
                            debug: k.debug,
                            animation: k.transition + " in",
                            queue: k.queue,
                            duration: k.duration,
                            useFailSafe: !0,
                            onComplete: function() {
                                k.onVisible.apply(F), T.add.keyboardShortcuts(), T.save.focus(), T.set.active(), k.autofocus && T.set.autofocus(), t()
                            }
                        })) : T.error(_.noTransition))) : T.debug("Modal is already visible")
                    },
                    hideModal: function(t, i) {
                        t = e.isFunction(t) ? t : function() {}, T.debug("Hiding modal"), k.onHide.call(F), (T.is.animating() || T.is.active()) && (k.transition && e.fn.transition !== n && H.transition("is supported") ? (T.remove.active(), H.transition({
                            debug: k.debug,
                            animation: k.transition + " out",
                            queue: k.queue,
                            duration: k.duration,
                            useFailSafe: !0,
                            onStart: function() {
                                T.others.active() || i || T.hideDimmer(), T.remove.keyboardShortcuts()
                            },
                            onComplete: function() {
                                k.onHidden.call(F), T.restore.focus(), t()
                            }
                        })) : T.error(_.noTransition))
                    },
                    showDimmer: function() {
                        y.dimmer("is animating") || !y.dimmer("is active") ? (T.debug("Showing dimmer"), y.dimmer("show")) : T.debug("Dimmer already visible")
                    },
                    hideDimmer: function() {
                        return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function() {
                            T.remove.clickaway(), T.remove.screenHeight()
                        }) : void T.debug("Dimmer is not visible cannot hide")
                    },
                    hideAll: function(t) {
                        var i = r.filter("." + A.active + ", ." + A.animating);
                        t = e.isFunction(t) ? t : function() {}, i.length > 0 && (T.debug("Hiding all visible modals"), T.hideDimmer(), i.modal("hide modal", t))
                    },
                    hideOthers: function(t) {
                        var i = v.filter("." + A.active + ", ." + A.animating);
                        t = e.isFunction(t) ? t : function() {}, i.length > 0 && (T.debug("Hiding other modals", v), i.modal("hide modal", t, !0))
                    },
                    others: {
                        active: function() {
                            return v.filter("." + A.active).length > 0
                        },
                        animating: function() {
                            return v.filter("." + A.animating).length > 0
                        }
                    },
                    add: {
                        keyboardShortcuts: function() {
                            T.verbose("Adding keyboard shortcuts"), l.on("keyup" + L, T.event.keyboard)
                        }
                    },
                    save: {
                        focus: function() {
                            b = e(i.activeElement).blur()
                        }
                    },
                    restore: {
                        focus: function() {
                            b && b.length > 0 && b.focus()
                        }
                    },
                    remove: {
                        active: function() {
                            H.removeClass(A.active)
                        },
                        clickaway: function() {
                            k.closable && w.off("click" + x)
                        },
                        bodyStyle: function() {
                            "" === c.attr("style") && (T.verbose("Removing style attribute"), c.removeAttr("style"))
                        },
                        screenHeight: function() {
                            T.debug("Removing page height"), c.css("height", "")
                        },
                        keyboardShortcuts: function() {
                            T.verbose("Removing keyboard shortcuts"), l.off("keyup" + L)
                        },
                        scrolling: function() {
                            y.removeClass(A.scrolling), H.removeClass(A.scrolling)
                        }
                    },
                    cacheSizes: function() {
                        var o = H.outerHeight();
                        (T.cache === n || 0 !== o) && (T.cache = {
                            pageHeight: e(i).outerHeight(),
                            height: o + k.offset,
                            contextHeight: "body" == k.context ? e(t).height() : y.height()
                        }), T.debug("Caching modal and container sizes", T.cache)
                    },
                    can: {
                        fit: function() {
                            return T.cache.height + 2 * k.padding < T.cache.contextHeight
                        }
                    },
                    is: {
                        active: function() {
                            return H.hasClass(A.active)
                        },
                        animating: function() {
                            return H.transition("is supported") ? H.transition("is animating") : H.is(":visible")
                        },
                        scrolling: function() {
                            return y.hasClass(A.scrolling)
                        },
                        modernBrowser: function() {
                            return !(t.ActiveXObject || "ActiveXObject" in t)
                        }
                    },
                    set: {
                        autofocus: function() {
                            var e = H.find(":input").filter(":visible"),
                                t = e.filter("[autofocus]"),
                                i = t.length > 0 ? t.first() : e.first();
                            i.length > 0 && i.focus()
                        },
                        clickaway: function() {
                            k.closable && w.on("click" + x, T.event.click)
                        },
                        screenHeight: function() {
                            T.can.fit() ? c.css("height", "") : (T.debug("Modal is taller than page content, resizing page height"), c.css("height", T.cache.height + 2 * k.padding))
                        },
                        active: function() {
                            H.addClass(A.active)
                        },
                        scrolling: function() {
                            y.addClass(A.scrolling), H.addClass(A.scrolling)
                        },
                        type: function() {
                            T.can.fit() ? (T.verbose("Modal fits on screen"), T.others.active() || T.others.animating() || T.remove.scrolling()) : (T.verbose("Modal cannot fit on screen setting to scrolling"), T.set.scrolling())
                        },
                        position: function() {
                            T.verbose("Centering modal on page", T.cache), H.css(T.can.fit() ? {
                                top: "",
                                marginTop: -(T.cache.height / 2)
                            } : {
                                marginTop: "",
                                top: l.scrollTop()
                            })
                        },
                        undetached: function() {
                            y.addClass(A.undetached)
                        }
                    },
                    setting: function(t, i) {
                        if (T.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, k, t);
                        else {
                            if (i === n) return k[t];
                            k[t] = i
                        }
                    },
                    internal: function(t, i) {
                        if (e.isPlainObject(t)) e.extend(!0, T, t);
                        else {
                            if (i === n) return T[t];
                            T[t] = i
                        }
                    },
                    debug: function() {
                        k.debug && (k.performsssance ? T.performsssance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), T.debug.apply(console, arguments)))
                    },
                    verbose: function() {
                        k.verbose && k.debug && (k.performsssance ? T.performsssance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), T.verbose.apply(console, arguments)))
                    },
                    error: function() {
                        T.error = Function.prototype.bind.call(console.error, console, k.name + ":"), T.error.apply(console, arguments)
                    },
                    performsssance: {
                        log: function(e) {
                            var t, i, n;
                            k.performsssance && (t = (new Date).getTime(), n = d || t, i = t - n, d = t, p.push({
                                Name: e[0],
                                Arguments: [].slice.call(e, 1) || "",
                                Element: F,
                                "Execution Time": i
                            })), clearTimeout(T.performsssance.timer), T.performsssance.timer = setTimeout(T.performsssance.display, 500)
                        },
                        display: function() {
                            var t = k.name + ":",
                                i = 0;
                            d = !1, clearTimeout(T.performsssance.timer), e.each(p, function(e, t) {
                                i += t["Execution Time"]
                            }), t += " " + i + "ms", u && (t += " '" + u + "'"), (console.group !== n || console.table !== n) && p.length > 0 && (console.groupCollapsed(t), console.table ? console.table(p) : e.each(p, function(e, t) {
                                console.log(t.Name + ": " + t["Execution Time"] + "ms")
                            }), console.groupEnd()), p = []
                        }
                    },
                    invoke: function(t, i, o) {
                        var r, a, l, c = M;
                        return i = i || m, o = F || o, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                            var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                            if (e.isPlainObject(c[s]) && i != r) c = c[s];
                            else {
                                if (c[s] !== n) return a = c[s], !1;
                                if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : !1;
                                c = c[o]
                            }
                        })), e.isFunction(a) ? l = a.apply(o, i) : a !== n && (l = a), e.isArray(s) ? s.push(l) : s !== n ? s = [s, l] : l !== n && (s = l), a
                    }
                }, f ? (M === n && T.initialize(), T.invoke(h)) : (M !== n && M.invoke("destroy"), T.initialize())
            }), s !== n ? s : this
        }, e.fn.modal.settings = {
            name: "Modal",
            namespace: "modal",
            debug: !1,
            verbose: !1,
            performsssance: !0,
            observeChanges: !1,
            allowMultiple: !1,
            detachable: !0,
            closable: !0,
            autofocus: !0,
            inverted: !1,
            blurring: !1,
            dimmerSettings: {
                closable: !1,
                useCSS: !0
            },
            context: "body",
            queue: !1,
            duration: 500,
            offset: 0,
            transition: "scale",
            padding: 50,
            onShow: function() {},
            onVisible: function() {},
            onHide: function() {},
            onHidden: function() {},
            onApprove: function() {
                return !0
            },
            onDeny: function() {
                return !0
            },
            selector: {
                close: "> .close",
                approve: ".actions .positive, .actions .approve, .actions .ok",
                deny: ".actions .negative, .actions .deny, .actions .cancel",
                modal: ".ui.modal"
            },
            error: {
                dimmer: "UI Dimmer, a required component is not included in this page",
                method: "The method you called is not defined.",
                notFound: "The element you specified could not be found"
            },
            className: {
                active: "active",
                animating: "animating",
                blurring: "blurring",
                scrolling: "scrolling",
                undetached: "undetached"
            }
        }
    }(jQuery, window, document),
    function(e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.noUiSlider = e()
    }(function() {
        "use strict";

        function e(e) {
            return e.filter(function(e) {
                return this[e] ? !1 : this[e] = !0
            }, {})
        }

        function t(e, t) {
            return Math.round(e / t) * t
        }

        function i(e) {
            var t = e.getBoundingClientRect(),
                i = e.ownerDocument,
                n = i.documentElement,
                o = p();
            return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0), {
                top: t.top + o.y - n.clientTop,
                left: t.left + o.x - n.clientLeft
            }
        }

        function n(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }

        function o(e) {
            var t = Math.pow(10, 7);
            return Number((Math.round(e * t) / t).toFixed(7))
        }

        function s(e, t, i) {
            c(e, t), setTimeout(function() {
                u(e, t)
            }, i)
        }

        function r(e) {
            return Math.max(Math.min(e, 100), 0)
        }

        function a(e) {
            return Array.isArray(e) ? e : [e]
        }

        function l(e) {
            var t = e.split(".");
            return t.length > 1 ? t[1].length : 0
        }

        function c(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        }

        function u(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
        }

        function d(e, t) {
            e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
        }

        function p() {
            var e = void 0 !== window.pageXOffset,
                t = "CSS1Compat" === (document.compatMode || ""),
                i = e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
                n = e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
            return {
                x: i,
                y: n
            }
        }

        function h(e) {
            e.stopPropagation()
        }

        function f(e) {
            return function(t) {
                return e + t
            }
        }

        function m(e, t) {
            return 100 / (t - e)
        }

        function g(e, t) {
            return 100 * t / (e[1] - e[0])
        }

        function v(e, t) {
            return g(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
        }

        function b(e, t) {
            return t * (e[1] - e[0]) / 100 + e[0]
        }

        function y(e, t) {
            for (var i = 1; e >= t[i];) i += 1;
            return i
        }

        function w(e, t, i) {
            if (i >= e.slice(-1)[0]) return 100;
            var n, o, s, r, a = y(i, e);
            return n = e[a - 1], o = e[a], s = t[a - 1], r = t[a], s + v([n, o], i) / m(s, r)
        }

        function x(e, t, i) {
            if (i >= 100) return e.slice(-1)[0];
            var n, o, s, r, a = y(i, t);
            return n = e[a - 1], o = e[a], s = t[a - 1], r = t[a], b([n, o], (i - s) * m(s, r))
        }

        function S(e, i, n, o) {
            if (100 === o) return o;
            var s, r, a = y(o, e);
            return n ? (s = e[a - 1], r = e[a], o - s > (r - s) / 2 ? r : s) : i[a - 1] ? e[a - 1] + t(o - e[a - 1], i[a - 1]) : o
        }

        function C(e, t, i) {
            var o;
            if ("number" == typeof t && (t = [t]), "[object Array]" !== Object.prototype.toString.call(t)) throw new Error("noUiSlider: 'range' contains invalid value.");
            if (o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e), !n(o) || !n(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            i.xPct.push(o), i.xVal.push(t[0]), o ? i.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (i.xSteps[0] = t[1])
        }

        function T(e, t, i) {
            return t ? void(i.xSteps[e] = g([i.xVal[e], i.xVal[e + 1]], t) / m(i.xPct[e], i.xPct[e + 1])) : !0
        }

        function k(e, t, i, n) {
            this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.snap = t, this.direction = i;
            var o, s = [];
            for (o in e) e.hasOwnProperty(o) && s.push([e[o], o]);
            for (s.length && "object" == typeof s[0][0] ? s.sort(function(e, t) {
                    return e[0][0] - t[0][0]
                }) : s.sort(function(e, t) {
                    return e[0] - t[0]
                }), o = 0; o < s.length; o++) C(s[o][1], s[o][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), o = 0; o < this.xNumSteps.length; o++) T(o, this.xNumSteps[o], this)
        }

        function E(e, t) {
            if (!n(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t
        }

        function A(e, t) {
            if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            if (t.min === t.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
            e.spectrum = new k(t, e.snap, e.dir, e.singleStep)
        }

        function D(e, t) {
            if (t = a(t), !Array.isArray(t) || !t.length || t.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
            e.handles = t.length, e.start = t
        }

        function _(e, t) {
            if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.")
        }

        function L(e, t) {
            if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.")
        }

        function N(e, t) {
            if ("lower" === t && 1 === e.handles) e.connect = 1;
            else if ("upper" === t && 1 === e.handles) e.connect = 2;
            else if (t === !0 && 2 === e.handles) e.connect = 3;
            else {
                if (t !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                e.connect = 0
            }
        }

        function H(e, t) {
            switch (t) {
                case "horizontal":
                    e.ort = 0;
                    break;
                case "vertical":
                    e.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.")
            }
        }

        function P(e, t) {
            if (!n(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (e.margin = e.spectrum.getMargin(t), !e.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
        }

        function z(e, t) {
            if (!n(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (e.limit = e.spectrum.getMargin(t), !e.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
        }

        function F(e, t) {
            switch (t) {
                case "ltr":
                    e.dir = 0;
                    break;
                case "rtl":
                    e.dir = 1, e.connect = [0, 2, 1, 3][e.connect];
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.")
            }
        }

        function M(e, t) {
            if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var i = t.indexOf("tap") >= 0,
                n = t.indexOf("drag") >= 0,
                o = t.indexOf("fixed") >= 0,
                s = t.indexOf("snap") >= 0,
                r = t.indexOf("hover") >= 0;
            if (n && !e.connect) throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
            e.events = {
                tap: i || s,
                drag: n,
                fixed: o,
                snap: s,
                hover: r
            }
        }

        function O(e, t) {
            var i;
            if (t !== !1)
                if (t === !0)
                    for (e.tooltips = [], i = 0; i < e.handles; i++) e.tooltips.push(!0);
                else {
                    if (e.tooltips = a(t), e.tooltips.length !== e.handles) throw new Error("noUiSlider: must pass a formsssatter for all handles.");
                    e.tooltips.forEach(function(e) {
                        if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formsssatter or 'false'.")
                    })
                }
        }

        function W(e, t) {
            if (e.formsssat = t, "function" == typeof t.to && "function" == typeof t.from) return !0;
            throw new Error("noUiSlider: 'formsssat' requires 'to' and 'from' methods.")
        }

        function I(e, t) {
            if (void 0 !== t && "string" != typeof t) throw new Error("noUiSlider: 'cssPrefix' must be a string.");
            e.cssPrefix = t
        }

        function R(e) {
            var t, i = {
                margin: 0,
                limit: 0,
                animate: !0,
                formsssat: B
            };
            t = {
                step: {
                    r: !1,
                    t: E
                },
                start: {
                    r: !0,
                    t: D
                },
                connect: {
                    r: !0,
                    t: N
                },
                direction: {
                    r: !0,
                    t: F
                },
                snap: {
                    r: !1,
                    t: _
                },
                animate: {
                    r: !1,
                    t: L
                },
                range: {
                    r: !0,
                    t: A
                },
                orientation: {
                    r: !1,
                    t: H
                },
                margin: {
                    r: !1,
                    t: P
                },
                limit: {
                    r: !1,
                    t: z
                },
                behaviour: {
                    r: !0,
                    t: M
                },
                formsssat: {
                    r: !1,
                    t: W
                },
                tooltips: {
                    r: !1,
                    t: O
                },
                cssPrefix: {
                    r: !1,
                    t: I
                }
            };
            var n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal"
            };
            return Object.keys(t).forEach(function(o) {
                if (void 0 === e[o] && void 0 === n[o]) {
                    if (t[o].r) throw new Error("noUiSlider: '" + o + "' is required.");
                    return !0
                }
                t[o].t(i, void 0 === e[o] ? n[o] : e[o])
            }), i.pips = e.pips, i.style = i.ort ? "top" : "left", i
        }

        function j(t, n) {
            function o(e, t, i) {
                var n = e + t[0],
                    o = e + t[1];
                return i ? (0 > n && (o += Math.abs(n)), o > 100 && (n -= o - 100), [r(n), r(o)]) : [n, o]
            }

            function m(e, t) {
                e.preventDefault();
                var i, n, o = 0 === e.type.indexOf("touch"),
                    s = 0 === e.type.indexOf("mouse"),
                    r = 0 === e.type.indexOf("pointer"),
                    a = e;
                return 0 === e.type.indexOf("MSPointer") && (r = !0), o && (i = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY), t = t || p(), (s || r) && (i = e.clientX + t.x, n = e.clientY + t.y), a.pageOffset = t, a.points = [i, n], a.cursor = s || r, a
            }

            function g(e, t) {
                var i = document.createElement("div"),
                    n = document.createElement("div"),
                    o = ["-lower", "-upper"];
                return e && o.reverse(), c(n, ne[3]), c(n, ne[3] + o[t]), c(i, ne[2]), i.appendChild(n), i
            }

            function v(e, t, i) {
                switch (e) {
                    case 1:
                        c(t, ne[7]), c(i[0], ne[6]);
                        break;
                    case 3:
                        c(i[1], ne[6]);
                    case 2:
                        c(i[0], ne[7]);
                    case 0:
                        c(t, ne[6])
                }
            }

            function b(e, t, i) {
                var n, o = [];
                for (n = 0; e > n; n += 1) o.push(i.appendChild(g(t, n)));
                return o
            }

            function y(e, t, i) {
                c(i, ne[0]), c(i, ne[8 + e]), c(i, ne[4 + t]);
                var n = document.createElement("div");
                return c(n, ne[1]), i.appendChild(n), n
            }

            function w(e, t) {
                if (!n.tooltips[t]) return !1;
                var i = document.createElement("div");
                return i.className = ne[18], e.firstChild.appendChild(i)
            }

            function x() {
                n.dir && n.tooltips.reverse();
                var e = G.map(w);
                n.dir && (e.reverse(), n.tooltips.reverse()), X("update", function(t, i, o) {
                    e[i] && (e[i].innerHTML = n.tooltips[i] === !0 ? t[i] : n.tooltips[i].to(o[i]))
                })
            }

            function S(e, t, i) {
                if ("range" === e || "steps" === e) return ee.xVal;
                if ("count" === e) {
                    var n, o = 100 / (t - 1),
                        s = 0;
                    for (t = [];
                        (n = s++ * o) <= 100;) t.push(n);
                    e = "positions"
                }
                return "positions" === e ? t.map(function(e) {
                    return ee.fromStepping(i ? ee.getStep(e) : e)
                }) : "values" === e ? i ? t.map(function(e) {
                    return ee.fromStepping(ee.getStep(ee.toStepping(e)))
                }) : t : void 0
            }

            function C(t, i, n) {
                function o(e, t) {
                    return (e + t).toFixed(7) / 1
                }
                var s = ee.direction,
                    r = {},
                    a = ee.xVal[0],
                    l = ee.xVal[ee.xVal.length - 1],
                    c = !1,
                    u = !1,
                    d = 0;
                return ee.direction = 0, n = e(n.slice().sort(function(e, t) {
                    return e - t
                })), n[0] !== a && (n.unshift(a), c = !0), n[n.length - 1] !== l && (n.push(l), u = !0), n.forEach(function(e, s) {
                    var a, l, p, h, f, m, g, v, b, y, w = e,
                        x = n[s + 1];
                    if ("steps" === i && (a = ee.xNumSteps[s]), a || (a = x - w), w !== !1 && void 0 !== x)
                        for (l = w; x >= l; l = o(l, a)) {
                            for (h = ee.toStepping(l), f = h - d, v = f / t, b = Math.round(v), y = f / b, p = 1; b >= p; p += 1) m = d + p * y, r[m.toFixed(5)] = ["x", 0];
                            g = n.indexOf(l) > -1 ? 1 : "steps" === i ? 2 : 0, !s && c && (g = 0), l === x && u || (r[h.toFixed(5)] = [l, g]), d = h
                        }
                }), ee.direction = s, r
            }

            function T(e, t, i) {
                function o(e) {
                    return ["-normal", "-large", "-sub"][e]
                }

                function s(e, t, i) {
                    return 'class="' + t + " " + t + "-" + a + " " + t + o(i[1]) + '" style="' + n.style + ": " + e + '%"'
                }

                function r(e, n) {
                    ee.direction && (e = 100 - e), n[1] = n[1] && t ? t(n[0], n[1]) : n[1], l.innerHTML += "<div " + s(e, ne[21], n) + "></div>", n[1] && (l.innerHTML += "<div " + s(e, ne[22], n) + ">" + i.to(n[0]) + "</div>")
                }
                var a = ["horizontal", "vertical"][n.ort],
                    l = document.createElement("div");
                return c(l, ne[20]), c(l, ne[20] + "-" + a), Object.keys(e).forEach(function(t) {
                    r(t, e[t])
                }), l
            }

            function k(e) {
                var t = e.mode,
                    i = e.density || 1,
                    n = e.filter || !1,
                    o = e.values || !1,
                    s = e.stepped || !1,
                    r = S(t, o, s),
                    a = C(i, t, r),
                    l = e.formsssat || {
                        to: Math.round
                    };
                return J.appendChild(T(a, n, l))
            }

            function E() {
                return Q["offset" + ["Width", "Height"][n.ort]]
            }

            function A(e, t, i) {
                void 0 !== t && 1 !== n.handles && (t = Math.abs(t - n.dir)), Object.keys(ie).forEach(function(n) {
                    var o = n.split(".")[0];
                    e === o && ie[n].forEach(function(e) {
                        e.call(K, a(j()), t, a(D(Array.prototype.slice.call(te))), i || !1)
                    })
                })
            }

            function D(e) {
                return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
            }

            function _(e, t, i, o) {
                var s = function(t) {
                        return J.hasAttribute("disabled") ? !1 : d(J, ne[14]) ? !1 : (t = m(t, o.pageOffset), e === q.start && void 0 !== t.buttons && t.buttons > 1 ? !1 : o.hover && t.buttons ? !1 : (t.calcPoint = t.points[n.ort], void i(t, o)))
                    },
                    r = [];
                return e.split(" ").forEach(function(e) {
                    t.addEventListener(e, s, !1), r.push([e, s])
                }), r
            }

            function L(e, t) {
                if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return N(e, t);
                var i, n, s = t.handles || G,
                    r = !1,
                    a = 100 * (e.calcPoint - t.start) / t.baseSize,
                    l = s[0] === G[0] ? 0 : 1;
                if (i = o(a, t.positions, s.length > 1), r = O(s[0], i[l], 1 === s.length), s.length > 1) {
                    if (r = O(s[1], i[l ? 0 : 1], !1) || r)
                        for (n = 0; n < t.handles.length; n++) A("slide", n)
                } else r && A("slide", l)
            }

            function N(e, t) {
                var i = Q.querySelector("." + ne[15]),
                    n = t.handles[0] === G[0] ? 0 : 1;
                null !== i && u(i, ne[15]), e.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
                var o = document.documentElement;
                o.noUiListeners.forEach(function(e) {
                    o.removeEventListener(e[0], e[1])
                }), u(J, ne[12]), A("set", n), A("change", n), void 0 !== t.handleNumber && A("end", t.handleNumber)
            }

            function H(e, t) {
                "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && N(e, t)
            }

            function P(e, t) {
                var i = document.documentElement;
                if (1 === t.handles.length && (c(t.handles[0].children[0], ne[15]), t.handles[0].hasAttribute("disabled"))) return !1;
                e.preventDefault(), e.stopPropagation();
                var n = _(q.move, i, L, {
                        start: e.calcPoint,
                        baseSize: E(),
                        pageOffset: e.pageOffset,
                        handles: t.handles,
                        handleNumber: t.handleNumber,
                        buttonsProperty: e.buttons,
                        positions: [Z[0], Z[G.length - 1]]
                    }),
                    o = _(q.end, i, N, {
                        handles: t.handles,
                        handleNumber: t.handleNumber
                    }),
                    s = _("mouseout", i, H, {
                        handles: t.handles,
                        handleNumber: t.handleNumber
                    });
                if (i.noUiListeners = n.concat(o, s), e.cursor) {
                    document.body.style.cursor = getComputedStyle(e.target).cursor, G.length > 1 && c(J, ne[12]);
                    var r = function() {
                        return !1
                    };
                    document.body.noUiListener = r, document.body.addEventListener("selectstart", r, !1)
                }
                void 0 !== t.handleNumber && A("start", t.handleNumber)
            }

            function z(e) {
                var t, o, r = e.calcPoint,
                    a = 0;
                return e.stopPropagation(), G.forEach(function(e) {
                    a += i(e)[n.style]
                }), t = a / 2 > r || 1 === G.length ? 0 : 1, r -= i(Q)[n.style], o = 100 * r / E(), n.events.snap || s(J, ne[14], 300), G[t].hasAttribute("disabled") ? !1 : (O(G[t], o), A("slide", t, !0), A("set", t, !0), A("change", t, !0), void(n.events.snap && P(e, {
                    handles: [G[t]]
                })))
            }

            function F(e) {
                var t = e.calcPoint - i(Q)[n.style],
                    o = ee.getStep(100 * t / E()),
                    s = ee.fromStepping(o);
                Object.keys(ie).forEach(function(e) {
                    "hover" === e.split(".")[0] && ie[e].forEach(function(e) {
                        e.call(K, s)
                    })
                })
            }

            function M(e) {
                var t, i;
                if (!e.fixed)
                    for (t = 0; t < G.length; t += 1) _(q.start, G[t].children[0], P, {
                        handles: [G[t]],
                        handleNumber: t
                    });
                if (e.tap && _(q.start, Q, z, {
                        handles: G
                    }), e.hover)
                    for (_(q.move, Q, F, {
                            hover: !0
                        }), t = 0; t < G.length; t += 1)["mousemove MSPointerMove pointermove"].forEach(function(e) {
                        G[t].children[0].addEventListener(e, h, !1)
                    });
                e.drag && (i = [Q.querySelector("." + ne[7])], c(i[0], ne[10]), e.fixed && i.push(G[i[0] === G[0] ? 1 : 0].children[0]), i.forEach(function(e) {
                    _(q.start, e, P, {
                        handles: G
                    })
                }))
            }

            function O(e, t, i) {
                var o = e !== G[0] ? 1 : 0,
                    s = Z[0] + n.margin,
                    a = Z[1] - n.margin,
                    l = Z[0] + n.limit,
                    d = Z[1] - n.limit;
                return G.length > 1 && (t = o ? Math.max(t, s) : Math.min(t, a)), i !== !1 && n.limit && G.length > 1 && (t = o ? Math.min(t, l) : Math.max(t, d)), t = ee.getStep(t), t = r(parseFloat(t.toFixed(7))), t === Z[o] ? !1 : (window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                    e.style[n.style] = t + "%"
                }) : e.style[n.style] = t + "%", e.previousSibling || (u(e, ne[17]), t > 50 && c(e, ne[17])), Z[o] = t, te[o] = ee.fromStepping(t), A("update", o), !0)
            }

            function W(e, t) {
                var i, o, s;
                for (n.limit && (e += 1), i = 0; e > i; i += 1) o = i % 2, s = t[o], null !== s && s !== !1 && ("number" == typeof s && (s = String(s)), s = n.formsssat.from(s), (s === !1 || isNaN(s) || O(G[o], ee.toStepping(s), i === 3 - n.dir) === !1) && A("update", o))
            }

            function I(e) {
                var t, i, o = a(e);
                for (n.dir && n.handles > 1 && o.reverse(), n.animate && -1 !== Z[0] && s(J, ne[14], 300), t = G.length > 1 ? 3 : 1, 1 === o.length && (t = 1), W(t, o), i = 0; i < G.length; i++) A("set", i)
            }

            function j() {
                var e, t = [];
                for (e = 0; e < n.handles; e += 1) t[e] = n.formsssat.to(te[e]);
                return D(t)
            }

            function $() {
                ne.forEach(function(e) {
                    e && u(J, e)
                }), J.innerHTML = "", delete J.noUiSlider
            }

            function B() {
                var e = Z.map(function(e, t) {
                    var i = ee.getApplicableStep(e),
                        n = l(String(i[2])),
                        o = te[t],
                        s = 100 === e ? null : i[2],
                        r = Number((o - i[2]).toFixed(n)),
                        a = 0 === e ? null : r >= i[1] ? i[2] : i[0] || !1;
                    return [a, s]
                });
                return D(e)
            }

            function X(e, t) {
                ie[e] = ie[e] || [], ie[e].push(t), "update" === e.split(".")[0] && G.forEach(function(e, t) {
                    A("update", t)
                })
            }

            function U(e) {
                var t = e.split(".")[0],
                    i = e.substring(t.length);
                Object.keys(ie).forEach(function(e) {
                    var n = e.split(".")[0],
                        o = e.substring(n.length);
                    t && t !== n || i && i !== o || delete ie[e]
                })
            }

            function V(e) {
                var t, i = j(),
                    o = R({
                        start: [0, 0],
                        margin: e.margin,
                        limit: e.limit,
                        step: e.step,
                        range: e.range,
                        animate: e.animate,
                        snap: void 0 === e.snap ? n.snap : e.snap
                    });
                for (["margin", "limit", "step", "range", "animate"].forEach(function(t) {
                        void 0 !== e[t] && (n[t] = e[t])
                    }), ee = o.spectrum, Z = [-1, -1], I(i), t = 0; t < G.length; t++) A("update", t)
            }
            var Q, G, K, J = t,
                Z = [-1, -1],
                ee = n.spectrum,
                te = [],
                ie = {},
                ne = ["target", "base", "origin", "handle", "horizontal", "vertical", "background", "connect", "ltr", "rtl", "draggable", "", "state-drag", "", "state-tap", "active", "", "stacking", "tooltip", "", "pips", "marker", "value"].map(f(n.cssPrefix || Y));
            if (J.noUiSlider) throw new Error("Slider was already initialized.");
            return Q = y(n.dir, n.ort, J), G = b(n.handles, n.dir, Q), v(n.connect, J, G), n.pips && k(n.pips), n.tooltips && x(), K = {
                destroy: $,
                steps: B,
                on: X,
                off: U,
                get: j,
                set: I,
                updateOptions: V
            }, M(n.events), K
        }

        function $(e, t) {
            if (!e.nodeName) throw new Error("noUiSlider.create requires a single element.");
            var i = R(t, e),
                n = j(e, i);
            return n.set(i.start), e.noUiSlider = n, n
        }
        var q = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            Y = "noUi-";
        k.prototype.getMargin = function(e) {
            return 2 === this.xPct.length ? g(this.xVal, e) : !1
        }, k.prototype.toStepping = function(e) {
            return e = w(this.xVal, this.xPct, e), this.direction && (e = 100 - e), e
        }, k.prototype.fromStepping = function(e) {
            return this.direction && (e = 100 - e), o(x(this.xVal, this.xPct, e))
        }, k.prototype.getStep = function(e) {
            return this.direction && (e = 100 - e), e = S(this.xPct, this.xSteps, this.snap, e), this.direction && (e = 100 - e), e
        }, k.prototype.getApplicableStep = function(e) {
            var t = y(e, this.xPct),
                i = 100 === e ? 2 : 1;
            return [this.xNumSteps[t - 2], this.xVal[t - i], this.xNumSteps[t - i]]
        }, k.prototype.convert = function(e) {
            return this.getStep(this.toStepping(e))
        };
        var B = {
            to: function(e) {
                return void 0 !== e && e.toFixed(2)
            },
            from: Number
        };
        return {
            create: $
        }
    }),
    function(e) {
        e.fn.iLightInputNumber = function(t) {
            function i(e) {
                var t = e.attr("max");
                s(e);
                var i = u + d;
                i > t && (i = t), o(e, i)
            }

            function n(e) {
                var t = e.attr("min");
                s(e);
                var i = u - d;
                t > i && (i = t), o(e, i)
            }

            function o(e, t) {
                e.val(t);
                var i = e.siblings(this);
                i.val(t)
            }

            function s(t) {
                t.attr("value") ? u = parseFloat(t.attr("value")) : t.attr("placeholder") && (u = parseFloat(t.attr("placeholder"))), e.isNumeric(u) || (u = 0), d = t.attr("step") ? parseFloat(t.attr("step")) : 1
            }
            var r = ".input-number-box",
                a = ".input-number",
                l = ".input-number-more",
                c = ".input-number-less";
            this.each(function() {
                function t(e) {
                    i.attr(e) && (u = i.attr(e), s.attr(e, u))
                }
                var i = e(this);
                e('<div class="' + r.substr(1) + '"></div>').insertAfter(i);
                var n = i.find("+ " + r);
                n.append(i);
                var o = i.attr("class");
                n.append('<input class="' + a.substr(1) + '" type="text" pattern="[0-9]{5,10}">'), i.hide();
                var s = i.next();
                s.addClass(o);
                var u;
                t("value"), t("placeholder"), t("min"), t("max"), t("step"), n.append("<div class=" + l.substr(1) + "></div>"), n.append("<div class=" + c.substr(1) + "></div>")
            });
            var u, d, p = null,
                h = null;
            e("body").on("mousedown", l, function() {
                var t = e(this),
                    n = t.siblings(a);
                i(n), h = setTimeout(function() {
                    p = setInterval(function() {
                        i(n)
                    }, 50)
                }, 200)
            }), e("body").on("mousedown", c, function() {
                var t = e(this),
                    i = t.siblings(a);
                n(i), h = setTimeout(function() {
                    p = setInterval(function() {
                        n(i)
                    }, 50)
                }, 200)
            }), e(l + ", " + c).on("mouseup mouseout", function() {
                clearTimeout(h), clearInterval(p)
            }), e(a).change(function() {
                var t = e(this),
                    i = parseFloat(t.val()),
                    n = t.attr("min"),
                    o = t.attr("max");
                n > i ? i = n : i > o && (i = o), e.isNumeric(i) || (i = ""), t.val(i), t.siblings(this).val(i)
            }), e(a).keydown(function(t) {
                var o = e(this),
                    s = t.keyCode;
                38 == s ? i(o) : 40 == s && n(o)
            })
        }
    }(jQuery), $("input[type=number]").iLightInputNumber({
        mobile: !1
    }),
    function e(t, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[r] = {
                    exports: {}
                };
                t[r][0].call(u.exports, function(e) {
                    var i = t[r][1][e];
                    return o(i ? i : e)
                }, u, u.exports, e, t, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function(e, t, i) {
            "use strict";

            function n(e) {
                e.fn.perfectScrollbar = function(t) {
                    return this.each(function() {
                        if ("object" == typeof t || "undefined" == typeof t) {
                            var i = t;
                            s.get(this) || o.initialize(this, i)
                        } else {
                            var n = t;
                            "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
                        }
                        return e(this)
                    })
                }
            }
            var o = e("../main"),
                s = e("../plugin/instances");
            if ("function" == typeof define && define.amd) define(["jquery"], n);
            else {
                var r = window.jQuery ? window.jQuery : window.$;
                "undefined" != typeof r && n(r)
            }
            t.exports = n
        }, {
            "../main": 7,
            "../plugin/instances": 18
        }],
        2: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i = e.className.split(" ");
                i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
            }

            function o(e, t) {
                var i = e.className.split(" "),
                    n = i.indexOf(t);
                n >= 0 && i.splice(n, 1), e.className = i.join(" ")
            }
            i.add = function(e, t) {
                e.classList ? e.classList.add(t) : n(e, t)
            }, i.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : o(e, t)
            }, i.list = function(e) {
                return e.classList ? e.classList : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return window.getComputedStyle(e)[t]
            }

            function o(e, t, i) {
                return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
            }

            function s(e, t) {
                for (var i in t) {
                    var n = t[i];
                    "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
                }
                return e
            }
            i.e = function(e, t) {
                var i = document.createElement(e);
                return i.className = t, i
            }, i.appendTo = function(e, t) {
                return t.appendChild(e), e
            }, i.css = function(e, t, i) {
                return "object" == typeof t ? s(e, t) : "undefined" == typeof i ? n(e, t) : o(e, t, i)
            }, i.matches = function(e, t) {
                return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, i.remove = function(e) {
                "undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            var n = function(e) {
                this.element = e, this.events = {}
            };
            n.prototype.bind = function(e, t) {
                "undefined" == typeof this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, n.prototype.unbind = function(e, t) {
                var i = "undefined" != typeof t;
                this.events[e] = this.events[e].filter(function(n) {
                    return i && n !== t ? !0 : (this.element.removeEventListener(e, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return "undefined" == typeof t && (t = new n(e), this.eventElements.push(t)), t
            }, o.prototype.bind = function(e, t, i) {
                this.eventElement(e).bind(t, i)
            }, o.prototype.unbind = function(e, t, i) {
                this.eventElement(e).unbind(t, i)
            }, o.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, o.prototype.once = function(e, t, i) {
                var n = this.eventElement(e),
                    o = function(e) {
                        n.unbind(t, o), i(e)
                    };
                n.bind(t, o)
            }, t.exports = o
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, i) {
            "use strict";
            var n = e("./class"),
                o = e("./dom");
            i.toInt = function(e) {
                return "string" == typeof e ? parseInt(e, 10) : ~~e
            }, i.clone = function(e) {
                if (null === e) return null;
                if ("object" == typeof e) {
                    var t = {};
                    for (var i in e) t[i] = this.clone(e[i]);
                    return t
                }
                return e
            }, i.extend = function(e, t) {
                var i = this.clone(e);
                for (var n in t) i[n] = this.clone(t[n]);
                return i
            }, i.isEditable = function(e) {
                return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
            }, i.removePsClasses = function(e) {
                for (var t = n.list(e), i = 0; i < t.length; i++) {
                    var o = t[i];
                    0 === o.indexOf("ps-") && n.remove(e, o)
                }
            }, i.outerWidth = function(e) {
                return this.toInt(o.css(e, "width")) + this.toInt(o.css(e, "paddingLeft")) + this.toInt(o.css(e, "paddingRight")) + this.toInt(o.css(e, "borderLeftWidth")) + this.toInt(o.css(e, "borderRightWidth"))
            }, i.startScrolling = function(e, t) {
                n.add(e, "ps-in-scrolling"), "undefined" != typeof t ? n.add(e, "ps-" + t) : (n.add(e, "ps-x"), n.add(e, "ps-y"))
            }, i.stopScrolling = function(e, t) {
                n.remove(e, "ps-in-scrolling"), "undefined" != typeof t ? n.remove(e, "ps-" + t) : (n.remove(e, "ps-x"), n.remove(e, "ps-y"))
            }, i.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, i) {
            "use strict";
            var n = e("./plugin/destroy"),
                o = e("./plugin/initialize"),
                s = e("./plugin/update");
            t.exports = {
                initialize: o,
                update: s,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 20
        }],
        8: [function(e, t, i) {
            "use strict";
            t.exports = {
                wheelSpeed: 1,
                wheelPropagation: !1,
                swipePropagation: !0,
                minScrollbarLength: null,
                maxScrollbarLength: null,
                useBothWheelAxes: !1,
                useKeyboard: !0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0
            }
        }, {}],
        9: [function(e, t, i) {
            "use strict";
            var n = e("../lib/dom"),
                o = e("../lib/helper"),
                s = e("./instances");
            t.exports = function(e) {
                var t = s.get(e);
                t.event.unbindAll(), n.remove(t.scrollbarX), n.remove(t.scrollbarY), n.remove(t.scrollbarXRail), n.remove(t.scrollbarYRail), o.removePsClasses(e), s.remove(e)
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(e) {
                    return e.getBoundingClientRect()
                }
                var n = window.Event.prototype.stopPropagation.bind;
                t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
                    var s = o.toInt(t.scrollbarYHeight / 2),
                        a = n.pageY - i(t.scrollbarYRail).top - s,
                        l = t.containerHeight - t.scrollbarYHeight,
                        c = a / l;
                    0 > c ? c = 0 : c > 1 && (c = 1), e.scrollTop = (t.contentHeight - t.containerHeight) * c, r(e)
                }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
                    var s = o.toInt(t.scrollbarXWidth / 2),
                        a = n.pageX - i(t.scrollbarXRail).left - s;
                    console.log(n.pageX, t.scrollbarXRail.offsetLeft);
                    var l = t.containerWidth - t.scrollbarXWidth,
                        c = a / l;
                    0 > c ? c = 0 : c > 1 && (c = 1), e.scrollLeft = (t.contentWidth - t.containerWidth) * c, r(e)
                })
            }
            var o = e("../../lib/helper"),
                s = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                var t = s.get(e);
                n(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        11: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i) {
                    var o = n + i,
                        s = t.containerWidth - t.scrollbarXWidth;
                    0 > o ? t.scrollbarXLeft = 0 : o > s ? t.scrollbarXLeft = s : t.scrollbarXLeft = o;
                    var a = r.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.scrollbarXWidth));
                    e.scrollLeft = a
                }
                var n = null,
                    o = null,
                    a = function(t) {
                        i(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    c = function() {
                        r.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
                    };
                t.event.bind(t.scrollbarX, "mousedown", function(i) {
                    o = i.pageX, n = r.toInt(s.css(t.scrollbarX, "left")), r.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", c), i.stopPropagation(), i.preventDefault()
                })
            }

            function o(e, t) {
                function i(i) {
                    var o = n + i,
                        s = t.containerHeight - t.scrollbarYHeight;
                    0 > o ? t.scrollbarYTop = 0 : o > s ? t.scrollbarYTop = s : t.scrollbarYTop = o;
                    var a = r.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.scrollbarYHeight));
                    e.scrollTop = a
                }
                var n = null,
                    o = null,
                    a = function(t) {
                        i(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
                    },
                    c = function() {
                        r.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
                    };
                t.event.bind(t.scrollbarY, "mousedown", function(i) {
                    o = i.pageY, n = r.toInt(s.css(t.scrollbarY, "top")), r.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", c), i.stopPropagation(), i.preventDefault()
                })
            }
            var s = e("../../lib/dom"),
                r = e("../../lib/helper"),
                a = e("../instances"),
                l = e("../update-geometry");
            t.exports = function(e) {
                var t = a.get(e);
                n(e, t), o(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        12: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i, n) {
                    var o = e.scrollTop;
                    if (0 === i) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && 0 > n) return !t.settings.wheelPropagation
                    }
                    var s = e.scrollLeft;
                    if (0 === n) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === s && 0 > i || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }
                var n = !1;
                t.event.bind(e, "mouseenter", function() {
                    n = !0
                }), t.event.bind(e, "mouseleave", function() {
                    n = !1
                });
                var s = !1;
                t.event.bind(t.ownerDocument, "keydown", function(a) {
                    if ((!a.isDefaultPrevented || !a.isDefaultPrevented()) && n) {
                        var l = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (l) {
                            for (; l.shadowRoot;) l = l.shadowRoot.activeElement;
                            if (o.isEditable(l)) return
                        }
                        var c = 0,
                            u = 0;
                        switch (a.which) {
                            case 37:
                                c = -30;
                                break;
                            case 38:
                                u = 30;
                                break;
                            case 39:
                                c = 30;
                                break;
                            case 40:
                                u = -30;
                                break;
                            case 33:
                                u = 90;
                                break;
                            case 32:
                            case 34:
                                u = -90;
                                break;
                            case 35:
                                u = a.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                break;
                            case 36:
                                u = a.ctrlKey ? e.scrollTop : t.containerHeight;
                                break;
                            default:
                                return
                        }
                        e.scrollTop = e.scrollTop - u, e.scrollLeft = e.scrollLeft + c, r(e), s = i(c, u), s && a.preventDefault()
                    }
                })
            }
            var o = e("../../lib/helper"),
                s = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                var t = s.get(e);
                n(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        13: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i, n) {
                    var o = e.scrollTop;
                    if (0 === i) {
                        if (!t.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && 0 > n) return !t.settings.wheelPropagation
                    }
                    var s = e.scrollLeft;
                    if (0 === n) {
                        if (!t.scrollbarXActive) return !1;
                        if (0 === s && 0 > i || s >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                    }
                    return !0
                }

                function n(e) {
                    var t = e.deltaX,
                        i = -1 * e.deltaY;
                    return ("undefined" == typeof t || "undefined" == typeof i) && (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t !== t && i !== i && (t = 0, i = e.wheelDelta), [t, i]
                }

                function s(t, i) {
                    var n = e.querySelector("textarea:hover");
                    if (n) {
                        var o = n.scrollHeight - n.clientHeight;
                        if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && 0 > i)) return !0;
                        var s = n.scrollLeft - n.clientWidth;
                        if (s > 0 && !(0 === n.scrollLeft && 0 > t || n.scrollLeft === s && t > 0)) return !0
                    }
                    return !1
                }

                function a(a) {
                    if (o.env.isWebKit || !e.querySelector("select:focus")) {
                        var c = n(a),
                            u = c[0],
                            d = c[1];
                        s(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? e.scrollTop = e.scrollTop - d * t.settings.wheelSpeed : e.scrollTop = e.scrollTop + u * t.settings.wheelSpeed, l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? e.scrollLeft = e.scrollLeft + u * t.settings.wheelSpeed : e.scrollLeft = e.scrollLeft - d * t.settings.wheelSpeed, l = !0) : (e.scrollTop = e.scrollTop - d * t.settings.wheelSpeed, e.scrollLeft = e.scrollLeft + u * t.settings.wheelSpeed), r(e), l = l || i(u, d), l && (a.stopPropagation(), a.preventDefault()))
                    }
                }
                var l = !1;
                "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", a) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", a)
            }
            var o = e("../../lib/helper"),
                s = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                var t = s.get(e);
                n(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        14: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                t.event.bind(e, "scroll", function() {
                    s(e)
                })
            }
            var o = e("../instances"),
                s = e("../update-geometry");
            t.exports = function(e) {
                var t = o.get(e);
                n(e, t)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                }

                function n() {
                    l || (l = setInterval(function() {
                        return s.get(e) ? (e.scrollTop = e.scrollTop + c.top, e.scrollLeft = e.scrollLeft + c.left, void r(e)) : void clearInterval(l)
                    }, 50))
                }

                function a() {
                    l && (clearInterval(l), l = null), o.stopScrolling(e)
                }
                var l = null,
                    c = {
                        top: 0,
                        left: 0
                    },
                    u = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(i()) ? u = !0 : (u = !1, a())
                }), t.event.bind(window, "mouseup", function() {
                    u && (u = !1, a())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (u) {
                        var i = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            s = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        i.x < s.left + 3 ? (c.left = -5, o.startScrolling(e, "x")) : i.x > s.right - 3 ? (c.left = 5, o.startScrolling(e, "x")) : c.left = 0, i.y < s.top + 3 ? (s.top + 3 - i.y < 5 ? c.top = -5 : c.top = -20, o.startScrolling(e, "y")) : i.y > s.bottom - 3 ? (i.y - s.bottom + 3 < 5 ? c.top = 5 : c.top = 20, o.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? a() : n()
                    }
                })
            }
            var o = e("../../lib/helper"),
                s = e("../instances"),
                r = e("../update-geometry");
            t.exports = function(e) {
                var t = s.get(e);
                n(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
        16: [function(e, t, i) {
            "use strict";

            function n(e, t, i, n) {
                function r(i, n) {
                    var o = e.scrollTop,
                        s = e.scrollLeft,
                        r = Math.abs(i),
                        a = Math.abs(n);
                    if (a > r) {
                        if (0 > n && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
                    } else if (r > a && (0 > i && s === t.contentWidth - t.containerWidth || i > 0 && 0 === s)) return !t.settings.swipePropagation;
                    return !0
                }

                function a(t, i) {
                    e.scrollTop = e.scrollTop - i, e.scrollLeft = e.scrollLeft - t, s(e)
                }

                function l() {
                    y = !0
                }

                function c() {
                    y = !1
                }

                function u(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function d(e) {
                    return e.targetTouches && 1 === e.targetTouches.length ? !0 : e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }

                function p(e) {
                    if (d(e)) {
                        w = !0;
                        var t = u(e);
                        m.pageX = t.pageX, m.pageY = t.pageY, g = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                    }
                }

                function h(e) {
                    if (!y && w && d(e)) {
                        var t = u(e),
                            i = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            n = i.pageX - m.pageX,
                            o = i.pageY - m.pageY;
                        a(n, o), m = i;
                        var s = (new Date).getTime(),
                            l = s - g;
                        l > 0 && (v.x = n / l, v.y = o / l, g = s), r(n, o) && (e.stopPropagation(), e.preventDefault())
                    }
                }

                function f() {
                    !y && w && (w = !1, clearInterval(b), b = setInterval(function() {
                        return o.get(e) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(b) : (a(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(b)
                    }, 10))
                }
                var m = {},
                    g = 0,
                    v = {},
                    b = null,
                    y = !1,
                    w = !1;
                i && (t.event.bind(window, "touchstart", l), t.event.bind(window, "touchend", c), t.event.bind(e, "touchstart", p), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", f)), n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", l), t.event.bind(window, "pointerup", c), t.event.bind(e, "pointerdown", p), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", l), t.event.bind(window, "MSPointerUp", c), t.event.bind(e, "MSPointerDown", p), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", f)))
            }
            var o = e("../instances"),
                s = e("../update-geometry");
            t.exports = function(e, t, i) {
                var s = o.get(e);
                n(e, s, t, i)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        17: [function(e, t, i) {
            "use strict";
            var n = e("../lib/class"),
                o = e("../lib/helper"),
                s = e("./instances"),
                r = e("./update-geometry"),
                a = e("./handler/click-rail"),
                l = e("./handler/drag-scrollbar"),
                c = e("./handler/keyboard"),
                u = e("./handler/mouse-wheel"),
                d = e("./handler/native-scroll"),
                p = e("./handler/selection"),
                h = e("./handler/touch");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, n.add(e, "ps-container");
                var i = s.add(e);
                i.settings = o.extend(i.settings, t), a(e), l(e), u(e), d(e), p(e), (o.env.supportsTouch || o.env.supportsIePointer) && h(e, o.env.supportsTouch, o.env.supportsIePointer), i.settings.useKeyboard && c(e), r(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, i) {
            "use strict";

            function n(e) {
                var t = this;
                t.settings = d.clone(l), t.containerWidth = null, t.containerHeight = null, t.contentWidth = null, t.contentHeight = null, t.isRtl = "rtl" === a.css(e, "direction"), t.event = new c, t.ownerDocument = e.ownerDocument || document, t.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), e), t.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), t.scrollbarXRail), t.scrollbarXActive = null, t.scrollbarXWidth = null, t.scrollbarXLeft = null, t.scrollbarXBottom = d.toInt(a.css(t.scrollbarXRail, "bottom")), t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom, t.scrollbarXTop = t.isScrollbarXUsingBottom ? null : d.toInt(a.css(t.scrollbarXRail, "top")), t.railBorderXWidth = d.toInt(a.css(t.scrollbarXRail, "borderLeftWidth")) + d.toInt(a.css(t.scrollbarXRail, "borderRightWidth")), t.railXMarginWidth = d.toInt(a.css(t.scrollbarXRail, "marginLeft")) + d.toInt(a.css(t.scrollbarXRail, "marginRight")), t.railXWidth = null, t.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), e), t.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), t.scrollbarYRail), t.scrollbarYActive = null, t.scrollbarYHeight = null, t.scrollbarYTop = null, t.scrollbarYRight = d.toInt(a.css(t.scrollbarYRail, "right")), t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight, t.scrollbarYLeft = t.isScrollbarYUsingRight ? null : d.toInt(a.css(t.scrollbarYRail, "left")), t.scrollbarYOuterWidth = t.isRtl ? d.outerWidth(t.scrollbarY) : null, t.railBorderYWidth = d.toInt(a.css(t.scrollbarYRail, "borderTopWidth")) + d.toInt(a.css(t.scrollbarYRail, "borderBottomWidth")), t.railYMarginHeight = d.toInt(a.css(t.scrollbarYRail, "marginTop")) + d.toInt(a.css(t.scrollbarYRail, "marginBottom")), t.railYHeight = null
            }

            function o(e) {
                return "undefined" == typeof e.dataset ? e.getAttribute("data-ps-id") : e.dataset.psId
            }

            function s(e, t) {
                "undefined" == typeof e.dataset ? e.setAttribute("data-ps-id", t) : e.dataset.psId = t
            }

            function r(e) {
                "undefined" == typeof e.dataset ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
            }
            var a = e("../lib/dom"),
                l = e("./default-setting"),
                c = e("../lib/event-manager"),
                u = e("../lib/guid"),
                d = e("../lib/helper"),
                p = {};
            i.add = function(e) {
                var t = u();
                return s(e, t), p[t] = new n(e), p[t]
            }, i.remove = function(e) {
                delete p[o(e)], r(e)
            }, i.get = function(e) {
                return p[o(e)]
            }
        }, {
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }

            function o(e, t) {
                var i = {
                    width: t.railXWidth
                };
                t.isRtl ? i.left = e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, r.css(t.scrollbarXRail, i);
                var n = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - e.scrollLeft - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, r.css(t.scrollbarYRail, n), r.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }), r.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                })
            }
            var s = e("../lib/class"),
                r = e("../lib/dom"),
                a = e("../lib/helper"),
                l = e("./instances");
            t.exports = function(e) {
                var t = l.get(e);
                t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || r.appendTo(t.scrollbarXRail, e), e.contains(t.scrollbarYRail) || r.appendTo(t.scrollbarYRail, e), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.scrollbarXWidth = n(t, a.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = a.toInt(e.scrollLeft * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : (t.scrollbarXActive = !1, t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.scrollbarYHeight = n(t, a.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = a.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : (t.scrollbarYActive = !1, t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0), t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), s[t.scrollbarXActive ? "add" : "remove"](e, "ps-active-x"), s[t.scrollbarYActive ? "add" : "remove"](e, "ps-active-y")
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        20: [function(e, t, i) {
            "use strict";
            var n = e("../lib/dom"),
                o = e("./instances"),
                s = e("./update-geometry");
            t.exports = function(e) {
                var t = o.get(e);
                n.css(t.scrollbarXRail, "display", "none"), n.css(t.scrollbarYRail, "display", "none"), s(e), n.css(t.scrollbarXRail, "display", "block"), n.css(t.scrollbarYRail, "display", "block")
            }
        }, {
            "../lib/dom": 3,
            "./instances": 18,
            "./update-geometry": 19
        }]
    }, {}, [1]), ! function(e, t, i, n) {
        "use strict";
        e.fn.sidebar = function(o) {
            var s, r = e(this),
                a = e(t),
                l = e(i),
                c = e("html"),
                u = e("head"),
                d = r.selector || "",
                p = (new Date).getTime(),
                h = [],
                f = arguments[0],
                m = "string" == typeof f,
                g = [].slice.call(arguments, 1),
                v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 0)
                };
            return r.each(function() {
                var r, b, y, w, x, S, C = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
                    T = C.selector,
                    k = C.className,
                    E = C.namespace,
                    A = C.regExp,
                    D = C.error,
                    _ = "." + E,
                    L = "module-" + E,
                    N = e(this),
                    H = e(C.context),
                    P = N.children(T.sidebar),
                    z = H.children(T.fixed),
                    F = H.children(T.pusher),
                    M = this,
                    O = N.data(L);
                S = {
                    initialize: function() {
                        S.debug("Initializing sidebar", o), S.create.id(), x = S.get.transitionEvent(), S.is.ios() && S.set.ios(), C.delaySetup ? v(S.setup.layout) : S.setup.layout(), v(function() {
                            S.setup.cache()
                        }), S.instantiate()
                    },
                    instantiate: function() {
                        S.verbose("Storing instance of module", S), O = S, N.data(L, S)
                    },
                    create: {
                        id: function() {
                            y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, S.verbose("Creating unique id for element", y)
                        }
                    },
                    destroy: function() {
                        S.verbose("Destroying previous module for", N), N.off(_).removeData(L), S.is.ios() && S.remove.ios(), H.off(b), a.off(b), l.off(b)
                    },
                    event: {
                        clickaway: function(e) {
                            var t = F.find(e.target).length > 0 || F.is(e.target),
                                i = H.is(e.target);
                            t && (S.verbose("User clicked on dimmed page"), S.hide()), i && (S.verbose("User clicked on dimmable context (scaled out page)"), S.hide())
                        },
                        touch: function(e) {},
                        containScroll: function(e) {
                            M.scrollTop <= 0 && (M.scrollTop = 1), M.scrollTop + M.offsetHeight >= M.scrollHeight && (M.scrollTop = M.scrollHeight - M.offsetHeight - 1)
                        },
                        scroll: function(t) {
                            0 === e(t.target).closest(T.sidebar).length && t.preventDefault()
                        }
                    },
                    bind: {
                        clickaway: function() {
                            S.verbose("Adding clickaway events to context", H), C.closable && H.on("click" + b, S.event.clickaway).on("touchend" + b, S.event.clickaway)
                        },
                        scrollLock: function() {
                            C.scrollLock && (S.debug("Disabling page scroll"), a.on("DOMMouseScroll" + b, S.event.scroll)), S.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + b, S.event.touch), N.on("scroll" + _, S.event.containScroll)
                        }
                    },
                    unbind: {
                        clickaway: function() {
                            S.verbose("Removing clickaway events from context", H), H.off(b)
                        },
                        scrollLock: function() {
                            S.verbose("Removing scroll lock from page"), l.off(b), a.off(b), N.off("scroll" + _)
                        }
                    },
                    add: {
                        inlineCSS: function() {
                            var t, i = S.cache.width || N.outerWidth(),
                                n = S.cache.height || N.outerHeight(),
                                o = S.is.rtl(),
                                s = S.get.direction(),
                                a = {
                                    left: i,
                                    right: -i,
                                    top: n,
                                    bottom: -n
                                };
                            o && (S.verbose("RTL detected, flipping widths"), a.left = -i, a.right = i), t = "<style>", "left" === s || "right" === s ? (S.debug("Adding CSS rules for animation distance", i), t += " .ui.visible." + s + ".sidebar ~ .fixed, .ui.visible." + s + ".sidebar ~ .pusher {   -webkit-transformsss: translate3d(" + a[s] + "px, 0, 0);           transformsss: translate3d(" + a[s] + "px, 0, 0); }") : ("top" === s || "bottom" == s) && (t += " .ui.visible." + s + ".sidebar ~ .fixed, .ui.visible." + s + ".sidebar ~ .pusher {   -webkit-transformsss: translate3d(0, " + a[s] + "px, 0);           transformsss: translate3d(0, " + a[s] + "px, 0); }"), S.is.ie() && ("left" === s || "right" === s ? (S.debug("Adding CSS rules for animation distance", i), t += " body.pushable > .ui.visible." + s + ".sidebar ~ .pusher:after {   -webkit-transformsss: translate3d(" + a[s] + "px, 0, 0);           transformsss: translate3d(" + a[s] + "px, 0, 0); }") : ("top" === s || "bottom" == s) && (t += " body.pushable > .ui.visible." + s + ".sidebar ~ .pusher:after {   -webkit-transformsss: translate3d(0, " + a[s] + "px, 0);           transformsss: translate3d(0, " + a[s] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transformsss: translate3d(0px, 0, 0);           transformsss: translate3d(0px, 0, 0); }"), t += "</style>", r = e(t).appendTo(u), S.debug("Adding sizing css to head", r)
                        }
                    },
                    refresh: function() {
                        S.verbose("Refreshing selector cache"), H = e(C.context), P = H.children(T.sidebar), F = H.children(T.pusher), z = H.children(T.fixed), S.clear.cache()
                    },
                    refreshSidebars: function() {
                        S.verbose("Refreshing other sidebars"), P = H.children(T.sidebar)
                    },
                    repaint: function() {
                        S.verbose("Forcing repaint event"), M.style.display = "none", M.offsetHeight, M.scrollTop = M.scrollTop, M.style.display = ""
                    },
                    setup: {
                        cache: function() {
                            S.cache = {
                                width: N.outerWidth(),
                                height: N.outerHeight(),
                                rtl: "rtl" == N.css("direction")
                            }
                        },
                        layout: function() {
                            0 === H.children(T.pusher).length && (S.debug("Adding wrapper element for sidebar"), S.error(D.pusher), F = e('<div class="pusher" />'), H.children().not(T.omitted).not(P).wrapAll(F), S.refresh()), (0 === N.nextAll(T.pusher).length || N.nextAll(T.pusher)[0] !== F[0]) && (S.debug("Moved sidebar to correct parent element"), S.error(D.movedSidebar, M), N.detach().prependTo(H), S.refresh()), S.clear.cache(), S.set.pushable(), S.set.direction()
                        }
                    },
                    attachEvents: function(t, i) {
                        var n = e(t);
                        i = e.isFunction(S[i]) ? S[i] : S.toggle, n.length > 0 ? (S.debug("Attaching sidebar events to element", t, i), n.on("click" + _, i)) : S.error(D.notFound, t)
                    },
                    show: function(t) {
                        if (t = e.isFunction(t) ? t : function() {}, S.is.hidden()) {
                            if (S.refreshSidebars(), C.overlay && (S.error(D.overlay), C.transition = "overlay"), S.refresh(), S.othersActive())
                                if (S.debug("Other sidebars currently visible"), C.exclusive) {
                                    if ("overlay" != C.transition) return void S.hideOthers(S.show);
                                    S.hideOthers()
                                } else C.transition = "overlay";
                            S.pushPage(function() {
                                t.call(M), C.onShow.call(M)
                            }), C.onChange.call(M), C.onVisible.call(M)
                        } else S.debug("Sidebar is already visible")
                    },
                    hide: function(t) {
                        t = e.isFunction(t) ? t : function() {}, (S.is.visible() || S.is.animating()) && (S.debug("Hiding sidebar", t), S.refreshSidebars(), S.pullPage(function() {
                            t.call(M), C.onHidden.call(M)
                        }), C.onChange.call(M), C.onHide.call(M))
                    },
                    othersAnimating: function() {
                        return P.not(N).filter("." + k.animating).length > 0
                    },
                    othersVisible: function() {
                        return P.not(N).filter("." + k.visible).length > 0
                    },
                    othersActive: function() {
                        return S.othersVisible() || S.othersAnimating()
                    },
                    hideOthers: function(e) {
                        var t = P.not(N).filter("." + k.visible),
                            i = t.length,
                            n = 0;
                        e = e || function() {}, t.sidebar("hide", function() {
                            n++, n == i && e()
                        })
                    },
                    toggle: function() {
                        S.verbose("Determining toggled direction"), S.is.hidden() ? S.show() : S.hide()
                    },
                    pushPage: function(t) {
                        var i, n, o, s = S.get.transition(),
                            r = "overlay" === s || S.othersActive() ? N : F;
                        t = e.isFunction(t) ? t : function() {}, "scale down" == C.transition && S.scrollToTop(), S.set.transition(s), S.repaint(), i = function() {
                            S.bind.clickaway(), S.add.inlineCSS(), S.set.animating(), S.set.visible()
                        }, n = function() {
                            S.set.dimmed()
                        }, o = function(e) {
                            e.target == r[0] && (r.off(x + b, o), S.remove.animating(), S.bind.scrollLock(), t.call(M))
                        }, r.off(x + b), r.on(x + b, o), v(i), C.dimPage && !S.othersVisible() && v(n)
                    },
                    pullPage: function(t) {
                        var i, n, o = S.get.transition(),
                            s = "overlay" == o || S.othersActive() ? N : F;
                        t = e.isFunction(t) ? t : function() {}, S.verbose("Removing context push state", S.get.direction()), S.unbind.clickaway(), S.unbind.scrollLock(), i = function() {
                            S.set.transition(o), S.set.animating(), S.remove.visible(), C.dimPage && !S.othersVisible() && F.removeClass(k.dimmed)
                        }, n = function(e) {
                            e.target == s[0] && (s.off(x + b, n), S.remove.animating(), S.remove.transition(), S.remove.inlineCSS(), ("scale down" == o || C.returnScroll && S.is.mobile()) && S.scrollBack(), t.call(M))
                        }, s.off(x + b), s.on(x + b, n), v(i)
                    },
                    scrollToTop: function() {
                        S.verbose("Scrolling to top of page to avoid animation issues"), w = e(t).scrollTop(), N.scrollTop(0), t.scrollTo(0, 0)
                    },
                    scrollBack: function() {
                        S.verbose("Scrolling back to original page position"), t.scrollTo(0, w)
                    },
                    clear: {
                        cache: function() {
                            S.verbose("Clearing cached dimensions"), S.cache = {}
                        }
                    },
                    set: {
                        ios: function() {
                            c.addClass(k.ios)
                        },
                        pushed: function() {
                            H.addClass(k.pushed)
                        },
                        pushable: function() {
                            H.addClass(k.pushable)
                        },
                        dimmed: function() {
                            F.addClass(k.dimmed)
                        },
                        active: function() {
                            N.addClass(k.active)
                        },
                        animating: function() {
                            N.addClass(k.animating)
                        },
                        transition: function(e) {
                            e = e || S.get.transition(), N.addClass(e)
                        },
                        direction: function(e) {
                            e = e || S.get.direction(), N.addClass(k[e])
                        },
                        visible: function() {
                            N.addClass(k.visible)
                        },
                        overlay: function() {
                            N.addClass(k.overlay)
                        }
                    },
                    remove: {
                        inlineCSS: function() {
                            S.debug("Removing inline css styles", r), r && r.length > 0 && r.remove()
                        },
                        ios: function() {
                            c.removeClass(k.ios)
                        },
                        pushed: function() {
                            H.removeClass(k.pushed)
                        },
                        pushable: function() {
                            H.removeClass(k.pushable)
                        },
                        active: function() {
                            N.removeClass(k.active)
                        },
                        animating: function() {
                            N.removeClass(k.animating)
                        },
                        transition: function(e) {
                            e = e || S.get.transition(), N.removeClass(e)
                        },
                        direction: function(e) {
                            e = e || S.get.direction(), N.removeClass(k[e])
                        },
                        visible: function() {
                            N.removeClass(k.visible)
                        },
                        overlay: function() {
                            N.removeClass(k.overlay)
                        }
                    },
                    get: {
                        direction: function() {
                            return N.hasClass(k.top) ? k.top : N.hasClass(k.right) ? k.right : N.hasClass(k.bottom) ? k.bottom : k.left
                        },
                        transition: function() {
                            var e, t = S.get.direction();
                            return e = S.is.mobile() ? "auto" == C.mobileTransition ? C.defaultTransition.mobile[t] : C.mobileTransition : "auto" == C.transition ? C.defaultTransition.computer[t] : C.transition, S.verbose("Determined transition", e), e
                        },
                        transitionEvent: function() {
                            var e, t = i.createElement("element"),
                                o = {
                                    transition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    MozTransition: "transitionend",
                                    WebkitTransition: "webkitTransitionEnd"
                                };
                            for (e in o)
                                if (t.style[e] !== n) return o[e]
                        }
                    },
                    is: {
                        ie: function() {
                            var e = !t.ActiveXObject && "ActiveXObject" in t,
                                i = "ActiveXObject" in t;
                            return e || i
                        },
                        ios: function() {
                            var e = navigator.userAgent,
                                t = e.match(A.ios),
                                i = e.match(A.mobileChrome);
                            return t && !i ? (S.verbose("Browser was found to be iOS", e), !0) : !1
                        },
                        mobile: function() {
                            var e = navigator.userAgent,
                                t = e.match(A.mobile);
                            return t ? (S.verbose("Browser was found to be mobile", e), !0) : (S.verbose("Browser is not mobile, using regular transition", e), !1)
                        },
                        hidden: function() {
                            return !S.is.visible()
                        },
                        visible: function() {
                            return N.hasClass(k.visible)
                        },
                        open: function() {
                            return S.is.visible()
                        },
                        closed: function() {
                            return S.is.hidden()
                        },
                        vertical: function() {
                            return N.hasClass(k.top)
                        },
                        animating: function() {
                            return H.hasClass(k.animating)
                        },
                        rtl: function() {
                            return S.cache.rtl === n && (S.cache.rtl = "rtl" == N.css("direction")), S.cache.rtl
                        }
                    },
                    setting: function(t, i) {
                        if (S.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, C, t);
                        else {
                            if (i === n) return C[t];
                            C[t] = i
                        }
                    },
                    internal: function(t, i) {
                        if (e.isPlainObject(t)) e.extend(!0, S, t);
                        else {
                            if (i === n) return S[t];
                            S[t] = i
                        }
                    },
                    debug: function() {
                        C.debug && (C.performsssance ? S.performsssance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), S.debug.apply(console, arguments)))
                    },
                    verbose: function() {
                        C.verbose && C.debug && (C.performsssance ? S.performsssance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), S.verbose.apply(console, arguments)))
                    },
                    error: function() {
                        S.error = Function.prototype.bind.call(console.error, console, C.name + ":"), S.error.apply(console, arguments)
                    },
                    performsssance: {
                        log: function(e) {
                            var t, i, n;
                            C.performsssance && (t = (new Date).getTime(), n = p || t, i = t - n, p = t, h.push({
                                Name: e[0],
                                Arguments: [].slice.call(e, 1) || "",
                                Element: M,
                                "Execution Time": i
                            })), clearTimeout(S.performsssance.timer), S.performsssance.timer = setTimeout(S.performsssance.display, 500)
                        },
                        display: function() {
                            var t = C.name + ":",
                                i = 0;
                            p = !1, clearTimeout(S.performsssance.timer), e.each(h, function(e, t) {
                                i += t["Execution Time"]
                            }), t += " " + i + "ms", d && (t += " '" + d + "'"), (console.group !== n || console.table !== n) && h.length > 0 && (console.groupCollapsed(t), console.table ? console.table(h) : e.each(h, function(e, t) {
                                console.log(t.Name + ": " + t["Execution Time"] + "ms")
                            }), console.groupEnd()), h = []
                        }
                    },
                    invoke: function(t, i, o) {
                        var r, a, l, c = O;
                        return i = i || g, o = M || o, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                            var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                            if (e.isPlainObject(c[s]) && i != r) c = c[s];
                            else {
                                if (c[s] !== n) return a = c[s], !1;
                                if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : (S.error(D.method, t), !1);
                                c = c[o]
                            }
                        })), e.isFunction(a) ? l = a.apply(o, i) : a !== n && (l = a), e.isArray(s) ? s.push(l) : s !== n ? s = [s, l] : l !== n && (s = l), a
                    }
                }, m ? (O === n && S.initialize(), S.invoke(f)) : (O !== n && S.invoke("destroy"), S.initialize())
            }), s !== n ? s : this
        }, e.fn.sidebar.settings = {
            name: "Sidebar",
            namespace: "sidebar",
            debug: !1,
            verbose: !1,
            performsssance: !0,
            transition: "auto",
            mobileTransition: "auto",
            defaultTransition: {
                computer: {
                    left: "uncover",
                    right: "uncover",
                    top: "overlay",
                    bottom: "overlay"
                },
                mobile: {
                    left: "uncover",
                    right: "uncover",
                    top: "overlay",
                    bottom: "overlay"
                }
            },
            context: "body",
            exclusive: !1,
            closable: !0,
            dimPage: !0,
            scrollLock: !1,
            returnScroll: !1,
            delaySetup: !1,
            duration: 500,
            onChange: function() {},
            onShow: function() {},
            onHide: function() {},
            onHidden: function() {},
            onVisible: function() {},
            className: {
                active: "active",
                animating: "animating",
                dimmed: "dimmed",
                ios: "ios",
                pushable: "pushable",
                pushed: "pushed",
                right: "right",
                top: "top",
                left: "left",
                bottom: "bottom",
                visible: "visible"
            },
            selector: {
                fixed: ".fixed",
                omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
                pusher: ".pusher",
                sidebar: ".ui.sidebar"
            },
            regExp: {
                ios: /(iPad|iPhone|iPod)/g,
                mobileChrome: /(CriOS)/g,
                mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
            },
            error: {
                method: "The method you called is not defined.",
                pusher: "Had to add pusher element. For optimal performsssance make sure body content is inside a pusher element",
                movedSidebar: "Had to move sidebar. For optimal performsssance make sure sidebar and pusher are direct children of your body tag",
                overlay: "The overlay setting is no longer supported, use animation: overlay",
                notFound: "There were no elements that matched the specified selector"
            }
        }
    }(jQuery, window, document),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, n) {
                var o, s, r, a = this;
                if (a.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, a.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformssssEnabled: !1
                    }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.shouldClick = !0, a.$slider = e(t), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, o = e(t).data("slick") || {}, a.options = e.extend({}, a.defaults, o, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, s = a.options.responsive || null, s && s.length > -1) {
                    a.respondTo = a.options.respondTo || "window";
                    for (r in s) s.hasOwnProperty(r) && (a.breakpoints.push(s[r].breakpoint), a.breakpointSettings[s[r].breakpoint] = s[r].settings);
                    a.breakpoints.sort(function(e, t) {
                        return a.options.mobileFirst === !0 ? e - t : t - e
                    })
                }
                "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a.hidden = "msHidden", a.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.instanceUid = i++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.init(), a.checkResponsive(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                n = null !== i.options.asNavFor ? e(i.options.asNavFor).slick("getSlick") : null;
            null !== n && n.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
                i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function(t) {
            var i, n, o, s = this,
                r = s.$slider.width(),
                a = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? o = a : "slider" === s.respondTo ? o = r : "min" === s.respondTo && (o = Math.min(a, r)), s.originalSettings.responsive && s.originalSettings.responsive.length > -1 && null !== s.originalSettings.responsive) {
                n = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
                null !== n ? null !== s.activeBreakpoint ? n !== s.activeBreakpoint && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick() : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[n]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick() : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[n]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, o, s, r = this,
                a = e(t.target);
            switch (a.is("a") && t.preventDefault(), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i);
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, n = this;
            if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = i;
                        break
                    }
                    i = t[o]
                }
            return e
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.off(".slick"), e(window).off(".slick-" + t.instanceUid), e(document).off(".slick-" + t.instanceUid), t.$slider.html(t.$slides)
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: 1e3
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: 1e3
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (e.options.infinite === !0) n = Math.ceil(e.slideCount / e.options.slidesToScroll);
            else if (e.options.centerMode === !0) n = e.slideCount;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) : (i = -1 * t.slideCount, n = -1 * t.slideCount, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, s) {
                return s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * o.swipeLeft ? (i = s, !1) : void 0
            }), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function() {
            var t = this;
            e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [t])
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }).on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.autoplay === !0 && (e(document).on(t.visibilityChange, function() {
                t.visibility()
            }), t.options.pauseOnHover === !0 && (t.$list.on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }), t.$list.on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            }))), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), e(window).on("resize.slick.slick-" + t.instanceUid, function() {
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), e("*[draggable!=true]", t.$slideTrack).on("dragstart", function(e) {
                e.preventDefault()
            }), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.progressiveLazyLoad = function() {
            var t, i, n = this;
            t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
            }).error(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                i = t.currentSlide;
            t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !0)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length));
            else if (e.options.variableWidth === !0) {
                var t = 0;
                e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
                    t += e.listWidth
                }), e.$slideTrack.width(Math.ceil(t) + 1)
            } else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
            var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, o) {
                t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, i) {
            var n = this;
            n.options[e] = t, i === !0 && (n.unload(), n.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            s.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
            return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), void i.asNavFor(n)) : void i.slideHandler(n)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), n = e, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n,
                l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? l.fadeSlide(o, function() {
                    l.postSlide(o)
                }) : l.postSlide(o), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
                    l.postSlide(o)
                }) : l.postSlide(o))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i = this;
            if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
                case "left":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
                    break;
                case "right":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || s && 1 !== s.length ? !1 : (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function() {
            var e = this;
            e.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
        }, e.fn.slick = function() {
            var e, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length,
                r = 0;
            for (r; s > r; r++)
                if ("object" == typeof n || "undefined" == typeof n ? i[r].slick = new t(i[r], n) : e = i[r].slick[n].apply(i[r].slick, o), "undefined" != typeof e) return e;
            return i
        }, e(function() {
            e("[data-slick]").slick()
        })
    }), ! function(e, t, i, n) {
        "use strict";
        e.fn.tab = function(o) {
            var s, r = e(e.isFunction(this) ? t : this),
                a = r.selector || "",
                l = (new Date).getTime(),
                c = [],
                u = arguments[0],
                d = "string" == typeof u,
                p = [].slice.call(arguments, 1),
                h = !1;
            return r.each(function() {
                var f, m, g, v, b, y, w = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
                    x = w.className,
                    S = w.metadata,
                    C = w.selector,
                    T = w.error,
                    k = "." + w.namespace,
                    E = "module-" + w.namespace,
                    A = e(this),
                    D = {},
                    _ = !0,
                    L = 0,
                    N = this,
                    H = A.data(E);
                b = {
                    initialize: function() {
                        b.debug("Initializing tab menu item", A), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", w.context, m), w.auto && b.set.auto(), b.bind.events(), w.history && !h && (b.initializeHistory(), h = !0), b.instantiate()
                    },
                    instantiate: function() {
                        b.verbose("Storing instance of module", b), H = b, A.data(E, b)
                    },
                    destroy: function() {
                        b.debug("Destroying tabs", A), A.removeData(E).off(k)
                    },
                    bind: {
                        events: function() {
                            e.isWindow(N) || (b.debug("Attaching tab activation events to element", A), A.on("click" + k, b.event.click))
                        }
                    },
                    determineTabs: function() {
                        var t;
                        "parent" === w.context ? (A.closest(C.ui).length > 0 ? (t = A.closest(C.ui), b.verbose("Using closest UI element as parent", t)) : t = A, f = t.parent(), b.verbose("Determined parent element for creating context", f)) : w.context ? (f = e(w.context), b.verbose("Using selector for tab context", w.context, f)) : f = e("body"), w.childrenOnly ? (m = f.children(C.tabs), b.debug("Searching tab context children for tabs", f, m)) : (m = f.find(C.tabs), b.debug("Searching tab context for tabs", f, m))
                    },
                    fix: {
                        callbacks: function() {
                            e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(T.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(T.legacyInit, o.onFirstLoad)), w = e.extend(!0, {}, e.fn.tab.settings, o))
                        }
                    },
                    initializeHistory: function() {
                        if (b.debug("Initializing page state"), e.address === n) return b.error(T.state), !1;
                        if ("state" == w.historyType) {
                            if (b.debug("Using HTML5 to manage state"), w.path === !1) return b.error(T.path), !1;
                            e.address.history(!0).state(w.path)
                        }
                        e.address.bind("change", b.event.history.change)
                    },
                    event: {
                        click: function(t) {
                            var i = e(this).data(S.tab);
                            i !== n ? (w.history ? (b.verbose("Updating page state", t), e.address.value(i)) : (b.verbose("Changing tab", t), b.changeTab(i)), t.preventDefault()) : b.debug("No tab specified")
                        },
                        history: {
                            change: function(t) {
                                var i = t.pathNames.join("/") || b.get.initialPath(),
                                    o = w.templates.determineTitle(i) || !1;
                                b.performance.display(), b.debug("History change event", i, t), y = t, i !== n && b.changeTab(i), o && e.address.title(o)
                            }
                        }
                    },
                    refresh: function() {
                        g && (b.debug("Refreshing tab", g), b.changeTab(g))
                    },
                    cache: {
                        read: function(e) {
                            return e !== n ? D[e] : !1
                        },
                        add: function(e, t) {
                            e = e || g, b.debug("Adding cached content for", e), D[e] = t
                        },
                        remove: function(e) {
                            e = e || g, b.debug("Removing cached content for", e), delete D[e]
                        }
                    },
                    set: {
                        auto: function() {
                            var t = "string" == typeof w.path ? w.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                            b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(w.apiSettings) ? w.apiSettings.url = t : w.apiSettings = {
                                url: t
                            }
                        },
                        loading: function(e) {
                            var t = b.get.tabElement(e),
                                i = t.hasClass(x.loading);
                            i || (b.verbose("Setting loading state for", t), t.addClass(x.loading).siblings(m).removeClass(x.active + " " + x.loading), t.length > 0 && w.onRequest.call(t[0], e))
                        },
                        state: function(t) {
                            e.address.value(t)
                        }
                    },
                    changeTab: function(i) {
                        var n = t.history && t.history.pushState,
                            o = n && w.ignoreFirstLoad && _,
                            s = w.auto || e.isPlainObject(w.apiSettings),
                            r = s && !o ? b.utilities.pathToArray(i) : b.get.defaultPathArray(i);
                        i = b.utilities.arrayToPath(r), e.each(r, function(t, n) {
                            var a, l, c, u, d = r.slice(0, t + 1),
                                p = b.utilities.arrayToPath(d),
                                h = b.is.tab(p),
                                m = t + 1 == r.length,
                                C = b.get.tabElement(p);
                            if (b.verbose("Looking for tab", n), h) {
                                if (b.verbose("Tab was found", n), g = p, v = b.utilities.filterArray(r, d), m ? u = !0 : (l = r.slice(0, t + 2), c = b.utilities.arrayToPath(l), u = !b.is.tab(c), u && b.verbose("Tab parameters found", l)), u && s) return o ? (b.debug("Ignoring remote content on first tab load", p), _ = !1, b.cache.add(i, C.html()), b.activate.all(p), w.onFirstLoad.call(C[0], p, v, y), w.onLoad.call(C[0], p, v, y)) : (b.activate.navigation(p), b.fetch.content(p, i)), !1;
                                b.debug("Opened local tab", p), b.activate.all(p), b.cache.read(p) || (b.cache.add(p, !0), b.debug("First time tab loaded calling tab init"), w.onFirstLoad.call(C[0], p, v, y)), w.onLoad.call(C[0], p, v, y)
                            } else {
                                if (-1 != i.search("/") || "" === i) return b.error(T.missingTab, A, f, p), !1;
                                if (a = e("#" + i + ', a[name="' + i + '"]'), p = a.closest("[data-tab]").data(S.tab), C = b.get.tabElement(p), a && a.length > 0 && p) return b.debug("Anchor link used, opening parent tab", C, a), C.hasClass(x.active) || setTimeout(function() {
                                    b.scrollTo(a)
                                }, 0), b.activate.all(p), b.cache.read(p) || (b.cache.add(p, !0), b.debug("First time tab loaded calling tab init"), w.onFirstLoad.call(C[0], p, v, y)), w.onLoad.call(C[0], p, v, y), !1
                            }
                        })
                    },
                    scrollTo: function(t) {
                        var n = t && t.length > 0 ? t.offset().top : !1;
                        n !== !1 && (b.debug("Forcing scroll to an in-page link in a hidden tab", n, t), e(i).scrollTop(n))
                    },
                    update: {
                        content: function(e, t, i) {
                            var o = b.get.tabElement(e),
                                s = o[0];
                            i = i !== n ? i : w.evaluateScripts, i ? (b.debug("Updating HTML and evaluating inline scripts", e, t), o.html(t)) : (b.debug("Updating HTML", e, t), s.innerHTML = t)
                        }
                    },
                    fetch: {
                        content: function(t, i) {
                            var o, s, r = b.get.tabElement(t),
                                a = {
                                    dataType: "html",
                                    encodeParameters: !1,
                                    on: "now",
                                    cache: w.alwaysRefresh,
                                    headers: {
                                        "X-Remote": !0
                                    },
                                    onSuccess: function(e) {
                                        b.cache.add(i, e), b.update.content(t, e), t == g ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), w.onFirstLoad.call(r[0], t, v, y), w.onLoad.call(r[0], t, v, y)
                                    },
                                    urlData: {
                                        tab: i
                                    }
                                },
                                l = r.api("get request") || !1,
                                c = l && "pending" === l.state();
                            i = i || t, s = b.cache.read(i), w.cache && s ? (b.activate.tab(t), b.debug("Adding cached content", i), "once" == w.evaluateScripts ? b.update.content(t, s, !1) : b.update.content(t, s), w.onLoad.call(r[0], t, v, y)) : c ? (b.set.loading(t), b.debug("Content is already loading", i)) : e.api !== n ? (o = e.extend(!0, {}, w.apiSettings, a), b.debug("Retrieving remote content", i, o), b.set.loading(t), r.api(o)) : b.error(T.api)
                        }
                    },
                    activate: {
                        all: function(e) {
                            b.activate.tab(e), b.activate.navigation(e)
                        },
                        tab: function(e) {
                            var t = b.get.tabElement(e),
                                i = t.hasClass(x.active);
                            b.verbose("Showing tab content for", t), i || (t.addClass(x.active).siblings(m).removeClass(x.active + " " + x.loading), t.length > 0 && w.onVisible.call(t[0], e))
                        },
                        navigation: function(e) {
                            var t = b.get.navElement(e),
                                i = t.hasClass(x.active);
                            b.verbose("Activating tab navigation for", t, e), i || t.addClass(x.active).siblings(r).removeClass(x.active + " " + x.loading)
                        }
                    },
                    deactivate: {
                        all: function() {
                            b.deactivate.navigation(), b.deactivate.tabs()
                        },
                        navigation: function() {
                            r.removeClass(x.active)
                        },
                        tabs: function() {
                            m.removeClass(x.active + " " + x.loading)
                        }
                    },
                    is: {
                        tab: function(e) {
                            return e !== n ? b.get.tabElement(e).length > 0 : !1
                        }
                    },
                    get: {
                        initialPath: function() {
                            return r.eq(0).data(S.tab) || m.eq(0).data(S.tab)
                        },
                        path: function() {
                            return e.address.value()
                        },
                        defaultPathArray: function(e) {
                            return b.utilities.pathToArray(b.get.defaultPath(e))
                        },
                        defaultPath: function(e) {
                            var t = r.filter("[data-" + S.tab + '^="' + e + '/"]').eq(0),
                                i = t.data(S.tab) || !1;
                            if (i) {
                                if (b.debug("Found default tab", i), L < w.maxDepth) return L++, b.get.defaultPath(i);
                                b.error(T.recursion)
                            } else b.debug("No default tabs found for", e, m);
                            return L = 0, e
                        },
                        navElement: function(e) {
                            return e = e || g, r.filter("[data-" + S.tab + '="' + e + '"]')
                        },
                        tabElement: function(e) {
                            var t, i, n, o;
                            return e = e || g, n = b.utilities.pathToArray(e), o = b.utilities.last(n), t = m.filter("[data-" + S.tab + '="' + e + '"]'), i = m.filter("[data-" + S.tab + '="' + o + '"]'), t.length > 0 ? t : i
                        },
                        tab: function() {
                            return g
                        }
                    },
                    utilities: {
                        filterArray: function(t, i) {
                            return e.grep(t, function(t) {
                                return -1 == e.inArray(t, i)
                            })
                        },
                        last: function(t) {
                            return e.isArray(t) ? t[t.length - 1] : !1
                        },
                        pathToArray: function(e) {
                            return e === n && (e = g), "string" == typeof e ? e.split("/") : [e]
                        },
                        arrayToPath: function(t) {
                            return e.isArray(t) ? t.join("/") : !1
                        }
                    },
                    setting: function(t, i) {
                        if (b.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, w, t);
                        else {
                            if (i === n) return w[t];
                            w[t] = i
                        }
                    },
                    internal: function(t, i) {
                        if (e.isPlainObject(t)) e.extend(!0, b, t);
                        else {
                            if (i === n) return b[t];
                            b[t] = i
                        }
                    },
                    debug: function() {
                        w.debug && (w.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, w.name + ":"), b.debug.apply(console, arguments)))
                    },
                    verbose: function() {
                        w.verbose && w.debug && (w.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, w.name + ":"), b.verbose.apply(console, arguments)))
                    },
                    error: function() {
                        b.error = Function.prototype.bind.call(console.error, console, w.name + ":"), b.error.apply(console, arguments)
                    },
                    performance: {
                        log: function(e) {
                            var t, i, n;
                            w.performance && (t = (new Date).getTime(), n = l || t, i = t - n, l = t, c.push({
                                Name: e[0],
                                Arguments: [].slice.call(e, 1) || "",
                                Element: N,
                                "Execution Time": i
                            })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                        },
                        display: function() {
                            var t = w.name + ":",
                                i = 0;
                            l = !1, clearTimeout(b.performance.timer), e.each(c, function(e, t) {
                                i += t["Execution Time"]
                            }), t += " " + i + "ms", a && (t += " '" + a + "'"), (console.group !== n || console.table !== n) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                                console.log(t.Name + ": " + t["Execution Time"] + "ms")
                            }), console.groupEnd()), c = []
                        }
                    },
                    invoke: function(t, i, o) {
                        var r, a, l, c = H;
                        return i = i || p, o = N || o, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                            var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                            if (e.isPlainObject(c[s]) && i != r) c = c[s];
                            else {
                                if (c[s] !== n) return a = c[s], !1;
                                if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : (b.error(T.method, t), !1);
                                c = c[o]
                            }
                        })), e.isFunction(a) ? l = a.apply(o, i) : a !== n && (l = a), e.isArray(s) ? s.push(l) : s !== n ? s = [s, l] : l !== n && (s = l), a
                    }
                }, d ? (H === n && b.initialize(), b.invoke(u)) : (H !== n && H.invoke("destroy"), b.initialize())
            }), s !== n ? s : this
        }, e.tab = function() {
            e(t).tab.apply(this, arguments)
        }, e.fn.tab.settings = {
            name: "Tab",
            namespace: "tab",
            debug: !1,
            verbose: !1,
            performance: !0,
            auto: !1,
            history: !1,
            historyType: "hash",
            path: !1,
            context: !1,
            childrenOnly: !1,
            maxDepth: 25,
            alwaysRefresh: !1,
            cache: !0,
            ignoreFirstLoad: !1,
            apiSettings: !1,
            evaluateScripts: "once",
            onFirstLoad: function(e, t, i) {},
            onLoad: function(e, t, i) {},
            onVisible: function(e, t, i) {},
            onRequest: function(e, t, i) {},
            templates: {
                determineTitle: function(e) {}
            },
            error: {
                api: "You attempted to load content without API module",
                method: "The method you called is not defined",
                missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
                noContent: "The tab you specified is missing a content url.",
                path: "History enabled, but no path was specified",
                recursion: "Max recursive depth reached",
                legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
                legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
                state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
            },
            metadata: {
                tab: "tab",
                loaded: "loaded",
                promise: "promise"
            },
            className: {
                loading: "loading",
                active: "active"
            },
            selector: {
                tabs: ".ui.tab",
                ui: ".ui"
            }
        }
    }(jQuery, window, document), ! function(e, t, i, n) {
        "use strict";
        e.fn.transition = function() {
            var o, s = e(this),
                r = s.selector || "",
                a = (new Date).getTime(),
                l = [],
                c = arguments,
                u = c[0],
                d = [].slice.call(arguments, 1),
                p = "string" == typeof u;
            return t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                setTimeout(e, 0)
            }, s.each(function(t) {
                var h, f, m, g, v, b, y, w, x, S = e(this),
                    C = this;
                x = {
                    initialize: function() {
                        h = x.get.settings.apply(C, c), g = h.className, m = h.error, v = h.metadata, w = "." + h.namespace, y = "module-" + h.namespace, f = S.data(y) || x, b = x.get.animationEndEvent(), p && (p = x.invoke(u)), p === !1 && (x.verbose("Converted arguments into settings object", h), h.interval ? x.delay(h.animate) : x.animate(), x.instantiate())
                    },
                    instantiate: function() {
                        x.verbose("Storing instance of module", x), f = x, S.data(y, f)
                    },
                    destroy: function() {
                        x.verbose("Destroying previous module for", C), S.removeData(y)
                    },
                    refresh: function() {
                        x.verbose("Refreshing display type on next animation"), delete x.displayType
                    },
                    forceRepaint: function() {
                        x.verbose("Forcing element repaint");
                        var e = S.parent(),
                            t = S.next();
                        0 === t.length ? S.detach().appendTo(e) : S.detach().insertBefore(t)
                    },
                    repaint: function() {
                        x.verbose("Repainting element"), C.offsetWidth
                    },
                    delay: function(e) {
                        var i, o, r = x.get.animationDirection();
                        r || (r = x.can.transition() ? x.get.direction() : "static"), e = e !== n ? e : h.interval, i = "auto" == h.reverse && r == g.outward, o = i || 1 == h.reverse ? (s.length - t) * h.interval : t * h.interval, x.debug("Delaying animation by", o), setTimeout(x.animate, o)
                    },
                    animate: function(e) {
                        if (h = e || h, !x.is.supported()) return x.error(m.support), !1;
                        if (x.debug("Preparing animation", h.animation), x.is.animating()) {
                            if (h.queue) return !h.allowRepeats && x.has.direction() && x.is.occurring() && x.queuing !== !0 ? x.debug("Animation is currently occurring, preventing queueing same animation", h.animation) : x.queue(h.animation), !1;
                            if (!h.allowRepeats && x.is.occurring()) return x.debug("Animation is already occurring, will not execute repeated animation", h.animation), !1;
                            x.debug("New animation started, completing previous early", h.animation), f.complete()
                        }
                        x.can.animate() ? x.set.animating(h.animation) : x.error(m.noAnimation, h.animation, C)
                    },
                    reset: function() {
                        x.debug("Resetting animation to beginning conditions"), x.remove.animationCallbacks(), x.restore.conditions(), x.remove.animating()
                    },
                    queue: function(e) {
                        x.debug("Queueing animation of", e), x.queuing = !0, S.one(b + ".queue" + w, function() {
                            x.queuing = !1, x.repaint(), x.animate.apply(this, h)
                        })
                    },
                    complete: function(e) {
                        x.debug("Animation complete", h.animation), x.remove.completeCallback(), x.remove.failSafe(), x.is.looping() || (x.is.outward() ? (x.verbose("Animation is outward, hiding element"), x.restore.conditions(), x.hide()) : x.is.inward() ? (x.verbose("Animation is outward, showing element"), x.restore.conditions(), x.show()) : x.restore.conditions())
                    },
                    force: {
                        visible: function() {
                            var e = S.attr("style"),
                                t = x.get.userStyle(),
                                i = x.get.displayType(),
                                o = t + "display: " + i + " !important;",
                                s = S.css("display"),
                                r = e === n || "" === e;
                            s !== i ? (x.verbose("Overriding default display to show element", i), S.attr("style", o)) : r && S.removeAttr("style")
                        },
                        hidden: function() {
                            var e = S.attr("style"),
                                t = S.css("display"),
                                i = e === n || "" === e;
                            "none" === t || x.is.hidden() ? i && S.removeAttr("style") : (x.verbose("Overriding default display to hide element"), S.css("display", "none"))
                        }
                    },
                    has: {
                        direction: function(t) {
                            var i = !1;
                            return t = t || h.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
                                (t === g.inward || t === g.outward) && (i = !0)
                            })), i
                        },
                        inlineDisplay: function() {
                            var t = S.attr("style") || "";
                            return e.isArray(t.match(/display.*?;/, ""))
                        }
                    },
                    set: {
                        animating: function(e) {
                            var t;
                            x.remove.completeCallback(), e = e || h.animation, t = x.get.animationClass(e), x.save.animation(t), x.force.visible(), x.remove.hidden(), x.remove.direction(), x.start.animation(t)
                        },
                        duration: function(e, t) {
                            t = t || h.duration, t = "number" == typeof t ? t + "ms" : t, (t || 0 === t) && (x.verbose("Setting animation duration", t), S.css({
                                "animation-duration": t
                            }))
                        },
                        direction: function(e) {
                            e = e || x.get.direction(), e == g.inward ? x.set.inward() : x.set.outward()
                        },
                        looping: function() {
                            x.debug("Transition set to loop"), S.addClass(g.looping)
                        },
                        hidden: function() {
                            S.addClass(g.transition).addClass(g.hidden)
                        },
                        inward: function() {
                            x.debug("Setting direction to inward"), S.removeClass(g.outward).addClass(g.inward)
                        },
                        outward: function() {
                            x.debug("Setting direction to outward"), S.removeClass(g.inward).addClass(g.outward)
                        },
                        visible: function() {
                            S.addClass(g.transition).addClass(g.visible)
                        }
                    },
                    start: {
                        animation: function(e) {
                            e = e || x.get.animationClass(), x.debug("Starting tween", e), S.addClass(e).one(b + ".complete" + w, x.complete), h.useFailSafe && x.add.failSafe(), x.set.duration(h.duration), h.onStart.call(C)
                        }
                    },
                    save: {
                        animation: function(e) {
                            x.cache || (x.cache = {}), x.cache.animation = e
                        },
                        displayType: function(e) {
                            "none" !== e && S.data(v.displayType, e)
                        },
                        transitionExists: function(t, i) {
                            e.fn.transition.exists[t] = i, x.verbose("Saving existence of transition", t, i)
                        }
                    },
                    restore: {
                        conditions: function() {
                            var e = x.get.currentAnimation();
                            e && (S.removeClass(e), x.verbose("Removing animation class", x.cache)), x.remove.duration()
                        }
                    },
                    add: {
                        failSafe: function() {
                            var e = x.get.duration();
                            x.timer = setTimeout(function() {
                                S.triggerHandler(b)
                            }, e + h.failSafeDelay), x.verbose("Adding fail safe timer", x.timer)
                        }
                    },
                    remove: {
                        animating: function() {
                            S.removeClass(g.animating)
                        },
                        animationCallbacks: function() {
                            x.remove.queueCallback(), x.remove.completeCallback()
                        },
                        queueCallback: function() {
                            S.off(".queue" + w)
                        },
                        completeCallback: function() {
                            S.off(".complete" + w)
                        },
                        display: function() {
                            S.css("display", "")
                        },
                        direction: function() {
                            S.removeClass(g.inward).removeClass(g.outward)
                        },
                        duration: function() {
                            S.css("animation-duration", "")
                        },
                        failSafe: function() {
                            x.verbose("Removing fail safe timer", x.timer), x.timer && clearTimeout(x.timer)
                        },
                        hidden: function() {
                            S.removeClass(g.hidden)
                        },
                        visible: function() {
                            S.removeClass(g.visible)
                        },
                        looping: function() {
                            x.debug("Transitions are no longer looping"), x.is.looping() && (x.reset(), S.removeClass(g.looping))
                        },
                        transition: function() {
                            S.removeClass(g.visible).removeClass(g.hidden)
                        }
                    },
                    get: {
                        settings: function(t, i, n) {
                            return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                                animation: t,
                                onComplete: n,
                                duration: i
                            }) : "string" == typeof i || "number" == typeof i ? e.extend({}, e.fn.transition.settings, {
                                animation: t,
                                duration: i
                            }) : "object" == typeof i ? e.extend({}, e.fn.transition.settings, i, {
                                animation: t
                            }) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                                animation: t,
                                onComplete: i
                            }) : e.extend({}, e.fn.transition.settings, {
                                animation: t
                            })
                        },
                        animationClass: function(e) {
                            var t = e || h.animation,
                                i = x.can.transition() && !x.has.direction() ? x.get.direction() + " " : "";
                            return g.animating + " " + g.transition + " " + i + t
                        },
                        currentAnimation: function() {
                            return x.cache && x.cache.animation !== n ? x.cache.animation : !1
                        },
                        currentDirection: function() {
                            return x.is.inward() ? g.inward : g.outward
                        },
                        direction: function() {
                            return x.is.hidden() || !x.is.visible() ? g.inward : g.outward
                        },
                        animationDirection: function(t) {
                            var i;
                            return t = t || h.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
                                t === g.inward ? i = g.inward : t === g.outward && (i = g.outward)
                            })), i ? i : !1
                        },
                        duration: function(e) {
                            return e = e || h.duration, e === !1 && (e = S.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                        },
                        displayType: function() {
                            return h.displayType ? h.displayType : (S.data(v.displayType) === n && x.can.transition(!0), S.data(v.displayType))
                        },
                        userStyle: function(e) {
                            return e = e || S.attr("style") || "", e.replace(/display.*?;/, "")
                        },
                        transitionExists: function(t) {
                            return e.fn.transition.exists[t]
                        },
                        animationStartEvent: function() {
                            var e, t = i.createElement("div"),
                                o = {
                                    animation: "animationstart",
                                    OAnimation: "oAnimationStart",
                                    MozAnimation: "mozAnimationStart",
                                    WebkitAnimation: "webkitAnimationStart"
                                };
                            for (e in o)
                                if (t.style[e] !== n) return o[e];
                            return !1
                        },
                        animationEndEvent: function() {
                            var e, t = i.createElement("div"),
                                o = {
                                    animation: "animationend",
                                    OAnimation: "oAnimationEnd",
                                    MozAnimation: "mozAnimationEnd",
                                    WebkitAnimation: "webkitAnimationEnd"
                                };
                            for (e in o)
                                if (t.style[e] !== n) return o[e];
                            return !1
                        }
                    },
                    can: {
                        transition: function(t) {
                            var i, o, s, r, a, l, c, u = h.animation,
                                d = x.get.transitionExists(u);
                            if (d === n || t) {
                                if (x.verbose("Determining whether animation exists"), i = S.attr("class"), o = S.prop("tagName"), s = e("<" + o + " />").addClass(i).insertAfter(S), r = s.addClass(u).removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).css("animationName"), a = s.addClass(g.inward).css("animationName"), c = s.attr("class", i).removeAttr("style").removeClass(g.hidden).removeClass(g.visible).show().css("display"), x.verbose("Determining final display state", c), x.save.displayType(c), s.remove(), r != a) x.debug("Direction exists for animation", u), l = !0;
                                else {
                                    if ("none" == r || !r) return void x.debug("No animation defined in css", u);
                                    x.debug("Static animation found", u, c), l = !1
                                }
                                x.save.transitionExists(u, l)
                            }
                            return d !== n ? d : l
                        },
                        animate: function() {
                            return x.can.transition() !== n
                        }
                    },
                    is: {
                        animating: function() {
                            return S.hasClass(g.animating)
                        },
                        inward: function() {
                            return S.hasClass(g.inward)
                        },
                        outward: function() {
                            return S.hasClass(g.outward)
                        },
                        looping: function() {
                            return S.hasClass(g.looping)
                        },
                        occurring: function(e) {
                            return e = e || h.animation, e = "." + e.replace(" ", "."), S.filter(e).length > 0
                        },
                        visible: function() {
                            return S.is(":visible")
                        },
                        hidden: function() {
                            return "hidden" === S.css("visibility")
                        },
                        supported: function() {
                            return b !== !1
                        }
                    },
                    hide: function() {
                        x.verbose("Hiding element"), x.is.animating() && x.reset(), C.blur(), x.remove.display(), x.remove.visible(), x.set.hidden(), x.force.hidden(), h.onHide.call(C), h.onComplete.call(C)
                    },
                    show: function(e) {
                        x.verbose("Showing element", e), x.remove.hidden(), x.set.visible(), x.force.visible(), h.onShow.call(C), h.onComplete.call(C)
                    },
                    toggle: function() {
                        x.is.visible() ? x.hide() : x.show()
                    },
                    stop: function() {
                        x.debug("Stopping current animation"), S.triggerHandler(b)
                    },
                    stopAll: function() {
                        x.debug("Stopping all animation"), x.remove.queueCallback(), S.triggerHandler(b)
                    },
                    clear: {
                        queue: function() {
                            x.debug("Clearing animation queue"), x.remove.queueCallback()
                        }
                    },
                    enable: function() {
                        x.verbose("Starting animation"), S.removeClass(g.disabled)
                    },
                    disable: function() {
                        x.debug("Stopping animation"), S.addClass(g.disabled)
                    },
                    setting: function(t, i) {
                        if (x.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, h, t);
                        else {
                            if (i === n) return h[t];
                            h[t] = i
                        }
                    },
                    internal: function(t, i) {
                        if (e.isPlainObject(t)) e.extend(!0, x, t);
                        else {
                            if (i === n) return x[t];
                            x[t] = i
                        }
                    },
                    debug: function() {
                        h.debug && (h.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), x.debug.apply(console, arguments)))
                    },
                    verbose: function() {
                        h.verbose && h.debug && (h.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), x.verbose.apply(console, arguments)))
                    },
                    error: function() {
                        x.error = Function.prototype.bind.call(console.error, console, h.name + ":"), x.error.apply(console, arguments)
                    },
                    performance: {
                        log: function(e) {
                            var t, i, n;
                            h.performance && (t = (new Date).getTime(), n = a || t, i = t - n, a = t, l.push({
                                Name: e[0],
                                Arguments: [].slice.call(e, 1) || "",
                                Element: C,
                                "Execution Time": i
                            })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500)
                        },
                        display: function() {
                            var t = h.name + ":",
                                i = 0;
                            a = !1, clearTimeout(x.performance.timer), e.each(l, function(e, t) {
                                i += t["Execution Time"]
                            }), t += " " + i + "ms", r && (t += " '" + r + "'"), s.length > 1 && (t += " (" + s.length + ")"), (console.group !== n || console.table !== n) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                                console.log(t.Name + ": " + t["Execution Time"] + "ms")
                            }), console.groupEnd()), l = []
                        }
                    },
                    invoke: function(t, i, s) {
                        var r, a, l, c = f;
                        return i = i || d, s = C || s, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(i, o) {
                            var s = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                            if (e.isPlainObject(c[s]) && i != r) c = c[s];
                            else {
                                if (c[s] !== n) return a = c[s], !1;
                                if (!e.isPlainObject(c[o]) || i == r) return c[o] !== n ? (a = c[o], !1) : !1;
                                c = c[o]
                            }
                        })), e.isFunction(a) ? l = a.apply(s, i) : a !== n && (l = a), e.isArray(o) ? o.push(l) : o !== n ? o = [o, l] : l !== n && (o = l), a !== n ? a : !1
                    }
                }, x.initialize()
            }), o !== n ? o : this
        }, e.fn.transition.exists = {}, e.fn.transition.settings = {
            name: "Transition",
            debug: !1,
            verbose: !1,
            performance: !0,
            namespace: "transition",
            interval: 0,
            reverse: "auto",
            onStart: function() {},
            onComplete: function() {},
            onShow: function() {},
            onHide: function() {},
            useFailSafe: !0,
            failSafeDelay: 100,
            allowRepeats: !1,
            displayType: !1,
            animation: "fade",
            duration: !1,
            queue: !0,
            metadata: {
                displayType: "display"
            },
            className: {
                animating: "animating",
                disabled: "disabled",
                hidden: "hidden",
                inward: "in",
                loading: "loading",
                looping: "looping",
                outward: "out",
                transition: "transition",
                visible: "visible"
            },
            error: {
                noAnimation: "There is no css animation matching the one you specified. Please make sure your css is vendor prefixed, and you have included transition css.",
                repeated: "That animation is already occurring, cancelling repeated animation",
                method: "The method you called is not defined",
                support: "This browser does not support CSS animations"
            }
        }
    }(jQuery, window, document),
    function() {
        "use strict";

        function e(e) {
            return e.split("").reverse().join("")
        }

        function t(e, t) {
            return e.substring(0, t.length) === t
        }

        function i(e, t) {
            return e.slice(-1 * t.length) === t
        }

        function n(e, t, i) {
            if ((e[t] || e[i]) && e[t] === e[i]) throw new Error(t)
        }

        function o(e) {
            return "number" == typeof e && isFinite(e)
        }

        function s(e, t) {
            var i = Math.pow(10, t);
            return (Math.round(e * i) / i).toFixed(t)
        }

        function r(t, i, n, r, a, l, c, u, d, p, h, f) {
            var m, g, v, b = f,
                y = "",
                w = "";
            return l && (f = l(f)), o(f) ? (t !== !1 && 0 === parseFloat(f.toFixed(t)) && (f = 0), 0 > f && (m = !0, f = Math.abs(f)), t !== !1 && (f = s(f, t)), f = f.toString(), -1 !== f.indexOf(".") ? (g = f.split("."), v = g[0], n && (y = n + g[1])) : v = f, i && (v = e(v).match(/.{1,3}/g), v = e(v.join(e(i)))), m && u && (w += u), r && (w += r), m && d && (w += d), w += v, w += y, a && (w += a), p && (w = p(w, b)), w) : !1
        }

        function a(e, n, s, r, a, l, c, u, d, p, h, f) {
            var m, g = "";
            return h && (f = h(f)), f && "string" == typeof f ? (u && t(f, u) && (f = f.replace(u, ""), m = !0), r && t(f, r) && (f = f.replace(r, "")), d && t(f, d) && (f = f.replace(d, ""), m = !0), a && i(f, a) && (f = f.slice(0, -1 * a.length)), n && (f = f.split(n).join("")), s && (f = f.replace(s, ".")), m && (g += "-"), g += f, g = g.replace(/[^0-9\.\-.]/g, ""), "" === g ? !1 : (g = Number(g), c && (g = c(g)), o(g) ? g : !1)) : !1
        }

        function l(e) {
            var t, i, o, s = {};
            for (t = 0; t < d.length; t += 1)
                if (i = d[t], o = e[i], void 0 === o) "negative" !== i || s.negativeBefore ? "mark" === i && "." !== s.thousand ? s[i] = "." : s[i] = !1 : s[i] = "-";
                else if ("decimals" === i) {
                if (!(o >= 0 && 8 > o)) throw new Error(i);
                s[i] = o
            } else if ("encoder" === i || "decoder" === i || "edit" === i || "undo" === i) {
                if ("function" != typeof o) throw new Error(i);
                s[i] = o
            } else {
                if ("string" != typeof o) throw new Error(i);
                s[i] = o
            }
            return n(s, "mark", "thousand"), n(s, "prefix", "negative"), n(s, "prefix", "negativeBefore"), s
        }

        function c(e, t, i) {
            var n, o = [];
            for (n = 0; n < d.length; n += 1) o.push(e[d[n]]);
            return o.push(i), t.apply("", o)
        }

        function u(e) {
            return this instanceof u ? void("object" == typeof e && (e = l(e), this.to = function(t) {
                return c(e, r, t)
            }, this.from = function(t) {
                return c(e, a, t)
            })) : new u(e)
        }
        var d = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
        window.wNumb = u
    }(),
    function() {
        var e, t, i, n, o, s = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            r = [].indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var i, n;
                for (i in t) n = t[i], null == e[i] && (e[i] = n);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.createEvent = function(e, t, i, n) {
                var o;
                return null == t && (t = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, t, i, n)) : null != document.createEventObject ? (o = document.createEventObject(),
                    o.eventType = e) : o.eventName = e, o
            }, e.prototype.emitEvent = function(e, t) {
                return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
            }, e.prototype.addEvent = function(e, t, i) {
                return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
            }, e.prototype.removeEvent = function(e, t, i) {
                return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, i, n, o, s;
                for (s = this.keys, t = n = 0, o = s.length; o > n; t = ++n)
                    if (i = s[t], i === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var i, n, o, s, r;
                for (r = this.keys, i = o = 0, s = r.length; s > o; i = ++o)
                    if (n = r[i], n === e) return void(this.values[i] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), n = this.getComputedStyle || function(e) {
            return this.getPropertyValue = function(t) {
                var i;
                return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function(e, t) {
                    return t.toUpperCase()
                }), (null != (i = e.currentStyle) ? i[t] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(e) {
                null == e && (e = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var t, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var e, i, n, o;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t);
                        return o
                    }.call(this), this.all = function() {
                        var e, i, n, o;
                        for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, i = 0, n = o.length; n > i; i++) t = o[i], this.applyStyle(t, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                    return function(t) {
                        var i, n, o, s, r;
                        for (r = [], i = 0, n = t.length; n > i; i++) s = t[i], r.push(function() {
                            var e, t, i, n;
                            for (i = s.addedNodes || [], n = [], e = 0, t = i.length; t > e; e++) o = i[e], n.push(this.doSync(o));
                            return n
                        }.call(e));
                        return r
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function() {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(e) {
                var t, i, n, o, s;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, o = e.querySelectorAll("." + this.config.boxClass), s = [], i = 0, n = o.length; n > i; i++) t = o[i], r.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                    return s
                }
            }, o.prototype.show = function(e) {
                return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
            }, o.prototype.applyStyle = function(e, t) {
                var i, n, o;
                return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate(function(s) {
                    return function() {
                        return s.customStyle(e, t, n, i, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), o.prototype.resetStyle = function() {
                var e, t, i, n, o;
                for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(e) {
                var t;
                return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()) : void 0
            }, o.prototype.customStyle = function(e, t, i, n, o) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                    animationDuration: i
                }), n && this.vendorSet(e.style, {
                    animationDelay: n
                }), o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(e, t) {
                var i, n, o, s;
                n = [];
                for (i in t) o = t[i], e["" + i] = o, n.push(function() {
                    var t, n, r, a;
                    for (r = this.vendors, a = [], t = 0, n = r.length; n > t; t++) s = r[t], a.push(e["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                    return a
                }.call(this));
                return n
            }, o.prototype.vendorCSS = function(e, t) {
                var i, o, s, r, a, l;
                for (a = n(e), r = a.getPropertyCSSValue(t), s = this.vendors, i = 0, o = s.length; o > i; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + t);
                return r
            }, o.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (i) {
                    t = n(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, o.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, o.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var t, i, n, o;
                    for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], e && (this.isVisible(e) ? this.show(e) : o.push(e));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, o.prototype.isVisible = function(e) {
                var t, i, n, o, s;
                return i = e.getAttribute("data-wow-offset") || this.config.offset, s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = s + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(e), t = n + e.clientHeight, o >= n && t >= s
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), $(".ui.dropdown").dropdown(), $(".ui.dropdown.hover").dropdown({
        on: "hover"
    }), $(".ui.sidebar").sidebar("attach events", ".menu-toggle"), $(".ui.sidebar").sidebar("attach events", ".ui.sidebar .item a", "hide"), $(".tabular .item").tab(), $(".ui.accordion").accordion(), (new WOW).init({
        callback: function(e) {}
    }), $(".pay-carousel").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 1320,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: !1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: !1
            }
        }, {
            breakpoint: 679,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1
            }
        }]
    }), $(document).ready(function(e) {
        e(".scroll").click(function(t) {
            t.preventDefault(), e("html,body").animate({
                scrollTop: e(this.hash).offset().top - 60
            }, 1e3)
        })
    }), $(window).scroll(function() {
        var e = $(window).scrollTop();
        e >= 200 ? $(".top-nav").addClass("dark") : $(".top-nav").removeClass("dark")
    });