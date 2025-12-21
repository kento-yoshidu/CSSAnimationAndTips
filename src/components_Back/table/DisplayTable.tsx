import { Suspense } from "react";
import TbodyContainer from "./TbodyContainer";
import { TableBody } from "./TableBody";
import styles from "./table.module.css";
import { Column } from "@/types";

type DisplayTableProps<T> = {
  columns: Column<T>[];
  fetchData: () => Promise<T[]>;
};

export default function DisplayTable<T>({
  columns,
  fetchData,
}: DisplayTableProps<T>) {
  return (
    <div className={styles.displayTableWrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.displayTable}>
          <colgroup>
            {columns.map((col) => (
              <col
                key={String(col.key)}
                style={{ width: col.width }}
              />
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

        <TbodyContainer>
          <table className={styles.displayTable}>
            <colgroup>
              {columns.map((col) => (
                <col key={String(col.key)}
                  style={{ width: col.width }}
                />
              ))}
            </colgroup>

            <Suspense fallback={<p>hoge</p>}>
              <TableBody
                columns={columns}
                fetchData={fetchData}
              />
            </Suspense>
          </table>
        </TbodyContainer>
      </div>
    </div>
  )
}

