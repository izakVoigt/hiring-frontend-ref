import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StockLastPrice } from "@interfaces";
import { lightTheme } from "@styles";
import { DataDashboardCompare } from "..";

describe("DataDashboard component test", () => {
  const mockData: StockLastPrice = {
    lastPrices: [
      {
        name: "teste",
        lastPrice: 10,
        pricedAt: "2022-01-01",
      },
    ],
  };

  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataDashboardCompare data={mockData} />
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
