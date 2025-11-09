import { Suspense, use } from "react";
import { Post } from "../../apis/fetchPosts.server"
import PostList from "./PostList";

type Props = {
  promiseData: Promise<Post[]>;
};

export default function Posts({
  promiseData,
}: Props) {
  const initialData = use(promiseData);

  return (
    <>
      <h1>PostList</h1>

      <PostList initialData={initialData} />
    </>
  )
}
