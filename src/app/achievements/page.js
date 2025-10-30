import { FaTrophy, FaAward, FaStar, FaMedal, FaRibbon, FaCertificate, FaHeart, FaUserMd, FaGraduationCap, FaMicroscope, FaUniversity, FaGlobe } from "react-icons/fa";

export const metadata = {
  title: "Awards & Achievements | Dr. Supriya Hajela - Best IVF Specialist in Bhopal",
  description: "Dr. Supriya Hajela - Award-winning IVF specialist with 10+ years experience. Recognized nationally & internationally for excellence in fertility treatment, research, and reproductive medicine in Bhopal.",
  keywords: "IVF specialist awards, fertility doctor awards, Dr. Supriya Hajela achievements, best IVF doctor Bhopal, reproductive medicine awards, infertility treatment awards, IVF success awards, gynecology awards, Six Sigma IVF award, international researcher award",
  authors: [{ name: "Dr. Supriya Hajela" }],
  openGraph: {
    title: "Award-Winning IVF Specialist | Dr. Supriya Hajela - Bhopal",
    description: "Nationally & internationally recognized fertility specialist with multiple awards for IVF excellence and research",
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

export default function Achievements() {
  const awards = [
    { 
      year: "2024-25", 
      title: "Dr. STYA PAUL AWARD - EMERGING STAR", 
      description: "Indian Obstetrics & Gynecology - Emerging Star in Obstetrics & Gynecology", 
      icon: FaTrophy, 
      category: "National Excellence", 
      color: "from-yellow-400 to-yellow-600",
      featured: true
    },
    { 
      year: "2024", 
      title: "INTERNATIONAL BEST RESEARCHER AWARD", 
      description: "International Congress for Research Excellence 2024 - American Chamber of Research, World Research Council", 
      icon: FaAward, 
      category: "International Research", 
      color: "from-blue-500 to-blue-700",
      featured: true
    },
    { 
      year: "2024", 
      title: "DR SUBHASH MUKOPADHAYA AWARD", 
      description: "Indian Fertility Society - For Outstanding Contribution in Field of Infertility", 
      icon: FaMedal, 
      category: "National Recognition", 
      color: "from-purple-500 to-purple-700",
      featured: true
    },
    { 
      year: "2024", 
      title: "SIX SIGMA AWARD - BEST IVF CENTER", 
      description: "Best Upcoming IVF Center in Central India - Quality Excellence Recognition", 
      icon: FaStar, 
      category: "Regional Excellence", 
      color: "from-green-500 to-green-700" 
    },
    { 
      year: "2024", 
      title: "MP IFS RESEARCH AWARD", 
      description: "Research Publication Award - Indian Obstetrics and Gynecology Journal", 
      icon: FaCertificate, 
      category: "Research Excellence", 
      color: "from-red-500 to-red-700" 
    },
    { 
      year: "2024", 
      title: "EXCELLENCE ACADEMIC AWARD", 
      description: "MP Nursing Home Association - Academic Excellence Recognition", 
      icon: FaRibbon, 
      category: "Academic Achievement", 
      color: "from-pink-500 to-pink-700" 
    },
    { 
      year: "2023", 
      title: "YOUTH ICON AWARD", 
      description: "Indian Society of Assisted Reproduction - Youth Icon in Reproductive Medicine", 
      icon: FaHeart, 
      category: "National Recognition", 
      color: "from-indigo-500 to-indigo-700" 
    },
    {
      year: "2025",
      title: "YOUNG ACHIEVER AWARD",
      description: "Awarded by the Global Medical Excellence Forum for outstanding contributions in reproductive medicine and IVF advancements.",
      icon: FaAward,
      category: "International Excellence",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const leadership = [
    { role: "Director & IVF Coordinator", organization: "ART & Reproductive Center, Hajela Hospital", period: "Present", icon: FaUserMd },
    { role: "Treasurer", organization: "Bhopal Menopause Society", period: "2024-2026", icon: FaMedal },
    { role: "Senior Lecturer", organization: "School of Embryology & Assisted Reproduction (SEART)", period: "Present", icon: FaGraduationCap },
  ];

  const certifications = [
    { name: "Post Graduate Diploma in ART", institution: "University of Schleswig Holstein, Germany", icon: FaUniversity },
    { name: "Fetal Medicine Foundation Certified", institution: "Fetal Medicine Foundation, UK", icon: FaGlobe },
    { name: "Certified Sonologist", institution: "Thomas Jefferson University Hospital, USA", icon: FaCertificate },
    { name: "Fellowship in Minimal Invasive Surgery", institution: "Max Institute, New Delhi", icon: FaMedal },
  ];

  const stats = [
    { number: "10+", label: "Years Experience in ART", icon: FaUserMd, color: "text-yellow-500" },
    { number: "7+", label: "National Awards", icon: FaAward, color: "text-blue-500" },
    { number: "2", label: "International Recognitions", icon: FaTrophy, color: "text-green-500" },
    { number: "15+", label: "Research Publications", icon: FaMicroscope, color: "text-purple-500" },
  ];

  return (
    <>
      {/* Hero Section with Schema Markup */}
      <section className="min-h-[60vh] bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-red-400 rounded-full animate-ping"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-6 animate-pulse">
            <FaTrophy className="mr-2" /> Award-Winning IVF Specialist
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Award-Winning</span> Excellence in IVF & Fertility Care
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Dr. Supriya Hajela - Recognized nationally and internationally for outstanding contributions to reproductive medicine, IVF treatment excellence, and groundbreaking research in fertility care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group animate-bounce">
              <FaAward className="mr-3 group-hover:scale-110 transition-transform" /> Consult Award-Winning Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Recognized <span className="text-yellow-500">Excellence</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600">Proven track record of success and recognition</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <stat.icon className={`text-4xl mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Awards Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Prestigious <span className="text-yellow-500">Awards & Honors</span>
            </h2>
            <p className="text-xl text-gray-600">National and international recognition for medical excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.filter(award => award.featured).map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-100">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <award.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-yellow-500 font-bold text-lg">{award.year}</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{award.category}</div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-3 leading-tight">{award.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Awards Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Journey of <span className="text-yellow-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">Continuous recognition and achievements over the years</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-200"></div>
            <div className="space-y-12">
              {awards.map((award, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center`}>
                          <award.icon className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-yellow-500 font-bold">{award.year}</div>
                          <div className="text-xs text-gray-500">{award.category}</div>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">{award.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Leadership Roles */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Leadership & <span className="text-yellow-500">Roles</span></h2>
              <div className="space-y-6">
                {leadership.map((role, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <role.icon className="text-yellow-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">{role.role}</h3>
                        <p className="text-gray-600">{role.organization}</p>
                        <div className="text-sm text-yellow-500 font-medium mt-1">{role.period}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">International <span className="text-yellow-500">Certifications</span></h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <cert.icon className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">{cert.name}</h3>
                        <p className="text-gray-600">{cert.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaTrophy className="text-5xl text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Trust Your Fertility Journey to an Award-Winning Specialist</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the excellence that has earned national and international recognition. Dr. Supriya Hajela combines award-winning expertise with compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group">
              <FaAward className="mr-3 group-hover:scale-110 transition-transform" /> Book Consultation with Award Winner
            </a>
            <a href="https://maps.app.goo.gl/oqYt1DQrsGS5PB1E9" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 group">
              <FaUserMd className="mr-3" /> Visit Our IVF Center
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">NABH Accredited IVF Centre • Bhopal Trusted Fertility Specialist</p>
        </div>
      </section>
    </>
  );
}