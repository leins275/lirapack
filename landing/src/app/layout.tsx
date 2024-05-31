import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.scss";
import styles from './Main.module.scss'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Сайт компании lirapack.ru",
  description: "Дизайнерская упаковка на любой вкус",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ChakraProvider>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
