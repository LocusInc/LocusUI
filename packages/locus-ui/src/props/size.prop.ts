import { GetPropDefTypes, PropDef } from "./prop-def";

const Sizes = ["xs", "sm", "md", "lg", "xl"] as const;

const SizePropDef = {
  /**
   * Sets the size of the component.
   *
   * @example size="md" // medium sized component
   */
  size: {
    type: "enum | string",
    values: Sizes,
    dataAttr: "size",
    className: "size",
  } satisfies PropDef<(typeof Sizes)[number]>,
};

type SizeProp = GetPropDefTypes<typeof SizePropDef>;

export { SizeProp, SizePropDef, Sizes };
