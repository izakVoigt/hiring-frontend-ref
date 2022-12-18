import { ReactNode } from "react";
import { Container } from "./styles";

export const DashboardWraper = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <Container role="contentinfo">{children}</Container>;
};
