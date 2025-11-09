"use client";
import {
    FaTrophy,
    FaAward,
    FaStar,
    FaMedal,
    FaRibbon,
    FaCertificate,
    FaHeart,
    FaUserMd,
    FaGraduationCap,
    FaMicroscope,
    FaUniversity,
    FaGlobe,
    FaBullseye,
    FaShieldAlt,
    FaBaby,
    FaSyringe,
    FaDna,
    FaSnowflake,
    FaRobot,
    FaStethoscope,
    FaHeartbeat,
    FaClinicMedical,
    FaUser,
    FaCrown,
    FaHospital,
    FaUsers,
    FaCheckCircle,
    FaLightbulb,
    FaMicroscope as FaScience,
} from "react-icons/fa";

/* === ACHIEVEMENTS === */
export const awards = [
    {
        year: "2025",
        title: "YOUNG ACHIEVER AWARD",
        description:
            "Global Medical Excellence Forum - Outstanding contributions in reproductive medicine and IVF advancements.",
        icon: <FaAward />,
        category: "International Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
        url: "young-achiever-award",
    },
    {
        year: "2024-25",
        title: "Dr. STYA PAUL AWARD - EMERGING STAR",
        description:
            "Indian Obstetrics & Gynecology - Emerging Star in Obstetrics & Gynecology",
        icon: <FaTrophy />,
        category: "National Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
        url: "dr-stya-paul-award-emerging-star",
    },
    {
        year: "2024",
        title: "INTERNATIONAL BEST RESEARCHER AWARD",
        description:
            "International Congress for Research Excellence 2024 - American Chamber of Research, World Research Council",
        icon: <FaMedal />,
        category: "International Research",
        color: "from-blue-500 to-blue-700",
        featured: true,
        url: "international-best-researcher-award",
    },
    {
        year: "2024",
        title: "DR SUBHASH MUKOPADHAYA AWARD",
        description:
            "Indian Fertility Society - For Outstanding Contribution in Field of Infertility",
        icon: <FaCrown />,
        category: "National Recognition",
        color: "from-purple-500 to-purple-700",
        url: "dr-subhash-mukopadhaya-award",
    },
    {
        year: "2024",
        title: "SIX SIGMA AWARD - BEST IVF CENTER",
        description:
            "Best Upcoming IVF Center in Central India - Quality Excellence Recognition",
        icon: <FaRibbon />,
        category: "Regional Excellence",
        color: "from-green-500 to-green-700",
        url: "six-sigma-award-best-ivf-center",
    },
];

/* === LEADERSHIP ROLES === */
export const leadership = [
    {
        role: "Director & IVF Coordinator",
        organization: "ART & Reproductive Center, Hajela Hospital",
        period: "Present",
        icon: <FaUserMd />,
        url: "director-ivf-coordinator",
    },
    {
        role: "Treasurer",
        organization: "Bhopal Menopause Society",
        period: "2024-2026",
        icon: <FaMedal />,
        url: "treasurer-bhopal-menopause-society",
    },
    {
        role: "Senior Lecturer",
        organization: "School of Embryology & Assisted Reproduction (SEART)",
        period: "Present",
        icon: <FaGraduationCap />,
        url: "senior-lecturer-seart",
    },
];

/* === CERTIFICATIONS === */
export const certifications = [
    {
        name: "Post Graduate Diploma in ART",
        institution: "University of Schleswig Holstein, Germany",
        icon: <FaUniversity />,
        url: "post-graduate-diploma-in-art",
    },
    {
        name: "Fetal Medicine Foundation Certified",
        institution: "Fetal Medicine Foundation, UK",
        icon: <FaGlobe />,
        url: "fetal-medicine-foundation-certified",
    },
    {
        name: "Certified Sonologist",
        institution: "Thomas Jefferson University Hospital, USA",
        icon: <FaCertificate />,
        url: "certified-sonologist",
    },
    {
        name: "Fellowship in Minimal Invasive Surgery",
        institution: "Max Institute, New Delhi",
        icon: <FaMedal />,
        url: "fellowship-in-minimal-invasive-surgery",
    },
];

/* === STATS === */
export const stats = [
    { number: "17000+", label: "IVF Cycles", icon: <FaHeart />, color: "text-red-500", url: "ivf-cycles" },
    { number: "70%", label: "Success Rate", icon: <FaStar />, color: "text-yellow-500", url: "success-rate" },
    { number: "14+", label: "Years Experience", icon: <FaAward />, color: "text-yellow-500", url: "years-ivf-experience" },
    { number: "NABH", label: "Accredited Centre", icon: <FaShieldAlt />, color: "text-green-500", url: "nabh-accredited-centre" },
];

