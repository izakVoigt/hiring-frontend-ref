import { ReactNode } from "react";
import { Container } from "./styles";

export const Title = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <Container role="contentinfo">{children}</Container>;
};
