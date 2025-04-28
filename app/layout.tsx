import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Loader from "@/components/loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://getxcloud.com"),
  title: {
    default: "GetXCloud - Your Trusted Partner in Cloud Services",
    template: "%s | GetXCloud",
  },
  description:
    "GetXCloud provides reliable, secure, and scalable cloud solutions including hosting, backup, email, storage, and management services for businesses of all sizes.",
  keywords: [
    "cloud services",
    "cloud hosting",
    "backup solutions",
    "email services",
    "VPS hosting",
    "cloud security",
    "cloud management",
  ],
  authors: [{ name: "GetXCloud Team" }],
  creator: "GetXCloud",
  publisher: "GetXCloud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getxcloud.com",
    title: "GetXCloud - Your Trusted Partner in Cloud Services",
    description:
      "Reliable, secure, and scalable cloud solutions for businesses of all sizes with full transparency and client education.",
    siteName: "GetXCloud",
    images: [
      {
        url: "/images/getxcloud-og.jpg",
        width: 1200,
        height: 630,
        alt: "GetXCloud - Cloud Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetXCloud - Your Trusted Partner in Cloud Services",
    description:
      "Reliable, secure, and scalable cloud solutions for businesses of all sizes with full transparency and client education.",
    images: ["/images/getxcloud-og.jpg"],
    creator: "@getxcloud",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GetXCloud",
              url: "https://getxcloud.com",
              logo: "https://getxcloud.com/images/logo.png",
              description:
                "Cloud Hosting, Backup, Email, Storage, and Management services with full transparency and client education.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-CLOUD-XYZ",
                contactType: "customer service",
              },
              sameAs: [
                "https://twitter.com/getxcloud",
                "https://www.facebook.com/getxcloud",
                "https://www.linkedin.com/company/getxcloud",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
