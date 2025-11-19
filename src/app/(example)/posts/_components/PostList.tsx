import fetchPostsServer from "@/app/(example)/apis/fetchPosts.server";
import DisplayTable from "@/components/table/DisplayTable";

import type { Column, Post } from "@/types";

export default function PostList() {
   const columns: Column<Post>[] = [
    { key: "userId", label: "ユーザーID" },
    { key: "title", label: "タイトル" },
  ];

  return (
    <>
      <DisplayTable
        columns={columns}
        fetchData={fetchPostsServer}
      />
    </>
  );
}
