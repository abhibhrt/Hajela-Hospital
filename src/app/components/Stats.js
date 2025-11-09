'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/data-main'

export default function Stats() {
  const gradientStyles = [
    'from-blue-600 to-blue-700',
    'from-gray-800 to-gray-900',
    'from-slate-700 to-slate-800',
    'from-neutral-700 to-neutral-800'
  ]

  return (
    <section className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {stats.map((stat, index) => {
            const gradient = gradientStyles[index % gradientStyles.length]
            
            return (
              <motion.div
                key={index}
                className='group text-center bg-white transition-all duration-300 flex flex-col items-center justify-center cursor-pointer'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className={`mb-3 md:mb-4 flex items-center justify-center w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg text-white`}>
                  <div className='text-lg md:text-xl'>
                    {stat.icon}
                  </div>
                </div>
                <div className='text-lg font-semibold text-gray-900 mb-1'>
                  {stat.number}
                </div>
                <div className='text-xs text-gray-600 font-medium uppercase tracking-wide'>
                  {stat.label}
                </div>
                <div className={`w-8 h-0.5 bg-gradient-to-r ${gradient} mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}