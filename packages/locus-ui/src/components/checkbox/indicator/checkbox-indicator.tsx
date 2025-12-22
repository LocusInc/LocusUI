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
  const {
    value,
    hovered,
    variant: contextVariant,
    disabled,
    indeterminate: contextIndeterminate,
    highContrast: contextHighContrast,
  } = useCheckboxContext();
  const { variant, indeterminate, highContrast, className } = getComponentProps(
    props,
    CheckboxIndicatorPropDefs
  );

  const indicatorVariant = variant || contextVariant;
  const indicatorHighContrast = highContrast || contextHighContrast;
  const indicatorIndeterminate = indeterminate || contextIndeterminate;

  return (
    <span
      ref={ref}
      data-checked={value}
      data-hovered={hovered}
      data-disabled={disabled}
      data-variant={indicatorVariant}
      data-high-contrast={indicatorHighContrast}
      data-indeterminate={indicatorIndeterminate}
      className={clsx("lcs-checkbox-indicator", className)}
    >
      {indicatorIndeterminate && !value && (
        <Minus
          color={
            indicatorHighContrast && indicatorVariant === "solid"
              ? "black"
              : "white"
          }
        />
      )}

      {value && (
        <CheckMark
          color={
            indicatorHighContrast && indicatorVariant === "solid"
              ? "black"
              : "white"
          }
        />
      )}
    </span>
  );
});
CheckboxIndicator.displayName = "Checkbox.Indicator";

export { AllCheckboxIndicatorProps, CheckboxIndicator, CheckboxIndicatorProps };
