(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function h(l2, u2, i2) {
    var t2, o2, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return v(l2, f2, t2, o2, null);
  }
  function v(n2, i2, t2, o2, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _(n2, l2) {
    if (null == l2)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, j(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && k(t2)));
      });
  }
  function w(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
    var h3, y, d2, k2, b2, g2, w2, x = i2 && i2.__k || e, C2 = x.length;
    for (u2.__k = [], h3 = 0; h3 < l2.length; h3++)
      if (null != (k2 = u2.__k[h3] = null == (k2 = l2[h3]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h3]) || d2 && k2.key == d2.key && k2.type === d2.type)
          x[h3] = void 0;
        else
          for (y = 0; y < C2; y++) {
            if ((d2 = x[y]) && k2.key == d2.key && k2.type === d2.type) {
              x[y] = void 0;
              break;
            }
            d2 = null;
          }
        j(n2, k2, d2 = d2 || f, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y = k2.ref) && d2.ref != y && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = A(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _(d2));
      }
    for (u2.__e = g2, h3 = C2; h3--; )
      null != x[h3] && ("function" == typeof u2.type && null != x[h3].__e && x[h3].__e == u2.__d && (u2.__d = _(i2, h3 + 1)), N(x[h3], x[h3]));
    if (w2)
      for (h3 = 0; h3 < w2.length; h3++)
        M(w2[h3], w2[++h3], w2[++h3]);
  }
  function m(n2, l2, u2) {
    for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
      (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function A(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (void 0 !== l2.__d)
      r2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != o2 || null == t2.parentNode)
      n:
        if (null == o2 || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return void 0 !== r2 ? r2 : t2.nextSibling;
  }
  function C(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
  }
  function $(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
  }
  function H(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
    var a2, h3, v2, y, _2, k2, b2, g2, m2, x, A2, C2, $2, H2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
    try {
      n:
        if ("function" == typeof H2) {
          if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h3 = u2.__c = i2.__c).__ = h3.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h3 = new H2(g2, x) : (u2.__c = h3 = new d(g2, x), h3.constructor = H2, h3.render = O), m2 && m2.sub(h3), h3.props = g2, h3.state || (h3.state = {}), h3.context = x, h3.__n = t2, v2 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != H2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, H2.getDerivedStateFromProps(g2, h3.__s))), y = h3.props, _2 = h3.state, v2)
            null == H2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g2 !== y && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g2, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g2, h3.__s, x) || u2.__v === i2.__v) {
              h3.props = g2, h3.state = h3.__s, u2.__v !== i2.__v && (h3.__d = false), h3.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h3.__h.length && f2.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(g2, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(y, _2, k2);
            });
          }
          if (h3.context = x, h3.props = g2, h3.__v = u2, h3.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h3.state = h3.__s, h3.__d = false, A2 && A2(u2), a2 = h3.render(h3.props, h3.state, h3.context);
          else
            do {
              h3.__d = false, A2 && A2(u2), a2 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++C2 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (t2 = s(s({}, t2), h3.getChildContext())), v2 || null == h3.getSnapshotBeforeUpdate || (k2 = h3.getSnapshotBeforeUpdate(y, _2)), $2 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h3.base = u2.__e, u2.__h = null, h3.__h.length && f2.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
      (a2 = l.diffed) && a2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function z(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function L(l2, u2, i2, t2, o2, r2, e2, c2) {
    var s2, h3, v2, y = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
    if ("svg" === d2 && (o2 = true), null != r2) {
      for (; k2 < r2.length; k2++)
        if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
          l2 = s2, r2[k2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === d2)
        return document.createTextNode(p2);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
    }
    if (null === d2)
      y === p2 || c2 && l2.data === p2 || (l2.data = p2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h3 = (y = i2.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
        if (null != r2)
          for (y = {}, k2 = 0; k2 < l2.attributes.length; k2++)
            y[l2.attributes[k2].name] = l2.attributes[k2].value;
        (v2 || h3) && (v2 && (h3 && v2.__html == h3.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l2, p2, y, o2, c2), v2)
        u2.__k = [];
      else if (k2 = u2.props.children, w(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _(i2, 0), c2), null != r2)
        for (k2 = r2.length; k2--; )
          null != r2[k2] && a(r2[k2]);
      c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y.value) && H(l2, "value", k2, y.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y.checked, false));
    }
    return l2;
  }
  function M(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, o2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
    i2 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function P(u2, i2, t2) {
    var o2, r2, e2;
    l.__ && l.__(u2, i2), r2 = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j(i2, u2 = (!o2 && t2 || i2).__k = h(p, null, [u2]), r2 || f, f, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(e2, u2);
  }
  function S(n2, l2) {
    P(n2, l2, S);
  }
  n = e.slice, l = { __e: function(n2, l2, u2, i2) {
    for (var t2, o2, r2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // public/js/components/App2.js
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_preact = __commonJS({
    "node_modules/preact/dist/preact.js"(exports) {
      var n2;
      var l2;
      var u2;
      var t2;
      var i2;
      var o2;
      var r2;
      var f2 = {};
      var e2 = [];
      var c2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function s2(n22, l22) {
        for (var u22 in l22)
          n22[u22] = l22[u22];
        return n22;
      }
      function a2(n22) {
        var l22 = n22.parentNode;
        l22 && l22.removeChild(n22);
      }
      function p2(l22, u22, t22) {
        var i22, o22, r22, f22 = {};
        for (r22 in u22)
          "key" == r22 ? i22 = u22[r22] : "ref" == r22 ? o22 = u22[r22] : f22[r22] = u22[r22];
        if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n2.call(arguments, 2) : t22), "function" == typeof l22 && null != l22.defaultProps)
          for (r22 in l22.defaultProps)
            void 0 === f22[r22] && (f22[r22] = l22.defaultProps[r22]);
        return v2(l22, f22, i22, o22, null);
      }
      function v2(n22, t22, i22, o22, r22) {
        var f22 = { type: n22, props: t22, key: i22, ref: o22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r22 ? ++u2 : r22 };
        return null == r22 && null != l2.vnode && l2.vnode(f22), f22;
      }
      function h22(n22) {
        return n22.children;
      }
      function y(n22, l22) {
        this.props = n22, this.context = l22;
      }
      function d2(n22, l22) {
        if (null == l22)
          return n22.__ ? d2(n22.__, n22.__.__k.indexOf(n22) + 1) : null;
        for (var u22; l22 < n22.__k.length; l22++)
          if (null != (u22 = n22.__k[l22]) && null != u22.__e)
            return u22.__e;
        return "function" == typeof n22.type ? d2(n22) : null;
      }
      function _2(n22) {
        var l22, u22;
        if (null != (n22 = n22.__) && null != n22.__c) {
          for (n22.__e = n22.__c.base = null, l22 = 0; l22 < n22.__k.length; l22++)
            if (null != (u22 = n22.__k[l22]) && null != u22.__e) {
              n22.__e = n22.__c.base = u22.__e;
              break;
            }
          return _2(n22);
        }
      }
      function k2(n22) {
        (!n22.__d && (n22.__d = true) && i2.push(n22) && !x.__r++ || o2 !== l2.debounceRendering) && ((o2 = l2.debounceRendering) || setTimeout)(x);
      }
      function x() {
        for (var n22; x.__r = i2.length; )
          n22 = i2.sort(function(n3, l22) {
            return n3.__v.__b - l22.__v.__b;
          }), i2 = [], n22.some(function(n3) {
            var l22, u22, t22, i22, o22, r22;
            n3.__d && (o22 = (i22 = (l22 = n3).__v).__e, (r22 = l22.__P) && (u22 = [], (t22 = s2({}, i22)).__v = i22.__v + 1, I2(r22, i22, t22, l22.__n, void 0 !== r22.ownerSVGElement, null != i22.__h ? [o22] : null, u22, null == o22 ? d2(i22) : o22, i22.__h), T2(u22, i22), i22.__e != o22 && _2(i22)));
          });
      }
      function b2(n22, l22, u22, t22, i22, o22, r22, c22, s22, a22) {
        var p22, y2, _22, k22, x2, b22, m22, A22 = t22 && t22.__k || e2, C22 = A22.length;
        for (u22.__k = [], p22 = 0; p22 < l22.length; p22++)
          if (null != (k22 = u22.__k[p22] = null == (k22 = l22[p22]) || "boolean" == typeof k22 ? null : "string" == typeof k22 || "number" == typeof k22 || "bigint" == typeof k22 ? v2(null, k22, null, null, k22) : Array.isArray(k22) ? v2(h22, { children: k22 }, null, null, null) : k22.__b > 0 ? v2(k22.type, k22.props, k22.key, k22.ref ? k22.ref : null, k22.__v) : k22)) {
            if (k22.__ = u22, k22.__b = u22.__b + 1, null === (_22 = A22[p22]) || _22 && k22.key == _22.key && k22.type === _22.type)
              A22[p22] = void 0;
            else
              for (y2 = 0; y2 < C22; y2++) {
                if ((_22 = A22[y2]) && k22.key == _22.key && k22.type === _22.type) {
                  A22[y2] = void 0;
                  break;
                }
                _22 = null;
              }
            I2(n22, k22, _22 = _22 || f2, i22, o22, r22, c22, s22, a22), x2 = k22.__e, (y2 = k22.ref) && _22.ref != y2 && (m22 || (m22 = []), _22.ref && m22.push(_22.ref, null, k22), m22.push(y2, k22.__c || x2, k22)), null != x2 ? (null == b22 && (b22 = x2), "function" == typeof k22.type && k22.__k === _22.__k ? k22.__d = s22 = g2(k22, s22, n22) : s22 = w2(n22, k22, _22, A22, x2, s22), "function" == typeof u22.type && (u22.__d = s22)) : s22 && _22.__e == s22 && s22.parentNode != n22 && (s22 = d2(_22));
          }
        for (u22.__e = b22, p22 = C22; p22--; )
          null != A22[p22] && ("function" == typeof u22.type && null != A22[p22].__e && A22[p22].__e == u22.__d && (u22.__d = d2(t22, p22 + 1)), L2(A22[p22], A22[p22]));
        if (m22)
          for (p22 = 0; p22 < m22.length; p22++)
            z2(m22[p22], m22[++p22], m22[++p22]);
      }
      function g2(n22, l22, u22) {
        for (var t22, i22 = n22.__k, o22 = 0; i22 && o22 < i22.length; o22++)
          (t22 = i22[o22]) && (t22.__ = n22, l22 = "function" == typeof t22.type ? g2(t22, l22, u22) : w2(u22, t22, t22, i22, t22.__e, l22));
        return l22;
      }
      function w2(n22, l22, u22, t22, i22, o22) {
        var r22, f22, e22;
        if (void 0 !== l22.__d)
          r22 = l22.__d, l22.__d = void 0;
        else if (null == u22 || i22 != o22 || null == i22.parentNode)
          n:
            if (null == o22 || o22.parentNode !== n22)
              n22.appendChild(i22), r22 = null;
            else {
              for (f22 = o22, e22 = 0; (f22 = f22.nextSibling) && e22 < t22.length; e22 += 2)
                if (f22 == i22)
                  break n;
              n22.insertBefore(i22, o22), r22 = o22;
            }
        return void 0 !== r22 ? r22 : i22.nextSibling;
      }
      function m2(n22, l22, u22, t22, i22) {
        var o22;
        for (o22 in u22)
          "children" === o22 || "key" === o22 || o22 in l22 || C2(n22, o22, null, u22[o22], t22);
        for (o22 in l22)
          i22 && "function" != typeof l22[o22] || "children" === o22 || "key" === o22 || "value" === o22 || "checked" === o22 || u22[o22] === l22[o22] || C2(n22, o22, l22[o22], u22[o22], t22);
      }
      function A2(n22, l22, u22) {
        "-" === l22[0] ? n22.setProperty(l22, u22) : n22[l22] = null == u22 ? "" : "number" != typeof u22 || c2.test(l22) ? u22 : u22 + "px";
      }
      function C2(n22, l22, u22, t22, i22) {
        var o22;
        n:
          if ("style" === l22)
            if ("string" == typeof u22)
              n22.style.cssText = u22;
            else {
              if ("string" == typeof t22 && (n22.style.cssText = t22 = ""), t22)
                for (l22 in t22)
                  u22 && l22 in u22 || A2(n22.style, l22, "");
              if (u22)
                for (l22 in u22)
                  t22 && u22[l22] === t22[l22] || A2(n22.style, l22, u22[l22]);
            }
          else if ("o" === l22[0] && "n" === l22[1])
            o22 = l22 !== (l22 = l22.replace(/Capture$/, "")), l22 = l22.toLowerCase() in n22 ? l22.toLowerCase().slice(2) : l22.slice(2), n22.l || (n22.l = {}), n22.l[l22 + o22] = u22, u22 ? t22 || n22.addEventListener(l22, o22 ? H2 : $2, o22) : n22.removeEventListener(l22, o22 ? H2 : $2, o22);
          else if ("dangerouslySetInnerHTML" !== l22) {
            if (i22)
              l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("href" !== l22 && "list" !== l22 && "form" !== l22 && "tabIndex" !== l22 && "download" !== l22 && l22 in n22)
              try {
                n22[l22] = null == u22 ? "" : u22;
                break n;
              } catch (n3) {
              }
            "function" == typeof u22 || (null != u22 && (false !== u22 || "a" === l22[0] && "r" === l22[1]) ? n22.setAttribute(l22, u22) : n22.removeAttribute(l22));
          }
      }
      function $2(n22) {
        this.l[n22.type + false](l2.event ? l2.event(n22) : n22);
      }
      function H2(n22) {
        this.l[n22.type + true](l2.event ? l2.event(n22) : n22);
      }
      function I2(n22, u22, t22, i22, o22, r22, f22, e22, c22) {
        var a22, p22, v22, d22, _22, k22, x2, g22, w22, m22, A22, C22, $22, H22 = u22.type;
        if (void 0 !== u22.constructor)
          return null;
        null != t22.__h && (c22 = t22.__h, e22 = u22.__e = t22.__e, u22.__h = null, r22 = [e22]), (a22 = l2.__b) && a22(u22);
        try {
          n:
            if ("function" == typeof H22) {
              if (g22 = u22.props, w22 = (a22 = H22.contextType) && i22[a22.__c], m22 = a22 ? w22 ? w22.props.value : a22.__ : i22, t22.__c ? x2 = (p22 = u22.__c = t22.__c).__ = p22.__E : ("prototype" in H22 && H22.prototype.render ? u22.__c = p22 = new H22(g22, m22) : (u22.__c = p22 = new y(g22, m22), p22.constructor = H22, p22.render = M2), w22 && w22.sub(p22), p22.props = g22, p22.state || (p22.state = {}), p22.context = m22, p22.__n = i22, v22 = p22.__d = true, p22.__h = []), null == p22.__s && (p22.__s = p22.state), null != H22.getDerivedStateFromProps && (p22.__s == p22.state && (p22.__s = s2({}, p22.__s)), s2(p22.__s, H22.getDerivedStateFromProps(g22, p22.__s))), d22 = p22.props, _22 = p22.state, v22)
                null == H22.getDerivedStateFromProps && null != p22.componentWillMount && p22.componentWillMount(), null != p22.componentDidMount && p22.__h.push(p22.componentDidMount);
              else {
                if (null == H22.getDerivedStateFromProps && g22 !== d22 && null != p22.componentWillReceiveProps && p22.componentWillReceiveProps(g22, m22), !p22.__e && null != p22.shouldComponentUpdate && false === p22.shouldComponentUpdate(g22, p22.__s, m22) || u22.__v === t22.__v) {
                  p22.props = g22, p22.state = p22.__s, u22.__v !== t22.__v && (p22.__d = false), p22.__v = u22, u22.__e = t22.__e, u22.__k = t22.__k, u22.__k.forEach(function(n3) {
                    n3 && (n3.__ = u22);
                  }), p22.__h.length && f22.push(p22);
                  break n;
                }
                null != p22.componentWillUpdate && p22.componentWillUpdate(g22, p22.__s, m22), null != p22.componentDidUpdate && p22.__h.push(function() {
                  p22.componentDidUpdate(d22, _22, k22);
                });
              }
              if (p22.context = m22, p22.props = g22, p22.__v = u22, p22.__P = n22, A22 = l2.__r, C22 = 0, "prototype" in H22 && H22.prototype.render)
                p22.state = p22.__s, p22.__d = false, A22 && A22(u22), a22 = p22.render(p22.props, p22.state, p22.context);
              else
                do {
                  p22.__d = false, A22 && A22(u22), a22 = p22.render(p22.props, p22.state, p22.context), p22.state = p22.__s;
                } while (p22.__d && ++C22 < 25);
              p22.state = p22.__s, null != p22.getChildContext && (i22 = s2(s2({}, i22), p22.getChildContext())), v22 || null == p22.getSnapshotBeforeUpdate || (k22 = p22.getSnapshotBeforeUpdate(d22, _22)), $22 = null != a22 && a22.type === h22 && null == a22.key ? a22.props.children : a22, b2(n22, Array.isArray($22) ? $22 : [$22], u22, t22, i22, o22, r22, f22, e22, c22), p22.base = u22.__e, u22.__h = null, p22.__h.length && f22.push(p22), x2 && (p22.__E = p22.__ = null), p22.__e = false;
            } else
              null == r22 && u22.__v === t22.__v ? (u22.__k = t22.__k, u22.__e = t22.__e) : u22.__e = j2(t22.__e, u22, t22, i22, o22, r22, f22, c22);
          (a22 = l2.diffed) && a22(u22);
        } catch (n3) {
          u22.__v = null, (c22 || null != r22) && (u22.__e = e22, u22.__h = !!c22, r22[r22.indexOf(e22)] = null), l2.__e(n3, u22, t22);
        }
      }
      function T2(n22, u22) {
        l2.__c && l2.__c(u22, n22), n22.some(function(u3) {
          try {
            n22 = u3.__h, u3.__h = [], n22.some(function(n3) {
              n3.call(u3);
            });
          } catch (n3) {
            l2.__e(n3, u3.__v);
          }
        });
      }
      function j2(l22, u22, t22, i22, o22, r22, e22, c22) {
        var s22, p22, v22, h3 = t22.props, y2 = u22.props, _22 = u22.type, k22 = 0;
        if ("svg" === _22 && (o22 = true), null != r22) {
          for (; k22 < r22.length; k22++)
            if ((s22 = r22[k22]) && "setAttribute" in s22 == !!_22 && (_22 ? s22.localName === _22 : 3 === s22.nodeType)) {
              l22 = s22, r22[k22] = null;
              break;
            }
        }
        if (null == l22) {
          if (null === _22)
            return document.createTextNode(y2);
          l22 = o22 ? document.createElementNS("http://www.w3.org/2000/svg", _22) : document.createElement(_22, y2.is && y2), r22 = null, c22 = false;
        }
        if (null === _22)
          h3 === y2 || c22 && l22.data === y2 || (l22.data = y2);
        else {
          if (r22 = r22 && n2.call(l22.childNodes), p22 = (h3 = t22.props || f2).dangerouslySetInnerHTML, v22 = y2.dangerouslySetInnerHTML, !c22) {
            if (null != r22)
              for (h3 = {}, k22 = 0; k22 < l22.attributes.length; k22++)
                h3[l22.attributes[k22].name] = l22.attributes[k22].value;
            (v22 || p22) && (v22 && (p22 && v22.__html == p22.__html || v22.__html === l22.innerHTML) || (l22.innerHTML = v22 && v22.__html || ""));
          }
          if (m2(l22, y2, h3, o22, c22), v22)
            u22.__k = [];
          else if (k22 = u22.props.children, b2(l22, Array.isArray(k22) ? k22 : [k22], u22, t22, i22, o22 && "foreignObject" !== _22, r22, e22, r22 ? r22[0] : t22.__k && d2(t22, 0), c22), null != r22)
            for (k22 = r22.length; k22--; )
              null != r22[k22] && a2(r22[k22]);
          c22 || ("value" in y2 && void 0 !== (k22 = y2.value) && (k22 !== l22.value || "progress" === _22 && !k22 || "option" === _22 && k22 !== h3.value) && C2(l22, "value", k22, h3.value, false), "checked" in y2 && void 0 !== (k22 = y2.checked) && k22 !== l22.checked && C2(l22, "checked", k22, h3.checked, false));
        }
        return l22;
      }
      function z2(n22, u22, t22) {
        try {
          "function" == typeof n22 ? n22(u22) : n22.current = u22;
        } catch (n3) {
          l2.__e(n3, t22);
        }
      }
      function L2(n22, u22, t22) {
        var i22, o22;
        if (l2.unmount && l2.unmount(n22), (i22 = n22.ref) && (i22.current && i22.current !== n22.__e || z2(i22, null, u22)), null != (i22 = n22.__c)) {
          if (i22.componentWillUnmount)
            try {
              i22.componentWillUnmount();
            } catch (n3) {
              l2.__e(n3, u22);
            }
          i22.base = i22.__P = null, n22.__c = void 0;
        }
        if (i22 = n22.__k)
          for (o22 = 0; o22 < i22.length; o22++)
            i22[o22] && L2(i22[o22], u22, "function" != typeof n22.type);
        t22 || null == n22.__e || a2(n22.__e), n22.__ = n22.__e = n22.__d = void 0;
      }
      function M2(n22, l22, u22) {
        return this.constructor(n22, u22);
      }
      function N2(u22, t22, i22) {
        var o22, r22, e22;
        l2.__ && l2.__(u22, t22), r22 = (o22 = "function" == typeof i22) ? null : i22 && i22.__k || t22.__k, e22 = [], I2(t22, u22 = (!o22 && i22 || t22).__k = p2(h22, null, [u22]), r22 || f2, f2, void 0 !== t22.ownerSVGElement, !o22 && i22 ? [i22] : r22 ? null : t22.firstChild ? n2.call(t22.childNodes) : null, e22, !o22 && i22 ? i22 : r22 ? r22.__e : t22.firstChild, o22), T2(e22, u22);
      }
      n2 = e2.slice, l2 = { __e: function(n22, l22, u22, t22) {
        for (var i22, o22, r22; l22 = l22.__; )
          if ((i22 = l22.__c) && !i22.__)
            try {
              if ((o22 = i22.constructor) && null != o22.getDerivedStateFromError && (i22.setState(o22.getDerivedStateFromError(n22)), r22 = i22.__d), null != i22.componentDidCatch && (i22.componentDidCatch(n22, t22 || {}), r22 = i22.__d), r22)
                return i22.__E = i22;
            } catch (l3) {
              n22 = l3;
            }
        throw n22;
      } }, u2 = 0, t2 = function(n22) {
        return null != n22 && void 0 === n22.constructor;
      }, y.prototype.setState = function(n22, l22) {
        var u22;
        u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s2({}, this.state), "function" == typeof n22 && (n22 = n22(s2({}, u22), this.props)), n22 && s2(u22, n22), null != n22 && this.__v && (l22 && this.__h.push(l22), k2(this));
      }, y.prototype.forceUpdate = function(n22) {
        this.__v && (this.__e = true, n22 && this.__h.push(n22), k2(this));
      }, y.prototype.render = h22, i2 = [], x.__r = 0, r2 = 0, exports.Component = y, exports.Fragment = h22, exports.cloneElement = function(l22, u22, t22) {
        var i22, o22, r22, f22 = s2({}, l22.props);
        for (r22 in u22)
          "key" == r22 ? i22 = u22[r22] : "ref" == r22 ? o22 = u22[r22] : f22[r22] = u22[r22];
        return arguments.length > 2 && (f22.children = arguments.length > 3 ? n2.call(arguments, 2) : t22), v2(l22.type, f22, i22 || l22.key, o22 || l22.ref, null);
      }, exports.createContext = function(n22, l22) {
        var u22 = { __c: l22 = "__cC" + r2++, __: n22, Consumer: function(n3, l3) {
          return n3.children(l3);
        }, Provider: function(n3) {
          var u3, t22;
          return this.getChildContext || (u3 = [], (t22 = {})[l22] = this, this.getChildContext = function() {
            return t22;
          }, this.shouldComponentUpdate = function(n4) {
            this.props.value !== n4.value && u3.some(k2);
          }, this.sub = function(n4) {
            u3.push(n4);
            var l3 = n4.componentWillUnmount;
            n4.componentWillUnmount = function() {
              u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
            };
          }), n3.children;
        } };
        return u22.Provider.__ = u22.Consumer.contextType = u22;
      }, exports.createElement = p2, exports.createRef = function() {
        return { current: null };
      }, exports.h = p2, exports.hydrate = function n22(l22, u22) {
        N2(l22, u22, n22);
      }, exports.isValidElement = t2, exports.options = l2, exports.render = N2, exports.toChildArray = function n22(l22, u22) {
        return u22 = u22 || [], null == l22 || "boolean" == typeof l22 || (Array.isArray(l22) ? l22.some(function(l3) {
          n22(l3, u22);
        }) : u22.push(l22)), u22;
      };
    }
  });
  var { h: h2, Component } = require_preact();
  var App2 = class extends Component {
    constructor() {
      super();
    }
    render() {
      return /* @__PURE__ */ h2("button", {
        onClick: () => console.log("hello")
      }, "HELLO");
    }
  };

  // src/App.jsx
  var App = () => {
    return /* @__PURE__ */ h(App2, null);
  };
  S(/* @__PURE__ */ h(App, null), document.getElementById("root"));
})();
