import { ReactNode } from "react";
import { PageWraper } from "./styles";

export const PageContentWraper = ({ children }: { children: ReactNode }) => {
  return <PageWraper role="contentinfo">{children}</PageWraper>;
};
