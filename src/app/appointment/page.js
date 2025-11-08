'use client'

import Hero from './Hero'
import FormSection from './FormSection'
import { useState, useEffect } from 'react'

export default function BookAppointmentPage() {
  const [schemaData, setSchemaData] = useState(null)

  useEffect(() => {
    setSchemaData({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Hajela Hospital ART & Reproductive Center',
      description: 'NABH Accredited IVF and Fertility Treatment Center in Bhopal',
      medicalSpecialty: 'Reproductive Medicine, IVF, Infertility Treatment',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhopal',
        addressRegion: 'Madhya Pradesh',
      },
      telephone: '+91-XXXXXXXXXX',
      url: 'https://yourwebsite.com/book-appointment',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fertility Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'IVF Consultation' },
          },
        ],
      },
    })
  }, [])

  return (
    <main>
      {schemaData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <Hero />
      <FormSection />
    </main>
  )
}