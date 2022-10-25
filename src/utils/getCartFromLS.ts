import { CartItem } from "../redux/cart/types";
import { calcTotalCost } from "./calcTotalCost";

export const getCartFromLS = () => {
   const data = localStorage.getItem("cart");
   const listItems = data ? JSON.parse(data) : [];
   const totalQuantity = calcTotalCost(listItems);

   return {
      totalQuantity,
      listItems: listItems as CartItem[],
   };
}