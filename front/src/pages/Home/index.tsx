import { Dashboard, ShowChart } from "@mui/icons-material";
import { PageContentWraper, Title } from "@components";
import {
  DataCompound,
  DataDashboardCompound,
  DataProjectionCompound,
  Header,
  HeaderSearchStock,
  Nav,
} from "@compounds";
import { useStockPrice } from "@hooks";

export const Home = () => {
  const stockHistoryContext = useStockPrice();

  return (
    <>
      <Nav />
      <PageContentWraper>
        <Header>
          <HeaderSearchStock />
        </Header>
        <Title>
          <Dashboard />
          DASHBOARD
        </Title>
        <Title>{stockHistoryContext.StockData.StockHistory?.name.toUpperCase()}</Title>
        {stockHistoryContext.StockData.StockHistory ? (
          <>
            <DataCompound />
            <DataDashboardCompound />
            <Title>
              <ShowChart />
              PROJEÇÃO DE GANHOS
            </Title>
            <DataProjectionCompound />
          </>
        ) : (
          <></>
        )}
      </PageContentWraper>
    </>
  );
};
