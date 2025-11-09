import fetchPostsServer from "@/app/(example)/apis/fetchPosts.server";
import Posts from "./_components/Posts";
import { Suspense } from "react";

export default async function PostsPage() {
  const data = fetchPostsServer();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Posts promiseData={data} />
    </Suspense>
  )
}
