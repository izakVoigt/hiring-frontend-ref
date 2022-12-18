export interface IInputComponent {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: () => any;
  value: string | number;
  width: number;
}
