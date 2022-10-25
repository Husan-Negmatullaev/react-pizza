export type CartItem = {
   id: string;
   title: string;
   imageUrl: string;
   price: number;
   type: string;
   size: number;
   count: number;
}

export interface ICartSliceState {
   totalQuantity: number;
   listItems: CartItem[];
}