'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMicroscope, FaSyringe, FaSnowflake, FaProcedures, FaHeartbeat, FaUserMd } from 'react-icons/fa'


const mapIcons = {
    FaMicroscope,
    FaSyringe,
    FaSnowflake,
    FaProcedures,
    FaHeartbeat,
    FaUserMd,
}


export default function Expertise({ items = [] }) {
    return (
        <section className='py-16 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 relative z-10'>
                <motion.div className='text-center mb-12' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                        Fertility Treatments & <span className='bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent'>Specialized Services</span>
                    </h2>
                    <p className='text-xl text-gray-700 max-w-3xl mx-auto'>comprehensive services in reproductive medicine at hajela hospital</p>
                </motion.div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items.map((skill, index) => {
                        const Icon = mapIcons[skill.iconName] || FaMicroscope
                        return (
                            <motion.article
                                key={index}
                                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border border-gray-200'
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ delay: index * 0.05, duration: 0.48 }}
                            >
                                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                                    <Icon />
                                </div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>{skill.title.toUpperCase()}</h3>
                                <p className='text-gray-700 leading-relaxed'>{skill.description}</p>
                                <div className='mt-4 pt-4 border-t border-gray-200'>
                                    <Link href={`/info/${skill.url}`} className='text-blue-600 text-sm font-semibold group-hover:underline transition-all duration-300'>learn more &rarr;</Link>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}