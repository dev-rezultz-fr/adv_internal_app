!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "https://s0.assets-yammer.com/assets/",
    b(0)
}([function(a, b, c) {
    c(5),
    c(1),
    c(8),
    c(9),
    c(2),
    c(10),
    a.exports = c(3)
}
, function(a, b) {
    "use strict";
    window.yam = window.yam || {
        config: function a(b) {
            for (var c in b)
                yam._configData[c] = b[c];
            return yam._configData
        },
        _configData: {}
    }
}
, function(a, b) {
    "use strict";
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
    ;
    !function() {
        function a(a) {
            window.console && "function" == typeof console.log && console.log("[yammer] " + a)
        }
        function b(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c) : a.attachEvent("on" + b, function(b) {
                c.call(a, b)
            })
        }
        function d(a) {
            function b(a, e) {
                for (var f in a)
                    if (Object.prototype.hasOwnProperty.call(a, f)) {
                        var g = "" === e ? f : e + "[" + f + "]";
                        "object" === c(a[f]) ? b(a[f], g) : d[g] = a[f]
                    }
            }
            var d = {};
            b(a, "");
            var e = [];
            for (var f in d)
                Object.prototype.hasOwnProperty.call(d, f) && e.push(encodeURIComponent(f) + "=" + encodeURIComponent(d[f]));
            return e.join("&")
        }
        function e(a) {
            a = a || {};
            var b = a.style || j
              , c = document.createElement("iframe");
            c.id = a.id,
            c.name = a.name || a.id,
            c.frameBorder = "none",
            c.scrolling = "no";
            for (var d in b)
                Object.prototype.hasOwnProperty.call(b, d) && (c.style[d] = b[d]);
            return c.src = "javascript://",
            c
        }
        function f(a) {
            var b = a.objectProperties || {};
            b.url || (b.url = document.location.href,
            a.objectProperties = b)
        }
        function g(b) {
            var c = b || document.body;
            return "string" == typeof c && (c = document.querySelector(c)),
            c ? c : void a("Could not find container to embed in")
        }
        function h(a) {
            a = a || {};
            var c = Date.now().toString()
              , h = g(a.container);
            if (h) {
                a.feedType && "open-graph" === a.feedType && f(a);
                var i = e({
                    id: "embed-feed"
                });
                i.className = "yj-embed-widget yj-embed-feed",
                h.appendChild(i),
                b(window, "message", function(a) {
                    if (a.origin === yam.config().baseURI) {
                        var b = JSON.parse(a.data)
                          , d = b.data;
                        d && "yam.trigger" === d.method && d.uniqueToken === c && yam.trigger(d.eventId, d.msg)
                    }
                }),
                a.network && (a.network_permalink = a.network),
                a.bust = c;
                var j = d(a)
                  , k = yam.config().baseURI + "/embed-feed?" + j;
                i.src = k
            }
        }
        function i(a) {
            a = a || {};
            var c = Date.now().toString()
              , h = g(a.container);
            if (h) {
                f(a);
                var i = e({
                    id: "embed-button" + k++
                });
                i.style.width = h.clientWidth + "px",
                i.style.height = h.clientHeight + "px",
                i.className = "yj-embed-widget yj-embed-button",
                h.appendChild(i),
                b(window, "message", function(a) {
                    if (a.origin === yam.config().baseURI) {
                        var b = JSON.parse(a.data)
                          , d = b.data;
                        d && d.uniqueToken === c && ("yam.resize" === d.method ? (i.style.width = d.width + "px",
                        i.style.height = d.height + "px") : "yam.trigger" === d.method && yam.trigger(d.eventId, d.msg))
                    }
                }),
                a.bust = c;
                var j = d(a);
                i.src = yam.config().baseURI + "/platform_embed/button?" + j
            }
        }
        var j = {
            border: "0px",
            overflow: "hidden",
            "min-height": "26px",
            width: "100%",
            height: "100%"
        }
          , k = 0;
        if ("function" != typeof yam.on) {
            var l = {}
              , m = function a(b, c) {
                var d = l[b];
                if (d)
                    for (var e = 0, f = d.length; e < f; e++) {
                        var g = d[e];
                        g.fn.apply(g.ctx, c)
                    }
            };
            yam.trigger = function(a) {
                var b = [].slice.call(arguments, 1);
                m(a, b),
                m("all", arguments)
            }
            ,
            yam.on = function(a, b, c) {
                l[a] || (l[a] = []),
                l[a].push({
                    fn: b,
                    ctx: c || null
                })
            }
            ,
            yam.off = function(a, b, c) {
                var d = l[a];
                if (c = c || null,
                d) {
                    for (var e = -1, f = 0, g = d.length; f < g && e === -1; f++)
                        d[f].fn === b && d[f].ctx === c && (e = f);
                    e !== -1 && d.splice(e, 1)
                }
            }
        }
        yam.connect = yam.connect || {},
        yam.connect.actionButton = i,
        yam.connect.embedFeed = h
    }()
}
, function(a, b, c) {
    var d;
    d = function(a) {
        var b = c(4);
        yam.config(b)
    }
    .call(b, c, b, a),
    !(void 0 !== d && (a.exports = d))
}
, function(a, b) {
    a.exports = {
        assetHost: "https://s0.assets-yammer.com",
        cdnAssetHost: "https://s0.assets-yammer.com",
        mugshotHost: "https://www.yammer.com/mugshot",
        cdnMugshotHost: "https://mug0.assets-yammer.com/mugshot",
        polarisHost: "https://polaris.yammer.com/",
        baseURI: "https://www.yammer.com",
        apiBaseURI: "https://api.yammer.com",
        videoStreamingUri: "rtmpt://s1fqyiixzut1oy.cloudfront.net:80/cfx/st",
        reportAuthorizationHeader: "Receiver MTosLDIzQTBEMTA1LTM4RUItNDcyMS05RTM2LTQxNEY5QUI1RTQ3MyA=",
        reportPerfRequestUri: "https://receiver.yamalytics.yammer.com/prod/web_ui",
        filesHost: "https://files.yammer.com/v2/files",
        paddieHost: "https://pad0.assets-yammer.com",
        olsRedirectUri: "https://persona.yammer.com/office_sessions?",
        msgraphUri: "https://msgraph.yammer.com",
        yammer_environment: "production"
    }
}
, function(a, b, c) {
    (function(b) {
        a.exports = b.$ = c(6)
    }
    ).call(b, function() {
        return this
    }())
}
, function(a, b, c) {
    (function(b) {
        a.exports = b.jQuery = c(7)
    }
    ).call(b, function() {
        return this
    }())
}
, function(a, b, c) {
    var d, e;
    /*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
    !function(b, c) {
        "use strict";
        "object" == typeof a && "object" == typeof a.exports ? a.exports = b.document ? c(b, !0) : function(a) {
            if (!a.document)
                throw new Error("jQuery requires a window with a document");
            return c(a)
        }
        : c(b)
    }("undefined" != typeof window ? window : this, function(c, f) {
        "use strict";
        function g(a, b) {
            b = b || fa;
            var c = b.createElement("script");
            c.text = a,
            b.head.appendChild(c).parentNode.removeChild(c)
        }
        function h(a) {
            var b = !!a && "length"in a && a.length
              , c = sa.type(a);
            return "function" !== c && !sa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }
        function i(a, b, c) {
            return sa.isFunction(b) ? sa.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            }) : b.nodeType ? sa.grep(a, function(a) {
                return a === b !== c
            }) : "string" != typeof b ? sa.grep(a, function(a) {
                return ka.call(b, a) > -1 !== c
            }) : Ca.test(b) ? sa.filter(b, a, c) : (b = sa.filter(b, a),
            sa.grep(a, function(a) {
                return ka.call(b, a) > -1 !== c && 1 === a.nodeType
            }))
        }
        function j(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType; )
                ;
            return a
        }
        function k(a) {
            var b = {};
            return sa.each(a.match(Ia) || [], function(a, c) {
                b[c] = !0
            }),
            b
        }
        function l(a) {
            return a
        }
        function m(a) {
            throw a
        }
        function n(a, b, c) {
            var d;
            try {
                a && sa.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && sa.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
            } catch (a) {
                c.call(void 0, a)
            }
        }
        function o() {
            fa.removeEventListener("DOMContentLoaded", o),
            c.removeEventListener("load", o),
            sa.ready()
        }
        function p() {
            this.expando = sa.expando + p.uid++
        }
        function q(a) {
            return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Pa.test(a) ? JSON.parse(a) : a)
        }
        function r(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Qa, "-$&").toLowerCase(),
                c = a.getAttribute(d),
                "string" == typeof c) {
                    try {
                        c = q(c)
                    } catch (a) {}
                    Oa.set(a, b, c)
                } else
                    c = void 0;
            return c
        }
        function s(a, b, c, d) {
            var e, f = 1, g = 20, h = d ? function() {
                return d.cur()
            }
            : function() {
                return sa.css(a, b, "")
            }
            , i = h(), j = c && c[3] || (sa.cssNumber[b] ? "" : "px"), k = (sa.cssNumber[b] || "px" !== j && +i) && Sa.exec(sa.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3],
                c = c || [],
                k = +i || 1;
                do
                    f = f || ".5",
                    k /= f,
                    sa.style(a, b, k + j);
                while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0,
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
            d && (d.unit = j,
            d.start = k,
            d.end = e)),
            e
        }
        function t(a) {
            var b, c = a.ownerDocument, d = a.nodeName, e = Wa[d];
            return e ? e : (b = c.body.appendChild(c.createElement(d)),
            e = sa.css(b, "display"),
            b.parentNode.removeChild(b),
            "none" === e && (e = "block"),
            Wa[d] = e,
            e)
        }
        function u(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
                d = a[f],
                d.style && (c = d.style.display,
                b ? ("none" === c && (e[f] = Na.get(d, "display") || null,
                e[f] || (d.style.display = "")),
                "" === d.style.display && Ua(d) && (e[f] = t(d))) : "none" !== c && (e[f] = "none",
                Na.set(d, "display", c)));
            for (f = 0; f < g; f++)
                null != e[f] && (a[f].style.display = e[f]);
            return a
        }
        function v(a, b) {
            var c;
            return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
            void 0 === b || b && sa.nodeName(a, b) ? sa.merge([a], c) : c
        }
        function w(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                Na.set(a[c], "globalEval", !b || Na.get(b[c], "globalEval"))
        }
        function x(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
                if (f = a[n],
                f || 0 === f)
                    if ("object" === sa.type(f))
                        sa.merge(m, f.nodeType ? [f] : f);
                    else if (_a.test(f)) {
                        for (g = g || l.appendChild(b.createElement("div")),
                        h = (Ya.exec(f) || ["", ""])[1].toLowerCase(),
                        i = $a[h] || $a._default,
                        g.innerHTML = i[1] + sa.htmlPrefilter(f) + i[2],
                        k = i[0]; k--; )
                            g = g.lastChild;
                        sa.merge(m, g.childNodes),
                        g = l.firstChild,
                        g.textContent = ""
                    } else
                        m.push(b.createTextNode(f));
            for (l.textContent = "",
            n = 0; f = m[n++]; )
                if (d && sa.inArray(f, d) > -1)
                    e && e.push(f);
                else if (j = sa.contains(f.ownerDocument, f),
                g = v(l.appendChild(f), "script"),
                j && w(g),
                c)
                    for (k = 0; f = g[k++]; )
                        Za.test(f.type || "") && c.push(f);
            return l
        }
        function y() {
            return !0
        }
        function z() {
            return !1
        }
        function A() {
            try {
                return fa.activeElement
            } catch (a) {}
        }
        function B(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c,
                c = void 0);
                for (h in b)
                    B(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c,
            d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
            d = void 0) : (e = d,
            d = c,
            c = void 0)),
            e === !1)
                e = z;
            else if (!e)
                return a;
            return 1 === f && (g = e,
            e = function(a) {
                return sa().off(a),
                g.apply(this, arguments)
            }
            ,
            e.guid = g.guid || (g.guid = sa.guid++)),
            a.each(function() {
                sa.event.add(this, b, e, d, c)
            })
        }
        function C(a, b) {
            return sa.nodeName(a, "table") && sa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
        }
        function D(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
            a
        }
        function E(a) {
            var b = hb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"),
            a
        }
        function F(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (Na.hasData(a) && (f = Na.access(a),
                g = Na.set(b, f),
                j = f.events)) {
                    delete g.handle,
                    g.events = {};
                    for (e in j)
                        for (c = 0,
                        d = j[e].length; c < d; c++)
                            sa.event.add(b, e, j[e][c])
                }
                Oa.hasData(a) && (h = Oa.access(a),
                i = sa.extend({}, h),
                Oa.set(b, i))
            }
        }
        function G(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Xa.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
        function H(a, b, c, d) {
            b = ia.apply([], b);
            var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, o = b[0], p = sa.isFunction(o);
            if (p || m > 1 && "string" == typeof o && !qa.checkClone && gb.test(o))
                return a.each(function(e) {
                    var f = a.eq(e);
                    p && (b[0] = o.call(this, e, f.html())),
                    H(f, b, c, d)
                });
            if (m && (e = x(b, a[0].ownerDocument, !1, a, d),
            f = e.firstChild,
            1 === e.childNodes.length && (e = f),
            f || d)) {
                for (h = sa.map(v(e, "script"), D),
                i = h.length; l < m; l++)
                    j = e,
                    l !== n && (j = sa.clone(j, !0, !0),
                    i && sa.merge(h, v(j, "script"))),
                    c.call(a[l], j, l);
                if (i)
                    for (k = h[h.length - 1].ownerDocument,
                    sa.map(h, E),
                    l = 0; l < i; l++)
                        j = h[l],
                        Za.test(j.type || "") && !Na.access(j, "globalEval") && sa.contains(k, j) && (j.src ? sa._evalUrl && sa._evalUrl(j.src) : g(j.textContent.replace(ib, ""), k))
            }
            return a
        }
        function I(a, b, c) {
            for (var d, e = b ? sa.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
                c || 1 !== d.nodeType || sa.cleanData(v(d)),
                d.parentNode && (c && sa.contains(d.ownerDocument, d) && w(v(d, "script")),
                d.parentNode.removeChild(d));
            return a
        }
        function J(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || lb(a),
            c && (g = c.getPropertyValue(b) || c[b],
            "" !== g || sa.contains(a.ownerDocument, a) || (g = sa.style(a, b)),
            !qa.pixelMarginRight() && kb.test(g) && jb.test(b) && (d = h.width,
            e = h.minWidth,
            f = h.maxWidth,
            h.minWidth = h.maxWidth = h.width = g,
            g = c.width,
            h.width = d,
            h.minWidth = e,
            h.maxWidth = f)),
            void 0 !== g ? g + "" : g
        }
        function K(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        function L(a) {
            if (a in qb)
                return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = pb.length; c--; )
                if (a = pb[c] + b,
                a in qb)
                    return a
        }
        function M(a, b, c) {
            var d = Sa.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }
        function N(a, b, c, d, e) {
            var f, g = 0;
            for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
                "margin" === c && (g += sa.css(a, c + Ta[f], !0, e)),
                d ? ("content" === c && (g -= sa.css(a, "padding" + Ta[f], !0, e)),
                "margin" !== c && (g -= sa.css(a, "border" + Ta[f] + "Width", !0, e))) : (g += sa.css(a, "padding" + Ta[f], !0, e),
                "padding" !== c && (g += sa.css(a, "border" + Ta[f] + "Width", !0, e)));
            return g
        }
        function O(a, b, c) {
            var d, e = !0, f = lb(a), g = "border-box" === sa.css(a, "boxSizing", !1, f);
            if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
            d <= 0 || null == d) {
                if (d = J(a, b, f),
                (d < 0 || null == d) && (d = a.style[b]),
                kb.test(d))
                    return d;
                e = g && (qa.boxSizingReliable() || d === a.style[b]),
                d = parseFloat(d) || 0
            }
            return d + N(a, b, c || (g ? "border" : "content"), e, f) + "px"
        }
        function P(a, b, c, d, e) {
            return new P.prototype.init(a,b,c,d,e)
        }
        function Q() {
            sb && (c.requestAnimationFrame(Q),
            sa.fx.tick())
        }
        function R() {
            return c.setTimeout(function() {
                rb = void 0
            }),
            rb = sa.now()
        }
        function S(a, b) {
            var c, d = 0, e = {
                height: a
            };
            for (b = b ? 1 : 0; d < 4; d += 2 - b)
                c = Ta[d],
                e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a),
            e
        }
        function T(a, b, c) {
            for (var d, e = (W.tweeners[b] || []).concat(W.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function U(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width"in b || "height"in b, m = this, n = {}, o = a.style, p = a.nodeType && Ua(a), q = Na.get(a, "fxshow");
            c.queue || (g = sa._queueHooks(a, "fx"),
            null == g.unqueued && (g.unqueued = 0,
            h = g.empty.fire,
            g.empty.fire = function() {
                g.unqueued || h()
            }
            ),
            g.unqueued++,
            m.always(function() {
                m.always(function() {
                    g.unqueued--,
                    sa.queue(a, "fx").length || g.empty.fire()
                })
            }));
            for (d in b)
                if (e = b[d],
                tb.test(e)) {
                    if (delete b[d],
                    f = f || "toggle" === e,
                    e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d])
                            continue;
                        p = !0
                    }
                    n[d] = q && q[d] || sa.style(a, d)
                }
            if (i = !sa.isEmptyObject(b),
            i || !sa.isEmptyObject(n)) {
                l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
                j = q && q.display,
                null == j && (j = Na.get(a, "display")),
                k = sa.css(a, "display"),
                "none" === k && (j ? k = j : (u([a], !0),
                j = a.style.display || j,
                k = sa.css(a, "display"),
                u([a]))),
                ("inline" === k || "inline-block" === k && null != j) && "none" === sa.css(a, "float") && (i || (m.done(function() {
                    o.display = j
                }),
                null == j && (k = o.display,
                j = "none" === k ? "" : k)),
                o.display = "inline-block")),
                c.overflow && (o.overflow = "hidden",
                m.always(function() {
                    o.overflow = c.overflow[0],
                    o.overflowX = c.overflow[1],
                    o.overflowY = c.overflow[2]
                })),
                i = !1;
                for (d in n)
                    i || (q ? "hidden"in q && (p = q.hidden) : q = Na.access(a, "fxshow", {
                        display: j
                    }),
                    f && (q.hidden = !p),
                    p && u([a], !0),
                    m.done(function() {
                        p || u([a]),
                        Na.remove(a, "fxshow");
                        for (d in n)
                            sa.style(a, d, n[d])
                    })),
                    i = T(p ? q[d] : 0, d, m),
                    d in q || (q[d] = i.start,
                    p && (i.end = i.start,
                    i.start = 0))
            }
        }
        function V(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = sa.camelCase(c),
                e = b[d],
                f = a[c],
                sa.isArray(f) && (e = f[1],
                f = a[c] = f[0]),
                c !== d && (a[d] = f,
                delete a[c]),
                g = sa.cssHooks[d],
                g && "expand"in g) {
                    f = g.expand(f),
                    delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c],
                        b[c] = e)
                } else
                    b[d] = e
        }
        function W(a, b, c) {
            var d, e, f = 0, g = W.prefilters.length, h = sa.Deferred().always(function() {
                delete i.elem
            }), i = function() {
                if (e)
                    return !1;
                for (var b = rb || R(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]),
                f < 1 && i ? c : (h.resolveWith(a, [j]),
                !1)
            }, j = h.promise({
                elem: a,
                props: sa.extend({}, b),
                opts: sa.extend(!0, {
                    specialEasing: {},
                    easing: sa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: rb || R(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = sa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d),
                    d
                },
                stop: function(b) {
                    var c = 0
                      , d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; c < d; c++)
                        j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]),
                    h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                    this
                }
            }), k = j.props;
            for (V(k, j.opts.specialEasing); f < g; f++)
                if (d = W.prefilters[f].call(j, a, k, j.opts))
                    return sa.isFunction(d.stop) && (sa._queueHooks(j.elem, j.opts.queue).stop = sa.proxy(d.stop, d)),
                    d;
            return sa.map(k, T, j),
            sa.isFunction(j.opts.start) && j.opts.start.call(a, j),
            sa.fx.timer(sa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        function X(a) {
            var b = a.match(Ia) || [];
            return b.join(" ")
        }
        function Y(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }
        function Z(a, b, c, d) {
            var e;
            if (sa.isArray(b))
                sa.each(b, function(b, e) {
                    c || Eb.test(a) ? d(a, e) : Z(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== sa.type(b))
                d(a, b);
            else
                for (e in b)
                    Z(a + "[" + e + "]", b[e], c, d)
        }
        function $(a) {
            return function(b, c) {
                "string" != typeof b && (c = b,
                b = "*");
                var d, e = 0, f = b.toLowerCase().match(Ia) || [];
                if (sa.isFunction(c))
                    for (; d = f[e++]; )
                        "+" === d[0] ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function _(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0,
                sa.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                    e(j),
                    !1)
                }),
                i
            }
            var f = {}
              , g = a === Qb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }
        function aa(a, b) {
            var c, d, e = sa.ajaxSettings.flatOptions || {};
            for (c in b)
                void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && sa.extend(!0, a, d),
            a
        }
        function ba(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
                i.shift(),
                void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0]in c)
                f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            if (f)
                return f !== i[0] && i.unshift(f),
                c[f]
        }
        function ca(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f; )
                if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                i = f,
                f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f],
                        !g)
                            for (e in j)
                                if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a.throws)
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (a) {
                                    return {
                                        state: "parsererror",
                                        error: g ? a : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        function da(a) {
            return sa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var ea = []
          , fa = c.document
          , ga = Object.getPrototypeOf
          , ha = ea.slice
          , ia = ea.concat
          , ja = ea.push
          , ka = ea.indexOf
          , la = {}
          , ma = la.toString
          , na = la.hasOwnProperty
          , oa = na.toString
          , pa = oa.call(Object)
          , qa = {}
          , ra = "3.1.1"
          , sa = function(a, b) {
            return new sa.fn.init(a,b)
        }
          , ta = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , ua = /^-ms-/
          , va = /-([a-z])/g
          , wa = function(a, b) {
            return b.toUpperCase()
        };
        sa.fn = sa.prototype = {
            jquery: ra,
            constructor: sa,
            length: 0,
            toArray: function() {
                return ha.call(this)
            },
            get: function(a) {
                return null == a ? ha.call(this) : a < 0 ? this[a + this.length] : this[a]
            },
            pushStack: function(a) {
                var b = sa.merge(this.constructor(), a);
                return b.prevObject = this,
                b
            },
            each: function(a) {
                return sa.each(this, a)
            },
            map: function(a) {
                return this.pushStack(sa.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(ha.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length
                  , c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ja,
            sort: ea.sort,
            splice: ea.splice
        },
        sa.extend = sa.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
            g = arguments[h] || {},
            h++),
            "object" == typeof g || sa.isFunction(g) || (g = {}),
            h === i && (g = this,
            h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        c = g[b],
                        d = a[b],
                        g !== d && (j && d && (sa.isPlainObject(d) || (e = sa.isArray(d))) ? (e ? (e = !1,
                        f = c && sa.isArray(c) ? c : []) : f = c && sa.isPlainObject(c) ? c : {},
                        g[b] = sa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }
        ,
        sa.extend({
            expando: "jQuery" + (ra + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === sa.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                var b = sa.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            },
            isPlainObject: function(a) {
                var b, c;
                return !(!a || "[object Object]" !== ma.call(a)) && (!(b = ga(a)) || (c = na.call(b, "constructor") && b.constructor,
                "function" == typeof c && oa.call(c) === pa))
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? la[ma.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                g(a)
            },
            camelCase: function(a) {
                return a.replace(ua, "ms-").replace(va, wa)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (h(a))
                    for (c = a.length; d < c && b.call(a[d], d, a[d]) !== !1; d++)
                        ;
                else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1)
                            break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(ta, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (h(Object(a)) ? sa.merge(c, "string" == typeof a ? [a] : a) : ja.call(c, a)),
                c
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : ka.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                    a[e++] = b[d];
                return a.length = e,
                a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                    d = !b(a[f], f),
                    d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, f = 0, g = [];
                if (h(a))
                    for (d = a.length; f < d; f++)
                        e = b(a[f], f, c),
                        null != e && g.push(e);
                else
                    for (f in a)
                        e = b(a[f], f, c),
                        null != e && g.push(e);
                return ia.apply([], g)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                if ("string" == typeof b && (c = a[b],
                b = a,
                a = c),
                sa.isFunction(a))
                    return d = ha.call(arguments, 2),
                    e = function() {
                        return a.apply(b || this, d.concat(ha.call(arguments)))
                    }
                    ,
                    e.guid = a.guid = a.guid || sa.guid++,
                    e
            },
            now: Date.now,
            support: qa
        }),
        "function" == typeof Symbol && (sa.fn[Symbol.iterator] = ea[Symbol.iterator]),
        sa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            la["[object " + b + "]"] = b.toLowerCase()
        });
        var xa = /*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
        function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, m = b && b.ownerDocument, o = b ? b.nodeType : 9;
                if (c = c || [],
                "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o)
                    return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b),
                b = b || H,
                J)) {
                    if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e)))
                                    return c;
                                if (g.id === e)
                                    return c.push(g),
                                    c
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e)
                                return c.push(g),
                                c
                        } else {
                            if (i[2])
                                return $.apply(c, b.getElementsByTagName(a)),
                                c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName)
                                return $.apply(c, b.getElementsByClassName(e)),
                                c
                        }
                    if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== o)
                            m = b,
                            k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O),
                            j = A(a),
                            f = j.length; f--; )
                                j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","),
                            m = sa.test(a) && l(b.parentNode) || b
                        }
                        if (k)
                            try {
                                return $.apply(c, m.querySelectorAll(k)),
                                c
                            } catch (a) {} finally {
                                h === O && b.removeAttribute("id")
                            }
                    }
                }
                return C(a.replace(ha, "$1"), b, c, d)
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > x.cacheLength && delete a[b.shift()],
                    a[c + " "] = d
                }
                var b = [];
                return a
            }
            function d(a) {
                return a[O] = !0,
                a
            }
            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b),
                    b = null
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--; )
                    x.attrHandle[c[d]] = b
            }
            function g(a, b) {
                var c = b && a
                  , d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling; )
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function j(a) {
                return function(b) {
                    return "form"in b ? b.parentNode && b.disabled === !1 ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label"in b && b.disabled === a
                }
            }
            function k(a) {
                return d(function(b) {
                    return b = +b,
                    d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; )
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function l(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            function m() {}
            function n(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++)
                    d += a[b].value;
                return d
            }
            function o(a, b, c) {
                var d = b.dir
                  , e = b.next
                  , f = e || d
                  , g = c && "parentNode" === f
                  , h = R++;
                return b.first ? function(b, c, e) {
                    for (; b = b[d]; )
                        if (1 === b.nodeType || g)
                            return a(b, c, e);
                    return !1
                }
                : function(b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d]; )
                            if ((1 === b.nodeType || g) && a(b, c, i))
                                return !0
                    } else
                        for (; b = b[d]; )
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}),
                                k = l[b.uniqueID] || (l[b.uniqueID] = {}),
                                e && e === b.nodeName.toLowerCase())
                                    b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === Q && j[1] === h)
                                        return m[2] = j[2];
                                    if (k[f] = m,
                                    m[2] = a(b, c, i))
                                        return !0
                                }
                    return !1
                }
            }
            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--; )
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                }
                : a[0]
            }
            function q(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++)
                    b(a, c[e], d);
                return d
            }
            function r(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                    (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                    j && b.push(h)));
                return g
            }
            function s(a, b, c, e, f, g) {
                return e && !e[O] && (e = s(e)),
                f && !f[O] && (f = s(f, g)),
                d(function(d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = d || q(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? p : r(p, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i),
                    e)
                        for (j = r(t, n),
                        e(j, [], h, i),
                        k = j.length; k--; )
                            (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [],
                                k = t.length; k--; )
                                    (l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--; )
                                (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else
                        t = r(t === g ? t.splice(o, t.length) : t),
                        f ? f(null, g, t, i) : $.apply(g, t)
                })
            }
            function t(a) {
                for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null,
                    e
                }
                ]; h < e; h++)
                    if (c = x.relative[a[h].type])
                        k = [o(p(k), c)];
                    else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches),
                        c[O]) {
                            for (d = ++h; d < e && !x.relative[a[d].type]; d++)
                                ;
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }
            function u(a, c) {
                var e = c.length > 0
                  , f = a.length > 0
                  , g = function(d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], q = [], s = D, t = d || f && x.find.TAG("*", j), u = Q += null == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0,
                            g || k.ownerDocument === H || (G(k),
                            h = !J); m = a[l++]; )
                                if (m(k, g || H, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (Q = u)
                        }
                        e && ((k = !m && k) && n--,
                        d && p.push(k))
                    }
                    if (n += o,
                    e && o !== n) {
                        for (l = 0; m = c[l++]; )
                            m(p, q, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--; )
                                    p[o] || q[o] || (q[o] = Y.call(i));
                            q = r(q)
                        }
                        $.apply(i, q),
                        j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (Q = u,
                    D = s),
                    p
                };
                return e ? d(g) : g
            }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date, P = a.document, Q = 0, R = 0, S = c(), T = c(), U = c(), V = function(a, b) {
                return a === b && (F = !0),
                0
            }, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b)
                        return c;
                return -1
            }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+","g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$","g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]","g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)","i"),
                bool: new RegExp("^(?:" + ba + ")$","i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)","i")
            }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)","ig"), ua = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wa = function(a, b) {
                return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            }, xa = function() {
                G()
            }, ya = o(function(a) {
                return a.disabled === !0 && ("form"in a || "label"in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                $.apply(X = _.call(P.childNodes), P.childNodes),
                X[P.childNodes.length].nodeType
            } catch (a) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    }
                    : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++]; )
                            ;
                        a.length = c - 1
                    }
                }
            }
            w = b.support = {},
            z = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }
            ,
            G = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d,
                I = H.documentElement,
                J = !z(H),
                P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)),
                w.attributes = e(function(a) {
                    return a.className = "i",
                    !a.getAttribute("className")
                }),
                w.getElementsByTagName = e(function(a) {
                    return a.appendChild(H.createComment("")),
                    !a.getElementsByTagName("*").length
                }),
                w.getElementsByClassName = qa.test(H.getElementsByClassName),
                w.getById = e(function(a) {
                    return I.appendChild(a).id = O,
                    !H.getElementsByName || !H.getElementsByName(O).length
                }),
                w.getById ? (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }
                ,
                x.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }
                ) : (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }
                ,
                x.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if (c = f.getAttributeNode("id"),
                            c && c.value === a)
                                return [f];
                            for (e = b.getElementsByName(a),
                            d = 0; f = e[d++]; )
                                if (c = f.getAttributeNode("id"),
                                c && c.value === a)
                                    return [f]
                        }
                        return []
                    }
                }
                ),
                x.find.TAG = w.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
                }
                : function(a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++]; )
                            1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }
                ,
                x.find.CLASS = w.getElementsByClassName && function(a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && J)
                        return b.getElementsByClassName(a)
                }
                ,
                L = [],
                K = [],
                (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
                    I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"),
                    a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="),
                    a.querySelectorAll(":checked").length || K.push(":checked"),
                    a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                }),
                e(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="),
                    2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"),
                    I.appendChild(a).disabled = !0,
                    2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    K.push(",.*:")
                })),
                (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
                    w.disconnectedMatch = M.call(a, "*"),
                    M.call(a, "[s!='']:x"),
                    L.push("!=", fa)
                }),
                K = K.length && new RegExp(K.join("|")),
                L = L.length && new RegExp(L.join("|")),
                b = qa.test(I.compareDocumentPosition),
                N = b || qa.test(I.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a
                      , d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                }
                : function(a, b) {
                    if (b)
                        for (; b = b.parentNode; )
                            if (b === a)
                                return !0;
                    return !1
                }
                ,
                V = b ? function(a, b) {
                    if (a === b)
                        return F = !0,
                        0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                    1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
                }
                : function(a, b) {
                    if (a === b)
                        return F = !0,
                        0;
                    var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                    if (!e || !f)
                        return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f)
                        return g(a, b);
                    for (c = a; c = c.parentNode; )
                        h.unshift(c);
                    for (c = b; c = c.parentNode; )
                        i.unshift(c);
                    for (; h[d] === i[d]; )
                        d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }
                ,
                H) : H
            }
            ,
            b.matches = function(a, c) {
                return b(a, null, null, c)
            }
            ,
            b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== H && G(a),
                c = c.replace(ka, "='$1']"),
                w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c)))
                    try {
                        var d = M.call(a, c);
                        if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (a) {}
                return b(c, H, null, [a]).length > 0
            }
            ,
            b.contains = function(a, b) {
                return (a.ownerDocument || a) !== H && G(a),
                N(a, b)
            }
            ,
            b.attr = function(a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = x.attrHandle[b.toLowerCase()]
                  , d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }
            ,
            b.escape = function(a) {
                return (a + "").replace(va, wa)
            }
            ,
            b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            b.uniqueSort = function(a) {
                var b, c = [], d = 0, e = 0;
                if (F = !w.detectDuplicates,
                E = !w.sortStable && a.slice(0),
                a.sort(V),
                F) {
                    for (; b = a[e++]; )
                        b === a[e] && (d = c.push(e));
                    for (; d--; )
                        a.splice(c[d], 1)
                }
                return E = null,
                a
            }
            ,
            y = b.getText = function(a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += y(a)
                    } else if (3 === e || 4 === e)
                        return a.nodeValue
                } else
                    for (; b = a[d++]; )
                        c += y(b);
                return c
            }
            ,
            x = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
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
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ta, ua),
                        a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                        a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                        "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                        a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                        a[2] = c.slice(0, b)),
                        a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ta, ua).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        }
                        : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "",
                            "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                          , g = "last" !== a.slice(-4)
                          , h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        }
                        : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                            if (q) {
                                if (f) {
                                    for (; p; ) {
                                        for (m = b; m = m[p]; )
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                                return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild],
                                g && s) {
                                    for (m = q,
                                    l = m[O] || (m[O] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    j = k[a] || [],
                                    n = j[0] === Q && j[1],
                                    t = n && j[2],
                                    m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); )
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [Q, n, t];
                                            break
                                        }
                                } else if (s && (m = b,
                                l = m[O] || (m[O] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === Q && j[1],
                                t = n),
                                t === !1)
                                    for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [Q, t]),
                                    m !== b)); )
                                        ;
                                return t -= e,
                                t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                        x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--; )
                                d = aa(a, e[g]),
                                a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }
                        ) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = []
                          , c = []
                          , e = B(a.replace(ha, "$1"));
                        return e[O] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--; )
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a,
                            e(b, null, f, c),
                            b[0] = null,
                            !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(ta, ua),
                        function(b) {
                            return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                        }
                    }),
                    lang: d(function(a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a),
                        a = a.replace(ta, ua).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                    return c = c.toLowerCase(),
                                    c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);return !1
                        }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === I
                    },
                    focus: function(a) {
                        return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: j(!1),
                    disabled: j(!0),
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !x.pseudos.empty(a)
                    },
                    header: function(a) {
                        return pa.test(a.nodeName)
                    },
                    input: function(a) {
                        return oa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0; )
                            a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b; )
                            a.push(d);
                        return a
                    })
                }
            },
            x.pseudos.nth = x.pseudos.eq;
            for (v in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                x.pseudos[v] = h(v);
            for (v in {
                submit: !0,
                reset: !0
            })
                x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos,
            x.setFilters = new m,
            A = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = T[a + " "];
                if (k)
                    return c ? 0 : k.slice(0);
                for (h = a,
                i = [],
                j = x.preFilter; h; ) {
                    d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                    i.push(f = [])),
                    d = !1,
                    (e = ja.exec(h)) && (d = e.shift(),
                    f.push({
                        value: d,
                        type: e[0].replace(ha, " ")
                    }),
                    h = h.slice(d.length));
                    for (g in x.filter)
                        !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                        f.push({
                            value: d,
                            type: g,
                            matches: e
                        }),
                        h = h.slice(d.length));
                    if (!d)
                        break
                }
                return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
            }
            ,
            B = b.compile = function(a, b) {
                var c, d = [], e = [], f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)),
                    c = b.length; c--; )
                        f = t(b[c]),
                        f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)),
                    f.selector = a
                }
                return f
            }
            ,
            C = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a, k = !d && A(a = j.selector || a);
                if (c = c || [],
                1 === k.length) {
                    if (f = k[0] = k[0].slice(0),
                    f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                        if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0],
                        !b)
                            return c;
                        j && (b = b.parentNode),
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                    !x.relative[h = g.type]); )
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                            if (f.splice(e, 1),
                            a = d.length && n(f),
                            !a)
                                return $.apply(c, d),
                                c;
                            break
                        }
                }
                return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b),
                c
            }
            ,
            w.sortStable = O.split("").sort(V).join("") === O,
            w.detectDuplicates = !!F,
            G(),
            w.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
            }),
            e(function(a) {
                return a.innerHTML = "<a href='#'></a>",
                "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                if (!c)
                    return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            w.attributes && e(function(a) {
                return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
                "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase())
                    return a.defaultValue
            }),
            e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                if (!c)
                    return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }),
            b
        }(c);
        sa.find = xa,
        sa.expr = xa.selectors,
        sa.expr[":"] = sa.expr.pseudos,
        sa.uniqueSort = sa.unique = xa.uniqueSort,
        sa.text = xa.getText,
        sa.isXMLDoc = xa.isXML,
        sa.contains = xa.contains,
        sa.escapeSelector = xa.escape;
        var ya = function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && sa(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        }
          , za = function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
          , Aa = sa.expr.match.needsContext
          , Ba = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
          , Ca = /^.[^:#\[\.,]*$/;
        sa.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? sa.find.matchesSelector(d, a) ? [d] : [] : sa.find.matches(a, sa.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }
        ,
        sa.fn.extend({
            find: function(a) {
                var b, c, d = this.length, e = this;
                if ("string" != typeof a)
                    return this.pushStack(sa(a).filter(function() {
                        for (b = 0; b < d; b++)
                            if (sa.contains(e[b], this))
                                return !0
                    }));
                for (c = this.pushStack([]),
                b = 0; b < d; b++)
                    sa.find(a, e[b], c);
                return d > 1 ? sa.uniqueSort(c) : c
            },
            filter: function(a) {
                return this.pushStack(i(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(i(this, a || [], !0))
            },
            is: function(a) {
                return !!i(this, "string" == typeof a && Aa.test(a) ? sa(a) : a || [], !1).length
            }
        });
        var Da, Ea = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Fa = sa.fn.init = function(a, b, c) {
            var d, e;
            if (!a)
                return this;
            if (c = c || Da,
            "string" == typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Ea.exec(a),
                !d || !d[1] && b)
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof sa ? b[0] : b,
                    sa.merge(this, sa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : fa, !0)),
                    Ba.test(d[1]) && sa.isPlainObject(b))
                        for (d in b)
                            sa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = fa.getElementById(d[2]),
                e && (this[0] = e,
                this.length = 1),
                this
            }
            return a.nodeType ? (this[0] = a,
            this.length = 1,
            this) : sa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(sa) : sa.makeArray(a, this)
        }
        ;
        Fa.prototype = sa.fn,
        Da = sa(fa);
        var Ga = /^(?:parents|prev(?:Until|All))/
          , Ha = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        sa.fn.extend({
            has: function(a) {
                var b = sa(a, this)
                  , c = b.length;
                return this.filter(function() {
                    for (var a = 0; a < c; a++)
                        if (sa.contains(this, b[a]))
                            return !0
                })
            },
            closest: function(a, b) {
                var c, d = 0, e = this.length, f = [], g = "string" != typeof a && sa(a);
                if (!Aa.test(a))
                    for (; d < e; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && sa.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                return this.pushStack(f.length > 1 ? sa.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ka.call(sa(a), this[0]) : ka.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(sa.uniqueSort(sa.merge(this.get(), sa(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }),
        sa.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return ya(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return ya(a, "parentNode", c)
            },
            next: function(a) {
                return j(a, "nextSibling")
            },
            prev: function(a) {
                return j(a, "previousSibling")
            },
            nextAll: function(a) {
                return ya(a, "nextSibling")
            },
            prevAll: function(a) {
                return ya(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return ya(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return ya(a, "previousSibling", c)
            },
            siblings: function(a) {
                return za((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return za(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || sa.merge([], a.childNodes)
            }
        }, function(a, b) {
            sa.fn[a] = function(c, d) {
                var e = sa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = sa.filter(d, e)),
                this.length > 1 && (Ha[a] || sa.uniqueSort(e),
                Ga.test(a) && e.reverse()),
                this.pushStack(e)
            }
        });
        var Ia = /[^\x20\t\r\n\f]+/g;
        sa.Callbacks = function(a) {
            a = "string" == typeof a ? k(a) : sa.extend({}, a);
            var b, c, d, e, f = [], g = [], h = -1, i = function() {
                for (e = a.once,
                d = b = !0; g.length; h = -1)
                    for (c = g.shift(); ++h < f.length; )
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                        c = !1);
                a.memory || (c = !1),
                b = !1,
                e && (f = c ? [] : "")
            }, j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1,
                    g.push(c)),
                    function b(c) {
                        sa.each(c, function(c, d) {
                            sa.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== sa.type(d) && b(d)
                        })
                    }(arguments),
                    c && !b && i()),
                    this
                },
                remove: function() {
                    return sa.each(arguments, function(a, b) {
                        for (var c; (c = sa.inArray(b, f, c)) > -1; )
                            f.splice(c, 1),
                            c <= h && h--
                    }),
                    this
                },
                has: function(a) {
                    return a ? sa.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []),
                    this
                },
                disable: function() {
                    return e = g = [],
                    f = c = "",
                    this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [],
                    c || b || (f = c = ""),
                    this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    g.push(c),
                    b || i()),
                    this
                },
                fire: function() {
                    return j.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!d
                }
            };
            return j
        }
        ,
        sa.extend({
            Deferred: function(a) {
                var b = [["notify", "progress", sa.Callbacks("memory"), sa.Callbacks("memory"), 2], ["resolve", "done", sa.Callbacks("once memory"), sa.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", sa.Callbacks("once memory"), sa.Callbacks("once memory"), 1, "rejected"]]
                  , d = "pending"
                  , e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return sa.Deferred(function(c) {
                            sa.each(b, function(b, d) {
                                var e = sa.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && sa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }),
                            a = null
                        }).promise()
                    },
                    then: function(a, d, e) {
                        function f(a, b, d, e) {
                            return function() {
                                var h = this
                                  , i = arguments
                                  , j = function() {
                                    var c, j;
                                    if (!(a < g)) {
                                        if (c = d.apply(h, i),
                                        c === b.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        j = c && ("object" == typeof c || "function" == typeof c) && c.then,
                                        sa.isFunction(j) ? e ? j.call(c, f(g, b, l, e), f(g, b, m, e)) : (g++,
                                        j.call(c, f(g, b, l, e), f(g, b, m, e), f(g, b, l, b.notifyWith))) : (d !== l && (h = void 0,
                                        i = [c]),
                                        (e || b.resolveWith)(h, i))
                                    }
                                }
                                  , k = e ? j : function() {
                                    try {
                                        j()
                                    } catch (c) {
                                        sa.Deferred.exceptionHook && sa.Deferred.exceptionHook(c, k.stackTrace),
                                        a + 1 >= g && (d !== m && (h = void 0,
                                        i = [c]),
                                        b.rejectWith(h, i))
                                    }
                                }
                                ;
                                a ? k() : (sa.Deferred.getStackHook && (k.stackTrace = sa.Deferred.getStackHook()),
                                c.setTimeout(k))
                            }
                        }
                        var g = 0;
                        return sa.Deferred(function(c) {
                            b[0][3].add(f(0, c, sa.isFunction(e) ? e : l, c.notifyWith)),
                            b[1][3].add(f(0, c, sa.isFunction(a) ? a : l)),
                            b[2][3].add(f(0, c, sa.isFunction(d) ? d : m))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? sa.extend(a, e) : e
                    }
                }
                  , f = {};
                return sa.each(b, function(a, c) {
                    var g = c[2]
                      , h = c[5];
                    e[c[1]] = g.add,
                    h && g.add(function() {
                        d = h
                    }, b[3 - a][2].disable, b[0][2].lock),
                    g.add(c[3].fire),
                    f[c[0]] = function() {
                        return f[c[0] + "With"](this === f ? void 0 : this, arguments),
                        this
                    }
                    ,
                    f[c[0] + "With"] = g.fireWith
                }),
                e.promise(f),
                a && a.call(f, f),
                f
            },
            when: function(a) {
                var b = arguments.length
                  , c = b
                  , d = Array(c)
                  , e = ha.call(arguments)
                  , f = sa.Deferred()
                  , g = function(a) {
                    return function(c) {
                        d[a] = this,
                        e[a] = arguments.length > 1 ? ha.call(arguments) : c,
                        --b || f.resolveWith(d, e)
                    }
                };
                if (b <= 1 && (n(a, f.done(g(c)).resolve, f.reject),
                "pending" === f.state() || sa.isFunction(e[c] && e[c].then)))
                    return f.then();
                for (; c--; )
                    n(e[c], g(c), f.reject);
                return f.promise()
            }
        });
        var Ja = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        sa.Deferred.exceptionHook = function(a, b) {
            c.console && c.console.warn && a && Ja.test(a.name) && c.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
        }
        ,
        sa.readyException = function(a) {
            c.setTimeout(function() {
                throw a
            })
        }
        ;
        var Ka = sa.Deferred();
        sa.fn.ready = function(a) {
            return Ka.then(a).catch(function(a) {
                sa.readyException(a)
            }),
            this
        }
        ,
        sa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? sa.readyWait++ : sa.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --sa.readyWait : sa.isReady) || (sa.isReady = !0,
                a !== !0 && --sa.readyWait > 0 || Ka.resolveWith(fa, [sa]))
            }
        }),
        sa.ready.then = Ka.then,
        "complete" === fa.readyState || "loading" !== fa.readyState && !fa.documentElement.doScroll ? c.setTimeout(sa.ready) : (fa.addEventListener("DOMContentLoaded", o),
        c.addEventListener("load", o));
        var La = function(a, b, c, d, e, f, g) {
            var h = 0
              , i = a.length
              , j = null == c;
            if ("object" === sa.type(c)) {
                e = !0;
                for (h in c)
                    La(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0,
            sa.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
            b = null) : (j = b,
            b = function(a, b, c) {
                return j.call(sa(a), c)
            }
            )),
            b))
                for (; h < i; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }
          , Ma = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
        p.uid = 1,
        p.prototype = {
            cache: function(a) {
                var b = a[this.expando];
                return b || (b = {},
                Ma(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))),
                b
            },
            set: function(a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b)
                    e[sa.camelCase(b)] = c;
                else
                    for (d in b)
                        e[sa.camelCase(d)] = b[d];
                return e
            },
            get: function(a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][sa.camelCase(b)]
            },
            access: function(a, b, c) {
                return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c),
                void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        sa.isArray(b) ? b = b.map(sa.camelCase) : (b = sa.camelCase(b),
                        b = b in d ? [b] : b.match(Ia) || []),
                        c = b.length;
                        for (; c--; )
                            delete d[b[c]]
                    }
                    (void 0 === b || sa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !sa.isEmptyObject(b)
            }
        };
        var Na = new p
          , Oa = new p
          , Pa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Qa = /[A-Z]/g;
        sa.extend({
            hasData: function(a) {
                return Oa.hasData(a) || Na.hasData(a)
            },
            data: function(a, b, c) {
                return Oa.access(a, b, c)
            },
            removeData: function(a, b) {
                Oa.remove(a, b)
            },
            _data: function(a, b, c) {
                return Na.access(a, b, c)
            },
            _removeData: function(a, b) {
                Na.remove(a, b)
            }
        }),
        sa.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = Oa.get(f),
                    1 === f.nodeType && !Na.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--; )
                            g[c] && (d = g[c].name,
                            0 === d.indexOf("data-") && (d = sa.camelCase(d.slice(5)),
                            r(f, d, e[d])));
                        Na.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    Oa.set(this, a)
                }) : La(this, function(b) {
                    var c;
                    if (f && void 0 === b) {
                        if (c = Oa.get(f, a),
                        void 0 !== c)
                            return c;
                        if (c = r(f, a),
                        void 0 !== c)
                            return c
                    } else
                        this.each(function() {
                            Oa.set(this, a, b)
                        })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    Oa.remove(this, a)
                })
            }
        }),
        sa.extend({
            queue: function(a, b, c) {
                var d;
                if (a)
                    return b = (b || "fx") + "queue",
                    d = Na.get(a, b),
                    c && (!d || sa.isArray(c) ? d = Na.access(a, b, sa.makeArray(c)) : d.push(c)),
                    d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = sa.queue(a, b)
                  , d = c.length
                  , e = c.shift()
                  , f = sa._queueHooks(a, b)
                  , g = function() {
                    sa.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(),
                d--),
                e && ("fx" === b && c.unshift("inprogress"),
                delete f.stop,
                e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return Na.get(a, c) || Na.access(a, c, {
                    empty: sa.Callbacks("once memory").add(function() {
                        Na.remove(a, [b + "queue", c])
                    })
                })
            }
        }),
        sa.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                a = "fx",
                c--),
                arguments.length < c ? sa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = sa.queue(this, a, b);
                    sa._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && sa.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    sa.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1, e = sa.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" != typeof a && (b = a,
                a = void 0),
                a = a || "fx"; g--; )
                    c = Na.get(f[g], a + "queueHooks"),
                    c && c.empty && (d++,
                    c.empty.add(h));
                return h(),
                e.promise(b)
            }
        });
        var Ra = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Sa = new RegExp("^(?:([+-])=|)(" + Ra + ")([a-z%]*)$","i")
          , Ta = ["Top", "Right", "Bottom", "Left"]
          , Ua = function(a, b) {
            return a = b || a,
            "none" === a.style.display || "" === a.style.display && sa.contains(a.ownerDocument, a) && "none" === sa.css(a, "display")
        }
          , Va = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
          , Wa = {};
        sa.fn.extend({
            show: function() {
                return u(this, !0)
            },
            hide: function() {
                return u(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Ua(this) ? sa(this).show() : sa(this).hide()
                })
            }
        });
        var Xa = /^(?:checkbox|radio)$/i
          , Ya = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , Za = /^$|\/(?:java|ecma)script/i
          , $a = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        $a.optgroup = $a.option,
        $a.tbody = $a.tfoot = $a.colgroup = $a.caption = $a.thead,
        $a.th = $a.td;
        var _a = /<|&#?\w+;/;
        !function() {
            var a = fa.createDocumentFragment()
              , b = a.appendChild(fa.createElement("div"))
              , c = fa.createElement("input");
            c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            qa.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.innerHTML = "<textarea>x</textarea>",
            qa.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var ab = fa.documentElement
          , bb = /^key/
          , cb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , db = /^([^.]*)(?:\.(.+)|)/;
        sa.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Na.get(a);
                if (q)
                    for (c.handler && (f = c,
                    c = f.handler,
                    e = f.selector),
                    e && sa.find.matchesSelector(ab, e),
                    c.guid || (c.guid = sa.guid++),
                    (i = q.events) || (i = q.events = {}),
                    (g = q.handle) || (g = q.handle = function(b) {
                        return "undefined" != typeof sa && sa.event.triggered !== b.type ? sa.event.dispatch.apply(a, arguments) : void 0
                    }
                    ),
                    b = (b || "").match(Ia) || [""],
                    j = b.length; j--; )
                        h = db.exec(b[j]) || [],
                        n = p = h[1],
                        o = (h[2] || "").split(".").sort(),
                        n && (l = sa.event.special[n] || {},
                        n = (e ? l.delegateType : l.bindType) || n,
                        l = sa.event.special[n] || {},
                        k = sa.extend({
                            type: n,
                            origType: p,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && sa.expr.match.needsContext.test(e),
                            namespace: o.join(".")
                        }, f),
                        (m = i[n]) || (m = i[n] = [],
                        m.delegateCount = 0,
                        l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)),
                        l.add && (l.add.call(a, k),
                        k.handler.guid || (k.handler.guid = c.guid)),
                        e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                        sa.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Na.hasData(a) && Na.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(Ia) || [""],
                    j = b.length; j--; )
                        if (h = db.exec(b[j]) || [],
                        n = p = h[1],
                        o = (h[2] || "").split(".").sort(),
                        n) {
                            for (l = sa.event.special[n] || {},
                            n = (d ? l.delegateType : l.bindType) || n,
                            m = i[n] || [],
                            h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            g = f = m.length; f--; )
                                k = m[f],
                                !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                                k.selector && m.delegateCount--,
                                l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || sa.removeEvent(a, n, q.handle),
                            delete i[n])
                        } else
                            for (n in i)
                                sa.event.remove(a, n + b[j], c, d, !0);
                    sa.isEmptyObject(i) && Na.remove(a, "handle events")
                }
            },
            dispatch: function(a) {
                var b = sa.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (Na.get(this, "events") || {})[b.type] || [], k = sa.event.special[b.type] || {};
                for (i[0] = b,
                c = 1; c < arguments.length; c++)
                    i[c] = arguments[c];
                if (b.delegateTarget = this,
                !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                    for (h = sa.event.handlers.call(this, b, j),
                    c = 0; (f = h[c++]) && !b.isPropagationStopped(); )
                        for (b.currentTarget = f.elem,
                        d = 0; (g = f.handlers[d++]) && !b.isImmediatePropagationStopped(); )
                            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g,
                            b.data = g.data,
                            e = ((sa.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                            void 0 !== e && (b.result = e) === !1 && (b.preventDefault(),
                            b.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, b),
                    b.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
                if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                    for (; j !== this; j = j.parentNode || this)
                        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                            for (f = [],
                            g = {},
                            c = 0; c < i; c++)
                                d = b[c],
                                e = d.selector + " ",
                                void 0 === g[e] && (g[e] = d.needsContext ? sa(e, this).index(j) > -1 : sa.find(e, this, null, [j]).length),
                                g[e] && f.push(d);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return j = this,
                i < b.length && h.push({
                    elem: j,
                    handlers: b.slice(i)
                }),
                h
            },
            addProp: function(a, b) {
                Object.defineProperty(sa.Event.prototype, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: sa.isFunction(b) ? function() {
                        if (this.originalEvent)
                            return b(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[a]
                    }
                    ,
                    set: function(b) {
                        Object.defineProperty(this, a, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                })
            },
            fix: function(a) {
                return a[sa.expando] ? a : new sa.Event(a)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== A() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === A() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && sa.nodeName(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(a) {
                        return sa.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        },
        sa.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }
        ,
        sa.Event = function(a, b) {
            return this instanceof sa.Event ? (a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? y : z,
            this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
            this.currentTarget = a.currentTarget,
            this.relatedTarget = a.relatedTarget) : this.type = a,
            b && sa.extend(this, b),
            this.timeStamp = a && a.timeStamp || sa.now(),
            void (this[sa.expando] = !0)) : new sa.Event(a,b)
        }
        ,
        sa.Event.prototype = {
            constructor: sa.Event,
            isDefaultPrevented: z,
            isPropagationStopped: z,
            isImmediatePropagationStopped: z,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = y,
                a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = y,
                a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = y,
                a && !this.isSimulated && a.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        sa.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(a) {
                var b = a.button;
                return null == a.which && bb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && cb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, sa.event.addProp),
        sa.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            sa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || sa.contains(d, e)) || (a.type = f.origType,
                    c = f.handler.apply(this, arguments),
                    a.type = b),
                    c
                }
            }
        }),
        sa.fn.extend({
            on: function(a, b, c, d) {
                return B(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return B(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                    sa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                    this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b,
                b = void 0),
                c === !1 && (c = z),
                this.each(function() {
                    sa.event.remove(this, a, c, b)
                })
            }
        });
        var eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , fb = /<script|<style|<link/i
          , gb = /checked\s*(?:[^=]|=\s*.checked.)/i
          , hb = /^true\/(.*)/
          , ib = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        sa.extend({
            htmlPrefilter: function(a) {
                return a.replace(eb, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0), i = sa.contains(a.ownerDocument, a);
                if (!(qa.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || sa.isXMLDoc(a)))
                    for (g = v(h),
                    f = v(a),
                    d = 0,
                    e = f.length; d < e; d++)
                        G(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || v(a),
                        g = g || v(h),
                        d = 0,
                        e = f.length; d < e; d++)
                            F(f[d], g[d]);
                    else
                        F(a, h);
                return g = v(h, "script"),
                g.length > 0 && w(g, !i && v(a, "script")),
                h
            },
            cleanData: function(a) {
                for (var b, c, d, e = sa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (Ma(c)) {
                        if (b = c[Na.expando]) {
                            if (b.events)
                                for (d in b.events)
                                    e[d] ? sa.event.remove(c, d) : sa.removeEvent(c, d, b.handle);
                            c[Na.expando] = void 0
                        }
                        c[Oa.expando] && (c[Oa.expando] = void 0)
                    }
            }
        }),
        sa.fn.extend({
            detach: function(a) {
                return I(this, a, !0)
            },
            remove: function(a) {
                return I(this, a)
            },
            text: function(a) {
                return La(this, function(a) {
                    return void 0 === a ? sa.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return H(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = C(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return H(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = C(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return H(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return H(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType && (sa.cleanData(v(a, !1)),
                    a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null != a && a,
                b = null == b ? a : b,
                this.map(function() {
                    return sa.clone(this, a, b)
                })
            },
            html: function(a) {
                return La(this, function(a) {
                    var b = this[0] || {}
                      , c = 0
                      , d = this.length;
                    if (void 0 === a && 1 === b.nodeType)
                        return b.innerHTML;
                    if ("string" == typeof a && !fb.test(a) && !$a[(Ya.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = sa.htmlPrefilter(a);
                        try {
                            for (; c < d; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (sa.cleanData(v(b, !1)),
                                b.innerHTML = a);
                            b = 0
                        } catch (a) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return H(this, arguments, function(b) {
                    var c = this.parentNode;
                    sa.inArray(this, a) < 0 && (sa.cleanData(v(this)),
                    c && c.replaceChild(b, this))
                }, a)
            }
        }),
        sa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            sa.fn[a] = function(a) {
                for (var c, d = [], e = sa(a), f = e.length - 1, g = 0; g <= f; g++)
                    c = g === f ? this : this.clone(!0),
                    sa(e[g])[b](c),
                    ja.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var jb = /^margin/
          , kb = new RegExp("^(" + Ra + ")(?!px)[a-z%]+$","i")
          , lb = function(a) {
            var b = a.ownerDocument.defaultView;
            return b && b.opener || (b = c),
            b.getComputedStyle(a)
        };
        !function() {
            function a() {
                if (h) {
                    h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    h.innerHTML = "",
                    ab.appendChild(g);
                    var a = c.getComputedStyle(h);
                    b = "1%" !== a.top,
                    f = "2px" === a.marginLeft,
                    d = "4px" === a.width,
                    h.style.marginRight = "50%",
                    e = "4px" === a.marginRight,
                    ab.removeChild(g),
                    h = null
                }
            }
            var b, d, e, f, g = fa.createElement("div"), h = fa.createElement("div");
            h.style && (h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            qa.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h),
            sa.extend(qa, {
                pixelPosition: function() {
                    return a(),
                    b
                },
                boxSizingReliable: function() {
                    return a(),
                    d
                },
                pixelMarginRight: function() {
                    return a(),
                    e
                },
                reliableMarginLeft: function() {
                    return a(),
                    f
                }
            }))
        }();
        var mb = /^(none|table(?!-c[ea]).+)/
          , nb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , ob = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , pb = ["Webkit", "Moz", "ms"]
          , qb = fa.createElement("div").style;
        sa.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = J(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                float: "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = sa.camelCase(b), i = a.style;
                    return b = sa.cssProps[h] || (sa.cssProps[h] = L(h) || h),
                    g = sa.cssHooks[b] || sa.cssHooks[h],
                    void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                    "string" === f && (e = Sa.exec(c)) && e[1] && (c = s(a, b, e),
                    f = "number"),
                    null != c && c === c && ("number" === f && (c += e && e[3] || (sa.cssNumber[h] ? "" : "px")),
                    qa.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                    g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                    void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = sa.camelCase(b);
                return b = sa.cssProps[h] || (sa.cssProps[h] = L(h) || h),
                g = sa.cssHooks[b] || sa.cssHooks[h],
                g && "get"in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = J(a, b, d)),
                "normal" === e && b in ob && (e = ob[b]),
                "" === c || c ? (f = parseFloat(e),
                c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }),
        sa.each(["height", "width"], function(a, b) {
            sa.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c)
                        return !mb.test(sa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? O(a, b, d) : Va(a, nb, function() {
                            return O(a, b, d)
                        })
                },
                set: function(a, c, d) {
                    var e, f = d && lb(a), g = d && N(a, b, d, "border-box" === sa.css(a, "boxSizing", !1, f), f);
                    return g && (e = Sa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                    c = sa.css(a, b)),
                    M(a, c, g)
                }
            }
        }),
        sa.cssHooks.marginLeft = K(qa.reliableMarginLeft, function(a, b) {
            if (b)
                return (parseFloat(J(a, "marginLeft")) || a.getBoundingClientRect().left - Va(a, {
                    marginLeft: 0
                }, function() {
                    return a.getBoundingClientRect().left
                })) + "px"
        }),
        sa.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            sa.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                        e[a + Ta[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
            jb.test(a) || (sa.cssHooks[a + b].set = M)
        }),
        sa.fn.extend({
            css: function(a, b) {
                return La(this, function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (sa.isArray(b)) {
                        for (d = lb(a),
                        e = b.length; g < e; g++)
                            f[b[g]] = sa.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? sa.style(a, b, c) : sa.css(a, b)
                }, a, b, arguments.length > 1)
            }
        }),
        sa.Tween = P,
        P.prototype = {
            constructor: P,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                this.prop = c,
                this.easing = e || sa.easing._default,
                this.options = b,
                this.start = this.now = this.cur(),
                this.end = d,
                this.unit = f || (sa.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = P.propHooks[this.prop];
                return a && a.get ? a.get(this) : P.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = P.propHooks[this.prop];
                return this.options.duration ? this.pos = b = sa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                c && c.set ? c.set(this) : P.propHooks._default.set(this),
                this
            }
        },
        P.prototype.init.prototype = P.prototype,
        P.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = sa.css(a.elem, a.prop, ""),
                    b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    sa.fx.step[a.prop] ? sa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[sa.cssProps[a.prop]] && !sa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : sa.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        },
        P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        sa.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        },
        sa.fx = P.prototype.init,
        sa.fx.step = {};
        var rb, sb, tb = /^(?:toggle|show|hide)$/, ub = /queueHooks$/;
        sa.Animation = sa.extend(W, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return s(c.elem, a, Sa.exec(b), c),
                    c
                }
                ]
            },
            tweener: function(a, b) {
                sa.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.match(Ia);
                for (var c, d = 0, e = a.length; d < e; d++)
                    c = a[d],
                    W.tweeners[c] = W.tweeners[c] || [],
                    W.tweeners[c].unshift(b)
            },
            prefilters: [U],
            prefilter: function(a, b) {
                b ? W.prefilters.unshift(a) : W.prefilters.push(a)
            }
        }),
        sa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? sa.extend({}, a) : {
                complete: c || !c && b || sa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !sa.isFunction(b) && b
            };
            return sa.fx.off || fa.hidden ? d.duration = 0 : "number" != typeof d.duration && (d.duration in sa.fx.speeds ? d.duration = sa.fx.speeds[d.duration] : d.duration = sa.fx.speeds._default),
            null != d.queue && d.queue !== !0 || (d.queue = "fx"),
            d.old = d.complete,
            d.complete = function() {
                sa.isFunction(d.old) && d.old.call(this),
                d.queue && sa.dequeue(this, d.queue)
            }
            ,
            d
        }
        ,
        sa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Ua).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = sa.isEmptyObject(a)
                  , f = sa.speed(b, c, d)
                  , g = function() {
                    var b = W(this, sa.extend({}, a), f);
                    (e || Na.get(this, "finish")) && b.stop(!0)
                };
                return g.finish = g,
                e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop,
                    b(c)
                };
                return "string" != typeof a && (c = b,
                b = a,
                a = void 0),
                b && a !== !1 && this.queue(a || "fx", []),
                this.each(function() {
                    var b = !0
                      , e = null != a && a + "queueHooks"
                      , f = sa.timers
                      , g = Na.get(this);
                    if (e)
                        g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g)
                            g[e] && g[e].stop && ub.test(e) && d(g[e]);
                    for (e = f.length; e--; )
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                        b = !1,
                        f.splice(e, 1));
                    !b && c || sa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"),
                this.each(function() {
                    var b, c = Na.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = sa.timers, g = d ? d.length : 0;
                    for (c.finish = !0,
                    sa.queue(this, a, []),
                    e && e.stop && e.stop.call(this, !0),
                    b = f.length; b--; )
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                        f.splice(b, 1));
                    for (b = 0; b < g; b++)
                        d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }),
        sa.each(["toggle", "show", "hide"], function(a, b) {
            var c = sa.fn[b];
            sa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
            }
        }),
        sa.each({
            slideDown: S("show"),
            slideUp: S("hide"),
            slideToggle: S("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            sa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        sa.timers = [],
        sa.fx.tick = function() {
            var a, b = 0, c = sa.timers;
            for (rb = sa.now(); b < c.length; b++)
                a = c[b],
                a() || c[b] !== a || c.splice(b--, 1);
            c.length || sa.fx.stop(),
            rb = void 0
        }
        ,
        sa.fx.timer = function(a) {
            sa.timers.push(a),
            a() ? sa.fx.start() : sa.timers.pop()
        }
        ,
        sa.fx.interval = 13,
        sa.fx.start = function() {
            sb || (sb = c.requestAnimationFrame ? c.requestAnimationFrame(Q) : c.setInterval(sa.fx.tick, sa.fx.interval))
        }
        ,
        sa.fx.stop = function() {
            c.cancelAnimationFrame ? c.cancelAnimationFrame(sb) : c.clearInterval(sb),
            sb = null
        }
        ,
        sa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        sa.fn.delay = function(a, b) {
            return a = sa.fx ? sa.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, d) {
                var e = c.setTimeout(b, a);
                d.stop = function() {
                    c.clearTimeout(e)
                }
            })
        }
        ,
        function() {
            var a = fa.createElement("input")
              , b = fa.createElement("select")
              , c = b.appendChild(fa.createElement("option"));
            a.type = "checkbox",
            qa.checkOn = "" !== a.value,
            qa.optSelected = c.selected,
            a = fa.createElement("input"),
            a.value = "t",
            a.type = "radio",
            qa.radioValue = "t" === a.value
        }();
        var vb, wb = sa.expr.attrHandle;
        sa.fn.extend({
            attr: function(a, b) {
                return La(this, sa.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    sa.removeAttr(this, a)
                })
            }
        }),
        sa.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute ? sa.prop(a, b, c) : (1 === f && sa.isXMLDoc(a) || (e = sa.attrHooks[b.toLowerCase()] || (sa.expr.match.bool.test(b) ? vb : void 0)),
                    void 0 !== c ? null === c ? void sa.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                    c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = sa.find.attr(a, b),
                    null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!qa.radioValue && "radio" === b && sa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                            b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d = 0, e = b && b.match(Ia);
                if (e && 1 === a.nodeType)
                    for (; c = e[d++]; )
                        a.removeAttribute(c)
            }
        }),
        vb = {
            set: function(a, b, c) {
                return b === !1 ? sa.removeAttr(a, c) : a.setAttribute(c, c),
                c
            }
        },
        sa.each(sa.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = wb[b] || sa.find.attr;
            wb[b] = function(a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = wb[g],
                wb[g] = e,
                e = null != c(a, b, d) ? g : null,
                wb[g] = f),
                e
            }
        });
        var xb = /^(?:input|select|textarea|button)$/i
          , yb = /^(?:a|area)$/i;
        sa.fn.extend({
            prop: function(a, b) {
                return La(this, sa.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[sa.propFix[a] || a]
                })
            }
        }),
        sa.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return 1 === f && sa.isXMLDoc(a) || (b = sa.propFix[b] || b,
                    e = sa.propHooks[b]),
                    void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = sa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        qa.optSelected || (sa.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex,
                null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex)
            }
        }),
        sa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            sa.propFix[this.toLowerCase()] = this
        }),
        sa.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (sa.isFunction(a))
                    return this.each(function(b) {
                        sa(this).addClass(a.call(this, b, Y(this)))
                    });
                if ("string" == typeof a && a)
                    for (b = a.match(Ia) || []; c = this[i++]; )
                        if (e = Y(c),
                        d = 1 === c.nodeType && " " + X(e) + " ") {
                            for (g = 0; f = b[g++]; )
                                d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = X(d),
                            e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (sa.isFunction(a))
                    return this.each(function(b) {
                        sa(this).removeClass(a.call(this, b, Y(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(Ia) || []; c = this[i++]; )
                        if (e = Y(c),
                        d = 1 === c.nodeType && " " + X(e) + " ") {
                            for (g = 0; f = b[g++]; )
                                for (; d.indexOf(" " + f + " ") > -1; )
                                    d = d.replace(" " + f + " ", " ");
                            h = X(d),
                            e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : sa.isFunction(a) ? this.each(function(c) {
                    sa(this).toggleClass(a.call(this, c, Y(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c)
                        for (d = 0,
                        e = sa(this),
                        f = a.match(Ia) || []; b = f[d++]; )
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else
                        void 0 !== a && "boolean" !== c || (b = Y(this),
                        b && Na.set(this, "__className__", b),
                        this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Na.get(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++]; )
                    if (1 === c.nodeType && (" " + X(Y(c)) + " ").indexOf(b) > -1)
                        return !0;
                return !1
            }
        });
        var zb = /\r/g;
        sa.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)
                        return d = sa.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, sa(this).val()) : a,
                            null == e ? e = "" : "number" == typeof e ? e += "" : sa.isArray(e) && (e = sa.map(e, function(a) {
                                return null == a ? "" : a + ""
                            })),
                            b = sa.valHooks[this.type] || sa.valHooks[this.nodeName.toLowerCase()],
                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                    if (e)
                        return b = sa.valHooks[e.type] || sa.valHooks[e.nodeName.toLowerCase()],
                        b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                        "string" == typeof c ? c.replace(zb, "") : null == c ? "" : c)
                }
            }
        }),
        sa.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = sa.find.attr(a, "value");
                        return null != b ? b : X(sa.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (c = e[d],
                            (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !sa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = sa(c).val(),
                                g)
                                    return b;
                                h.push(b)
                            }
                        return h
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = sa.makeArray(b), g = e.length; g--; )
                            d = e[g],
                            (d.selected = sa.inArray(sa.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1),
                        f
                    }
                }
            }
        }),
        sa.each(["radio", "checkbox"], function() {
            sa.valHooks[this] = {
                set: function(a, b) {
                    if (sa.isArray(b))
                        return a.checked = sa.inArray(sa(a).val(), b) > -1
                }
            },
            qa.checkOn || (sa.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
            )
        });
        var Ab = /^(?:focusinfocus|focusoutblur)$/;
        sa.extend(sa.event, {
            trigger: function(a, b, d, e) {
                var f, g, h, i, j, k, l, m = [d || fa], n = na.call(a, "type") ? a.type : a, o = na.call(a, "namespace") ? a.namespace.split(".") : [];
                if (g = h = d = d || fa,
                3 !== d.nodeType && 8 !== d.nodeType && !Ab.test(n + sa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."),
                n = o.shift(),
                o.sort()),
                j = n.indexOf(":") < 0 && "on" + n,
                a = a[sa.expando] ? a : new sa.Event(n,"object" == typeof a && a),
                a.isTrigger = e ? 2 : 3,
                a.namespace = o.join("."),
                a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                a.result = void 0,
                a.target || (a.target = d),
                b = null == b ? [a] : sa.makeArray(b, [a]),
                l = sa.event.special[n] || {},
                e || !l.trigger || l.trigger.apply(d, b) !== !1)) {
                    if (!e && !l.noBubble && !sa.isWindow(d)) {
                        for (i = l.delegateType || n,
                        Ab.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                            m.push(g),
                            h = g;
                        h === (d.ownerDocument || fa) && m.push(h.defaultView || h.parentWindow || c)
                    }
                    for (f = 0; (g = m[f++]) && !a.isPropagationStopped(); )
                        a.type = f > 1 ? i : l.bindType || n,
                        k = (Na.get(g, "events") || {})[a.type] && Na.get(g, "handle"),
                        k && k.apply(g, b),
                        k = j && g[j],
                        k && k.apply && Ma(g) && (a.result = k.apply(g, b),
                        a.result === !1 && a.preventDefault());
                    return a.type = n,
                    e || a.isDefaultPrevented() || l._default && l._default.apply(m.pop(), b) !== !1 || !Ma(d) || j && sa.isFunction(d[n]) && !sa.isWindow(d) && (h = d[j],
                    h && (d[j] = null),
                    sa.event.triggered = n,
                    d[n](),
                    sa.event.triggered = void 0,
                    h && (d[j] = h)),
                    a.result
                }
            },
            simulate: function(a, b, c) {
                var d = sa.extend(new sa.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                sa.event.trigger(d, null, b)
            }
        }),
        sa.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    sa.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c)
                    return sa.event.trigger(a, b, c, !0)
            }
        }),
        sa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
            sa.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        sa.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        qa.focusin = "onfocusin"in c,
        qa.focusin || sa.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                sa.event.simulate(b, a.target, sa.event.fix(a))
            };
            sa.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this
                      , e = Na.access(d, b);
                    e || d.addEventListener(a, c, !0),
                    Na.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this
                      , e = Na.access(d, b) - 1;
                    e ? Na.access(d, b, e) : (d.removeEventListener(a, c, !0),
                    Na.remove(d, b))
                }
            }
        });
        var Bb = c.location
          , Cb = sa.now()
          , Db = /\?/;
        sa.parseXML = function(a) {
            var b;
            if (!a || "string" != typeof a)
                return null;
            try {
                b = (new c.DOMParser).parseFromString(a, "text/xml")
            } catch (a) {
                b = void 0
            }
            return b && !b.getElementsByTagName("parsererror").length || sa.error("Invalid XML: " + a),
            b
        }
        ;
        var Eb = /\[\]$/
          , Fb = /\r?\n/g
          , Gb = /^(?:submit|button|image|reset|file)$/i
          , Hb = /^(?:input|select|textarea|keygen)/i;
        sa.param = function(a, b) {
            var c, d = [], e = function(a, b) {
                var c = sa.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
            if (sa.isArray(a) || a.jquery && !sa.isPlainObject(a))
                sa.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (c in a)
                    Z(c, a[c], b, e);
            return d.join("&")
        }
        ,
        sa.fn.extend({
            serialize: function() {
                return sa.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = sa.prop(this, "elements");
                    return a ? sa.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !sa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Xa.test(a))
                }).map(function(a, b) {
                    var c = sa(this).val();
                    return null == c ? null : sa.isArray(c) ? sa.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Fb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Fb, "\r\n")
                    }
                }).get()
            }
        });
        var Ib = /%20/g
          , Jb = /#.*$/
          , Kb = /([?&])_=[^&]*/
          , Lb = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Nb = /^(?:GET|HEAD)$/
          , Ob = /^\/\//
          , Pb = {}
          , Qb = {}
          , Rb = "*/".concat("*")
          , Sb = fa.createElement("a");
        Sb.href = Bb.href,
        sa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Bb.href,
                type: "GET",
                isLocal: Mb.test(Bb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": sa.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? aa(aa(a, sa.ajaxSettings), b) : aa(sa.ajaxSettings, a)
            },
            ajaxPrefilter: $(Pb),
            ajaxTransport: $(Qb),
            ajax: function(a, b) {
                function d(a, b, d, h) {
                    var j, m, n, u, v, w = b;
                    k || (k = !0,
                    i && c.clearTimeout(i),
                    e = void 0,
                    g = h || "",
                    x.readyState = a > 0 ? 4 : 0,
                    j = a >= 200 && a < 300 || 304 === a,
                    d && (u = ba(o, x, d)),
                    u = ca(o, u, x, j),
                    j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"),
                    v && (sa.lastModified[f] = v),
                    v = x.getResponseHeader("etag"),
                    v && (sa.etag[f] = v)),
                    204 === a || "HEAD" === o.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = u.state,
                    m = u.data,
                    n = u.error,
                    j = !n)) : (n = w,
                    !a && w || (w = "error",
                    a < 0 && (a = 0))),
                    x.status = a,
                    x.statusText = (b || w) + "",
                    j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]),
                    x.statusCode(t),
                    t = void 0,
                    l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]),
                    s.fireWith(p, [x, w]),
                    l && (q.trigger("ajaxComplete", [x, o]),
                    --sa.active || sa.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
                var e, f, g, h, i, j, k, l, m, n, o = sa.ajaxSetup({}, b), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? sa(p) : sa.event, r = sa.Deferred(), s = sa.Callbacks("once memory"), t = o.statusCode || {}, u = {}, v = {}, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Lb.exec(g); )
                                    h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a,
                        u[a] = b),
                        this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a),
                        this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k)
                                x.always(a[x.status]);
                            else
                                for (b in a)
                                    t[b] = [t[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b),
                        d(0, b),
                        this
                    }
                };
                if (r.promise(x),
                o.url = ((a || o.url || Bb.href) + "").replace(Ob, Bb.protocol + "//"),
                o.type = b.method || b.type || o.method || o.type,
                o.dataTypes = (o.dataType || "*").toLowerCase().match(Ia) || [""],
                null == o.crossDomain) {
                    j = fa.createElement("a");
                    try {
                        j.href = o.url,
                        j.href = j.href,
                        o.crossDomain = Sb.protocol + "//" + Sb.host != j.protocol + "//" + j.host
                    } catch (a) {
                        o.crossDomain = !0
                    }
                }
                if (o.data && o.processData && "string" != typeof o.data && (o.data = sa.param(o.data, o.traditional)),
                _(Pb, o, b, x),
                k)
                    return x;
                l = sa.event && o.global,
                l && 0 === sa.active++ && sa.event.trigger("ajaxStart"),
                o.type = o.type.toUpperCase(),
                o.hasContent = !Nb.test(o.type),
                f = o.url.replace(Jb, ""),
                o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Ib, "+")) : (n = o.url.slice(f.length),
                o.data && (f += (Db.test(f) ? "&" : "?") + o.data,
                delete o.data),
                o.cache === !1 && (f = f.replace(Kb, "$1"),
                n = (Db.test(f) ? "&" : "?") + "_=" + Cb++ + n),
                o.url = f + n),
                o.ifModified && (sa.lastModified[f] && x.setRequestHeader("If-Modified-Since", sa.lastModified[f]),
                sa.etag[f] && x.setRequestHeader("If-None-Match", sa.etag[f])),
                (o.data && o.hasContent && o.contentType !== !1 || b.contentType) && x.setRequestHeader("Content-Type", o.contentType),
                x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Rb + "; q=0.01" : "") : o.accepts["*"]);
                for (m in o.headers)
                    x.setRequestHeader(m, o.headers[m]);
                if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k))
                    return x.abort();
                if (w = "abort",
                s.add(o.complete),
                x.done(o.success),
                x.fail(o.error),
                e = _(Qb, o, b, x)) {
                    if (x.readyState = 1,
                    l && q.trigger("ajaxSend", [x, o]),
                    k)
                        return x;
                    o.async && o.timeout > 0 && (i = c.setTimeout(function() {
                        x.abort("timeout")
                    }, o.timeout));
                    try {
                        k = !1,
                        e.send(u, d)
                    } catch (a) {
                        if (k)
                            throw a;
                        d(-1, a)
                    }
                } else
                    d(-1, "No Transport");
                return x
            },
            getJSON: function(a, b, c) {
                return sa.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return sa.get(a, void 0, b, "script")
            }
        }),
        sa.each(["get", "post"], function(a, b) {
            sa[b] = function(a, c, d, e) {
                return sa.isFunction(c) && (e = e || d,
                d = c,
                c = void 0),
                sa.ajax(sa.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, sa.isPlainObject(a) && a))
            }
        }),
        sa._evalUrl = function(a) {
            return sa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        sa.fn.extend({
            wrapAll: function(a) {
                var b;
                return this[0] && (sa.isFunction(a) && (a = a.call(this[0])),
                b = sa(a, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstElementChild; )
                        a = a.firstElementChild;
                    return a
                }).append(this)),
                this
            },
            wrapInner: function(a) {
                return sa.isFunction(a) ? this.each(function(b) {
                    sa(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = sa(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = sa.isFunction(a);
                return this.each(function(c) {
                    sa(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function(a) {
                return this.parent(a).not("body").each(function() {
                    sa(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        sa.expr.pseudos.hidden = function(a) {
            return !sa.expr.pseudos.visible(a)
        }
        ,
        sa.expr.pseudos.visible = function(a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }
        ,
        sa.ajaxSettings.xhr = function() {
            try {
                return new c.XMLHttpRequest
            } catch (a) {}
        }
        ;
        var Tb = {
            0: 200,
            1223: 204
        }
          , Ub = sa.ajaxSettings.xhr();
        qa.cors = !!Ub && "withCredentials"in Ub,
        qa.ajax = Ub = !!Ub,
        sa.ajaxTransport(function(a) {
            var b, d;
            if (qa.cors || Ub && !a.crossDomain)
                return {
                    send: function(e, f) {
                        var g, h = a.xhr();
                        if (h.open(a.type, a.url, a.async, a.username, a.password),
                        a.xhrFields)
                            for (g in a.xhrFields)
                                h[g] = a.xhrFields[g];
                        a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType),
                        a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e)
                            h.setRequestHeader(g, e[g]);
                        b = function(a) {
                            return function() {
                                b && (b = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                                "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Tb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                    binary: h.response
                                } : {
                                    text: h.responseText
                                }, h.getAllResponseHeaders()))
                            }
                        }
                        ,
                        h.onload = b(),
                        d = h.onerror = b("error"),
                        void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                            4 === h.readyState && c.setTimeout(function() {
                                b && d()
                            })
                        }
                        ,
                        b = b("abort");
                        try {
                            h.send(a.hasContent && a.data || null)
                        } catch (a) {
                            if (b)
                                throw a
                        }
                    },
                    abort: function() {
                        b && b()
                    }
                }
        }),
        sa.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1)
        }),
        sa.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return sa.globalEval(a),
                    a
                }
            }
        }),
        sa.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET")
        }),
        sa.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = sa("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(),
                            c = null,
                            a && e("error" === a.type ? 404 : 200, a.type)
                        }
                        ),
                        fa.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Vb = []
          , Wb = /(=)\?(?=&|$)|\?\?/;
        sa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Vb.pop() || sa.expando + "_" + Cb++;
                return this[a] = !0,
                a
            }
        }),
        sa.ajaxPrefilter("json jsonp", function(a, b, d) {
            var e, f, g, h = a.jsonp !== !1 && (Wb.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Wb.test(a.data) && "data");
            if (h || "jsonp" === a.dataTypes[0])
                return e = a.jsonpCallback = sa.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                h ? a[h] = a[h].replace(Wb, "$1" + e) : a.jsonp !== !1 && (a.url += (Db.test(a.url) ? "&" : "?") + a.jsonp + "=" + e),
                a.converters["script json"] = function() {
                    return g || sa.error(e + " was not called"),
                    g[0]
                }
                ,
                a.dataTypes[0] = "json",
                f = c[e],
                c[e] = function() {
                    g = arguments
                }
                ,
                d.always(function() {
                    void 0 === f ? sa(c).removeProp(e) : c[e] = f,
                    a[e] && (a.jsonpCallback = b.jsonpCallback,
                    Vb.push(e)),
                    g && sa.isFunction(f) && f(g[0]),
                    g = f = void 0
                }),
                "script"
        }),
        qa.createHTMLDocument = function() {
            var a = fa.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>",
            2 === a.childNodes.length
        }(),
        sa.parseHTML = function(a, b, c) {
            if ("string" != typeof a)
                return [];
            "boolean" == typeof b && (c = b,
            b = !1);
            var d, e, f;
            return b || (qa.createHTMLDocument ? (b = fa.implementation.createHTMLDocument(""),
            d = b.createElement("base"),
            d.href = fa.location.href,
            b.head.appendChild(d)) : b = fa),
            e = Ba.exec(a),
            f = !c && [],
            e ? [b.createElement(e[1])] : (e = x([a], b, f),
            f && f.length && sa(f).remove(),
            sa.merge([], e.childNodes))
        }
        ,
        sa.fn.load = function(a, b, c) {
            var d, e, f, g = this, h = a.indexOf(" ");
            return h > -1 && (d = X(a.slice(h)),
            a = a.slice(0, h)),
            sa.isFunction(b) ? (c = b,
            b = void 0) : b && "object" == typeof b && (e = "POST"),
            g.length > 0 && sa.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments,
                g.html(d ? sa("<div>").append(sa.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }
            ),
            this
        }
        ,
        sa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            sa.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        sa.expr.pseudos.animated = function(a) {
            return sa.grep(sa.timers, function(b) {
                return a === b.elem
            }).length
        }
        ,
        sa.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = sa.css(a, "position"), l = sa(a), m = {};
                "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = sa.css(a, "top"),
                i = sa.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                j ? (d = l.position(),
                g = d.top,
                e = d.left) : (g = parseFloat(f) || 0,
                e = parseFloat(i) || 0),
                sa.isFunction(b) && (b = b.call(a, c, sa.extend({}, h))),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using"in b ? b.using.call(a, m) : l.css(m)
            }
        },
        sa.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        sa.offset.setOffset(this, a, b)
                    });
                var b, c, d, e, f = this[0];
                if (f)
                    return f.getClientRects().length ? (d = f.getBoundingClientRect(),
                    d.width || d.height ? (e = f.ownerDocument,
                    c = da(e),
                    b = e.documentElement,
                    {
                        top: d.top + c.pageYOffset - b.clientTop,
                        left: d.left + c.pageXOffset - b.clientLeft
                    }) : d) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === sa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                    b = this.offset(),
                    sa.nodeName(a[0], "html") || (d = a.offset()),
                    d = {
                        top: d.top + sa.css(a[0], "borderTopWidth", !0),
                        left: d.left + sa.css(a[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: b.top - d.top - sa.css(c, "marginTop", !0),
                        left: b.left - d.left - sa.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent; a && "static" === sa.css(a, "position"); )
                        a = a.offsetParent;
                    return a || ab
                })
            }
        }),
        sa.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = "pageYOffset" === b;
            sa.fn[a] = function(d) {
                return La(this, function(a, d, e) {
                    var f = da(a);
                    return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }),
        sa.each(["top", "left"], function(a, b) {
            sa.cssHooks[b] = K(qa.pixelPosition, function(a, c) {
                if (c)
                    return c = J(a, b),
                    kb.test(c) ? sa(a).position()[b] + "px" : c
            })
        }),
        sa.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            sa.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                sa.fn[d] = function(e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e)
                      , h = c || (e === !0 || f === !0 ? "margin" : "border");
                    return La(this, function(b, c, e) {
                        var f;
                        return sa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement,
                        Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? sa.css(b, c, h) : sa.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }),
        sa.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }),
        sa.parseJSON = JSON.parse,
        d = [],
        e = function() {
            return sa
        }
        .apply(b, d),
        !(void 0 !== e && (a.exports = e));
        var Xb = c.jQuery
          , Yb = c.$;
        return sa.noConflict = function(a) {
            return c.$ === sa && (c.$ = Yb),
            a && c.jQuery === sa && (c.jQuery = Xb),
            sa
        }
        ,
        f || (c.jQuery = c.$ = sa),
        sa
    })
}
, function(a, b, c) {
    (function(a) {
        "use strict";
        a.noConflict(!0)
    }
    ).call(b, c(5))
}
, function(a, b, c) {
    (function(a) {
        "use strict";
        !function(a) {
            function b() {}
            function c() {
                return !D || "connected" != D.status
            }
            function d(a) {
                a ? (D = a,
                D.authResponse = !0,
                D.status = "connected") : D = {
                    status: "notConnected",
                    access_token: "",
                    perms: ""
                }
            }
            function e(a) {
                var b = a.originalEvent.origin
                  , c = a.data.expectedOrigin;
                return b === c
            }
            function f(a, c, d) {
                "function" == typeof a && (d = c,
                c = a,
                a = void 0),
                a = a || {},
                c = "function" == typeof c ? c : b,
                D && !d ? c(D) : yam.platform.request({
                    url: yam.config().baseURI + "/" + y,
                    xhrFields: {
                        withCredentials: !0
                    },
                    crossDomain: !0,
                    data: yam.config().appId ? {
                        client_id: yam.config().appId
                    } : {},
                    success: g,
                    error: h,
                    complete: function a() {
                        c(D)
                    }
                })
            }
            function g(a) {
                a.access_token && a.access_token.token ? (i(a.access_token.token),
                d(a)) : h(a)
            }
            function h() {
                i(null),
                d(null)
            }
            function i(a, b) {
                null === a ? D = !1 : d({
                    access_token: {
                        token: a
                    }
                }),
                "function" == typeof b && yam.platform.request({
                    url: yam.config().apiBaseURI + "/api/v1/" + z,
                    data: yam.config().appId ? {
                        client_id: yam.config().appId
                    } : {},
                    success: j,
                    error: k,
                    complete: function a() {
                        b(D)
                    }
                })
            }
            function j(a) {
                a.token ? d({
                    access_token: a
                }) : k(a)
            }
            function k() {
                i(null),
                d(null)
            }
            function l(b, c) {
                "function" == typeof b && (c = b,
                b = void 0),
                b = b || {},
                a(window).on("message", {
                    callback: c,
                    expectedOrigin: yam.config().baseURI
                }, n);
                var d = yam.config().baseURI + "/" + m(b) + (b.loginType && "session" == b.loginType ? A : B) + "?display=popup"
                  , e = yam.config().appId;
                e && (d += "&client_id=" + e),
                o(d)
            }
            function m(a) {
                var b = a && a.network;
                return b && !/^\s*\d+\s*$/.test(b) ? b + "/" : ""
            }
            function n(c) {
                var f, g, h;
                e(c) && (f = JSON.parse(c.originalEvent.data) || {},
                g = f.data || {},
                h = c.data.callback || b,
                f && "login" == f.method && (p(),
                i(g.access_token ? g.access_token.token : null),
                d(g.access_token ? g : null),
                a(window).off("message", n),
                !g.access_token && g.reason && window.console && "function" == typeof console.log && console.log("[yammer] Login failed: " + g.reason),
                h(D)))
            }
            function o(a) {
                var b = ["width=800", "height=480", "resizable=yes", "status=yes", "location=yes", "toolbar=no"].join(",");
                p(),
                E = window.open("about:blank", "", b),
                w(function() {
                    E && (E.focus(),
                    E.location.href = a)
                })
            }
            function p() {
                E && E.close()
            }
            function q(b) {
                yam.config().csrf_token ? yam.platform.request({
                    url: yam.config().baseURI + "/" + x,
                    type: "POST",
                    data: {
                        authenticity_token: yam.config().csrf_token,
                        _method: "delete"
                    },
                    success: s,
                    error: t,
                    complete: function a() {
                        b(c())
                    }
                }) : w(function(c) {
                    a(window).on("message", {
                        callback: b,
                        expectedOrigin: yam.config().baseURI
                    }, r),
                    c.postMessage('{ "method": "yam.logOut" }', yam.config().baseURI)
                })
            }
            function r(d) {
                var f, g;
                e(d) && (f = JSON.parse(d.originalEvent.data) || {},
                g = d.data.callback || b,
                "yam.logOut" == f.method && (s(f),
                g(c())),
                a(window).off("message", r))
            }
            function s(a) {
                "success" == a.data ? (i(null),
                d(null)) : t()
            }
            function t() {}
            function u() {
                if (D && D.access_token && D.access_token.token)
                    return D.access_token.token
            }
            function v(b) {
                var c = a.extend({}, b)
                  , d = u();
                return d && d.length && (c.headers = c.headers || {},
                c.headers.authorization = "Bearer " + d),
                /^https?:\/\//.test(c.url) || 0 === c.url.indexOf("/") || (c.url = yam.config().apiBaseURI + "/api/v1/" + c.url),
                a.ajax(c)
            }
            function w(b) {
                if (F)
                    return b(F);
                var c = yam.config().baseURI + "/" + C + "?ts=" + Date.now();
                yam.config().appId && (c += "&client_id=" + yam.config().appId),
                G.data("initialized") || (G.data("initialized", !0).attr("src", c),
                a(document).ready(function() {
                    a("body").append(G)
                })),
                G.on("load", function() {
                    return b(F = window.frames["yam-xdr-proxy"])
                })
            }
            yam.platform || (yam.platform = {});
            var x = "logout", y = "platform/login_status.json", z = "oauth2/token.json", A = "dialog/weblogin", B = "dialog/oauth", C = "platform_embed/js_sdk_login_proxy", D = !1, E = !1, F, G;
            G = a("<iframe></iframe>").attr({
                id: "yam-xdr-proxy",
                name: "yam-xdr-proxy"
            }).css("display", "none"),
            yam.platform.getLoginStatus = f,
            yam.platform.setAuthToken = i,
            yam.platform.login = l,
            yam.platform.logout = q,
            yam.platform.request = v,
            yam.getLoginStatus = f,
            yam.login = l,
            yam.logout = q
        }(a)
    }
    ).call(b, c(5))
}
, function(a, b, c) {
    (function(a) {
        "use strict";
        !function(a) {
            function b(a) {
                window.console && "function" == typeof console.log && console.log("[yammer] " + a)
            }
            function c() {
                if ("undefined" != typeof document.currentScript)
                    return document.currentScript;
                for (var a = document.getElementsByTagName("script"), b = -1, c = a.length - 1; b === -1 && c > -1; c--)
                    a[c].getAttribute("data-app-id") && (b = c);
                return b === -1 ? null : a[b]
            }
            function d() {
                var a = c();
                if (!a)
                    return void b("Could not find the script tag with the app id");
                var d = {
                    authMethod: "oauth2"
                }
                  , e = {
                    "data-asset-host": "assetHost",
                    "data-cnd-asset-host": "cdnAssetHost",
                    "data-app-id": "appId"
                };
                for (var f in e)
                    if (Object.prototype.hasOwnProperty.call(e, f)) {
                        var g = a.getAttribute(f);
                        if (g) {
                            var h = e[f];
                            d[h] = g
                        }
                    }
                yam.config(d)
            }
            function e() {
                location.reload()
            }
            function f(b, c) {
                var d = {}, e = yam.config(), f, g;
                "string" == typeof b ? f = b : (f = b.selector,
                g = b.network,
                g && (d.network = g)),
                yam.getLoginStatus(function(b) {
                    var g = a(f);
                    return b.authResponse ? void c(b) : (g.append('<img alt="Log in with Yammer" role="button" tabindex="0" src="' + e.cdnAssetHost + '/assets/images/yammer_signin.png" style="cursor: pointer;">'),
                    g.bind("click", function() {
                        yam.login(d, c)
                    }),
                    void g.bind("keypress", function(a) {
                        if (32 === a.which || 13 === a.which)
                            return yam.login(d, c),
                            !1
                    }))
                })
            }
            d(),
            yam.connect = yam.connect || {},
            yam.connect.loginButton = f,
            yam.connect.reload = e
        }(a)
    }
    ).call(b, c(5))
}
]);
