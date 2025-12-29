import { GetPropDefTypes, PropDef } from "../../../props";

const labelPositions = ["top", "left", "right", "bottom"] as const;
type LabelPosition = (typeof labelPositions)[number];

const CheckboxLabelPropDefs = {
  /**
   * Sets the position of the label relative to the checkbox.
   *
   * @example position="left" // positions the label to the left of the checkbox
   * @example position="top" // positions the label above the checkbox
   */
  position: {
    type: "enum",
    values: labelPositions,
    dataAttr: "position",
  } satisfies PropDef<LabelPosition>,
} as const;

type CheckboxLabelInternalProps = GetPropDefTypes<typeof CheckboxLabelPropDefs>;

export {
  CheckboxLabelInternalProps,
  CheckboxLabelPropDefs,
  LabelPosition,
  labelPositions,
};
