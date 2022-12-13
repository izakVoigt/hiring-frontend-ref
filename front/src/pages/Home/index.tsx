import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { DataComponent } from "../../components";
import { DataDashboard } from "../../components/DataDashboard";
import { Header, Nav } from "../../compound";
import { Container, DataWraper, Title } from "./styles";

const data = [
  {
    element: <ShowChartIcon />,
    color: "linear-gradient(#6666ff, #1919ff)",
    title: "Valor",
    value: 16.32,
    percentage: -3.24,
    desc: "desde 01/01/2022",
  },
  {
    element: <EqualizerIcon />,
    color: "linear-gradient(#8A2BE2, #4B0082)",
    title: "Volume",
    value: 6904,
    percentage: 2.42,
    desc: "desde 01/01/2022",
  },
  {
    element: <ArrowDropUpIcon />,
    color: "linear-gradient(#00ff00, #009900)",
    title: "Média das Máximas",
    value: 18.32,
    percentage: -1.02,
    desc: "desde 01/01/2022",
  },
  {
    element: <ArrowDropDownIcon />,
    color: "linear-gradient(#ff0000, #990000)",
    title: "Média das Mínimas",
    value: 18.32,
    percentage: 1.02,
    desc: "desde 01/01/2022",
  },
];

const dataDash = [
  {
    data: {
      name: "Vale",
      prices: [
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
      ],
    },
    color: "#00ff00",
    title: "Resultado",
    percentage: 2.18,
    desc: "desde 01/12/2022",
  },
  {
    data: {
      name: "Vale",
      prices: [
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
      ],
    },
    color: "#00ff00",
    title: "Resultado",
    percentage: 2.18,
    desc: "desde 01/12/2022",
  },
  {
    data: {
      name: "Vale",
      prices: [
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
        { opening: 32, low: 30, high: 34, closing: 32, pricedAt: "2022-12-12", volume: 33456 },
      ],
    },
    color: "#00ff00",
    title: "Resultado",
    percentage: 2.18,
    desc: "desde 01/12/2022",
  },
];

export const Home = () => {
  return (
    <>
      <Nav />
      <Container>
        <Header />
        <Title>
          <DashboardIcon />
          DASHBOARD
        </Title>
        <DataWraper>
          {data.map((item, key) => (
            <DataComponent key={key} svg={item.element} color={item.color} title={item.title} value={item.value} percentage={item.percentage} desc={item.desc} />
          ))}
        </DataWraper>
        <DataWraper>
          {dataDash.map((item, key) => (
            <DataDashboard key={key} data={item.data} color={item.color} title={item.title} percentage={item.percentage} desc={item.desc} />
          ))}
        </DataWraper>
        <Title>
          <ShowChartIcon />
          PROJEÇÃO DE GANHOS
        </Title>
      </Container>
    </>
  );
};
