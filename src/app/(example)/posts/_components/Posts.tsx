import { Suspense, use } from "react";
import fetchPostsServer, { Post } from "../../apis/fetchPosts.server"
import PostList from "./PostList";
import PageWrapper from "../../_components/PageWrapper";
import Search from "./Search";
import AsyncTableBody from "@/components/ui/table/DisplayTable";
import TableLayout from "@/components/ui/table/TableLayout";
import StaticTable from "@/components/ui/table/StaticTable";

export default function Posts() {
  const columns = [
    { key: "userId", label: "ユーザーID" },
    { key: "title", label: "タイトル" },
    { key: "createdAt", label: "作成日" },
  ];

  return (
    <PageWrapper pageTitle="投稿一覧" >
      <StaticTable
        columns={columns}
        fetchData={fetchPostsServer}
      />
    </PageWrapper>
  )
}
