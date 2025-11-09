'use client'

import { motion } from 'framer-motion'

export default function AwardsGrid({ items = [] }) {
    const featured = items.filter((a) => a.featured)
    return (
        <section className='py-16 bg-gradient-to-br from-yellow-50 to-orange-50'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Prestigious <span className='text-yellow-500'>Awards & Honors</span></h2>
                    <p className='text-lg text-gray-600'>national and international recognition for medical excellence</p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {featured.map((award, index) => (
                        <motion.article
                            key={index}
                            className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-100'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.1, duration: 0.45 }}
                        >
                            <div className='flex items-start space-x-4 mb-4'>
                                <div className={`w-12 h-12 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center`}>
                                    {award.icon}
                                </div>
                                <div>
                                    <div className='text-yellow-500 font-bold text-lg'>{award.year}</div>
                                    <div className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>{award.category}</div>
                                </div>
                            </div>
                            <h3 className='font-bold text-gray-800 text-lg mb-3 leading-tight'>{award.title}</h3>
                            <p className='text-sm text-gray-600 leading-relaxed'>{award.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}