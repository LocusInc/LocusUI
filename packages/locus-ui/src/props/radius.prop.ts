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
   * @example radiusT="md" // medium border-radius
   * @example radiusT="26px" // 26px border-radius custom value
   * @example radiusT={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  radiusT: {
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
   * @example radiusR="md" // medium border-radius
   * @example radiusR="26px" // 26px border-radius custom value
   * @example radiusR={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  radiusR: {
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
   * @example radiusB="md" // medium border-radius
   * @example radiusB="26px" // 26px border-radius custom value
   * @example radiusB={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  radiusB: {
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
   * @example radiusL="md" // medium border-radius
   * @example radiusL="26px" // 26px border-radius custom value
   * @example radiusL={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-top-radius
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-bottom-radius
   */
  radiusL: {
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
   * @example radiusTL="md" // medium border-radius
   * @example radiusTL="26px" // 26px border-radius custom value
   * @example radiusTL={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   */
  radiusTL: {
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
   * @example radiusTR="md" // medium border-radius
   * @example radiusTR="26px" // 26px border-radius custom value
   * @example radiusTR={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  radiusTR: {
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
   * @example radiusBR="md" // medium border-radius
   * @example radiusBR="26px" // 26px border-radius custom value
   * @example radiusBR={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  radiusBR: {
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
   * @example radiusBL="md" // medium border-radius
   * @example radiusBL="26px" // 26px border-radius custom value
   * @example radiusBL={{ initial: "none", lg: "full" }} // responsive border-radius
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   */
  radiusBL: {
    type: "enum | string",
    values: radii,
    dataAttr: "radius-bl",
    className: "lcs-radius-bl",
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,
};

type RadiusProps = GetPropDefTypes<typeof RadiusPropDefs>;

export { radii, RadiusPropDefs, RadiusProps };
