'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
};

export default function ServicesSection({ services }) {
    return (
        <motion.section
            className='py-20 bg-white'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    className='text-center mb-16'
                    variants={fadeUp}
                >
                    <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                        Advanced{' '}
                        <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
                            Fertility Treatments in Bhopal
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Comprehensive reproductive solutions with cutting-edge technology and compassionate care at{' '}
                        <strong>Hajela Hospital Bhopal</strong>
                    </p>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            custom={index / 2}
                            className='bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl group cursor-pointer border border-gray-200 relative overflow-hidden transition-all duration-300'
                        >
                            <div className='text-center'>
                                <div className='mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300'>
                                    {service.icon}
                                </div>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                                    {service.name}
                                </h3>
                                <p className='text-gray-600 mb-6'>{service.desc}</p>
                                <Link
                                    href={service.link}
                                    className='text-blue-600 font-semibold inline-flex items-center hover:underline'
                                >
                                    Know More <FaChevronRight className='ml-2' />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}