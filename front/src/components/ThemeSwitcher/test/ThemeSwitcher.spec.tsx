import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../styles";
import { ThemeSwitcher } from "..";

describe("ThemeSwitcher component test", () => {
  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });

  it("should load the label on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const component = screen.getByRole("switch");
    expect(component).toBeInTheDocument();
  });
});
