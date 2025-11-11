import type { ReactNode } from "react";

import styles from "./pageWrapper.module.css";

type Props = {
  children: ReactNode;
  pageTitle: string;
  hasSubHeader?: boolean;
  hasFooter?: boolean;
};

export default function PageWrapper({
  children,
  pageTitle,
  hasSubHeader,
  hasFooter
}: Props) {
  const headerHeight = 64;
  const subHeaderHeight = hasSubHeader ? 40 : 0;
  const footerHeight = hasFooter ? 40 : 0;
  const margin = 10;

  const topOffset = headerHeight + subHeaderHeight + margin;
  const bottomOffset = footerHeight + margin;

  return (
    <main
      className={styles.pageWrapper}
      style={{
        top: `${topOffset}px`,
        bottom: `${bottomOffset}px`,
      }}
    >
      <h1 className={styles.headerTitle}>{pageTitle}</h1>
      {children}
    </main>
  )
}
