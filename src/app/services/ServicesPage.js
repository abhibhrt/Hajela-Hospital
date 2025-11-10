'use client'

import Hero from './Hero.js'
import Stats from '../components/Stats.js'
import Features from './Features.js'
import ServicesGrid from './ServicesGrid.js'
import { stats, specialFeatures, services } from '@/data/data-main'

export default function ServicesPage() {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <Stats items={stats} />
            <Features items={specialFeatures} />
            <ServicesGrid items={services} />
        </main>
    )
}