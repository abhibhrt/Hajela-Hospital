'use client'

import AboutHero from './AboutHero'
import Qualifications from './Qualifications'
import Expertise from './Experties'
import AwardsCTA from './AwardsCTA'
import { awards, stats, qualifications, expertise } from '@/data/data-main'

export default function AboutPage() {
    return (
        <main className='overflow-hidden'>
            <AboutHero stats={stats} />
            <Qualifications items={qualifications} />
            <Expertise items={expertise} />
            <AwardsCTA awards={awards} />
        </main>
    )
}