import TestimonialsPage from './TestimonialsPage'

export const metadata = {
  title: 'IVF Success Stories - Patient Testimonials for Dr. Supriya Hajela in Bhopal | Hajela Hospital',
  description: 'Read 17000+ IVF success stories from patients treated by Dr. Supriya Hajela - Best IVF Specialist in Bhopal. Real patient testimonials with 85% success rate at Hajela Hospital.',
  alternates: { canonical: 'https://www.supriyahajela.in/testimonials' },
  openGraph: {
    title: 'IVF Success Stories - Best IVF Doctor Testimonials in Bhopal | Dr. Supriya Hajela',
    description: 'Real patient success stories from Hajela Hospital - Best IVF Center in Bhopal led by Dr. Supriya Hajela with 17000+ successful IVF cycles.',
    url: 'https://www.supriyahajela.in/testimonials',
    type: 'website',
    siteName: 'Hajela Hospital - Best IVF Center in Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'IVF Success Stories - Best IVF Doctor Testimonials in Bhopal | Dr. Supriya Hajela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF Success Stories - Best IVF Doctor Testimonials in Bhopal',
    description: '17000+ IVF success stories from patients treated by Dr. Supriya Hajela - Best IVF Specialist at Hajela Hospital Bhopal.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const testimonialsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital - Best IVF Center in Bhopal',
    url: 'https://www.supriyahajela.in',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description: 'Best IVF Center in Bhopal - NABH Accredited Fertility Clinic with 85% success rate under Dr. Supriya Hajela.',
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '17000',
      bestRating: '5',
      worstRating: '4',
    },
    review: [
      {
        '@type': 'Review',
        author: 'IVF Patient from Bhopal',
        datePublished: '2024-07-12',
        reviewBody: 'Best IVF treatment in Bhopal by Dr. Supriya Hajela. After years of trying, I finally conceived through IVF at Hajela Hospital - Best IVF Center in Madhya Pradesh.',
        name: 'Successful IVF after 5 years - Best IVF Doctor in Bhopal',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: 'Happy Parents from MP',
        datePublished: '2024-04-28',
        reviewBody: 'Excellent fertility services at Hajela Hospital - Best IVF Center in Bhopal. Dr. Supriya Hajela made our dream come true with advanced IVF treatment.',
        name: 'Best IVF Specialist in Bhopal - Highly Recommended',
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