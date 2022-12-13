import styled from "styled-components";

export const Container = styled.section`
  width: calc(100vw - 340px);
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: calc(100vw - 80px);
  }
`;
