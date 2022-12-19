import { useState } from "react";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";
import { useStockPrice } from "@hooks";
import { getStockHistory } from "@services";
import { Button, Input, InputWraper } from "@components";

export const HeaderSearchStock = () => {
  const stockContext = useStockPrice();
  const [search, setSearch] = useState("");

  const getStock = async () => {
    const req = await getStockHistory(search);

    if (typeof req === "string") {
      toast.error(req);
      return;
    }

    setSearch("");
    stockContext.updateStockPrice({ StockHistory: req, StockProjection: undefined });
  };

  return (
    <InputWraper>
      <Input type="search" placeholder="Pesquisar ação" onChange={(e) => setSearch(e.target.value)} value={search} />
      <Button onClick={getStock}>
        <Search />
      </Button>
    </InputWraper>
  );
};
