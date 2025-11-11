// Server Component: データを表示するだけのテーブル

import { Suspense } from "react";
import styles from "./displayTable.module.css";
import TableSpinner from "../TableSpinner";

export type Column<T> = {
  key: keyof T;
  label?: string;
  width?: string;
};

type Props<T> = {
  columns: Column<T>[];
  fetchData: () => Promise<T[]>;
};

export async function AsyncTableBody<T extends Record<string, any>>({ columns, fetchData, }: Props<T>) {
  const data = await fetchData();

  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col) =>
            <td key={String(col.key)}>
              {row[col.key]}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default function DisplayTable<T extends Record<string, any>>({
  columns,
  fetchData,
}: Props<T>) {
  return (
    <div className={styles.displayTableWrapper}>
      <table className={styles.displayTable}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} style={{ width: col.width }}>
                {col.label ?? String(col.key)}
              </th>
            ))}
          </tr>
        </thead>

        <Suspense fallback={<TableSpinner />}>
          <AsyncTableBody columns={columns} fetchData={fetchData} />
        </Suspense>
      </table>
    </div>
  );
}
