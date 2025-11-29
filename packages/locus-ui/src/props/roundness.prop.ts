import { GetPropDefTypes, PropDef } from "./prop-def";

const roundness = ["1", "2", "3", "4", "5", "6", "inherit"] as const;

const RoundnessPropDef = {
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
    dataAttr: "roundness",
  } satisfies PropDef<(typeof roundness)[number]>,
};

type RoundnessProp = GetPropDefTypes<typeof RoundnessPropDef>;

export { roundness, RoundnessProp, RoundnessPropDef };
