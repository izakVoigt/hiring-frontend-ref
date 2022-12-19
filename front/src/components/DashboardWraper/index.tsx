import { IDashboardWraperComponent } from "./types";
import { Container } from "./styles";

export const DashboardWraper = ({ children }: IDashboardWraperComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
