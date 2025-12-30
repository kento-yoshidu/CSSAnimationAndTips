"use client";

import React, { type ReactNode, type CSSProperties } from "react";
import styles from "./button.module.css";
import { BUTTON_TYPE, BUTTON_VARIANT, type ButtonType, type ButtonVariant } from "@/types/ui";

type ButtonProps = {
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  height?: number;
  width?: number;
};

export const Button = ({
  buttonType = BUTTON_TYPE.SUBMIT,
  variant = BUTTON_VARIANT.PRIMARY,
  children,
  icon,
  disabled = false,
  height = 48,
  width,
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : "",
  ].join(" ");

  const style: CSSProperties = {
    ...(width ? { width: `${width}px` } : {}),
    ...(height ? { height: `${height}px` } : {}),
  };

  return (
    <button
      type={buttonType}
      className={classes}
      style={style}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};
