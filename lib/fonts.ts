import { Rajdhani as Sans, Space_Mono as Mono } from "next/font/google";

export const fontSans = Sans({
  variable: "--my-font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const fontMono = Mono({
  variable: "--my-font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
