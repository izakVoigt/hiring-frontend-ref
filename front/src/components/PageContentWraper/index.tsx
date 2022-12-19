import { IPageContentWraper } from "./types";
import { PageWraper } from "./styles";

export const PageContentWraper = ({ children }: IPageContentWraper) => {
  return <PageWraper role="contentinfo">{children}</PageWraper>;
};
