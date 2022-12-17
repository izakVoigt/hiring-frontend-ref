import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./api.service";
import { StockLastPrice } from "@interfaces";

export const getStockCompare: (list: string[]) => Promise<StockLastPrice> = async (list: string[]) => {
  try {
    const req = await api.get(
      `/stocks/${list[0]}/compare?${list.map((n, index) => `stocksToCompare[]=${n}`).join("&")}`
    );

    const data = req.data;
    data.lastPrices.shift();

    if (req.data.lenght < list.length) {
      toast.error("Não foi possível encontrar uma ou mais ações para comparar");
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
  }
};
