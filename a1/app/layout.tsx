import './globals.css'
import { Gluten } from 'next/font/google'
const gluT = Gluten({ subsets: ['latin'] })

export const metadata = {
  title: '🎴:📼:1w',
  description: 'Oigen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gluT.className} >{children}</body>
    </html>
  )
}
