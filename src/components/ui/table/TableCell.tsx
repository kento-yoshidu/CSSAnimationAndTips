import { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
};

export function TableCell({ children }: TableCellProps) {
  return <td className="p-2 border">{children}</td>;
}
