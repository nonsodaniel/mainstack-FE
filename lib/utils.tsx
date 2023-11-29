"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MultiSelect from "react-multi-select-component";
import React, { forwardRef, Ref, HTMLAttributes } from "react";
import Image, { ImageProps } from "next/image";

export function cn(...inputs: (string | boolean | undefined)[]) {
  return twMerge(clsx(inputs));
}

// MultiSelect Setup
const MultiSelectComponent = forwardRef<
  HTMLDivElement,
  {
    options: any[];
  }
>(({ options, ...rest }, ref) => {
  return (
    <>
      {/* @ts-ignore */}
      <MultiSelect options={options} ref={ref} {...rest} />
    </>
  );
});

// Helper component to handle image hover effect
interface GrayToColorImageProps {
  img: string;
  className?: string;
}

const GrayToColorImage: React.FC<GrayToColorImageProps & ImageProps> = ({
  img,
  className,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        fill
        style={{ objectFit: "cover" }}
        className="filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
        {...props}
      />
    </div>
  );
};

export { MultiSelectComponent, GrayToColorImage };
