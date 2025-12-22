import { GetPropDefTypes } from "../../../props";

const CheckboxIndicatorPropDefs = {} as const;

type CheckboxIndicatorInternalProps = GetPropDefTypes<
  typeof CheckboxIndicatorPropDefs
>;

export { CheckboxIndicatorInternalProps, CheckboxIndicatorPropDefs };
