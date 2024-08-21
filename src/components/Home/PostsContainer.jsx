import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogsThunks } from "../../features/blogSlice/blogSlice";
import SinglePost from "./SinglePost";

export default function PostsContainer() {
  const error = useSelector((state) => state.blog.error);
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  const sort = useSelector((state) => state.filterAndSort.sort);
  const filter = useSelector((state) => state.filterAndSort.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogsThunks());
  }, [dispatch]);

  let content;

  if (error) {
    content = (
      <h1 className="text-rose-700 text-3xl text-center my-6 font-sans w-full">
        There is a error to fetching data from server.
      </h1>
    );
  } else if (loading) {
    content = (
      <h1 className="text-emerald-700 text-3xl text-center my-6 font-sans w-full">
        Fetching Data....
      </h1>
    );
  } else {
    let filteredBlogs = [...blogs];

    // if user sorted the blogs with most_liked
    if (sort === "most_liked") {
      filteredBlogs?.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    // if user sorted the blogs with date
    if (sort === "newest") {
      filteredBlogs?.sort((a, b) => {
        return new Date(b?.createdAt) - new Date(a?.createdAt);
      });
    }

    if (filter == "saved") {
      filteredBlogs = filteredBlogs.filter((blog) => blog?.isSaved);
    }

    content = filteredBlogs?.map((blog) => {
      return <SinglePost key={blog?.id} blog={blog} />;
    });
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
