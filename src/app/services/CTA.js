'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClinicMedical, FaUserMd } from 'react-icons/fa'

export default function CTA() {
    return (
        <motion.section className='py-16 bg-gradient-to-r from-pink-500 to-purple-500' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
            <div className='max-w-4xl mx-auto px-2 sm:px-2 lg:px-4 text-center'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>ready to start your fertility journey?</h2>
                <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>consult with dr. supriya hajela at nabh accredited hajela hospital</p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link href='/appointment' className='inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                        <FaClinicMedical className='mr-3' />
                        book ivf consultation
                    </Link>

                    <a href='tel:+917551234567' className='inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300'>
                        <FaUserMd className='mr-3' />
                        call now: +91 755 1234567
                    </a>
                </div>

                <p className='text-white/80 text-sm mt-6'>nabh accredited • 14+ years experience • 17000+ ivf cycles • best fertility center bhopal</p>
            </div>
        </motion.section>
    )
}