import Home from './home/HomePage'

export const metadata = {
  title: 'Dr. Supriya Hajela | Best IVF & Fertility Specialist in Bhopal | Hajela Hospital',
  description:
    'Welcome to Hajela Hospital Bhopal — NABH Accredited IVF & Fertility Center led by Dr. Supriya Hajela. Offering advanced IVF, ICSI, IUI, Egg Freezing, and fertility preservation with 14+ years of trusted experience.',
  alternates: { canonical: 'https://www.supriyahajela.in/' },
  openGraph: {
    title: 'Best IVF & Fertility Center in Bhopal | Hajela Hospital',
    description:
      'Dr. Supriya Hajela — IVF & Fertility Specialist offering comprehensive reproductive solutions at NABH Accredited Hajela Hospital, Bhopal.',
    url: 'https://www.supriyahajela.in',
    type: 'website',
    siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
    locale: 'en_IN',
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
      'Trusted IVF & Fertility Specialist with 14+ years experience at Hajela Hospital — Advanced reproductive care for couples in Madhya Pradesh.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital ART & Reproductive Center',
    url: 'https://www.supriyahajela.in',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description:
      'NABH Accredited IVF and Fertility Center in Bhopal led by Dr. Supriya Hajela, offering advanced IVF, ICSI, IUI, and genetic fertility services.',
    telephone: '+91-755-1234567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hajela Hospital, MP Nagar Zone II',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN',
    },
    medicalSpecialty: [
      'Reproductive Medicine',
      'Infertility Treatment',
      'IVF',
      'IUI',
      'ICSI',
      'PGT',
      'Egg Freezing',
    ],
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital',
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Supriya Hajela',
      jobTitle: 'IVF & Fertility Specialist',
      image: 'https://www.supriyahajela.in/logo.jpg',
      url: 'https://www.supriyahajela.in/about',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '4',
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.supriyahajela.in/' },
    ],
  }

  return (
    <>
      {/* primary hospital schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* breadcrumb schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Home />
    </>
  )
}