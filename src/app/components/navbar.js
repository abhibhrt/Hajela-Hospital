"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiHome,
  FiAward,
  FiUser,
  FiStar,
  FiHeart,
  FiMail,
  FiSignInAlt,
} from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "Services", href: "/services", icon: FiHeart },
    { name: "Testimonials", href: "/testimonials", icon: FiStar },
    { name: "About", href: "/about", icon: FiUser },
    { name: "Achievements", href: "/achievements", icon: FiAward },
    { name: "Book Appointment", href: "/appointment", icon: HiOutlineCalendar },
    { name: "Admin Login", href: "/admin", icon: FiSignInAlt}
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () =>
      window.innerWidth >= 1024 && setIsMobileMenuOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
            : "bg-white backdrop-blur-md shadow-sm py-4"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ✅ Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
              aria-label="Dr. Supriya Hajela - Home"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full border-4 border-white shadow-lg"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">
                  Dr. Supriya Hajela
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Healthcare Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link, index) => {
                const IconComponent = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Emergency Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/appointment"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:animate-pulse"
              >
                <FiPhone className="w-4 h-4" />
                <span>Emergency</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6 text-red-500 animate-spin" />
                ) : (
                  <FiMenu className="w-6 h-6 text-blue-600 animate-bounce" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden border-t border-gray-200 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
          role="menu"
        >
          <div className="px-4 py-6 space-y-2">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 transform ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:translate-x-2"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  role="menuitem"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiMail className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>

              <Link
                href="/appointment"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiPhone className="w-5 h-5" />
                <span>Emergency Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="h-20"></div>
    </>
  );
}