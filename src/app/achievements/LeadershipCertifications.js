'use client'

import { motion } from 'framer-motion'

export default function LeadershipCertifications({ leadership = [], certifications = [] }) {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                        <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Leadership & <span className='text-yellow-500'>Roles</span></h2>
                        <div className='space-y-6'>
                            {leadership.map((role, i) => (
                                <motion.div key={i} className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100' initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: i * 0.06, duration: 0.45 }}>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0'>
                                            {role.icon}
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='font-bold text-gray-800 text-lg'>{role.role}</h3>
                                            <p className='text-gray-600'>{role.organization}</p>
                                            <div className='text-sm text-yellow-500 font-medium mt-1'>{role.period}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                        <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>International <span className='text-yellow-500'>Certifications</span></h2>
                        <div className='space-y-6'>
                            {certifications.map((cert, i) => (
                                <motion.div key={i} className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100' initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: i * 0.06, duration: 0.45 }}>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                                            {cert.icon}
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='font-bold text-gray-800 text-lg'>{cert.name}</h3>
                                            <p className='text-gray-600'>{cert.institution}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}