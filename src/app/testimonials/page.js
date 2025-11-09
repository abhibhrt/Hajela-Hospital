'use client'

import Hero from './Hero'
import Stats from './Stats'
import TestimonialsGrid from './TestimonialsGrid'
import { stats, testimonials } from '@/data/data-main'

// export const metadata = {
//   title: 'Testimonials | Patient Success Stories - Dr. Supriya Hajela',
//   description:
//     "Read inspiring patient testimonials about successful IVF and fertility treatments at Hajela Hospital, Bhopal under Dr. Supriya Hajela's expert care.",
// }

export default function TestimonialsPage() {
  return (
    <main>
      <Hero />
      <Stats items={stats} />
      <TestimonialsGrid items={testimonials} />
    </main>
  )
}