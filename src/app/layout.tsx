import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wardrobe Forecast",
  description: "Dress to impress te weather"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
	    <div id="container">
	  	  <Header />

		   <div className="flex flex-grow items-center justify-center bg-zinc-50 font-sans dark:bg-black">
		  <main className="flex flex-grow flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">


		  {children}
		  </main>
		  </div>

		  <Footer />
		</div>
      </body>
    </html>
  );
}
