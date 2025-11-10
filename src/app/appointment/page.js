import BookAppointmentPage from './BookAppointmentPage'

export const metadata = {
  title: 'Book Appointment | Dr. Supriya Hajela - IVF & Fertility Specialist Bhopal',
  description:
    'Book your appointment with Dr. Supriya Hajela at Hajela Hospital, Bhopal. Consult for IVF, ICSI, IUI, PGT, and fertility treatments at NABH Accredited IVF Center in Madhya Pradesh.',
  alternates: { canonical: 'https://www.supriyahajela.in/appointment' },
  openGraph: {
    title: 'Book Appointment | Hajela Hospital - IVF & Fertility Center Bhopal',
    description:
      'Schedule your consultation with Dr. Supriya Hajela – Best IVF & Fertility Specialist in Bhopal, Madhya Pradesh.',
    url: 'https://www.supriyahajela.in/appointment',
    type: 'website',
    siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Appointment - Hajela Hospital IVF Center Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment with Dr. Supriya Hajela - Hajela Hospital Bhopal',
    description:
      'Easily book your appointment online with Dr. Supriya Hajela at Hajela Hospital IVF & Fertility Center Bhopal.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const appointmentJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Hajela Hospital ART & Reproductive Center',
    description:
      'NABH Accredited IVF and Fertility Treatment Center in Bhopal, Madhya Pradesh.',
    url: 'https://www.supriyahajela.in/appointment',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    telephone: '+91-755-1234567',
    priceRange: '₹₹',
    medicalSpecialty: [
      'Reproductive Medicine',
      'IVF',
      'Infertility Treatment',
      'ICSI',
      'IUI',
      'PGT',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hajela Hospital, MP Nagar Zone II',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fertility Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IVF Consultation',
            description: 'Comprehensive fertility consultation and evaluation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICSI Procedure',
            description: 'Advanced intracytoplasmic sperm injection treatment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Egg Freezing',
            description: 'Preserve fertility for future family planning.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appointmentJsonLd) }}
      />
      <BookAppointmentPage />
    </>
  )
}