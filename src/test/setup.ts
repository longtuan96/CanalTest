import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import { apiHandlers } from "./apiHandlers";

const server = setupServer(...apiHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
