import { Container } from "./styles";
import { IInputComponent } from "./types";

export const Input = ({ type, placeholder, onChange, value }: IInputComponent) => {
  return <Container type={type} placeholder={placeholder} onChange={onChange} value={value} role="contentinfo" />;
};
