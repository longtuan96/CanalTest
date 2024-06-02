import type { Meta, StoryObj } from "@storybook/react";

import NavItem from "./NavItem";
import { NAVBAR_ITEMS } from "../NavBar";

const meta = {
  component: NavItem,
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: NAVBAR_ITEMS[0],
  },
};
