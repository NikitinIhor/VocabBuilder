import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Word } from "../dictionary/slice";
import type { store } from "../store";
import { showWordsByCategory } from "./ops";

export type RootState = ReturnType<typeof store.getState>;

interface FilterState {
  loading: boolean;
  error: string | null;
  word: string;
  category: string;
  words: Word[];
}

const initialState: FilterState = {
  loading: false,
  error: null,
  word: "",
  category: "",
  words: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setWord(state, action: PayloadAction<string>) {
      state.word = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
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
  extraReducers: (builder) => {
    builder
      .addCase(showWordsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showWordsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.words = action.payload.results;
      })
      .addCase(showWordsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "Something went wrong";
      });
  },
});

export const selectFilterWord = (state: RootState) => state.filter.word;
export const selectFilterCategory = (state: RootState) => state.filter.category;

export const selectFilterLoading = (state: RootState) => state.filter.loading;
export const selectFilterError = (state: RootState) => state.filter.error;

export const { setWord, setCategory, setLoading, setError, clearError } =
  filterSlice.actions;

export default filterSlice.reducer;
