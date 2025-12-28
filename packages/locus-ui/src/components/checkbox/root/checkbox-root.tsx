"use client";

import clsx from "clsx";
import React, {
  FC,
  HTMLAttributes,
  isValidElement,
  useId,
  useMemo,
  useState,
} from "react";
import { MarginPropDefs, MarginProps } from "../../../props";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import { CheckboxContext } from "../checkbox-context";
import {
  CheckboxIndicator,
  CheckboxIndicatorProps,
} from "../indicator/checkbox-indicator";
import { CheckboxLabel, CheckboxLabelProps } from "../label/checkbox-label";
import { LabelPosition } from "../label/checkbox-label.props";
import {
  CheckboxRootInternalProps,
  CheckboxRootPropsDefs,
} from "./checkbox-root.props";

interface AllCheckboxRootProps extends CheckboxRootInternalProps, MarginProps {}

const ALLOWED_CHILDREN = [
  CheckboxLabel.displayName!,
  CheckboxIndicator.displayName!,
];

/**
 * A versatile Checkbox, managing state, context, and styling.
 */
type CheckboxRootProps = AllCheckboxRootProps &
  WithStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    CheckboxLabelProps | CheckboxIndicatorProps
  >;

const CheckboxRoot: FC<CheckboxRootProps> = (props) => {
  const {
    name,
    variant,
    dataAttrs,
    onValueChange,
    value: valueProp,
    disabled = false,
    required = false,
    highContrast = false,
    indeterminate = false,
    defaultChecked = false,
  } = getComponentProps(props, CheckboxRootPropsDefs, MarginPropDefs);

  const [value, setValue] = useControllableState<boolean>({
    value: valueProp,
    defaultValue: defaultChecked,
    onChange: onValueChange,
  });

  const labelId = useId();
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("right");

  const [hovered, setHovered] = useState(false);

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: CheckboxRoot.displayName,
  });

  const { indicator, otherChildren } = useMemo(() => {
    const indicatorIndex = validChildren.findIndex(
      (child) =>
        isValidElement(child) &&
        (child.type as React.FC).displayName === CheckboxIndicator.displayName
    );

    if (indicatorIndex > -1) {
      return {
        indicator: validChildren[indicatorIndex],
        otherChildren: validChildren.filter((_, i) => i !== indicatorIndex),
      };
    }

    return {
      indicator: <CheckboxIndicator />,
      otherChildren: validChildren,
    };
  }, [validChildren]);

  const contextValue = useMemo(
    () => ({
      name,
      value,
      setValue,
      onValueChange,
      labelId,
      labelPosition,
      setLabelPosition,
      variant,
      hovered,
      setHovered,
      disabled,
      required,
      indeterminate,
      highContrast,
    }),
    [
      name,
      value,
      onValueChange,
      setValue,
      labelId,
      labelPosition,
      hovered,
      disabled,
      required,
      indeterminate,
      highContrast,
    ]
  );

  const handleClick = () => {
    if (disabled) return;
    setValue(!value);
  };

  return (
    <CheckboxContext.Provider value={contextValue}>
      <div
        data-checked={value}
        data-variant={variant}
        data-disabled={disabled}
        className={clsx("checkbox-root", props.className)}
        onClick={() => handleClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...dataAttrs}
      >
        {indicator}
        {otherChildren}
        {name && <input type="hidden" name={name} value={String(value)} />}
      </div>
    </CheckboxContext.Provider>
  );
};
CheckboxRoot.displayName = "Checkbox";

export { AllCheckboxRootProps, CheckboxRoot, CheckboxRootProps };
