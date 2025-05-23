// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [],
            []
        ]


    };
    var aa, ca = this,
        da = /^[\w+/_-]+[=]{0,2}$/,
        ea = null;
    var fa = function() {},
        ha = function(a) {
            return "function" == typeof a
        },
        ia = function(a) {
            return "string" == typeof a
        },
        ja = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ka = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        la = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        ma = function(a, b) {
            if (a && ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        oa = function(a, b) {
            if (!ja(a) ||
                !ja(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        pa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        qa = function(a) {
            return Math.round(Number(a)) || 0
        },
        ra = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        sa = function(a) {
            var b = [];
            if (ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        ta = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        ua = function() {
            return (new Date).getTime()
        },
        va = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    va.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    va.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    va.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var wa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        xa = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        ya = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        za = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Aa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ba = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ca = function(a) {
            if (null == a) return String(a);
            var b = Ba.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Da = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ea = function(a) {
            if (!a || "object" != Ca(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Da(a, "constructor") && !Da(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Da(a, b)
        },
        Fa = function(a, b) {
            var c = b || ("array" == Ca(a) ? [] : {}),
                d;
            for (d in a)
                if (Da(a, d)) {
                    var e = a[d];
                    "array" == Ca(e) ? ("array" != Ca(c[d]) && (c[d] = []), c[d] = Fa(e, c[d])) : Ea(e) ? (Ea(c[d]) || (c[d] = {}), c[d] = Fa(e, c[d])) : c[d] = e
                }
            return c
        };
    var f = window,
        u = document,
        Ga = navigator,
        Ha = u.currentScript && u.currentScript.src,
        Ia = function(a, b) {
            var c = f[a];
            f[a] = void 0 === c ? b : c;
            return f[a]
        },
        Ja = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ka = function(a, b, c) {
            var d = u.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Ja(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ea) b: {
                var g = ca.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && da.test(k)) {
                        ea = k;
                        break b
                    }
                }
                ea = ""
            }
            e = ea;
            e && d.setAttribute("nonce", e);
            var l = u.getElementsByTagName("script")[0] || u.body || u.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        La = function() {
            if (Ha) {
                var a = Ha.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ma = function(a, b) {
            var c = u.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = u.body && u.body.lastChild ||
                u.body || u.head;
            d.parentNode.insertBefore(c, d);
            Ja(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Na = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Oa = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Pa = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        z = function(a) {
            f.setTimeout(a, 0)
        },
        Ra = function(a) {
            var b =
                u.getElementById(a);
            if (b && Qa(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (Qa(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        Qa = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sa = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ta = function(a) {
            var b = u.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ua = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        };
    var Va = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Xa = /:[0-9]+$/,
        Ya = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        ab = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Za(a.protocol) || Za(f.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : f.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || f.location.hostname).replace(Xa, "").toLowerCase());
            var g = b,
                h, k = Za(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = $a(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(Xa, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = h.split("/");
                    0 <=
                        la(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = Ya(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        Za = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        $a = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        bb = function(a) {
            var b = u.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (c = "/" + c);
            var d = b.hostname.replace(Xa, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var cb = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        fb = function(a, b, c, d) {
            var e = db(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = eb(e, function(g) {
                    return g.yb
                }, b);
                if (1 === e.length) return e[0].id;
                e = eb(e, function(g) {
                    return g.Sa
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function hb(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= cb(b, e).indexOf(c)
    }
    var kb = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                }
            if ("auto" === p) {
                for (var v = ib(), x = 0; x < v.length; ++x) {
                    var y = "none" != v[x] ? v[x] : void 0;
                    if (!jb(y, t) && hb(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !jb(p, t) && hb(m, a, l)
        }
        return k
    };

    function eb(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function db(a, b) {
        for (var c = [], d = cb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    yb: 1 * k[0] || 1,
                    Sa: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var lb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        mb = /(^|\.)doubleclick\.net$/i,
        jb = function(a, b) {
            return mb.test(document.location.hostname) || "/" === b && lb.test(a)
        },
        ib = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            a.push("none");
            return a
        };
    var Kb = [],
        Lb = [],
        Mb = [],
        Nb = [],
        Ob = [],
        Pb = {},
        Qb, Rb, Sb, Tb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ub = function(a) {
            var b = a["function"];
            if (!b) throw Error("Error: No function name given for function call.");
            var c = !!Pb[b],
                d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
            return c ? Pb[b](d) : (void 0)(b, d)
        },
        Wb = function(a, b, c, d) {
            c = c || [];
            d = d || fa;
            var e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && (e[g] = Vb(a[g], b, c, d));
            return e
        },
        Xb = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = Pb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        Vb = function(a, b, c, d) {
            if (ka(a)) {
                var e;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        e = [];
                        for (var g = 1; g < a.length; g++) e.push(Vb(a[g], b, c, d));
                        return e;
                    case "macro":
                        var h = a[1];
                        if (c[h]) return;
                        var k = Kb[h];
                        if (!k || b(k)) return;
                        c[h] = !0;
                        try {
                            var l = Wb(k, b, c, d);
                            e = Ub(l);
                            Sb && (e = Sb.ff(e, l))
                        } catch (y) {
                            d(y, h), e = !1
                        }
                        c[h] = !1;
                        return e;
                    case "map":
                        e = {};
                        for (var m =
                                1; m < a.length; m += 2) e[Vb(a[m], b, c, d)] = Vb(a[m + 1], b, c, d);
                        return e;
                    case "template":
                        e = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var t = Vb(a[p], b, c, d);
                            Rb && (n = n || t === Rb.ob);
                            e.push(t)
                        }
                        return Rb && n ? Rb.kf(e) : e.join("");
                    case "escape":
                        e = Vb(a[1], b, c, d);
                        if (Rb && ka(a[1]) && "macro" === a[1][0] && Rb.Nf(a)) return Rb.Xf(e);
                        e = String(e);
                        for (var q = 2; q < a.length; q++) nb[a[q]] && (e = nb[a[q]](e));
                        return e;
                    case "tag":
                        var r = a[1];
                        if (!Nb[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return e = {
                            wd: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var x = Yb(v, b, c, d);
                        a[4] && (x = !x);
                        return x;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Yb = function(a, b, c, d) {
            try {
                return Qb(Wb(a, b, c, d))
            } catch (e) {
                JSON.stringify(a)
            }
            return null
        };
    var Zb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Uc: a("convert_case_to"),
            Vc: a("convert_false_to"),
            Wc: a("convert_null_to"),
            Xc: a("convert_true_to"),
            Yc: a("convert_undefined_to"),
            ra: a("function"),
            ye: a("instance_name"),
            ze: a("live_only"),
            Ae: a("malware_disabled"),
            Bg: a("original_vendor_template_id"),
            Be: a("once_per_event"),
            md: a("once_per_load"),
            nd: a("setup_tags"),
            Ce: a("tag_id"),
            od: a("teardown_tags")
        }
    }();
    var $b = null,
        cc = function(a, b) {
            function c(t) {
                for (var q = 0; q < t.length; q++) e[t[q]] = !0
            }
            var d = [],
                e = [];
            $b = ac(a, b || function() {});
            for (var g = 0; g < Lb.length; g++) {
                var h = Lb[g],
                    k = bc(h);
                if (k) {
                    for (var l = h.add || [], m = 0; m < l.length; m++) d[l[m]] = !0;
                    c(h.block || [])
                } else null === k && c(h.block || [])
            }
            for (var n = [], p = 0; p < Nb.length; p++) d[p] && !e[p] && (n[p] = !0);
            return n
        },
        bc = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = $b(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = $b(e[g]);
                if (null ===
                    h) return null;
                if (h) return !1
            }
            return !0
        },
        ac = function(a, b) {
            var c = [];
            return function(d) {
                void 0 === c[d] && (c[d] = Yb(Mb[d], a, void 0, b));
                return c[d]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var rc = {},
        sc = null,
        tc = Math.random();
    rc.m = "AW-824992907";
    rc.sb = "430";
    var uc = "www.googletagmanager.com/gtm.js";
    uc = "www.googletagmanager.com/gtag/js";
    var vc = uc,
        wc = null,
        xc = null,
        yc = null,
        zc = "//www.googletagmanager.com/a?id=" + rc.m + "&cv=1",
        Ac = {},
        Bc = {},
        Cc = function() {
            var a = sc.sequence || 0;
            sc.sequence = a + 1;
            return a
        };
    var E = function(a, b, c, d) {
            return (2 === Dc() || d || "http:" != f.location.protocol ? a : b) + c
        },
        Dc = function() {
            var a = La(),
                b;
            if (1 === a) a: {
                var c = vc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = u.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Ec = !1;
    var Fc = function(a, b, c, d) {
        if (c) {
            d = d || {};
            var e = f._googWcmImpl || function() {
                e.q = e.q || [];
                e.q.push(arguments)
            };
            f._googWcmImpl = e;
            void 0 === f._googWcmAk && (f._googWcmAk = a);
            Ec ? d.za && z(d.za) : (Ka(E("https://", "http://", "www.gstatic.com/wcm/loader.js"), d.za, d.Ld), Ec = !0);
            var g = {
                ak: a,
                cl: b
            };
            void 0 === d.Yd && (g.autoreplace = c);
            e(2, d.Yd, g, c, 0, new Date, d.wg)
        }
    };
    var Ic = {},
        Jc = function(a) {
            Ic.GTM = Ic.GTM || [];
            Ic.GTM[a] = !0
        };
    var Kc = function() {
            return "&tc=" + Nb.filter(function(a) {
                return a
            }).length
        },
        Tc = function() {
            Lc && (f.clearTimeout(Lc), Lc = void 0);
            void 0 === Mc || Nc[Mc] && !Oc || (Pc[Mc] || Qc.Pf() || 0 >= Rc-- ? (Jc(1), Pc[Mc] = !0) : (Qc.fg(), Na(Sc()), Nc[Mc] = !0, Oc = ""))
        },
        Sc = function() {
            var a = Mc;
            if (void 0 === a) return "";
            for (var b, c = [], d = Ic.GTM || [], e = 0; e < d.length; e++) d[e] && (c[Math.floor(e / 6)] ^= 1 << e % 6);
            for (var g = 0; g < c.length; g++) c[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g] || 0);
            b = c.join("");
            return [Uc, Nc[a] ? "" :
                "&es=1", Vc[a], b ? "&u=" + b : "", Kc(), Oc, "&z=0"
            ].join("")
        },
        Wc = function() {
            return [zc, "&v=3&t=t", "&pid=" + oa(), "&rv=" + rc.sb].join("")
        },
        Xc = "0.005000" > Math.random(),
        Uc = Wc(),
        Yc = function() {
            Uc = Wc()
        },
        Nc = {},
        Oc = "",
        Mc = void 0,
        Vc = {},
        Pc = {},
        Lc = void 0,
        Qc = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Pf: function() {
                    if (c < a) return !1;
                    ua() - d >= b && (c = 0);
                    return c >= a
                },
                fg: function() {
                    ua() - d >= b && (c = 0);
                    c++;
                    d = ua()
                }
            }
        }(2, 1E3),
        Rc = 1E3,
        Zc = function(a, b) {
            if (Xc && !Pc[a] && Mc !== a) {
                Tc();
                Mc = a;
                Oc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) :
                    "*";
                Vc[a] = "&e=" + c + "&eid=" + a;
                Lc || (Lc = f.setTimeout(Tc, 500))
            }
        },
        $c = function(a, b, c) {
            if (Xc && !Pc[a] && b) {
                a !== Mc && (Tc(), Mc = a);
                var d = c + String(b[Zb.ra] || "").replace(/_/g, "");
                Oc = Oc ? Oc + "." + d : "&tr=" + d;
                Lc || (Lc = f.setTimeout(Tc, 500));
                2022 <= Sc().length && Tc()
            }
        };
    var ad = new va,
        bd = {},
        cd = {},
        gd = {
            name: "dataLayer",
            set: function(a, b) {
                Fa(dd(a, b), bd);
                ed()
            },
            get: function(a) {
                return fd(a, 2)
            },
            reset: function() {
                ad = new va;
                bd = {};
                ed()
            }
        },
        fd = function(a, b) {
            if (2 != b) {
                var c = ad.get(a);
                if (Xc) {
                    var d = hd(a);
                    c !== d && Jc(5)
                }
                return c
            }
            return hd(a)
        },
        hd = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            var h = function(k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(id(l.pop()), l) : jd(d)
            };
            e = !0;
            g = h(bd.eventModel, [b, c]);
            return e ? g : jd(d)
        },
        jd = function(a) {
            for (var b = bd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var kd = function(a, b) {
            return hd(a, b, void 0)
        },
        id = function(a) {
            if (a) {
                var b = jd(["gtag", "targets", a]);
                return Ea(b) ? b : void 0
            }
        },
        ld = function(a, b) {
            function c(g) {
                g && pa(g, function(h) {
                    d[h] = null
                })
            }
            var d = {};
            c(bd);
            delete d.eventModel;
            c(id(a));
            c(id(b));
            c(bd.eventModel);
            var e = [];
            pa(d, function(g) {
                e.push(g)
            });
            return e
        };
    var md = function(a, b) {
            cd.hasOwnProperty(a) || (ad.set(a, b), Fa(dd(a, b), bd), ed())
        },
        dd = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ed = function(a) {
            pa(cd, function(b, c) {
                ad.set(b, c);
                Fa(dd(b, void 0), bd);
                Fa(dd(b, c), bd);
                a && delete cd[b]
            })
        };
    var nd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        od = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        pd = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        };
    var rd = function(a) {
            var b = fd("gtm.whitelist");
            b && Jc(9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Aa(sa(b), od),
                d = fd("gtm.blacklist");
            d || (d = fd("tagTypeBlacklist")) && Jc(3);
            d ? Jc(8) : d = [];
            qd() && (d = sa(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= la(sa(d), "google") && Jc(2);
            var e = d && Aa(sa(d), pd),
                g = {};
            return function(h) {
                var k = h && h[Zb.ra];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Bc[k] || [],
                    m = a(k);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > la(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 > la(c, l[p])) {
                                        Jc(11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= la(e, k);
                    if (q) t = q;
                    else {
                        var r;
                        b: {
                            for (var v = l || [], x = new va, y = 0; y < e.length; y++) x.set(e[y], !0);
                            for (var w = 0; w < v.length; w++)
                                if (x.get(v[w])) {
                                    r = !0;
                                    break b
                                }
                            r = !1
                        }
                        var B = r;
                        B && Jc(10);
                        t = B
                    }
                }
                return g[k] = !m || t
            }
        },
        qd = function() {
            return nd.test(f.location && f.location.hostname)
        };
    var sd = {
        ff: function(a, b) {
            b[Zb.Uc] && "string" === typeof a && (a = 1 == b[Zb.Uc] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zb.Wc) && null === a && (a = b[Zb.Wc]);
            b.hasOwnProperty(Zb.Yc) && void 0 === a && (a = b[Zb.Yc]);
            b.hasOwnProperty(Zb.Xc) && !0 === a && (a = b[Zb.Xc]);
            b.hasOwnProperty(Zb.Vc) && !1 === a && (a = b[Zb.Vc]);
            return a
        }
    };
    var td = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        ud = function(a) {
            var b = sc.zones;
            !b && a && (b = sc.zones = a());
            return b
        };
    var vd = !1,
        wd = 0,
        xd = [];

    function yd(a) {
        if (!vd) {
            var b = u.createEventObject,
                c = "complete" == u.readyState,
                d = "interactive" == u.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                vd = !0;
                for (var e = 0; e < xd.length; e++) z(xd[e])
            }
            xd.push = function() {
                for (var g = 0; g < arguments.length; g++) z(arguments[g]);
                return 0
            }
        }
    }

    function zd() {
        if (!vd && 140 > wd) {
            wd++;
            try {
                u.documentElement.doScroll("left"), yd()
            } catch (a) {
                f.setTimeout(zd, 50)
            }
        }
    }
    var Ad = function(a) {
        vd ? a() : xd.push(a)
    };
    var Bd = function() {
        function a(d) {
            return !ja(d) || 0 > d ? 0 : d
        }
        if (!sc._li && f.performance && f.performance.timing) {
            var b = f.performance.timing.navigationStart,
                c = ja(gd.get("gtm.start")) ? gd.get("gtm.start") : 0;
            sc._li = {
                cst: a(c - b),
                cbt: a(xc - b)
            }
        }
    };
    var Fd = !1,
        Gd = function() {
            return f.GoogleAnalyticsObject && f[f.GoogleAnalyticsObject]
        },
        Hd = !1;
    var Id = function(a) {
            f.GoogleAnalyticsObject || (f.GoogleAnalyticsObject = a || "ga");
            var b = f.GoogleAnalyticsObject;
            if (f[b]) f.hasOwnProperty(b) || Jc(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                f[b] = c
            }
            Bd();
            return f[b]
        },
        Jd = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Gd();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Ld = function() {},
        Kd = function() {
            return f.GoogleAnalyticsObject || "ga"
        },
        Md = !1;
    var Nd = function(a, b, c) {
        if (b) {
            c = c || {};
            var d = f._gaPhoneImpl || function() {
                d.q = d.q || [];
                d.q.push(arguments)
            };
            f._gaPhoneImpl = d;
            void 0 === f.ga_wpid && (f.ga_wpid = a);
            Md ? c.za && z(c.za) : (Ka(E("https://", "http://", "www.gstatic.com/gaphone/loader.js"), c.za, c.Ld), Md = !0);
            var e = {};
            void 0 !== c.zd ? e.receiver = c.zd : e.replace = b;
            e.ga_wpid = a;
            e.destination = b;
            d(2, new Date, e)
        }
    };
    var Td = function(a) {};

    function Sd(a, b) {
        a.containerId = rc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function Ud(a, b, c, d, e) {
        var g = Nb[a],
            h = Vd(a, b, c, d, e);
        if (!h) return null;
        var k = Vb(g[Zb.nd], d.fa, [], fa);
        if (k && k.length) {
            var l = k[0];
            h = Ud(l.index, b, {
                I: h,
                O: 1 === l.wd ? c.terminate : h,
                terminate: c.terminate
            }, d, e)
        }
        return h
    }

    function Vd(a, b, c, d, e) {
        function g() {
            if (h[Zb.Ae]) l();
            else {
                var y = Wb(h, d.fa, [], function(B) {
                        Jc(6);
                        Td(B)
                    }),
                    w = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!w) {
                        w = !0;
                        $c(d.id, Nb[a], "5");
                        k()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!w) {
                        w = !0;
                        $c(d.id, Nb[a], "6");
                        l()
                    }
                };
                y.vtp_gtmTagId = h.tag_id;
                $c(d.id, h, "1");
                try {
                    Ub(y)
                } catch (B) {
                    Td(B);
                    $c(d.id, h, "7");
                    w || (w = !0, l())
                }
            }
        }
        var h = Nb[a],
            k = c.I,
            l = c.O,
            m = c.terminate;
        if (d.fa(h)) return null;
        var n = Vb(h[Zb.od], d.fa, [], fa);
        if (n && n.length) {
            var p = n[0],
                t = Ud(p.index, b, {
                    I: k,
                    O: l,
                    terminate: m
                }, d, e);
            if (!t) return null;
            k = t;
            l = 2 === p.wd ? m : t
        }
        if (h[Zb.md] || h[Zb.Be]) {
            var q = h[Zb.md] ? Ob : b,
                r = k,
                v = l;
            if (!q[a]) {
                g = xa(g);
                var x = Wd(a, q, g);
                k = x.I;
                l = x.O
            }
            return function() {
                q[a](r, v)
            }
        }
        return g
    }

    function Wd(a, b, c) {
        var d = [],
            e = [];
        b[a] = Xd(d, e, c);
        return {
            I: function() {
                b[a] = Yd;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            O: function() {
                b[a] = Zd;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function Xd(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Yd(a) {
        a()
    }

    function Zd(a, b) {
        b()
    };

    function $d(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return xa(function() {
                    b++;
                    d && b >= c && a()
                })
            },
            Qe: function() {
                d = !0;
                b >= c && a()
            }
        }
    }
    var ce = function(a) {
        for (var b = $d(a.callback), c = [], d = [], e = 0; e < Nb.length; e++)
            if (a.Ua[e]) {
                var g = Nb[e];
                var h = b.add();
                try {
                    var k = Ud(e, c, {
                        I: h,
                        O: h,
                        terminate: h
                    }, a, e);
                    k ? d.push({
                        Wd: e,
                        b: Xb(g),
                        uf: k
                    }) : (ae(e, a), h())
                } catch (m) {
                    h()
                }
            }
        b.Qe();
        d.sort(be);
        for (var l = 0; l < d.length; l++) d[l].uf();
        return 0 < d.length
    };

    function be(a, b) {
        var c, d = b.b,
            e = a.b;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.Wd,
                k = b.Wd;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function ae(a, b) {
        if (!Xc) return;
        var c = function(d) {
            var e = b.fa(Nb[d]) ? "3" : "4",
                g = Vb(Nb[d][Zb.nd], b.fa, [], fa);
            g && g.length && c(g[0].index);
            $c(b.id, Nb[d], e);
            var h = Vb(Nb[d][Zb.od], b.fa, [], fa);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var de = !1,
        ee = function(a, b, c, d) {
            if ("gtm.js" == b) {
                if (de) return !1;
                de = !0
            }
            Zc(a, b);
            var e = rd(c),
                g = {
                    id: a,
                    name: b,
                    callback: d || fa,
                    fa: e,
                    Ua: []
                };
            g.Ua = cc(e, function(n) {
                Td(n)
            });
            var h = ce(g);
            "gtm.js" !== b && "gtm.sync" !== b || Ld();
            if (!h) return h;
            for (var k = {
                    __cl: !0,
                    __ecl: !0,
                    __ehl: !0,
                    __evl: !0,
                    __fsl: !0,
                    __hl: !0,
                    __jel: !0,
                    __lcl: !0,
                    __sdl: !0,
                    __tl: !0,
                    __ytl: !0
                }, l = 0; l <
                g.Ua.length; l++)
                if (g.Ua[l]) {
                    var m = Nb[l];
                    if (m && !k[m[Zb.ra]]) return !0
                }
            return !1
        };
    var fe = function(a, b) {
        var c = Tb(a, b);
        Nb.push(c);
        return Nb.length - 1
    };
    var F = {
        Ob: "event_callback",
        Qb: "event_timeout"
    };
    F.aa = "gtag.config", F.Lb = "page_view", F.Zd = "user_engagement", F.R = "allow_ad_personalization_signals", F.$d = "allow_custom_scripts", F.ae = "allow_display_features", F.be = "allow_enhanced_conversions", F.ab = "client_id", F.N = "cookie_domain", F.T = "cookie_expires", F.cb = "cookie_name", F.na = "cookie_path", F.de = "cookie_update", F.oa = "currency", F.eb = "custom_params", F.fe = "custom_map", F.Sb = "groups", F.Ha = "language", F.ee = "country", F.Ag = "non_interaction", F.jb = "page_location", F.kb = "page_referrer", F.hd = "page_title", F.Ja = "send_page_view",
        F.qa = "send_to", F.lb = "session_duration", F.Xb = "session_engaged", F.mb = "session_id", F.Yb = "session_number", F.we = "tracking_id", F.nb = "user_properties", F.Ia = "linker", F.gb = "accept_incoming", F.H = "domains", F.ib = "url_position", F.hb = "decorate_forms", F.Wb = "phone_conversion_number", F.Ub = "phone_conversion_callback", F.Vb = "phone_conversion_css_class", F.jd = "phone_conversion_options", F.Zc = "aw_remarketing", F.$c = "aw_remarketing_only", F.ca = "value", F.ue = "quantity", F.je = "affiliation", F.oe = "tax", F.ne = "shipping", F.Nb = "list_name",
        F.gd = "checkout_step", F.fd = "checkout_option", F.ke = "coupon", F.me = "promotions", F.Ka = "transaction_id", F.ba = "user_id", F.Ga = "conversion_linker", F.Fa = "conversion_cookie_prefix", F.F = "cookie_prefix", F.S = "items", F.Mb = "aw_merchant_id", F.bd = "aw_feed_country", F.cd = "aw_feed_language", F.ad = "discount", F.ed = "disable_merchant_reported_purchases", F.Tb = "new_customer", F.dd = "customer_lifetime_value", F.ie = "dc_natural_search", F.he = "dc_custom_params", F.xe = "trip_type", F.te = "passengers", F.qe = "method", F.ve = "search_term", F.ce =
        "content_type", F.se = "optimize_id", F.pe = "experiments", F.fb = "google_signals", F.Rb = "google_tld", F.Pb = "event_settings", F.kd = [F.R, F.N, F.T, F.cb, F.na, F.F, F.eb, F.Ob, F.Pb, F.Qb, F.fb, F.Rb, F.Sb, F.qa, F.Ja, F.lb, F.ba, F.nb], F.Tc = [F.qa, F.Zc, F.$c, F.eb, F.Ja, F.Ha, F.ca, F.oa, F.Ka, F.ba, F.Ga, F.Fa, F.F, F.jb, F.kb, F.Wb, F.Ub, F.Vb, F.jd, F.S, F.Mb, F.bd, F.cd, F.ad, F.ed, F.Tb, F.dd, F.R];
    var ge = {};
    var he = /[A-Z]+/,
        ie = /\s/,
        je = function(a) {
            if (ia(a) && (a = ta(a), !ie.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (he.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            da: d
                        }
                    }
                }
            }
        },
        le = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = je(a[c]);
                d && (b[d.id] = d)
            }
            ke(b);
            var e = [];
            pa(b, function(g, h) {
                e.push(h)
            });
            return e
        };

    function ke(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.da[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var me = null,
        ne = {},
        oe = {},
        qe, re = function(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = Fa(b), b[F.Ob] && (c.eventCallback = b[F.Ob]), b[F.Qb] && (c.eventTimeout = b[F.Qb]));
            return c
        };
    var se = function() {
            me = me || !sc.gtagRegistered;
            sc.gtagRegistered = !0;
            return me
        },
        te = function(a) {
            if (void 0 === oe[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = fe("gtagua", {
                            trackingId: a.id
                        });
                        break;
                    case "AW":
                        b = fe("gtagaw", {
                            conversionId: a
                        });
                        break;
                    case "DC":
                        b = fe("gtagfl", {
                            targetId: a.id
                        });
                        break;
                    case "GF":
                        b = fe("gtaggf", {
                            conversionId: a
                        });
                        break;
                    case "G":
                        b = fe("get", {
                            trackingId: a.id,
                            isAutoTag: !0
                        });
                        break;
                    case "HA":
                        b = fe("gtagha", {
                            conversionId: a
                        });
                        break;
                    default:
                        return
                }
                if (!qe) {
                    var c = Tb("v", {
                        name: "send_to",
                        dataLayerVersion: 2
                    });
                    Kb.push(c);
                    qe = ["macro", Kb.length - 1]
                }
                var d = {
                    arg0: qe,
                    arg1: a.id,
                    ignore_case: !1
                };
                d[Zb.ra] = "_lc";
                Mb.push(d);
                var e = {
                    "if": [Mb.length - 1],
                    add: [b]
                };
                e["if"] && (e.add || e.block) && Lb.push(e);
                oe[a.id] = b
            }
        },
        ue = function(a) {
            pa(ne, function(b, c) {
                var d = la(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        ve = xa(function() {});
    var we = {
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !ia(a[1]) || !Ea(b)) return;
                var c = je(a[1]);
                if (!c) return;
                se() ? te(c) : ve();
                ue(c.id);
                var d = c.id,
                    e = b[F.Sb] || "default";
                e = e.toString().split(",");
                for (var g = 0; g < e.length; g++) ne[e[g]] = ne[e[g]] || [], ne[e[g]].push(d);
                delete b[F.Sb];
                md("gtag.targets." + c.id, void 0);
                md("gtag.targets." + c.id, Fa(b));
                var h = {};
                h[F.qa] = c.id;
                return re(F.aa, h);
            },
            event: function(a) {
                var b = a[1];
                if (ia(b) && !(3 < a.length)) {
                    var c;
                    if (2 <
                        a.length) {
                        if (!Ea(a[2])) return;
                        c = a[2]
                    }
                    var d = re(b, c);
                    var e;
                    var g = c,
                        h = fd("gtag.fields.send_to", 2);
                    ia(h) || (h = F.qa);
                    var k = g && g[h];
                    void 0 === k && (k = fd(h, 2), void 0 === k && (k = "default"));
                    if (ia(k) || ka(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(ne[l[n]] || []);
                        e = le(m)
                    } else e = void 0;
                    var p = e;
                    if (!p) return;
                    var t = se();
                    t || ve();
                    for (var q = [], r = 0; t && r < p.length; r++) {
                        var v = p[r];
                        q.push(v.id);
                        te(v)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < p.length ? d.eventModel[F.qa] = q.join() : delete d.eventModel[F.qa];
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2];
                    ge[b] || (ge[b] = []);
                    ge[b].push(c)
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Ea(a[1]) ? b = Fa(a[1]) : 3 == a.length && ia(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) return b.eventModel = Fa(b), b.event = "gtag.set", b._clear = !0, b
            }
        },
        xe = {
            policy: !0
        };
    var ye = function() {
        return !1
    };
    var Ee = function(a) {
        if (De(a)) return a;
        this.ug = a
    };
    Ee.prototype.Af = function() {
        return this.ug
    };
    var De = function(a) {
        return !a || "object" !== Ca(a) || Ea(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Ee.prototype.getUntrustedUpdateValue = Ee.prototype.Af;
    var Fe = !1,
        Ge = [];

    function He() {
        if (!Fe) {
            Fe = !0;
            for (var a = 0; a < Ge.length; a++) z(Ge[a])
        }
    }
    var Ie = function(a) {
        Fe ? z(a) : Ge.push(a)
    };
    var Je = [],
        Ke = !1;

    function Le(a) {
        var b = a.eventCallback,
            c = xa(function() {
                ha(b) && z(function() {
                    b(rc.m)
                })
            }),
            d = a.eventTimeout;
        d && f.setTimeout(c, Number(d));
        return c
    }
    var Me = function(a) {
            return f["dataLayer"].push(a)
        },
        Oe = function(a) {
            var b = a._clear;
            pa(a, function(g, h) {
                "_clear" !== g && (b && md(g, void 0), md(g, h))
            });
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Cc(), a["gtm.uniqueEventId"] = d, md("gtm.uniqueEventId", d));
            yc = c;
            var e = Ne(a);
            yc = null;
            if (!wc) {
                wc = a["gtm.start"];
            }
            return e
        };

    function Ne(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = sc.zones;
        d = e ? e.checkState(rc.m, c) : td;
        if (!d.active) return !1;
        var g = Le(a);
        return ee(c, b, d.isWhitelisted, g) ? !0 : !1
    }
    var Pe = function() {
            for (var a = !1; !Ke && 0 < Je.length;) {
                Ke = !0;
                delete bd.eventModel;
                ed();
                var b = Je.shift();
                if (null != b) {
                    var c = De(b);
                    if (c) {
                        var d = b;
                        b = De(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = fd(h, 1);
                            if (ka(k) || Ea(k)) k = Fa(k);
                            cd[h] = k
                        }
                    }
                    try {
                        if (ha(b)) try {
                            b.call(gd)
                        } catch (v) {} else if (ka(b)) {
                            var l = b;
                            if (ia(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = fd(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ia(b[0])) {
                                        var r = we[b[0]];
                                        if (r && (!c || !xe[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Ke = !1;
                                    continue
                                }
                            }
                            a = Oe(b) || a
                        }
                    } finally {
                        c && ed(!0)
                    }
                }
                Ke = !1
            }
            return !a
        },
        Qe = function() {
            var a = Pe();
            try {
                var b = rc.m,
                    c = f["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        }
                    d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Re = function() {
            var a = Ia("dataLayer", []),
                b = Ia("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Ad(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Ie(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < sc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Ee(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Je.push.apply(Je, d);
                if (300 < this.length)
                    for (Jc(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Pe() && h
            };
            Je.push.apply(Je, a.slice(0));
            z(Qe)
        };
    var Te = function(a) {
            return Se ? u.querySelectorAll(a) : null
        },
        Ue = function(a, b) {
            if (!Se) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!u.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ve = !1;
    if (u.querySelectorAll) try {
        var We = u.querySelectorAll(":root");
        We && 1 == We.length && We[0] == u.documentElement && (Ve = !0)
    } catch (a) {}
    var Se = Ve;
    var Xe;
    var tf = {};
    tf.ob = new String("undefined");
    var uf = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === tf.ob ? b : a[d]);
            return c.join("")
        }
    };
    uf.prototype.toString = function() {
        return this.resolve("undefined")
    };
    uf.prototype.valueOf = uf.prototype.toString;
    tf.De = uf;
    tf.$b = {};
    tf.kf = function(a) {
        return new uf(a)
    };
    var vf = {};
    tf.gg = function(a, b) {
        var c = Cc();
        vf[c] = [a, b];
        return c
    };
    tf.td = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = vf[c];
            if (d && "function" === typeof d[b]) d[b]();
            vf[c] = void 0
        }
    };
    tf.Nf = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    tf.Xf = function(a) {
        if (a === tf.ob) return a;
        var b = Cc();
        tf.$b[b] = a;
        return 'google_tag_manager["' + rc.m + '"].macro(' + b + ")"
    };
    tf.Rf = function(a, b, c) {
        a instanceof tf.De && (a = a.resolve(tf.gg(b, c)), b = fa);
        return {
            nc: a,
            I: b
        }
    };
    var wf = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": a.className,
                "gtm.elementId": a["for"] || Qa(a, "id") || "",
                "gtm.elementTarget": a.formTarget || a.target || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
            return d
        },
        xf = function(a) {
            sc.hasOwnProperty("autoEventsSettings") || (sc.autoEventsSettings = {});
            var b = sc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        yf = function(a, b, c) {
            xf(a)[b] = c
        },
        zf = function(a, b, c, d) {
            var e = xf(a),
                g = wa(e, b, d);
            e[b] = c(g)
        },
        Af = function(a, b, c) {
            var d = xf(a);
            return wa(d, b, c)
        };
    var Bf = function() {
            for (var a = Ga.userAgent + (u.cookie || "") + (u.referrer || ""), b = a.length, c = f.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(ua() / 1E3)].join(".")
        },
        Ef = function(a, b, c, d) {
            var e = Cf(b);
            return fb(a, e, Df(c), d)
        },
        Cf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Df = function(a) {
            if (!a ||
                "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Ff(a, b) {
        var c = "" + Cf(a),
            d = Df(b);
        1 < d && (c += "-" + d);
        return c
    };
    var Gf = ["1"],
        Hf = {},
        Lf = function(a, b, c, d) {
            var e = If(a);
            Hf[e] || Jf(e, b, c) || (Kf(e, Bf(), b, c, d), Jf(e, b, c))
        };

    function Kf(a, b, c, d, e) {
        var g;
        g = ["1", Ff(d, c), b].join(".");
        kb(a, g, c, d, 0 == e ? void 0 : new Date(ua() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Jf(a, b, c) {
        var d = Ef(a, b, c, Gf);
        d && (Hf[a] = d);
        return d
    }

    function If(a) {
        return (a || "_gcl") + "_au"
    };
    var Mf = function() {
        for (var a = [], b = u.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Mc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Mc] || (g[a[h].Mc] = []), g[a[h].Mc].push({
                timestamp: k[1],
                xf: k[2]
            }))
        }
        return g
    };

    function Nf() {
        for (var a = Of, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Pf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Of, Qf, Rf = function(a) {
            Of = Of || Pf();
            Qf = Qf || Nf();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Of[l], Of[m], Of[n], Of[p])
            }
            return b.join("")
        },
        Sf = function(a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Qf[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Of = Of || Pf();
            Qf = Qf ||
                Nf();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var Tf;

    function Uf(a, b) {
        if (!a || b === u.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Vf = function() {
        var a = Ia("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Wf = /(.*?)\*(.*?)\*(.*)/,
        Xf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Yf = /^(?:www\.|m\.|amp\.)+/,
        Zf = /([^?#]+)(\?[^#]*)?(#.*)?/,
        $f = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        bg = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Rf(String(d))))
                }
            var e = b.join("*");
            return ["1", ag(e), e].join("*")
        },
        ag = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = Tf)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Tf = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Tf[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        dg = function() {
            return function(a) {
                var b = bb(f.location.href),
                    c = b.search.replace("?", ""),
                    d = Ya(c, "_gl", !0) || "";
                a.query = cg(d) || {};
                var e = ab(b, "fragment").match($f);
                a.fragment = cg(e && e[3] ||
                    "") || {}
            }
        },
        cg = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Wf.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === ag(k, n)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Sf(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function eg(a, b, c) {
        function d(m) {
            var n = m,
                p = $f.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Zf.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function fg(a, b, c) {
        for (var d = {}, e = {}, g = Vf().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Uf(k.domains, b) && (k.fragment ? ya(e, k.callback()) : ya(d, k.callback()))
        }
        if (za(d)) {
            var l = bg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = u.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = eg(l, a.action);
                        Va.test(v) && (a.action = v)
                    }
                }
            } else gg(l, a, !1)
        }
        if (!c && za(e)) {
            var x = bg(e);
            gg(x, a, !0)
        }
    }

    function gg(a, b, c) {
        if (b.href) {
            var d = eg(a, b.href, void 0 === c ? !1 : c);
            Va.test(d) && (b.href = d)
        }
    }
    var hg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || fg(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        ig = function(a) {
            try {
                var b = a.target || a.srcElement || {};
                if (b.action) {
                    var c = ab(bb(b.action), "host");
                    fg(b, c, !0)
                }
            } catch (d) {}
        },
        jg = function(a, b, c, d) {
            var e = Vf();
            e.init || (Oa(u, "mousedown", hg), Oa(u, "keyup", hg), Oa(u, "submit", ig), e.init = !0);
            var g = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Vf().decorators.push(g)
        },
        kg = function() {
            var a = u.location.hostname,
                b = Xf.exec(u.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            return a.replace(Yf, "") === e.replace(Yf, "")
        },
        lg = function(a, b) {
            return !1 === a ? !1 : a || b || kg()
        };
    var mg = /^\w+$/,
        ng = /^[\w-]+$/,
        og = /^~?[\w-]+$/,
        pg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function qg(a) {
        return a && "string" == typeof a && a.match(mg) ? a : "_gcl"
    }
    var sg = function() {
        var a = bb(f.location.href),
            b = ab(a, "query", !1, void 0, "gclid"),
            c = ab(a, "query", !1, void 0, "gclsrc"),
            d = ab(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Ya(e, "gclid", void 0);
            c = c || Ya(e, "gclsrc", void 0)
        }
        return rg(b, c, d)
    };

    function rg(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(ng)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function tg(a, b, c) {
        function d(p, t) {
            var q = ug(p, e);
            q && kb(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = qg(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Jd ? 7776E3 : b.Jd;
        c = c || ua();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.$g ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var ug = function(a, b) {
            var c = pg[a];
            if (void 0 !== c) return b + c
        },
        vg = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
        };

    function wg(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var xg = function(a, b, c, d, e) {
            if (ka(b)) {
                var g = qg(e);
                jg(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = ug(a[k], g);
                        if (l) {
                            var m = cb(l, u.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        yg = function(a) {
            return a.filter(function(b) {
                return og.test(b)
            })
        },
        zg = function(a) {
            for (var b = ["aw", "dc"], c = qg(a && a.prefix), d = {}, e = 0; e < b.length; e++) pg[b[e]] && (d[b[e]] = pg[b[e]]);
            pa(d, function(g, h) {
                var k = cb(c + h, u.cookie);
                if (k.length) {
                    var l = k[0],
                        m = vg(l),
                        n = {};
                    n[g] = [wg(l)];
                    tg(n, a, m)
                }
            })
        };
    var Ag = /^\d+\.fls\.doubleclick\.net$/;

    function Bg(a) {
        var b = bb(f.location.href),
            c = ab(b, "host", !1);
        if (c && c.match(Ag)) {
            var d = ab(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Cg(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Bg("gcl" + a);
            if (c) return c.split(".")
        }
        var d = qg(b);
        if ("_gcl" == d) {
            var e;
            e = sg()[a] || [];
            if (0 < e.length) return e
        }
        var g = ug(a, d),
            h;
        if (g) {
            var k = [];
            if (u.cookie) {
                var l = cb(g, u.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = wg(l[m]);
                        n && -1 === la(k, n) && k.push(n)
                    }
                    h = yg(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Dg = function() {
            var a = Bg("gac");
            if (a) return decodeURIComponent(a);
            var b = Mf(),
                c = [];
            pa(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].xf);
                g = yg(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Eg = function(a, b, c, d, e) {
            Lf(b, c, d, e);
            var g = Hf[If(b)],
                h = sg().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = sc.joined_au = sc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "https://adservice.google.com/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Ga.sendBeacon && Ga.sendBeacon(t) || Na(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = If(b),
                    r = Hf[q];
                r && Kf(q, r, c, d, e)
            }
        };
    var Fg;
    if (3 === rc.sb.length) Fg = "g";
    else {
        var Gg = "G";
        Gg = "g";
        Fg = Gg
    }
    var Hg = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Fg
        },
        Ig = function(a) {
            var b = rc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Hg[c] || "i",
                e = a && "GTM" === c ? b[1] : "",
                g;
            if (3 === rc.sb.length) {
                var h = void 0;
                h = h || (ye() ? "s" : "o");
                g = "2" + (h || "w")
            } else g = "";
            return g + d + rc.sb + e
        };
    var Jg = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        Kg = function(a, b) {
            var c;
            if (2 === b.L) return a("ord", oa(1E11, 1E13)), !0;
            if (3 === b.L) return a("ord", "1"), a("num", oa(1E11, 1E13)), !0;
            if (4 === b.L) return Jg(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.L) c = "1";
            else if (6 === b.L) c = b.Gc;
            else return !1;
            Jg(c) && a("qty", c);
            Jg(b.vb) && a("cost", b.vb);
            Jg(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Lg = encodeURIComponent,
        Mg = function(a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : Lg(p)))
            }
            var d = a.jc,
                e = a.protocol;
            e += a.Eb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Lg(d) + (";type=" + Lg(a.mc)) + (";cat=" + Lg(a.Na));
            var g = a.nf || {};
            pa(g, function(n, p) {
                e += ";" + Lg(n) + "=" + Lg(p + "")
            });
            if (Kg(c, a)) {
                Jg(a.Jb) && c("u", a.Jb);
                Jg(a.Ib) && c("tran", a.Ib);
                c("gtm", Ig());
                !1 === a.Me && c("npa", "1");
                if (a.hc) {
                    var h = Cg("dc", a.wa);
                    h && h.length && c("gcldc", h.join("."));
                    var k = Cg("aw", a.wa);
                    k && k.length && c("gclaw", k.join("."));
                    var l = Dg();
                    l && c("gac", l);
                    Lf(a.wa, void 0, a.hf, a.jf);
                    var m = Hf[If(a.wa)];
                    m && c("auiddc", m)
                }
                Jg(a.Cc) && c("prd", a.Cc, !0);
                pa(a.Pc, function(n, p) {
                    c(n, p)
                });
                e += b || "";
                Jg(a.Cb) && c("~oref", a.Cb);
                a.Eb ? Ma(e + "?", a.I) : Na(e + "?", a.I, a.O)
            } else z(a.O)
        };
    var Og = function(a) {
            var b = "/pagead/conversion/" + Ng(a.conversion_id) + "/?",
                c = Ng(JSON.stringify(a.conversion_data)),
                d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
            if (a.conversionLinkerEnabled) {
                var e = Cg("gf", a.cookiePrefix);
                if (e && e.length)
                    for (var g = 0; g < e.length; g++) d += "&gclgf=" + Ng(e[g])
            }
            Na(d, a.onSuccess, a.onFailure)
        },
        Ng = function(a) {
            return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
        };
    var Pg = !!f.MutationObserver,
        Qg = void 0,
        Rg = function(a) {
            if (!Qg) {
                var b = function() {
                    var c = u.body;
                    if (c)
                        if (Pg)(new MutationObserver(function() {
                            for (var e = 0; e < Qg.length; e++) z(Qg[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Oa(c, "DOMNodeInserted", function() {
                                d || (d = !0, z(function() {
                                    d = !1;
                                    for (var e = 0; e < Qg.length; e++) z(Qg[e])
                                }))
                            })
                        }
                };
                Qg = [];
                u.body ? b() : z(b)
            }
            Qg.push(a)
        };
    var ih = f.clearTimeout,
        jh = f.setTimeout,
        G = function(a, b, c) {
            if (ye()) {
                b && z(b)
            } else return Ka(a, b, c)
        },
        kh = function() {
            return new Date
        },
        lh = function() {
            return f.location.href
        },
        mh = function(a) {
            return ab(bb(a), "fragment")
        },
        nh = function(a) {
            return $a(bb(a))
        },
        oh = function(a, b) {
            return fd(a, b || 2)
        },
        ph = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Me(a)
        },
        qh = function(a, b) {
            f[a] = b
        },
        L = function(a, b, c) {
            b && (void 0 === f[a] ||
                c && !f[a]) && (f[a] = b);
            return f[a]
        },
        rh = function(a, b, c) {
            return cb(a, b, void 0 === c ? !0 : !!c)
        },
        sh = function(a, b, c, d) {
            var e = {
                    prefix: a,
                    path: b,
                    domain: c,
                    Jd: d
                },
                g = sg();
            tg(g, e);
            zg(e)
        },
        th = function(a, b, c, d, e) {
            var g = dg(),
                h = Vf();
            h.data || (h.data = {
                query: {},
                fragment: {}
            }, g(h.data));
            var k = {},
                l = h.data;
            l && (ya(k, l.query), ya(k, l.fragment));
            for (var m = qg(b), n = 0; n < a.length; ++n) {
                var p = a[n];
                if (void 0 !== pg[p]) {
                    var t = ug(p, m),
                        q = k[t];
                    if (q) {
                        var r = Math.min(vg(q), ua()),
                            v;
                        b: {
                            for (var x = r, y = cb(t, u.cookie),
                                    w = 0; w < y.length; ++w)
                                if (vg(y[w]) > x) {
                                    v = !0;
                                    break b
                                }
                            v = !1
                        }
                        v || kb(t, q, c, d, 0 == e ? void 0 : new Date(r + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var B = {
                prefix: b,
                path: c,
                domain: d
            };
            tg(rg(k.gclid, k.gclsrc), B);
        },
        uh = function(a, b, c, d, e) {
            xg(a, b, c, d, e);
        },
        vh = function(a, b) {
            if (ye()) {
                b && z(b)
            } else Ma(a, b)
        },
        wh = function(a) {
            return !!Af(a,
                "init", !1)
        },
        xh = function(a) {
            yf(a, "init", !0)
        },
        yh = function(a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : vc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && pa(b, function(e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            G(E("https://", "http://", d))
        };
    var zh = function(a, b, c, d, e, g) {
        var h = {
            config: a,
            gtm: Ig()
        };
        c && (Lf(d, void 0, e, g), h.auiddc = Hf[If(d)]);
        b && (h.loadInsecure = b);
        L("__dc_ns_processor", []).push(h);
        G((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    };
    var Ah = tf.Rf;
    var Bh = new va;

    function Ch(a, b) {
        function c(h) {
            var k = bb(h),
                l = ab(k, "protocol"),
                m = ab(k, "host", !0),
                n = ab(k, "port"),
                p = ab(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, p]
        }
        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
            if (d[g] !== e[g]) return !1;
        return !0
    }

    function Dh(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ka(c)) {
            for (var d = 0; d < c.length; d++)
                if (Dh({
                        "function": a["function"],
                        arg0: b,
                        arg1: c[d]
                    })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    e = b[g[h]](c);
                                    break a
                                }
                        } catch (v) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length -
                    l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= la(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var p;
                var t = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + t,
                        r = Bh.get(q);
                    r || (r = new RegExp(c, t), Bh.set(q, r));
                    p = r.test(b)
                } catch (v) {
                    p = !1
                }
                return p;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Ch(b, c)
        }
        return !1
    };
    var Fh = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Gh = {},
        Hh = encodeURI,
        M = encodeURIComponent,
        Ih = Na;
    var Jh = function(a, b) {
        if (!a) return !1;
        var c = ab(bb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Kh = function(a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Gh.Of = function() {
        var a = !1;
        return a
    };
    var ti = function(a, b, c, d) {
            this.n = a;
            this.t = b;
            this.p = c;
            this.d = d
        },
        ui = function() {
            this.c = 1;
            this.e = [];
            this.p = null
        };

    function vi(a) {
        var b = sc,
            c = b.gss = b.gss || {};
        return c[a] = c[a] || new ui
    }
    var wi = function(a, b) {
            vi(a).p = b
        },
        xi = function(a) {
            var b = vi(a),
                c = b.p;
            if (c) {
                var d = b.e,
                    e = [];
                b.e = [];
                var g = function(h) {
                    for (var k = 0; k < h.length; k++) try {
                        var l = h[k];
                        l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, l.p)
                    } catch (m) {}
                };
                g(d);
                g(e)
            }
        };
    var zi = function() {
        var a = f.gaGlobal = f.gaGlobal || {};
        a.hid = a.hid || oa();
        return a.hid
    };
    var Oi = window,
        Pi = document,
        Qi = function(a) {
            var b = Oi._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Oi["ga-disable-" + a]) return !0;
            try {
                var c = Oi.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = cb("AMP_TOKEN", Pi.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Pi.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Xi = function(a, b, c) {
            Wi(a);
            var d = Math.floor(ua() / 1E3);
            vi(a).e.push(new ti(b, d, c, void 0));
            xi(a)
        },
        Yi = function(a, b, c) {
            Wi(a);
            var d = Math.floor(ua() / 1E3);
            vi(a).e.push(new ti(b, d, c, !0))
        },
        Wi = function(a) {
            if (1 === vi(a).c) {
                vi(a).c = 2;
                var b = encodeURIComponent(a);
                Ka(("http:" != f.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
            }
        },
        $i = function(a, b) {},
        Zi = function(a, b) {};
    var W = {
        a: {}
    };
    W.a.gtagha = ["google"],
        function() {
            function a(h) {
                function k(m, n) {
                    void 0 !== n && l.push(m + "=" + n)
                }
                if (void 0 === h) return "";
                var l = [];
                k("hct_base_price", h.Cd);
                k("hct_booking_xref", h.Dd);
                k("hct_checkin_date", h.Df);
                k("hct_checkout_date", h.Ef);
                k("hct_currency_code", h.Ff);
                k("hct_partner_hotel_id", h.Ed);
                k("hct_total_price", h.Fd);
                return l.join(";")
            }

            function b(h, k, l, m) {
                var n = M(h),
                    p = M(a(k)),
                    t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
                l && (t += Cg("ha", m).map(function(q) {
                    return "&gclha=" +
                        M(q)
                }).join(""));
                return t
            }

            function c(h, k, l, m, n, p) {
                /^\d+$/.test(h) ? Ih(b(h, k, l, m), n, p) : z(p)
            }

            function d(h, k, l, m) {
                var n = {};
                ia(h) ? n.Dd = h : "number" === typeof h && (n.Dd = String(h));
                ia(l) && (n.Ff = l);
                ia(k) ? n.Fd = n.Cd = k : "number" === typeof k && (n.Fd = n.Cd = String(k));
                if (!ka(m) || 0 == m.length) return n;
                var p = m[0];
                if (!Ea(p)) return n;
                ia(p.id) ? n.Ed = p.id : "number" === typeof p.id && (n.Ed = String(p.id));
                ia(p.start_date) && (n.Df = p.start_date);
                ia(p.end_date) && (n.Ef = p.end_date);
                return n
            }

            function e(h) {
                var k = yc,
                    l = h.vtp_gtmOnSuccess,
                    m = h.vtp_gtmOnFailure,
                    n = h.vtp_conversionId,
                    p = n.containerId,
                    t = function(B) {
                        return hd(B, p, n.id)
                    },
                    q = !1 !== t(F.Ga),
                    r = t(F.Fa) || t(F.F),
                    v = t(F.N),
                    x = t(F.T);
                if (k === F.aa) {
                    var y = t(F.Ia) || {};
                    q && (lg(y[F.gb], !!y[F.H]) && th(g, r, void 0, v, x), sh(r, void 0, v, x));
                    y[F.H] && uh(g, y[F.H], y[F.ib], !!y[F.hb], r);
                    z(l)
                } else if ("purchase" === k) {
                    var w = d(t(F.Ka), t(F.ca), t(F.oa), t(F.S));
                    c(n.da[0], w, q, r, l, m)
                } else z(m)
            }
            var g = ["ha"];
            W.__gtagha = e;
            W.__gtagha.g = "gtagha";
            W.__gtagha.h = !0;
            W.__gtagha.b = 0;
        }();
    W.a.e = ["google"],
        function() {
            (function(a) {
                W.__e = a;
                W.__e.g = "e";
                W.__e.h = !0;
                W.__e.b = 0
            })(function() {
                return yc
            })
        }();
    W.a.v = ["google"],
        function() {
            (function(a) {
                W.__v = a;
                W.__v.g = "v";
                W.__v.h = !0;
                W.__v.b = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = oh(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();





    W.a.gtagaw = ["google"],
        function() {
            var a = !1,
                b = [],
                c = ["aw", "dc"],
                d = function(m) {
                    var n = L("google_trackConversion"),
                        p = m.gtm_onFailure;
                    "function" == typeof n ? n(m) || p() : p()
                },
                e = function() {
                    for (; 0 < b.length;) d(b.shift())
                },
                g = function() {
                    a || (a = !0, Bd(), G(E("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function() {
                        e();
                        b = {
                            push: d
                        }
                    }, function() {
                        e();
                        a = !1
                    }))
                },
                h = function(m, n, p, t) {
                    if (ye()) {} else {
                        ka(n) || (n = [n]);
                        for (var q =
                                0; q < n.length; q++) 1 > q && Fc(m.da[0], m.da[1], n[q], {
                            Yd: p,
                            wg: t
                        })
                    }
                },
                k = function(m) {
                    if (m) {
                        for (var n = [], p = 0; p < m.length; ++p) {
                            var t = m[p];
                            t && n.push({
                                item_id: t.id,
                                quantity: t.quantity,
                                value: t.price,
                                start_date: t.start_date,
                                end_date: t.end_date
                            })
                        }
                        return n
                    }
                },
                l = function(m) {
                    var n = m.vtp_conversionId,
                        p = yc,
                        t = p == F.aa,
                        q = n.da[0],
                        r = n.da[1],
                        v = void 0 !== r,
                        x = n.containerId,
                        y = v ? n.id : void 0,
                        w = function(Y) {
                            return hd(Y, x, y)
                        },
                        B = !1 !== w(F.Ga),
                        A = w(F.Fa) || w(F.F),
                        C = w(F.N),
                        D = w(F.T);
                    if (t) {
                        var H = w(F.Ia) || {};
                        B && (lg(H[F.gb], !!H[F.H]) && th(c, A, void 0,
                            C, D), sh(A, void 0, C, D));
                        H[F.H] && uh(c, H[F.H], H[F.ib], !!H[F.hb], A);
                        if (v) {
                            var N = w(F.Wb),
                                R = w(F.Ub),
                                V = w(F.Vb),
                                Q = w(F.jd);
                            h(n, N, R || V, Q)
                        }
                    }
                    var S = !1 === w(F.Zc) || !1 === w(F.Ja);
                    if (!t || !v && !S)
                        if (!0 === w(F.$c) && (v = !1), !1 !== w(F.R) || v) {
                            var O = {
                                google_conversion_id: q,
                                google_remarketing_only: !v,
                                onload_callback: m.vtp_gtmOnSuccess,
                                gtm_onFailure: m.vtp_gtmOnFailure,
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_domain: "",
                                google_conversion_label: r,
                                google_conversion_language: w(F.Ha),
                                google_conversion_value: w(F.ca),
                                google_conversion_currency: w(F.oa),
                                google_conversion_order_id: w(F.Ka),
                                google_user_id: w(F.ba),
                                google_conversion_page_url: w(F.jb),
                                google_conversion_referrer_url: w(F.kb),
                                google_gtm: Ig()
                            };
                            ye() && (O.opt_image_generator = function() {
                                return new Image
                            }, O.google_enable_display_cookie_match = !1);
                            !1 === w(F.R) && (O.google_allow_ad_personalization_signals = !1);
                            O.google_read_gcl_cookie_opt_out = !B;
                            B && A && (O.google_gcl_cookie_prefix = A);
                            var J = function() {
                                var Y = w(F.eb),
                                    K = {
                                        event: p
                                    };
                                if (ka(Y)) {
                                    for (var P = 0; P < Y.length; ++P) {
                                        var ba =
                                            Y[P],
                                            na = w(ba);
                                        void 0 !== na && (K[ba] = na)
                                    }
                                    return K
                                }
                                var X = w("eventModel");
                                if (!X) return null;
                                Fa(X, K);
                                for (var Z = 0; Z < F.Tc.length; ++Z) delete K[F.Tc[Z]];
                                return K
                            }();
                            J && (O.google_custom_params = J);
                            !v && w(F.S) && (O.google_gtag_event_data = {
                                items: w(F.S),
                                value: w(F.ca)
                            });
                            if (v && "purchase" == p) {
                                w(F.Mb) && (O.google_conversion_merchant_id = w(F.Mb), O.google_basket_feed_country = w(F.bd), O.google_basket_feed_language = w(F.cd), O.google_basket_discount = w(F.ad), O.google_basket_transaction_type = p, O.google_disable_merchant_reported_conversions = !0 === w(F.ed), ye() && (O.google_disable_merchant_reported_conversions = !0));
                                var I = k(w(F.S));
                                I && (O.google_conversion_items = I)
                            }
                            var T = function(Y, K) {
                                void 0 != K && "" !== K && (O.google_additional_conversion_params = O.google_additional_conversion_params || {}, O.google_additional_conversion_params[Y] = K)
                            };
                            v && ("boolean" == typeof w(F.Tb) && T("vdnc", w(F.Tb)), T("vdltv", w(F.dd)));
                            var U = !0;
                            U && b.push(O)
                        }
                    g()
                };
            W.__gtagaw = l;
            W.__gtagaw.g = "gtagaw";
            W.__gtagaw.h = !0;
            W.__gtagaw.b = 0
        }();

    W.a.get = ["google"],
        function() {
            function a(b, c) {
                pa(c, function(e) {
                    "_" === e.charAt(0) && delete c[e]
                });
                var d = c[F.nb] || {};
                pa(d, function(e) {
                    "_" === e.charAt(0) && delete d[e]
                })
            }(function(b) {
                W.__get = b;
                W.__get.g = "get";
                W.__get.h = !0;
                W.__get.b = 0
            })(function(b) {
                if (b.vtp_isAutoTag) {
                    for (var c = String(b.vtp_trackingId), d = yc || "", e = {}, g = F.kd, h = 0; h < g.length; h++) {
                        var k = kd(g[h], c);
                        void 0 !== k && (e[g[h]] = k)
                    }
                    var l = kd(F.eb, c);
                    if (ka(l))
                        for (var m = 0; m < l.length; m++) {
                            var n = l[m],
                                p = kd(n, c);
                            void 0 !== p && (e[n] = p)
                        } else {
                            var t = oh("eventModel");
                            Fa(t, e)
                        }
                    if ("_" === d.charAt(0)) return;
                    a(d, e);
                    Xi(c, d, Fa(e))
                } else {
                    var q = b.vtp_settings,
                        r = q.eventParameters,
                        v = q.userProperties;
                    Fa(Kh(b.vtp_eventParameters, "name", "value"), r);
                    Fa(Kh(b.vtp_userProperties, "name", "value"), v);
                    r[F.nb] = v;
                    var x = String(b.vtp_eventName),
                        y = b.vtp_allowSystemNames;
                    if (!y && "_" === x.charAt(0)) return;
                    y || a(x, r);
                    (b.vtp_deferrable ? Yi : Xi)(String(q.streamId), x, r)
                }
                b.vtp_gtmOnSuccess()
            })
        }();



    W.a.gtagfl = [],
        function() {
            function a(e) {
                var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
                if (g) {
                    var h = {
                        standard: 2,
                        unique: 3,
                        per_session: 4,
                        transactions: 5,
                        items_sold: 6,
                        "": 1
                    }[(g[5] || "").toLowerCase()];
                    if (h) return {
                        containerId: "DC-" + g[1],
                        Xd: g[3] ? e : "",
                        Ge: g[1],
                        Fe: g[3] || "",
                        Na: g[4] || "",
                        L: h
                    }
                }
            }

            function b(e, g) {
                function h(t, q, r) {
                    void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
                }
                var k = [],
                    l = g(F.S) || [];
                if (ka(l))
                    for (var m = 0; m < l.length; m++) {
                        var n = l[m],
                            p = m + 1;
                        h("i", p, n.id);
                        h("p", p, n.price);
                        h("q", p, n.quantity);
                        h("c", p, g(F.ee));
                        h("l", p, g(F.Ha))
                    }
                return k.join("|")
            }

            function c(e, g, h) {
                var k = /^u([1-9]\d?|100)$/,
                    l = e(F.fe) || {},
                    m = ld(g, h),
                    n = {},
                    p = {};
                if (Ea(l))
                    for (var t in l)
                        if (l.hasOwnProperty(t) && k.test(t)) {
                            var q = l[t];
                            ia(q) && (n[t] = q)
                        }
                for (var r = 0; r < m.length; r++) {
                    var v = m[r];
                    k.test(v) && (n[v] = v)
                }
                for (var x in n) n.hasOwnProperty(x) && (p[x] = e(n[x]));
                return p
            }
            var d = ["aw", "dc"];
            (function(e) {
                W.__gtagfl = e;
                W.__gtagfl.g = "gtagfl";
                W.__gtagfl.h = !0;
                W.__gtagfl.b = 0
            })(function(e) {
                var g = e.vtp_gtmOnSuccess,
                    h = e.vtp_gtmOnFailure,
                    k = a(e.vtp_targetId);
                if (k) {
                    var l = function(V) {
                            return hd(V, k.containerId, k.Xd || void 0)
                        },
                        m = !1 !== l(F.Ga),
                        n = l(F.Fa) || l(F.F),
                        p = l(F.N),
                        t = l(F.T),
                        q = l(F.ie),
                        r = 3 === Dc();
                    if (yc === F.aa) {
                        var v = l(F.Ia) || {},
                            x = l(F.de),
                            y = void 0 === x ? !0 : !!x;
                        m && (lg(v[F.gb], !!v[F.H]) && th(d, n, void 0, p, t), sh(n, void 0, p, t), Eg(y, n, void 0, p, t));
                        v[F.H] && uh(d, v[F.H], v[F.ib], !!v[F.hb], n);
                        if (q && q.exclusion_parameters && q.engines) {}
                        z(g)
                    } else {
                        var w = {},
                            B = l(F.he);
                        if (Ea(B))
                            for (var A in B)
                                if (B.hasOwnProperty(A)) {
                                    var C = B[A];
                                    void 0 !== C && null !== C && (w[A] = C)
                                }
                        var D = "";
                        if (5 === k.L || 6 === k.L) D = b(M, l);
                        var H = c(l, k.containerId, k.Xd),
                            N = !0 === l(F.$d);
                        if (ye() && N) {
                            N = !1
                        }
                        var R = {
                            Na: k.Na,
                            hc: m,
                            hf: p,
                            jf: t,
                            wa: n,
                            vb: l(F.ca),
                            L: k.L,
                            nf: w,
                            jc: k.Ge,
                            mc: k.Fe,
                            O: h,
                            I: g,
                            Cb: nh(lh()),
                            Cc: D,
                            protocol: r ? "http:" : "https:",
                            Gc: l(F.ue),
                            Eb: N,
                            sessionId: l(F.mb),
                            Ib: void 0,
                            transactionId: l(F.Ka),
                            Jb: void 0,
                            Pc: H,
                            Me: !1 !== l(F.R)
                        };
                        Mg(R)
                    }
                } else z(h)
            })
        }();


    W.a.gtaggf = ["google"],
        function() {
            var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
                b = function(c) {
                    if (c) {
                        for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                            var h = c[g];
                            !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (d[e] = {
                                cabin: h.travel_class,
                                fare_product: h.fare_product,
                                booking_code: h.booking_code,
                                flight_number: h.flight_number,
                                origin: h.origin,
                                destination: h.destination,
                                departure_date: h.start_date
                            }, e++)
                        }
                        return d
                    }
                };
            (function(c) {
                W.__gtaggf = c;
                W.__gtaggf.g = "gtaggf";
                W.__gtaggf.h = !0;
                W.__gtaggf.b =
                    0
            })(function(c) {
                var d = yc,
                    e = c.vtp_gtmOnSuccess,
                    g = c.vtp_gtmOnFailure,
                    h = c.vtp_conversionId,
                    k = h.da[0],
                    l = h.containerId,
                    m = function(w) {
                        return hd(w, l, h.id)
                    },
                    n = !1 !== m(F.Ga),
                    p = m(F.Fa) || m(F.F),
                    t = m(F.N),
                    q = m(F.T);
                if (d === F.aa) n && sh(p, void 0, t, q), z(e);
                else {
                    var r = {
                        conversion_id: k,
                        onFailure: g,
                        onSuccess: e,
                        conversionLinkerEnabled: n,
                        cookiePrefix: p
                    };
                    if ("purchase" === d) {
                        var v = a.test(lh()),
                            x = {
                                partner_id: k,
                                trip_type: m(F.xe),
                                total_price: m(F.ca),
                                currency: m(F.oa),
                                is_direct_booking: v,
                                flight_segment: b(m(F.S))
                            },
                            y = m(F.te);
                        y && "object" ===
                            typeof y && (x.passengers_total = y.total, x.passengers_adult = y.adult, x.passengers_child = y.child, x.passengers_infant_in_seat = y.infant_in_seat, x.passengers_infant_in_lap = y.infant_in_lap);
                        r.conversion_data = x
                    }
                    Og(r)
                }
            })
        }();


    W.a.gtagua = ["google"],
        function() {
            var a, b = {
                    client_id: 1,
                    client_storage: "storage",
                    cookie_name: 1,
                    cookie_domain: 1,
                    cookie_expires: 1,
                    cookie_path: 1,
                    cookie_update: 1,
                    sample_rate: 1,
                    site_speed_sample_rate: 1,
                    use_amp_client_id: 1,
                    store_gac: 1,
                    conversion_linker: "storeGac"
                },
                c = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: {
                        name: "campaignName",
                        source: "campaignSource",
                        medium: "campaignMedium",
                        term: "campaignTerm",
                        content: "campaignContent",
                        id: "campaignId"
                    },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                d = {
                    content_id: 1,
                    event_category: 1,
                    event_action: 1,
                    event_label: 1,
                    link_attribution: 1,
                    linker: 1,
                    method: 1,
                    name: 1,
                    send_page_view: 1,
                    value: 1
                },
                e = {
                    cookie_name: 1,
                    cookie_expires: "duration",
                    levels: 1
                },
                g = {
                    anonymize_ip: 1,
                    fatal: 1,
                    non_interaction: 1,
                    use_amp_client_id: 1,
                    send_page_view: 1,
                    store_gac: 1,
                    conversion_linker: 1
                },
                h = function(r, v, x, y) {
                    if (void 0 !== x)
                        if (g[v] && (x = ra(x)), "anonymize_ip" != v || x || (x = void 0), 1 === r) y[k(v)] = x;
                        else if (ia(r)) y[r] = x;
                    else
                        for (var w in r) r.hasOwnProperty(w) && void 0 !== x[w] && (y[r[w]] = x[w])
                },
                k = function(r) {
                    return r && ia(r) ? r.replace(/(_[a-z])/g, function(v) {
                        return v[1].toUpperCase()
                    }) : r
                },
                l = function(r, v, x) {
                    r.hasOwnProperty(v) || (r[v] = x)
                },
                m = function(r, v, x) {
                    var y = {},
                        w = {},
                        B = {},
                        A;
                    var C = kd(F.pe, r);
                    if (ka(C)) {
                        for (var D = [], H = 0; H < C.length; H++) {
                            var N = C[H];
                            if (void 0 != N) {
                                var R = N.id,
                                    V = N.variant;
                                void 0 != R && void 0 !=
                                    V && D.push(String(R) + "." + String(V))
                            }
                        }
                        A = 0 < D.length ? D.join("!") : void 0
                    } else A = void 0;
                    var Q = A;
                    Q && l(w, "exp", Q);
                    var S = kd("custom_map", r);
                    if (Ea(S))
                        for (var O in S)
                            if (S.hasOwnProperty(O) && /^(dimension|metric)\d+$/.test(O) && void 0 != S[O]) {
                                var J = kd(String(S[O]), r);
                                void 0 !== J && l(w, O, J)
                            }
                    for (var I = ld(r), T = 0; T < I.length; ++T) {
                        var U = I[T],
                            Y = kd(U, r);
                        d.hasOwnProperty(U) ? h(d[U], U, Y, y) : c.hasOwnProperty(U) ? h(c[U], U, Y, w) : b.hasOwnProperty(U) ? h(b[U], U, Y, B) : /^(dimension|metric|content_group)\d+$/.test(U) ? h(1, U, Y, w) : U === F.F &&
                            0 > la(I, F.cb) && (B.cookieName = Y + "_ga")
                    }
                    var K = String(yc);
                    l(B, "cookieDomain", "auto");
                    l(w, "forceSSL", !0);
                    var P = "general";
                    0 <= la("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), K) ? P = "ecommerce" : 0 <= la("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), K) ? P = "engagement" : "exception" == K && (P = "error");
                    l(y, "eventCategory", P);
                    0 <= la(["view_item",
                        "view_item_list", "view_promotion", "view_search_results"
                    ], K) && l(w, "nonInteraction", !0);
                    "login" == K || "sign_up" == K || "share" == K ? l(y, "eventLabel", kd(F.qe, r)) : "search" == K || "view_search_results" == K ? l(y, "eventLabel", kd(F.ve, r)) : "select_content" == K && l(y, "eventLabel", kd(F.ce, r));
                    var ba = y[F.Ia] || {},
                        na = ba[F.gb];
                    na || 0 != na && ba[F.H] ? B.allowLinker = !0 : !1 === na && l(B, "useAmpClientId", !1);
                    if (!1 === kd(F.ae, r) || !1 === kd(F.R, r)) w.allowAdFeatures = !1;
                    B.name = v;
                    w["&gtm"] = Ig(!0);
                    w.hitCallback = x;
                    y.W = w;
                    y.ud = B;
                    return y
                },
                n = function(r) {
                    function v(J) {
                        var I =
                            Fa(J);
                        I.list = J.list_name;
                        I.listPosition = J.list_position;
                        I.position = J.list_position || J.creative_slot;
                        I.creative = J.creative_name;
                        return I
                    }

                    function x(J) {
                        for (var I = [], T = 0; J && T < J.length; T++) J[T] && I.push(v(J[T]));
                        return I.length ? I : void 0
                    }

                    function y(J) {
                        return {
                            id: B(w.Ka),
                            affiliation: B(w.je),
                            revenue: B(w.ca),
                            tax: B(w.oe),
                            shipping: B(w.ne),
                            coupon: B(w.ke),
                            list: B(w.Nb) || J
                        }
                    }
                    for (var w = F, B = function(J) {
                            return hd(J, r, void 0)
                        }, A = B(w.S), C, D = 0; A && D < A.length && !(C = A[D][w.Nb]); D++);
                    var H = B("custom_map");
                    if (Ea(H))
                        for (var N =
                                0; A && N < A.length; ++N) {
                            var R = A[N],
                                V;
                            for (V in H) H.hasOwnProperty(V) && /^(dimension|metric)\d+$/.test(V) && void 0 != H[V] && l(R, V, R[H[V]])
                        }
                    var Q = null,
                        S = yc,
                        O = B(w.me);
                    "purchase" == S || "refund" == S ? Q = {
                        action: S,
                        Ma: y(),
                        Ba: x(A)
                    } : "add_to_cart" == S ? Q = {
                        action: "add",
                        Ba: x(A)
                    } : "remove_from_cart" == S ? Q = {
                        action: "remove",
                        Ba: x(A)
                    } : "view_item" == S ? Q = {
                        action: "detail",
                        Ma: y(C),
                        Ba: x(A)
                    } : "view_item_list" == S ? Q = {
                        action: "impressions",
                        If: x(A)
                    } : "view_promotion" == S ? Q = {
                        action: "promo_view",
                        Dc: x(O)
                    } : "select_content" == S && O && 0 < O.length ? Q = {
                        action: "promo_click",
                        Dc: x(O)
                    } : "select_content" == S ? Q = {
                        action: "click",
                        Ma: {
                            list: B(w.Nb) || C
                        },
                        Ba: x(A)
                    } : "begin_checkout" == S || "checkout_progress" == S ? Q = {
                        action: "checkout",
                        Ba: x(A),
                        Ma: {
                            step: "begin_checkout" == S ? 1 : B(w.gd),
                            option: B(w.fd)
                        }
                    } : "set_checkout_option" == S && (Q = {
                        action: "checkout_option",
                        Ma: {
                            step: B(w.gd),
                            option: B(w.fd)
                        }
                    });
                    Q && (Q.Hg = B(w.oa));
                    return Q
                },
                p = {},
                t = function(r, v) {
                    var x = p[r];
                    p[r] = Fa(v);
                    if (!x) return !1;
                    for (var y in v)
                        if (v.hasOwnProperty(y) && v[y] !== x[y]) return !0;
                    for (var w in x)
                        if (x.hasOwnProperty(w) && x[w] !== v[w]) return !0;
                    return !1
                },
                q = function(r) {
                    var v = r.vtp_trackingId,
                        x = Id();
                    if (ha(x)) {
                        var y = "gtag_" + v.split("-").join("_"),
                            w = function(Q) {
                                var S = [].slice.call(arguments, 0);
                                S[0] = y + "." + S[0];
                                x.apply(window, S)
                            },
                            B = function() {
                                var Q = function(I, T) {
                                        for (var U = 0; T && U < T.length; U++) w(I, T[U])
                                    },
                                    S = n(v);
                                if (S) {
                                    var O = S.action;
                                    if ("impressions" == O) Q("ec:addImpression", S.If);
                                    else if ("promo_click" == O || "promo_view" == O) {
                                        var J = S.Dc;
                                        Q("ec:addPromo", S.Dc);
                                        J && 0 < J.length && "promo_click" == O && w("ec:setAction", O)
                                    } else Q("ec:addProduct", S.Ba), w("ec:setAction",
                                        O, S.Ma)
                                }
                            },
                            A = function() {
                                if (ye()) {} else {
                                    var Q = kd(F.se, v);
                                    Q && (w("require", Q, {
                                        dataLayer: "dataLayer"
                                    }), w("require", "render"))
                                }
                            },
                            C = function() {
                                if (ye()) {} else {
                                    var Q = kd(F.Wb, v),
                                        S = kd(F.Vb, v),
                                        O = kd(F.Ub, v),
                                        J;
                                    J = ka(Q) ? Q : [Q];
                                    for (var I = 0; I < J.length; I++) 5 > I && Nd(v, J[I], {
                                        zd: O || S
                                    });
                                }
                            },
                            D = m(v, y, r.vtp_gtmOnSuccess);
                        t(y, D.ud) && x(function() {
                            Gd() && Gd().remove(y)
                        });
                        x("create", v, D.ud);
                        (function() {
                            var Q = kd("custom_map", v);
                            x(function() {
                                if (Ea(Q)) {
                                    var S = D.W,
                                        O = Gd().getByName(y),
                                        J;
                                    for (J in Q)
                                        if (Q.hasOwnProperty(J) && /^(dimension|metric)\d+$/.test(J) && void 0 != Q[J]) {
                                            var I = O.get(k(Q[J]));
                                            l(S, J, I)
                                        }
                                }
                            })
                        })();
                        (function(Q) {
                            if (Q) {
                                var S = {};
                                if (Ea(Q))
                                    for (var O in e) e.hasOwnProperty(O) && h(e[O], O, Q[O], S);
                                w("require", "linkid", S)
                            }
                        })(D.linkAttribution);
                        var H = D[F.Ia];
                        if (H && H[F.H]) {
                            var N = H[F.ib];
                            Jd(y + ".", H[F.H],
                                void 0 === N ? !!H.use_anchor : "fragment" === N, !!H[F.hb])
                        }
                        var R = function(Q, S, O) {
                                O && (S = "" + S);
                                D.W[Q] = S
                            },
                            V = yc;
                        V == F.Lb ? (A(), w("send", "pageview", D.W)) : V == F.aa ? (A(), C(), 0 != D.sendPageView && w("send", "pageview", D.W)) : "screen_view" == V ? w("send", "screenview", D.W) : "timing_complete" == V ? (R("timingCategory", D.eventCategory, !0), R("timingVar", D.name, !0), R("timingValue", qa(D.value)), void 0 !== D.eventLabel && R("timingLabel", D.eventLabel, !0), w("send", "timing", D.W)) : "exception" == V ? w("send", "exception", D.W) : "optimize.callback" !=
                            V && (0 <= la("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), V) && (w("require", "ec", "ec.js"), B()), R("eventCategory", D.eventCategory, !0), R("eventAction", D.eventAction || V, !0), void 0 !== D.eventLabel && R("eventLabel", D.eventLabel, !0), void 0 !== D.value && R("eventValue", qa(D.value)), w("send", "event", D.W));
                        a || (a = !0, Bd(), G("https://www.google-analytics.com/analytics.js", function() {
                                Gd().loaded || r.vtp_gtmOnFailure()
                            },
                            r.vtp_gtmOnFailure))
                    } else z(r.vtp_gtmOnFailure)
                };
            W.__gtagua = q;
            W.__gtagua.g = "gtagua";
            W.__gtagua.h = !0;
            W.__gtagua.b = 0
        }();

    var aj = {};
    aj.macro = function(a) {
        if (tf.$b.hasOwnProperty(a)) return tf.$b[a]
    }, aj.onHtmlSuccess = tf.td(!0), aj.onHtmlFailure = tf.td(!1);
    aj.dataLayer = gd;
    aj.callback = function(a) {
        Ac.hasOwnProperty(a) && ha(Ac[a]) && Ac[a]();
        delete Ac[a]
    };
    aj.Ve = function() {
        sc[rc.m] = aj;
        Bc = W.a;
        Rb = Rb || tf;
        Sb = sd
    };
    aj.Jf = function() {
        sc = f.google_tag_manager = f.google_tag_manager || {};
        if (sc[rc.m]) {
            var a = sc.zones;
            a && a.unregisterChild(rc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Kb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Nb.push(e[g]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Mb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t <
                    n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                Lb.push(p)
            }
            Pb = W;
            Qb = Dh;
            aj.Ve();
            Re();
            vd = !1;
            wd = 0;
            if ("interactive" == u.readyState && !u.createEventObject || "complete" == u.readyState) yd();
            else {
                Oa(u, "DOMContentLoaded", yd);
                Oa(u, "readystatechange", yd);
                if (u.createEventObject && u.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !f.frameElement
                    } catch (y) {}
                    q && zd()
                }
                Oa(f, "load", yd)
            }
            Fe = !1;
            "complete" === u.readyState ? He() : Oa(f, "load", He);
            a: {
                if (!Xc) break a;f.setInterval(Yc, 864E5);
            }
            xc = (new Date).getTime();
        }
    };
    (0, aj.Jf)();

})()