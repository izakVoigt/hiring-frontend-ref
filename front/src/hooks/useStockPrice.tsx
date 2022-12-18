import { useContext } from "react";
import { StockPriceContext } from "@contexts";

export const useStockPriceContext = () => {
  const context = useContext(StockPriceContext);

  return context;
};
