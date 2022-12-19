import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 10px;
  background: linear-gradient(#6666ff, #1919ff);

  @media (max-width: 800px) {
    height: 280px;
  }
`;
