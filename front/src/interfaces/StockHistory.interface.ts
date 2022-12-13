import { Stock } from "./Stock.interface";

export interface StockHistory {
  name: string;
  prices: Stock[];
}
