import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MultiSelect from "react-multi-select-component";
import React, {
  ForwardedRef,
  forwardRef,
  Ref,
  HTMLAttributes,
  MutableRefObject,
} from "react";
import Image, { ImageProps } from "next/image";

export function cn(...inputs: (string | boolean | undefined)[]) {
  return twMerge(clsx(inputs));
}

interface MultiSelectComponentProps {
  options: any[];
  value: any[]; // Adjust the type as needed
  onChange: (selected: any[]) => void;
  labelledBy: string;
  name: string;
  className?: string;
}

const MultiSelectComponent = forwardRef<
  HTMLDivElement,
  MultiSelectComponentProps & HTMLAttributes<HTMLDivElement>
>((props, forwardedRef) => {
  const { options, value, onChange, labelledBy, name, className, ...rest } =
    props;

  return (
    <>
      <MultiSelect
        options={options}
        value={value}
        onChange={onChange}
        labelledBy={labelledBy}
        {...rest}
        // @ts-ignore
        ref={forwardedRef}
        className={className}
      />
    </>
  );
});

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
