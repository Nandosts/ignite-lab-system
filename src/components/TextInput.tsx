import React, { InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex h-12 w-full items-center gap-3 rounded bg-gray-800 py-4 px-3 ring-cyan-300 focus-within:ring-2"
      )}
    >
      {props.children}
    </div>
  );
}

export interface TextInputItemProps {
  children: React.ReactNode;
}

function TextInputIcon(props: TextInputItemProps) {
  return (
    <Slot className="h-6 w-6 text-gray-400 ">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = "TextInputIcon"

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={
        "flex-1 bg-transparent text-xs text-gray-100 outline-none placeholder:text-gray-400"
      }
      {...props}
    ></input>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
