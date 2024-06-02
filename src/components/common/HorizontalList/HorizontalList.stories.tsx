import type { Meta, StoryObj } from "@storybook/react";

import HorizontalList from "./HorizontalList";
import { moviePopularMockData } from "../../../services/movie/movie.mock";
import { MovieCard } from "../../MovieCard/MovieCard";
import { creditMockData } from "../../../services/credit/credit.mock";
import { PeopleCard } from "../../PeopleCard/PeopleCard";

const meta = {
  component: HorizontalList,
} satisfies Meta<typeof HorizontalList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Movie: Story = {
  args: {
    title: "Movie",
    children: moviePopularMockData.results.map((item) => (
      <MovieCard data={item} key={item.id} />
    )),
  },
};

export const People: Story = {
  args: {
    title: "Cast",
    children: creditMockData.cast.map((item) => (
      <PeopleCard data={item} key={item.id} />
    )),
  },
};

export const Error: Story = {
  args: {
    title: "Error",
    error: true,
  },
};
