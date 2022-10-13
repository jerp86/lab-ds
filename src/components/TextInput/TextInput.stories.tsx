import { Meta, StoryObj } from "@storybook/react";

import { TextInput, TextInputRootProps } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="Text for placeholder" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};