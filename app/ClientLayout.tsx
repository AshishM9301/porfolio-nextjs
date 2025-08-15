"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* If you have the Figma Hand font file, you could use it with a custom font face */}
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

