"use client";

import { useCounterStore } from "@/stores/useCounterStore";
import Link from "next/link";

export default function Page() {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);

  return (
    <>
      <h1>BBB</h1>

      <Link href="/global/aaa">AAA</Link>

      <button onClick={increment}>
        count: {count}
      </button>
    </>
  );
}
