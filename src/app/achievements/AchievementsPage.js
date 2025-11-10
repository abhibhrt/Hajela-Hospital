'use client'

import Hero from './Hero'
import Stats from '../components/Stats'
import AwardsGrid from './AwardsGrid'
import Timeline from './Timeline'
import LeadershipCertifications from './LeadershipCertifications'
import { awards, leadership, certifications } from '@/data/data-main'

export default function AchievementsPage() {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <Stats />
            <AwardsGrid items={awards} />
            <Timeline items={awards} />
            <LeadershipCertifications
                leadership={leadership}
                certifications={certifications}
            />
        </main>
    )
}