"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-customFont`}>
        <div className='max-w-screen h-screenn bg-blue overflow-x-hidden '>
          {children}
        </div>
        </body>
    </html>
  );
}