/* === SPECIAL FEATURES === */
export const specialFeatures = [
    {
        title: "NABH Accredited Lab",
        description:
            "First IVF centre in Central India with NABH accreditation ensuring highest quality standards and safety protocols.",
        icon: <FaShieldAlt />,
        url: "nabh-accredited-lab",
    },
    {
        title: "Advanced Technology",
        description:
            "Equipped with latest AI-powered diagnostic tools and genetic testing facilities for accurate fertility treatments.",
        icon: <FaRobot />,
        url: "advanced-technology",
    },
    {
        title: "Expert Team",
        description:
            "Led by Dr. Supriya Hajela with 14+ years experience in reproductive medicine and award-winning expertise.",
        icon: <FaUsers />,
        url: "expert-team",
    },
];

/* === GALLERY === */
export const gallery = [
    {
      id: 1,
      src: "/gallery/recovery-room.png",
      alt: "Modern Operation Theater - Hajela Hospital IVF Center Bhopal",
      title: "Advanced Operation Theater",
      description:
        "State-of-the-art surgical facility for IVF procedures and laparoscopic surgeries with international standards at Hajela Hospital Bhopal.",
      category: "facility",
    },
    {
      id: 2,
      src: "/gallery/ivf-lab.png",
      alt: "Advanced IVF Laboratory - Hajela Hospital Fertility Center Bhopal",
      title: "Modern IVF Laboratory",
      description:
        "Equipped with latest technology for embryo culture, ICSI, and cryopreservation ensuring highest IVF success rates in Bhopal.",
      category: "facility",
    },
    {
      id: 3,
      src: "/gallery/IMG_20251108_160141.jpg",
      alt: "Patient Recovery Room - Hajela Hospital Bhopal Comfort Care",
      title: "Luxury Recovery Suites",
      description:
        "Comfortable and private recovery rooms with modern amenities for post-procedure care and relaxation at our Bhopal center.",
      category: "facility",
    },
    {
      id: 4,
      src: "/gallery/IMG-20251108-WA0005.jpg",
      alt: "Fertility Assessment - Dr Supriya Hajela Consultation Bhopal",
      title: "Comprehensive Assessment",
      description:
        "Detailed fertility evaluation and personalized treatment planning with Dr. Supriya Hajela at Hajela Hospital Bhopal.",
      category: "consultation",
    },
    {
      id: 5,
      src: "/gallery/IMG-20251108-WA0011.jpg",
      alt: "Success Stories - Happy Parents Hajela Hospital Bhopal",
      title: "Success Celebration",
      description:
        "Join 17000+ happy families who achieved their dream of parenthood at Hajela Hospital - Best IVF Center in Bhopal.",
      category: "success",
    },
    {
      id: 6,
      src: "/gallery/awards-ceremony.png",
      alt: "Awards & Recognition - Dr Supriya Hajela Achievements Bhopal",
      title: "National Recognition",
      description:
        "Award-winning excellence in reproductive medicine recognized by national medical bodies - Hajela Hospital Bhopal.",
      category: "awards",
    },
  ];

/* === SERVICES === */
export const services = [
    {
        title: "IVF Treatment",
        desc: "Advanced In Vitro Fertilization with high success rates under NABH accredited setup.",
        icon: <FaBaby />,
        features: ["Advanced Lab Technology", "High Success Rates", "Personalized Protocols", "NABH Standards"],
        color: "from-pink-400 to-pink-600",
        url: "ivf-treatment",
    },
    {
        title: "ICSI & IUI Services",
        desc: "Male infertility focused precision treatments with top embryology expertise.",
        icon: <FaSyringe />,
        features: ["High Precision", "Expert Embryologists", "Quality Control"],
        color: "from-blue-400 to-blue-600",
        url: "icsi-iui-services",
    },
    {
        title: "PGT Genetic Testing",
        desc: "Genetic screening for embryos to prevent chromosomal and hereditary disorders.",
        icon: <FaDna />,
        features: ["Genetic Screening", "Healthy Embryo Selection", "Higher Success"],
        color: "from-indigo-400 to-indigo-600",
        url: "pgt-genetic-testing",
    },
    {
        title: "Fertility Preservation",
        desc: "Egg & embryo freezing using vitrification technology for future family planning.",
        icon: <FaSnowflake />,
        features: ["Egg Freezing", "Embryo Banking", "Long-term Storage"],
        color: "from-cyan-400 to-cyan-600",
        url: "fertility-preservation",
    },
    {
        title: "AI Semen Analysis",
        desc: "AI-powered semen analysis for accurate fertility assessment.",
        icon: <FaRobot />,
        features: ["AI Technology", "High Accuracy", "Personalized Reports"],
        color: "from-teal-400 to-teal-600",
        url: "ai-semen-analysis",
    },
    {
        title: "PCOS Management",
        desc: "Comprehensive PCOS care by expert and committee member of PCOS Society of India.",
        icon: <FaHeartbeat />,
        features: ["Hormonal Balance", "Lifestyle Guidance", "Long-term Care"],
        color: "from-purple-400 to-purple-600",
        url: "pcos-management",
    },
    {
        title: "Minimal Invasive Surgery",
        desc: "Laparoscopic & hysteroscopic procedures with faster recovery and precision.",
        icon: <FaUserMd />,
        features: ["Minimal Scarring", "High Precision", "Advanced Equipment"],
        color: "from-green-400 to-green-600",
        url: "minimal-invasive-surgery",
    },
    {
        title: "High Risk Obstetrics",
        desc: "Specialized care for high-risk pregnancies with advanced fetal monitoring.",
        icon: <FaStethoscope />,
        features: ["High Risk Management", "24/7 Emergency Support"],
        color: "from-red-400 to-red-600",
        url: "high-risk-obstetrics",
    },
];

