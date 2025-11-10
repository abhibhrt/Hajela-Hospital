import ServicesPage from './ServicesPage'

export const metadata = {
  title: 'IVF, ICSI, IUI, PGT & Fertility Treatments | Hajela Hospital Bhopal',
  description:
    'Discover advanced fertility services at Hajela Hospital Bhopal — IVF, ICSI, IUI, Egg Freezing, PGT, and fertility preservation treatments under Dr. Supriya Hajela, a leading IVF & Fertility Specialist in Madhya Pradesh.',
  alternates: { canonical: 'https://www.supriyahajela.in/services' },
  openGraph: {
    title: 'Advanced IVF & Fertility Services in Bhopal | Hajela Hospital',
    description:
      'Explore IVF, ICSI, IUI, and genetic fertility testing at NABH Accredited Hajela Hospital Bhopal led by Dr. Supriya Hajela.',
    url: 'https://www.supriyahajela.in/services',
    type: 'website',
    siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Hajela Hospital IVF & Fertility Center Bhopal - Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF & Fertility Services | Hajela Hospital Bhopal',
    description:
      'Comprehensive IVF and fertility treatments by Dr. Supriya Hajela at Hajela Hospital, Bhopal.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital ART & Reproductive Center',
    description:
      'NABH Accredited IVF & Fertility Centre in Bhopal offering IVF, ICSI, IUI, PGT, and fertility preservation treatments under Dr. Supriya Hajela.',
    url: 'https://www.supriyahajela.in/services',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
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
      'IVF',
      'Infertility Treatment',
      'ICSI',
      'IUI',
      'PGT',
      'Egg Freezing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fertility Treatments',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IVF (In Vitro Fertilization)',
            description: 'Advanced IVF treatments for infertility management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICSI Procedure',
            description: 'Specialized sperm injection for male infertility.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IUI Fertility Treatment',
            description: 'Intrauterine insemination with expert monitoring.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PGT Genetic Testing',
            description: 'Preimplantation Genetic Testing for embryo screening.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Egg Freezing & Fertility Preservation',
            description: 'Cryopreservation of eggs for future family planning.',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital',
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPage />
    </>
  )
}