'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTrophy, FaAward } from 'react-icons/fa'

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
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-6'>
                            <FaTrophy className='mr-2' /> AWARD-WINNING IVF SPECIALIST
                        </div>
                        <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight'>
    Dr. Supriya Hajela Awards - Best IVF Specialist in Bhopal | Award-Winning Excellence
</h1>
                        <p className='text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8'>
    Dr. Supriya Hajela - Best IVF Specialist in Bhopal awarded nationally and internationally for IVF treatment excellence at Hajela Hospital. 14+ years experience with 17000+ successful IVF cycles in Madhya Pradesh.
</p>
                       <Link href='/appointment' className='inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300' title='Book Appointment with Best IVF Doctor in Bhopal'>
    <FaAward className='mr-3' /> Consult Best IVF Specialist in Bhopal
</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}