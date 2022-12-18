import { StockLastPrice } from "./StockLastPrice.interface";

export interface IStockCompare {
  StockCompare?: StockLastPrice;
}

export interface IStockCompareContext {
  StockData: IStockCompare;
  updateStockCompare: (stockData: IStockCompare) => void;
}
