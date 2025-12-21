import { Column } from "@/types";

type TableBodyProps<T> = {
  columns: Column<T>[];
  fetchData: () => Promise<T[]>;
};

export async function TableBody<T>({
  columns,
  fetchData,
}: TableBodyProps<T>) {
  const data = await fetchData();

  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col) => <td key={String(col.key)}>{String(row[col.key])}</td>)}
        </tr>
      ))}
    </tbody>
  );
}
