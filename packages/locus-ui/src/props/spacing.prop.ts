import { GetPropDefTypes, PropDef } from "./prop-def";

const spacingValues = ["xs", "sm", "md", "lg", "xl", "inherit"] as const;

const SpacingPropDef = {
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
    responsive: true,
  } satisfies PropDef<(typeof spacingValues)[number]>,
};

type SpacingProp = GetPropDefTypes<typeof SpacingPropDef>;

export { SpacingProp, SpacingPropDef, spacingValues };
