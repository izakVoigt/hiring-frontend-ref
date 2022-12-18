import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@styles";
import { NavContainerWraper } from "..";

describe("NavContainerWraper component test", () => {
  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <NavContainerWraper>
          <div />
        </NavContainerWraper>
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
