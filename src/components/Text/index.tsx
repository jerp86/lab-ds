import { ReactNode } from "react";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const Text = ({ children, size = "md" }: TextProps) => {
  const className = clsx("text-gray-100 font-sans", {
    "text-xs": size === "sm",
    "text-sm": size === "md",
    "text-md": size === "lg",
  });

  return <span className={className}>{children}</span>;
};
