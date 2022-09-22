import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: 0,
   currentPage: 1,
   searchQuery: "",
   sort: {
      label: 'популярности (DESC)',
      sortType: 'rating'
   }
};

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setCategoryId(state, actions) {
         state.categoryId = actions.payload;
      },
      setSort(state, actions) {
         state.sort = { ...actions.payload }
      },
      setCurrentPage(state, actions) {
         state.currentPage = actions.payload;
      },
      setSearchQuery(state, actions) {
         state.searchQuery = actions.payload;
      }
   },
});

export const {
   setCategoryId,
   setSort,
   setCurrentPage,
   setSearchQuery
} = filterSlice.actions;

export default filterSlice.reducer;