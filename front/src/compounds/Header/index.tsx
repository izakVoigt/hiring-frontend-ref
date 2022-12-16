import { ReactNode } from "react";
import { useWindowDimensions } from "@hooks";
import { Notification, ThemeSwitcher, User } from "@components";
import { Container } from "./styles";

export const Header = ({ children }: { children?: ReactNode }) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {width !== undefined && width >= 800 ? (
        <>
          {children}
          <ThemeSwitcher />
          <Notification />
          <User />
        </>
      ) : (
        <>{children}</>
      )}
    </Container>
  );
};
