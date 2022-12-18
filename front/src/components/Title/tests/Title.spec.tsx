import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@styles";
import { Title } from "..";

describe("DashboardWraper component test", () => {
  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Title>Teste</Title>
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
