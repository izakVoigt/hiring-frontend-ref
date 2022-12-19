import { useState } from "react";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";
import { useStockPrice } from "@hooks";
import { getStockHistory } from "@services";
import { Button, Input, InputWraper, Loading } from "@components";

export const HeaderSearchStock = () => {
  const stockContext = useStockPrice();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getStock = async () => {
    setIsLoading(true);

    const req = await getStockHistory(search);

    setIsLoading(false);
    setSearch("");

    if (typeof req === "string") {
      toast.error(req);
      return;
    }

    stockContext.updateStockPrice({ StockHistory: req, StockProjection: undefined });
  };

  return (
    <InputWraper>
      <Input type="search" placeholder="Pesquisar ação" onChange={(e) => setSearch(e.target.value)} value={search} />
      {isLoading ? (
        <Loading />
      ) : (
        <Button onClick={getStock}>
          <Search />
        </Button>
      )}
    </InputWraper>
  );
};
