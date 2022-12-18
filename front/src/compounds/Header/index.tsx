import { useWindowDimensions } from "@hooks";
import { HeaderContainer, Notification, ThemeSwitcher, User } from "@components";
import { IHeaderCompound } from "./types";

export const Header = ({ children }: IHeaderCompound) => {
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};
