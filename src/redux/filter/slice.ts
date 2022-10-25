import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, Sort, SortTypeEnum } from "./types";

const initialState: IFilterSliceState = {
   categoryId: 0,
   currentPage: 1,
   searchQuery: "",
   sort: {
      label: "популярности (DESC)",
      sortType: SortTypeEnum.RATING_DESC
   }
};

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setCategoryId(state, actions: PayloadAction<number>) {
         state.categoryId = actions.payload;
      },
      setSort(state, actions: PayloadAction<Sort>) {
         state.sort = { ...actions.payload }
      },
      setCurrentPage(state, actions: PayloadAction<number>) {
         state.currentPage = actions.payload;
      },
      setSearchQuery(state, actions: PayloadAction<string>) {
         state.searchQuery = actions.payload;
      },
      setFilters(state, actions: PayloadAction<IFilterSliceState>) {
         state.sort = actions.payload.sort;
         state.currentPage = Number(actions.payload.currentPage);
         state.categoryId = Number(actions.payload.categoryId);
      }
   },
});

export const {
   setCategoryId,
   setSort,
   setCurrentPage,
   setSearchQuery,
   setFilters
} = filterSlice.actions;

export default filterSlice.reducer;