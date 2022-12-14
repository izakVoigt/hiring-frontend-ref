import styled from "styled-components";

export const Container = styled.section`
  width: calc(100vw - 290px);
  margin-left: 290px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  @media (max-width: 800px) {
    width: calc(100vw - 80px);
    margin-left: 80px;
  }
`;

export const Title = styled.h2`
  margin: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: ${(props) => props.theme.colors.fontDefault};
  font-size: 18px;

  svg {
    fill: ${(props) => props.theme.colors.fontDefault};
  }
`;

export const DataWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const DataContainer = styled.div`
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

export const StockAdder = styled.div`
  width: 300px;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

export const InputWraper = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 180px;
  height: 26px;
  padding: 0 5px;
  border: none;
  border-radius: 13px;
  outline: none;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 26px;
  border: none;
  border-radius: 13px;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
  svg {
    fill: ${(props) => props.theme.colors.fontDefault};
  }
  svg:hover {
    fill: ${(props) => props.theme.colors.detail};
  }
`;

export const StockName = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.fontReverse};
  background-color: ${(props) => props.theme.colors.secundary};
  font-weight: bold;

  svg {
    fill: ${(props) => props.theme.colors.fontReverse};
  }
`;
