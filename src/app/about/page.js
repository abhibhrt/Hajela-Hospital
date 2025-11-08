'use client'

import { useState, useEffect } from 'react'
import AboutHero from './AboutHero.js'
import Qualifications from './Qualifications.js'
import Expertise from './Experties.js'
import AwardsCTA from './AwardsCTA.js'


export default function AboutPage() {
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])


    const qualifications = [
        { degree: 'mbbs', institution: 'medical college', year: '2005', icon: 'FaGraduationCap' },
        { degree: 'ms', institution: 'specialization in obstetrics & gynecology', year: '2009', icon: 'FaUserMd' },
        { degree: 'ficog', institution: 'fellowship in reproductive medicine', year: '2012', icon: 'FaAward' },
        { degree: 'ivf training', institution: 'international fertility center', year: '2013', icon: 'FaStar' },
    ]


    const expertise = [
        { iconName: 'FaMicroscope', title: 'ivf & icsi treatment', description: 'advanced in vitro fertilization techniques with high success rates at nabh accredited centre' },
        { iconName: 'FaSyringe', title: 'iui services', description: 'intrauterine insemination procedures with precision timing for optimal results' },
        { iconName: 'FaSnowflake', title: 'fertility preservation', description: 'egg & embryo freezing services using vitrification technology' },
        { iconName: 'FaProcedures', title: 'laparoscopic surgery', description: 'minimally invasive procedures for fibroids and cysts with faster recovery' },
        { iconName: 'FaHeartbeat', title: 'pcos management', description: 'comprehensive pcos treatment including lifestyle modification and ovulation induction' },
        { iconName: 'FaUserMd', title: 'male infertility', description: 'complete male fertility evaluation with advanced semen analysis and treatment' },
    ]


    const awards = [
        { year: '2024', title: 'best ivf specialist award', organization: 'national health awards', icon: 'FaAward' },
        { year: '2024', title: 'excellence in reproductive medicine', organization: 'indian medical association', icon: 'FaStar' },
        { year: '2023', title: 'women healthcare leader', organization: 'healthcare excellence awards', icon: 'FaRibbon' },
        { year: '2023', title: 'patient choice award', organization: 'times health survey', icon: 'FaHeart' },
    ]


    const stats = [
        { number: '14+', label: 'years ivf experience' },
        { number: '17000+', label: 'ivf cycles' },
        { number: '70%', label: 'success rate' },
        { number: 'nabh', label: 'accredited' },
    ]


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