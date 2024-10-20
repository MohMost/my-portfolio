import React from "react";
import { ComponentPropsWithoutRef } from "react";
const VueJSIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z"
        fill="#41B883"
      ></path>{" "}
      <path
        d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z"
        fill="#35495E"
      ></path>{" "}
    </g>
  </svg>
);

export default VueJSIcon;
