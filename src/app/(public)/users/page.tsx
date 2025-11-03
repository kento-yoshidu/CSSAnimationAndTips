import { fetchUsers } from "@/apis/fetchUsers";
import MyButton from "@/components/MyButton";
import { use } from "react";

export default async function UserPage() {
  const users = await fetchUsers();

  return (
    <>
      <MyButton label="検索" />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {`id: ${user.id} / ${user.name}`}
          </li>
        ))}
      </ul>
    </>
  );
};
