// data/achievementsData.js
import {
    FaTrophy, FaAward, FaStar, FaMedal, FaRibbon, FaCertificate,
    FaHeart, FaUserMd, FaGraduationCap, FaMicroscope, FaUniversity, FaGlobe
} from "react-icons/fa";

export const awards = [
    { year: "2024-25", title: "Dr. STYA PAUL AWARD - EMERGING STAR", description: "Indian Obstetrics & Gynecology - Emerging Star in Obstetrics & Gynecology", icon: FaTrophy, category: "National Excellence", color: "from-yellow-400 to-yellow-600", featured: true },
    { year: "2024", title: "INTERNATIONAL BEST RESEARCHER AWARD", description: "International Congress for Research Excellence 2024 - American Chamber of Research, World Research Council", icon: FaAward, category: "International Research", color: "from-blue-500 to-blue-700", featured: true },
    { year: "2024", title: "DR SUBHASH MUKOPADHAYA AWARD", description: "Indian Fertility Society - For Outstanding Contribution in Field of Infertility", icon: FaMedal, category: "National Recognition", color: "from-purple-500 to-purple-700", featured: true },
    { year: "2024", title: "SIX SIGMA AWARD - BEST IVF CENTER", description: "Best Upcoming IVF Center in Central India - Quality Excellence Recognition", icon: FaStar, category: "Regional Excellence", color: "from-green-500 to-green-700" },
    { year: "2024", title: "MP IFS RESEARCH AWARD", description: "Research Publication Award - Indian Obstetrics and Gynecology Journal", icon: FaCertificate, category: "Research Excellence", color: "from-red-500 to-red-700" },
    { year: "2024", title: "EXCELLENCE ACADEMIC AWARD", description: "MP Nursing Home Association - Academic Excellence Recognition", icon: FaRibbon, category: "Academic Achievement", color: "from-pink-500 to-pink-700" },
    { year: "2023", title: "YOUTH ICON AWARD", description: "Indian Society of Assisted Reproduction - Youth Icon in Reproductive Medicine", icon: FaHeart, category: "National Recognition", color: "from-indigo-500 to-indigo-700" },
    { year: "2025", title: "YOUNG ACHIEVER AWARD", description: "Global Medical Excellence Forum - Outstanding contributions in reproductive medicine and IVF advancements.", icon: FaAward, category: "International Excellence", color: "from-yellow-400 to-yellow-600" }
];

export const leadership = [
    { role: "Director & IVF Coordinator", organization: "ART & Reproductive Center, Hajela Hospital", period: "Present", icon: FaUserMd },
    { role: "Treasurer", organization: "Bhopal Menopause Society", period: "2024-2026", icon: FaMedal },
    { role: "Senior Lecturer", organization: "School of Embryology & Assisted Reproduction (SEART)", period: "Present", icon: FaGraduationCap },
];

export const certifications = [
    { name: "Post Graduate Diploma in ART", institution: "University of Schleswig Holstein, Germany", icon: FaUniversity },
    { name: "Fetal Medicine Foundation Certified", institution: "Fetal Medicine Foundation, UK", icon: FaGlobe },
    { name: "Certified Sonologist", institution: "Thomas Jefferson University Hospital, USA", icon: FaCertificate },
    { name: "Fellowship in Minimal Invasive Surgery", institution: "Max Institute, New Delhi", icon: FaMedal },
];

export const stats = [
    { number: "10+", label: "Years Experience in ART", icon: FaUserMd, color: "text-yellow-500" },
    { number: "7+", label: "National Awards", icon: FaAward, color: "text-blue-500" },
    { number: "2", label: "International Recognitions", icon: FaTrophy, color: "text-green-500" },
    { number: "15+", label: "Research Publications", icon: FaMicroscope, color: "text-purple-500" },
];