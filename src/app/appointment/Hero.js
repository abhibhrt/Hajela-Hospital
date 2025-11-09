'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaStar } from 'react-icons/fa'
import Stats from '../components/Stats'

const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
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
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6 border border-green-200'>
                            <FaCalendarAlt className='mr-2' /> START YOUR PARENTHOOD JOURNEY
                        </div>
                        <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight'>
                            Book <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>IVF Consultation</span> With Dr. Supriya Hajela
                        </h1>
                        <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
                            consult with <strong>bhopal&apos;s leading ivf specialist</strong> at <strong>nabh accredited hajela hospital</strong>. begin your fertility treatment journey with 14+ years of expertise.
                        </p>
                    </motion.div>
                    <motion.div
                        className='relative'
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                                <FaStar className='text-yellow-500 mr-2' /> our success metrics
                            </h3>
                            <Stats/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}