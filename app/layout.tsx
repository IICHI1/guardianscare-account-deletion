import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/libs/utils"
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "GuardiansCare - Account Deletion",
  description:
    "This is an site to delete account from GuardiansCare app database.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="flex flex-col justify-between w-full h-full min-h-screen overflow-auto">
          <Header />
          <main className="flex-auto flex items-center justify-center w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}