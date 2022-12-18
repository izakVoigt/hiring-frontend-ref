import { ArrowDropDown, ArrowDropUp, Equalizer, ShowChart } from "@mui/icons-material";
import { DashboardWraper, DataComponent } from "@components";
import { useStockPrice } from "@hooks";
import { percentageChange } from "@utils";

export const DataCompound = () => {
  const stockHistoryContext = useStockPrice();

  return (
    <DashboardWraper>
      {!stockHistoryContext.StockData.StockHistory ? (
        <></>
      ) : (
        <>
          <DataComponent
            svg={<ShowChart />}
            color="linear-gradient(#6666ff, #1919ff)"
            title="Valor"
            value={stockHistoryContext.StockData.StockHistory.prices[0].closing.toFixed(2)}
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].closing,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].closing
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
          />
          <DataComponent
            svg={<Equalizer />}
            color="linear-gradient(#8A2BE2, #4B0082)"
            title="Abertura"
            value={stockHistoryContext.StockData.StockHistory.prices[0].opening.toFixed(2)}
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].opening,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].opening
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
          />
          <DataComponent
            svg={<ArrowDropUp />}
            color="linear-gradient(#00ff00, #009900)"
            title="Máxima"
            value={stockHistoryContext.StockData.StockHistory.prices[0].high.toFixed(2)}
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].high,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].high
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
          />
          <DataComponent
            svg={<ArrowDropDown />}
            color="linear-gradient(#ff0000, #990000)"
            title="Mínima"
            value={stockHistoryContext.StockData.StockHistory.prices[0].low.toFixed(2)}
            percentage={percentageChange(
              stockHistoryContext.StockData.StockHistory.prices[0].low,
              stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].low
            )}
            desc={`desde ${stockHistoryContext.StockData.StockHistory.prices.slice(-1)[0].pricedAt}`}
          />
        </>
      )}
    </DashboardWraper>
  );
};
