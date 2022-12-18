import { INavContainerWraperComponent } from "./types";
import { Container } from "./styles";

export const NavContainerWraper = ({ children }: INavContainerWraperComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
