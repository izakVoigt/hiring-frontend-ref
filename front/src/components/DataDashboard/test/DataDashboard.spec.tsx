import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StockHistory } from "@interfaces";
import { lightTheme } from "@styles";
import { DataDashboard } from "..";

describe("DataDashboard component test", () => {
  const mockData: StockHistory = {
    name: "vale",
    prices: [
      {
        opening: 12,
        low: 11,
        high: 14,
        closing: 12,
        pricedAt: "2022-12-14",
        volume: 12345,
      },
    ],
  };

  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataDashboard data={mockData} color="#fff" title="Test" percentage="2.18" desc="Test" dataKey="closing" />
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });

  it("should load dashboard on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataDashboard data={mockData} color="#fff" title="Test" percentage="2.18" desc="Test" dataKey="closing" />
      </ThemeProvider>
    );

    const component = screen.getByRole("figure");
    expect(component).toBeInTheDocument();
  });

  it("should load text data on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataDashboard data={mockData} color="#fff" title="Test" percentage="2.18" desc="Test" dataKey="closing" />
      </ThemeProvider>
    );

    const component = screen.getByRole("textbox");
    expect(component).toBeInTheDocument();
  });
});
