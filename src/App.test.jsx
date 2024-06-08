import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const renderAppAndChangeInput = async () => {
  render(<App />);

  expect(screen.queryByTestId("options-list")).not.toBeInTheDocument();

  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "a" } });
};

const renderLoadingAndOptions = async () => {
  await waitFor(() => {
    expect(screen.getByTestId("options-list")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
};

describe("render App", () => {
  it("should render Search input", () => {
    render(<App />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should render loading indicator", async () => {
    renderAppAndChangeInput();
    await renderLoadingAndOptions();
  });
  it("should render options list", async () => {
    renderAppAndChangeInput();
    await renderLoadingAndOptions();
  });
  it("should close dropdown when option is clicked", async () => {
    renderAppAndChangeInput();
    await renderLoadingAndOptions();

    await waitFor(() => {
      expect(screen.getByText("Gucci Bloom Eau de")).toBeInTheDocument();
    });

    await fireEvent.click(screen.getByText("Gucci Bloom Eau de"));
    expect(screen.queryByTestId("options-list")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
