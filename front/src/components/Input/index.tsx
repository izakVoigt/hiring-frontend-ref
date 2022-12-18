import { Container } from "./styles";
import { IInputComponent } from "./types";

export const Input = ({ type, placeholder, onChange, value, width }: IInputComponent) => {
  return (
    <Container
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{ width }}
      role="contentinfo"
    />
  );
};
