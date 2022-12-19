import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useWindowDimensions } from "@hooks";
import { IDataDashboardComponent } from "./types";
import { Container, DashboardContainer, Title, PercentageGreen, PercentageRed, Desc } from "./styles";

export const DataDashboard = ({ data, color, title, percentage, desc, dataKey }: IDataDashboardComponent) => {
  const { width } = useWindowDimensions();

  return (
    <Container role="contentinfo">
      <DashboardContainer style={{ background: color }} role="figure">
        <ResponsiveContainer width="100%" height="100%">
          {width !== undefined && width >= 800 ? (
            <LineChart width={300} height={200} data={data.prices} margin={{ top: 30, bottom: 10, left: 10, right: 70 }}>
              <XAxis dataKey="pricedAt" stroke="#fff" />
              <YAxis stroke="#fff" />
              <CartesianGrid stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#fff" />
            </LineChart>
          ) : (
            <LineChart width={300} height={200} data={data.prices} margin={{ top: 20, bottom: 0, left: -30, right: 20 }}>
              <XAxis dataKey="pricedAt" stroke="#fff" />
              <YAxis stroke="#fff" />
              <CartesianGrid stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#fff" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </DashboardContainer>
      <Title>{title}</Title>
      <Desc role="textbox">
        {parseInt(percentage) > 0 ? (
          <>
            <PercentageGreen>+{percentage}% </PercentageGreen>
            {desc}
          </>
        ) : (
          <>
            <PercentageRed>{percentage}% </PercentageRed>
            {desc}
          </>
        )}
      </Desc>
    </Container>
  );
};
