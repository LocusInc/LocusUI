import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
} from "../../../props/prop-def";

const CheckboxVariants = ["solid", "outlined", "muted"] as const;

const CheckboxRootPropsDefs = {
  /**
   * Sets the variant style of the checkbox ("solid" or "outlined").
   */
  variant: {
    type: "enum",
    values: CheckboxVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof CheckboxVariants)[number]>,

  /**
   * Sets the checked state of the checkbox.
   *
   * When using an uncontrolled checkbox, use `defaultChecked` instead.
   * @default undefined
   */
  checked: {
    type: "boolean",
    dataAttr: "checked",
  } satisfies PropDef<boolean>,

  /**
   * Sets the indeterminate state of the checkbox.
   * @default undefined
   */
  indeterminate: {
    type: "boolean",
    dataAttr: "indeterminate",
  } satisfies PropDef<boolean>,

  /**
   * Enables high contrast mode for better visibility.
   * @default undefined
   */
  highContrast: {
    type: "boolean",
    dataAttr: "high-contrast",
  } satisfies PropDef<boolean>,

  /**
   * The value of the checkbox (checked state).
   */
  value: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the default checked state of the checkbox.
   * @default undefined
   */
  defaultChecked: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Disables the checkbox component.
   * @default undefined
   */
  disabled: {
    type: "boolean",
    dataAttr: "disabled",
  } satisfies PropDef<boolean>,

  /**
   * Makes the checkbox read-only.
   * @default undefined
   */
  readonly: {
    type: "boolean",
    dataAttr: "readonly",
  } satisfies PropDef<boolean>,

  /**
   * Marks the checkbox as required.
   * @default undefined
   */
  required: {
    type: "boolean",
    dataAttr: "required",
  } satisfies PropDef<boolean>,

  /**
   * Sets the name attribute of the checkbox input for form control.
   * @default undefined
   */
  name: {
    type: "string",
  } satisfies PropDef<string>,

  /**
   * Callback fired when the checked state changes.
   *
   * @param value - The new checked state.
   */
  onCheckedChange: {
    type: "function",
  } satisfies FunctionPropDef<(value: boolean) => void> as FunctionPropDef<
    (value: boolean) => void
  >,
} as const;

type CheckboxRootInternalProps = GetPropDefTypes<typeof CheckboxRootPropsDefs>;

export { CheckboxRootInternalProps, CheckboxRootPropsDefs, CheckboxVariants };
