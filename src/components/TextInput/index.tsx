import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = (props: TextInputRootProps) => (
  <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
    {props.children}
  </div>
);

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
};
