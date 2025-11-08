'use client'

import Hero from './Hero.js'
import Stats from './Stats.js'
import Features from './Features.js'
import ServicesGrid from './ServicesGrid.js'

import services from '@/data/services.js'
import { specialFeatures, stats } from '@/data/features'

// export const metadata = {
//   title:
//     'IVF, ICSI, IUI, PGT & Fertility Treatments in Bhopal | Dr. Supriya Hajela - Best IVF Specialist',
//   description:
//     'Advanced fertility treatments by Dr. Supriya Hajela - IVF, ICSI, IUI, PGT, AI Semen Analysis, High Risk Obstetrics at NABH Accredited Hajela Hospital, Bhopal. 14+ years experience, high success rates.',
// }

export default function ServicesPage() {
  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'hajela hospital art & reproductive center',
            description:
              'nabh accredited ivf and fertility centre in bhopal offering advanced fertility treatments by dr. supriya hajela',
            url: 'https://www.hajelahospital.com/services',
          }),
        }}
      />

      <Hero />
      <Stats items={stats} />
      <Features items={specialFeatures} />
      <ServicesGrid items={services} />
    </main>
  )
}