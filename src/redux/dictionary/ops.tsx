import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { RootState } from "../store";

const URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = URL;

export interface Word {
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

interface WordResponse extends Word {
  owner: string;
  progress: number;
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

export const addNewWord = createAsyncThunk<
  WordResponse,
  Word,
  { rejectValue: string; state: RootState }
>("dictionary/addNewWord", async (newWord, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  try {
    const res = await axios.post("/words/create", newWord, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});
