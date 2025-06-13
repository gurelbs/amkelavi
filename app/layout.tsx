import type React from "react"
import "@/app/globals.css"
import { Heebo } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const heebo = Heebo({ subsets: ["hebrew"] })

export const metadata = {
  title: "עם כלביא | חדשות בזמן אמת",
  description: "עדכונים ומבזקים בזמן אמת על מבצע עם כלביא",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={heebo.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
