import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koalit | Improved literacy with AI.",
  description: "Make reading easy and fun with an AI coach.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
