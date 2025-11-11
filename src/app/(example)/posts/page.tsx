import fetchPostsServer from "@/app/(example)/apis/fetchPosts.server";
import Posts from "./_components/Posts";

export default async function PostsPage() {
  const data = fetchPostsServer();

  return (
    <Posts promiseData={data} />
  )
}
