import * as React$1 from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const breakpoints: readonly ["initial", "xs", "sm", "md", "lg", "xl"];
type Breakpoint = (typeof breakpoints)[number];
type Union<S = string, T extends string | number = string> = T | Omit<S, T>;
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;
type BooleanPropDef = {
    type: "boolean";
    default?: boolean;
    required?: boolean;
    className?: string;
    cssProperty?: string;
};
type StringPropDef = {
    type: "string";
    default?: string;
    required?: boolean;
    className?: string;
    cssProperty?: string;
};
type EnumPropDef<T> = {
    type: "enum";
    values: readonly T[];
    default?: T | "theme";
    required?: boolean;
    className?: string;
    dataAttr?: string;
};
type EnumOrStringPropDef<T extends string> = {
    type: "enum | string";
    values: readonly T[];
    default?: T | "theme";
    required?: boolean;
    className?: string;
    dataAttr?: string;
};
type BasePropDef<T = any> = BooleanPropDef | StringPropDef | EnumPropDef<T> | EnumOrStringPropDef<T & string>;
type ResponsivePropDef<T = any> = BasePropDef<T> & {
    responsive: true;
};
type GetPropDefType<Def> = Def extends BooleanPropDef ? Def extends ResponsivePropDef ? Responsive<boolean> : boolean : Def extends StringPropDef ? Def extends ResponsivePropDef ? Responsive<string> : string : Def extends EnumOrStringPropDef<infer Type> ? Def extends ResponsivePropDef<infer Type extends string> ? Responsive<Union<string, Type>> : Type : Def extends EnumPropDef<infer Type> ? Def extends ResponsivePropDef<infer Type> ? Responsive<Type> : Type : never;
type GetPropDefTypes<P> = {
    [K in keyof P]?: GetPropDefType<P[K]>;
};

