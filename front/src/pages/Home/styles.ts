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

export const DataWraper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    gap: 40px;
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

export const InputWraper = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  &[type="search"] {
    width: 260px;
    height: 26px;
    padding: 0 5px;
    border: none;
    border-radius: 13px;
    outline: none;

    @media (max-width: 800px) {
      width: 230px;
    }
  }
  &[type="date"],
  &[type="number"] {
    width: 240px;
    height: 26px;
    padding: 0 5px;
    border: none;
    border-radius: 13px;
    outline: none;

    @media (max-width: 800px) {
      width: 100px;
    }
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
