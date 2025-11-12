'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

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
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6'>
                            <FaHeart className='mr-2' /> REAL STORIES, REAL SUCCESS
                        </div>

                        <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight'>
    IVF Success Stories - Patient Testimonials for Dr. Supriya Hajela in Bhopal
</h1>

                       <p className='text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto'>
    Read IVF success stories from 17000+ happy patients treated by Dr. Supriya Hajela - Best IVF Specialist in Bhopal at Hajela Hospital. Real patient testimonials with 85% success rate.
</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}