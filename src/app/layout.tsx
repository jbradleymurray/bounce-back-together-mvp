import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bounce Back Together",
  description: "Find the right disaster relief—fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
