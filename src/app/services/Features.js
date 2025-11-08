'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt } from 'react-icons/fa'

export default function Features({ items = [] }) {
    return (
        <section className='py-16 bg-gradient-to-r from-pink-50 to-purple-50'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4'>
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }} className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>why choose <span className='text-pink-500'>hajela hospital bhopal</span>?</h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>leading fertility center in madhya pradesh with advanced technology and expert care by dr. supriya hajela</p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {items.map((feature, index) => (
                        <motion.div
                            key={index}
                            className='text-center p-6 bg-white rounded-2xl shadow-md'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ delay: index * 0.06, duration: 0.45 }}
                        >
                            <div className='w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaShieldAlt className='text-white text-xl' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}