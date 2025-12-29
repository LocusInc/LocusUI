import { GetPropDefTypes, PropDef } from "./prop-def";

const Alignments = ["start", "center", "end"] as const;

const AlignPropDef = {
  /**
   * The alignment of the component.
   */
  align: {
    type: "enum",
    values: Alignments,
    dataAttr: "align",
  } satisfies PropDef<(typeof Alignments)[number]>,
};

type AlignProp = GetPropDefTypes<typeof AlignPropDef>;

export { Alignments, AlignProp, AlignPropDef };
