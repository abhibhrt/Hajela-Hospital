import TestimonialsPage from './TestimonialsPage'

export const metadata = {
  title: 'Patient Testimonials | Hajela Hospital IVF & Fertility Center Bhopal',
  description:
    'Read patient testimonials and IVF success stories from Hajela Hospital, Bhopal. Learn how Dr. Supriya Hajela helped couples achieve their dream of parenthood through personalized fertility care.',
  alternates: { canonical: 'https://www.supriyahajela.in/testimonials' },
  openGraph: {
    title: 'IVF Success Stories | Hajela Hospital Bhopal',
    description:
      'Real patient testimonials from Hajela Hospital - Bhopal’s trusted IVF & Fertility Center led by Dr. Supriya Hajela.',
    url: 'https://www.supriyahajela.in/testimonials',
    type: 'website',
    siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'IVF Success Stories - Hajela Hospital Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials | Dr. Supriya Hajela - Hajela Hospital Bhopal',
    description:
      'Hear success stories from patients who received advanced IVF & fertility care at Hajela Hospital, Bhopal.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const testimonialsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital - IVF & Fertility Center',
    url: 'https://www.supriyahajela.in',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description:
      'NABH Accredited IVF and Fertility Center in Bhopal, offering advanced IVF, ICSI, and IUI treatments under Dr. Supriya Hajela.',
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '4',
    },
    review: [
      {
        '@type': 'Review',
        author: 'Anjali Sharma',
        datePublished: '2024-07-12',
        reviewBody:
          'After years of trying, I finally conceived through IVF at Hajela Hospital. Dr. Supriya Hajela and the team were extremely supportive and caring throughout the process.',
        name: 'Successful IVF after 5 years of struggle',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: 'Ravi & Priya Patel',
        datePublished: '2024-04-28',
        reviewBody:
          'Excellent fertility services, advanced lab facilities, and compassionate care by Dr. Supriya Hajela made our dream come true.',
        name: 'Highly recommended IVF center in Bhopal',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsJsonLd) }}
      />
      <TestimonialsPage />
    </>
  )
}