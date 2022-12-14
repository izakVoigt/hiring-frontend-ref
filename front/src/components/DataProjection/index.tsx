import { ReactNode } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { StockHistory, StockGains } from "../../interfaces";
import { useWindowDimensions } from "../../hooks";
import { Container, DashboardContainer, Title, Value, Data, DataContainer } from "./styles";

export const DataProjection = ({ data, calc, color, children }: { data: StockHistory | null; calc: StockGains | null; color: string; children: ReactNode }) => {
  const { width } = useWindowDimensions();

  if (data === null || calc === null) {
    return (
      <Container>
        <DashboardContainer style={{ background: color }}></DashboardContainer>
        {children}
        <DataContainer>
          <Data>
            <Title>Valor Atual</Title>
            <Value>--</Value>
          </Data>
          <Data>
            <Title>Valor na Data</Title>
            <Value>--</Value>
          </Data>
          <Data>
            <Title>Quantidade</Title>
            <Value>--</Value>
          </Data>
          <Data>
            <Title>Valorização</Title>
            <Value>--</Value>
          </Data>
        </DataContainer>
      </Container>
    );
  }
  return (
    <Container role="contentinfo">
      <DashboardContainer style={{ background: color }} role="figure">
        <ResponsiveContainer width="100%" height="100%">
          {width !== undefined && width >= 800 ? (
            <LineChart width={300} height={200} data={data.prices} margin={{ top: 30, bottom: 10, left: 10, right: 70 }}>
              <XAxis dataKey="pricedAt" stroke="#fff" />
              <YAxis stroke="#fff" />
              <CartesianGrid stroke="#cdcdcd" />
              <Tooltip />
              <Line type="monotone" dataKey="closing" stroke="#fff" />
            </LineChart>
          ) : (
            <LineChart width={300} height={200} data={data.prices} margin={{ top: 20, bottom: 0, left: -30, right: 20 }}>
              <XAxis dataKey="pricedAt" stroke="#fff" />
              <YAxis stroke="#fff" />
              <CartesianGrid stroke="#cdcdcd" />
              <Tooltip />
              <Line type="monotone" dataKey="closing" stroke="#fff" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </DashboardContainer>
      {children}
      <DataContainer role="textbox">
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
          <Value>{calc.capitalGains.toFixed(2)}%</Value>
        </Data>
      </DataContainer>
    </Container>
  );
};
