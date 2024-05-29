import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HorizontalNavigation from "./components/horizontal-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alek Michael - A Magnificent Full Stack Engineer Just Waiting to Work For You!",
  description: "Alek Michael's portfolio designed personally himself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav><HorizontalNavigation /></nav>
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
