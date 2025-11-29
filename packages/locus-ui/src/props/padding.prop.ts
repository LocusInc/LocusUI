import { GetPropDefTypes, PropDef } from "./prop-def";

const paddingValues = [
  "inherit",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
] as const;

const PaddingPropDefs = {
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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof paddingValues)[number]>,
};

type PaddingProps = GetPropDefTypes<typeof PaddingPropDefs>;

export { PaddingPropDefs, PaddingProps };
