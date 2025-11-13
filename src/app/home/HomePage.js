'use client'
import { useEffect, useState, useRef } from 'react'
import StoryViewer from '../components/storyview'
import HeroSection from './hero-section'
import ServicesSection from './services-section'
import GallerySection from './gallery-section'
import axios from 'axios'
import { stats, specialFeatures, gallery, services } from '@/data/data-main'

export default function Home() {
    const [mounted, setMounted] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const heroRef = useRef(null)
    const [galleryData, setGalleryData] = useState(gallery);

    useEffect(() => {
        async function GalleryDataFetch(params) {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/gallery`);
                setGalleryData(response.data);
            }
            catch (err) {
                console.log(err?.message);
            }
        }
        console.log('chup behenchod')
        GalleryDataFetch();
    }, []);

    useEffect(() => {
        setMounted(true)
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('animate-fade-in-up')
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const openLightbox = (image, index) => {
        setSelectedImage(image)
        setCurrentIndex(index)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        setCurrentIndex(0)
    }

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        setSelectedImage(gallery[newIndex])
    }

    const goToNext = () => {
        const newIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        setSelectedImage(gallery[newIndex])
    }

    const handleKeyDown = e => {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') goToPrevious()
        if (e.key === 'ArrowRight') goToNext()
    }

    if (!mounted) {
        return (
            <div className='min-h-screen bg-gray-50 animate-pulse'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                    <div className='h-96 bg-gray-200 rounded-2xl' />
                </div>
            </div>
        )
    }

    return (
        <>
            <StoryViewer />
            <HeroSection refProp={heroRef} stats={stats} />

            {/* services */}
            <section className='py-20 bg-white' data-animate>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <ServicesSection services={services} />
                </div>
            </section>

            {/* features */}
            <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50' data-animate>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            comprehensive reproductive solutions with cutting-edge technology and compassionate care at{' '}
                            <strong>hajela hospital bhopal</strong>
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {specialFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className='p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 group transition-all duration-300 text-center flex flex-col items-center justify-center'
                                data-animate
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className='w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-50 to-teal-50 group-hover:scale-110 transition-transform duration-300'>
                                    <div className='text-4xl text-blue-600 flex items-center justify-center'>
                                        {feature.icon}
                                    </div>
                                </div>
                                <h4 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                                    {feature.title}
                                </h4>
                                <p className='text-gray-600'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* gallery */}
            <GallerySection
                gallery={galleryData}
                openLightbox={openLightbox}
                selectedImage={selectedImage}
                closeLightbox={closeLightbox}
                goToNext={goToNext}
                goToPrevious={goToPrevious}
                handleKeyDown={handleKeyDown}
                currentIndex={currentIndex}
            />
        </>
    )
}