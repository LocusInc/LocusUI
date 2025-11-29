import { PropDef, Responsive } from "../props/prop-def";

type ExtractSinglePropValue<T> = T extends { type: "boolean" }
  ? boolean
  : T extends { type: "string" }
  ? string
  : T extends { type: "enum"; values: readonly (infer V)[] }
  ? V
  : T extends { type: "enum | string"; values: readonly (infer V)[] }
  ? V | (string & {})
  : never;

type ExtractPropType<T> = T extends { responsive: true }
  ? Responsive<ExtractSinglePropValue<T>>
  : ExtractSinglePropValue<T>;

type RequiredKeys<T extends Record<string, PropDef>> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never;
}[keyof T];

type OptionalKeys<T extends Record<string, PropDef>> = Exclude<
  keyof T,
  RequiredKeys<T>
>;

export type GetProps<T extends Record<string, PropDef>> = {
  [K in RequiredKeys<T>]: ExtractPropType<T[K]>;
} & { [K in OptionalKeys<T>]?: ExtractPropType<T[K]> };
