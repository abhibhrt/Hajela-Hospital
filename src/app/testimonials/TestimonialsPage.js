'use client'

import Hero from './Hero'
import Stats from '../components/Stats'
import TestimonialsGrid from './TestimonialsGrid'
import { stats, testimonials } from '@/data/data-main'

export default function TestimonialsPage() {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <Stats items={stats} />
            <TestimonialsGrid items={testimonials} />
        </main>
    )
}