var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/preact/dist/preact.js
var require_preact = __commonJS({
  "node_modules/preact/dist/preact.js"(exports2) {
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
    function h3(n2) {
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
        if (null != (k2 = u2.__k[p2] = null == (k2 = l2[p2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(h3, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
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
            p2.state = p2.__s, null != p2.getChildContext && (i2 = s(s({}, i2), p2.getChildContext())), v2 || null == p2.getSnapshotBeforeUpdate || (k2 = p2.getSnapshotBeforeUpdate(d2, _2)), $2 = null != a2 && a2.type === h3 && null == a2.key ? a2.props.children : a2, b(n2, Array.isArray($2) ? $2 : [$2], u2, t2, i2, o2, r2, f2, e2, c2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), x2 && (p2.__E = p2.__ = null), p2.__e = false;
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
      var s2, p2, v2, h4 = t2.props, y2 = u2.props, _2 = u2.type, k2 = 0;
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
        h4 === y2 || c2 && l2.data === y2 || (l2.data = y2);
      else {
        if (r2 = r2 && n.call(l2.childNodes), p2 = (h4 = t2.props || f).dangerouslySetInnerHTML, v2 = y2.dangerouslySetInnerHTML, !c2) {
          if (null != r2)
            for (h4 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
              h4[l2.attributes[k2].name] = l2.attributes[k2].value;
          (v2 || p2) && (v2 && (p2 && v2.__html == p2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
        }
        if (m(l2, y2, h4, o2, c2), v2)
          u2.__k = [];
        else if (k2 = u2.props.children, b(l2, Array.isArray(k2) ? k2 : [k2], u2, t2, i2, o2 && "foreignObject" !== _2, r2, e2, r2 ? r2[0] : t2.__k && d(t2, 0), c2), null != r2)
          for (k2 = r2.length; k2--; )
            null != r2[k2] && a(r2[k2]);
        c2 || ("value" in y2 && void 0 !== (k2 = y2.value) && (k2 !== l2.value || "progress" === _2 && !k2 || "option" === _2 && k2 !== h4.value) && C(l2, "value", k2, h4.value, false), "checked" in y2 && void 0 !== (k2 = y2.checked) && k2 !== l2.checked && C(l2, "checked", k2, h4.checked, false));
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
      l.__ && l.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], I(t2, u2 = (!o2 && i2 || t2).__k = p(h3, null, [u2]), r2 || f, f, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2), T(e2, u2);
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
    }, y.prototype.render = h3, i = [], x.__r = 0, r = 0, exports2.Component = y, exports2.Fragment = h3, exports2.cloneElement = function(l2, u2, t2) {
      var i2, o2, r2, f2 = s({}, l2.props);
      for (r2 in u2)
        "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
      return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), v(l2.type, f2, i2 || l2.key, o2 || l2.ref, null);
    }, exports2.createContext = function(n2, l2) {
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
    }, exports2.createElement = p, exports2.createRef = function() {
      return { current: null };
    }, exports2.h = p, exports2.hydrate = function n2(l2, u2) {
      N(l2, u2, n2);
    }, exports2.isValidElement = t, exports2.options = l, exports2.render = N, exports2.toChildArray = function n2(l2, u2) {
      return u2 = u2 || [], null == l2 || "boolean" == typeof l2 || (Array.isArray(l2) ? l2.some(function(l3) {
        n2(l3, u2);
      }) : u2.push(l2)), u2;
    };
  }
});

// node_modules/preact-render-to-string/dist/commonjs.js
var require_commonjs = __commonJS({
  "node_modules/preact-render-to-string/dist/commonjs.js"(exports2, module2) {
    !function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? t(exports2, require_preact()) : "function" == typeof define && define.amd ? define(["exports", "preact"], t) : t((e || self).preactRenderToString = {}, e.preact);
    }(exports2, function(e, t) {
      var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, r = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, o = /[\s\n\\/='"\0<>]/, i = /^xlink:?./, s = /["&<]/;
      function a(e2) {
        if (false === s.test(e2 += ""))
          return e2;
        for (var t2 = 0, n2 = 0, r2 = "", o2 = ""; n2 < e2.length; n2++) {
          switch (e2.charCodeAt(n2)) {
            case 34:
              o2 = "&quot;";
              break;
            case 38:
              o2 = "&amp;";
              break;
            case 60:
              o2 = "&lt;";
              break;
            default:
              continue;
          }
          n2 !== t2 && (r2 += e2.slice(t2, n2)), r2 += o2, t2 = n2 + 1;
        }
        return n2 !== t2 && (r2 += e2.slice(t2, n2)), r2;
      }
      var l = function(e2, t2) {
        return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
      }, f = function(e2, t2, n2) {
        return String(e2).length > (t2 || 40) || !n2 && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
      }, u = {}, p = /([A-Z])/g;
      function c(e2) {
        var t2 = "";
        for (var r2 in e2) {
          var o2 = e2[r2];
          null != o2 && "" !== o2 && (t2 && (t2 += " "), t2 += "-" == r2[0] ? r2 : u[r2] || (u[r2] = r2.replace(p, "-$1").toLowerCase()), t2 = "number" == typeof o2 && false === n.test(r2) ? t2 + ": " + o2 + "px;" : t2 + ": " + o2 + ";");
        }
        return t2 || void 0;
      }
      function _(e2, t2) {
        return Array.isArray(t2) ? t2.reduce(_, e2) : null != t2 && false !== t2 && e2.push(t2), e2;
      }
      function d() {
        this.__d = true;
      }
      function v(e2, t2) {
        return { __v: e2, context: t2, props: e2.props, setState: d, forceUpdate: d, __d: true, __h: [] };
      }
      function g(e2, t2) {
        var n2 = e2.contextType, r2 = n2 && t2[n2.__c];
        return null != n2 ? r2 ? r2.props.value : n2.__ : t2;
      }
      var h3 = [];
      function y(e2, n2, s2, u2, p2, d2) {
        if (null == e2 || "boolean" == typeof e2)
          return "";
        if ("object" != typeof e2)
          return a(e2);
        var m2 = s2.pretty, b2 = m2 && "string" == typeof m2 ? m2 : "	";
        if (Array.isArray(e2)) {
          for (var x2 = "", k2 = 0; k2 < e2.length; k2++)
            m2 && k2 > 0 && (x2 += "\n"), x2 += y(e2[k2], n2, s2, u2, p2, d2);
          return x2;
        }
        var S2, w2 = e2.type, C2 = e2.props, O2 = false;
        if ("function" == typeof w2) {
          if (O2 = true, !s2.shallow || !u2 && false !== s2.renderRootComponent) {
            if (w2 === t.Fragment) {
              var j2 = [];
              return _(j2, e2.props.children), y(j2, n2, s2, false !== s2.shallowHighOrder, p2, d2);
            }
            var A, F = e2.__c = v(e2, n2);
            t.options.__b && t.options.__b(e2);
            var T = t.options.__r;
            if (w2.prototype && "function" == typeof w2.prototype.render) {
              var H = g(w2, n2);
              (F = e2.__c = new w2(C2, H)).__v = e2, F._dirty = F.__d = true, F.props = C2, null == F.state && (F.state = {}), null == F._nextState && null == F.__s && (F._nextState = F.__s = F.state), F.context = H, w2.getDerivedStateFromProps ? F.state = Object.assign({}, F.state, w2.getDerivedStateFromProps(F.props, F.state)) : F.componentWillMount && (F.componentWillMount(), F.state = F._nextState !== F.state ? F._nextState : F.__s !== F.state ? F.__s : F.state), T && T(e2), A = F.render(F.props, F.state, F.context);
            } else
              for (var M = g(w2, n2), L = 0; F.__d && L++ < 25; )
                F.__d = false, T && T(e2), A = w2.call(e2.__c, C2, M);
            return F.getChildContext && (n2 = Object.assign({}, n2, F.getChildContext())), t.options.diffed && t.options.diffed(e2), y(A, n2, s2, false !== s2.shallowHighOrder, p2, d2);
          }
          w2 = (S2 = w2).displayName || S2 !== Function && S2.name || function(e3) {
            var t2 = (Function.prototype.toString.call(e3).match(/^\s*function\s+([^( ]+)/) || "")[1];
            if (!t2) {
              for (var n3 = -1, r2 = h3.length; r2--; )
                if (h3[r2] === e3) {
                  n3 = r2;
                  break;
                }
              n3 < 0 && (n3 = h3.push(e3) - 1), t2 = "UnnamedComponent" + n3;
            }
            return t2;
          }(S2);
        }
        var E, $, D = "<" + w2;
        if (C2) {
          var N = Object.keys(C2);
          s2 && true === s2.sortAttributes && N.sort();
          for (var P = 0; P < N.length; P++) {
            var R = N[P], W = C2[R];
            if ("children" !== R) {
              if (!o.test(R) && (s2 && s2.allAttributes || "key" !== R && "ref" !== R && "__self" !== R && "__source" !== R)) {
                if ("defaultValue" === R)
                  R = "value";
                else if ("defaultChecked" === R)
                  R = "checked";
                else if ("defaultSelected" === R)
                  R = "selected";
                else if ("className" === R) {
                  if (void 0 !== C2.class)
                    continue;
                  R = "class";
                } else
                  p2 && i.test(R) && (R = R.toLowerCase().replace(/^xlink:?/, "xlink:"));
                if ("htmlFor" === R) {
                  if (C2.for)
                    continue;
                  R = "for";
                }
                "style" === R && W && "object" == typeof W && (W = c(W)), "a" === R[0] && "r" === R[1] && "boolean" == typeof W && (W = String(W));
                var q = s2.attributeHook && s2.attributeHook(R, W, n2, s2, O2);
                if (q || "" === q)
                  D += q;
                else if ("dangerouslySetInnerHTML" === R)
                  $ = W && W.__html;
                else if ("textarea" === w2 && "value" === R)
                  E = W;
                else if ((W || 0 === W || "" === W) && "function" != typeof W) {
                  if (!(true !== W && "" !== W || (W = R, s2 && s2.xml))) {
                    D = D + " " + R;
                    continue;
                  }
                  if ("value" === R) {
                    if ("select" === w2) {
                      d2 = W;
                      continue;
                    }
                    "option" === w2 && d2 == W && void 0 === C2.selected && (D += " selected");
                  }
                  D = D + " " + R + '="' + a(W) + '"';
                }
              }
            } else
              E = W;
          }
        }
        if (m2) {
          var I = D.replace(/\n\s*/, " ");
          I === D || ~I.indexOf("\n") ? m2 && ~D.indexOf("\n") && (D += "\n") : D = I;
        }
        if (D += ">", o.test(w2))
          throw new Error(w2 + " is not a valid HTML tag name in " + D);
        var U, V = r.test(w2) || s2.voidElements && s2.voidElements.test(w2), z = [];
        if ($)
          m2 && f($) && ($ = "\n" + b2 + l($, b2)), D += $;
        else if (null != E && _(U = [], E).length) {
          for (var Z = m2 && ~D.indexOf("\n"), B = false, G = 0; G < U.length; G++) {
            var J = U[G];
            if (null != J && false !== J) {
              var K = y(J, n2, s2, true, "svg" === w2 || "foreignObject" !== w2 && p2, d2);
              if (m2 && !Z && f(K) && (Z = true), K)
                if (m2) {
                  var Q = K.length > 0 && "<" != K[0];
                  B && Q ? z[z.length - 1] += K : z.push(K), B = Q;
                } else
                  z.push(K);
            }
          }
          if (m2 && Z)
            for (var X = z.length; X--; )
              z[X] = "\n" + b2 + l(z[X], b2);
        }
        if (z.length || $)
          D += z.join("");
        else if (s2 && s2.xml)
          return D.substring(0, D.length - 1) + " />";
        return !V || U || $ ? (m2 && ~D.indexOf("\n") && (D += "\n"), D = D + "</" + w2 + ">") : D = D.replace(/>$/, " />"), D;
      }
      var m = { shallow: true };
      k.render = k;
      var b = function(e2, t2) {
        return k(e2, t2, m);
      }, x = [];
      function k(e2, n2, r2) {
        n2 = n2 || {};
        var o2 = t.options.__s;
        t.options.__s = true;
        var i2, s2 = t.h(t.Fragment, null);
        return s2.__k = [e2], i2 = r2 && (r2.pretty || r2.voidElements || r2.sortAttributes || r2.shallow || r2.allAttributes || r2.xml || r2.attributeHook) ? y(e2, n2, r2) : j(e2, n2, false, void 0, s2), t.options.__c && t.options.__c(e2, x), t.options.__s = o2, x.length = 0, i2;
      }
      function S(e2, t2) {
        return "className" === e2 ? "class" : "htmlFor" === e2 ? "for" : "defaultValue" === e2 ? "value" : "defaultChecked" === e2 ? "checked" : "defaultSelected" === e2 ? "selected" : t2 && i.test(e2) ? e2.toLowerCase().replace(/^xlink:?/, "xlink:") : e2;
      }
      function w(e2, t2) {
        return "style" === e2 && null != t2 && "object" == typeof t2 ? c(t2) : "a" === e2[0] && "r" === e2[1] && "boolean" == typeof t2 ? String(t2) : t2;
      }
      var C = Array.isArray, O = Object.assign;
      function j(e2, n2, i2, s2, l2) {
        if (null == e2 || true === e2 || false === e2 || "" === e2)
          return "";
        if ("object" != typeof e2)
          return a(e2);
        if (C(e2)) {
          var f2 = "";
          l2.__k = e2;
          for (var u2 = 0; u2 < e2.length; u2++)
            f2 += j(e2[u2], n2, i2, s2, l2);
          return f2;
        }
        e2.__ = l2, t.options.__b && t.options.__b(e2);
        var p2 = e2.type, c2 = e2.props;
        if ("function" == typeof p2) {
          var _2;
          if (p2 === t.Fragment)
            _2 = c2.children;
          else {
            _2 = p2.prototype && "function" == typeof p2.prototype.render ? function(e3, n3) {
              var r2 = e3.type, o2 = g(r2, n3), i3 = new r2(e3.props, o2);
              e3.__c = i3, i3.__v = e3, i3.__d = true, i3.props = e3.props, null == i3.state && (i3.state = {}), null == i3.__s && (i3.__s = i3.state), i3.context = o2, r2.getDerivedStateFromProps ? i3.state = O({}, i3.state, r2.getDerivedStateFromProps(i3.props, i3.state)) : i3.componentWillMount && (i3.componentWillMount(), i3.state = i3.__s !== i3.state ? i3.__s : i3.state);
              var s3 = t.options.__r;
              return s3 && s3(e3), i3.render(i3.props, i3.state, i3.context);
            }(e2, n2) : function(e3, n3) {
              var r2, o2 = v(e3, n3), i3 = g(e3.type, n3);
              e3.__c = o2;
              for (var s3 = t.options.__r, a2 = 0; o2.__d && a2++ < 25; )
                o2.__d = false, s3 && s3(e3), r2 = e3.type.call(o2, e3.props, i3);
              return r2;
            }(e2, n2);
            var d2 = e2.__c;
            d2.getChildContext && (n2 = O({}, n2, d2.getChildContext()));
          }
          var h4 = j(_2, n2, i2, s2, e2);
          return t.options.diffed && t.options.diffed(e2), e2.__ = void 0, t.options.unmount && t.options.unmount(e2), h4;
        }
        var y2, m2, b2 = "<";
        if (b2 += p2, c2)
          for (var x2 in y2 = c2.children, c2) {
            var k2 = c2[x2];
            if (!("key" === x2 || "ref" === x2 || "__self" === x2 || "__source" === x2 || "children" === x2 || "className" === x2 && "class" in c2 || "htmlFor" === x2 && "for" in c2 || o.test(x2))) {
              if (k2 = w(x2 = S(x2, i2), k2), "dangerouslySetInnerHTML" === x2)
                m2 = k2 && k2.__html;
              else if ("textarea" === p2 && "value" === x2)
                y2 = k2;
              else if ((k2 || 0 === k2 || "" === k2) && "function" != typeof k2) {
                if (true === k2 || "" === k2) {
                  k2 = x2, b2 = b2 + " " + x2;
                  continue;
                }
                if ("value" === x2) {
                  if ("select" === p2) {
                    s2 = k2;
                    continue;
                  }
                  "option" !== p2 || s2 != k2 || "selected" in c2 || (b2 += " selected");
                }
                b2 = b2 + " " + x2 + '="' + a(k2) + '"';
              }
            }
          }
        var A = b2;
        if (b2 += ">", o.test(p2))
          throw new Error(p2 + " is not a valid HTML tag name in " + b2);
        var F = "", T = false;
        if (m2)
          F += m2, T = true;
        else if ("string" == typeof y2)
          F += a(y2), T = true;
        else if (C(y2)) {
          e2.__k = y2;
          for (var H = 0; H < y2.length; H++) {
            var M = y2[H];
            if (null != M && false !== M) {
              var L = j(M, n2, "svg" === p2 || "foreignObject" !== p2 && i2, s2, e2);
              L && (F += L, T = true);
            }
          }
        } else if (null != y2 && false !== y2 && true !== y2) {
          e2.__k = [y2];
          var E = j(y2, n2, "svg" === p2 || "foreignObject" !== p2 && i2, s2, e2);
          E && (F += E, T = true);
        }
        if (t.options.diffed && t.options.diffed(e2), e2.__ = void 0, t.options.unmount && t.options.unmount(e2), T)
          b2 += F;
        else if (r.test(p2))
          return A + " />";
        return b2 + "</" + p2 + ">";
      }
      k.shallowRender = b, e.default = k, e.render = k, e.renderToStaticMarkup = k, e.renderToString = k, e.shallowRender = b;
    });
  }
});

// node_modules/preact-render-to-string/dist/index.js
var require_dist = __commonJS({
  "node_modules/preact-render-to-string/dist/index.js"(exports2, module2) {
    module2.exports = require_commonjs().default;
  }
});

// scripts/components/App2.jsx
var App2_exports = {};
__export(App2_exports, {
  default: () => App2
});
var h, Component, App2;
var init_App2 = __esm({
  "scripts/components/App2.jsx"() {
    ({ h, Component } = require_preact());
    App2 = class extends Component {
      constructor() {
        super();
      }
      render() {
        return /* @__PURE__ */ h("button", {
          onClick: () => console.log("hello")
        }, "HELLOxczasasas");
      }
    };
  }
});

// scripts/App.jsx
var { h: h2, Fragment } = require_preact();
var render = require_dist();
var { App2: App22 } = (init_App2(), __toCommonJS(App2_exports));
var Client = () => {
  return /* @__PURE__ */ h2("div", null, "Hi there! I'm Sous.", /* @__PURE__ */ h2(App22, null));
};
module.exports.client = render(/* @__PURE__ */ h2(Client, null));
