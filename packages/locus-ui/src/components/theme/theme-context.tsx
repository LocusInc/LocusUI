"use client";

import * as React from "react";
import { ThemePropsDefs } from "./theme.props";

export type ThemeAppearance = (typeof ThemePropsDefs.appearance.values)[number];
export type ThemeRadius = (typeof ThemePropsDefs.radius.values)[number];
export type ThemeRoundness = (typeof ThemePropsDefs.roundness.values)[number];
export type ThemeSpacing = (typeof ThemePropsDefs.spacing.values)[number];

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

interface ThemeContextProps extends ThemeContextValue, ThemeChangeHandlers {}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("`useTheme` must be used within a `Theme`");
  }
  return context;
}

export { ThemeContext, ThemeContextProps, useTheme };
