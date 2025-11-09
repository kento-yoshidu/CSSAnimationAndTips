export type Post = {
  id: number;
  title: string;
};

export default async function fetchPostsServer() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  let baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-cache",
    }
  );

  return await res.json();
}
