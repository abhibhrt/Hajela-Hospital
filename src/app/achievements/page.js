import AchievementsPage from './AchievementsPage'

export const metadata = {
  title: 'Dr. Supriya Hajela Awards - Best IVF Specialist Achievements in Bhopal | Hajela Hospital',
  description: 'Dr. Supriya Hajela - Award winning Best IVF Specialist in Bhopal with national & international recognition. Best IVF Doctor awards at Hajela Hospital - 14+ years experience, 17000+ IVF cycles success.',
  alternates: { canonical: 'https://www.supriyahajela.in/achievements' },
  openGraph: {
    title: 'Dr. Supriya Hajela Awards - Best IVF Specialist Achievements in Bhopal',
    description: 'Dr. Supriya Hajela - Best IVF Doctor in Bhopal awarded nationally and internationally for excellence in reproductive medicine at Hajela Hospital.',
    url: 'https://www.supriyahajela.in/achievements',
    type: 'profile',
    siteName: 'Hajela Hospital - Best IVF Center in Bhopal',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Supriya Hajela - Best IVF Specialist Awards in Bhopal | Hajela Hospital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Supriya Hajela - Best IVF Specialist Awards & Achievements in Bhopal',
    description: 'Award winning Best IVF Doctor in Bhopal - Dr. Supriya Hajela recognized nationally and internationally for fertility treatment excellence.',
    creator: '@HajelaHospital',
    images: ['/logo.jpg'],
  },
}

export default function Page() {
  const achievementsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal',
    jobTitle: 'Best IVF & Fertility Specialist',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Hajela Hospital - Best IVF Center in Bhopal',
      url: 'https://www.supriyahajela.in',
    },
    image: 'https://www.supriyahajela.in/logo.jpg',
    award: [
      'Best IVF Doctor in Bhopal - Young Achiever Award 2025',
      'Best IVF Specialist - Dr. Stya Paul Award 2024',
      'Best IVF Researcher - International Award 2024',
      'Best Fertility Specialist - Dr Subhash Mukopadhaya Award 2024',
      'Best IVF Center in Bhopal - Six Sigma Award 2024',
    ],
    description: 'Dr. Supriya Hajela - Best IVF Specialist in Bhopal awarded nationally and internationally for excellence in reproductive medicine at Hajela Hospital.',
    knowsAbout: [
      'IVF Treatment',
      'ICSI Fertility', 
      'IUI Procedure',
      'Egg Freezing',
      'PGT Genetic Testing',
      'Reproductive Medicine'
    ],
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