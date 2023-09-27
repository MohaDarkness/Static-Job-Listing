export const getPostsData = async () => {
  const res = await fetch("../data.json");
  return await res.json();
};
