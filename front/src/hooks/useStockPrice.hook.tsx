import { useContext } from "react";
import { StockPriceContext } from "@contexts";

export const useStockPrice = () => {
  const context = useContext(StockPriceContext);

  return context;
};
