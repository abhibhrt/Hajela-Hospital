'use client';
import { motion } from 'framer-motion';
import {
    FaExpand,
    FaChevronRight,
    FaChevronLeft,
    FaTimes
} from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
};

export default function GallerySection({
    galleryData,
    openLightbox,
    selectedImage,
    closeLightbox,
    goToNext,
    goToPrevious,
    handleKeyDown,
    currentIndex
}) {
    return (
        <motion.section
            className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'
            id='gallery'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div className='text-center mb-16' variants={fadeUp}>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200'>
                        Our World-Class Facility in Bhopal
                    </div>
                    <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                        State-of-the-Art{' '}
                        <span className='bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
                            Medical Facilities
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Experience advanced fertility treatments at our{' '}
                        <strong>NABH accredited center in Bhopal</strong>.
                    </p>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {galleryData.map((image, index) => (
                        <motion.div
                            key={image.id}
                            variants={fadeUp}
                            custom={index / 2}
                            className='group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl'
                            onClick={() => openLightbox(image, index)}
                        >
                            <div className='relative h-64 overflow-hidden'>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                    <div className='bg-white/20 backdrop-blur-sm rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-500'>
                                        <FaExpand className='text-white text-xl' />
                                    </div>
                                </div>
                                <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full capitalize -translate-x-4 group-hover:translate-x-0 transition-transform duration-300'>
                                    {image.category}
                                </div>
                            </div>

                            <div className='p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                                    {image.title}
                                </h3>
                                <p className='text-gray-600 text-sm line-clamp-2'>
                                    {image.description}
                                </p>
                                <div className='mt-4 text-blue-600 text-sm font-semibold flex items-center'>
                                    View Image <FaChevronRight className='ml-2' />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className='relative max-w-6xl w-full'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                            className='absolute -top-16 right-0 text-white p-3 bg-black/50 rounded-full hover:bg-red-500 transition'
                        >
                            <FaTimes className='text-2xl' />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className='absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 bg-black/50 rounded-full hover:bg-blue-500 transition'
                        >
                            <FaChevronLeft className='text-2xl' />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 bg-black/50 rounded-full hover:bg-blue-500 transition'
                        >
                            <FaChevronRight className='text-2xl' />
                        </button>

                        <motion.div
                            className='bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto border-4 border-white shadow-2xl'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className='w-full h-auto max-h-[80vh] object-contain bg-black'
                            />
                            <div className='p-6'>
                                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                                    {selectedImage.title}
                                </h3>
                                <p className='text-gray-600'>{selectedImage.description}</p>
                                <div className='mt-4 flex justify-between items-center'>
                                    <span className='px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full'>
                                        {selectedImage.category}
                                    </span>
                                    <span className='text-gray-500 text-sm'>
                                        {currentIndex + 1} / {galleryData.length}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </motion.section>
    );
}