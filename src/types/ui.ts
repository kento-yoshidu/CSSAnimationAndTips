export type TableColumn<T> = {
  key: keyof T;
  label?: string;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export const BUTTON_TYPE = {
  SUBMIT: "submit",
  BUTTON: "button",
} as const;

export type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

export const BUTTON_VARIANT = {
  PRIMARY: "primary",
  PRIMARY_OUTLINE: "primary-outline",
  SECONDARY: "secondary",
  ATTENTION: "attention",
  DISABLED: "disabled",
  OTHER: "other",
} as const;

export type ButtonVariant =
  typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];
