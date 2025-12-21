import type { PostResponse } from "@/types";

export default async function fetchPostsServer(): Promise<PostResponse[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(baseUrl,
    {
      cache: "no-cache",
    }
  );

  return await res.json();
}
