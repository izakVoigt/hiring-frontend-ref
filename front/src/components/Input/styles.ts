import styled from "styled-components";

export const Container = styled.input`
  width: 200px;
  height: 26px;
  padding: 0 5px;
  border: none;
  border-radius: 13px;
  outline: none;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
