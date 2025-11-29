"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Box: () => Box,
  Button: () => Button,
  Container: () => Container,
  Portal: () => Portal,
  Text: () => Text,
  Theme: () => Theme,
  ThemeControl: () => ThemeControl,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

// src/components/box/box.tsx
var import_clsx2 = __toESM(require("clsx"));
var React = __toESM(require("react"));

// src/props/margin.prop.ts
var marginValues = [
  "auto",
  "inherit",
  "-8",
  "-6",
  "-5",
  "-4",
  "-3",
  "-2",
  "-1",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8"
];
var MarginPropDefs = {
  /**
   * Sets margin on all sides of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example m="4" // 16px margin on all sides
   * @example m="-26px" // -26px negative margin custom value
   * @example m={{ initial: "2", md: "4", lg: "8" }} // responsive margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin
   */
  m: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "m",
    className: "lcs-m",
    responsive: true
  },
  /**
   * Sets margin on the top of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example mt="4" // 16px margin on all sides
   * @example mt="-26px" // -26px negative margin custom value
   * @example mt={{ initial: "2", md: "4", lg: "8" }} // responsive margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  mt: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "mt",
    className: "lcs-mt",
    responsive: true
  },
  /**
   * Sets margin on the bottom of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example mb="4" // 16px margin on all sides
   * @example mb="-26px" // -26px negative margin custom value
   * @example mb={{ initial: "2", md: "4", lg: "8" }} // responsive margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  mb: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "mb",
    className: "lcs-mb",
    responsive: true
  },
  /**
   * Sets margin on the left of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example ml="4" // 16px margin on all sides
   * @example ml="-26px" // -26px negative margin custom value
   * @example ml={{ initial: "2", md: "4", lg: "8" }} // responsive margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   */
  ml: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "ml",
    className: "lcs-ml",
    responsive: true
  },
  /**
   * Sets margin on the right of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example mr="4" // 16px margin on all sides
   * @example mr="-26px" // -26px negative margin custom value
   * @example mr={{ initial: "2", md: "4", lg: "8" }} // responsive margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  mr: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "mr",
    className: "lcs-mr",
    responsive: true
  },
  /**
   * Sets margin on the left and right (horizontal) sides of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example mx="4" // 16px horizontal margin
   * @example mx="-26px" // -26px negative horizontal margin custom value
   * @example mx={{ initial: "2", md: "4", lg: "8" }} // responsive horizontal margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  mx: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "mx",
    className: "lcs-mx",
    responsive: true
  },
  /**
   * Sets margin on the top and bottom (vertical) sides of the element.
   * Supports scale, auto, inherit, custom, and responsive values.
   *
   * @example my="4" // 16px vertical margin
   * @example my="-26px" // -26px negative vertical margin custom value
   * @example my={{ initial: "2", md: "4", lg: "8" }} // responsive vertical margins
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  my: {
    type: "enum | string",
    values: marginValues,
    dataAttr: "my",
    className: "lcs-my",
    responsive: true
  }
};

// src/props/padding.prop.ts
var paddingValues = [
  "inherit",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8"
];
var PaddingPropDefs = {
  /**
   * Sets padding on all sides of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example p="4" // 16px padding on all sides
   * @example p="26px" // 26px padding custom value
   * @example p={{ initial: "2", md: "4", lg: "8" }} // responsive padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  p: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "p",
    className: "lcs-p",
    responsive: true
  },
  /**
   * Sets padding on the top of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example pt="4" // 16px top padding
   * @example pt="26px" // 26px top padding custom value
   * @example pt={{ initial: "2", md: "4", lg: "8" }} // responsive top padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  pt: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "pt",
    className: "lcs-pt",
    responsive: true
  },
  /**
   * Sets padding on the bottom of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example pb="4" // 16px bottom padding
   * @example pb="26px" // 26px bottom padding custom value
   * @example pb={{ initial: "2", md: "4", lg: "8" }} // responsive bottom padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  pb: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "pb",
    className: "lcs-pb",
    responsive: true
  },
  /**
   * Sets padding on the left of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example pl="4" // 16px left padding
   * @example pl="26px" // 26px left padding custom value
   * @example pl={{ initial: "2", md: "4", lg: "8" }} // responsive left padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   */
  pl: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "pl",
    className: "lcs-pl",
    responsive: true
  },
  /**
   * Sets padding on the right of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example pr="4" // 16px right padding
   * @example pr="26px" // 26px right padding custom value
   * @example pr={{ initial: "2", md: "4", lg: "8" }} // responsive right padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  pr: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "pr",
    className: "lcs-pr",
    responsive: true
  },
  /**
   * Sets padding on the left and right (horizontal) sides of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example px="4" // 16px horizontal padding
   * @example px="26px" // 26px horizontal padding custom value
   * @example px={{ initial: "2", md: "4", lg: "8" }} // responsive horizontal padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  px: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "px",
    className: "lcs-px",
    responsive: true
  },
  /**
   * Sets padding on the top and bottom (vertical) sides of the element.
   * Supports scale, inherit, custom, and responsive values.
   *
   * @example py="4" // 16px vertical padding
   * @example py="26px" // 26px vertical padding custom value
   * @example py={{ initial: "2", md: "4", lg: "8" }} // responsive vertical padding
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  py: {
    type: "enum | string",
    values: paddingValues,
    dataAttr: "py",
    className: "lcs-py",
    responsive: true
  }
};

// src/props/radius.prop.ts
var radii = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
  "inherit"
];
var RadiusPropDefs = {
  /**
   * Sets the border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example r="md" // medium border-radius
   * @example r="26px" // 26px border-radius custom value
   * @example r={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  radius: {
    type: "enum | string",
    values: radii,
    default: "theme",
    dataAttr: "radius",
    className: "lcs-radius",
    responsive: true
  }
};

// src/props/roundness.prop.ts
var roundness = ["1", "2", "3", "4", "5", "6", "inherit"];
var RoundnessPropDef = {
  /**
   * Sets the roundness multiplier for the element's radius.
   * Supports scaled and inherit values.
   *
   * @example roundness="4" // 8px base roundness
   * @example roundness="inherit" // inherits roundness from parent
   */
  roundness: {
    type: "enum",
    values: roundness,
    default: "theme",
    dataAttr: "roundness"
  }
};

