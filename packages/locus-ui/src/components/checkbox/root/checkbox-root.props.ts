import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
} from "../../../props/prop-def";

const variants = ["solid", "outlined"] as const;

const CheckboxRootPropsDefs = {
  /**
   * Sets the variant style of the checkbox ("solid" or "outlined").
   *
   * @default "solid"
   */
  variant: {
    type: "enum",
    values: variants,
    default: "solid",
    dataAttr: "variant",
  } satisfies PropDef<(typeof variants)[number]>,

  /**
   * Enables high contrast mode for better visibility.
   *
   * @default false
   */
  highContrast: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the controlled checked state of the checkbox.
   */
  value: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the indeterminate state of the checkbox.
   */
  indeterminate: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the default checked state of the checkbox.
   */
  defaultChecked: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Disables the checkbox component.
   */
  disabled: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Marks the checkbox as required.
   */
  required: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the name attribute of the checkbox input for form control.
   */
  name: {
    type: "string",
  } satisfies PropDef<string>,

  /**
   * Callback fired when the checked state changes.
   *
   * @param value - The new checked state.
   */
  onValueChange: {
    type: "function",
  } satisfies FunctionPropDef<(value: boolean) => void> as FunctionPropDef<
    (value: boolean) => void
  >,
} as const;

type CheckboxRootInternalProps = GetPropDefTypes<typeof CheckboxRootPropsDefs>;

export { CheckboxRootInternalProps, CheckboxRootPropsDefs };
