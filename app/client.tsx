"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style jsx global>{`
          @font-face {
            font-family: 'FigmaHand';
            src: url('/fonts/FigmaHand.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          .figma-hand {
            font-family: 'FigmaHand', cursive;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}

