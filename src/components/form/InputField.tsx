"use client";

import { useState } from "react";
import { FieldError } from "react-hook-form";
import styles from "./inputField.module.css";

type Props = {
  label?: string;
  placeholder?: string;
  error?: FieldError | string;
  width?: number;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputField({
  label,
  placeholder,
  error,
  width,
  type = "text",
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={styles.wrapper} style={{ width }}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}

      <div className={isPassword ? styles.inputWrapper : undefined}>
        <input
          id={label ? label : ""}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder ?? ""}
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          {...props}
        />
      </div>

      {error && (
        <p className={styles.errorMessage}>
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  );
}
