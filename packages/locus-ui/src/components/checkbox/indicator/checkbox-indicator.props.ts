import { GetPropDefTypes, PropDef } from "../../../props";
import { CheckboxVariants } from "../root/checkbox-root.props";

const CheckboxIndicatorPropDefs = {
  /**
   * Sets the variant style of the checkbox ("solid" or "outlined").
   */
  variant: {
    type: "enum",
    values: CheckboxVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof CheckboxVariants)[number]>,
} as const;

type CheckboxIndicatorInternalProps = GetPropDefTypes<
  typeof CheckboxIndicatorPropDefs
>;

export { CheckboxIndicatorInternalProps, CheckboxIndicatorPropDefs };
