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
function s(n3, l3) {
  for (var u3 in l3)
    n3[u3] = l3[u3];
  return n3;
}
function a(n3) {
  var l3 = n3.parentNode;
  l3 && l3.removeChild(n3);
}
function h(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return v(l3, f3, t3, o3, null);
}
function v(n3, i3, t3, o3, r3) {
  var f3 = { type: n3, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function p(n3) {
  return n3.children;
}
function d(n3, l3) {
  this.props = n3, this.context = l3;
}
function _(n3, l3) {
  if (null == l3)
    return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++)
    if (null != (u3 = n3.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n3.type ? _(n3) : null;
}
function k(n3) {
  var l3, u3;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
      if (null != (u3 = n3.__k[l3]) && null != u3.__e) {
        n3.__e = n3.__c.base = u3.__e;
        break;
      }
    return k(n3);
  }
}
function b(n3) {
  (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n3; g.__r = t.length; )
    n3 = t.sort(function(n4, l3) {
      return n4.__v.__b - l3.__v.__b;
    }), t = [], n3.some(function(n4) {
      var l3, u3, i3, t3, o3, r3;
      n4.__d && (o3 = (t3 = (l3 = n4).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
    });
}
function w(n3, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
  var h3, y, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C3 = x.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x[h3] = void 0;
      else
        for (y = 0; y < C3; y++) {
          if ((d3 = x[y]) && k3.key == d3.key && k3.type === d3.type) {
            x[y] = void 0;
            break;
          }
          d3 = null;
        }
      j(n3, k3, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b3 = k3.__e, (y = k3.ref) && d3.ref != y && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s3 = m(k3, s3, n3) : s3 = A(n3, k3, d3, x, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n3 && (s3 = _(d3));
    }
  for (u3.__e = g3, h3 = C3; h3--; )
    null != x[h3] && N(x[h3], x[h3]);
  if (w3)
    for (h3 = 0; h3 < w3.length; h3++)
      M(w3[h3], w3[++h3], w3[++h3]);
}
function m(n3, l3, u3) {
  for (var i3, t3 = n3.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n3, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function A(n3, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o3 || null == t3.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n3)
        n3.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n3.insertBefore(t3, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n3, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n3, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n3, o3, l3[o3], u3[o3], i3);
}
function $(n3, l3, u3) {
  "-" === l3[0] ? n3.setProperty(l3, u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n3, l3, u3, i3, t3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n3.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n3.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n3.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, u3 ? i3 || n3.addEventListener(l3, o3 ? T : I, o3) : n3.removeEventListener(l3, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n3)
        try {
          n3[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n4) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n3.removeAttribute(l3) : n3.setAttribute(l3, u3));
    }
}
function I(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3);
}
function T(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function j(n3, u3, i3, t3, o3, r3, f3, e3, c3) {
  var a3, h3, v3, y, _3, k3, b3, g3, m3, x, A3, C3, $3, H3, I3, T3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof T3) {
        if (g3 = u3.props, m3 = (a3 = T3.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in T3 && T3.prototype.render ? u3.__c = h3 = new T3(g3, x) : (u3.__c = h3 = new d(g3, x), h3.constructor = T3, h3.render = O), m3 && m3.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x, h3.__n = t3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, T3.getDerivedStateFromProps(g3, h3.__s))), y = h3.props, _3 = h3.state, v3)
          null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == T3.getDerivedStateFromProps && g3 !== y && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x) || u3.__v === i3.__v) {
            for (h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
              n4 && (n4.__ = u3);
            }), A3 = 0; A3 < h3._sb.length; A3++)
              h3.__h.push(h3._sb[A3]);
            h3._sb = [], h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y, _3, k3);
          });
        }
        if (h3.context = x, h3.props = g3, h3.__v = u3, h3.__P = n3, C3 = l.__r, $3 = 0, "prototype" in T3 && T3.prototype.render) {
          for (h3.state = h3.__s, h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++)
            h3.__h.push(h3._sb[H3]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++$3 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y, _3)), I3 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n3, Array.isArray(I3) ? I3 : [I3], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n4) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n4, u3, i3);
  }
}
function z(n3, u3) {
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, e3, c3) {
  var s3, h3, v3, y = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
  if ("svg" === d3 && (o3 = true), null != r3) {
    for (; k3 < r3.length; k3++)
      if ((s3 = r3[k3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[k3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (y = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y = {}, k3 = 0; k3 < l3.attributes.length; k3++)
          y[l3.attributes[k3].name] = l3.attributes[k3].value;
      (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y, o3, c3), v3)
      u3.__k = [];
    else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k3 = r3.length; k3--; )
        null != r3[k3] && a(r3[k3]);
    c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y.value) && H(l3, "value", k3, y.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y.checked, false));
  }
  return l3;
}
function M(n3, u3, i3) {
  try {
    "function" == typeof n3 ? n3(u3) : n3.current = u3;
  } catch (n4) {
    l.__e(n4, i3);
  }
}
function N(n3, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n3), (t3 = n3.ref) && (t3.current && t3.current !== n3.__e || M(t3, null, u3)), null != (t3 = n3.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u3);
      }
    t3.base = t3.__P = null, n3.__c = void 0;
  }
  if (t3 = n3.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n3.type);
  i3 || null == n3.__e || a(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
}
function O(n3, l3, u3) {
  return this.constructor(n3, u3);
}
function P(u3, i3, t3) {
  var o3, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
}
function S(n3, l3) {
  P(n3, l3, S);
}
n = e.slice, l = { __e: function(n3, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n3)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n3, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n3 = l4;
      }
  throw n3;
} }, u = 0, i = function(n3) {
  return null != n3 && void 0 === n3.constructor;
}, d.prototype.setState = function(n3, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n3 && (n3 = n3(s({}, u3), this.props)), n3 && s(u3, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), b(this));
}, d.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// public/js/AppClient.js
var n2;
var l2;
var u2;
var i2;
var t2;
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
function h2(l22, u22, i22) {
  var t22, o22, r22, f22 = {};
  for (r22 in u22)
    "key" == r22 ? t22 = u22[r22] : "ref" == r22 ? o22 = u22[r22] : f22[r22] = u22[r22];
  if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n2.call(arguments, 2) : i22), "function" == typeof l22 && null != l22.defaultProps)
    for (r22 in l22.defaultProps)
      void 0 === f22[r22] && (f22[r22] = l22.defaultProps[r22]);
  return v2(l22, f22, t22, o22, null);
}
function v2(n22, i22, t22, o22, r22) {
  var f22 = { type: n22, props: i22, key: t22, ref: o22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r22 ? ++u2 : r22 };
  return null == r22 && null != l2.vnode && l2.vnode(f22), f22;
}
function p2(n22) {
  return n22.children;
}
function d2(n22, l22) {
  this.props = n22, this.context = l22;
}
function _2(n22, l22) {
  if (null == l22)
    return n22.__ ? _2(n22.__, n22.__.__k.indexOf(n22) + 1) : null;
  for (var u22; l22 < n22.__k.length; l22++)
    if (null != (u22 = n22.__k[l22]) && null != u22.__e)
      return u22.__e;
  return "function" == typeof n22.type ? _2(n22) : null;
}
function k2(n22) {
  var l22, u22;
  if (null != (n22 = n22.__) && null != n22.__c) {
    for (n22.__e = n22.__c.base = null, l22 = 0; l22 < n22.__k.length; l22++)
      if (null != (u22 = n22.__k[l22]) && null != u22.__e) {
        n22.__e = n22.__c.base = u22.__e;
        break;
      }
    return k2(n22);
  }
}
function b2(n22) {
  (!n22.__d && (n22.__d = true) && t2.push(n22) && !g2.__r++ || o2 !== l2.debounceRendering) && ((o2 = l2.debounceRendering) || setTimeout)(g2);
}
function g2() {
  for (var n22; g2.__r = t2.length; )
    n22 = t2.sort(function(n3, l22) {
      return n3.__v.__b - l22.__v.__b;
    }), t2 = [], n22.some(function(n3) {
      var l22, u22, i22, t22, o22, r22;
      n3.__d && (o22 = (t22 = (l22 = n3).__v).__e, (r22 = l22.__P) && (u22 = [], (i22 = s2({}, t22)).__v = t22.__v + 1, j2(r22, t22, i22, l22.__n, void 0 !== r22.ownerSVGElement, null != t22.__h ? [o22] : null, u22, null == o22 ? _2(t22) : o22, t22.__h), z2(u22, t22), t22.__e != o22 && k2(t22)));
    });
}
function w2(n22, l22, u22, i22, t22, o22, r22, c22, s22, a22) {
  var h22, y, d22, k22, b22, g22, w22, x = i22 && i22.__k || e2, C22 = x.length;
  for (u22.__k = [], h22 = 0; h22 < l22.length; h22++)
    if (null != (k22 = u22.__k[h22] = null == (k22 = l22[h22]) || "boolean" == typeof k22 ? null : "string" == typeof k22 || "number" == typeof k22 || "bigint" == typeof k22 ? v2(null, k22, null, null, k22) : Array.isArray(k22) ? v2(p2, { children: k22 }, null, null, null) : k22.__b > 0 ? v2(k22.type, k22.props, k22.key, k22.ref ? k22.ref : null, k22.__v) : k22)) {
      if (k22.__ = u22, k22.__b = u22.__b + 1, null === (d22 = x[h22]) || d22 && k22.key == d22.key && k22.type === d22.type)
        x[h22] = void 0;
      else
        for (y = 0; y < C22; y++) {
          if ((d22 = x[y]) && k22.key == d22.key && k22.type === d22.type) {
            x[y] = void 0;
            break;
          }
          d22 = null;
        }
      j2(n22, k22, d22 = d22 || f2, t22, o22, r22, c22, s22, a22), b22 = k22.__e, (y = k22.ref) && d22.ref != y && (w22 || (w22 = []), d22.ref && w22.push(d22.ref, null, k22), w22.push(y, k22.__c || b22, k22)), null != b22 ? (null == g22 && (g22 = b22), "function" == typeof k22.type && k22.__k === d22.__k ? k22.__d = s22 = m2(k22, s22, n22) : s22 = A2(n22, k22, d22, x, b22, s22), "function" == typeof u22.type && (u22.__d = s22)) : s22 && d22.__e == s22 && s22.parentNode != n22 && (s22 = _2(d22));
    }
  for (u22.__e = g22, h22 = C22; h22--; )
    null != x[h22] && N2(x[h22], x[h22]);
  if (w22)
    for (h22 = 0; h22 < w22.length; h22++)
      M2(w22[h22], w22[++h22], w22[++h22]);
}
function m2(n22, l22, u22) {
  for (var i22, t22 = n22.__k, o22 = 0; t22 && o22 < t22.length; o22++)
    (i22 = t22[o22]) && (i22.__ = n22, l22 = "function" == typeof i22.type ? m2(i22, l22, u22) : A2(u22, i22, i22, t22, i22.__e, l22));
  return l22;
}
function A2(n22, l22, u22, i22, t22, o22) {
  var r22, f22, e22;
  if (void 0 !== l22.__d)
    r22 = l22.__d, l22.__d = void 0;
  else if (null == u22 || t22 != o22 || null == t22.parentNode)
    n:
      if (null == o22 || o22.parentNode !== n22)
        n22.appendChild(t22), r22 = null;
      else {
        for (f22 = o22, e22 = 0; (f22 = f22.nextSibling) && e22 < i22.length; e22 += 2)
          if (f22 == t22)
            break n;
        n22.insertBefore(t22, o22), r22 = o22;
      }
  return void 0 !== r22 ? r22 : t22.nextSibling;
}
function C2(n22, l22, u22, i22, t22) {
  var o22;
  for (o22 in u22)
    "children" === o22 || "key" === o22 || o22 in l22 || H2(n22, o22, null, u22[o22], i22);
  for (o22 in l22)
    t22 && "function" != typeof l22[o22] || "children" === o22 || "key" === o22 || "value" === o22 || "checked" === o22 || u22[o22] === l22[o22] || H2(n22, o22, l22[o22], u22[o22], i22);
}
function $2(n22, l22, u22) {
  "-" === l22[0] ? n22.setProperty(l22, u22) : n22[l22] = null == u22 ? "" : "number" != typeof u22 || c2.test(l22) ? u22 : u22 + "px";
}
function H2(n22, l22, u22, i22, t22) {
  var o22;
  n:
    if ("style" === l22)
      if ("string" == typeof u22)
        n22.style.cssText = u22;
      else {
        if ("string" == typeof i22 && (n22.style.cssText = i22 = ""), i22)
          for (l22 in i22)
            u22 && l22 in u22 || $2(n22.style, l22, "");
        if (u22)
          for (l22 in u22)
            i22 && u22[l22] === i22[l22] || $2(n22.style, l22, u22[l22]);
      }
    else if ("o" === l22[0] && "n" === l22[1])
      o22 = l22 !== (l22 = l22.replace(/Capture$/, "")), l22 = l22.toLowerCase() in n22 ? l22.toLowerCase().slice(2) : l22.slice(2), n22.l || (n22.l = {}), n22.l[l22 + o22] = u22, u22 ? i22 || n22.addEventListener(l22, o22 ? T2 : I2, o22) : n22.removeEventListener(l22, o22 ? T2 : I2, o22);
    else if ("dangerouslySetInnerHTML" !== l22) {
      if (t22)
        l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l22 && "list" !== l22 && "form" !== l22 && "tabIndex" !== l22 && "download" !== l22 && l22 in n22)
        try {
          n22[l22] = null == u22 ? "" : u22;
          break n;
        } catch (n3) {
        }
      "function" == typeof u22 || (null == u22 || false === u22 && -1 == l22.indexOf("-") ? n22.removeAttribute(l22) : n22.setAttribute(l22, u22));
    }
}
function I2(n22) {
  this.l[n22.type + false](l2.event ? l2.event(n22) : n22);
}
function T2(n22) {
  this.l[n22.type + true](l2.event ? l2.event(n22) : n22);
}
function j2(n22, u22, i22, t22, o22, r22, f22, e22, c22) {
  var a22, h22, v22, y, _22, k22, b22, g22, m22, x, A22, C22, $22, H22, I22, T22 = u22.type;
  if (void 0 !== u22.constructor)
    return null;
  null != i22.__h && (c22 = i22.__h, e22 = u22.__e = i22.__e, u22.__h = null, r22 = [e22]), (a22 = l2.__b) && a22(u22);
  try {
    n:
      if ("function" == typeof T22) {
        if (g22 = u22.props, m22 = (a22 = T22.contextType) && t22[a22.__c], x = a22 ? m22 ? m22.props.value : a22.__ : t22, i22.__c ? b22 = (h22 = u22.__c = i22.__c).__ = h22.__E : ("prototype" in T22 && T22.prototype.render ? u22.__c = h22 = new T22(g22, x) : (u22.__c = h22 = new d2(g22, x), h22.constructor = T22, h22.render = O2), m22 && m22.sub(h22), h22.props = g22, h22.state || (h22.state = {}), h22.context = x, h22.__n = t22, v22 = h22.__d = true, h22.__h = [], h22._sb = []), null == h22.__s && (h22.__s = h22.state), null != T22.getDerivedStateFromProps && (h22.__s == h22.state && (h22.__s = s2({}, h22.__s)), s2(h22.__s, T22.getDerivedStateFromProps(g22, h22.__s))), y = h22.props, _22 = h22.state, v22)
          null == T22.getDerivedStateFromProps && null != h22.componentWillMount && h22.componentWillMount(), null != h22.componentDidMount && h22.__h.push(h22.componentDidMount);
        else {
          if (null == T22.getDerivedStateFromProps && g22 !== y && null != h22.componentWillReceiveProps && h22.componentWillReceiveProps(g22, x), !h22.__e && null != h22.shouldComponentUpdate && false === h22.shouldComponentUpdate(g22, h22.__s, x) || u22.__v === i22.__v) {
            for (h22.props = g22, h22.state = h22.__s, u22.__v !== i22.__v && (h22.__d = false), h22.__v = u22, u22.__e = i22.__e, u22.__k = i22.__k, u22.__k.forEach(function(n3) {
              n3 && (n3.__ = u22);
            }), A22 = 0; A22 < h22._sb.length; A22++)
              h22.__h.push(h22._sb[A22]);
            h22._sb = [], h22.__h.length && f22.push(h22);
            break n;
          }
          null != h22.componentWillUpdate && h22.componentWillUpdate(g22, h22.__s, x), null != h22.componentDidUpdate && h22.__h.push(function() {
            h22.componentDidUpdate(y, _22, k22);
          });
        }
        if (h22.context = x, h22.props = g22, h22.__v = u22, h22.__P = n22, C22 = l2.__r, $22 = 0, "prototype" in T22 && T22.prototype.render) {
          for (h22.state = h22.__s, h22.__d = false, C22 && C22(u22), a22 = h22.render(h22.props, h22.state, h22.context), H22 = 0; H22 < h22._sb.length; H22++)
            h22.__h.push(h22._sb[H22]);
          h22._sb = [];
        } else
          do {
            h22.__d = false, C22 && C22(u22), a22 = h22.render(h22.props, h22.state, h22.context), h22.state = h22.__s;
          } while (h22.__d && ++$22 < 25);
        h22.state = h22.__s, null != h22.getChildContext && (t22 = s2(s2({}, t22), h22.getChildContext())), v22 || null == h22.getSnapshotBeforeUpdate || (k22 = h22.getSnapshotBeforeUpdate(y, _22)), I22 = null != a22 && a22.type === p2 && null == a22.key ? a22.props.children : a22, w2(n22, Array.isArray(I22) ? I22 : [I22], u22, i22, t22, o22, r22, f22, e22, c22), h22.base = u22.__e, u22.__h = null, h22.__h.length && f22.push(h22), b22 && (h22.__E = h22.__ = null), h22.__e = false;
      } else
        null == r22 && u22.__v === i22.__v ? (u22.__k = i22.__k, u22.__e = i22.__e) : u22.__e = L2(i22.__e, u22, i22, t22, o22, r22, f22, c22);
    (a22 = l2.diffed) && a22(u22);
  } catch (n3) {
    u22.__v = null, (c22 || null != r22) && (u22.__e = e22, u22.__h = !!c22, r22[r22.indexOf(e22)] = null), l2.__e(n3, u22, i22);
  }
}
function z2(n22, u22) {
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
function L2(l22, u22, i22, t22, o22, r22, e22, c22) {
  var s22, h22, v22, y = i22.props, p22 = u22.props, d22 = u22.type, k22 = 0;
  if ("svg" === d22 && (o22 = true), null != r22) {
    for (; k22 < r22.length; k22++)
      if ((s22 = r22[k22]) && "setAttribute" in s22 == !!d22 && (d22 ? s22.localName === d22 : 3 === s22.nodeType)) {
        l22 = s22, r22[k22] = null;
        break;
      }
  }
  if (null == l22) {
    if (null === d22)
      return document.createTextNode(p22);
    l22 = o22 ? document.createElementNS("http://www.w3.org/2000/svg", d22) : document.createElement(d22, p22.is && p22), r22 = null, c22 = false;
  }
  if (null === d22)
    y === p22 || c22 && l22.data === p22 || (l22.data = p22);
  else {
    if (r22 = r22 && n2.call(l22.childNodes), h22 = (y = i22.props || f2).dangerouslySetInnerHTML, v22 = p22.dangerouslySetInnerHTML, !c22) {
      if (null != r22)
        for (y = {}, k22 = 0; k22 < l22.attributes.length; k22++)
          y[l22.attributes[k22].name] = l22.attributes[k22].value;
      (v22 || h22) && (v22 && (h22 && v22.__html == h22.__html || v22.__html === l22.innerHTML) || (l22.innerHTML = v22 && v22.__html || ""));
    }
    if (C2(l22, p22, y, o22, c22), v22)
      u22.__k = [];
    else if (k22 = u22.props.children, w2(l22, Array.isArray(k22) ? k22 : [k22], u22, i22, t22, o22 && "foreignObject" !== d22, r22, e22, r22 ? r22[0] : i22.__k && _2(i22, 0), c22), null != r22)
      for (k22 = r22.length; k22--; )
        null != r22[k22] && a2(r22[k22]);
    c22 || ("value" in p22 && void 0 !== (k22 = p22.value) && (k22 !== l22.value || "progress" === d22 && !k22 || "option" === d22 && k22 !== y.value) && H2(l22, "value", k22, y.value, false), "checked" in p22 && void 0 !== (k22 = p22.checked) && k22 !== l22.checked && H2(l22, "checked", k22, y.checked, false));
  }
  return l22;
}
function M2(n22, u22, i22) {
  try {
    "function" == typeof n22 ? n22(u22) : n22.current = u22;
  } catch (n3) {
    l2.__e(n3, i22);
  }
}
function N2(n22, u22, i22) {
  var t22, o22;
  if (l2.unmount && l2.unmount(n22), (t22 = n22.ref) && (t22.current && t22.current !== n22.__e || M2(t22, null, u22)), null != (t22 = n22.__c)) {
    if (t22.componentWillUnmount)
      try {
        t22.componentWillUnmount();
      } catch (n3) {
        l2.__e(n3, u22);
      }
    t22.base = t22.__P = null, n22.__c = void 0;
  }
  if (t22 = n22.__k)
    for (o22 = 0; o22 < t22.length; o22++)
      t22[o22] && N2(t22[o22], u22, i22 || "function" != typeof n22.type);
  i22 || null == n22.__e || a2(n22.__e), n22.__ = n22.__e = n22.__d = void 0;
}
function O2(n22, l22, u22) {
  return this.constructor(n22, u22);
}
n2 = e2.slice, l2 = { __e: function(n22, l22, u22, i22) {
  for (var t22, o22, r22; l22 = l22.__; )
    if ((t22 = l22.__c) && !t22.__)
      try {
        if ((o22 = t22.constructor) && null != o22.getDerivedStateFromError && (t22.setState(o22.getDerivedStateFromError(n22)), r22 = t22.__d), null != t22.componentDidCatch && (t22.componentDidCatch(n22, i22 || {}), r22 = t22.__d), r22)
          return t22.__E = t22;
      } catch (l3) {
        n22 = l3;
      }
  throw n22;
} }, u2 = 0, i2 = function(n22) {
  return null != n22 && void 0 === n22.constructor;
}, d2.prototype.setState = function(n22, l22) {
  var u22;
  u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s2({}, this.state), "function" == typeof n22 && (n22 = n22(s2({}, u22), this.props)), n22 && s2(u22, n22), null != n22 && this.__v && (l22 && this._sb.push(l22), b2(this));
}, d2.prototype.forceUpdate = function(n22) {
  this.__v && (this.__e = true, n22 && this.__h.push(n22), b2(this));
}, d2.prototype.render = p2, t2 = [], g2.__r = 0, r2 = 0;
var App = () => {
  return /* @__PURE__ */ h2(p2, null, "Hi there, I'm Sous.", /* @__PURE__ */ h2("button", {
    onClick: () => console.log("test11!!!!")
  }, "Server stuff here!"));
};

// src/hydrate.jsx
S(/* @__PURE__ */ h(App, null), document.getElementById("root"));
//# sourceMappingURL=hydrate.js.map
