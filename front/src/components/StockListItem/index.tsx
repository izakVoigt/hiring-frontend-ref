import { IStockListItemComponent } from "./types";
import { Container } from "./styles";

export const StockListItem = ({ children }: IStockListItemComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
