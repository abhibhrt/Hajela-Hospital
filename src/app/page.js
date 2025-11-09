'use client';
import { useEffect, useState, useRef } from 'react';
import StoryViewer from './components/storyview';
import HeroSection from './home/hero-section';
import ServicesSection from './home/services-section';
import GallerySection from './home/gallery-section';
import {stats, specialFeatures, gallery, services } from '@/data/data-main';
import { schemaData } from '@/data/data-meta';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-in-up');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // lightbox functions (kept in main)
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="h-96 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <StoryViewer />

      <HeroSection
        refProp={heroRef}
        stats={stats}
      />

      <section className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesSection services={services} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Advanced{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Fertility Treatments in Bhopal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive reproductive solutions with cutting-edge technology and compassionate care at{' '}
              <strong>Hajela Hospital Bhopal</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 group transition-all duration-300"
                data-animate
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <feature.icon className="text-4xl text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection
        gallery={gallery}
        openLightbox={openLightbox}
        selectedImage={selectedImage}
        closeLightbox={closeLightbox}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        handleKeyDown={handleKeyDown}
        currentIndex={currentIndex}
      />

      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600 text-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">Need Immediate Fertility Assistance?</h3>
              <p className="text-red-100 text-lg">
                24/7 Emergency Consultation & Support Available at Hajela Hospital Bhopal
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                book emergency appointment
              </a>
              <a
                href="tel:+917551234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                call now: +91 755 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}