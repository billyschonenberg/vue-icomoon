import { openBlock, createElementBlock, mergeProps, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = {
  name: "Icomoon",
  props: {
    iconSet: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
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
      default: false
    },
    removeInitialStyle: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: {}
    }
  },
  setup({
    iconSet,
    icon,
    name,
    size,
    title,
    disableFill,
    removeInitialStyle,
    ...svgProps
  }) {
    const initialStyle = {
      display: "inline-block",
      stroke: "currentColor",
      fill: "currentColor"
    };
    const iconName = icon || name;
    const currentIcon = iconSet.icons.find((item) => item.properties.name === iconName);
    if (!currentIcon)
      return {};
    const { width = "1024" } = currentIcon.icon;
    const viewBox = `0 0 ${width} 1024`;
    const style = {
      ...removeInitialStyle ? {} : initialStyle
    };
    if (size) {
      style.width = size;
      style.height = size;
    }
    const paths = currentIcon.icon.paths.map((path, index) => {
      const attrs = currentIcon.icon.attrs?.[index];
      const pathProps = {
        d: path,
        ...!disableFill && attrs ? attrs : {}
      };
      return pathProps;
    });
    return {
      currentIcon,
      viewBox,
      style,
      paths,
      svgProps
    };
  }
};
const _hoisted_1 = ["viewBox"];
const _hoisted_2 = ["d"];
const _hoisted_3 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.currentIcon ? (openBlock(), createElementBlock("svg", mergeProps({
    key: 0,
    viewBox: $setup.viewBox,
    style: $setup.style
  }, $setup.svgProps), [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.paths, (path) => {
      return openBlock(), createElementBlock("path", {
        d: path.d
      }, null, 8, _hoisted_2);
    }), 256)),
    $props.title ? (openBlock(), createElementBlock("title", _hoisted_3, toDisplayString($props.title), 1)) : createCommentVNode("", true)
  ], 16, _hoisted_1)) : createCommentVNode("", true);
}
var Icomoon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const iconList = (iconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }
  return null;
};
export { Icomoon, iconList };
