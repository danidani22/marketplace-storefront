import Navigation from '@modules/Navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      {children}
      {/* Footer */}
    </>
  )
}
