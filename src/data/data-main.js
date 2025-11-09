// data/data.js
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
} from "react-icons/fa";

/* === ACHIEVEMENTS === */
export const awards = [
    {
        year: "2025",
        title: "YOUNG ACHIEVER AWARD",
        description:
            "Global Medical Excellence Forum - Outstanding contributions in reproductive medicine and IVF advancements.",
        icon: FaAward,
        category: "International Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
    },
    {
        year: "2024-25",
        title: "Dr. STYA PAUL AWARD - EMERGING STAR",
        description:
            "Indian Obstetrics & Gynecology - Emerging Star in Obstetrics & Gynecology",
        icon: FaTrophy,
        category: "National Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
    },
    {
        year: "2024",
        title: "INTERNATIONAL BEST RESEARCHER AWARD",
        description:
            "International Congress for Research Excellence 2024 - American Chamber of Research, World Research Council",
        icon: FaAward,
        category: "International Research",
        color: "from-blue-500 to-blue-700",
        featured: true,
    },
    {
        year: "2024",
        title: "DR SUBHASH MUKOPADHAYA AWARD",
        description:
            "Indian Fertility Society - For Outstanding Contribution in Field of Infertility",
        icon: FaMedal,
        category: "National Recognition",
        color: "from-purple-500 to-purple-700",
    },
    {
        year: "2024",
        title: "SIX SIGMA AWARD - BEST IVF CENTER",
        description:
            "Best Upcoming IVF Center in Central India - Quality Excellence Recognition",
        icon: FaStar,
        category: "Regional Excellence",
        color: "from-green-500 to-green-700",
    },
];

/* === LEADERSHIP ROLES === */
export const leadership = [
    {
        role: "Director & IVF Coordinator",
        organization: "ART & Reproductive Center, Hajela Hospital",
        period: "Present",
        icon: FaUserMd,
    },
    {
        role: "Treasurer",
        organization: "Bhopal Menopause Society",
        period: "2024-2026",
        icon: FaMedal,
    },
    {
        role: "Senior Lecturer",
        organization: "School of Embryology & Assisted Reproduction (SEART)",
        period: "Present",
        icon: FaGraduationCap,
    },
];

/* === CERTIFICATIONS === */
export const certifications = [
    {
        name: "Post Graduate Diploma in ART",
        institution: "University of Schleswig Holstein, Germany",
        icon: FaUniversity,
    },
    {
        name: "Fetal Medicine Foundation Certified",
        institution: "Fetal Medicine Foundation, UK",
        icon: FaGlobe,
    },
    {
        name: "Certified Sonologist",
        institution: "Thomas Jefferson University Hospital, USA",
        icon: FaCertificate,
    },
    {
        name: "Fellowship in Minimal Invasive Surgery",
        institution: "Max Institute, New Delhi",
        icon: FaMedal,
    },
];

/* === STATS === */
export const stats = [
    { number: "17000+", label: "IVF Cycles", icon: FaHeart, color: "text-red-500" },
    { number: "70%", label: "Success Rate", icon: FaStar, color: "text-yellow-500" },
    { number: "14+", label: "Years IVF Experience", icon: FaAward, color: "text-yellow-500" },
    { number: "NABH", label: "Accredited Centre", icon: FaShieldAlt, color: "text-green-500" },
];

/* === SPECIAL FEATURES === */
export const specialFeatures = [
    {
        title: "NABH Accredited Lab",
        description:
            "First IVF centre in Central India with NABH accreditation ensuring highest quality standards and safety protocols.",
    },
    {
        title: "Advanced Technology",
        description:
            "Equipped with latest AI-powered diagnostic tools and genetic testing facilities for accurate fertility treatments.",
    },
    {
        title: "Expert Team",
        description:
            "Led by Dr. Supriya Hajela with 14+ years experience in reproductive medicine and award-winning expertise.",
    },
];

/* === GALLERY === */
export const gallery = [
    {
        id: 1,
        src: "/gallery/ivf-lab.png",
        alt: "Advanced IVF Laboratory - Hajela Hospital Bhopal",
        title: "Modern IVF Laboratory",
        description:
            "Equipped with latest technology for embryo culture, ICSI, and cryopreservation ensuring highest IVF success rates in Bhopal.",
        category: "facility",
    },
    {
        id: 2,
        src: "/gallery/recovery-room.png",
        alt: "Operation Theater - Hajela Hospital IVF Center Bhopal",
        title: "Advanced Operation Theater",
        description:
            "State-of-the-art surgical facility for IVF procedures and laparoscopic surgeries with international standards.",
        category: "facility",
    },
    {
        id: 3,
        src: "/gallery/IMG-20251108-WA0011.jpg",
        alt: "Success Stories - Hajela Hospital Bhopal",
        title: "Success Celebration",
        description:
            "Join 17000+ happy families who achieved their dream of parenthood at Hajela Hospital.",
        category: "success",
    },
];

