'use client';
import { motion } from 'framer-motion';
import { FaWikipediaW, FaGlobe, FaHistory, FaExternalLinkAlt } from 'react-icons/fa';

export default function WikiHeader({ data }) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='bg-gradient-to-r from-blue-100 to-purple-100 border-b border-gray-200 py-4 px-2'
        >
            <div className='flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-4'>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className='p-3 bg-white rounded-2xl border border-gray-200'>
                        <FaWikipediaW className='text-blue-600 text-4xl' />
                    </motion.div>
                    <div>
                        <h1 className='text-2xl font-bold text-gray-800 mb-2'>{data.title.toUpperCase()}</h1>
                        <div className='flex items-center gap-4 text-gray-500 text-sm'>
                            <div className='flex items-center gap-1'>
                                <FaGlobe className='text-xs' />
                                <span>English Wikipedia</span>
                            </div>
                            {data.timestamp && (
                                <div className='flex items-center gap-1'>
                                    <FaHistory className='text-xs' />
                                    <span>Last updated</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {data.content_urls?.desktop?.page && (
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={data.content_urls.desktop.page}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-xl font-semibold shadow-lg transition-all duration-300'
                    >
                        <span>Open in Wikipedia</span>
                        <FaExternalLinkAlt className='text-sm' />
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
}