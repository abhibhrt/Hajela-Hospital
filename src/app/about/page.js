import AboutPage from './AboutPage'

export const metadata = {
    title: 'About Dr. Supriya Hajela | Leading IVF & Fertility Specialist in Bhopal',
    description:
        'Meet Dr. Supriya Hajela – Award-winning IVF & Fertility Specialist with 14+ years of experience. Practicing at NABH Accredited Hajela Hospital Bhopal, offering advanced IVF, ICSI, IUI & fertility preservation treatments.',
    alternates: { canonical: 'https://www.supriyahajela.in/about' },
    openGraph: {
        title: 'About Dr. Supriya Hajela - IVF Specialist | Hajela Hospital Bhopal',
        description:
            'Learn about Dr. Supriya Hajela, her qualifications, expertise, and contributions to fertility & reproductive medicine in Bhopal.',
        url: 'https://www.supriyahajela.in/about',
        type: 'profile',
        siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
        locale: 'en_IN',
        images: [
            {
                url: '/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Dr. Supriya Hajela - IVF Specialist in Bhopal | Hajela Hospital',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Dr. Supriya Hajela | IVF Specialist - Hajela Hospital Bhopal',
        description:
            'Know more about Dr. Supriya Hajela - Fertility & IVF Specialist in Bhopal with 14+ years of excellence at Hajela Hospital.',
        creator: '@HajelaHospital',
        images: ['/logo.jpg'],
    },
}

export default function Page() {
    const doctorJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: 'Dr. Supriya Hajela',
        description:
            'IVF Specialist in Bhopal with 14+ years of experience at NABH Accredited Hajela Hospital.',
        medicalSpecialty: ['Reproductive Medicine', 'Fertility Treatment', 'Gynecology'],
        hospitalAffiliation: {
            '@type': 'MedicalOrganization',
            name: 'Hajela Hospital - IVF & Fertility Center Bhopal',
            url: 'https://www.supriyahajela.in',
        },
        hasCredential: ['MBBS', 'MS', 'FICOG'],
        url: 'https://www.supriyahajela.in/about',
        image: 'https://www.supriyahajela.in/logo.jpg',
        sameAs: [
            'https://www.facebook.com/HajelaHospital',
            'https://www.instagram.com/hajelahospital',
            'https://www.linkedin.com/company/hajela-hospital',
        ],
    }

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(doctorJsonLd),
                }}
            />
            <AboutPage />
        </>
    )
}