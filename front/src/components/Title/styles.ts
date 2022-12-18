import styled from "styled-components";

export const Container = styled.h2`
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
