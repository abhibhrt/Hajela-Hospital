'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Best IVF Doctor in Bhopal
          </motion.h1>
          <p className="text-xl opacity-90">
            Dr. Supriya Hajela - Best IVF Specialist in Bhopal | Hajela Hospital
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch With Best IVF Specialist
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+91-7777802361</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hospital Address</h3>
                    <p className="text-gray-600">
                      Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad.<br />
                      Bhopal, Madhya Pradesh - 462001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaClock className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 12:00 PM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">Emergency services available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaWhatsapp className="text-green-600 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp Consultation</h3>
                    <p className="text-gray-600">+91-7777802361</p>
                    <p className="text-sm text-gray-500">Quick responses for queries</p>
                  </div>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Emergency IVF & Fertility Care
                </h3>
                <p className="text-red-700 mb-4">
                  Available 24/7 for urgent fertility consultations and treatments
                </p>
                <a 
                  href="tel:+917777802361"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Call Now: 7777802361
                </a>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Location in Bhopal
              </h3>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  Google Maps Integration<br />
                  <span className="text-sm">Geetanjali Complex, near Mata Mandir Square, Kotra Sultanabad, Bhopal</span>
                </p>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/?q=Hajela+Hospital+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Get Directions on Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Book Appointment With Best IVF Specialist
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Supriya Hajela - 14+ Years Experience | 17000+ Successful IVF Cycles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917777802361"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: 7777802361
            </a>
            <a 
              href="https://wa.me/7777802361"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}