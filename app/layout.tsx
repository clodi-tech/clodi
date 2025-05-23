import type { Metadata } from "next";
import { fontSans } from "@/lib/const";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Clodi - Digital Product Engineer",
  description: "Cogito, ergo iterum. From ether to ecstasy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
