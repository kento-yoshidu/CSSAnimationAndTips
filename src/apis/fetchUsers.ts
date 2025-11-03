type User = {
  id: string;
  name: string;
  email: string;
};

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "force-cache",
      next: {
        tags: ["users"],
      } },
  );

  if (!res.ok) {
    console.error("エラー");
  }

  return await res.json();
};
