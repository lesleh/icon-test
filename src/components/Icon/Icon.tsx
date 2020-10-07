import * as React from "react";
import type { Icon as IconType } from "../../types";

export type IconProps = {
  icon: IconType;
  size?: "small" | "medium" | "large";
};

export function Icon({ icon, size = "small" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      data-icon-name={icon.name}
      style={{
        height: "1em",
        verticalAlign: "-.125em",
      }}
    >
      <path
        d={icon.svgPathData}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
      />
    </svg>
  );
}
