import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "white" | "blue";
  mode?: "desktop" | "mobile";
}

export function Logo({ variant = "default", mode = "desktop", className, ...props }: LogoProps) {
  const getFillColor = () => {
    switch (variant) {
      case "white":
        return "#FFFFFF";
      case "blue":
        return "#140E89"; // Primary/Secondary 600 from tokens approx
      default:
        return "#212121"; // Neutral 700
    }
  };

  const fill = getFillColor();

  if (mode === "mobile") {
    return (
      <svg
        viewBox="0 0 70 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-auto h-8", className)}
        {...props}
      >
        <path
          d="M8 8H14.1511C17.5961 8 20.6382 10.2468 21.6513 13.5395L29.5044 39.0619H21.4214C19.1247 39.0619 17.0966 37.564 16.4212 35.3689L8 8Z"
          fill={fill}
        />
        <path
          d="M24.2479 8H30.399C33.844 8 36.8861 10.2468 37.8992 13.5395L45.7523 39.0619H37.6692C35.3726 39.0619 33.3445 37.564 32.6691 35.3689L24.2479 8Z"
          fill={fill}
        />
        <path
          d="M40.4956 8H46.6467C50.0917 8 53.1338 10.2468 54.1469 13.5395L62 39.0619H53.917C51.6203 39.0619 49.5922 37.564 48.9168 35.3689L40.4956 8Z"
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-8", className)}
      {...props}
    >
      <path
        d="M12 12H20.6571C25.5056 12 29.7871 15.1622 31.213 19.7963L42.2655 55.7168H30.8893C27.657 55.7168 24.8027 53.6086 23.8521 50.5193L12 12Z"
        fill={fill}
      />
      <path
        d="M34.8674 12H43.5245C48.373 12 52.6545 15.1622 54.0804 19.7963L65.1328 55.7168H53.7567C50.5244 55.7168 47.67 53.6086 46.7195 50.5193L34.8674 12Z"
        fill={fill}
      />
      <path
        d="M57.7345 12H66.3917C71.2402 12 75.5217 15.1622 76.9475 19.7963L88 55.7168H76.6239C73.3915 55.7168 70.5372 53.6086 69.5866 50.5193L57.7345 12Z"
        fill={fill}
      />
    </svg>
  );
}
