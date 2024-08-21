import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAndSaveBlog, getSingleBlog } from "../../api/api";

const initialState = {
  blog: null,
  error: null,
  loading: false,
};

export const singleBlogThunk = createAsyncThunk(
  "singleBlog/fetchSingleBlog",
  async (id) => {
    const blog = await getSingleBlog(id);
    return blog;
  }
);

export const saveBlogThunks = createAsyncThunk(
  "saveBlog/PatchBlog",
  async ([id, isSaved]) => {
    const blog = await getAndSaveBlog([id, isSaved]);

    return blog;
  }
);

const singleBlogSlice = createSlice({
  name: "singleBlog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(singleBlogThunk.pending, (state) => {
      state.error = null;
      state.loading = true;
    });

    builder.addCase(singleBlogThunk.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.blog = action.payload;
    });

    builder.addCase(singleBlogThunk.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.blog = null;
    });

    builder.addCase(saveBlogThunks.fulfilled, (state, action) => {
      state.blog.isSaved = action.payload.isSaved;
    });
  },
});

export const singleBlogReducer = singleBlogSlice.reducer;
