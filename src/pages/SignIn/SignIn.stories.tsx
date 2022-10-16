import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { SignIn } from ".";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  argsTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) =>
          res(ctx.json({ message: "Login realizado!" }))
        ),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkElement = canvas.getByRole("checkbox", {
      name: /lembrar de mim por 30 dias/i,
    });

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "jerp.dev@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("******"), "123456");

    userEvent.click(checkElement);

    userEvent.click(canvas.getByRole("button"));

    expect(checkElement).toBeInTheDocument();
    waitFor(() => {
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
      expect(checkElement).toBeChecked();
    });
  },
};
