import { Link } from "react-router-dom";
import { CompareArrows, ShowChart } from "@mui/icons-material";
import { useWindowDimensions } from "@hooks";
import { Logo, Notification, ThemeSwitcher, User } from "@components";
import { Container, ContainerWraper, Division } from "./styles";

export const Nav = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <ContainerWraper>
        <Logo />
        <Division />
        <Link to="/">
          <ShowChart />
          <p>Ações</p>
        </Link>
        <Link to="/comparacao">
          <CompareArrows />
          <p>Comparação de Ações</p>
        </Link>
      </ContainerWraper>
      {width !== undefined && width >= 800 ? (
        <></>
      ) : (
        <ContainerWraper>
          <User />
          <Notification />
          <ThemeSwitcher />
        </ContainerWraper>
      )}
    </Container>
  );
};
