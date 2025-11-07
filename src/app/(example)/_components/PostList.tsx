import { Post } from "@/app/(example)/apis/fetchPosts.server";

type Props = {
  postList: Post[];
}

export default function PostList({
  postList
}: Props) {
  console.log("list = ", postList);

  return (
    <ul>
      <p>hoge</p>
      {postList.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
