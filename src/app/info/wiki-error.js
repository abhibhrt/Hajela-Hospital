'use client';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function WikiError({ topic }) {
    return (
        <div className='min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex flex-col items-center justify-center p-6'>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='text-center max-w-md'>
                <div className='w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto'>
                    <FaSearch className='text-red-500 text-3xl' />
                </div>
                <h2 className='text-2xl font-bold text-red-600 mb-3'>Knowledge Not Found</h2>
                <p className='text-gray-700 mb-6'>
                    We couldn&apos;t find information about <strong>{topic}</strong>. Try searching for a different topic or check the spelling.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.history.back()}
                    className='bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                >
                    Go Back
                </motion.button>
            </motion.div>
        </div>
    );
}