// src/props/spacing.prop.ts
var spacingValues = ["xs", "sm", "md", "lg", "xl", "inherit"];
var SpacingPropDef = {
  /**
   * Sets the spacing scale for the component.
   * This multiplier affects various layout properties such as margin, padding, and gap values.
   *
   * @example spacing="md" // medium spacing scale (1)
   * @example spacing={{ initial: "sm", lg: "xl" }} // responsive spacing
   */
  spacing: {
    type: "enum",
    values: spacingValues,
    dataAttr: "spacing",
    default: "theme",
    responsive: true
  }
};

// src/utils/get-component-props.ts
var import_clsx = __toESM(require("clsx"));
function getComponentProps(props, ...propDefs) {
  let style = props.style ?? {};
  const classNames = props.className ? [props.className] : [];
  const dataAttrs = {};
  const allProps = Object.assign({}, ...propDefs);
  const propKeys = Object.keys(allProps);
  console.log({ allProps, propDefs, propKeys });
  const restProps = { ...props };
  delete restProps.className;
  delete restProps.style;
  for (const key of propKeys) {
    const prop = allProps[key];
    const value = props?.[key];
    delete restProps[key];
    const applyValue = (propValue, breakpoint) => {
      const usedBreakpoint = breakpoint ? `-${breakpoint}` : "";
      if (prop.type === "enum" || prop.type === "enum | string") {
        if (propValue !== null && propValue !== void 0) {
          if (!prop.values.includes(propValue)) {
            if (prop.className) {
              classNames.push(
                breakpoint ? `${prop.className}-${breakpoint}` : prop.className
              );
              style = {
                ...style,
                [`--custom-${key}${usedBreakpoint}`]: propValue
              };
            }
            dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = propValue;
          } else if (prop.dataAttr) {
            if (propValue === "inherit" && prop.className) {
              classNames.push(prop.className);
            }
            dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = propValue;
          }
        } else if (prop.dataAttr) {
          dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = prop.default;
        }
      }
    };
    if ("responsive" in prop && prop.responsive && value && typeof value === "object" && !Array.isArray(value)) {
      for (const [bp, bpValue] of Object.entries(value)) {
        applyValue(bpValue, bp);
      }
      if ("dataAttr" in prop && prop.dataAttr) {
        dataAttrs[`data-${prop.dataAttr}`] = "";
      }
    } else applyValue(value);
  }
  return {
    ...restProps,
    style,
    dataAttrs,
    className: (0, import_clsx.default)(classNames)
  };
}

