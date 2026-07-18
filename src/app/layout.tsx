import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ATS Global LLC | Advanced Semiconductor Engineering Consultancy',
  description: 'ATS Global LLC specializes in semiconductor process development, materials characterization, device optimization, and reliability analysis. Expert consulting for thin film deposition, plasma processing, and semiconductor fabrication.',
  keywords: 'semiconductor consulting, materials characterization, process development, semiconductor manufacturing, device optimization, reliability engineering, failure analysis, thin film deposition, ALD consulting, CVD consulting',
  authors: [{ name: 'ATS Global LLC' }],
  creator: 'ATS Global LLC',
  publisher: 'ATS Global LLC',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atsglobal.com',
    title: 'ATS Global LLC | Advanced Semiconductor Engineering Consultancy',
    description: 'Engineering the Future of Semiconductor Innovation. Advanced semiconductor process development, materials characterization, and device optimization.',
    siteName: 'ATS Global LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS Global LLC | Advanced Semiconductor Engineering Consultancy',
    description: 'Engineering the Future of Semiconductor Innovation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}