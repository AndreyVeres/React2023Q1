import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  name: string;
  pageSize: number;
}

const initialState: IFilterState = {
  name: '',
  pageSize: 10,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
