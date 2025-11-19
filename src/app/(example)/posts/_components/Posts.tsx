import PageWrapper from "../../_components/PageWrapper";
import DisplayTable from "@/components/table/DisplayTable";
import fetchPostsServer from "../../apis/fetchPosts.server"
import type { Column, Post } from "@/types";

export default function Posts() {
  const columns: Column<Post>[] = [
    { key: "userId", label: "ユーザーID" },
    { key: "title", label: "タイトル" },
  ];

  return (
    <PageWrapper pageTitle="投稿一覧" >
      <DisplayTable
        columns={columns}
        fetchData={fetchPostsServer}
      />
    </PageWrapper>
  )
}
