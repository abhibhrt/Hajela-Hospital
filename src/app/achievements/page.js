import { FaTrophy, FaAward, FaUserMd } from "react-icons/fa";
import { awards, leadership, certifications, stats } from "@/data/achievements";

export const metadata = {
  title: "Awards & Achievements | Dr. Supriya Hajela - Best IVF Specialist in Bhopal",
  description:
    "Dr. Supriya Hajela - Award-winning IVF specialist with 10+ years experience. Recognized nationally & internationally for excellence in fertility treatment, research, and reproductive medicine in Bhopal.",
};

export default function Achievements() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[60vh] bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-red-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            <FaTrophy className="mr-2" /> Award-Winning IVF Specialist
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Award-Winning</span> Excellence in IVF & Fertility Care
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            Dr. Supriya Hajela - Recognized nationally and internationally for outstanding contributions to reproductive medicine, IVF treatment excellence, and groundbreaking research in fertility care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "320ms" }}>
            <a
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce"
            >
              <FaAward className="mr-3" /> Consult Award-Winning Specialist
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              Recognized <span className="text-yellow-500">Excellence</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
              Proven track record of success and recognition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const delay = 200 + index * 120;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <stat.icon className={`text-4xl mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED AWARDS */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              Prestigious <span className="text-yellow-500">Awards & Honors</span>
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
              National and international recognition for medical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.filter(a => a.featured).map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-100 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 140}ms` }}
              >
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

      {/* TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              Journey of <span className="text-yellow-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "160ms" }}>
              Continuous recognition and achievements over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-200"></div>
            <div className="space-y-12">
              {awards.map((award, index) => {
                const isReverse = index % 2 !== 0;
                const delay = 200 + index * 140;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }} />
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${isReverse ? "md:pl-8" : "md:pr-8"} animate-fade-in-up`} style={{ animationDelay: `${delay + 120}ms` }}>
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & CERTIFICATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-up" style={{ animationDelay: "80ms" }}>Leadership & <span className="text-yellow-500">Roles</span></h2>
              <div className="space-y-6">
                {leadership.map((role, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up"
                    style={{ animationDelay: `${120 + i * 120}ms` }}
                  >
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

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-up" style={{ animationDelay: "80ms" }}>International <span className="text-yellow-500">Certifications</span></h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up"
                    style={{ animationDelay: `${120 + i * 120}ms` }}
                  >
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaTrophy className="text-5xl text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>Trust Your Fertility Journey to an Award-Winning Specialist</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "160ms" }}>
            Experience the excellence that has earned national and international recognition. Dr. Supriya Hajela combines award-winning expertise with compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <a href="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <FaAward className="mr-3" /> Book Consultation with Award Winner
            </a>
            <a href="https://maps.app.goo.gl/oqYt1DQrsGS5PB1E9" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-yellow-600 transition-all duration-300">
              <FaUserMd className="mr-3" /> Visit Our IVF Center
            </a>
          </div>

          <p className="text-white/80 text-sm mt-6 animate-fade-in-up" style={{ animationDelay: "320ms" }}>NABH Accredited IVF Centre • Bhopal Trusted Fertility Specialist</p>
        </div>
      </section>
    </>
  );
}
