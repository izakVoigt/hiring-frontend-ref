import { Link } from "react-router-dom";
import { CompareArrows, ShowChart } from "@mui/icons-material";
import { useWindowDimensions } from "@hooks";
import { Division, Logo, Notification, NavContainer, NavContainerWraper, ThemeSwitcher, User } from "@components";

export const Nav = () => {
  const { width } = useWindowDimensions();

  return (
    <NavContainer>
      <NavContainerWraper>
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
      </NavContainerWraper>
      {width !== undefined && width >= 800 ? (
        <></>
      ) : (
        <NavContainerWraper>
          <User />
          <Notification />
          <ThemeSwitcher />
        </NavContainerWraper>
      )}
    </NavContainer>
  );
};
