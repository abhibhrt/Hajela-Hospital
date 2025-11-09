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
            className='bg-white'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 py-2'>
                <motion.div
                    className='text-center mb-16'
                    variants={fadeUp}
                >
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                        Advanced{' '}
                        <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
                            Fertility Treatments in Bhopal
                        </span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                        comprehensive reproductive solutions with cutting-edge technology and compassionate care at{' '}
                        <strong>hajela hospital bhopal</strong>
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
                            className='bg-white rounded-2xl px-2 py-5 shadow-xl hover:shadow-2xl group cursor-pointer border border-gray-200 relative overflow-hidden transition-all duration-300 flex flex-col items-center text-center'
                        >
                            <div className='flex justify-center items-center mb-6 text-4xl w-20 h-20 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 group-hover:scale-110 transition-transform duration-300'>
                                {service.icon}
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                                {service.title}
                            </h3>
                            <p className='text-gray-600 mb-6 px-2'>{service.desc}</p>
                            <Link
                                href={`/info/${service.title}`}
                                className='text-blue-600 font-semibold inline-flex items-center hover:underline'
                            >
                                know more <FaChevronRight className='ml-2' />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}