import styled from "styled-components";

export const Container = styled.section`
  width: calc(100vw - 290px);
  margin-left: 290px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: calc(100vw - 80px);
    margin-left: 80px;
  }
`;

export const DataWraper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    gap: 40px;
  }
`;
