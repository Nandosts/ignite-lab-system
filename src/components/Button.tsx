import React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "w-full rounded bg-cyan-500 py-4 px-3 text-sm font-semibold text-black ring-white transition-colors hover:bg-cyan-300 focus:ring-2"
      )}
    >
      {children}
    </Component>
  );
}
