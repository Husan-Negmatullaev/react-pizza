import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalCost } from "../../utils/calcTotalCost";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartItem, ICartSliceState } from "./types";

const initialState: ICartSliceState = getCartFromLS();

const cartSlices = createSlice({
   name: "cart",
   initialState,
   reducers: {
      removeProducts(state, actions) {
         state.listItems = state.listItems.filter((obj) => obj.id !== actions.payload);
      },

      addProduct(state, actions: PayloadAction<CartItem>) {
         const itemFromPayload = actions.payload;

         const findItem = state.listItems.find((item) => {
            return item.id === itemFromPayload.id;
         })

         if (findItem) {
            findItem.count++;
         } else {
            state.listItems = [...state.listItems, {
               ...actions.payload,
               count: 1,
            }];
         }

         state.totalQuantity = calcTotalCost(state.listItems);
      },

      removeProduct(state, actions: PayloadAction<string>) {
         state.listItems = state.listItems.filter(item => {
            if (item.id === actions.payload) {
               state.totalQuantity -= item.price * item.count;
               return false;
            }
            return true;
         });
      },

      clearProducts(state) {
         state.listItems = [];
         state.totalQuantity = 0;
      },

      decrementItem(state, actions: PayloadAction<string>) {
         const findItem = state.listItems.find(obj => obj.id === actions.payload);

         if (findItem) {
            findItem.count--;
            state.totalQuantity -= findItem.price
         }
      }
   },
});

export const {
   addProduct,
   removeProducts,
   removeProduct,
   clearProducts,
   decrementItem
} = cartSlices.actions;

export default cartSlices.reducer;