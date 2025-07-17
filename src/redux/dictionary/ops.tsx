import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = URL;

interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

interface WordsResponse {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export const getAllWords = createAsyncThunk<
  WordsResponse,
  void,
  { rejectValue: string }
>("dictionary/getAll", async (_, thunkAPI) => {
  try {
    const res = await axios.get<WordsResponse>("/words/all");

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});
