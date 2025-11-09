"use client";

import { Post } from "@/app/(example)/apis/fetchPosts.server";
import { use, useState } from "react";

type Props = {
  initialData: Post[];
}

export default function PostList({
  initialData,
}: Props) {

  const [postList, setPostList] = useState(initialData);

  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
