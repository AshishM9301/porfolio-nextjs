import type React from "react"
import ClientComponent from "./client"

export const metadata = {
  title: "Ashish Kumar Mahto - Portfolio",
  description: "Personal portfolio website of Ashish Kumar Mahto",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientComponent children={children} />
}



import './globals.css'