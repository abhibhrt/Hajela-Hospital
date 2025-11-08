'use client'

import Hero from './Hero'
import Stats from './Stats'
import AwardsGrid from './AwardsGrid'
import Timeline from './Timeline'
import LeadershipCertifications from './LeadershipCertifications'
// import CTA from './CTA'
import { awards, leadership, certifications, stats } from '@/data/achievements'

// export const metadata = {
//   title: 'Awards & Achievements | Dr. Supriya Hajela - Best IVF Specialist in Bhopal',
//   description:
//     'Dr. Supriya Hajela - Award-winning IVF specialist with 10+ years experience. Recognized nationally & internationally for excellence in fertility treatment, research, and reproductive medicine in Bhopal.',
// }

export default function AchievementsPage() {
  return (
    <main>
      <Hero />
      <Stats items={stats} />
      <AwardsGrid items={awards} />
      <Timeline items={awards} />
      <LeadershipCertifications leadership={leadership} certifications={certifications} />
      {/* <CTA /> */}
    </main>
  )
}