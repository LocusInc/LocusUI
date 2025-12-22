type IconColors = "currentColor" | "primary" | "white" | "black";

interface IconProps {
  color?: IconColors;
}

const colorMap: Record<IconColors, string> = {
  currentColor: "currentColor",
  primary: "rgb(var(--primary))",
  white: "white",
  black: "black",
};

export { colorMap, IconProps };
