import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
