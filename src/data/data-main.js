"use client";
import {
    FaTrophy, FaAward, FaStar, FaMedal, FaRibbon, FaCertificate,
    FaHeart, FaUserMd, FaGraduationCap, FaMicroscope, FaUniversity,
    FaGlobe, FaBullseye, FaShieldAlt, FaBaby, FaSyringe, FaDna,
    FaSnowflake, FaRobot, FaStethoscope, FaHeartbeat, FaClinicMedical,
    FaUser, FaCrown, FaHospital, FaUsers, FaCheckCircle, FaLightbulb,
    FaMicroscope as FaScience,
} from "react-icons/fa";

/* === ACHIEVEMENTS - OPTIMIZED FOR SEO === */
export const awards = [
    {
        year: "2025",
        title: "BEST IVF DOCTOR IN BHOPAL - YOUNG ACHIEVER AWARD",
        description: "Dr. Supriya Hajela recognized as Best IVF Specialist in Bhopal by Global Medical Excellence Forum for outstanding contributions in reproductive medicine and IVF advancements at Hajela Hospital.",
        icon: <FaAward />,
        category: "International Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
        url: "best-ivf-doctor-bhopal-young-achiever-award",
    },
    {
        year: "2024-25",
        title: "BEST IVF SPECIALIST - Dr. STYA PAUL AWARD",
        description: "Dr. Supriya Hajela awarded Best IVF Specialist in Bhopal by Indian Obstetrics & Gynecology - Emerging Star in Obstetrics & Gynecology at Hajela Hospital Fertility Center.",
        icon: <FaTrophy />,
        category: "National Excellence",
        color: "from-yellow-400 to-yellow-600",
        featured: true,
        url: "best-ivf-specialist-bhopal-dr-stya-paul-award",
    },
    {
        year: "2024",
        title: "TOP IVF DOCTOR BHOPAL - INTERNATIONAL RESEARCHER AWARD",
        description: "Dr. Supriya Hajela - Top IVF Doctor in Bhopal awarded International Best Researcher by American Chamber of Research for excellence in fertility treatments at Hajela Hospital.",
        icon: <FaMedal />,
        category: "International Research",
        color: "from-blue-500 to-blue-700",
        featured: true,
        url: "top-ivf-doctor-bhopal-international-researcher-award",
    },
    {
        year: "2024",
        title: "BEST FERTILITY SPECIALIST - DR SUBHASH MUKOPADHAYA AWARD",
        description: "Dr. Supriya Hajela - Best Fertility Specialist in Bhopal awarded by Indian Fertility Society for Outstanding Contribution in Field of Infertility at Hajela Hospital.",
        icon: <FaCrown />,
        category: "National Recognition",
        color: "from-purple-500 to-purple-700",
        url: "best-fertility-specialist-bhopal-dr-subhash-mukopadhaya-award",
    },
    {
        year: "2024",
        title: "BEST IVF CENTER IN BHOPAL - SIX SIGMA AWARD",
        description: "Hajela Hospital recognized as Best IVF Center in Bhopal - Best Upcoming IVF Center in Central India with Quality Excellence Recognition by Six Sigma.",
        icon: <FaRibbon />,
        category: "Regional Excellence",
        color: "from-green-500 to-green-700",
        url: "best-ivf-center-bhopal-six-sigma-award",
    },
];

/* === LEADERSHIP ROLES - OPTIMIZED === */
export const leadership = [
    {
        role: "Best IVF Doctor in Bhopal - Director & IVF Coordinator",
        organization: "ART & Reproductive Center, Hajela Hospital Bhopal",
        period: "Present",
        icon: <FaUserMd />,
        url: "best-ivf-doctor-bhopal-director-ivf-coordinator",
    },
    {
        role: "IVF Specialist - Treasurer",
        organization: "Bhopal Menopause Society - Fertility Care Bhopal",
        period: "2024-2026",
        icon: <FaMedal />,
        url: "ivf-specialist-treasurer-bhopal-menopause-society",
    },
    {
        role: "Senior IVF Lecturer & Trainer",
        organization: "School of Embryology & Assisted Reproduction (SEART) Bhopal",
        period: "Present",
        icon: <FaGraduationCap />,
        url: "senior-ivf-lecturer-trainer-seart-bhopal",
    },
];

