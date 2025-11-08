'use client'

import { motion } from 'framer-motion'
import AppointmentForm from './book/Booking'
import MapEmbed from '@/app/components/embedmap'
import { FaHospital, FaAward, FaStar, FaBullseye, FaBookMedical, FaGlobe, FaTrophy, FaHeart, FaStethoscope, FaCheckCircle } from 'react-icons/fa'

export default function FormSection() {
    const appointmentTypes = [
        { value: 'ivf-consultation', label: 'IVF Consultation', color: 'text-blue-600', desc: 'first time ivf discussion' },
        { value: 'fertility-checkup', label: 'Fertility Checkup', color: 'text-red-500', desc: 'complete fertility evaluation' },
        { value: 'treatment-planning', label: 'Treatment Planning', color: 'text-teal-600', desc: 'ivf/iui treatment schedule' },
        { value: 'follow-up', label: 'Follow-up Visit', color: 'text-green-600', desc: 'previous patient follow-up' },
    ]

    return (
        <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                    <AppointmentForm appointmentTypes={appointmentTypes} />
                </motion.div>
                
                <motion.div className='space-y-6' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1, duration: 0.6 }}>
                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200'>
                        <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                            <FaHospital className='text-blue-600 mr-2' /> NABH Accredited IVF Center
                        </h3>
                        <p className='text-gray-600 text-sm mb-4'>
                            <strong>Hajela Hospital</strong><br />Art & Reproductive Center<br />NABH Accredited Facility<br />Bhopal, Madhya Pradesh
                        </p>
                        <MapEmbed />
                    </div>

                    <div className='bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white'>
                        <h3 className='text-xl font-bold mb-4 flex items-center'>
                            <FaAward className='mr-2' /> Why Choose Dr. Supriya Hajela?
                        </h3>
                        <ul className='space-y-2 text-sm'>
                            {[
                                { text: '14+ years ivf experience', icon: <FaBullseye /> },
                                { text: 'mbbs, ms, ficog qualified', icon: <FaBookMedical /> },
                                { text: 'international training', icon: <FaGlobe /> },
                                { text: 'award-winning specialist', icon: <FaTrophy /> },
                                { text: 'personalized care', icon: <FaHeart /> },
                            ].map((f, i) => (
                                <li key={i} className='flex items-center text-white/90'>
                                    <span className='mr-2 text-lg'>{f.icon}</span>
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white'>
                        <h3 className='text-xl font-bold mb-3 flex items-center'>
                            <FaStethoscope className='mr-2' /> Consultation Includes
                        </h3>
                        <ul className='space-y-2 text-sm'>
                            {['fertility assessment', 'treatment options discussion', 'cost & timeline explanation', 'next steps guidance'].map((item, i) => (
                                <li key={i} className='flex items-center'>
                                    <FaCheckCircle className='mr-2 text-white/90' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}