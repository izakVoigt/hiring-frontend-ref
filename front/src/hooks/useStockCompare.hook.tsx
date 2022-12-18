import { useContext } from "react";
import { StockCompareContext } from "@contexts";

export const useStockCompare = () => {
  const context = useContext(StockCompareContext);

  return context;
};
