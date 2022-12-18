import { DashboardWraper, DataDashboard } from "@components";
import { useStockPrice } from "@hooks";
import { percentageChange } from "@utils";

export const DataDashboardCompound = () => {
  const stockHistoryContext = useStockPrice();

  return (
    <DashboardWraper>
      {!stockHistoryContext.StockData.StockHistory ? (
        <></>
      ) : (
        <>
          <DataDashboard
            data={stockHistoryContext.StockData.StockHistory}
            color="linear-gradient(#6666ff, #1919ff)"
            title={`${
              parseInt(
                percentageChange(
                  stockHistoryContext.StockData.StockHistory.prices[0].closing,
                  stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].closing
                )
              ) > 0
                ? "Valorização"
                : "Desvalorização"
            }`}
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].closing,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].closing
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
            dataKey="closing"
          />
          <DataDashboard
            data={stockHistoryContext.StockData.StockHistory}
            color="linear-gradient(#00ff00, #009900)"
            title="Máximas"
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].high,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].high
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
            dataKey="high"
          />
          <DataDashboard
            data={stockHistoryContext.StockData.StockHistory}
            color="linear-gradient(#ff0000, #990000)"
            title="Mínimas"
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].low,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].low
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
            dataKey="low"
          />
        </>
      )}
    </DashboardWraper>
  );
};
