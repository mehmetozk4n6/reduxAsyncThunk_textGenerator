import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParagraphs = createAsyncThunk(
  "paragraphs/getParagraphs",
  async (url) => {
    const res = await axios.get(url).then((response) => response.data);

    return res;
  }
);

export const paragraphsSlice = createSlice({
  name: "paragraphs",
  initialState: {
    status: "idle",
    items: [],
    includeHTML: true,
  },
  reducers: {
    changeHTML: (state, action) => {
      state.includeHTML = action.payload;
    },
  },
  extraReducers: {
    [fetchParagraphs.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchParagraphs.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetch.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectParagraphs = (state) => state.paragraphs.items;
export const { changeHTML } = paragraphsSlice.actions;
export default paragraphsSlice.reducer;
