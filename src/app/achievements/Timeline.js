'use client'

import { motion } from 'framer-motion'

export default function Timeline({ items = [] }) {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-6xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Journey of <span className='text-yellow-500'>Excellence</span></h2>
                    <p className='text-lg text-gray-600'>continuous recognition and achievements over the years</p>
                </motion.div>

                <div className='relative'>
                    <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-200'></div>
                    <div className='space-y-12'>
                        {items.map((award, index) => {
                            const reverse = index % 2 !== 0
                            return (
                                <motion.div
                                    key={index}
                                    className={`relative flex items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.12 }}
                                    transition={{ delay: index * 0.08, duration: 0.45 }}
                                >
                                    <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10' />
                                    <div className={`ml-12 md:ml-0 md:w-5/12 ${reverse ? 'md:pl-8' : 'md:pr-8'}`}>
                                        <div className='bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                                            <div className='flex items-center space-x-3 mb-3'>
                                                <div className={`w-10 h-10 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center`}>
                                                    {award.icon}
                                                </div>
                                                <div>
                                                    <div className='text-yellow-500 font-bold'>{award.year}</div>
                                                    <div className='text-xs text-gray-500'>{award.category}</div>
                                                </div>
                                            </div>
                                            <h3 className='font-bold text-gray-800 mb-2 text-lg'>{award.title}</h3>
                                            <p className='text-sm text-gray-600 leading-relaxed'>{award.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}