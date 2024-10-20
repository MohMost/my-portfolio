import React from "react";
import { ComponentPropsWithoutRef } from "react";

const FigmaIcon = (
  props: ComponentPropsWithoutRef<"svg"> & {
    size?: number;
    red?: string;
    orange?: string;
    blue?: string;
    purple?: string;
    green?: string;
  }
) => {
  const { size, red, orange, blue, purple, green, className } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g className="group" fillRule="evenodd" transform="translate(4)">
          {/* Blue circle */}
          <circle
            cx="12"
            cy="12"
            r="4"
            fill={blue}
            // Store the color to use on hover
          ></circle>

          {/* Green path */}
          <path
            fill={green}
            d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z"
          ></path>

          {/* Purple path */}
          <path
            fill={purple}
            d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z"
          ></path>

          {/* Red path */}
          <path
            fill={red}
            d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z"
          ></path>

          {/* Orange path */}
          <path
            fill={orange}
            d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default FigmaIcon;
