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

  a {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    border-radius: 10px;
    text-decoration: none;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.fontReverse};
  }
  a svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colors.fontReverse};
  }
  @media (max-width: 800px) {
    width: 70px;
    height: calc(100vh - 10px);
    padding: 10px 5px;
    margin-right: 10px;

    a {
      padding: 0 10px;
      justify-content: center;
    }
    p {
      display: none;
    }
  }
`;

export const ContainerWraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
    fill: ${(props) => props.theme.colors.fontReverse};
  }
`;

export const Division = styled.hr`
  width: 80%;
  margin: 10px;
`;
