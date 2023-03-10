import { ReactNode, createContext, useCallback, useState } from "react";
import { IStockPrice, IStockPriceContext } from "@interfaces";

export const StockPriceContext = createContext<IStockPriceContext>({
  StockData: { StockHistory: undefined, StockProjection: undefined, StockProjectionHistory: undefined },
  updateStockPrice: () => {},
});

export const StockPriceContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IStockPrice>();

  const updateStockPrice = useCallback(
    (stockData: IStockPrice) => {
      setData(stockData);
    },
    [data]
  );

  return (
    <StockPriceContext.Provider
      value={{
        StockData: { StockHistory: data?.StockHistory, StockProjection: data?.StockProjection, StockProjectionHistory: data?.StockProjectionHistory },
        updateStockPrice,
      }}
    >
      {children}
    </StockPriceContext.Provider>
  );
};
