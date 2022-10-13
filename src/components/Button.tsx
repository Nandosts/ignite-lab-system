import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "w-full rounded bg-cyan-500 py-3 px-4 text-sm font-semibold text-black ring-white transition-colors hover:bg-cyan-300 focus:ring-2",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
