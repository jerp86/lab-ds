import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const className = clsx("text-gray-100 font-sans font-bold");

  const Comp = asChild ? Slot : "button";

  return (
    <Comp className="py-4 px-3 bg-cyan-500 rounded font-sans font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
      {children}
    </Comp>
  );
};
