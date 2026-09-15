import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const hankenGrotesk = localFont({
  src: "../assets/fonts/HankenGrotesk[wght].ttf",
  variable: "--font-hanken-grotesk",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "../assets/fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Essy Udeme — Products, people, and stories",
  description: "The personal website of Essy Udeme: researcher, builder, and storyteller.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
