import { createTagsQuery } from "../utils/lib";

export async function getBlogs() {
  const response = await fetch("http://localhost:9000/blogs");

  const blogs = await response.json();

  return blogs;
}

export async function getSingleBlog(id) {
  const response = await fetch(`http://localhost:9000/blogs/${id}`);
  const blog = await response.json();
  return blog;
}

export async function getRelatedBlog(tags, id) {
  const queryString = createTagsQuery(tags, id);
  const url = "http://localhost:9000/blogs?" + queryString;
  const response = await fetch(url);
  const blogs = await response.json();

  return blogs;
}

export async function getAndSaveBlog([id, isSaved]) {
  const jsonString = JSON.stringify({
    id,
    isSaved: !isSaved,
  });

  const header = new Headers();
  header.append("Content-Type", "application/json");
  const response = await fetch("http://localhost:9000/blogs/" + id, {
    method: "PATCH",
    headers: header,
    body: jsonString,
  });

  const blog = response.json();
  return blog;
}
