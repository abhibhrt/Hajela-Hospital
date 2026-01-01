'use client';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';

export default function WikiContent({ data }) {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='lg:col-span-2 space-y-6'
        >
            <div className='bg-blue-50 p-2 border border-blue-100'>
                <h2 className='text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2'>
                    <FaBook className='text-blue-500' /> Summary
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className='text-gray-800 leading-relaxed text-lg'
                >
                    {data.extract || 'No description available.'}
                </motion.p>
            </div>

            {data.description && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='bg-gray-50 p-3 border border-gray-200'
                >
                    <h3 className='text-xl font-semibold text-gray-800 mb-3'>About this topic</h3>
                    <p className='text-gray-700'>{data.description}</p>
                </motion.div>
            )}
        </motion.div>
    );
} 

