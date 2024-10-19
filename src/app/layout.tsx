import type { Metadata } from "next";
import QueryProvider from "./provider";
import "@/styles/style.scss";

export const metadata: Metadata = {
  title: "북팡",
  description: "도서 구매 및 독서 토론",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <main className="main">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
