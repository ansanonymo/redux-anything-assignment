export function createTagsQuery(tags = [], id) {
  const queryTags = tags.map((tag) => "tags_like=" + tag);
  const queryString = queryTags.join("&") + "&id_ne=" + id;

  return queryString;
}
