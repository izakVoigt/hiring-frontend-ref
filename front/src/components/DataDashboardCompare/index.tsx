import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { IDataDashboardCompareComponent } from "./types";
import { Container, DashboardContainer } from "./styles";

export const DataDashboardCompare = ({ data }: IDataDashboardCompareComponent) => {
  return (
    <Container>
      <DashboardContainer>
        {!data ? (
          <></>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data.lastPrices} margin={{ top: 30, right: 30, bottom: 10, left: -10 }}>
              <XAxis stroke="#fff" dataKey="name" />
              <YAxis stroke="#fff" />
              <CartesianGrid stroke="#fff" />
              <Bar dataKey="lastPrice" fill="#fff" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </DashboardContainer>
    </Container>
  );
};
