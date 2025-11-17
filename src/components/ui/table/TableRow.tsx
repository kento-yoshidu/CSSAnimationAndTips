import React from "react";
import type { Column, RowData } from "@/types/table";
import { TableCell } from "./TableCell";

type TableRowProps = {
  columns: Column[];
  row: RowData;
};

export function TableRow({ columns, row }: TableRowProps) {
  return (
    <tr>
      {columns.map((col) => (
        <TableCell key={String(col.key)}>{row[String(col.key)]}</TableCell>
      ))}
    </tr>
  );
}
