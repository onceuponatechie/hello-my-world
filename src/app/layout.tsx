import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Essy Udeme — Products, people, and the stories between them",
  description:
    "Essy Udeme turns ideas into websites, apps, decks and stories. Portfolio, project lab, and lessons learned in the open.",
  openGraph: {
    title: "Essy Udeme — Products, people, stories",
    description: "Portfolio, project lab, and lessons learned in the open.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}