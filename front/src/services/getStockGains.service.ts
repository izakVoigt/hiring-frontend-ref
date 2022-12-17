import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./api.service";
import { dateFormat } from "@utils";
import { StockGains } from "@interfaces";

export const getStockGains: (name: string, date: string, amount: number) => Promise<StockGains> = async (
  name: string,
  date: string,
  amount: number
) => {
  const from = dateFormat({ date });

  try {
    const req = await api.get(`/stocks/${name}/gains?purchasedAt=${from}&purchasedAmount=${amount}`);

    return req.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
  }
};