/* === CERTIFICATIONS - OPTIMIZED === */
export const certifications = [
    {
        name: "Best IVF Doctor Certification - Post Graduate Diploma in ART",
        institution: "University of Schleswig Holstein, Germany - International IVF Training",
        icon: <FaUniversity />,
        url: "best-ivf-doctor-certification-post-graduate-diploma-art",
    },
    {
        name: "Top Fertility Specialist - Fetal Medicine Foundation Certified",
        institution: "Fetal Medicine Foundation, UK - International Standards Bhopal",
        icon: <FaGlobe />,
        url: "top-fertility-specialist-fetal-medicine-foundation-certified",
    },
    {
        name: "IVF Sonologist Certified - Advanced Ultrasound Training",
        institution: "Thomas Jefferson University Hospital, USA - Best IVF Scanning Bhopal",
        icon: <FaCertificate />,
        url: "ivf-sonologist-certified-advanced-ultrasound-training",
    },
    {
        name: "IVF Surgery Specialist - Fellowship in Minimal Invasive Surgery",
        institution: "Max Institute, New Delhi - Advanced IVF Procedures Bhopal",
        icon: <FaMedal />,
        url: "ivf-surgery-specialist-fellowship-minimal-invasive-surgery",
    },
];

/* === STATS - OPTIMIZED === */
export const stats = [
    { 
        number: "17000+", 
        label: "IVF Cycles in Bhopal", 
        icon: <FaHeart />, 
        color: "text-red-500", 
        url: "ivf-cycles-bhopal-success" 
    },
    { 
        number: "85%", 
        label: "IVF Success Rate Bhopal", 
        icon: <FaStar />, 
        color: "text-yellow-500", 
        url: "ivf-success-rate-bhopal" 
    },
    { 
        number: "14+", 
        label: "Years IVF Experience Bhopal", 
        icon: <FaAward />, 
        color: "text-yellow-500", 
        url: "ivf-experience-bhopal" 
    },
    { 
        number: "NABH", 
        label: "Best Accredited IVF Centre Bhopal", 
        icon: <FaShieldAlt />, 
        color: "text-green-500", 
        url: "best-accredited-ivf-centre-bhopal" 
    },
];

