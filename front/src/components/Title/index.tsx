import { ITitle } from "./types";
import { Container } from "./styles";

export const Title = ({ children }: ITitle) => {
  return <Container role="contentinfo">{children}</Container>;
};
