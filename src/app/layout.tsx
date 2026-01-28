import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Furo Labs Github Leaderboard",
  description: "Spotlight on the most active contributors to the Furo Labs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-white text-black antialiased font-sans">
        <Suspense>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
