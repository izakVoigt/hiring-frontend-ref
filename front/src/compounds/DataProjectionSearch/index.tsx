import { useState } from "react";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";
import { Button, Input, InputWraper } from "@components";
import { useStockPrice } from "@hooks";
import { getStockGains } from "@services";

export const DataProjectionSearch = () => {
  const stockContext = useStockPrice();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const getStock = async () => {
    if (!stockContext.StockData.StockHistory) {
      return;
    }

    const req = await getStockGains(stockContext.StockData.StockHistory.name, date, amount);

    if (typeof req === "string") {
      toast.error(req);
      return;
    }

    stockContext.updateStockPrice({ StockHistory: stockContext.StockData.StockHistory, StockProjection: req });
  };

  return (
    <InputWraper>
      <Input type="date" placeholder="Informe uma data" onChange={(e) => setDate(e.target.value)} value={date} />
      <Input
        type="number"
        placeholder="Informe uma quantidade"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <Button onClick={getStock}>
        <Search />
      </Button>
    </InputWraper>
  );
};
