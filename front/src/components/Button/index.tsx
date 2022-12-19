import { IButtonComponent } from "./types";
import { Container } from "./styles";

export const Button = ({ onClick, children }: IButtonComponent) => {
  return (
    <Container onClick={onClick} role="contentinfo">
      {children}
    </Container>
  );
};
