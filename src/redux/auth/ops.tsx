import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (newUser: RegisterValues, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", newUser);

      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
