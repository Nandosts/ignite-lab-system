import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./Signin";
import { rest } from "msw";

export default {
  title: "Pages/Signin",
  component: SignIn,
  args: {
    children: "Create Account",
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login Realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {};

export const Tested: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "emailvalido@gmail.com"
    );

    userEvent.type(canvas.getByPlaceholderText("******"), "Abcd.123");

    userEvent.click(canvas.getByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};
