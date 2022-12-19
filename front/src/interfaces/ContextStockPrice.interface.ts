import { StockHistory, StockGains } from "./index";

export interface IStockPrice {
  StockHistory?: StockHistory;
  StockProjection?: StockGains;
  StockProjectionHistory?: StockHistory;
}

export interface IStockPriceContext {
  StockData: IStockPrice;
  updateStockPrice: (stockData: IStockPrice) => void;
}
