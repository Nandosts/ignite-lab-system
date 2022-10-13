import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export type CheckboxProps = CheckboxPrimitive.CheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 rounded bg-gray-800 p-[2px]"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
