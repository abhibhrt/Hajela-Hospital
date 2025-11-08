'use client'

import { motion } from 'framer-motion'

export default function Stats({ items = [] }) {
    return (
        <section className='py-12 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {items.map((stat, index) => (
                        <motion.div
                            role='region'
                            aria-label={stat.label}
                            key={index}
                            className='text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.06, duration: 0.45 }}
                        >
                            <div className='text-3xl mb-3 flex justify-center text-pink-500'>
                                {stat.icon}
                            </div>
                            <div className='text-2xl font-bold text-gray-900'>{stat.number}</div>
                            <div className='text-sm text-gray-600 mt-1'>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}