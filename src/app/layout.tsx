import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge to Relief",
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
