"use client";

import * as React from "react";
import { usePortalContext } from "../portal-context";

export interface PortalTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/** The trigger element that toggles the portal open and closed. */
const PortalTrigger = React.forwardRef<HTMLButtonElement, PortalTriggerProps>(
  ({ children, asChild, onClick, ...props }, ref) => {
    const context = usePortalContext();
    const internalRef = React.useRef<HTMLButtonElement>(null);

    // Compose refs to set both the forwarded ref and the context triggerRef
    React.useEffect(() => {
      if (internalRef.current) {
        (
          context.triggerRef as React.MutableRefObject<HTMLElement | null>
        ).current = internalRef.current;
      }
    }, [context.triggerRef]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      context.onOpenChange?.(!context.open);
      onClick?.(event);
    };

    const setRefs = React.useCallback(
      (node: HTMLButtonElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        (
          context.triggerRef as React.MutableRefObject<HTMLElement | null>
        ).current = node;
      },
      [ref, context.triggerRef]
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref: setRefs,
        onClick: handleClick,
        ...props,
      });
    }

    return (
      <button
        ref={setRefs}
        type="button"
        onClick={handleClick}
        aria-expanded={context.open}
        aria-haspopup="dialog"
        {...props}
      >
        {children}
      </button>
    );
  }
);
PortalTrigger.displayName = "Portal.Trigger";

export { PortalTrigger };
