// data/home.js

import { FaAward, FaHeart, FaStar, FaUsers, FaMicroscope, FaSyringe, FaChartBar, FaStethoscope, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export const stats = [
  { number: "14+", label: "Years IVF Experience", icon: FaAward, color: "text-yellow-500" },
  { number: "17000+", label: "IVF Cycles", icon: FaHeart, color: "text-red-500" },
  { number: "NABH", label: "Accredited Centre", icon: FaStar, color: "text-green-500" },
  { number: "70%", label: "Success Rate", icon: FaUsers, color: "text-blue-500" },
];

export const services = [
  {
    name: "IVF Treatment",
    icon: <FaMicroscope className="text-5xl text-blue-600" />,
    desc: "Advanced In Vitro Fertilization with high success rates at NABH hospital Bhopal",
    link: "/info/ivf-treatment",
  },
  {
    name: "ICSI IUI Services",
    icon: <FaSyringe className="text-5xl text-blue-600" />,
    desc: "Intrauterine Insemination and ICSI with precision for male infertility treatment",
    link: "/info/intracytoplasmic-sperm-injection",
  },
  {
    name: "Fertility Assessment",
    icon: <FaChartBar className="text-5xl text-blue-600" />,
    desc: "Comprehensive Evaluation & Diagnosis by best fertility specialist in Bhopal",
    link: "/info/fertility-assessment",
  },
  {
    name: "PCC Treatment",
    icon: <FaStethoscope className="text-5xl text-blue-600" />,
    desc: "Personalized Couple Care with tailored treatment plans ensuring complete reproductive health",
    link: "/info/pcc-treatment",
  },
];

export const features = [
  {
    title: "Expert IVF Experience",
    desc: "14+ years specialized in reproductive medicine and fertility treatments",
    icon: FaAward,
  },
  {
    title: "NABH Accredited",
    desc: "Highest quality & safety standards for IVF procedures in Bhopal",
    icon: FaShieldAlt,
  },
  {
    title: "Personalized Care",
    desc: "Individualized treatment plans by Dr. Supriya Hajela for each patient",
    icon: FaHeart,
  },
];

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dr. Supriya Hajela - Best IVF Specialist in Bhopal | Hajela Hospital",
  "description": "Award-winning IVF and Fertility Specialist with 14+ years experience at NABH Accredited Hajela Hospital Bhopal",
  "url": "https://www.hajelahospital.com",
  "mainEntity": {
    "@type": "MedicalOrganization",
    "name": "Hajela Hospital",
    "medicalSpecialty": "Reproductive Medicine"
  }
};