import React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx("font-sans text-gray-100", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
