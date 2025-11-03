import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h2>サンプルページ</h2>
        <ul>
          <li><Link href="/posts">posts</Link></li>
          <li><Link href="/users">users</Link></li>
        </ul>
      </main>
    </div>
  );
};
