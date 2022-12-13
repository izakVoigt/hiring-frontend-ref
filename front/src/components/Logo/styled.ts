import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  font-weight: bold;

  svg {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 800px) {
    padding: 5px 10px;

    p {
      display: none;
    }
  }
`;
