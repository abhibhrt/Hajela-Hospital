import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStethoscope,
  FaAward,
  FaShieldAlt,
  FaHeart,
  FaBaby,
  FaClinicMedical,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiArrowRight, FiPhone as FiPhoneIcon } from "react-icons/fi";
import CTA from "./CTA";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "IVF Treatment",
    "Fertility Assessment",
    "IUI Services",
    "Embryo Freezing",
    "PCOS Treatment",
    "Male Infertility",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Achievements", href: "/achievements" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Book Appointment", href: "/appointment" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 relative overflow-hidden">
      <CTA/>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-800 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-800 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-800 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-pink-800 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Medical Icons Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 animate-float">
          <FaHeart className="text-blue-500 text-4xl" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float delay-1000">
          <FaBaby className="text-teal-500 text-3xl" />
        </div>
        <div className="absolute top-1/2 right-20 animate-bounce delay-500">
          <FaClinicMedical className="text-purple-500 text-5xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-700 to-teal-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 animate-pulse">
                <FaHeart className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Dr. Supriya Hajela
                </h3>
                <p className="text-gray-300 mt-1 text-sm">IVF & Fertility Specialist</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed text-sm">
              Award-winning IVF & Fertility Specialist with 14+ years of experience.
              Director & IVF Coordinator at NABH Accredited Hajela Hospital, Bhopal.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Accreditation Badge */}
            <div className="flex items-center space-x-3 bg-green-900/20 border border-green-700 rounded-xl p-4 mt-4 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <FaShieldAlt className="text-green-500 text-xl flex-shrink-0" />
              <div>
                <p className="text-green-500 font-semibold text-sm">NABH Accredited</p>
                <p className="text-gray-300 text-xs">ART & Reproductive Centre</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <FaStethoscope className="text-blue-500" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 group py-2 animate-slide-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <FiArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <FaAward className="text-teal-400" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-all duration-300 group cursor-pointer py-2 animate-slide-in-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Link href={`/info/${service}`} className="text-sm group-hover:translate-x-1 transition-transform duration-300">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <FaEnvelope className="text-purple-500" />
              <span>Contact Info</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300 animate-fade-in">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Hajela Hospital Geetanjali Complex<br />
                    Kotra Sultanabad Bhopal, Madhya Pradesh<br />
                    India - 462001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300 animate-fade-in delay-100">
                <FaPhone className="text-teal-400 flex-shrink-0 text-lg" />
                <a
                  href="tel:9575052525"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-sm"
                >
                  +91 XXXXXXXXXX
                </a>
              </div>

              <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300 animate-fade-in delay-200">
                <FaEnvelope className="text-purple-500 flex-shrink-0 text-lg" />
                <a
                  href="mailto:hajelahospital@ymail.com"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-sm"
                >
                  hajelahospital@ymail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm text-center md:text-left">
            © {currentYear} Dr. Supriya Hajela | All Rights Reserved
          </div>

          <div className="flex items-center space-x-6 text-sm">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Sitemap", href: "/sitemap" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300 hover:underline animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-gray-700">
          {[
            { icon: FaShieldAlt, text: "NABH Accredited", color: "text-green-500" },
            { icon: FaAward, text: "14+ Years Experience", color: "text-yellow-500" },
            { icon: FaHeart, text: "17000+ Happy Families", color: "text-red-500" },
          ].map((badge, index) => (
            <div
              key={badge.text}
              className="flex items-center space-x-2 text-gray-300 animate-bounce delay-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <badge.icon className={badge.color} />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Dr. Supriya Hajela - Hajela Hospital",
            url: "https://hajelahospital.com",
            logo: "https://hajelahospital.com/logo.png",
            description:
              "NABH Accredited ART & Reproductive Centre in Bhopal offering IVF and fertility treatments",
            medicalSpecialty: [
              "IVF",
              "Fertility Treatment",
              "Reproductive Medicine",
              "IUI",
              "Embryo Freezing",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Hajela Hospital",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              postalCode: "462001",
              addressCountry: "India",
            },
            telephone: "+91-XXXXXXXXXX",
            email: "info@hajelahospital.com",
            openingHours: ["Mo-Su 00:00-23:59"],
            hasCredential: "NABH Accreditation",
            founder: {
              "@type": "Person",
              name: "Dr. Supriya Hajela",
              jobTitle: "IVF & Fertility Specialist",
            },
            areaServed: { "@type": "State", name: "Madhya Pradesh" },
            sameAs: [
              "https://www.facebook.com/hajelahospital",
              "https://www.instagram.com/hajelahospital",
              "https://www.linkedin.com/company/hajelahospital",
            ],
          }),
        }}
      />
    </footer>
  );
}