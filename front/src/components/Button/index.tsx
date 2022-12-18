import { ReactNode } from "react";
import { Container } from "./styles";

export const Button = ({ onClick, children }: { onClick: () => any; children: ReactNode }) => {
  return (
    <Container onClick={onClick} role="contentinfo">
      {children}
    </Container>
  );
};
