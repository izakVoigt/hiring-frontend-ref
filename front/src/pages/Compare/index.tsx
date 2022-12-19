import { CompareArrows } from "@mui/icons-material";
import { DataCompare, DataCompareDashboard, Header, Nav } from "@compounds";
import { DashboardWraper, PageContentWraper, Title } from "@components";

export const Compare = () => {
  return (
    <>
      <Nav />
      <PageContentWraper>
        <Header />
        <Title>
          <CompareArrows />
          COMPARAÇÃO DE AÇÕES
        </Title>
        <DashboardWraper>
          <DataCompare />
          <DataCompareDashboard />
        </DashboardWraper>
      </PageContentWraper>
    </>
  );
};
