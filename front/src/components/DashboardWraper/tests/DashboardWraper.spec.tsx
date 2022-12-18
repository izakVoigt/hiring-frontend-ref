import { render, screen } from "@testing-library/react";
import { DashboardWraper } from "..";

describe("DashboardWraper component test", () => {
  it("should load the component on screen", () => {
    render(
      <DashboardWraper>
        <div></div>
      </DashboardWraper>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
