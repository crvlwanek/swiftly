import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swiftly | Create Running Plans",
  description: "An app to create running plans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " selection:bg-primary selection:text-white"
        }
      >
        {children}
      </body>
    </html>
  );
}
