import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function Checkbox() {
  return (
    <div className="">
      <CheckboxPrimitive.Root className="h-6 w-6 rounded bg-gray-800 p-[2px]">
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  );
}
