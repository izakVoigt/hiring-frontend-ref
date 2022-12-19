import { render, screen } from "@testing-library/react";
import { Input } from "..";

describe("Input component test", () => {
  it("should load the component on screen", () => {
    render(<Input type="search" placeholder="Teste" onChange={() => {}} value={10} />);

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });
});
