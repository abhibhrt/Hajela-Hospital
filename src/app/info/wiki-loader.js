'use client';
import { motion } from 'framer-motion';

export default function WikiLoader({ topic }) {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-gray-700 p-6'>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center'
            >
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{
                        rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 1.5, repeat: Infinity }
                    }}
                    className='w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mb-6 mx-auto'
                />
                <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className='text-2xl font-bold mb-2'>
                    Exploring Knowledge
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-lg text-gray-600'
                >
                    Loading <strong className='text-blue-600'>{topic}</strong>...
                </motion.p>
            </motion.div>
        </div>
    );
}