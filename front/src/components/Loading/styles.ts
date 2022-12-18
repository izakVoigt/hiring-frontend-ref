import styled from "styled-components";

export const Container = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.colors.fontDefault};
  border-top: 2px solid ${(props) => props.theme.colors.fontReverse};
  border-radius: 50%;
  animation: rotation 0.9s infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
