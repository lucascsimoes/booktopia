import type { Metadata } from "next";
import { quicksand, merienda, caveat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booktopia",
  description: "Explore, Encontre, Descubra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${merienda.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
