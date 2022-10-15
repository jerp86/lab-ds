import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { SignIn } from ".";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  argsTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "jerp.dev@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("******"), "123456");

    userEvent.click(canvas.getByRole("button"));

    waitFor(() =>
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
    );
  },
};
