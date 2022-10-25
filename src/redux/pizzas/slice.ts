import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { IPizzasSliceState, PizzaItem, StatusPizzaSlice } from './types';

const initialState: IPizzasSliceState = {
   pizzasItems: [],  
   status: StatusPizzaSlice.LOADING,
};

const pizzasSlice = createSlice({
   name: "pizzas",
   initialState,
   reducers: {
      setItems(state, actions: PayloadAction<PizzaItem[]>) {
         state.pizzasItems = actions.payload;
      }
      
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPizzas.pending, (state, actions) => {
         state.pizzasItems = [];
         state.status = StatusPizzaSlice.LOADING;
      })
      
      builder.addCase(fetchPizzas.rejected, (state, actions) => {
         state.pizzasItems = [];
         state.status = StatusPizzaSlice.ERROR;
      })
      
      builder.addCase(fetchPizzas.fulfilled, (state, actions: PayloadAction<PizzaItem[]>) => {
         state.pizzasItems = actions.payload;
         state.status = StatusPizzaSlice.SUCCESS;
      })
   }
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;