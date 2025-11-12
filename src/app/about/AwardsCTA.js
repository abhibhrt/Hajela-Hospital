'use client'


import { motion } from 'framer-motion'
import {  FaHandHoldingHeart } from 'react-icons/fa'


export default function AwardsCTA({ awards = [] }) {
    return (
        <>
            <section className='py-16 bg-gray-50 relative overflow-hidden'>
                <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 relative z-10'>
                    <motion.div className='text-center mb-12' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                       <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
    Dr. Supriya Hajela Awards | Best IVF Doctor Recognition in Bhopal
</h2>
                        <p className='text-lg text-gray-700 max-w-3xl mx-auto'>
    Dr. Supriya Hajela - Award winning IVF Specialist in Bhopal recognized nationally for excellence in Fertility Treatments and Reproductive Medicine at Hajela Hospital.
</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {awards.map((award, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className='bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-blue-600'
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.12 }}
                                    transition={{ delay: index * 0.05, duration: 0.48 }}
                                >
                                    <div className='flex items-start space-x-4'>
                                        <div className='flex-shrink-0'>
                                            <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white'>
                                                {award.icon}
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='text-blue-600 font-bold text-lg mb-1'>{award.year}</div>
                                            <h3 className='text-l font-semibold text-gray-900 mb-2'>{award.title}</h3>
                                            <p className='text-gray-700'>{award.organization}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <motion.section className='py-16 bg-gray-100 relative overflow-hidden' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                <div className='max-w-4xl mx-auto px-2 sm:px-2 lg:px-4 text-center relative z-10'>
                    <div className='bg-white rounded-2xl p-4 shadow-lg border border-gray-200'>
                        <FaHandHoldingHeart className='text-5xl text-blue-600 mx-auto mb-6' />
                        <h2 className='text-3xl font-bold text-gray-900 mb-6'>My Mission &amp; Treatment Philosophy</h2>
                       <p className='text-lg text-gray-700 leading-relaxed mb-6'>
    Dr. Supriya Hajela's mission - Every couple deserves parenthood. As the Best IVF Specialist in Bhopal, I provide compassionate fertility care with latest IVF technology at Hajela Hospital. Medical excellence with emotional support for your parenthood journey in Madhya Pradesh.
</p>
                        <div className='text-right'>
                            <p className='text-blue-600 font-semibold'>- Dr. Supriya Hajela, IVF Specialist Bhopal</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}