import { ReactNode } from "react";

export interface IButtonComponent {
  onClick: () => any;
  children: ReactNode;
}
