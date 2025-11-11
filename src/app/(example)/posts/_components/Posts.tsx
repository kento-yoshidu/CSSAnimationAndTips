import { Suspense, use } from "react";
import { Post } from "../../apis/fetchPosts.server"
import PostList from "./PostList";
import PageWrapper from "../../_components/PageWrapper";

type Props = {
  promiseData: Promise<Post[]>;
};

export default function Posts({
  promiseData,
}: Props) {
  const initialData = use(promiseData);

  return (
    <PageWrapper pageTitle="投稿一覧" >
      <PostList initialData={initialData} />
    </PageWrapper>
  )
}
