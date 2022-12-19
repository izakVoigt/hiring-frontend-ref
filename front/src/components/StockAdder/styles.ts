import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
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
