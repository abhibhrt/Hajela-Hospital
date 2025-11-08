'use client'

import { motion } from 'framer-motion'

export default function Stats({ items = [] }) {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>recognized <span className='text-yellow-500'>excellence</span> in numbers</h2>
                    <p className='text-xl text-gray-600'>proven track record of success and recognition</p>
                </motion.div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {items.map((stat, i) => (
                        <motion.div
                            key={i}
                            className='text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: i * 0.1, duration: 0.45 }}
                        >
                            <stat.icon className={`text-4xl mx-auto mb-4 ${stat.color}`} />
                            <div className='text-3xl font-bold text-gray-800'>{stat.number}</div>
                            <div className='text-sm text-gray-600 mt-2 font-medium'>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}