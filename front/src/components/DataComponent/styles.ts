import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 240px;
  height: 120px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};

  @media (max-width: 800px) {
    width: 200px;
    height: 110px;
  }
`;

export const SvgContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  svg {
    width: 80%;
    height: 80%;
    fill: ${(props) => props.theme.colors.fontReverse};
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.fontText};
  font-size: 14px;
  text-align: right;
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;

export const PercentageGreen = styled.strong`
  color: green;
`;

export const PercentageRed = styled.strong`
  color: red;
`;

export const Desc = styled.p`
  margin-top: 40px;
  color: ${(props) => props.theme.colors.fontText};
  font-size: 14px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;
