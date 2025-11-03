"use client";

import { Label } from "@radix-ui/react-label";
import styles from "./Input.module.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, ...props }: InputProps) {
  const inputId = id;

  return (
    <div className={styles.wrapper}>
      {label && (
        <Label className={styles.label} htmlFor={inputId}>
          {label}
        </Label>
      )}
      <input id={inputId} className={styles.input} {...props} />
    </div>
  );
}
