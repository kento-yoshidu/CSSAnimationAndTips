import { ReactNode } from "react";

import Header from "./_components/Header";

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
};
