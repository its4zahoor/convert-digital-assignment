import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("Smoke Test", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
