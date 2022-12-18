import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

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
    a {
      padding: 0 10px;
      justify-content: center;
    }
    p {
      display: none;
    }
  }
`;
