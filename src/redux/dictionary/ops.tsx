import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { RootState } from "../store";

const URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = URL;

export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner: string;
  progress: number;
}

export interface WordsResponse {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface NewWordInput {
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
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

export const addNewWord = createAsyncThunk<
  any,
  NewWordInput,
  { rejectValue: { status: number; message: string }; state: RootState }
>("dictionary/addNewWord", async (newWord, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue({
      status: 401,
      message: "No token found",
    });
  }

  try {
    const res = await axios.post("/words/create", newWord, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError;

    const status = err.response?.status || 500;
    const message =
      (err.response?.data as any)?.message ||
      err.message ||
      "Something went wrong... please reload the page.";

    return thunkAPI.rejectWithValue({ status, message });
  }
});
