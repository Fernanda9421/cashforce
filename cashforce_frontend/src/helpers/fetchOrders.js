import axios from "axios";
import { convertDate } from "./convertDate";
import { convertCurrency } from "./convertCurrency";
import { convertStatus } from "./convertStatus";

export async function fetchOrders(userId) {
  const ordersResponse = await axios.get(
    `http://localhost:3001/user/${userId.userId}`
  );
  const newOrders = ordersResponse.data.orders.map(
    ({ nNf, buyers, providers, emissionDate, value, orderStatusBuyer }) => [
      nNf,
      buyers["name"],
      providers["name"],
      convertDate(emissionDate),
      convertCurrency(value),
      convertStatus(orderStatusBuyer),
    ]
  );

  return newOrders;
}
