import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
