import styled from "styled-components";

export const Container = styled.button`
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