// src/components/box/box.props.tsx
var BoxPropsDefs = {};

// src/components/box/box.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Box = React.forwardRef((props, ref) => {
  const { className, dataAttrs, children, ...rest } = getComponentProps(
    props,
    BoxPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    SpacingPropDef,
    RadiusPropDefs,
    RoundnessPropDef
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      ...dataAttrs,
      className: (0, import_clsx2.default)("lcs-box", className),
      ...rest,
      children: props.children
    }
  );
});
Box.displayName = "Box";

// src/components/button/button.tsx
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = ({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      className: (0, import_clsx3.default)(
        "px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700",
        className
      ),
      ...props
    }
  );
};

// src/components/container/container.tsx
var import_clsx4 = __toESM(require("clsx"));
var React2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Container = React2.forwardRef((props, ref) => {
  const { className, children, direction, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      ref,
      "data-direction": direction,
      className: (0, import_clsx4.default)(className, "lcs-container"),
      ...rest,
      children
    }
  );
});
Container.displayName = "Container";

// src/components/portal/portal.tsx
var import_clsx5 = __toESM(require("clsx"));
var React5 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));

// src/utils/use-controllable-state.ts
var React3 = __toESM(require("react"));
function useControllableState({
  value,
  defaultValue,
  onChange
}) {
  const [state, setState] = React3.useState(defaultValue);
  const isControlled = value !== void 0;
  const current = isControlled ? value : state;
  const set = React3.useCallback(
    (v) => {
      if (!isControlled) setState(v);
      onChange?.(v);
    },
    [isControlled, onChange]
  );
  return [current, set];
}

// src/components/portal/portal-context.tsx
var React4 = __toESM(require("react"));
var PortalContext = React4.createContext(
  void 0
);

// src/components/portal/portal.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Portal = React5.forwardRef((props, ref) => {
  const context = React5.useContext(PortalContext);
  const isRoot = context === void 0;
  if (isRoot) return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PortalRoot, { ...props, ref });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PortalSub, { ...props, ref });
});
Portal.displayName = "Portal";
var PortalRoot = React5.forwardRef(
  (props, ref) => {
    const {
      position,
      defaultOpen,
      open: portalOpen,
      variant: portalVariant,
      // onOpenChange,
      children,
      className,
      ...rest
    } = props;
    const [open, setOpen] = useControllableState({
      value: portalOpen,
      defaultValue: defaultOpen ?? false,
      onChange: void 0
      // onChange: onOpenChange,
    });
    const [variant, setVariant] = React5.useState(
      portalVariant ?? "default"
    );
    const value = React5.useMemo(
      () => ({
        open,
        variant,
        position,
        defaultOpen,
        onOpenChange: setOpen,
        onVariantChange: setVariant
      }),
      [open, variant]
    );
    React5.useEffect(() => {
      if (!open) return;
      function onKeyDown(e) {
        if (e.key === "Escape") setOpen(false);
      }
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [open, setOpen]);
    const container = open && globalThis?.document?.body;
    if (!container) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PortalContext.Provider, { value, children: import_react_dom.default.createPortal(
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          ref,
          "data-variant": variant,
          "data-position": position,
          className: (0, import_clsx5.default)(className, "lcs-portal"),
          onClick: (e) => setOpen(false),
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: "lcs-portal-content",
              onClick: (e) => e.stopPropagation(),
              children
            }
          )
        }
      ),
      container
    ) });
  }
);
PortalRoot.displayName = "PortalRoot";
var PortalSub = React5.forwardRef((props, ref) => {
  const context = React5.useContext(PortalContext);
  const {
    open,
    variant,
    position,
    onOpenChange,
    onVariantChange,
    children,
    className,
    ...rest
  } = props;
  const contextProps = {
    open: open ?? context.open,
    variant: variant ?? context.variant,
    position: position ?? context.position,
    onOpenChange: context.onOpenChange,
    onVariantChange: context.onVariantChange
  };
  React5.useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") {
        onOpenChange?.(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);
  const container = open && globalThis?.document?.body;
  if (!container) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PortalContext.Provider, { value: contextProps, children: import_react_dom.default.createPortal(
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        ref,
        "data-variant": variant,
        className: (0, import_clsx5.default)(className, "lcs-portal"),
        onClick: () => onOpenChange?.(false),
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: "lcs-portal-content",
            onClick: (e) => e.stopPropagation(),
            children
          }
        )
      }
    ),
    container
  ) });
});
PortalSub.displayName = "PortalSub";

