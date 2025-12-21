"use client";
import styles from "./Spinner.module.css";

export function Spinner({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.spinner} />
      <p>{text}</p>
    </div>
  );
}
