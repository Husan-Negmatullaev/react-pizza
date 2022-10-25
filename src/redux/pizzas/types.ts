export enum StatusPizzaSlice {
   LOADING = "loading",
   ERROR = "error",
   SUCCESS = "success",
}

export type FetchPizzasArgs = {
   category: string;
   sortBy: string;
   order: string;
   search: string;
   currentPage: string;
}

export type PizzaItem = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
}

export interface IPizzasSliceState {
   pizzasItems: PizzaItem[];
   status: "loading" | "success" | "error";
}