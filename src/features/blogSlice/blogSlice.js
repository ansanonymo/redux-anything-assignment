import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./../../api/api";

const initialState = {
  blogs: [],
  error: null,
  loading: false,
};

export const blogsThunks = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(blogsThunks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blogsThunks.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(blogsThunks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.blogs = [];
      });
  },
});

export const blogReducer = blogSlice.reducer;
