import { RootState } from "../store";

export const selectCartItems = (state: RootState) => state.cart;
export const selectPizzaItemById = (id: string) => (state: RootState) => state.cart.listItems.find(item => item.id === id);