import { INavContainerComponent } from "./types";
import { Container } from "./styles";

export const NavContainer = ({ children }: INavContainerComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
