import { GetPropDefTypes, PropDef } from "./prop-def";

const marginValues = [
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
  "8",
] as const;

const MarginPropDefs = {
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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,

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
    responsive: true,
  } satisfies PropDef<(typeof marginValues)[number]>,
};

type MarginProps = GetPropDefTypes<typeof MarginPropDefs>;

export { MarginPropDefs, MarginProps };
