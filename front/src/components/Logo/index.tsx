import { AccountBalance } from "@mui/icons-material";
import { Container } from "./styled";

export const Logo = () => {
  return (
    <Container role="contentinfo">
      <AccountBalance />
      <p>CORRETORA X</p>
    </Container>
  );
};
