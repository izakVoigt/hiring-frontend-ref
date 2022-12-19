import { useState } from "react";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";
import { Button, Input, InputWraper, Loading } from "@components";
import { useStockPrice } from "@hooks";
import { getStockGains, getStockHistory } from "@services";

export const DataProjectionSearch = () => {
  const stockContext = useStockPrice();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getStock = async () => {
    if (!stockContext.StockData.StockHistory) {
      return;
    }

    setIsLoading(true);

    const req = await getStockGains(stockContext.StockData.StockHistory.name, date, amount);

    const reqHistory = await getStockHistory(stockContext.StockData.StockHistory.name, date);

    setIsLoading(false);
    setAmount("");
    setDate("");

    if (typeof req === "string") {
      toast.error(req);
      return;
    }

    if (typeof reqHistory === "string") {
      toast.error(reqHistory);
      return;
    }

    stockContext.updateStockPrice({ StockHistory: stockContext.StockData.StockHistory, StockProjection: req, StockProjectionHistory: reqHistory });
  };

  return (
    <InputWraper>
      <Input type="date" placeholder="Informe uma data" onChange={(e) => setDate(e.target.value)} value={date} />
      <Input type="number" placeholder="Informe uma quantidade" onChange={(e) => setAmount(e.target.value)} value={amount} />
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
