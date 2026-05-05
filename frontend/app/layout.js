import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ========================================
// SEO OPTIMISÉ - Métadonnées complètes
// ========================================

export const metadata = {
  // Métadonnées de base
  title: {
    default: 'MonEntreprise - Solutions innovantes en développement web et digital',
    template: '%s | MonEntreprise'
  },
  description: 'MonEntreprise accompagne les entreprises dans leur transformation digitale : développement web sur mesure, applications mobile, marketing digital et SEO. Devis gratuit.',
  keywords: [
    'développement web',
    'création site internet',
    'application mobile',
    'marketing digital',
    'SEO Paris',
    'agence web',
    'site vitrine',
    'e-commerce',
    'transformation digitale',
    'MonEntreprise'
  ].join(', '),
  
  // Auteur et générateur
  authors: [{ name: 'MonEntreprise', url: 'https://monentreprise.com' }],
  creator: 'MonEntreprise',
  publisher: 'MonEntreprise',
  generator: 'Next.js',
  
  // Robots et indexation
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Métadonnées Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'MonEntreprise - Solutions innovantes pour votre transformation digitale',
    description: 'Agence digitale experte en développement web, applications mobile et marketing digital. Découvrez nos solutions sur mesure.',
    url: 'https://monentreprise.com',
    siteName: 'MonEntreprise',
    images: [
      {
        url: 'https://monentreprise.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MonEntreprise - Solutions digitales innovantes',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
    determiner: 'auto',
  },
  
  // Métadonnées Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MonEntreprise - Développement web, mobile et marketing digital',
    description: 'Agence digitale experte en création de sites web, applications mobile et stratégie marketing.',
    images: ['https://monentreprise.com/twitter-image.jpg'],
    creator: '@monentreprise',
    site: '@monentreprise',
  },
  
  // Métadonnées supplémentaires
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#1D3557',
  colorScheme: 'light',
  
  // Verification (Google Search Console, Bing, etc.)
  verification: {
    google: 'votre-code-google-verification',
    yandex: 'votre-code-yandex',
    yahoo: 'votre-code-yahoo',
    bing: 'votre-code-bing',
  },
  
  // Alternates (langues, canonical)
  alternates: {
    canonical: 'https://monentreprise.com',
    languages: {
      'fr': 'https://monentreprise.com/fr',
      'en': 'https://monentreprise.com/en',
    },
  },
  
  // Autres métadonnées
  category: 'technology',
  classification: 'Développement Web, Marketing Digital',
  referrer: 'origin-when-cross-origin',
  
  // Application (PWA)
  appleWebApp: {
    title: 'MonEntreprise',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  
  // Format detection
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1D3557',
      },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Autres
  'google-site-verification': 'votre-code-google',
  'msvalidate.01': 'votre-code-bing',
  'yandex-verification': 'votre-code-yandex',
}

// Ajout du JSON-LD pour le référencement structuré
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MonEntreprise',
  url: 'https://monentreprise.com',
  logo: 'https://monentreprise.com/logo.png',
  image: 'https://monentreprise.com/og-image.jpg',
  description: 'Agence digitale experte en développement web, applications mobile et marketing digital.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 rue de Paris',
    addressLocality: 'Paris',
    postalCode: '75001',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33123456789',
    contactType: 'customer service',
    email: 'contact@monentreprise.com',
    availableLanguage: ['French', 'English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/monentreprise',
    'https://twitter.com/monentreprise',
    'https://github.com/monentreprise',
  ],
  foundingDate: '2020',
  founders: [
    {
      '@type': 'Person',
      name: 'Jean Dupont',
    },
  ],
  areaServed: 'France',
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Transfer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Fonts optimisé */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </noscript>
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Canary meta pour la sécurité */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        {/* Skip to main content - Accessibilité */}
        <a href="#main-content" className="visually-hidden-focusable">
          Aller au contenu principal
        </a>
        
        <Header />
        <main id="main-content" className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}