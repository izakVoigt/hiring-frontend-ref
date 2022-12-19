import { IStockAdderComponent } from "./types";
import { Container } from "./styles";

export const StockAdder = ({ children }: IStockAdderComponent) => {
  return <Container role="contentinfo">{children}</Container>;
};
