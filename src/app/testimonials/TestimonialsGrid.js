'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function TestimonialsGrid({ items = [] }) {
    return (
        <section className='py-10 bg-white'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div
                    className='text-center mb-16'
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
                        IVF Success Stories - Real Patient Experiences in Bhopal
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        17000+ IVF success stories from patients treated by Dr. Supriya Hajela - Best IVF Specialist in Bhopal at Hajela Hospital with 85% success rate.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items.map((t, index) => (
                        <motion.article
                            key={t.id}
                            className='relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-pink-500'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.06, duration: 0.48 }}
                        >
                            <div className='absolute -top-4 -left-4'>
                                <div className='w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg'>
                                    <FaQuoteLeft className='text-white text-sm' />
                                </div>
                            </div>

                            <div className='flex items-center mb-4'>
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} className='text-yellow-400' />
                                ))}
                            </div>

                            <p className='text-gray-600 leading-relaxed mb-6 italic'>&quot;{t.content}&quot;</p>

                            <div className='flex items-center space-x-4'>
                                <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-lg'>{t.icon}</div>
                                <div className='flex-1'>
                                    <h4 className='font-semibold text-gray-800'>{t.name}</h4>
                                    <div className='flex items-center justify-between text-sm text-gray-500'>
                                        <span>{t.location}</span>
                                        <span>{t.duration}</span>
                                    </div>
                                    <div className='text-xs text-pink-500 font-medium mt-1'>{t.treatment}</div>
                                </div>
                            </div>

                            <div className='absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10' />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}