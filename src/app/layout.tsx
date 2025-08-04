import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Kokashe",
  description:
    "Explore Shivam's portfolio featuring full-stack development projects, skills, and experience with Next.js, React, and MERN stack.",
  keywords: [
    "Shivam",
    "portfolio",
    "full-stack developer",
    "Next.js",
    "React",
    "MERN",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
  ],
  authors: [{ name: "Shivam", url: "https://shivamworks.tech" }],
  creator: "Shivam",
  applicationName: "Shivam Works",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  alternates: {
    canonical: "https://shivamworks.tech",
  },
  openGraph: {
    title: "Shivam | Full-Stack Developer",
    description:
      "Explore Shivam's portfolio featuring full-stack development projects, skills, and experience with Next.js, React, and MERN stack.",
    url: "https://shivamworks.tech",
    siteName: "Shivam Works",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kokashe",
    description:
      "Explore Shivam's portfolio featuring full-stack development projects, skills, and experience with Next.js, React, and MERN stack.",
    site: "@shivamcodes_", 
    creator: "@shivamcodes_",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-20D87QG4JY`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-20D87QG4JY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-black text-white font-sans antialiased max-w-3xl mx-auto `}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}

