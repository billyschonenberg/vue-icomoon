function y(n, e, i, s, l, f, c, d) {
  var t = typeof n == "function" ? n.options : n;
  e && (t.render = e, t.staticRenderFns = i, t._compiled = !0), s && (t.functional = !0), f && (t._scopeId = "data-v-" + f);
  var o;
  if (c ? (o = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), l && l.call(this, r), r && r._registeredComponents && r._registeredComponents.add(c);
  }, t._ssrRegister = o) : l && (o = d ? function() {
    l.call(this, (t.functional ? this.parent : this).$root.$options.shadowRoot);
  } : l), o)
    if (t.functional) {
      t._injectStyles = o;
      var a = t.render;
      t.render = function(u, _) {
        return o.call(_), a(u, _);
      };
    } else {
      var p = t.beforeCreate;
      t.beforeCreate = p ? [].concat(p, o) : [o];
    }
  return {
    exports: n,
    options: t
  };
}
const C = {
  name: "Icomoon",
  props: {
    iconSet: {
      type: Object,
      required: !0
    },
    icon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 16
    },
    disableFill: {
      type: Boolean,
      default: !1
    },
    removeInitialStyle: {
      type: Boolean,
      default: !1
    },
    style: {
      type: Object,
      default: {}
    }
  },
  setup({
    iconSet: n,
    icon: e,
    name: i,
    size: s,
    title: l,
    disableFill: f,
    removeInitialStyle: c,
    ...d
  }) {
    const t = {
      display: "inline-block",
      stroke: "currentColor",
      fill: "currentColor"
    }, o = e || i, a = n.icons.find((h) => h.properties.name === o);
    if (!a)
      return {};
    const { width: p = "1024" } = a.icon, r = `0 0 ${p} 1024`, u = {
      ...c ? {} : t
    };
    s && (u.width = s, u.height = s);
    const _ = a.icon.paths.map((h, m) => {
      const v = a.icon.attrs?.[m];
      return {
        d: h,
        ...!f && v ? v : {}
      };
    });
    return {
      currentIcon: a,
      viewBox: r,
      style: u,
      paths: _,
      svgProps: d
    };
  }
};
var g = function() {
  var e = this, i = e._self._c;
  return e.currentIcon ? i("svg", e._b({ style: e.style, attrs: { viewBox: e.viewBox } }, "svg", e.svgProps, !1), [e._l(e.paths, function(s) {
    return i("path", { attrs: { d: s.d } });
  }), e.title ? i("title", [e._v(e._s(e.title))]) : e._e()], 2) : e._e();
}, b = [], S = /* @__PURE__ */ y(C, g, b, !1, null, null, null, null);
const w = S.exports, R = (n) => n && Array.isArray(n.icons) ? n.icons.map((e) => e.properties.name) : null;
export {
  w as Icomoon,
  R as iconList
};
