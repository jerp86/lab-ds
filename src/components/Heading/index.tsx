import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  children: ReactNode;
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Heading = (props: HeadingProps) => {
  const { children, asChild, className, size = "md" } = props;
  const customClassName = clsx(
    "text-gray-100 font-sans font-bold",
    {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg",
    },
    className
  );

  const Comp = asChild ? Slot : "h2";

  return <Comp className={customClassName}>{children}</Comp>;
};
