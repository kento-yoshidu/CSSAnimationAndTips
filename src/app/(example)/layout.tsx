import { ReactNode } from "react";
import SideBar from "./_components/SideBar";

import styles from "./latyout.module.css";

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <SideBar />

      {children}
    </div>
  );
};
