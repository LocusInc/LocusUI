import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const textAs = ["p", "span", "div"] as const;

const TextPropsDefs = {
  disabled: {
    type: "boolean",
    default: false,
    dataAttr: "disabled",
  } satisfies PropDef<boolean>,
  /**
   * Defines wether the Text is rendered as a **p**, **span** or **div**.
   *
   * @example
   * as="p"
   * as="span"
   * as="div"
   */
  // as: {
  //   type: "enum",
  //   values: textAs,
  //   default: "p",
  // } satisfies PropDef<(typeof textAs)[number]>,
};

type TextInternalProps = GetPropDefTypes<typeof TextPropsDefs>;

export { TextInternalProps, TextPropsDefs };