/* === SPECIAL FEATURES - OPTIMIZED === */
export const specialFeatures = [
    {
        title: "Best IVF Lab in Bhopal - NABH Accredited",
        description: "First IVF centre in Central India with NABH accreditation ensuring highest quality standards and safety protocols for IVF treatment in Bhopal.",
        icon: <FaShieldAlt />,
        url: "best-ivf-lab-bhopal-nabh-accredited",
    },
    {
        title: "Advanced IVF Technology in Bhopal",
        description: "Best IVF Center in Bhopal equipped with latest AI-powered diagnostic tools and genetic testing facilities for accurate fertility treatments.",
        icon: <FaRobot />,
        url: "advanced-ivf-technology-bhopal",
    },
    {
        title: "Expert IVF Team in Bhopal",
        description: "Led by Dr. Supriya Hajela - Best IVF Specialist in Bhopal with 14+ years experience in reproductive medicine and award-winning expertise.",
        icon: <FaUsers />,
        url: "expert-ivf-team-bhopal",
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

/* === SERVICES - OPTIMIZED === */
export const services = [
    {
        title: "Best IVF Treatment in Bhopal",
        desc: "Advanced In Vitro Fertilization with 85% success rates under NABH accredited setup at Hajela Hospital - Best IVF Center Bhopal.",
        icon: <FaBaby />,
        features: ["Advanced Lab Technology", "High Success Rates", "Personalized Protocols", "NABH Standards"],
        color: "from-pink-400 to-pink-600",
        url: "best-ivf-treatment-bhopal",
    },
    {
        title: "ICSI & IUI Treatment in Bhopal",
        desc: "Male infertility focused precision treatments with top embryology expertise at Hajela Hospital - Best Fertility Center Bhopal.",
        icon: <FaSyringe />,
        features: ["High Precision", "Expert Embryologists", "Quality Control"],
        color: "from-blue-400 to-blue-600",
        url: "icsi-iui-treatment-bhopal",
    },
    {
        title: "PGT Genetic Testing in Bhopal",
        desc: "Best Genetic screening for embryos in Bhopal to prevent chromosomal and hereditary disorders at Hajela Hospital IVF Center.",
        icon: <FaDna />,
        features: ["Genetic Screening", "Healthy Embryo Selection", "Higher Success"],
        color: "from-indigo-400 to-indigo-600",
        url: "pgt-genetic-testing-bhopal",
    },
    {
        title: "Fertility Preservation in Bhopal",
        desc: "Best Egg & embryo freezing services in Bhopal using vitrification technology for future family planning at Hajela Hospital.",
        icon: <FaSnowflake />,
        features: ["Egg Freezing Bhopal", "Embryo Banking", "Long-term Storage"],
        color: "from-cyan-400 to-cyan-600",
        url: "fertility-preservation-bhopal",
    },
    {
        title: "AI Semen Analysis in Bhopal",
        desc: "Best AI-powered semen analysis in Bhopal for accurate fertility assessment at Hajela Hospital - Advanced Male Infertility Treatment.",
        icon: <FaRobot />,
        features: ["AI Technology", "High Accuracy", "Personalized Reports"],
        color: "from-teal-400 to-teal-600",
        url: "ai-semen-analysis-bhopal",
    },
    {
        title: "PCOS Treatment in Bhopal",
        desc: "Best PCOS care in Bhopal by expert Dr. Supriya Hajela - Committee member of PCOS Society of India at Hajela Hospital.",
        icon: <FaHeartbeat />,
        features: ["Hormonal Balance", "Lifestyle Guidance", "Long-term Care"],
        color: "from-purple-400 to-purple-600",
        url: "pcos-treatment-bhopal",
    },
    {
        title: "Laparoscopic Surgery in Bhopal",
        desc: "Best Minimal invasive procedures in Bhopal with faster recovery and precision at Hajela Hospital - Advanced IVF Surgery Center.",
        icon: <FaUserMd />,
        features: ["Minimal Scarring", "High Precision", "Advanced Equipment"],
        color: "from-green-400 to-green-600",
        url: "laparoscopic-surgery-bhopal",
    },
    {
        title: "High Risk Pregnancy Care in Bhopal",
        desc: "Best Specialized care for high-risk pregnancies in Bhopal with advanced fetal monitoring at Hajela Hospital - Top Maternity Center.",
        icon: <FaStethoscope />,
        features: ["High Risk Management", "24/7 Emergency Support"],
        color: "from-red-400 to-red-600",
        url: "high-risk-pregnancy-care-bhopal",
    },
];

/* === QUALIFICATIONS - OPTIMIZED === */
export const qualifications = [
    { 
        degree: "MBBS - Medical Degree", 
        institution: "Medical College - Best IVF Doctor Education", 
        year: "2005", 
        icon: <FaGraduationCap />, 
        url: "mbbs-best-ivf-doctor-education" 
    },
    { 
        degree: "MS - Obstetrics & Gynecology", 
        institution: "Specialization - Best IVF Specialist Training Bhopal", 
        year: "2009", 
        icon: <FaUserMd />, 
        url: "ms-obstetrics-gynecology-ivf-specialist" 
    },
    { 
        degree: "FICOG - Reproductive Medicine", 
        institution: "Fellowship - Best Fertility Specialist Certification", 
        year: "2012", 
        icon: <FaAward />, 
        url: "ficog-reproductive-medicine-fertility-specialist" 
    },
    { 
        degree: "IVF TRAINING - International", 
        institution: "International Fertility Center - Best IVF Doctor Skills", 
        year: "2013", 
        icon: <FaStar />, 
        url: "ivf-training-international-best-doctor" 
    },
];

/* === EXPERTISE - OPTIMIZED === */
export const expertise = [
    { 
        icon: <FaMicroscope />, 
        title: "Best IVF & ICSI Treatment in Bhopal", 
        url: "best-ivf-icsi-treatment-bhopal", 
        description: "Advanced in vitro fertilization techniques with 85% success rates at NABH accredited Hajela Hospital - Best IVF Center Bhopal." 
    },
    { 
        icon: <FaSyringe />, 
        title: "IUI Treatment in Bhopal", 
        url: "iui-treatment-bhopal", 
        description: "Best Intrauterine insemination procedures in Bhopal with precision timing for optimal results at Hajela Hospital Fertility Center." 
    },
    { 
        icon: <FaSnowflake />, 
        title: "Fertility Preservation in Bhopal", 
        url: "fertility-preservation-bhopal", 
        description: "Best Egg & embryo freezing services in Bhopal using vitrification technology at Hajela Hospital - Top Fertility Center MP." 
    },
    { 
        icon: <FaUserMd />, 
        title: "Laparoscopic Surgery in Bhopal", 
        url: "laparoscopic-surgery-bhopal", 
        description: "Best Minimally invasive procedures in Bhopal for fibroids and cysts with faster recovery at Hajela Hospital IVF Center." 
    },
    { 
        icon: <FaHeartbeat />, 
        title: "PCOS Treatment in Bhopal", 
        url: "pcos-treatment-bhopal", 
        description: "Best Comprehensive PCOS treatment in Bhopal including lifestyle modification and ovulation induction by Dr. Supriya Hajela." 
    },
    { 
        icon: <FaUserMd />, 
        title: "Male Infertility Treatment in Bhopal", 
        url: "male-infertility-treatment-bhopal", 
        description: "Best Complete male fertility evaluation in Bhopal with advanced semen analysis and treatment at Hajela Hospital." 
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
];