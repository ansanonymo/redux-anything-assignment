import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlog } from "../../api/api";

const initialState = {
  error: null,
  loading: false,
  blogs: [],
};

export const relatedBlogThunk = createAsyncThunk(
  "relatedBlog/fetchRelatedBlog",
  async ([tags, id]) => {
    const blogs = await getRelatedBlog(tags, id);

    return blogs;
  }
);

const relatedBlogSlice = createSlice({
  name: "relatedBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatedBlogThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(relatedBlogThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blogs = action.payload;
      })
      .addCase(relatedBlogThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        state.blogs = [];
      });
  },
});

export const relatedBlogReducer = relatedBlogSlice.reducer;