declare const MarginPropDefs: {
    /**
     * Sets margin on all sides of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example m="4" // 16px margin on all sides
     * @example m="-26px" // -26px negative margin custom value
     * @example m={{ initial: "2", md: "4", lg: "8" }} // responsive margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the top of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example mt="4" // 16px margin on all sides
     * @example mt="-26px" // -26px negative margin custom value
     * @example mt={{ initial: "2", md: "4", lg: "8" }} // responsive margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
     */
    mt: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the bottom of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example mb="4" // 16px margin on all sides
     * @example mb="-26px" // -26px negative margin custom value
     * @example mb={{ initial: "2", md: "4", lg: "8" }} // responsive margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
     */
    mb: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the left of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example ml="4" // 16px margin on all sides
     * @example ml="-26px" // -26px negative margin custom value
     * @example ml={{ initial: "2", md: "4", lg: "8" }} // responsive margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
     */
    ml: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the right of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example mr="4" // 16px margin on all sides
     * @example mr="-26px" // -26px negative margin custom value
     * @example mr={{ initial: "2", md: "4", lg: "8" }} // responsive margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
     */
    mr: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the left and right (horizontal) sides of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example mx="4" // 16px horizontal margin
     * @example mx="-26px" // -26px negative horizontal margin custom value
     * @example mx={{ initial: "2", md: "4", lg: "8" }} // responsive horizontal margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
     */
    mx: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets margin on the top and bottom (vertical) sides of the element.
     * Supports scale, auto, inherit, custom, and responsive values.
     *
     * @example my="4" // 16px vertical margin
     * @example my="-26px" // -26px negative vertical margin custom value
     * @example my={{ initial: "2", md: "4", lg: "8" }} // responsive vertical margins
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
     * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
     */
    my: {
        type: "enum | string";
        values: readonly ["auto", "inherit", "-8", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
};
type MarginProps = GetPropDefTypes<typeof MarginPropDefs>;

declare const PaddingPropDefs: {
    /**
     * Sets padding on all sides of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example p="4" // 16px padding on all sides
     * @example p="26px" // 26px padding custom value
     * @example p={{ initial: "2", md: "4", lg: "8" }} // responsive padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the top of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example pt="4" // 16px top padding
     * @example pt="26px" // 26px top padding custom value
     * @example pt={{ initial: "2", md: "4", lg: "8" }} // responsive top padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
     */
    pt: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the bottom of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example pb="4" // 16px bottom padding
     * @example pb="26px" // 26px bottom padding custom value
     * @example pb={{ initial: "2", md: "4", lg: "8" }} // responsive bottom padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
     */
    pb: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the left of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example pl="4" // 16px left padding
     * @example pl="26px" // 26px left padding custom value
     * @example pl={{ initial: "2", md: "4", lg: "8" }} // responsive left padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
     */
    pl: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the right of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example pr="4" // 16px right padding
     * @example pr="26px" // 26px right padding custom value
     * @example pr={{ initial: "2", md: "4", lg: "8" }} // responsive right padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
     */
    pr: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the left and right (horizontal) sides of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example px="4" // 16px horizontal padding
     * @example px="26px" // 26px horizontal padding custom value
     * @example px={{ initial: "2", md: "4", lg: "8" }} // responsive horizontal padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
     */
    px: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
    /**
     * Sets padding on the top and bottom (vertical) sides of the element.
     * Supports scale, inherit, custom, and responsive values.
     *
     * @example py="4" // 16px vertical padding
     * @example py="26px" // 26px vertical padding custom value
     * @example py={{ initial: "2", md: "4", lg: "8" }} // responsive vertical padding
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
     * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
     */
    py: {
        type: "enum | string";
        values: readonly ["inherit", "0", "1", "2", "3", "4", "5", "6", "8"];
        dataAttr: string;
        className: string;
        responsive: true;
    };
};
type PaddingProps = GetPropDefTypes<typeof PaddingPropDefs>;

declare const RadiusPropDefs: {
    /**
     * Sets the border-radius of the element.
     * Supports scaled, inherit, custom, and responsive values.
     *
     * @example r="md" // medium border-radius
     * @example r="26px" // 26px border-radius custom value
     * @example r={{ initial: "none", lg: "full" }} // responsive border-radius
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    radius: {
        type: "enum | string";
        values: readonly ["none", "xs", "sm", "md", "lg", "xl", "full", "inherit"];
        default: "theme";
        dataAttr: string;
        className: string;
        responsive: true;
    };
};
type RadiusProps = GetPropDefTypes<typeof RadiusPropDefs>;

declare const RoundnessPropDef: {
    /**
     * Sets the roundness multiplier for the element's radius.
     * Supports scaled and inherit values.
     *
     * @example roundness="4" // 8px base roundness
     * @example roundness="inherit" // inherits roundness from parent
     */
    roundness: {
        type: "enum";
        values: readonly ["1", "2", "3", "4", "5", "6", "inherit"];
        default: "theme";
        dataAttr: string;
    };
};
type RoundnessProp = GetPropDefTypes<typeof RoundnessPropDef>;

declare const SpacingPropDef: {
    /**
     * Sets the spacing scale for the component.
     * This multiplier affects various layout properties such as margin, padding, and gap values.
     *
     * @example spacing="md" // medium spacing scale (1)
     * @example spacing={{ initial: "sm", lg: "xl" }} // responsive spacing
     */
    spacing: {
        type: "enum";
        values: readonly ["xs", "sm", "md", "lg", "xl", "inherit"];
        dataAttr: string;
        default: "theme";
        responsive: true;
    };
};
type SpacingProp = GetPropDefTypes<typeof SpacingPropDef>;

interface ExternalProps extends MarginProps, PaddingProps, SpacingProp, RadiusProps, RoundnessProp {
}
/**
 * A versatile container used to provide layout and styling capabilities.
 */
declare const Box: React$1.ForwardRefExoticComponent<{} & {} & ExternalProps & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

type ButtonProps = {
    className?: string;
    [key: string]: any;
};
declare const Button: ({ className, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const Container: React$1.ForwardRefExoticComponent<{} & {
    direction?: "row" | "column" | undefined;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const Portal: React$1.ForwardRefExoticComponent<{} & {
    position?: "center" | "left" | "right" | "bottom" | "top" | "tl" | "tr" | "bl" | "br" | undefined;
    open?: boolean | undefined;
    variant?: "default" | "transparent" | "clear" | undefined;
    defaultOpen?: boolean | undefined;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const Text: ({ children, className, ...rest }: TextProps) => react_jsx_runtime.JSX.Element;

declare const ThemePropsDefs: {
    appearance: {
        type: "enum";
        values: readonly ["inherit", "light", "dark"];
        default: "inherit";
    };
    radius: {
        type: "enum";
        values: readonly ["default", "none", "xs", "sm", "md", "lg", "xl", "full", "inherit"];
        default: "md";
    };
    roundness: {
        type: "enum";
        values: readonly ["default", "1", "2", "3", "4", "5", "6", "inherit"];
        default: "3";
    };
    spacing: {
        type: "enum";
        values: readonly ["default", "inherit", "xs", "sm", "md", "lg", "xl"];
        default: "md";
    };
};

declare const Theme: React$1.ForwardRefExoticComponent<{} & {
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | "inherit" | "default" | "none" | "full" | undefined;
    roundness?: "inherit" | "1" | "2" | "3" | "4" | "5" | "6" | "default" | undefined;
    spacing?: "xs" | "sm" | "md" | "lg" | "xl" | "inherit" | "default" | undefined;
    appearance?: "inherit" | "dark" | "light" | undefined;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

type ThemeAppearance = (typeof ThemePropsDefs.appearance.values)[number];
type ThemeRadius = (typeof ThemePropsDefs.radius.values)[number];
type ThemeRoundness = (typeof ThemePropsDefs.roundness.values)[number];
type ThemeSpacing = (typeof ThemePropsDefs.spacing.values)[number];
interface ThemeChangeHandlers {
    onAppearanceChange?: (appearance: ThemeAppearance) => void;
    onRadiusChange?: (radius: ThemeRadius) => void;
    onRoundnessChange?: (roundness: ThemeRoundness) => void;
    onSpacingChange?: (spacing: ThemeSpacing) => void;
}
interface ThemeContextValue extends ThemeChangeHandlers {
    appearance: ThemeAppearance;
    radius: ThemeRadius;
    roundness: ThemeRoundness;
    spacing: ThemeSpacing;
}
declare function useTheme(): ThemeContextValue;

declare function ThemeControl(): react_jsx_runtime.JSX.Element;

export { Box, Button, Container, Portal, Text, Theme, type ThemeAppearance, ThemeControl, type ThemeRadius, type ThemeRoundness, useTheme };
