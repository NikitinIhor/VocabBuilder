import { createSlice } from "@reduxjs/toolkit";

interface Words {
  id: string;
}

interface DictionatyState {
  loading: boolean;
  error: string | null;
  dictionary: Words[];
}

const initialState: DictionatyState = {
  loading: false,
  error: null,
  dictionary: [],
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default dictionarySlice.reducer;
