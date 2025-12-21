import { Spinner } from "./Spinner";
import type { TableColumn } from "@/types";

export default function TableSpinner<T>({
  columns,
  text,
}: { columns: TableColumn<T>[]; text?: string }) {
  return (
    <tbody>
      <tr>
        <td
          colSpan={columns.length}
          style={{ textAlign: "center", padding: "16px" }}
        >
          <Spinner text={text ?? "Loading..."} />
        </td>
      </tr>
    </tbody>
  );
}
