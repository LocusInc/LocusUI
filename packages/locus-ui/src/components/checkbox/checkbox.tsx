import { CheckboxLabel } from "./label/checkbox-label";
import { CheckboxRoot } from "./root/checkbox-root";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Label: CheckboxLabel,
});
