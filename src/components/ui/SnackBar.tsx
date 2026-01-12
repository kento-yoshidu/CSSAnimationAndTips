import Image from "next/image";
import styles from "./snackBar.module.css";

type Props = {
  title: string;
  variant: "success" | "attention";
  isOpen: boolean;
  onClose: () => void;
};

export default function SnackBar({
  title,
  variant,
  isOpen,
  onClose
}: Props) {
  if (!isOpen) {
    return;
  }

  return (
    <div className={styles.snackBar}>
      <div className={styles.flexWrapper}>
        <p className={styles.title}>{title}</p>
      </div>

      <button
        style={{ cursor: "pointer" }}
        onClick={onClose}
      >
        閉じる
      </button>
    </div>
  );
}
