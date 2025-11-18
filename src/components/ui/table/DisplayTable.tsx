// Server Component: データを表示するだけのテーブル
// components/tables/AsyncTableBody.tsx
"use client";

import { TableRow } from "./TableRow";
import { Suspense, use } from "react";

export default function AsyncTableBody({ columns, fetchData }) {
  const dataPromise = fetchData(); // Promise を取得

  return (
    <Suspense
      fallback={
        <tr>
          <td colSpan={columns.length} style={{ textAlign: "center" }}>
            Loading...
          </td>
        </tr>
      }
    >
      <TableRows columns={columns} promise={dataPromise} />
    </Suspense>
  );
}

function TableRows({ columns, promise }) {
  const data = use(promise); // Suspense で Promise を解決

  return (
    <>
      {data.map((row, i) => (
        <TableRow key={i} columns={columns} row={row} />
      ))}
    </>
  );
}

// import { Suspense } from "react";
// import styles from "./displayTable.module.css";
// import TableSpinner from "../TableSpinner";

// export type Column<T> = {
//   key: keyof T;
//   label?: string;
//   width?: string;
// };

// type Props<T> = {
//   columns: Column<T>[];
//   fetchData: () => Promise<T[]>;
// };

// export async function AsyncTableBody<T extends Record<string, any>>({ columns, fetchData, }: Props<T>) {
//   const data = await fetchData();

//   return (
//     <tbody>
//       {data.map((row, rowIndex) => (
//         <tr key={rowIndex}>
//           {columns.map((col) =>
//             <td key={String(col.key)}>
//               {row[col.key]}
//             </td>
//           )}
//         </tr>
//       ))}
//     </tbody>
//   );
// }

// export default function DisplayTable<T extends Record<string, any>>({
//   columns,
//   fetchData,
// }: Props<T>) {
//   return (
//     <div className={styles.displayTableWrapper}>
//       <table className={styles.displayTable}>
//         <thead className={styles.thead}>
//           <tr>
//             {columns.map((col) => (
//               <th key={String(col.key)} style={{ width: col.width }}>
//                 {col.label ?? String(col.key)}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <Suspense fallback={<TableSpinner />}>
//           <AsyncTableBody columns={columns} fetchData={fetchData} />
//         </Suspense>
//       </table>
//     </div>
//   );
// }
