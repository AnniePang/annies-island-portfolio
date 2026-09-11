import type React from "react"
import { Baloo_2, Nunito } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

/**
 * Type pairing for the island theme.
 *
 * Animal Crossing: New Horizons sets its UI in FOT-Rodin / Seurat, which are
 * licensed commercial faces owned by Fontworks and cannot be redistributed here.
 * These two are the closest freely-licensed stand-ins:
 *
 *   Baloo 2  -- rounded chunky display face, SIL Open Font License 1.1
 *   Nunito   -- rounded humanist sans for body copy, SIL Open Font License 1.1
 *
 * Both are served by next/font from Google Fonts and self-hosted at build time.
 */
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata = {
  title: "Annie Pang - Data Scientist & ML Engineer",
  description: "Portfolio website for Annie Pang, Data Scientist and Machine Learning Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${baloo.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/acnh/leaf-favicon.svg" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
