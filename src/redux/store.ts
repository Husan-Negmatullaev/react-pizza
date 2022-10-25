import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import pizzas from './pizzas/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
   reducer: {
      filter,
      cart,
      pizzas
   },
});


export type RootState = ReturnType<typeof store.getState>;

type AppDisptachActions = typeof store.dispatch;

export const AppDisptach = () => useDispatch<AppDisptachActions>();