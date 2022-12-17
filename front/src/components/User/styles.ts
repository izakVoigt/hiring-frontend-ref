import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
  }
  svg:hover {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.detail};
  }
  @media (max-width: 800px) {
    padding: 10px 0;
  }
`;
