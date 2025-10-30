import { FaStar, FaQuoteLeft, FaBaby, FaHeart, FaUserMd, FaUser } from "react-icons/fa";

export const metadata = {
  title: "Testimonials | Patient Success Stories - Dr. Supriya Hajela",
  description:
    "Read inspiring patient testimonials about successful IVF and fertility treatments at Hajela Hospital, Bhopal under Dr. Supriya Hajela&apos;s expert care.",
  keywords:
    "IVF success stories, patient testimonials, fertility treatment reviews, Dr. Supriya Hajela reviews, Hajela Hospital patient experiences",
  openGraph: {
    title: "Patient Testimonials - Dr. Supriya Hajela | IVF Success Stories",
    description:
      "Real stories from successful IVF treatments and fertility journeys at Hajela Hospital, Bhopal",
    type: "website",
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Pooja & Amit",
      location: "Bhopal",
      treatment: "IVF Treatment",
      rating: 5,
      content:
        "After years of trying, we finally conceived through IVF under Dr. Supriya Hajela&apos;s guidance. Her support and care were exceptional! The entire team at Hajela Hospital made our journey comfortable and hopeful.",
      icon: <FaUser />,
      duration: "2 years ago",
    },
    {
      id: 2,
      name: "Neha & Rakesh",
      location: "Indore",
      treatment: "ICSI Treatment",
      rating: 5,
      content:
        "Dr. Hajela made our parenthood journey smooth and hopeful. We&apos;re forever grateful for her expertise and compassionate approach. The NABH accredited facility gave us complete confidence in the treatment.",
      icon: <FaUser />,
      duration: "1 year ago",
    },
    {
      id: 3,
      name: "Priya & Sameer",
      location: "Jabalpur",
      treatment: "IUI Treatment",
      rating: 5,
      content:
        "We had almost lost hope after multiple failed attempts elsewhere. Dr. Supriya Hajela&apos;s personalized approach and advanced techniques made all the difference. Today we are blessed with twins!",
      icon: <FaUser />,
      duration: "8 months ago",
    },
    {
      id: 4,
      name: "Anjali & Vikram",
      location: "Gwalior",
      treatment: "PCOS Management",
      rating: 5,
      content:
        "As a PCOS patient, I struggled for years. Dr. Hajela&apos;s comprehensive PCOS management program changed everything. Her scientific approach combined with emotional support was incredible.",
      icon: <FaUser />,
      duration: "1.5 years ago",
    },
    {
      id: 5,
      name: "Sonia & Raj",
      location: "Bhopal",
      treatment: "Fertility Preservation",
      rating: 5,
      content:
        "We opted for egg freezing before my cancer treatment. Dr. Hajela&apos;s team was incredibly supportive throughout the process. Now, two years later, we&apos;re starting our IVF journey with hope.",
      icon: <FaUser />,
      duration: "2 years ago",
    },
    {
      id: 6,
      name: "Meera & Ankit",
      location: "Ujjain",
      treatment: "Laparoscopic Surgery + IVF",
      rating: 5,
      content:
        "The combination of laparoscopic surgery and IVF under Dr. Hajela&apos;s care was life-changing. Her surgical expertise and IVF knowledge gave us our miracle baby after 5 years of struggle.",
      icon: <FaUser />,
      duration: "6 months ago",
    },
  ];

  const stats = [
    { number: "17000+", label: "Happy Families", icon: FaHeart, color: "text-pink-500" },
    { number: "70%", label: "Success Rate", icon: FaStar, color: "text-yellow-500" },
    { number: "14+", label: "Years of Trust", icon: FaUserMd, color: "text-blue-500" },
    { number: "1000+", label: "Baby Photos", icon: FaBaby, color: "text-green-500" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-indigo-300 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
            <FaHeart className="mr-2" />
            Real Stories, Real Success
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Patient{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Read inspiring stories from couples who achieved their dream of parenthood
            through advanced fertility treatments at Hajela Hospital, Bhopal.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <stat.icon className={`text-3xl mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Stories of <span className="text-pink-500">Hope &amp; Happiness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from couples who trusted Dr. Supriya Hajela with their
              fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-pink-500"
              >
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaQuoteLeft className="text-white text-sm" />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-lg">
                    {testimonial.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{testimonial.location}</span>
                      <span>{testimonial.duration}</span>
                    </div>
                    <div className="text-xs text-pink-500 font-medium mt-1">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}