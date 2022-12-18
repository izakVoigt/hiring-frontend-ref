export interface IInputComponent {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  value: string | number;
  width: number;
}
