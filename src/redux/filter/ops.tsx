import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { Word, WordsResponse } from "../dictionary/ops";
import type { RootState } from "./slice";

const URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = URL;

export const showWordsByCategory = createAsyncThunk<
  WordsResponse,
  string,
  { rejectValue: { status: number; message: string }; state: RootState }
>("filter/fetchWordsByCategory", async (categories, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue({
      status: 401,
      message: "No token found",
    });
  }

  try {
    const res = await axios.get<Word[]>(`/words`, {
      params: { categories },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return {
      results: res.data,
      totalPages: 1,
      page: 1,
      perPage: res.data.length,
    };
  } catch (error: any) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue({
      status: err.response?.status || 500,
      message: err.message,
    });
  }
});
