import clsx from "clsx";
import React from "react";
import { CheckMark, Minus } from "../../../icons";
import { getComponentProps } from "../../../utils/get-component-props";
import { useCheckboxContext } from "../checkbox-context";
import {
  CheckboxIndicatorInternalProps,
  CheckboxIndicatorPropDefs,
} from "./checkbox-indicator.props";

interface AllCheckboxIndicatorProps extends CheckboxIndicatorInternalProps {}

type CheckboxIndicatorProps = AllCheckboxIndicatorProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

/**
 * Indicator for a checkbox component.
 * Supports checked, indeterminate, disabled, and high contrast states.
 */
const CheckboxIndicator: React.FC<CheckboxIndicatorProps> = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>((props, ref) => {
  const { value, hovered, variant, disabled, indeterminate, highContrast } =
    useCheckboxContext();
  const { className } = getComponentProps(props, CheckboxIndicatorPropDefs);

  return (
    <span
      ref={ref}
      data-checked={value}
      data-hovered={hovered}
      data-variant={variant}
      data-disabled={disabled}
      data-high-contrast={highContrast}
      data-indeterminate={indeterminate}
      className={clsx("lcs-checkbox-indicator", className)}
    >
      {indeterminate && !value && (
        <Minus
          color={highContrast && variant === "solid" ? "black" : "white"}
        />
      )}

      {value && (
        <CheckMark
          color={highContrast && variant === "solid" ? "black" : "white"}
        />
      )}
    </span>
  );
});
CheckboxIndicator.displayName = "Checkbox.Indicator";

export { AllCheckboxIndicatorProps, CheckboxIndicator, CheckboxIndicatorProps };
