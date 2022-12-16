import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, ThemeContextData } from "@interfaces";
import { lightTheme, darkTheme } from "@styles";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
