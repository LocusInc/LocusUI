import { GetPropDefTypes } from "../../props/prop-def";

const boxAs = ["div", "span"] as const;

const BoxPropsDefs = {
  /**
   * Defines wether the Box is rendered as a **div** or **span**.
   *
   * @example
   * as="div"
   * as="span"
   */
  // as: {
  //   type: "enum",
  //   values: boxAs,
  //   default: "div",
  // } satisfies PropDef<(typeof boxAs)[number]>,
};

type BoxInternalProps = GetPropDefTypes<typeof BoxPropsDefs>;

export { BoxInternalProps, BoxPropsDefs };
