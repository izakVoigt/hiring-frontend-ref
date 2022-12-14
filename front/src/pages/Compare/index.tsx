import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Header, Nav } from "../../compound";
import { Container, Title, DataWraper, DataContainer, DashboardContainer, StockAdder, StockName, InputWraper, Input, Button } from "./styles";
import { toast } from "react-toastify";
import { StockLastPrice } from "../../interfaces";
import { api } from "../../services";

export const Compare = () => {
  const [search, setSearch] = useState("");
  const [stockList, setStockList] = useState<string[]>([]);
  const [stockData, setStockData] = useState<StockLastPrice>({ lastPrices: [] });

  const addItem = (item: string) => {
    if (search === "") {
      toast.error("Informe uma ação para adicionar");
      return;
    }
    const array = stockList;
    array.push(item);
    setStockList(array);
  };
  const removeItem = (index: number) => {
    setStockList(stockList.filter((o, i) => index !== i));
  };

  const getPrices = async () => {
    if (stockList.length <= 1) {
      toast.info("Selecione uma ou mais ações para comparar");
      return;
    }

    setStockData({ lastPrices: [] });

    await api
      .get(`/stocks/${stockList[0]}/compare?${stockList.map((n, index) => `stocksToCompare[]=${n}`).join("&")}`)
      .then((res) => {
        const data: StockLastPrice = res.data;
        data.lastPrices.shift();
        setStockData(data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <Nav />
      <Container>
        <Header />
        <Title>
          <CompareArrowsIcon />
          COMPARAÇÃO DE AÇÕES
        </Title>
        <DataWraper>
          <StockAdder>
            <InputWraper>
              <Input type="search" placeholder="Pesquisar ação" onChange={(e) => setSearch(e.target.value)} value={search} />
              <Button
                onClick={() => {
                  addItem(search);
                  setSearch("");
                }}
              >
                <AddIcon />
              </Button>
              <Button onClick={getPrices}>
                <CompareArrowsIcon />
              </Button>
            </InputWraper>
            {stockList.map((item, key) => (
              <StockName key={key}>
                {item.toUpperCase()}
                <Button onClick={() => removeItem(key)}>
                  <CloseIcon />
                </Button>
              </StockName>
            ))}
          </StockAdder>
          <DataContainer>
            <DashboardContainer>
              {stockData.lastPrices.length === 0 ? (
                <></>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={150} height={40} data={stockData.lastPrices} margin={{ top: 30, right: 30, bottom: 10, left: -10 }}>
                    <XAxis stroke="#fff" dataKey="name" />
                    <YAxis stroke="#fff" />
                    <CartesianGrid stroke="#fff" />
                    <Bar dataKey="lastPrice" fill="#fff" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </DashboardContainer>
          </DataContainer>
        </DataWraper>
      </Container>
    </>
  );
};
