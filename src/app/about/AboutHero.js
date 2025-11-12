// File: components/about/AboutHero.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUserMd } from 'react-icons/fa'
import Stats from '../components/Stats'

const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function AboutHero() {
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
                            Dr. Supriya Hajela - Best IVF Specialist in Bhopal | 14+ Years Experience | Hajela Hospital
                        </h1>

                        <p className='text-lg text-gray-700 max-w-2xl'>
                            Dr. Supriya Hajela - Best IVF Specialist in Bhopal with 14+ years experience. Leading IVF Doctor at NABH Accredited Hajela Hospital offering advanced IVF, ICSI, IUI, Egg Freezing treatments with 85% success rate. Top Fertility Expert in Madhya Pradesh.
                        </p>

                        <Stats/>
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
                                {/* Image with proper width and height */}
                                <div className="w-56 h-56 relative">
                                    <Image 
                                        src='/dr-image.png' 
                                        alt='Dr. Supriya Hajela - Best IVF Specialist in Bhopal | Hajela Hospital Fertility Doctor'
                                        fill
                                        className='rounded-full border-4 border-white shadow-lg object-cover'
                                        sizes="(max-width: 224px) 100vw, 224px"
                                    />
                                </div>
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