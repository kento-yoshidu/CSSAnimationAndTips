import { ReactNode } from "react";

import Header from "./_components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "../providers";

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
};
