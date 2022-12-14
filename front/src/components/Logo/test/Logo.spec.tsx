import { render, screen } from "@testing-library/react";
import { Logo } from "..";

describe("Logo component test", () => {
  it("should load the component on screen", () => {
    render(<Logo />);

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
