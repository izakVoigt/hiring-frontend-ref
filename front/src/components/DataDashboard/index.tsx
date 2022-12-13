import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { StockHistory } from "../../interfaces";
import { Container, DashboardContainer, Title, PercentageGreen, PercentageRed, Desc } from "./styles";

export const DataDashboard = ({
  data,
  color,
  title,
  percentage,
  desc,
}: {
  data: StockHistory;
  color: string;
  title: string;
  percentage: number;
  desc: string;
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
      <Title>{title}</Title>
      <Desc>
        {percentage > 0 ? (
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
