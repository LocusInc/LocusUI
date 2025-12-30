import { GetPropDefTypes, PropDef } from "./prop-def";

const radii = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
  "inherit",
] as const;

const RadiusPropDefs = {
  /**
   * Sets the border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius="md" // medium border-radius
   * @example radius="26px" // 26px border-radius custom value
   * @example radius={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @default "theme" // uses the theme's default border-radius value or none if not set
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
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the top border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius-t="md" // medium border-radius
   * @example radius-t="26px" // 26px border-radius custom value
   * @example radius-t={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  "radius-t": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-t",
    className: "lcs-radius-t",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the right border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius-r="md" // medium border-radius
   * @example radius-r="26px" // 26px border-radius custom value
   * @example radius-r={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  "radius-r": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-r",
    className: "lcs-radius-r",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the bottom border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius-b="md" // medium border-radius
   * @example radius-b="26px" // 26px border-radius custom value
   * @example radius-b={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  "radius-b": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-b",
    className: "lcs-radius-b",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the left border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius-l="md" // medium border-radius
   * @example radius-l="26px" // 26px border-radius custom value
   * @example radius-l={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-top-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-bottom-radius
   */
  "radius-l": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-l",
    className: "lcs-radius-l",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the top-left border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example radius-tl="md" // medium border-radius
   * @example radius-tl="26px" // 26px border-radius custom value
   * @example radius-tl={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   */
  "radius-tl": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-tl",
    className: "lcs-radius-tl",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the top-right border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example "radius-tr"="md" // medium border-radius
   * @example "radius-tr"="26px" // 26px border-radius custom value
   * @example "radius-tr"={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  "radius-tr": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-tr",
    className: "lcs-radius-tr",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the bottom-right border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example "radius-br"="md" // medium border-radius
   * @example "radius-br"="26px" // 26px border-radius custom value
   * @example "radius-br"={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  "radius-br": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-br",
    className: "lcs-radius-br",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,

  /**
   * Sets the bottom-left border-radius of the element.
   * Supports scaled, inherit, custom, and responsive values.
   *
   * @example "radius-bl"="md" // medium border-radius
   * @example "radius-bl"="26px" // 26px border-radius custom value
   * @example "radius-bl"={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   */
  "radius-bl": {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-bl",
    className: "lcs-radius-bl",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,
};

type RadiusProps = GetPropDefTypes<typeof RadiusPropDefs>;

export { radii, RadiusPropDefs, RadiusProps };
