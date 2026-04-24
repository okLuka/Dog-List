import type { Metadata } from "next";
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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
