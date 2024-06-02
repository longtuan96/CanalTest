import { describe, expect, test, vi } from "vitest";
import Modal from "./Modal";
import { TEST_MOVIE_ID } from "../../../test/constants";
import { getTree } from "../../../test/utils";
import { videoMockData } from "../../../services/video/video.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Modal", () => {
  test("render correctly", () => {
    const queryClient = new QueryClient();

    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(videoMockData),
      }),
    );
    expect(
      getTree(
        <QueryClientProvider client={queryClient}>
          <Modal
            onClose={() => {}}
            movieId={TEST_MOVIE_ID}
            variation="trailer"
          />
        </QueryClientProvider>,
      ),
    ).toMatchSnapshot();
  });
});
