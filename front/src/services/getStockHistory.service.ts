import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./api.service";
import { dateFormat } from "@utils";
import { StockHistory } from "@interfaces";

export const getStockHistory: (stockName: string) => Promise<StockHistory> = async (stockName: string) => {
  const from = dateFormat({ subAmount: 1, subUnitTime: "month" });
  const to = dateFormat({});

  try {
    const req = await api.get(`/stocks/${stockName}/history?from=${from}&to=$${to}`);

    return req.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
  }
};
