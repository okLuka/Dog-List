import type { Metadata } from "next";
import Link from "next/link";
import StoreProvider from "@/store/provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "SPA cards"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <header className="border-b bg-white px-6 py-4">
          <nav className="flex gap-6">
            <Link href="/products" className="font-medium text-gray-700 hover:text-black transition">Собаки</Link>
            <Link href="/create-product" className="font-medium text-gray-700 hover:text-black transition">Создать карточку</Link>
          </nav>
          </header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
