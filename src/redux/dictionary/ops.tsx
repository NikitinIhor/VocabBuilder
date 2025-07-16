import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = URL;

export const getAllDictionary = createAsyncThunk(
  "/dictionary/getAll",
  async (data, thunkAPI) => {
    try {
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 409) {
        return thunkAPI.rejectWithValue("Such email already exists");
      }

      return thunkAPI.rejectWithValue(
        "Server error... please reload the page."
      );
    }
  }
);
