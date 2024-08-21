import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./blogSlice/blogSlice";
import { filterAndSortReducer } from "./filterAndSortSlice/filterAndSortSlice";
import { singleBlogReducer } from "./singleBlog/singleBlogSlice";
import { relatedBlogReducer } from "./relatedBlogSlice/relatedBlogSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    filterAndSort: filterAndSortReducer,
    singleBlog: singleBlogReducer,
    relatedBlog: relatedBlogReducer,
  },
});

export default store;
