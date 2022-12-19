import { ReactNode } from "react";
import { StockGains, StockHistory } from "@interfaces";

export interface IDataProjectionComponent {
  data?: StockHistory;
  calc?: StockGains;
  color: string;
  children: ReactNode;
}
