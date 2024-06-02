import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalForMovie: Story = {
  args: {
    movieId: 0,
    onClose: () => {},
    variation: "movie",
  },
};

export const ModalForTrailer: Story = {
  args: {
    movieId: 653346,
    onClose: () => {},
    variation: "trailer",
  },
};
