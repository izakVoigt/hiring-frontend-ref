import { useTheme } from "@hooks";
import { Container, Input, Label } from "./styles";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container role="contentinfo">
      <Input type="checkbox" id="input" onChange={handleToggleTheme} />
      <Label htmlFor="input" role="switch" />
    </Container>
  );
};
