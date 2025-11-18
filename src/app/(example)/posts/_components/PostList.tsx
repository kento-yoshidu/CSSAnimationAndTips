import fetchPostsServer, { Post } from "@/app/(example)/apis/fetchPosts.server";
import DisplayTable from "@/components/ui/table/DisplayTable";

export default function PostList() {
   const columns = [
    { key: "userId", header: "ユーザーID" },
    { key: "title", header: "タイトル" },
    { key: "createdAt", header: "作成日" },
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
