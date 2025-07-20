import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { addNewWord, getAllWords } from "./ops";

export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

interface Words {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

interface DictionatyState {
  loading: boolean;
  error: string | null;
  dictionary: Words | null;
}

const initialState: DictionatyState = {
  loading: false,
  error: null,
  dictionary: null,
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dictionary = action.payload;
      })
      .addCase(getAllWords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })
      .addCase(addNewWord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewWord.fulfilled, (state, action: PayloadAction<Word>) => {
        state.loading = false;
        state.error = null;
        if (state.dictionary?.results) {
          state.dictionary.results.push(action.payload);
        }
      })
      .addCase(addNewWord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export const selectLoading = (state: RootState) => state.dictionary.loading;
export const selectError = (state: RootState) => state.dictionary.error;
export const selectDictionary = (state: RootState) =>
  state.dictionary.dictionary;

export default dictionarySlice.reducer;
