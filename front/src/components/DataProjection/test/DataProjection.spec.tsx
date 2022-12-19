import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StockHistory, StockGains } from "@interfaces";
import { lightTheme } from "@styles";
import { DataProjection } from "..";

describe("DataProjection component test", () => {
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

  const mockCalc: StockGains = {
    name: "vale",
    lastPrice: 12,
    priceAtDate: 14,
    purchasedAmount: 10,
    purchasedAt: "2022-12-06",
    capitalGains: -0.587642736,
  };

  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataProjection data={mockData} calc={mockCalc} color="#fff">
          <div></div>
        </DataProjection>
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });

  it("should load dashboard on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataProjection data={mockData} calc={mockCalc} color="#fff">
          <div></div>
        </DataProjection>
      </ThemeProvider>
    );

    const component = screen.getByRole("figure");
    expect(component).toBeInTheDocument();
  });

  it("should load text data on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataProjection data={mockData} calc={mockCalc} color="#fff">
          <div></div>
        </DataProjection>
      </ThemeProvider>
    );

    const component = screen.getByRole("textbox");
    expect(component).toBeInTheDocument();
  });
});
