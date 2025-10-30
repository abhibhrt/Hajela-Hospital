import {FaUserMd, FaClinicMedical, FaShieldAlt } from "react-icons/fa";
import services from "@/data/services.js";
import { specialFeatures, stats } from "@/data/features";

export const metadata = {
  title: "IVF, ICSI, IUI, PGT & Fertility Treatments in Bhopal | Dr. Supriya Hajela - Best IVF Specialist",
  description: "Advanced fertility treatments by Dr. Supriya Hajela - IVF, ICSI, IUI, PGT, AI Semen Analysis, High Risk Obstetrics at NABH Accredited Hajela Hospital, Bhopal. 14+ years experience, high success rates.",
  keywords: "IVF treatment Bhopal, ICSI IUI services Bhopal, PGT testing MP, AI semen analysis, high risk pregnancy Bhopal, fertility specialist MP, best IVF center Madhya Pradesh, Dr. Supriya Hajela IVF, NABH accredited IVF, fertility doctor Bhopal, infertility treatment MP",
  authors: [{ name: "Dr. Supriya Hajela" }],
  openGraph: {
    title: "Best IVF & Fertility Treatments in Bhopal | Dr. Supriya Hajela - NABH Accredited",
    description: "Advanced IVF, ICSI, IUI, PGT services by award-winning specialist Dr. Supriya Hajela. 14+ years experience, high success rates at NABH hospital Bhopal",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Services() {

  return (
    <>
      {/* ENHANCED SCHEMA MARKUP FOR LOCAL SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Hajela Hospital ART & Reproductive Center",
            "description": "NABH Accredited IVF and Fertility Centre in Bhopal, Madhya Pradesh offering advanced fertility treatments by Dr. Supriya Hajela",
            "url": "https://www.hajelahospital.com/services",
            "medicalSpecialty": "Reproductive Medicine, IVF, Infertility Treatment",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fertility Services in Bhopal, Madhya Pradesh",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "IVF Treatment",
                    "description": "In-vitro fertilization with advanced techniques at NABH accredited centre"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ICSI IUI Services",
                    "description": "Advanced male infertility procedures with high success rates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PGT Genetic Testing",
                    "description": "Preimplantation Genetic Testing for healthy embryo selection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fertility Preservation",
                    "description": "Egg and embryo freezing with vitrification technology"
                  }
                }
              ]
            },
            "areaServed": {
              "@type": "State",
              "name": "Madhya Pradesh"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhopal",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "telephone": "+91-755-XXXXXXX",
            "openingHours": "Mo-Su 09:00-18:00"
          })
        }}
      />

      {/* Hero Section - SEO OPTIMIZED */}
      <section className="min-h-[60vh] bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-pink-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-200 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
              <FaClinicMedical className="mr-2" />
              Best Fertility Care in Bhopal, MP
            </div>

            {/* OPTIMIZED H1 WITH KEYWORDS */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Best <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">IVF & Fertility Treatments</span> in Bhopal
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Comprehensive <strong>fertility treatments and reproductive healthcare services</strong> with
              cutting-edge technology at <strong>NABH Accredited Hajela Hospital, Bhopal</strong>. 
              <strong> Best IVF Center in Madhya Pradesh</strong> with 14+ years experience and high success rates under <strong>Dr. Supriya Hajela</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - SEO ENHANCED */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3 flex justify-center text-pink-500">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features - SEO OPTIMIZED */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-pink-500">Hajela Hospital Bhopal</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading fertility center in <strong>Madhya Pradesh</strong> with advanced technology and expert care by <strong>Dr. Supriya Hajela</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - SUPER SEO OPTIMIZED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-pink-500">Fertility Treatments in Bhopal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art <strong>reproductive medicine services</strong> with personalized care plans
              and the latest medical technology in <strong>Bhopal, Madhya Pradesh</strong> under expert guidance of <strong>Dr. Supriya Hajela</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-pink-500"
              >
                <div className="absolute -top-4 -right-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors duration-300 pr-16">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="text-pink-500 text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SEO OPTIMIZED */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Fertility Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Consult with <strong>Dr. Supriya Hajela - Best IVF Specialist in Bhopal, MP</strong> at <strong>NABH Accredited Hajela Hospital</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/appointment" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaClinicMedical className="mr-3" /> Book IVF Consultation
            </a>
            <a 
              href="tel:+917551234567" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              <FaUserMd className="mr-3" /> Call Now: +91 755 1234567
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            NABH Accredited • 14+ Years Experience • 17000+ IVF Cycles • Best Fertility Center Bhopal
          </p>
        </div>
      </section>
    </>
  );
}