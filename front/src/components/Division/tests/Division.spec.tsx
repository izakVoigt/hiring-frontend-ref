import { render, screen } from "@testing-library/react";
import { Division } from "..";

describe("Division component test", () => {
  it("should load the component on screen", () => {
    render(<Division />);

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
