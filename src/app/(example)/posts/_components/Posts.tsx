import { Suspense, use } from "react";
import { Post } from "../../apis/fetchPosts.server"
import PostList from "./PostList";
import PageWrapper from "../../_components/PageWrapper";
import Search from "./Search";

export default function Posts() {
  return (
    <PageWrapper pageTitle="投稿一覧" >
      <Search />

      <PostList />
    </PageWrapper>
  )
}
