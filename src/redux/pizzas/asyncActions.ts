import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasArgs, PizzaItem } from './types';

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchPizzasArgs>(
   "pizzas/fetchPizzasStatus", 
   async (options) => {
      const {
         category,
         sortBy,
         order,
         search,
         currentPage
      } = options;
      const { data } = await axios.get<PizzaItem[]>(
         `https://6327376fba4a9c4753333f88.mockapi.io/pizzas?&page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )

      return data;
   }
);