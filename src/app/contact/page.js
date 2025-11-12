import ContactPage from './ContactPage'

export const metadata = {
  title: 'Contact Best IVF Doctor in Bhopal | Dr. Supriya Hajela - Hajela Hospital',
  description: 'Contact Dr. Supriya Hajela - Best IVF Specialist in Bhopal at Hajela Hospital. Book Appointment: +91-7777802361. Address: MP Nagar Zone II, Bhopal. NABH Accredited IVF Center.',
  alternates: { canonical: 'https://www.supriyahajela.in/contact' },
}

export default function Page() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital - Best IVF Center in Bhopal',
    description: 'Best IVF Center in Bhopal - NABH Accredited Fertility Clinic',
    url: 'https://www.supriyahajela.in/contact',
    telephone: '+91-7777802361',
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
    openingHours: 'Mo-Su 08:00-20:00',
    priceRange: '₹₹₹',
    hasMap: 'https://maps.google.com/?q=Hajela+Hospital+Bhopal',
    areaServed: ['Bhopal', 'Madhya Pradesh', 'India'],
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
    ]
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPage />
    </>
  )
}