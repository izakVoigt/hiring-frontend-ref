import axios from "axios";
import { api } from "./api.service";
import { dateFormat } from "@utils";
import { StockHistory } from "@interfaces";

export const getStockHistory: (stockName: string, date?: string) => Promise<StockHistory> = async (stockName: string, date?: string) => {
  if (!date) {
    const from = dateFormat({ subAmount: 1, subUnitTime: "month" });
    const to = dateFormat({});

    try {
      const req = await api.get(`/stocks/${stockName}/history?from=${from}&to=$${to}`);

      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data.message;
      }
    }
  }

  const from = dateFormat({ date });
  const to = dateFormat({});

  try {
    const req = await api.get(`/stocks/${stockName}/history?from=${from}&to=$${to}`);

    return req.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message;
    }
  }
};
