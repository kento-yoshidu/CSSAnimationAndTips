"use client";

import PageWrapper from "../../_components/PageWrapper";
import fetchPostsServer from "../../apis/fetchPosts.server"
import type { Column, Post } from "@/types";
import { Table } from "@/components/table/Table";

export default async function Posts() {
  const columns: Column<Post>[] = [
    {
      key: "userId",
      label: "ユーザーID",
      render: (userId) => {
        if (userId === 1) {
          return <p>1</p>;
        }

        return <p>other</p>;
      },
    },
    {
      key: "title",
      label: "タイトル",
    },
  ];

  const data = await fetchPostsServer();

  return (
    <PageWrapper pageTitle="投稿一覧" >
      <Table
        columns={columns}
        data={data}
      />
    </PageWrapper>
  )
}
