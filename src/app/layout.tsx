import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaming List",
  description: "Jackpot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">{children}</body>
    </html>
  );
}
