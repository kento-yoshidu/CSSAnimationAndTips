import { ReactNode } from "react";
import styles from "./table.module.css";

import type { Column } from "@/types/table";

interface TableLayoutProps {
  columns: Column[];
  children: ReactNode;
}

export default function TableLayout({ columns, children }: TableLayoutProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {columns.map((col) => (
            <TableHeader key={String(col.key)} label={col.label ?? String(col.key)} />
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>{children}</tbody>
    </table>
  );
}

interface TableHeaderProps {
  label: string;
}

function TableHeader({ label }: TableHeaderProps) {
  return <th className={styles.th}>{label}</th>;
}
