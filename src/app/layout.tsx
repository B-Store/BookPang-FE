import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/style.scss";
import type { Metadata } from "next";
import QueryProvider from "./provider";

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
          <div className="layout-wrapper">
            <header className="header">
              <Header />
            </header>
            <main className="main-contents">{children}</main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
