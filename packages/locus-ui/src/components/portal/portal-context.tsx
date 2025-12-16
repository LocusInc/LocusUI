"use client";

import * as React from "react";

interface PortalContextValue {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Ref to the trigger element, used as default anchor */
  triggerRef: React.RefObject<HTMLElement | null>;
  /** Custom anchor element ref (overrides trigger as anchor) */
  anchorRef?: React.RefObject<HTMLElement | null>;
}

const PortalContext = React.createContext<PortalContextValue | undefined>(
  undefined
);

interface PortalContextProps extends PortalContextValue {}

function usePortalContext() {
  const context = React.useContext(PortalContext);
  if (!context) {
    throw new Error("`usePortalContext` must be used within a `Portal.Root`");
  }
  return context;
}

export { PortalContext, PortalContextProps, usePortalContext };
