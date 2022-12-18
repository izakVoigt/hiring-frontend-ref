import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@styles";
import { NavContainer } from "..";

describe("NavContainer component test", () => {
  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <NavContainer>
          <div />
        </NavContainer>
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
