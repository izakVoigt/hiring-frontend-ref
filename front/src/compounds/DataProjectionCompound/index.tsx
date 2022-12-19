import { DataProjectionSearch } from "../DataProjectionSearch";
import { DashboardWraper, DataProjection } from "@components";
import { useStockPrice } from "@hooks";

export const DataProjectionCompound = () => {
  const stockContext = useStockPrice();

  if (!stockContext.StockData.StockHistory) {
    return <></>;
  }

  return (
    <DashboardWraper>
      <DataProjection data={stockContext.StockData.StockProjectionHistory} calc={stockContext.StockData.StockProjection} color="linear-gradient(#6666ff, #1919ff)">
        <DataProjectionSearch />
      </DataProjection>
    </DashboardWraper>
  );
};
