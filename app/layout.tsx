import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Loop Lab",
  description:
    "Human Loop Lab creates thoughtful learning experiences, instructional systems, and UX-minded digital products.",
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
