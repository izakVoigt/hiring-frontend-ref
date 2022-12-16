import { useState } from "react";
import { toast } from "react-toastify";
import { ArrowDropDown, ArrowDropUp, Dashboard, Equalizer, Search, ShowChart } from "@mui/icons-material";
import { api } from "@services";
import { dateFormat, percentageChange } from "@utils";
import { StockGains, StockHistory } from "@interfaces";
import { DataComponent, DataDashboard, DataProjection } from "@components";
import { Header, Nav } from "@compounds";
import { Container, DataWraper, Title, Input, InputWraper, Button } from "./styles";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchAmount, setSearchAmount] = useState("");
  const [stockData, setStockData] = useState<StockHistory | null>(null);
  const [calcStockData, setCalcStockData] = useState<StockHistory | null>(null);
  const [calcData, setCalcData] = useState<StockGains | null>(null);

  const getStockData = async () => {
    if (search === "") {
      toast.error("Informe uma ação na pesquisa");
      return;
    }

    const from = dateFormat({ subAmount: 1, subUnitTime: "month" });
    const to = dateFormat({});

    setStockData(null);

    await api
      .get(`/stocks/${search}/history?from=${from}&to=$${to}`)
      .then((res) => {
        setStockData(res.data);
        setSearch("");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const getCalcData = async () => {
    if (searchDate === "") {
      toast.error("Informe uma data");
      return;
    }
    if (searchAmount === "") {
      toast.error("Informa a quantidade");
      return;
    }

    setCalcData(null);
    setCalcStockData(null);

    const to = dateFormat({});
    const from = dateFormat({ date: searchDate });

    await api
      .get(`/stocks/${stockData?.name}/history?from=${from}&to=$${to}`)
      .then((res) => {
        setCalcStockData(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });

    await api
      .get(`/stocks/${stockData?.name}/gains?purchasedAt=${from}&purchasedAmount=${searchAmount}`)
      .then((res) => {
        setCalcData(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <Nav />
      <Container>
        <Header>
          <InputWraper>
            <Input type="search" placeholder="Pesquisar Ação" onChange={(e) => setSearch(e.target.value)} value={search} />
            <Button onClick={getStockData}>
              <Search />
            </Button>
          </InputWraper>
        </Header>
        <Title>
          <Dashboard />
          DASHBOARD
        </Title>
        <Title>{stockData?.name.toUpperCase()}</Title>
        {stockData === null ? (
          <></>
        ) : (
          <>
            <DataWraper>
              <DataComponent
                svg={<ShowChart />}
                color="linear-gradient(#6666ff, #1919ff)"
                title="Valor"
                value={stockData?.prices[0].closing.toFixed(2)}
                percentage={percentageChange(stockData.prices[0].closing, stockData.prices.slice(-1)[0].closing)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
              />
              <DataComponent
                svg={<Equalizer />}
                color="linear-gradient(#8A2BE2, #4B0082)"
                title="Abertura"
                value={stockData?.prices[0].opening.toFixed(2)}
                percentage={percentageChange(stockData.prices[0].opening, stockData.prices.slice(-1)[0].opening)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
              />
              <DataComponent
                svg={<ArrowDropUp />}
                color="linear-gradient(#00ff00, #009900)"
                title="Máxima"
                value={stockData?.prices[0].high.toFixed(2)}
                percentage={percentageChange(stockData.prices[0].high, stockData.prices.slice(-1)[0].high)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
              />
              <DataComponent
                svg={<ArrowDropDown />}
                color="linear-gradient(#ff0000, #990000)"
                title="Mínima"
                value={stockData?.prices[0].low.toFixed(2)}
                percentage={percentageChange(stockData.prices[0].low, stockData.prices.slice(-1)[0].low)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
              />
            </DataWraper>
            <DataWraper>
              <DataDashboard
                data={stockData}
                color="linear-gradient(#6666ff, #1919ff)"
                title={`${parseInt(percentageChange(stockData.prices[0].closing, stockData.prices.slice(-1)[0].closing)) > 0 ? "Valorização" : "Desvalorização"}`}
                percentage={percentageChange(stockData.prices[0].closing, stockData.prices.slice(-1)[0].closing)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
                dataKey="closing"
              />
              <DataDashboard
                data={stockData}
                color="linear-gradient(#00ff00, #009900)"
                title="Máximas"
                percentage={percentageChange(stockData.prices[0].high, stockData.prices.slice(-1)[0].high)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
                dataKey="high"
              />
              <DataDashboard
                data={stockData}
                color="linear-gradient(#ff0000, #990000)"
                title="Mínimas"
                percentage={percentageChange(stockData.prices[0].low, stockData.prices.slice(-1)[0].low)}
                desc={`desde ${stockData.prices.slice(-1)[0].pricedAt}`}
                dataKey="low"
              />
            </DataWraper>
            <Title>
              <ShowChart />
              PROJEÇÃO DE GANHOS
            </Title>
            <DataWraper>
              <DataProjection data={calcStockData} calc={calcData} color="linear-gradient(#6666ff, #1919ff)">
                <InputWraper>
                  <Input type="date" placeholder="Informe uma data" onChange={(e) => setSearchDate(e.target.value)} value={searchDate} />
                  <Input type="number" placeholder="Informe uma quantidade" onChange={(e) => setSearchAmount(e.target.value)} value={searchAmount} />
                  <Button onClick={getCalcData}>
                    <Search />
                  </Button>
                </InputWraper>
              </DataProjection>
            </DataWraper>
          </>
        )}
      </Container>
    </>
  );
};
