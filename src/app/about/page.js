'use client'

import { useState, useEffect } from 'react'
import AboutHero from './AboutHero.js'
import Qualifications from './Qualifications.js'
import Expertise from './Experties.js'
import AwardsCTA from './AwardsCTA.js'
import { awards, stats, qualifications, expertise } from '@/data/data-main';


export default function AboutPage() {
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return <div className='min-h-screen bg-gray-50 animate-pulse' />
    }


    return (
        <main>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Physician',
                        name: 'dr. supriya hajela',
                        description: 'ivf specialist in bhopal with years of experience at nabh accredited hajela hospital',
                        medicalSpecialty: 'reproductive medicine',
                        hospitalAffiliation: 'hajela hospital',
                        hasCredential: 'mbbs, ms, ficog',
                        yearsOfExperience: '14',
                    }),
                }}
            />


            <AboutHero stats={stats} />
            <Qualifications items={qualifications} />
            <Expertise items={expertise} />
            <AwardsCTA awards={awards} />
        </main>
    )
}