// src/components/text/text.tsx
var import_clsx6 = __toESM(require("clsx"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Text = ({ children, className, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: (0, import_clsx6.default)("lcs-text", className), ...rest, children });
};

// src/components/theme/theme.tsx
var React7 = __toESM(require("react"));

// src/components/theme/theme-context.tsx
var React6 = __toESM(require("react"));
var ThemeContext = React6.createContext(
  void 0
);
function useTheme() {
  const context = React6.useContext(ThemeContext);
  if (!context) {
    throw new Error("`useTheme` must be used within a `Theme`");
  }
  return context;
}

// src/components/theme/theme.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Theme = React7.forwardRef((props, ref) => {
  const context = React7.useContext(ThemeContext);
  const isRoot = context === void 0;
  if (isRoot) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeRoot, { ...props, ref });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeSub, { ...props, ref });
});
Theme.displayName = "Theme";
var ThemeRoot = React7.forwardRef((props, ref) => {
  const {
    appearance: themeAppearance,
    radius: themeRadius,
    roundness: themeRoundness,
    spacing: themeSpacing,
    children,
    ...rest
  } = props;
  const [appearance, setAppearance] = React7.useState(
    themeAppearance ?? "light"
  );
  const [radius, setRadius] = React7.useState(themeRadius ?? "md");
  const [roundness2, setRoundness] = React7.useState(
    themeRoundness ?? "3"
  );
  const [spacing, setSpacing] = React7.useState(themeSpacing ?? "md");
  const value = React7.useMemo(
    () => ({
      appearance,
      radius,
      roundness: roundness2,
      spacing,
      onAppearanceChange: setAppearance,
      onRadiusChange: setRadius,
      onRoundnessChange: setRoundness,
      onSpacingChange: setSpacing
    }),
    [appearance, radius, roundness2, spacing]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      ref,
      "data-appearance": appearance,
      "data-theme-radius": radius,
      "data-theme-roundness": roundness2,
      "data-theme-spacing": spacing,
      ...rest,
      children
    }
  ) });
});
ThemeRoot.displayName = "ThemeRoot";
var ThemeSub = React7.forwardRef((props, ref) => {
  const context = React7.useContext(ThemeContext);
  const {
    appearance,
    radius,
    roundness: roundness2,
    spacing,
    onAppearanceChange,
    onRadiusChange,
    onRoundnessChange,
    onSpacingChange,
    children,
    ...rest
  } = props;
  const contextProps = {
    appearance: appearance ?? context.appearance,
    radius: radius ?? context.radius,
    roundness: roundness2 ?? context.roundness,
    spacing: spacing ?? context.spacing,
    onAppearanceChange: context.onAppearanceChange,
    onRadiusChange: context.onRadiusChange,
    onRoundnessChange: context.onRoundnessChange,
    onSpacingChange: context.onSpacingChange
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeContext.Provider, { value: contextProps, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      ref,
      "data-appearance": appearance,
      "data-theme-radius": radius,
      "data-theme-roundness": roundness2,
      ...rest,
      children
    }
  ) });
});
ThemeSub.displayName = "ThemeSub";

// src/components/theme/theme-control.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ThemeControl() {
  const {
    appearance,
    onAppearanceChange,
    radius,
    onRadiusChange,
    roundness: roundness2,
    onRoundnessChange,
    spacing,
    onSpacingChange
  } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Appearance:" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        value: appearance ?? "",
        onChange: (e) => onAppearanceChange?.(e.target.value),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "light", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Light" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "dark", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Dark" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Radius:" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        value: radius ?? "",
        onChange: (e) => onRadiusChange?.(e.target.value),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "xs", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "XS" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "SM" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "md", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "MD" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "LG" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "xl", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "XL" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "full", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "FULL" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Roundness:" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        value: roundness2 ?? "",
        onChange: (e) => onRoundnessChange?.(e.target.value),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "1", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "1" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "2" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "3", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "3" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "4" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "5", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "5" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "6" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "Spacing:" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        value: spacing ?? "",
        onChange: (e) => onSpacingChange?.(e.target.value),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "xs", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "XS" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "SM" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "md", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "MD" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "LG" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "xl", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { children: "XL" }) })
        ]
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Container,
  Portal,
  Text,
  Theme,
  ThemeControl,
  useTheme
});
//# sourceMappingURL=index.js.map