import { IHeaderContainerComponent } from "./types";
import { Container } from "./styles";

export const HeaderContainer = ({ children }: IHeaderContainerComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
