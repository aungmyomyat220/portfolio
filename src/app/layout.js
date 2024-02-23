'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime : 0,
    },
  },
})

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className={'!scroll-smooth'}>
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
