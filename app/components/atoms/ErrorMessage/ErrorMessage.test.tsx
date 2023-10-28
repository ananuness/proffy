import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import meta, { Default as DefaultStory } from "./ErrorMessage.stories";

const ErrorMessage = composeStory(DefaultStory, meta);

describe("ErrorMessage Component", () => {
  test("render error message correctly", () => {
    render(<ErrorMessage />);

    const loading = screen.getByRole("alert");

    expect(loading).toBeInTheDocument();
    expect(loading).toHaveTextContent("E-mail é obrigatório");
  });
});
