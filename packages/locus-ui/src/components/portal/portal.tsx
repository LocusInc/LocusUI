import clsx from "clsx";
import * as React from "react";
import ReactDOM from "react-dom";
import { GetProps } from "../../utils/get-props";
import { useControllableState } from "../../utils/use-controllable-state";
import {
  PortalContext,
  PortalContextProps,
  PortalVariant,
} from "./portal-context";
import { PortalPropsDefs } from "./portal.props";

export type PortalProps = GetProps<typeof PortalPropsDefs> &
  React.HTMLAttributes<HTMLDivElement>;

const Portal = React.forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const context = React.useContext(PortalContext);
  const isRoot = context === undefined;

  if (isRoot) return <PortalRoot {...props} ref={ref} />;

  return <PortalSub {...props} ref={ref} />;
});
Portal.displayName = "Portal";

const PortalRoot = React.forwardRef<HTMLDivElement, PortalProps>(
  (props, ref) => {
    const {
      position,
      defaultOpen,
      open: portalOpen,
      variant: portalVariant,

      // onOpenChange,

      children,
      className,
      ...rest
    } = props;

    const [open, setOpen] = useControllableState<boolean>({
      value: portalOpen,
      defaultValue: defaultOpen ?? false,
      onChange: undefined,
      // onChange: onOpenChange,
    });

    const [variant, setVariant] = React.useState<PortalVariant>(
      portalVariant ?? "default"
    );

    const value = React.useMemo(
      () => ({
        open,
        variant,
        position,
        defaultOpen,

        onOpenChange: setOpen,
        onVariantChange: setVariant,
      }),
      [open, variant]
    );

    React.useEffect(() => {
      if (!open) return;

      function onKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") setOpen(false);
      }

      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [open, setOpen]);

    const container = open && globalThis?.document?.body;
    if (!container) return null;

    return (
      <PortalContext.Provider value={value}>
        {ReactDOM.createPortal(
          <div
            ref={ref}
            data-variant={variant}
            data-position={position}
            className={clsx(className, "lcs-portal")}
            onClick={(e) => setOpen(false)}
            {...rest}
          >
            <div
              className="lcs-portal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          container
        )}
      </PortalContext.Provider>
    );
  }
);
PortalRoot.displayName = "PortalRoot";

const PortalSub = React.forwardRef<
  HTMLDivElement,
  Partial<PortalContextProps> & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const context = React.useContext(PortalContext)!;

  const {
    open,
    variant,
    position,

    onOpenChange,
    onVariantChange,

    children,
    className,
    ...rest
  } = props;

  const contextProps: PortalContextProps = {
    open: open ?? context.open,
    variant: variant ?? context.variant,
    position: position ?? context.position,

    onOpenChange: context.onOpenChange,
    onVariantChange: context.onVariantChange,
  };

  React.useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange?.(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  const container = open && globalThis?.document?.body;
  if (!container) return null;

  return (
    <PortalContext.Provider value={contextProps}>
      {ReactDOM.createPortal(
        <div
          ref={ref}
          data-variant={variant}
          className={clsx(className, "lcs-portal")}
          onClick={() => onOpenChange?.(false)}
          {...rest}
        >
          <div
            className="lcs-portal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        container
      )}
    </PortalContext.Provider>
  );
});
PortalSub.displayName = "PortalSub";

export { Portal };
