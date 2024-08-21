import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { relatedBlogThunk } from "../../features/relatedBlogSlice/relatedBlogSlice";

export default function RelatedPost({ id }) {
  const tags = useSelector((state) => state.singleBlog.blog?.tags);
  const error = useSelector((state) => state.relatedBlog.error);
  const loading = useSelector((state) => state.relatedBlog.loading);
  const blogs = useSelector((state) => state.relatedBlog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(relatedBlogThunk([tags, id]));
  }, [id, tags, dispatch]);

  let content;

  if (loading) {
    content = (
      <h1 className="text-center py-4 text-xl font-sans text-sky-800">
        Fetching Related Posts...
      </h1>
    );
  } else if (error) {
    content = (
      <h1 className="text-center py-4 text-xl font-sans text-rose-800">
        {error} :(
      </h1>
    );
  } else {
    content = blogs?.map((blog) => {
      return <Card key={blog?.id} blog={blog} />;
    });
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
