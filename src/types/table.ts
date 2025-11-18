// types/table.ts
export type Column<T = any> = {
  key: keyof T;
  label?: string;
  width?: string | number;
};

export type RowData = Record<string, any>;
