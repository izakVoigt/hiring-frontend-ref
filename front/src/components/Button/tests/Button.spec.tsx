import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@styles";
import { Button } from "..";

describe("Button component test", () => {
  it("should load the component on screen", () => {
    const onClick = () => {};
    render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={onClick}>
          <div />
        </Button>
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
