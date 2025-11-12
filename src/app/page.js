import Home from './home/HomePage'

export const metadata = {
  title: 'Dr. Supriya Hajela | Best IVF & Fertility Specialist in Bhopal | Hajela Hospital',
  description: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal with 14+ years experience. Hajela Hospital offers IVF, ICSI, IUI, Egg Freezing with 85% Success Rate. Book Appointment Today - 24/7 Emergency Care.',
  alternates: { 
    canonical: 'https://www.supriyahajela.in/',
    languages: {
      'en-IN': 'https://www.supriyahajela.in/',
    }
  },
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
  openGraph: {
    title: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal | 85% Success Rate | Hajela Hospital',
    description: 'NABH Accredited IVF Center in Bhopal. Advanced IVF, ICSI, IUI, PGT Treatments. 5000+ Successful Pregnancies. Book Free Consultation - +91-755-1234567',
    url: 'https://www.supriyahajela.in',
    type: 'website',
    siteName: 'Hajela Hospital - Best IVF Center in Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal | Hajela Hospital IVF Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Supriya Hajela | Best IVF Specialist in Bhopal - 85% Success Rate',
    description: 'Leading IVF & Fertility Doctor in Bhopal - Hajela Hospital. 5000+ Successful IVF Treatments. Book Appointment: +91-755-1234567',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function Page() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital ART & Reproductive Center - Best IVF in Bhopal',
    url: 'https://www.supriyahajela.in',
    logo: 'https://www.supriyahajela.in/logo.jpg',
    image: 'https://www.supriyahajela.in/logo.jpg',
    description: 'NABH Accredited IVF and Fertility Center in Bhopal led by Dr. Supriya Hajela - Best IVF Specialist with 14+ years experience. 5000+ Successful IVF Treatments.',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126'
    },
    medicalSpecialty: [
      'IVF Treatment',
      'ICSI Fertility',
      'IUI Procedure', 
      'Egg Freezing',
      'Embryo Transfer',
      'Fertility Preservation',
      'Laparoscopic Surgery',
      'Test Tube Baby',
      'Reproductive Medicine'
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
      description: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal with 14+ years experience in Reproductive Medicine and 5000+ Successful IVF Treatments.'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '4',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Patient Review'
      },
      reviewBody: 'Best IVF treatment in Bhopal. Dr. Supriya Hajela is amazing doctor with high success rate.'
    },
    // NEW ADDED FOR LOCAL SEO
    openingHours: ['Mo-Su 08:00-20:00'],
    priceRange: '₹₹₹',
    hasMap: 'https://maps.google.com/?q=Hajela+Hospital+Bhopal',
    areaServed: ['Bhopal', 'Madhya Pradesh', 'India'],
    knowsAbout: [
      'IVF Treatment Bhopal',
      'ICSI Fertility Bhopal',
      'IUI Procedure Bhopal',
      'Egg Freezing Bhopal',
      'Embryo Transfer Bhopal',
      'Test Tube Baby Center Bhopal'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Free First IVF Consultation',
        description: 'Free first consultation with Dr. Supriya Hajela for IVF treatment'
      }
    ]
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { 
        '@type': 'ListItem', 
        position: 1, 
        name: 'Home', 
        item: 'https://www.supriyahajela.in/' 
      },
      { 
        '@type': 'ListItem', 
        position: 2, 
        name: 'IVF Treatment Bhopal', 
        item: 'https://www.supriyahajela.in/ivf-treatment-bhopal' 
      },
      { 
        '@type': 'ListItem', 
        position: 3, 
        name: 'Best IVF Doctor in Bhopal', 
        item: 'https://www.supriyahajela.in/best-ivf-doctor-bhopal' 
      }
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best IVF specialist in Bhopal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Supriya Hajela is the best IVF specialist in Bhopal with 14+ years of experience and 5000+ successful IVF treatments at Hajela Hospital.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the success rate of IVF at Hajela Hospital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hajela Hospital has 85% success rate in IVF treatments under Dr. Supriya Hajela, making it the best IVF center in Bhopal.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does IVF cost in Bhopal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IVF cost in Bhopal starts from ₹1,50,000 at Hajela Hospital with transparent pricing and EMI options available.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Home />
    </>
  )
}