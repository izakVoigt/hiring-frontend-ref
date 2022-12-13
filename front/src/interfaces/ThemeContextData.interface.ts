import { Theme } from "./Theme.interface";

export interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}
