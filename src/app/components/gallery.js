"use client";

import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/operation-theatre.png",
      alt: "Modern Operation Theater - Hajela Hospital IVF Center Bhopal",
      title: "Advanced Operation Theater",
      description: "State-of-the-art surgical facility for IVF procedures and laparoscopic surgeries with international standards at Hajela Hospital Bhopal.",
      category: "facility"
    },
    {
      id: 2,
      src: "/gallery/ivf-lab.jpg",
      alt: "Advanced IVF Laboratory - Hajela Hospital Fertility Center Bhopal",
      title: "Modern IVF Laboratory",
      description: "Equipped with latest technology for embryo culture, ICSI, and cryopreservation ensuring highest IVF success rates in Bhopal.",
      category: "facility"
    },
    {
      id: 3,
      src: "/gallery/recovery-room.jpg",
      alt: "Patient Recovery Room - Hajela Hospital Bhopal Comfort Care",
      title: "Luxury Recovery Suites",
      description: "Comfortable and private recovery rooms with modern amenities for post-procedure care and relaxation at our Bhopal center.",
      category: "facility"
    },
    {
      id: 4,
      src: "/gallery/fertility-assessment.jpg",
      alt: "Fertility Assessment - Dr Supriya Hajela Consultation Bhopal",
      title: "Comprehensive Assessment",
      description: "Detailed fertility evaluation and personalized treatment planning with Dr. Supriya Hajela at Hajela Hospital Bhopal.",
      category: "consultation"
    },
    {
      id: 5,
      src: "/gallery/success-stories.jpg",
      alt: "Success Stories - Happy Parents Hajela Hospital Bhopal",
      title: "Success Celebrations",
      description: "Join 17000+ happy families who achieved their dream of parenthood at Hajela Hospital - Best IVF Center in Bhopal.",
      category: "success"
    },
    {
      id: 6,
      src: "/gallery/awards-ceremony.jpg",
      alt: "Awards & Recognition - Dr Supriya Hajela Achievements Bhopal",
      title: "National Recognition",
      description: "Award-winning excellence in reproductive medicine recognized by national medical bodies - Hajela Hospital Bhopal.",
      category: "awards"
    },
    {
      id: 7,
      src: "/gallery/ultrasound-room.jpg",
      alt: "Advanced Ultrasound Facility - Hajela Hospital Bhopal",
      title: "Modern Ultrasound Room",
      description: "High-resolution ultrasound machines for precise fertility monitoring and diagnosis at our Bhopal IVF center.",
      category: "facility"
    },
    {
      id: 8,
      src: "/gallery/patient-waiting.jpg",
      alt: "Comfortable Waiting Area - Hajela Hospital Bhopal",
      title: "Comfortable Waiting Lounge",
      description: "Spacious and comfortable waiting area for patients and families at Hajela Hospital IVF Center Bhopal.",
      category: "facility"
    },
    {
      id: 9,
      src: "/gallery/team-photo.jpg",
      alt: "Expert Medical Team - Dr Supriya Hajela IVF Clinic Bhopal",
      title: "Expert Medical Team",
      description: "Our dedicated team of fertility specialists, embryologists, and support staff at Hajela Hospital Bhopal.",
      category: "team"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  // Categories for filtering
  const categories = ["all", "facility", "consultation", "success", "awards", "team"];

  return (
    <>
      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEO Optimized Heading */}
          <div className="text-center mb-16" data-animate>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
              🏥 Our World-Class Facility
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Medical Facilities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience advanced fertility treatments at our NABH accredited center in Bhopal, 
              equipped with cutting-edge technology for highest success rates in IVF, IUI and ICSI treatments.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg hover-lift overflow-hidden cursor-pointer transform transition-all duration-500"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {image.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {image.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold group-hover:underline transition-all duration-300">
                    View Image
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16" data-animate>
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Visit Our World-Class Facility in Bhopal
                </h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  See our advanced medical equipment and comfortable facilities personally. 
                  Book a facility tour today and start your journey to parenthood.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/book-appointment" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover-lift transform transition-all duration-300 group"
                  >
                    📅 Book Facility Tour
                  </a>
                  <a 
                    href="tel:+917551234567" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 group"
                  >
                    📞 Call for Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
            >
              <FaChevronRight className="text-2xl" />
            </button>

            {/* Image */}
            <div 
              className="bg-white rounded-lg overflow-hidden max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Hajela Hospital",
            "description": "NABH Accredited IVF Center in Bhopal with state-of-the-art facilities for fertility treatments",
            "url": "https://www.hajelahospital.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhopal",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "photo": galleryImages.map(image => ({
              "@type": "ImageObject",
              "contentUrl": `https://www.hajelahospital.com${image.src}`,
              "name": image.alt,
              "description": image.description
            })),
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Advanced Operation Theater"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Modern IVF Laboratory"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Luxury Recovery Rooms"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Comfortable Waiting Lounge"
              }
            ],
            "medicalSpecialty": "Reproductive Medicine"
          })
        }}
      />
    </>
  );
  
}
