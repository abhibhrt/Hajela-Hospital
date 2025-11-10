import AchievementsPage from './AchievementsPage'

export const metadata = {
  title: 'Awards & Achievements | Dr. Supriya Hajela - IVF Specialist in Bhopal',
  description:
    'Explore the awards and recognitions of Dr. Supriya Hajela, a leading IVF & Fertility Specialist at Hajela Hospital Bhopal. Honored for excellence in reproductive medicine and fertility care across India.',
  alternates: { canonical: 'https://www.supriyahajela.in/achievements' },
  openGraph: {
    title: 'Awards & Achievements - Dr. Supriya Hajela | Hajela Hospital Bhopal',
    description:
      'Recognitions, honors, and career milestones of Dr. Supriya Hajela – Best IVF & Fertility Doctor in Bhopal.',
    url: 'https://www.supriyahajela.in/achievements',
    type: 'profile',
    siteName: 'Hajela Hospital - IVF & Fertility Center Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Supriya Hajela Awards - Hajela Hospital Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Supriya Hajela - Awards & Achievements | Hajela Hospital Bhopal',
    description:
      'Celebrating the accomplishments of Dr. Supriya Hajela, Bhopal’s renowned IVF & Fertility Specialist.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const achievementsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Supriya Hajela',
    jobTitle: 'IVF & Fertility Specialist',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Hajela Hospital - IVF & Fertility Center',
      url: 'https://www.supriyahajela.in',
    },
    image: 'https://www.supriyahajela.in/logo.jpg',
    award: [
      'Dr. Stya Paul Award for Clinical Excellence',
      'International Best Researcher Award 2024',
      'Dr. Subhash Mukopadhaya Award 2024',
    ],
    description:
      'Dr. Supriya Hajela has been recognized nationally and internationally for excellence in reproductive medicine and patient care.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementsJsonLd) }}
      />
      <AchievementsPage />
    </>
  )
}