'use client'

import Link from 'next/link'
import { FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa'

export default function CTA() {
    return (
        <section className='py-10 bg-gradient-to-r from-pink-500 to-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <div className='flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0'>
                    <div className='text-left'>
                        <h3 className='text-3xl font-bold mb-4'>
                            Need Immediate Fertility Assistance?
                        </h3>
                        <p className='text-red-100 text-lg'>
                            24/7 Emergency Consultation & Support Available at Hajela Hospital Bhopal
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-auto'>
                        <Link
                            href='/appointment'
                            className='inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'
                        >
                            <FaCalendarCheck className='mr-3' />
                            Book Appointment
                        </Link>
                        <a
                            href='tel:7777802361'
                            className='inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer'
                        >
                            <FaPhoneAlt className='mr-3' />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}