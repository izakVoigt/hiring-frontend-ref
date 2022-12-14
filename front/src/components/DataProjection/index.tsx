import { ReactNode } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { StockHistory, StockGains } from "../../interfaces";
import { Container, DashboardContainer, Title, Value, Data, DataContainer } from "./styles";

export const DataProjection = ({
  data,
  calc,
  color,
  children,
}: {
  data: StockHistory;
  calc: StockGains;
  color: string;
  children: ReactNode;
}) => {
  return (
    <Container>
      <DashboardContainer style={{ background: color }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={200} data={data.prices} margin={{ top: 30, bottom: 10, left: 10, right: 70 }}>
            <XAxis dataKey="pricedAt" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="closing" stroke="#fff" />
          </LineChart>
        </ResponsiveContainer>
      </DashboardContainer>
      {children}
      <DataContainer>
        <Data>
          <Title>Valor Atual</Title>
          <Value>{calc.lastPrice}</Value>
        </Data>
        <Data>
          <Title>Valor na Data</Title>
          <Value>{calc.priceAtDate}</Value>
        </Data>
        <Data>
          <Title>Quantidade</Title>
          <Value>{calc.purchasedAmount}</Value>
        </Data>
        <Data>
          <Title>{calc.capitalGains > 0 ? "Valorização" : "Desvalorização"}</Title>
          <Value>{calc.capitalGains}%</Value>
        </Data>
      </DataContainer>
    </Container>
  );
};
