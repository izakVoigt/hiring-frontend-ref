import { DataDashboardCompare } from "@components";
import { useStockCompare } from "@hooks";

export const DataCompareDashboard = () => {
  const stockContext = useStockCompare();

  return <DataDashboardCompare data={stockContext.StockData.StockCompare} />;
};
