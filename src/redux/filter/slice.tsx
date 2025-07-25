import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;

interface FilterState {
  loading: boolean;
  error: string | null;
  word: string;
}

const initialState: FilterState = {
  loading: false,
  error: null,
  word: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setWord(state, action: PayloadAction<string>) {
      state.word = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const selectFilterWord = (state: RootState) => state.filter.word;
export const selectFilterLoading = (state: RootState) => state.filter.loading;
export const selectFilterError = (state: RootState) => state.filter.error;

export const { setWord, setLoading, setError, clearError } =
  filterSlice.actions;

export default filterSlice.reducer;
