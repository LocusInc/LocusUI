import clsx from "clsx";
import * as React from "react";
import { GetProps } from "../../utils/get-props";
import { ContainerPropsDefs } from "./container.props";

export type BoxProps = GetProps<typeof ContainerPropsDefs> &
  React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { className, children, direction, ...rest } = props;

  return (
    <div
      ref={ref}
      data-direction={direction}
      className={clsx(className, "lcs-container")}
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export { Container };
