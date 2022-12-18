import { ReactNode, createContext, useCallback, useState } from "react";
import { IStockCompare, IStockCompareContext } from "@interfaces";

export const StockCompareContext = createContext<IStockCompareContext>({
  StockData: { StockCompare: undefined },
  updateStockCompare: () => {},
});

export const StockCompareContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IStockCompare>();

  const updateStockCompare = useCallback((stockData: IStockCompare) => {
    setData(stockData);
  }, []);

  return (
    <StockCompareContext.Provider
      value={{
        StockData: { StockCompare: data?.StockCompare },
        updateStockCompare,
      }}
    >
      {children}
    </StockCompareContext.Provider>
  );
};
