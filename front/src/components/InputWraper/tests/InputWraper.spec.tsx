import { render, screen } from "@testing-library/react";
import { InputWraper } from "..";

describe("InputWraper component test", () => {
  it("should load the component on screen", () => {
    render(
      <InputWraper>
        <div />
      </InputWraper>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
