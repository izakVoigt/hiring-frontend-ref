import styled from "styled-components";

export const Container = styled.div`
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
