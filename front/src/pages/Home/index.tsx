import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { DataComponent } from "../../components";
import { Header, Nav } from "../../compound";
import { Container, DataWraper } from "./styles";

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

export const Home = () => {
  return (
    <>
      <Nav />
      <Container>
        <Header />
        <DataWraper>
          {data.map((item, key) => (
            <DataComponent svg={item.element} color={item.color} title={item.title} value={item.value} percentage={item.percentage} desc={item.desc} />
          ))}
        </DataWraper>
      </Container>
    </>
  );
};
