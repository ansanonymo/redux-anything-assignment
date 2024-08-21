import { Link } from "react-router-dom";
import defaultImage from "./../../assets/images/fallback.png";
import Tag from "./../common/Tag";
import { useState } from "react";

export default function Card({ blog }) {
  return (
    <div className="card">
      <Link to={`/post/${blog?.id}`}>
        <Image imgSrc={blog?.image} />
      </Link>
      <div className="p-4">
        <Link
          to={`/post/${blog?.id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {blog?.title}
        </Link>
        <div className="my-2 flex flex-wrap gap-1 tags">
          {blog?.tags?.map((tag) => {
            return <Tag key={crypto.randomUUID()}>{tag}</Tag>;
          })}
        </div>
        <p>{blog?.createdAt}</p>
      </div>
    </div>
  );
}

function Image({ imgSrc }) {
  const [src, setSrc] = useState(imgSrc);

  return (
    <img
      src={src}
      onError={() => setSrc(defaultImage)}
      className="card-image"
      alt="img"
    />
  );
}
