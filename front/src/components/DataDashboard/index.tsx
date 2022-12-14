import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { StockHistory } from "../../interfaces";
import { Container, DashboardContainer, Title, PercentageGreen, PercentageRed, Desc } from "./styles";

export const DataDashboard = ({
  data,
  color,
  title,
  percentage,
  desc,
  dataKey,
}: {
  data: StockHistory;
  color: string;
  title: string;
  percentage: string;
  desc: string;
  dataKey: string;
}) => {
  return (
    <Container>
      <DashboardContainer style={{ background: color }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={200} data={data.prices} margin={{ top: 30, bottom: 10, left: 10, right: 70 }}>
            <XAxis dataKey="pricedAt" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke="#fff" />
          </LineChart>
        </ResponsiveContainer>
      </DashboardContainer>
      <Title>{title}</Title>
      <Desc>
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
