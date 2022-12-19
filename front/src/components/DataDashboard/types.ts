import { StockHistory } from "@interfaces";

export interface IDataDashboardComponent {
  data: StockHistory;
  color: string;
  title: string;
  percentage: string;
  desc: string;
  dataKey: string;
}
