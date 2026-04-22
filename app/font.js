// app/fonts.js
import { Bebas_Neue, Anton, Oswald } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const oswald = Oswald({
  weight: ["400", "600"],
  subsets: ["latin"],
});