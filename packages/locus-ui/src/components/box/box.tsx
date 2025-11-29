import clsx from "clsx";
import * as React from "react";
import {
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  RadiusPropDefs,
  RadiusProps,
  RoundnessProp,
  RoundnessPropDef,
  SpacingProp,
  SpacingPropDef,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { GetProps } from "../../utils/get-props";
import { BoxPropsDefs } from "./box.props";

interface ExternalProps
  extends MarginProps,
    PaddingProps,
    SpacingProp,
    RadiusProps,
    RoundnessProp {}

export type BoxProps = GetProps<typeof BoxPropsDefs> &
  ExternalProps &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * A versatile container used to provide layout and styling capabilities.
 */
const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { className, dataAttrs, children, ...rest } = getComponentProps(
    props,
    BoxPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    SpacingPropDef,
    RadiusPropDefs,
    RoundnessPropDef
  );

  return (
    <div
      ref={ref}
      {...dataAttrs}
      className={clsx("lcs-box", className)}
      {...rest}
    >
      {props.children}
    </div>
  );
});
Box.displayName = "Box";

export { Box };
