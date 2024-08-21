import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "default",
  filter: "all",
};

const filterAndSortSlice = createSlice({
  name: "filterAndSort",
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.sort = action.payload;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterAndSortReducer = filterAndSortSlice.reducer;
export const { changeSortType, changeFilter } = filterAndSortSlice.actions;
