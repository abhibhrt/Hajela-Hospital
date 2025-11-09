'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesGrid({ items = [] }) {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }} className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Comprehensive <span className='text-pink-500'>Fertility Treatments in Bhopal</span></h2>
                    <p className='text-lg text-gray-600 max-w-3xl mx-auto'>state-of-the-art reproductive medicine services with personalized care plans and the latest medical technology</p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items.map((service, index) => (
                        <motion.article
                            key={index}
                            className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-pink-500 overflow-hidden'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.05, duration: 0.48 }}
                        >
                            <div className='absolute -top-25 -right-25 opacity-30'>
                                <div className={`w-80 h-80 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    <div className='text-8xl text-white'>{service.icon}</div>
                                </div>
                            </div>

                            <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors duration-300 pr-16'>
                                {service.title}
                            </h3>

                            <p className='text-gray-600 leading-relaxed mb-4'>{service.desc}</p>

                            <div className='space-y-2'>
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className='flex items-center text-sm text-gray-600'>
                                        <div className='w-2 h-2 bg-pink-500 rounded-full mr-3' />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-6 pt-4 border-t border-gray-200'>
                                <Link href={`/info/${service.url}`} className='text-pink-500 text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300'>learn more →</Link>
                            </div>

                            <div className='absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}