import { AccountBalance } from "@mui/icons-material";
import { Container } from "./styled";

export const Logo = () => {
  return (
    <Container role="contentinfo">
      <AccountBalance />
      <h1 role="textbox">CORRETORA X</h1>
    </Container>
  );
};
