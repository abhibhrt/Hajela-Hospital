// app/page.js or pages/index.js
"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  FaChevronRight,
  FaCalendarCheck,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaChevronLeft,
  FaExpand,
  FaAward,
} from "react-icons/fa";
import galleryData from "@/data/gallery";
import { stats, services, features, schemaData } from "@/data/home";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Lightbox Functions
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="h-96 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                background: `linear-gradient(45deg, #3b82f6, #10b981)`,
                borderRadius: "50%",
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative" data-animate>
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-2xl p-6 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl relative">
                    <img
                      src="/dr-prof.png"
                      alt="Dr. Supriya Hajela - Best IVF Specialist in Bhopal at NABH Accredited Hajela Hospital"
                      className="w-76 h-76 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full animate-bounce">
                      <FaAward className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Your Journey to Parenthood Starts Here
                    </h3>
                    <p className="text-gray-600 mt-2 text-lg">Trusted IVF Care in Bhopal</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-6 py-3 rounded-full animate-bounce flex items-center space-x-2 shadow-lg">
                <FaAward className="text-lg" />
                <span className="font-bold">17000+ IVF Success</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-6 py-3 rounded-full animate-pulse flex items-center space-x-2 shadow-lg">
                <FaAward className="text-lg" />
                <span className="font-bold">NABH Certified</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                data-animate
              >
                <FaAward className="mr-3 text-xl" />
                NABH Accredited IVF Centre Bhopal
              </div>

              <div className="space-y-6" data-animate>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Dr. Supriya Hajela
                  </span>
                </h1>
                <div className="text-2xl sm:text-3xl text-gray-700 font-semibold">
                  MBBS, MS, FICOG - Best IVF Specialist in Bhopal
                </div>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  <strong>Award-winning IVF & Fertility Specialist</strong> with over{" "}
                  <strong>14 years of experience</strong> at{" "}
                  <strong>NABH Accredited Hajela Hospital, Bhopal</strong>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" data-animate>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/80 rounded-xl shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-200 group transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon
                      className={`text-3xl ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" data-animate>
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <FaCalendarCheck className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  Book Free IVF Consultation
                </Link>
                <Link
                  href="tel:+917551234567"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group"
                >
                  <FaPhoneAlt className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Call Now
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm" data-animate>
                <a
                  href="https://maps.app.goo.gl/oqYt1DQrsGS5PB1E9"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Bhopal Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Advanced{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Fertility Treatments in Bhopal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive reproductive solutions with cutting-edge technology and
              compassionate care at <strong>Hajela Hospital Bhopal</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl group cursor-pointer border border-gray-200 relative overflow-hidden transition-all duration-300"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 font-semibold inline-flex items-center hover:underline"
                  >
                    Know More <FaChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-16">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Thousands Trust
            </span>{" "}
            Dr. Supriya Hajela?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 group transition-all duration-300"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="gallery" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
              Our World-Class Facility in Bhopal
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Medical Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience advanced fertility treatments at our{" "}
              <strong>NABH accredited center in Bhopal</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-500">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full capitalize -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    {image.category}
                  </div>
                </div>
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
                  <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center">
                    View Image <FaChevronRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
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
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <FaCalendarCheck className="mr-3 text-xl" />
                Emergency Appointment
              </Link>
              <a
                href="tel:+917551234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <FaPhoneAlt className="mr-3" />
                Call Now: +91 755 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white p-3 bg-black/50 rounded-full hover:bg-red-500 transition"
            >
              <FaTimes className="text-2xl" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 bg-black/50 rounded-full hover:bg-blue-500 transition"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 bg-black/50 rounded-full hover:bg-blue-500 transition"
            >
              <FaChevronRight className="text-2xl" />
            </button>

            <div
              className="bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto border-4 border-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {currentIndex + 1} / {galleryData.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}