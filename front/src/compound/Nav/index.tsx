import { Link } from "react-router-dom";
import { useWindowDimensions } from "../../hooks";
import { Logo, Notification, ThemeSwitcher, User } from "../../components";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Container, ContainerWraper, Division } from "./styles";

export const Nav = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <ContainerWraper>
        <Logo />
        <Division />
        <Link to="/">
          <ShowChartIcon />
          <p>Ações</p>
        </Link>
        <Link to="/comparacao">
          <CompareArrowsIcon />
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
