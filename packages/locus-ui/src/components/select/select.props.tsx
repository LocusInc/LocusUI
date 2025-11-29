import { PropDef, RadiusPropDef, RoundnessPropDef } from "../../props";

const variants = ["default", "outlined", "clear"] as const;

const SelectRootPropsDefs = {
  ...RadiusPropDef,
  ...RoundnessPropDef,
  variant: {
    type: "enum",
    values: variants,
    default: "default",
  } satisfies PropDef<(typeof variants)[number]>,
};

export { SelectRootPropsDefs };
