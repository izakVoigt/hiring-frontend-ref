import styled from "styled-components";

export const Container = styled.div`
  width: 1018px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

export const DataContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Data = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.fontDefault};
  font-size: 14px;
  text-align: left;
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;
