import { IInputWraperComponent } from "./types";
import { Container } from "./styles";

export const InputWraper = ({ children }: IInputWraperComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
