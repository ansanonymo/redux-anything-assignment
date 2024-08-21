import { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "../common/Tag";
import defaultImg from "./../../assets/images/fallback.png";

export default function SinglePost({ blog }) {
  const { id, title, image, isSaved, likes, tags, createdAt } = blog;

  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <Image image={image} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" />
            {likes}
          </p>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle">
          {" "}
          {title}{" "}
        </Link>
        <div className="lws-tags my-3 flex flex-wrap gap-y-2">
          {tags?.map((tag) => (
            <Tag key={crypto.randomUUID()}>{tag}</Tag>
          ))}
        </div>
        {/* Show this element if post is saved */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  );
}

const Image = ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <img
      src={imgSrc}
      className="lws-card-image"
      alt="blog image"
      onError={() => setImgSrc(defaultImg)}
    />
  );
};
