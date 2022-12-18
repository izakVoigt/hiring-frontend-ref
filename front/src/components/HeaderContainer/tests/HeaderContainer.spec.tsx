import { render, screen } from "@testing-library/react";
import { HeaderContainer } from "..";

describe("HeaderContainer component test", () => {
  it("should load the component on screen", () => {
    render(
      <HeaderContainer>
        <div />
      </HeaderContainer>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
