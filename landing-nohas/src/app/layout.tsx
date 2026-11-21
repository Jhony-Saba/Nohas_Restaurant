import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "./components/layout/Header";
import {NavBar} from "./components/layout/NavBar";
import {Footer} from "./components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nohas Restaurant | [Location]",
    template: "%s | Nohas Restaurant",
  },
  description:
    "Discover Nohas Restaurant in [Location]. Explore our menu, dining experience, and contact information.",
  keywords: [
    "Nohas kitchen",
    "restaurant in Bziza, koura, lebanon, northlebanon ",
    "restaurant in koura, lebanon ",
    "kitchebn in Bziza, koura, lebanon ",
    "restaurant menu",
  ],
  openGraph: {
    title: "Nohas kitchen",
    description: "Discover our food and dining experience.",
    type: "website",
    images: ["/images/restaurant-cover.jpg"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
      <Header><NavBar/></Header>
        {children}
        <Footer/>
  
      </body>
    </html>
  );
}
