type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "force-cache",
      next: {
        tags: ["posts"],
      },
    },
  );

  if (!res.ok) {
    console.error("エラー");
  }

  return await res.json();
}
