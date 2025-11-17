// StaticTable.tsx (RSC)
import fetchPostsServer from "@/app/(example)/apis/fetchPosts.server";
import TableLayout from "./TableLayout";
import { TableRow } from "./TableRow";
import { Suspense, use } from "react";
import type { Column, RowData } from "@/types/table";


interface StaticTableProps {
  columns: Column[];
  fetchData: () => Promise<RowData[]>;
}

export default function StaticTable({ columns, fetchData }: StaticTableProps) {
  const dataPromise = fetchData();

  return (
    <TableLayout columns={columns}>
      <Suspense
        fallback={
          <tr>
            <td colSpan={columns.length} className="text-center p-2">
              Loading...
            </td>
          </tr>
        }
      >
        <TableRows columns={columns} promise={dataPromise} />
      </Suspense>
    </TableLayout>
  );
}

interface TableRowsProps {
  columns: Column[];
  promise: Promise<RowData[]>;
}

function TableRows({ columns, promise }: TableRowsProps) {
  const data = use(promise); // RSC 内で Suspense 解決

  return (
    <>
      {data.map((row, i) => (
        <TableRow key={i} columns={columns} row={row} />
      ))}
    </>
  );
}
