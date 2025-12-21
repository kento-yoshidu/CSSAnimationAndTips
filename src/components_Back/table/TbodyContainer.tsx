import { ReactNode } from "react";

import styles from "./table.module.css";

export default function TbodyContainer({
  children
}: {
  children: ReactNode,
}) {
  return (
    <div
      className={styles.tbodyContainer}
    >
      {children}
    </div>
  );
}
