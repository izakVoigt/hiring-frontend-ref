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

export const Teste = styled.div`
  height: 3000px;
`;
