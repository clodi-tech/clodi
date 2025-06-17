export const Links = {
  linkedin: "https://www.linkedin.com/in/claudio-calle/",
};

import { Rajdhani as FontSans } from "next/font/google";

export const fontSans = FontSans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const products = [
  {
    name: "Commit OS",
    description: "Your life, simply organized.",
    link: "https://commitos.com",
  },
  {
    name: "Easycommerce",
    description: "Ecommerce, but easy.",
    link: "https://easycommerce.live",
  },
];

export const projects = [
  {
    name: "Wagone",
    description: "See the world by rail.",
    link: "https://wagone.com",
  },
];
