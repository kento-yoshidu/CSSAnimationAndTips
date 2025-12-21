export type TableColumn<T> = {
  key: keyof T;
  label?: string;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};
