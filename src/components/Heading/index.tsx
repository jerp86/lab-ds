import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  children: ReactNode;
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Heading = ({ children, asChild, size = "md" }: HeadingProps) => {
  const className = clsx("text-gray-100 font-sans font-bold", {
    "text-lg": size === "sm",
    "text-xl": size === "md",
    "text-2xl": size === "lg",
  });

  const Comp = asChild ? Slot : "h2";

  return <Comp className={className}>{children}</Comp>;
};
