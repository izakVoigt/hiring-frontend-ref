import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { lightTheme } from "../../../styles";
import { DataComponent } from "..";

describe("DataComponent component test", () => {
  it("should load the component on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataComponent svg={<ArrowDropDown />} color="#fff" title="Test" value="2.18" percentage="2.18" desc="Test" />
      </ThemeProvider>
    );

    const component = screen.getByRole("contentinfo");
    expect(component).toBeInTheDocument();
  });

  it("should load svg on screen", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <DataComponent svg={<ArrowDropDown />} color="#fff" title="Test" value="2.18" percentage="2.18" desc="Test" />
      </ThemeProvider>
    );

    const component = screen.getByRole("figure");
    expect(component).toBeInTheDocument();
  });
});
