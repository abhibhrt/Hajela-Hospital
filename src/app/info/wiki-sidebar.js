'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function WikiSidebar({ data, imageLoaded, setImageLoaded }) {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='space-y-6'
        >
            {data.originalimage?.source && (
                <div className='bg-gray-50 p-2 border border-gray-200'>
                    <AnimatePresence>
                        <motion.img
                            key={data.originalimage.source}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: imageLoaded ? 1 : 0,
                                scale: imageLoaded ? 1 : 0.8
                            }}
                            transition={{ duration: 0.5 }}
                            src={data.originalimage.source}
                            alt={data.title}
                            onLoad={() => setImageLoaded(true)}
                            className='w-full h-64 object-cover shadow-md'
                        />
                    </AnimatePresence>
                    {!imageLoaded && (
                        <div className='w-full h-64 bg-gray-100 animate-pulse flex items-center justify-center'>
                            <div className='text-gray-400'>Loading image...</div>
                        </div>
                    )}
                </div>
            )}

            <div className='bg-blue-50 p-2 border border-blue-100'>
                <h3 className='text-xl font-semibold text-blue-800 mb-4'>Quick Facts</h3>
                <div className='space-y-3 text-gray-700'>
                    <div>
                        <strong className='text-gray-900'>Title:</strong> {data.title}
                    </div>
                    {data.description && (
                        <div>
                            <strong className='text-gray-900'>Type:</strong> {data.description}
                        </div>
                    )}
                    <div>
                        <strong className='text-gray-900'>Source:</strong> Wikipedia
                    </div>
                </div>
            </div>
        </motion.div>
    );
}