// File: components/about/AboutHero.jsx
'use client'


import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUserMd } from 'react-icons/fa'


const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }


export default function AboutHero({ stats = [] }) {
    return (
        <section className='min-h-[40vh] bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden'>
            <div className='relative z-10 max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 py-8 lg:py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <motion.div
                        className='space-y-6'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.18 }}
                        variants={sectionVariant}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium border border-green-200'>
                            <FaUserMd className='mr-2' />
                            BEST IVF SPECIALIST IN BHOPAL
                        </div>


                        <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight'>
                            Dr. Supriya Hajela: <span className='bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent'>Best IVF Doctor</span> in Bhopal
                        </h1>


                        <p className='text-xl text-gray-700  max-w-2xl'>
                            Renowned IVF and fertility specialist with extensive experience in assisted reproductive technology. Director and IVF coordinator at NABH accredited Hajela Hospital, Bhopal. Advanced IVF, ICSI, IUI treatments with proven outcomes.
                        </p>


                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4'>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className='text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105'
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ delay: 0.15 + index * 0.04, duration: 0.45 }}
                                >
                                    <div className='text-2xl font-bold text-gray-900'>{stat.number}</div>
                                    <div className='text-xs text-gray-700 mt-1'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className='relative'
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='text-center space-y-4'>
                            <div className='w-60 h-60 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl'>
                                <Image src='/dr-image.png' alt='dr. supriya hajela photo' width={224} height={224} className='rounded-full border-4 border-white shadow-lg' />
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-2xl font-bold text-gray-900'>Dr. Supriya Hajela</h3>
                                <p className='text-gray-700'>MBBS, MS, FICOG</p>
                                <p className='text-sm text-blue-600 font-semibold'>Director & IVF Coordinator - NABH Hospital</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}