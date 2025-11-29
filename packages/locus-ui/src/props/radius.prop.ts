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
    responsive: true,
  } satisfies PropDef<(typeof radii)[number]>,
};

type RadiusProps = GetPropDefTypes<typeof RadiusPropDefs>;

export { radii, RadiusPropDefs, RadiusProps };
