import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 800px) {
    gap: 40px;
    flex-wrap: wrap;
  }
`;
