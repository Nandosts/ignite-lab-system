import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    placeholder: "Type your email address",
    children: [
      <TextInput.Icon key="Icon">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key="Input" placeholder="Type Your Email Address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj = {};

export const WithoutIcon: StoryObj = {
  args: {
    children: <TextInput.Input placeholder="Type Your Email Address" /> 
  }
};
