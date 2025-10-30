import { FaBullseye, FaStar, FaTrophy, FaShieldAlt } from "react-icons/fa";

const specialFeatures = [
    {
        title: "NABH Accredited Lab",
        description:
            "First IVF centre in Central India with NABH accreditation ensuring highest quality standards and safety protocols",
    },
    {
        title: "Advanced Technology",
        description:
            "Equipped with latest AI-powered diagnostic tools and genetic testing facilities for accurate fertility treatments",
    },
    {
        title: "Expert Team",
        description:
            "Led by Dr. Supriya Hajela with 14+ years experience in reproductive medicine and award-winning expertise",
    },
];

const stats = [
    { number: "17000+", label: "IVF Cycles Performed", icon: <FaBullseye /> },
    { number: "70%", label: "Success Rate", icon: <FaStar /> },
    { number: "14+", label: "Years Experience", icon: <FaTrophy /> },
    { number: "NABH", label: "Accredited Centre", icon: <FaShieldAlt /> },
];

export { specialFeatures, stats };