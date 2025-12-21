"use client";

import { Column } from "@/types";
import { Spinner } from "../Loading/Spinner";
import styles from "./displayTable.module.css";

type DisplayTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
};

export function Table<T>({
  columns,
  data,
  isLoading = false,
}: DisplayTableProps<T>) {
  if (isLoading) {
    return (
      <div className={styles.displayTableWrapper}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Spinner text="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.displayTableWrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.displayTable}>
          <colgroup>
            {columns.map((col) => (
              <col key={String(col.key)} style={{ width: col.width }} />
            ))}
          </colgroup>
          <thead className={styles.thead}>
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)}>
                  {col.label ?? String(col.key)}
                </th>
              ))}
            </tr>
          </thead>
        </table>

        <div className={styles.tbodyContainer}>
          <table className={styles.displayTable}>
            <colgroup>
              {columns.map((col) => (
                <col key={String(col.key)} style={{ width: col.width }} />
              ))}
            </colgroup>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col) => (
                    <td>
                     {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
