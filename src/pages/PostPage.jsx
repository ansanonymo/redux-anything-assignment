import { useParams } from "react-router-dom";
import BackButton from "../components/Post/BackButton";
import PostDetails from "../components/Post/PostDetails";
import RelatedPost from "../components/Post/RelatedPost";

export default function PostPage() {
  const { id } = useParams();

  return (
    <>
      <BackButton />
      <section className="post-page-container">
        <PostDetails id={id} />
        <RelatedPost id={id} />
      </section>
    </>
  );
}
