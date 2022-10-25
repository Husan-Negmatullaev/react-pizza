import { CartItem } from "../redux/cart/types";

export const calcTotalCost = (items: CartItem[]) => {
   return items.reduce((acc, item) => {
      return acc + (item.price * item.count);
   }, 0)
}