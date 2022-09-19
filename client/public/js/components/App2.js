var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/preact/dist/preact.js
var require_preact = __commonJS({
  "node_modules/preact/dist/preact.js"(exports) {
    var n;
    var l;
    var u;
    var t;
    var i;
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
    function p(l2, u2, t2) {
      var i2, o2, r2, f2 = {};
      for (r2 in u2)
        "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
      if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
        for (r2 in l2.defaultProps)
          void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
      return v(l2, f2, i2, o2, null);
    }
    function v(n2, t2, i2, o2, r2) {
      var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
      return null == r2 && null != l.vnode && l.vnode(f2), f2;
    }
    function h2(n2) {
      return n2.children;
    }
    function y(n2, l2) {
      this.props = n2, this.context = l2;
    }
    function d(n2, l2) {
      if (null == l2)
        return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
      for (var u2; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e)
          return u2.__e;
      return "function" == typeof n2.type ? d(n2) : null;
    }
    function _(n2) {
      var l2, u2;
      if (null != (n2 = n2.__) && null != n2.__c) {
        for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
          if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
            n2.__e = n2.__c.base = u2.__e;
            break;
          }
        return _(n2);
      }
    }
    function k(n2) {
      (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(x);
    }
    function x() {
      for (var n2; x.__r = i.length; )
        n2 = i.sort(function(n3, l2) {
          return n3.__v.__b - l2.__v.__b;
        }), i = [], n2.some(function(n3) {
          var l2, u2, t2, i2, o2, r2;
          n3.__d && (o2 = (i2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (t2 = s({}, i2)).__v = i2.__v + 1, I(r2, i2, t2, l2.__n, void 0 !== r2.ownerSVGElement, null != i2.__h ? [o2] : null, u2, null == o2 ? d(i2) : o2, i2.__h), T(u2, i2), i2.__e != o2 && _(i2)));
        });
    }
    function b(n2, l2, u2, t2, i2, o2, r2, c2, s2, a2) {
      var p2, y2, _2, k2, x2, b2, m2, A2 = t2 && t2.__k || e, C2 = A2.length;
      for (u2.__k = [], p2 = 0; p2 < l2.length; p2++)
        if (null != (k2 = u2.__k[p2] = null == (k2 = l2[p2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(h2, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
          if (k2.__ = u2, k2.__b = u2.__b + 1, null === (_2 = A2[p2]) || _2 && k2.key == _2.key && k2.type === _2.type)
            A2[p2] = void 0;
          else
            for (y2 = 0; y2 < C2; y2++) {
              if ((_2 = A2[y2]) && k2.key == _2.key && k2.type === _2.type) {
                A2[y2] = void 0;
                break;
              }
              _2 = null;
            }
          I(n2, k2, _2 = _2 || f, i2, o2, r2, c2, s2, a2), x2 = k2.__e, (y2 = k2.ref) && _2.ref != y2 && (m2 || (m2 = []), _2.ref && m2.push(_2.ref, null, k2), m2.push(y2, k2.__c || x2, k2)), null != x2 ? (null == b2 && (b2 = x2), "function" == typeof k2.type && k2.__k === _2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = w(n2, k2, _2, A2, x2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
        }
      for (u2.__e = b2, p2 = C2; p2--; )
        null != A2[p2] && ("function" == typeof u2.type && null != A2[p2].__e && A2[p2].__e == u2.__d && (u2.__d = d(t2, p2 + 1)), L(A2[p2], A2[p2]));
      if (m2)
        for (p2 = 0; p2 < m2.length; p2++)
          z(m2[p2], m2[++p2], m2[++p2]);
    }
    function g(n2, l2, u2) {
      for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
        (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? g(t2, l2, u2) : w(u2, t2, t2, i2, t2.__e, l2));
      return l2;
    }
    function w(n2, l2, u2, t2, i2, o2) {
      var r2, f2, e2;
      if (void 0 !== l2.__d)
        r2 = l2.__d, l2.__d = void 0;
      else if (null == u2 || i2 != o2 || null == i2.parentNode)
        n:
          if (null == o2 || o2.parentNode !== n2)
            n2.appendChild(i2), r2 = null;
          else {
            for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < t2.length; e2 += 2)
              if (f2 == i2)
                break n;
            n2.insertBefore(i2, o2), r2 = o2;
          }
      return void 0 !== r2 ? r2 : i2.nextSibling;
    }
    function m(n2, l2, u2, t2, i2) {
      var o2;
      for (o2 in u2)
        "children" === o2 || "key" === o2 || o2 in l2 || C(n2, o2, null, u2[o2], t2);
      for (o2 in l2)
        i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || C(n2, o2, l2[o2], u2[o2], t2);
    }
    function A(n2, l2, u2) {
      "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
    }
    function C(n2, l2, u2, t2, i2) {
      var o2;
      n:
        if ("style" === l2)
          if ("string" == typeof u2)
            n2.style.cssText = u2;
          else {
            if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
              for (l2 in t2)
                u2 && l2 in u2 || A(n2.style, l2, "");
            if (u2)
              for (l2 in u2)
                t2 && u2[l2] === t2[l2] || A(n2.style, l2, u2[l2]);
          }
        else if ("o" === l2[0] && "n" === l2[1])
          o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 || n2.addEventListener(l2, o2 ? H : $, o2) : n2.removeEventListener(l2, o2 ? H : $, o2);
        else if ("dangerouslySetInnerHTML" !== l2) {
          if (i2)
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
    function $(n2) {
      this.l[n2.type + false](l.event ? l.event(n2) : n2);
    }
    function H(n2) {
      this.l[n2.type + true](l.event ? l.event(n2) : n2);
    }
    function I(n2, u2, t2, i2, o2, r2, f2, e2, c2) {
      var a2, p2, v2, d2, _2, k2, x2, g2, w2, m2, A2, C2, $2, H2 = u2.type;
      if (void 0 !== u2.constructor)
        return null;
      null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
      try {
        n:
          if ("function" == typeof H2) {
            if (g2 = u2.props, w2 = (a2 = H2.contextType) && i2[a2.__c], m2 = a2 ? w2 ? w2.props.value : a2.__ : i2, t2.__c ? x2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = p2 = new H2(g2, m2) : (u2.__c = p2 = new y(g2, m2), p2.constructor = H2, p2.render = M), w2 && w2.sub(p2), p2.props = g2, p2.state || (p2.state = {}), p2.context = m2, p2.__n = i2, v2 = p2.__d = true, p2.__h = []), null == p2.__s && (p2.__s = p2.state), null != H2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = s({}, p2.__s)), s(p2.__s, H2.getDerivedStateFromProps(g2, p2.__s))), d2 = p2.props, _2 = p2.state, v2)
              null == H2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
            else {
              if (null == H2.getDerivedStateFromProps && g2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(g2, m2), !p2.__e && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(g2, p2.__s, m2) || u2.__v === t2.__v) {
                p2.props = g2, p2.state = p2.__s, u2.__v !== t2.__v && (p2.__d = false), p2.__v = u2, u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
                  n3 && (n3.__ = u2);
                }), p2.__h.length && f2.push(p2);
                break n;
              }
              null != p2.componentWillUpdate && p2.componentWillUpdate(g2, p2.__s, m2), null != p2.componentDidUpdate && p2.__h.push(function() {
                p2.componentDidUpdate(d2, _2, k2);
              });
            }
            if (p2.context = m2, p2.props = g2, p2.__v = u2, p2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
              p2.state = p2.__s, p2.__d = false, A2 && A2(u2), a2 = p2.render(p2.props, p2.state, p2.context);
            else
              do {
                p2.__d = false, A2 && A2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
              } while (p2.__d && ++C2 < 25);
            p2.state = p2.__s, null != p2.getChildContext && (i2 = s(s({}, i2), p2.getChildContext())), v2 || null == p2.getSnapshotBeforeUpdate || (k2 = p2.getSnapshotBeforeUpdate(d2, _2)), $2 = null != a2 && a2.type === h2 && null == a2.key ? a2.props.children : a2, b(n2, Array.isArray($2) ? $2 : [$2], u2, t2, i2, o2, r2, f2, e2, c2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), x2 && (p2.__E = p2.__ = null), p2.__e = false;
          } else
            null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = j(t2.__e, u2, t2, i2, o2, r2, f2, c2);
        (a2 = l.diffed) && a2(u2);
      } catch (n3) {
        u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, t2);
      }
    }
    function T(n2, u2) {
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
    function j(l2, u2, t2, i2, o2, r2, e2, c2) {
      var s2, p2, v2, h3 = t2.props, y2 = u2.props, _2 = u2.type, k2 = 0;
      if ("svg" === _2 && (o2 = true), null != r2) {
        for (; k2 < r2.length; k2++)
          if ((s2 = r2[k2]) && "setAttribute" in s2 == !!_2 && (_2 ? s2.localName === _2 : 3 === s2.nodeType)) {
            l2 = s2, r2[k2] = null;
            break;
          }
      }
      if (null == l2) {
        if (null === _2)
          return document.createTextNode(y2);
        l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, y2.is && y2), r2 = null, c2 = false;
      }
      if (null === _2)
        h3 === y2 || c2 && l2.data === y2 || (l2.data = y2);
      else {
        if (r2 = r2 && n.call(l2.childNodes), p2 = (h3 = t2.props || f).dangerouslySetInnerHTML, v2 = y2.dangerouslySetInnerHTML, !c2) {
          if (null != r2)
            for (h3 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
              h3[l2.attributes[k2].name] = l2.attributes[k2].value;
          (v2 || p2) && (v2 && (p2 && v2.__html == p2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
        }
        if (m(l2, y2, h3, o2, c2), v2)
          u2.__k = [];
        else if (k2 = u2.props.children, b(l2, Array.isArray(k2) ? k2 : [k2], u2, t2, i2, o2 && "foreignObject" !== _2, r2, e2, r2 ? r2[0] : t2.__k && d(t2, 0), c2), null != r2)
          for (k2 = r2.length; k2--; )
            null != r2[k2] && a(r2[k2]);
        c2 || ("value" in y2 && void 0 !== (k2 = y2.value) && (k2 !== l2.value || "progress" === _2 && !k2 || "option" === _2 && k2 !== h3.value) && C(l2, "value", k2, h3.value, false), "checked" in y2 && void 0 !== (k2 = y2.checked) && k2 !== l2.checked && C(l2, "checked", k2, h3.checked, false));
      }
      return l2;
    }
    function z(n2, u2, t2) {
      try {
        "function" == typeof n2 ? n2(u2) : n2.current = u2;
      } catch (n3) {
        l.__e(n3, t2);
      }
    }
    function L(n2, u2, t2) {
      var i2, o2;
      if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || z(i2, null, u2)), null != (i2 = n2.__c)) {
        if (i2.componentWillUnmount)
          try {
            i2.componentWillUnmount();
          } catch (n3) {
            l.__e(n3, u2);
          }
        i2.base = i2.__P = null, n2.__c = void 0;
      }
      if (i2 = n2.__k)
        for (o2 = 0; o2 < i2.length; o2++)
          i2[o2] && L(i2[o2], u2, "function" != typeof n2.type);
      t2 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
    }
    function M(n2, l2, u2) {
      return this.constructor(n2, u2);
    }
    function N(u2, t2, i2) {
      var o2, r2, e2;
      l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], I(t2, u2 = (!o2 && i2 || t2).__k = p(h2, null, [u2]), r2 || f, f, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2), T(e2, u2);
    }
    n = e.slice, l = { __e: function(n2, l2, u2, t2) {
      for (var i2, o2, r2; l2 = l2.__; )
        if ((i2 = l2.__c) && !i2.__)
          try {
            if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
              return i2.__E = i2;
          } catch (l3) {
            n2 = l3;
          }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && void 0 === n2.constructor;
    }, y.prototype.setState = function(n2, l2) {
      var u2;
      u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), k(this));
    }, y.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
    }, y.prototype.render = h2, i = [], x.__r = 0, r = 0, exports.Component = y, exports.Fragment = h2, exports.cloneElement = function(l2, u2, t2) {
      var i2, o2, r2, f2 = s({}, l2.props);
      for (r2 in u2)
        "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
      return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), v(l2.type, f2, i2 || l2.key, o2 || l2.ref, null);
    }, exports.createContext = function(n2, l2) {
      var u2 = { __c: l2 = "__cC" + r++, __: n2, Consumer: function(n3, l3) {
        return n3.children(l3);
      }, Provider: function(n3) {
        var u3, t2;
        return this.getChildContext || (u3 = [], (t2 = {})[l2] = this, this.getChildContext = function() {
          return t2;
        }, this.shouldComponentUpdate = function(n4) {
          this.props.value !== n4.value && u3.some(k);
        }, this.sub = function(n4) {
          u3.push(n4);
          var l3 = n4.componentWillUnmount;
          n4.componentWillUnmount = function() {
            u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
          };
        }), n3.children;
      } };
      return u2.Provider.__ = u2.Consumer.contextType = u2;
    }, exports.createElement = p, exports.createRef = function() {
      return { current: null };
    }, exports.h = p, exports.hydrate = function n2(l2, u2) {
      N(l2, u2, n2);
    }, exports.isValidElement = t, exports.options = l, exports.render = N, exports.toChildArray = function n2(l2, u2) {
      return u2 = u2 || [], null == l2 || "boolean" == typeof l2 || (Array.isArray(l2) ? l2.some(function(l3) {
        n2(l3, u2);
      }) : u2.push(l2)), u2;
    };
  }
});

// scripts/components/App2.jsx
var { h, Component } = require_preact();
var App2 = class extends Component {
  constructor() {
    super();
  }
  render() {
    return /* @__PURE__ */ h("button", {
      onClick: () => console.log("hello")
    }, "HELLO");
  }
};
export {
  App2 as default
};
