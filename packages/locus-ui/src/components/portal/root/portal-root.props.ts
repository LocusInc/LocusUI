import {
  GetPropDefTypes,
  PropDef,
  ReactNodePropDef,
} from "../../../props/prop-def";

const PortalRootPropsDefs = {
  /** Whether the portal is open. */
  open: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  /** Callback fired when the open state changes. */
  onOpenChange: {
    type: "function",
  } satisfies PropDef<(open: boolean) => void>,

  /** Whether the portal is open by default (uncontrolled). */
  defaultOpen: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  /** Custom anchor element ref. If not provided, the trigger is used as anchor. */
  anchorRef: {
    type: "reactNode",
  } as ReactNodePropDef<React.RefObject<HTMLElement | null>>,
};

type PortalRootInternalProps = GetPropDefTypes<typeof PortalRootPropsDefs>;

export { PortalRootInternalProps, PortalRootPropsDefs };