/* === TESTIMONIALS === */

export const testimonials = [
    {
        id: 1,
        name: 'Pooja & Amit',
        location: 'Bhopal',
        treatment: 'IVF Treatment',
        rating: 5,
        content:
            "after years of trying, we finally conceived through ivf under dr. supriya hajela's guidance. exceptional care throughout our journey.",
        icon: <FaUser />,
        duration: '2 years ago',
        url: 'pooja-amit-testimonial',
    },
    {
        id: 2,
        name: 'Priya & Sameer',
        location: 'Jabalpur',
        treatment: 'IUI Treatment',
        rating: 5,
        content:
            "after multiple failed attempts elsewhere, dr. hajela’s approach gave us our twins. truly grateful.",
        icon: <FaUser />,
        duration: '8 months ago',
        url: 'priya-sameer-testimonial',
    },
    {
        id: 3,
        name: 'Meera & Ankit',
        location: 'Ujjain',
        treatment: 'Laparoscopic Surgery + IVF',
        rating: 5,
        content:
            "combination of laparoscopy and ivf under dr. hajela’s care was life-changing. we’re now proud parents.",
        icon: <FaUser />,
        duration: '6 months ago',
        url: 'meera-ankit-testimonial',
    },
    {
        id: 4,
        name: 'Ritu & Manish',
        location: 'Indore',
        treatment: 'IVF Treatment',
        rating: 5,
        content:
            'the entire process was smooth and transparent. we felt supported every step.',
        icon: <FaUser />,
        duration: '1 year ago',
        url: 'ritu-manish-testimonial',
    },
    {
        id: 5,
        name: 'Neha & Rajesh',
        location: 'Bhopal',
        treatment: 'IUI Treatment',
        rating: 4,
        content:
            'staff was caring and professional. dr. hajela explained everything clearly.',
        icon: <FaUser />,
        duration: '9 months ago',
        url: 'neha-rajesh-testimonial',
    },
    {
        id: 6,
        name: 'Kavita & Arjun',
        location: 'Sagar',
        treatment: 'IVF + Donor Program',
        rating: 5,
        content:
            'we had lost hope earlier, but this team made our dream possible. thank you.',
        icon: <FaUser />,
        duration: '1 year ago',
        url: 'kavita-arjun-testimonial',
    },
    {
        id: 7,
        name: 'Sneha & Vivek',
        location: 'Hoshangabad',
        treatment: 'Fertility Counseling',
        rating: 5,
        content:
            'the counseling sessions were so helpful and reassuring. great experience.',
        icon: <FaUser />,
        duration: '4 months ago',
        url: 'sneha-vivek-testimonial',
    },
    {
        id: 8,
        name: 'Anita & Rohit',
        location: 'Bhopal',
        treatment: 'IVF Treatment',
        rating: 5,
        content:
            'dr. hajela and her team made us feel confident and hopeful throughout.',
        icon: <FaUser />,
        duration: '3 months ago',
        url: 'anita-rohit-testimonial',
    },
]


/* === QUALIFICATIONS === */
export const qualifications = [
    { degree: "MBBS", institution: "medical college", year: "2005", icon: <FaGraduationCap />, url: "mbbs" },
    { degree: "MS", institution: "specialization in obstetrics & gynecology", year: "2009", icon: <FaUserMd />, url: "ms-obstetrics-gynecology" },
    { degree: "FICOG", institution: "fellowship in reproductive medicine", year: "2012", icon: <FaAward />, url: "ficog-reproductive-medicine" },
    { degree: "IVF TRAINING", institution: "international fertility center", year: "2013", icon: <FaStar />, url: "ivf-training" },
];

/* === EXPERTISE === */
export const expertise = [
    { icon: <FaMicroscope />, title: "ivf & icsi treatment", url: "ivf-icsi-treatment", description: "advanced in vitro fertilization techniques with high success rates at nabh accredited centre" },
    { icon: <FaSyringe />, title: "iui services", url: "iui-services", description: "intrauterine insemination procedures with precision timing for optimal results" },
    { icon: <FaSnowflake />, title: "fertility preservation", url: "fertility-preservation", description: "egg & embryo freezing services using vitrification technology" },
    { icon: <FaUserMd />, title: "laparoscopic surgery", url: "laparoscopic-surgery", description: "minimally invasive procedures for fibroids and cysts with faster recovery" },
    { icon: <FaHeartbeat />, title: "pcos management", url: "pcos-management", description: "comprehensive pcos treatment including lifestyle modification and ovulation induction" },
    { icon: <FaUserMd />, title: "male infertility", url: "male-infertility", description: "complete male fertility evaluation with advanced semen analysis and treatment" },
];