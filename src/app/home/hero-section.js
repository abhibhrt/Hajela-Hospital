'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaCalendarCheck, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
};

export default function HeroSection({ refProp, stats }) {
    return (
        <section
            ref={refProp}
            className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden'
        >
            {/* animated background orbs */}
            <div className='absolute inset-0 opacity-10'>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute rounded-full'
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 40 + 20}px`,
                            height: `${Math.random() * 40 + 20}px`,
                            background: 'linear-gradient(45deg, #3b82f6, #10b981)'
                        }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* left image section */}
                    <motion.div
                        className='relative flex justify-center'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <div className='bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 flex flex-col items-center'>
                            <div className='text-center space-y-6'>
                                <div className='w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl relative'>
                                    <img
                                        src='/dr-prof.png'
                                        alt='Dr. Supriya Hajela - Best IVF Specialist in Bhopal at NABH Accredited Hajela Hospital'
                                        className='w-76 h-76 rounded-full border-4 border-white shadow-lg object-cover'
                                    />
                                    <motion.div
                                        className='absolute -bottom-2 -right-2 bg-green-500 text-white p-3 rounded-full flex items-center justify-center shadow-md'
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                                    >
                                        <FaAward className='text-xl' />
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
                                        Your Journey to Parenthood Starts Here
                                    </h3>
                                    <p className='text-gray-600 mt-2 text-lg'>trusted ivf care in bhopal</p>
                                </div>
                            </div>
                        </div>

                        {/* floating badges */}
                        <motion.div
                            className='absolute -top-4 -right-4 bg-yellow-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg'
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <FaAward className='text-lg' />
                            <span className='font-bold'>17000+ IVF Success</span>
                        </motion.div>

                        <motion.div
                            className='absolute -bottom-4 -left-4 bg-purple-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg'
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <FaAward className='text-lg' />
                            <span className='font-bold'>NABH Certified</span>
                        </motion.div>
                    </motion.div>

                    {/* right content */}
                    <motion.div
                        className='space-y-8 flex flex-col justify-center'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            variants={fadeUp}
                            className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg'
                        >
                            <FaAward className='mr-3 text-xl' />
                            NABH Accredited IVF Centre Bhopal
                        </motion.div>

                        <motion.div variants={fadeUp} custom={2} className='space-y-6'>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left'>
                                <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
                                    Dr. Supriya Hajela
                                </span>
                            </h1>
                            <div className='text-2xl sm:text-3xl text-gray-700 font-semibold text-center lg:text-left'>
                                MBBS, MS, FICOG - Best IVF Specialist in Bhopal
                            </div>
                            <p className='text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl text-center lg:text-left'>
                                <strong>award-winning ivf & fertility specialist</strong> with over{' '}
                                <strong>14 years of experience</strong> at{' '}
                                <strong>nabh accredited hajela hospital, bhopal</strong>.
                            </p>
                        </motion.div>

                        {/* stats grid */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className='grid grid-cols-2 sm:grid-cols-4 gap-4'
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    custom={index / 2}
                                    className='text-center p-4 bg-white/80 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 group hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center'
                                >
                                    <div className={`text-3xl ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.icon}
                                    </div>
                                    <div className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
                                        {stat.number}
                                    </div>
                                    <div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={4}
                            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
                        >
                            <Link
                                href='/appointment'
                                className='inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300'
                            >
                                <FaCalendarCheck className='mr-3 text-xl' />
                                Book IVF Consultation
                            </Link>

                            <Link
                                href='tel:+917551234567'
                                className='inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300'
                            >
                                <FaPhoneAlt className='mr-3 text-lg' />
                                Call Now
                            </Link>
                        </motion.div>

                        {/* location link */}
                        <motion.div
                            variants={fadeUp}
                            custom={5}
                            className='flex flex-wrap gap-4 justify-center lg:justify-start text-sm'
                        >
                            <a
                                href='https://maps.app.goo.gl/oqYt1DQrsGS5PB1E9'
                                className='flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors'
                            >
                                <FaMapMarkerAlt className='mr-2 text-base' />
                                bhopal location
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}