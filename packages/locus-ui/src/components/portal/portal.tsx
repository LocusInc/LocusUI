import { PortalBackdrop } from "./backdrop/portal-backdrop";
import { PortalContent } from "./content/portal-content";
import { PortalRoot } from "./root/portal-root";
import { PortalTrigger } from "./trigger/portal-trigger";

export const Portal = {
  /** The root component that provides context for the portal. */
  Root: PortalRoot,
  /** The trigger element that opens the portal when interacted with. */
  Trigger: PortalTrigger,
  /** The content displayed inside the portal when open. */
  Content: PortalContent,
  /** A backdrop optionally displayed behind portal content when open. */
  Backdrop: PortalBackdrop,
};
