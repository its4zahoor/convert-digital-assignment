import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// setup server for mock API calls, as calling realing API can be slow and unreliable

import { setupServer } from "msw/node";
import { handlers } from "./src/mockAPI.js";
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.resetHandlers(), server.close());

afterEach(() => {
  cleanup();
});
