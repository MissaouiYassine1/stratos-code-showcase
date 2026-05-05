import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MonEntreprise - Solutions innovantes',
  description: 'Développement web, applications mobile et marketing digital',
  keywords: 'développement web, application mobile, marketing digital, SEO',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#1D3557',
  colorScheme: 'light'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}