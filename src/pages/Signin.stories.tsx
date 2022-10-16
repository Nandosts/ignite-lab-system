import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./Signin";

export default {
  title: "Pages/Signin",
  component: SignIn,
  args: {
    children: "Create Account",
  },
  argTypes: {},
} as Meta;

export const Default: StoryObj = {};
