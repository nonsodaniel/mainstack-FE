"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MultiSelect from "react-multi-select-component";
import React from "react";
import Image from "next/image";

export function cn(...inputs: (string | boolean | undefined)[]) {
  return twMerge(clsx(inputs));
}

// MultiSelect Setup
//@ts-ignore
const MultiSelectComponent = React.forwardRef(({ options, ...rest }, ref) => {
  return (
    <>
      {/* @ts-ignore */}
      <MultiSelect options={options} ref={ref} {...rest} />
    </>
  );
});

// Helper component to handle image hover effect
//@ts-ignore
const GrayToColorImage = ({ img, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={img}
        fill
        style={{ objectFit: "cover" }}
        className="filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
        alt="icon"
      />
    </div>
  );
};

export { MultiSelectComponent, GrayToColorImage };
