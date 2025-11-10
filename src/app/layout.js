import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Alert from './components/alert'
import { AlertProvider } from './hooks/useAlert'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Dr. Supriya Hajela | Best IVF & Fertility Specialist in Bhopal | Hajela Hospital',
    template: '%s | Dr. Supriya Hajela - Best IVF Specialist in Bhopal',
  },
  description:
    'Dr. Supriya Hajela - Leading IVF & Fertility Specialist in Bhopal with 14+ years of experience. Hajela Hospital offers advanced IVF, ICSI, IUI, Egg Freezing, PGT, and Laparoscopic Fertility Surgeries. Best IVF Center in Madhya Pradesh with high success rates.',
  keywords: [
    'IVF Specialist Bhopal',
    'Best IVF Doctor in Bhopal',
    'Fertility Clinic Bhopal',
    'ICSI Treatment Bhopal',
    'IUI Center Bhopal',
    'Egg Freezing Bhopal',
    'Embryo Transfer Bhopal',
    'IVF Success Rate Bhopal',
    'Affordable IVF Treatment',
    'IVF Cost Bhopal',
    'Test Tube Baby Center Bhopal',
    'Infertility Specialist in Bhopal',
    'Hajela Hospital IVF Center',
    'Dr Supriya Hajela IVF Specialist',
    'Best Gynecologist Bhopal',
    'Reproductive Medicine Madhya Pradesh',
    'Fertility Preservation India',
    'Male Infertility Treatment Bhopal',
    'NABH Accredited IVF Centre',
    'Top Fertility Doctor Near Me',
  ],
  openGraph: {
    title: 'Dr. Supriya Hajela | Best IVF & Fertility Specialist – Hajela Hospital Bhopal',
    description:
      'Award-winning IVF & Fertility Specialist in Bhopal with 14+ years experience. Hajela Hospital - NABH Accredited IVF Center offering advanced reproductive care in Madhya Pradesh.',
    url: 'https://www.supriyahajela.in',
    siteName: 'Hajela Hospital - Best IVF Center in Bhopal',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Hajela Hospital IVF Center Bhopal - Dr. Supriya Hajela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Supriya Hajela | Best IVF Specialist in Bhopal',
    description:
      'Trusted IVF & Fertility Doctor in Bhopal - Hajela Hospital. Advanced IVF, ICSI, IUI, PGT & Egg Freezing Treatments.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
  metadataBase: new URL('https://www.supriyahajela.in'),
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital - IVF & Fertility Center',
    url: 'https://www.supriyahajela.in',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description:
      'Hajela Hospital - NABH Accredited IVF and Fertility Center in Bhopal offering IVF, ICSI, IUI, and PGT Services.',
    telephone: '+91-755-1234567',
    email: 'info@supriyahajela.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hajela Hospital, MP Nagar Zone II',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '23.2599', longitude: '77.4126' },
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital',
    ],
  }

  const doctorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Supriya Hajela',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description:
      'Dr. Supriya Hajela - Award-winning IVF & Fertility Specialist with 14+ years of experience in Reproductive Medicine.',
    url: 'https://www.supriyahajela.in',
    medicalSpecialty: ['IVF', 'ICSI', 'IUI', 'Reproductive Endocrinology'],
    affiliation: { '@type': 'MedicalOrganization', name: 'Hajela Hospital' },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.supriyahajela.in' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.supriyahajela.in/about' },
      { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://www.supriyahajela.in/services' },
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* all structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        {/* unified logo as favicon + touch icon + og image */}
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />

        {/* performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* geo meta for local seo */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599,77.4126" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 scroll-smooth`}
      >
        <Navbar />
        <AlertProvider>
          <Alert />
          <main className="min-h-screen">{children}</main>
        </AlertProvider>
        <Footer />
      </body>
    </html>
  )
}
