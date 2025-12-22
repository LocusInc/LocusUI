import { GetPropDefTypes, PropDef } from "../../../props";
import { CheckboxVariants } from "../root/checkbox-root.props";

const CheckboxIndicatorPropDefs = {
  /**
   * Sets the variant style of the checkbox ("solid" or "outlined").
   *
   * @default "solid"
   */
  variant: {
    type: "enum",
    values: CheckboxVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof CheckboxVariants)[number]>,

  /**
   * Enables high contrast mode for better visibility.
   *
   * @default false
   */
  highContrast: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the indeterminate state of the checkbox.
   */
  indeterminate: {
    type: "boolean",
  } satisfies PropDef<boolean>,
} as const;

type CheckboxIndicatorInternalProps = GetPropDefTypes<
  typeof CheckboxIndicatorPropDefs
>;

export { CheckboxIndicatorInternalProps, CheckboxIndicatorPropDefs };
