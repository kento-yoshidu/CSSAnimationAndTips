import fetchPostsServer from "@/app/(example)/apis/fetchPosts.server";
import PostList from "../_components/PostList";

export default async function PostsPage() {
  const data = await fetchPostsServer();

  return (
    <>
      <h1>投稿一覧</h1>

      <PostList postList={data} />
    </>
  )
}
