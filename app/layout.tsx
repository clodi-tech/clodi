import type { Metadata } from "next";
import { Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Rajdhani({
  variable: "--my-font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Space_Mono({
  variable: "--my-font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clodi",
  description: "Clodi is a freelance product engineer based in Varzi, Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
