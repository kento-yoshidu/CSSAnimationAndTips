export type Column<T = unknown> = {
  key: keyof T;
  label?: string;
  width?: string | number;
};
