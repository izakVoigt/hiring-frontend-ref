import { Theme } from "../interfaces";

export const lightTheme: Theme = {
  name: "light",
  colors: {
    primary: "#cdcdcd",
    secundary: "#1e1e1e",
    tertiary: "#f0f0f0",
    detail: "#6666ff",
    fontDefault: "#323232",
    fontText: "#787878",
    fontReverse: "#dcdcdc",
  },
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#323232",
    secundary: "#e1e1e1",
    tertiary: "#0f0f0f",
    detail: "#6666ff",
    fontDefault: "#cdcdcd",
    fontText: "#787878",
    fontReverse: "#232323",
  },
};
