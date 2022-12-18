import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  width: 260px;
  height: calc(100vh - 20px);
  padding: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.fontReverse};
  background-color: ${(props) => props.theme.colors.secundary};

  @media (max-width: 800px) {
    width: 70px;
    height: calc(100vh - 10px);
    padding: 10px 5px;
    margin-right: 10px;
  }
`;
