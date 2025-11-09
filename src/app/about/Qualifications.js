'use client'


import { motion } from 'framer-motion'
import { FaGraduationCap, FaUserMd, FaAward, FaStar } from 'react-icons/fa'


const iconMap = {
    FaGraduationCap,
    FaUserMd,
    FaAward,
    FaStar,
}


export default function Qualifications({ items = [] }) {
    return (
        <section className='py-16 bg-gray-50 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 relative z-10'>
                <motion.div className='text-center mb-12' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                        Professional <span className='bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent'>Qualifications</span>
                    </h2>
                    <p className='text-xl text-gray-700 max-w-3xl mx-auto'>comprehensive medical education and specialized training in reproductive medicine</p>
                </motion.div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {items.map((qual, index) => {
                        const Icon = iconMap[qual.icon] || FaGraduationCap
                        return (
                            <motion.div
                                key={index}
                                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200'
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ delay: index * 0.06, duration: 0.45 }}
                            >
                                <Icon className='text-3xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300' />
                                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>{qual.degree}</h3>
                                <p className='text-gray-700 text-sm mb-2'>{qual.institution}</p>
                                <div className='text-blue-600 font-semibold text-sm'>{qual.year}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}