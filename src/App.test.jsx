import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const renderAppAndChangeInput = async () => {
  render(<App />);

  expect(screen.queryByTestId("options-list")).not.toBeInTheDocument();

  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "a" } });
};

const renderLoadingAndOptions = async () => {
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId("options-list")).toBeInTheDocument();
  });
};

describe("render App", () => {
  it("Smoke Test", () => {
    render(<App />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should render loading indicator", () => {
    renderAppAndChangeInput();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("should render options list", async () => {
    renderAppAndChangeInput();
    await renderLoadingAndOptions();
  });
  it("should close dropdown when option is clicked", async () => {
    renderAppAndChangeInput();
    await renderLoadingAndOptions();

    await fireEvent.click(screen.getByText("Gucci Bloom Eau de"));
    expect(screen.queryByTestId("options-list")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
