import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background-color: ${(props) => props.theme.colors.fontDefault};
  }
  &:checked + label:after {
    left: 39px;
    transform: translateX(-100%);
  }
`;

export const Label = styled.label`
  width: 40px;
  height: 20px;
  position: relative;
  display: block;
  background-color: ${(props) => props.theme.colors.fontDefault};
  border-radius: 30px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;

  &:after {
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    top: 1px;
    left: 1px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 14px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &,
  &:after {
    transition: 0.2s;
  }
`;
