import * as React from "react";
import { PortalPropsDefs } from "./portal.props";

export type PortalOpen = boolean | undefined;
export type PortalDefaultOpen = boolean | undefined;
export type PortalVariant =
  | (typeof PortalPropsDefs.variant.values)[number]
  | undefined;
export type PortalPosition =
  | (typeof PortalPropsDefs.position.values)[number]
  | undefined;

interface PortalChangeHandlers {
  onOpenChange?: (open: boolean) => void;
  onVariantChange?: (variant: PortalVariant) => void;
}

interface PortalContextValue extends PortalChangeHandlers {
  open: PortalOpen;
  variant: PortalVariant;
  position: PortalPosition;
}

const PortalContext = React.createContext<PortalContextValue | undefined>(
  undefined
);

interface PortalContextProps extends PortalContextValue, PortalChangeHandlers {}

function usePortalContext() {
  const context = React.useContext(PortalContext);
  if (!context) {
    throw new Error("`usePortalContext` must be used within a `Portal`");
  }
  return context;
}

export { PortalContext, PortalContextProps, usePortalContext };
