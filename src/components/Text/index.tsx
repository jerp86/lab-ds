import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Text = (props: TextProps) => {
  const { children, asChild, size = "md", className } = props;
  const customClassName = clsx(
    "text-gray-100 font-sans",
    {
      "text-xs": size === "sm",
      "text-sm": size === "md",
      "text-md": size === "lg",
    },
    className
  );

  const Comp = asChild ? Slot : "span";

  return <Comp className={customClassName}>{children}</Comp>;
};
