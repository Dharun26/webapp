import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Loader from "@/components/loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GetXCloud - Your Trusted Partner in Cloud Services",
  description: "Cloud Hosting, Backup, Email, Storage, and Management — With full transparency and client education.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
