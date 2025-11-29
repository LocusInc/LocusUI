import { PropDef } from "./prop-def";

const directions = ["row", "column"] as const;

const DirectionPropDef = {
  direction: {
    type: "enum",
    className: "lcs-flex",
    default: "column",
    values: directions,
  } satisfies PropDef<(typeof directions)[number]>,
};

export { DirectionPropDef, directions };
