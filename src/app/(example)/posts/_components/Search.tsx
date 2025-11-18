"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

async function fetchItems() {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default function Search() {
   const { mutate, data, isPending, error } = useMutation({
    mutationFn: fetchItems,
  });

  const handleClick = () => {
    mutate();   // ← ボタンクリックで実行
  };

  if (data) {
    console.log("data = ", data);
  }

  return (
    <>
      <button
        onClick={handleClick}
      >
        Click
      </button>
    </>
  )
}
