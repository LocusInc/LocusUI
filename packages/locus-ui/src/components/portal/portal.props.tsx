import { PropDef } from "../../props";

const variants = ["default", "transparent", "clear"] as const;
const positions = [
  "tl",
  "top",
  "tr",
  "left",
  "center",
  "right",
  "bl",
  "bottom",
  "br",
] as const;

const PortalPropsDefs = {
  open: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  // onOpenChange: {
  //   type: "function",
  // } satisfies PropDef<(open: boolean) => void>,

  defaultOpen: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  variant: {
    type: "enum",
    values: variants,
    default: "default",
  } satisfies PropDef<(typeof variants)[number]>,

  position: {
    type: "enum",
    values: positions,
    default: "center",
  } satisfies PropDef<(typeof positions)[number]>,
};

export { PortalPropsDefs };