/* === SERVICES === */
export const services = [
    {
        title: "IVF Treatment",
        desc: "Advanced In Vitro Fertilization with high success rates under NABH accredited setup.",
        icon: FaBaby,
        features: [
            "Advanced Lab Technology",
            "High Success Rates",
            "Personalized Protocols",
            "NABH Standards",
        ],
        color: "from-pink-400 to-pink-600",
    },
    {
        title: "ICSI & IUI Services",
        desc: "Male infertility focused precision treatments with top embryology expertise.",
        icon: FaSyringe,
        features: ["High Precision", "Expert Embryologists", "Quality Control"],
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "PGT Genetic Testing",
        desc: "Genetic screening for embryos to prevent chromosomal and hereditary disorders.",
        icon: FaDna,
        features: ["Genetic Screening", "Healthy Embryo Selection", "Higher Success"],
        color: "from-indigo-400 to-indigo-600",
    },
    {
        title: "Fertility Preservation",
        desc: "Egg & embryo freezing using vitrification technology for future family planning.",
        icon: FaSnowflake,
        features: ["Egg Freezing", "Embryo Banking", "Long-term Storage"],
        color: "from-cyan-400 to-cyan-600",
    },
    {
        title: "AI Semen Analysis",
        desc: "AI-powered semen analysis for accurate fertility assessment.",
        icon: FaRobot,
        features: ["AI Technology", "High Accuracy", "Personalized Reports"],
        color: "from-teal-400 to-teal-600",
    },
    {
        title: "PCOS Management",
        desc: "Comprehensive PCOS care by expert and committee member of PCOS Society of India.",
        icon: FaHeartbeat,
        features: ["Hormonal Balance", "Lifestyle Guidance", "Long-term Care"],
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Minimal Invasive Surgery",
        desc: "Laparoscopic & hysteroscopic procedures with faster recovery and precision.",
        icon: FaUserMd,
        features: ["Minimal Scarring", "High Precision", "Advanced Equipment"],
        color: "from-green-400 to-green-600",
    },
    {
        title: "High Risk Obstetrics",
        desc: "Specialized care for high-risk pregnancies with advanced fetal monitoring.",
        icon: FaStethoscope,
        features: ["High Risk Management", "24/7 Emergency Support"],
        color: "from-red-400 to-red-600",
    },
];

/* === TESTIMONIALS === */
export const testimonials = [
    {
        id: 1,
        name: "Pooja & Amit",
        location: "Bhopal",
        treatment: "IVF Treatment",
        rating: 5,
        content:
            "After years of trying, we finally conceived through IVF under Dr. Supriya Hajela's guidance. Exceptional care throughout our journey.",
        icon: FaUser,
        duration: "2 years ago",
    },
    {
        id: 2,
        name: "Priya & Sameer",
        location: "Jabalpur",
        treatment: "IUI Treatment",
        rating: 5,
        content:
            "After multiple failed attempts elsewhere, Dr. Hajela’s approach gave us our twins. Truly grateful.",
        icon: FaUser,
        duration: "8 months ago",
    },
    {
        id: 3,
        name: "Meera & Ankit",
        location: "Ujjain",
        treatment: "Laparoscopic Surgery + IVF",
        rating: 5,
        content:
            "Combination of laparoscopy and IVF under Dr. Hajela’s care was life-changing. We’re now proud parents.",
        icon: FaUser,
        duration: "6 months ago",
    },
];

export const qualifications = [
    { degree: 'MBBS', institution: 'medical college', year: '2005', icon: 'FaGraduationCap' },
    { degree: 'MS', institution: 'specialization in obstetrics & gynecology', year: '2009', icon: 'FaUserMd' },
    { degree: 'FICOG', institution: 'fellowship in reproductive medicine', year: '2012', icon: 'FaAward' },
    { degree: 'IVF TRAINING', institution: 'international fertility center', year: '2013', icon: 'FaStar' },
];

export const expertise = [
    { iconName: 'FaMicroscope', title: 'ivf & icsi treatment', url: 'ivf-icsi-treatment', description: 'advanced in vitro fertilization techniques with high success rates at nabh accredited centre' },
    { iconName: 'FaSyringe', title: 'iui services', url: 'artificial-insemination', description: 'intrauterine insemination procedures with precision timing for optimal results' },
    { iconName: 'FaSnowflake', title: 'fertility preservation', url: 'fertility-preservation', description: 'egg & embryo freezing services using vitrification technology' },
    { iconName: 'FaProcedures', title: 'laparoscopic surgery', url: 'laparoscopic-surgery', description: 'minimally invasive procedures for fibroids and cysts with faster recovery' },
    { iconName: 'FaHeartbeat', title: 'pcos management', url: 'pcos', description: 'comprehensive pcos treatment including lifestyle modification and ovulation induction' },
    { iconName: 'FaUserMd', title: 'male infertility', url: 'male-infertility', description: 'complete male fertility evaluation with advanced semen analysis and treatment' },
];