import styled from "styled-components";

export const Container = styled.div`
  width: 326px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};

  @media (max-width: 800px) {
    width: 230px;
  }
  @media (max-width: 1000px) {
    width: 240px;
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 10px;

  @media (max-width: 800px) {
    height: 120px;
  }
  @media (max-width: 1000px) {
    height: 160px;
  }
`;

export const Title = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.fontDefault};
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

export const PercentageGreen = styled.strong`
  color: green;
`;

export const PercentageRed = styled.strong`
  color: red;
`;

export const Desc = styled.p`
  margin-top: 30px;
  color: ${(props) => props.theme.colors.fontText};
  font-size: 14px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;
