import * as React from "react";
import { colorMap, IconProps } from "./icon-colors";

export const Minus: React.FC<IconProps> = ({ color = "currentColor" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.5C3.5 7.08579 3.83579 6.75 4.25 6.75H10.75C11.1642 6.75 11.5 7.08579 11.5 7.5C11.5 7.91421 11.1642 8.25 10.75 8.25H4.25C3.83579 8.25 3.5 7.91421 3.5 7.5Z"
        fill={colorMap[color]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
