import type { Meta, StoryObj } from "@storybook/react";

import MovieCarousel from "./MovieCarousel";
import { moviePopularMockData } from "../../services/movie/movie.mock";

const meta = {
  component: MovieCarousel,
  decorators: [
    (Story) => (
      <div className="text-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MovieCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: moviePopularMockData.results,
    handleShowVideo: () => {},
  },
};
