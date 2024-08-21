import { AiFillLike } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import defaultImage from "./../../assets/images/fallback.png";
import {
  saveBlogThunks,
  singleBlogThunk,
} from "./../../features/singleBlog/singleBlogSlice";
import Tag from "./../common/Tag";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function PostDetails({ id }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.singleBlog.error);
  const loading = useSelector((state) => state.singleBlog.loading);
  const blog = useSelector((state) => state.singleBlog.blog);

  useEffect(() => {
    dispatch(singleBlogThunk(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <h1 className="text-center text-4xl text-emerald-800 my-4 font-sans">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-4xl text-rose-800 my-4 font-sans">
        {error}
      </h1>
    );
  }

  function handleOnSave() {
    dispatch(saveBlogThunks([id, blog?.isSaved]));
  }

  return (
    <main className="post">
      <Image src={blog?.image} />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {blog?.title}
        </h1>
        <div className="tags flex gap-2 flex-wrap my-3" id="lws-singleTags">
          {blog?.tags?.map((tag) => (
            <Tag key={crypto.randomUUID()}>{tag}</Tag>
          ))}
        </div>
        <div className="btn-group">
          {/* handle like on button click */}
          <button
            className="like-btn flex flex-wrap gap-1 items-center"
            id="lws-singleLinks"
          >
            <AiFillLike /> {blog?.likes}
          </button>
          {/* handle save on button click */}
          {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
          <button
            className={`${
              blog?.isSaved ? "active" : ""
            } save-btn flex flex-wrap items-center gap-1`}
            id="lws-singleSavedBtn"
            onClick={handleOnSave}
          >
            {blog?.isSaved ? <FaBookmark /> : <FaRegBookmark />}
            Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{blog?.description}</p>
        </div>
      </div>
    </main>
  );
}

function Image({ src }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt="githum"
      className="w-full rounded-md"
      id="lws-megaThumb"
      onError={() => setImgSrc(defaultImage)}
    />
  );
}
