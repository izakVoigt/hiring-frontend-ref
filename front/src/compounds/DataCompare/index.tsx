import { useState } from "react";
import { toast } from "react-toastify";
import { Add, Close, CompareArrows } from "@mui/icons-material";
import { Button, Input, InputWraper, Loading, StockAdder, StockListItem } from "@components";
import { useStockCompare } from "@hooks";
import { getStockCompare } from "@services";

export const DataCompare = () => {
  const stockContext = useStockCompare();
  const [search, setSearch] = useState("");
  const [stockList, setStockList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addItem = () => {
    if (search === "") {
      toast.error("Informe uma ação para adicionar");
      return;
    }
    const array = stockList;
    array.push(search);
    setStockList(array);
  };
  const removeItem = (index: number) => {
    setStockList(stockList.filter((o, i) => index !== i));
  };

  const getStockPrices = async () => {
    setIsLoading(true);

    const req = await getStockCompare(stockList);

    if (typeof req === "string") {
      toast.error(req);
      return;
    }

    setIsLoading(false);

    stockContext.updateStockCompare({ StockCompare: req });
  };

  return (
    <StockAdder>
      <InputWraper>
        <Input type="search" placeholder="Pesquisar ação" onChange={(e) => setSearch(e.target.value)} value={search} />
        <Button
          onClick={() => {
            addItem();
            setSearch("");
          }}
        >
          <Add />
        </Button>
        {isLoading ? (
          <Loading />
        ) : (
          <Button onClick={getStockPrices}>
            <CompareArrows />
          </Button>
        )}
      </InputWraper>
      {stockList.map((item, key) => (
        <StockListItem key={key}>
          {item.toUpperCase()}
          <Button onClick={() => removeItem(key)}>
            <Close />
          </Button>
        </StockListItem>
      ))}
    </StockAdder>
  );
};
