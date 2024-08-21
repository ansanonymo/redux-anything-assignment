import PostsContainer from "../components/Home/PostsContainer";
import SortAndFilter from "../components/Home/SortAndFilter";

export default function HomePage() {
  return (
    <>
      <section className="wrapper">
        <SortAndFilter />
        {/* posts container  */}
        <PostsContainer />
        {/* posts container ends */}
      </section>
    </>
  );
}
