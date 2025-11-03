"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const title = (() => {
    if (pathname.endsWith("/posts")) return "投稿一覧"
    if (pathname.endsWith("/users")) return "ユーザー一覧"
    return ""
  })();

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
