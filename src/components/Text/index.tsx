import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Text = ({ children, asChild, size = "md" }: TextProps) => {
  const className = clsx("text-gray-100 font-sans", {
    "text-xs": size === "sm",
    "text-sm": size === "md",
    "text-md": size === "lg",
  });

  const Comp = asChild ? Slot : "span";

  return <Comp className={className}>{children}</Comp>;
};
