import type { Metadata } from 'next'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'TrackSpeed | Elite Formula 1 Intelligence Platform',
  description: 'Experience F1 like never before.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* THIS SCRIPT LOADS TAILWIND INSTANTLY WITHOUT BUILD ERRORS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    f1: {
                      red: "#E10600",
                      carbon: "#1A1A1A",
                      graphite: "#2C2C2C",
                      silver: "#C0C0C0",
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-[#0B0F19] text-white antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}