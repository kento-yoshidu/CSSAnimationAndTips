"use client";

import { Spinner } from "@/components/Loading/Spinner";
import styles from "@/components/table/Table.module.css";

export default function TableLoading() {
  return (
    <div className={styles.displayTableWrapper}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <Spinner text="Loading..." />
      </div>
    </div>
  );
}
