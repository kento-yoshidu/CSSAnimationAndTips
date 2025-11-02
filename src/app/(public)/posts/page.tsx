import { fetchPosts } from "@/apis/fetchPosts";

export default async function PostPage() {
  const posts = await fetchPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {`id: ${post.id} / ${post.title}`}
        </li>
      ))}
    </ul>
  )
};
