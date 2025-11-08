"use client";

import {
  FaCalendarAlt,
  FaStethoscope,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaHospital,
  FaHeartbeat,
  FaMicroscope,
  FaClipboardList,
  FaRedo,
  FaBullseye,
  FaBookMedical,
  FaGlobe,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import AppointmentForm from "./booking";
import MapEmbed from "../components/embedmap";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
    appointmentType: "ivf-consultation",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [schemaData, setSchemaData] = useState(null);

  useEffect(() => {
    setSchemaData({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Hajela Hospital ART & Reproductive Center",
      "description": "NABH Accredited IVF and Fertility Treatment Center in Bhopal",
      "medicalSpecialty": "Reproductive Medicine, IVF, Infertility Treatment",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
      },
      "telephone": "+91-XXXXXXXXXX",
      "url": "https://yourwebsite.com/book-appointment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fertility Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IVF Consultation",
            },
          },
        ],
      },
    });
  }, []);

  const appointmentTypes = [
    {
      value: "ivf-consultation",
      label: "IVF Consultation",
      icon: <FaMicroscope className="text-blue-600 text-xl" />,
      description: "First time IVF discussion",
    },
    {
      value: "fertility-checkup",
      label: "Fertility Checkup",
      icon: <FaHeartbeat className="text-red-500 text-xl" />,
      description: "Complete fertility evaluation",
    },
    {
      value: "treatment-planning",
      label: "Treatment Planning",
      icon: <FaClipboardList className="text-teal-600 text-xl" />,
      description: "IVF/IUI treatment schedule",
    },
    {
      value: "follow-up",
      label: "Follow-up Visit",
      icon: <FaRedo className="text-green-600 text-xl" />,
      description: "Previous patient follow-up",
    },
  ];

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <section className="min-h-[50vh] bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-500 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6 border border-green-200 animate-pulse">
              <FaCalendarAlt className="mr-2" />
              Start Your Parenthood Journey
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Book{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                IVF Consultation
              </span>{" "}
              with Dr. Supriya Hajela
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Consult with <strong>Bhopal&apos;s leading IVF specialist</strong> at{" "}
              <strong>NABH Accredited Hajela Hospital</strong>. Begin your successful
              fertility treatment journey with 14+ years of expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* pass appointment types to form */}
            <AppointmentForm appointmentTypes={appointmentTypes} />

            <div className="space-y-6">
              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaHospital className="text-blue-600 mr-2" />
                  NABH Accredited IVF Center
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">Hajela Hospital</strong>
                    <br />
                    <strong>ART &amp; Reproductive Center</strong>
                    <br />
                    NABH Accredited Facility
                    <br />
                    Bhopal, Madhya Pradesh
                  </p>
                  <MapEmbed />
                </div>
              </div>

              <div
                className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FaAward className="mr-2" />
                  Why Choose Dr. Supriya Hajela?
                </h3>
                <div className="space-y-3">
                  {[
                    { text: "14+ Years IVF Experience", icon: <FaBullseye /> },
                    { text: "MBBS, MS, FICOG Qualified", icon: <FaBookMedical /> },
                    { text: "International Training", icon: <FaGlobe /> },
                    { text: "Award-Winning Specialist", icon: <FaTrophy /> },
                    { text: "Personalized Care", icon: <FaHeart /> },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-white/90 text-sm">
                      <span className="mr-3 text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  Our Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">17000+</div>
                    <div className="text-gray-600 text-xs">IVF Cycles</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">70%</div>
                    <div className="text-gray-600 text-xs">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">14+</div>
                    <div className="text-gray-600 text-xs">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">NABH</div>
                    <div className="text-gray-600 text-xs">Accredited</div>
                  </div>
                </div>
              </div>

              <div
                className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <FaStethoscope className="mr-2" />
                  Consultation Includes
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    "Fertility Assessment",
                    "Treatment Options Discussion",
                    "Cost & Timeline Explanation",
                    "Next Steps Guidance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <FaCheckCircle className="mr-2 text-white/90" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}