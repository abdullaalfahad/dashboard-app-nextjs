import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "User Dashboard with Next.js and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
