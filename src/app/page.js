"use client";
import Link from "next/link";
import { FaAward, FaStethoscope, FaMicroscope, FaSyringe, FaChevronRight, FaChartBar, FaHeart, FaCalendarCheck, FaStar, FaUsers, FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaExpand } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

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
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Gallery Images Data
  const galleryImages = [
    {
      id: 1,
      src: "/gallery/operation-theater.jpg",
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
      description: "Join 5000+ happy families who achieved their dream of parenthood at Hajela Hospital - Best IVF Center in Bhopal.",
      category: "success"
    },
    {
      id: 6,
      src: "/gallery/awards-ceremony.jpg",
      alt: "Awards & Recognition - Dr Supriya Hajela Achievements Bhopal",
      title: "National Recognition",
      description: "Award-winning excellence in reproductive medicine recognized by national medical bodies - Hajela Hospital Bhopal.",
      category: "awards"
    }
  ];

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

  const stats = [
    { number: "14+", label: "Years IVF Experience", icon: FaAward, color: "text-yellow-500" },
    { number: "17000+", label: "IVF Cycles", icon: FaHeart, color: "text-red-500" },
    { number: "NABH", label: "Accredited Centre", icon: FaStar, color: "text-green-500" },
    { number: "70%", label: "Success Rate", icon: FaUsers, color: "text-blue-500" },
  ];

  const services = [
    { name: "IVF Treatment", icon: <FaMicroscope />, desc: " Advanced In Vitro Fertilization with high success rates at NABH hospital Bhopal" },
    { name: "ICSI IUI Services", icon: <FaSyringe />, desc: " Intrauterine Insemination and ICSI with precision for male infertility treatment" },
    { name: "Fertility Assessment", icon: <FaChartBar />, desc: " Comprehensive Evaluation & Diagnosis by best fertility specialist in Bhopal" },
    { name: "PCC Treatment", icon: <FaStethoscope />, desc: " Personalized Couple Care with tailored treatment plans ensuring complete reproductive health" },
  ];

  const features = [
    { title: "Expert IVF Experience", desc: "14+ years specialized in reproductive medicine and fertility treatments", icon: FaAward },
    { title: "NABH Accredited", desc: "Highest quality & safety standards for IVF procedures in Bhopal", icon: FaShieldAlt },
    { title: "Personalized Care", desc: "Individualized treatment plans by Dr. Supriya Hajela for each patient", icon: FaHeart },
  ];

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
      {/*  SCHEMA MARKUP FOR HOMEPAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Dr. Supriya Hajela - Best IVF Specialist in Bhopal | Hajela Hospital",
            "description": "Award-winning IVF and Fertility Specialist with 14+ years experience at NABH Accredited Hajela Hospital Bhopal",
            "url": "https://www.hajelahospital.com",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "Hajela Hospital",
              "medicalSpecialty": "Reproductive Medicine"
            }
          })
        }}
      />

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden"
      >
        {/* Advanced Animated Background */}
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
                borderRadius: '50%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Enhanced Image Section */}
            <div className="relative" data-animate>
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-2xl p-6 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl relative">
                    <img
                      src="/dr-prof.png"
                      alt="Dr. Supriya Hajela - Best IVF Specialist in Bhopal at NABH Accredited Hajela Hospital"
                      className="w-76 h-76 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    {/* Verified Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full animate-bounce">
                      <FaCheckCircle className="text-xl" />
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

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-6 py-3 rounded-full animate-bounce flex items-center space-x-2 shadow-lg">
                <FaStar className="text-lg" />
                <span className="font-bold">17000+ IVF Success</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-6 py-3 rounded-full animate-pulse flex items-center space-x-2 shadow-lg">
                <FaCheckCircle className="text-lg" />
                <span className="font-bold">NABH Certified</span>
              </div>
            </div>

            {/* Enhanced Text Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <div
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                data-animate
              >
                <FaAward className="mr-3 text-xl" />
                NABH Accredited IVF Centre Bhopal
              </div>

              {/* Main Heading */}
              <div className="space-y-6" data-animate>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Dr. Supriya Hajela
                  </span>
                </h1>

                <div className="text-2xl sm:text-3xl text-gray-700 font-semibold leading-relaxed">
                  MBBS, MS, FICOG - Best IVF Specialist in Bhopal
                </div>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  <strong>Award-winning IVF & Fertility Specialist</strong> with over <strong>14 years of experience</strong> at
                  <strong> NABH Accredited Hajela Hospital, Bhopal</strong>. Trusted for compassionate,
                  evidence-based reproductive care with <strong>personalized approach</strong> and <strong>high success rates</strong>.
                </p>
              </div>

              {/* Interactive Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" data-animate>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/80 rounded-xl shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-200 cursor-pointer group transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className={`text-3xl ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" data-animate>
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <FaCalendarCheck className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                    Book Free IVF Consultation
                  </span>
                </Link>

                <Link
                  href="tel:+917551234567"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group"
                >
                  <FaPhoneAlt className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Call Now
                </Link>
              </div>

              {/* Quick Contact Bar */}
              <div className="flex flex-wrap gap-4 text-sm" data-animate>
                <a href="https://maps.app.goo.gl/oqYt1DQrsGS5PB1E9" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <FaMapMarkerAlt className="mr-2" />
                  Bhopal Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Fertility Treatments in Bhopal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive reproductive solutions with cutting-edge technology and
              compassionate care for your parenthood journey at <strong>Hajela Hospital Bhopal</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl group cursor-pointer border border-gray-200 relative overflow-hidden transition-all duration-300"
                data-animate
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <Link href={`/info/${service.name}`} className="text-blue-600 font-semibold group-hover:underline transition-all duration-300 inline-flex items-center">
                      Know More <FaChevronRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-16" data-animate>
            Why <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Thousands Trust</span> Dr. Supriya Hajela?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl backdrop-blur-sm border border-gray-200 group cursor-pointer transition-all duration-300"
                data-animate
              >
                <div className="relative">
                  <feature.icon className="text-4xl text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SEO Optimized Heading */}
          <div className="text-center mb-16" data-animate>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
              🏥 Our World-Class Facility in Bhopal
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Medical Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience advanced fertility treatments at our <strong>NABH accredited center in Bhopal</strong>,
              equipped with cutting-edge technology for <strong>highest success rates in IVF, IUI and ICSI treatments</strong>.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder Background */}
                  <div className="gallery-image w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <span className="text-white text-lg font-bold text-center px-4">{image.title}</span>
                  </div>

                  {/* Overlay */}
                  <div className="gallery-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="expand-icon bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <FaExpand className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="category-badge absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full capitalize transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    {image.category}
                  </div>
                </div>

                {/* Content */}
                <div className="gallery-content p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {image.description}
                  </p>
                  <div className="mt-4 view-more-link flex items-center text-blue-600 text-sm font-semibold">
                    View Image
                    <FaChevronRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16" data-animate>
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Visit Our World-Class Facility in Bhopal
                </h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  See our advanced medical equipment and comfortable facilities personally.
                  Book a facility tour today and start your journey to parenthood with <strong>Dr. Supriya Hajela</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 group"
                  >
                    📅 Book Facility Tour
                  </Link>
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

      {/* Enhanced Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">Need Immediate Fertility Assistance?</h3>
              <p className="text-red-100 text-lg"> 24/7 Emergency Consultation & Support Available at Hajela Hospital Bhopal</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/emergency"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:scale-105 transform transition-all duration-300 group"
              >
                <FaCalendarCheck className="mr-3 text-xl group-hover:scale-110 transition-transform" />
                Emergency Appointment
              </Link>
              <a
                href="tel:+917551234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 group"
              >
                <FaPhoneAlt className="mr-3 group-hover:scale-110 transition-transform" />
                Call Now: +91 755 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-backdrop fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content relative max-w-6xl max-h-full w-full">

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close absolute -top-16 right-0 text-white rounded-full p-3 bg-black/50 hover:bg-red-500 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="lightbox-nav-btn absolute left-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-4 bg-black/50 hover:bg-blue-500 transition-colors"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="lightbox-nav-btn absolute right-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-4 bg-black/50 hover:bg-blue-500 transition-colors"
            >
              <FaChevronRight className="text-2xl" />
            </button>

            {/* Content */}
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto border-4 border-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-96 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold text-center px-8">{selectedImage.title}</span>
              </div>

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
    </>
  );
}