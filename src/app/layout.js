import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Alert from "./components/alert";
import { AlertProvider } from "./hooks/useAlert";

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: {
    default: "Dr. Supriya Hajela | Best IVF & Fertility Specialist in Bhopal | Hajela Hospital",
    template: "%s | Dr. Supriya Hajela - Best IVF Specialist Bhopal"
  },
  description: "Dr. Supriya Hajela - Award-winning IVF Specialist with 14+ years experience. NABH Accredited IVF Centre in Bhopal offering advanced fertility treatments, ICSI, IUI, PGT & laparoscopic surgeries. Best fertility doctor in Madhya Pradesh.",
  keywords: [
    "IVF Specialist Bhopal", "Best IVF Doctor in Bhopal", "Fertility Treatment India", 
    "Dr Supriya Hajela", "Hajela Hospital Bhopal", "ICSI IUI IVF Clinic Bhopal",
    "Infertility Specialist", "Fertility Preservation", "PCOS Treatment Bhopal",
    "IVF Cost Bhopal", "Test Tube Baby Center", "Fertility Doctor Near Me",
    "Best Gynecologist Bhopal", "IVF Success Rates", "NABH Hospital Bhopal",
    "Male Infertility Treatment", "Egg Freezing Bhopal", "Embryo Transfer"
  ],
  authors: [{ name: "Dr. Supriya Hajela" }],
  creator: "Hajela Hospital",
  publisher: "Hajela Hospital",
  category: "Healthcare & Medical",
  classification: "IVF & Fertility Treatment Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hajelahospital.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://www.hajelahospital.com',
    },
  },
  openGraph: {
    title: "Dr. Supriya Hajela | IVF & Fertility Specialist – Hajela Hospital Bhopal",
    description: "Award-winning IVF and Fertility Specialist with 14+ years of expertise. NABH Accredited Centre offering personalized fertility care in Bhopal, Madhya Pradesh.",
    url: "https://www.hajelahospital.com",
    siteName: "Hajela Hospital - Best IVF Center Bhopal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Supriya Hajela - Best IVF Specialist in Bhopal at NABH Accredited Hajela Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Supriya Hajela | Best IVF Specialist in Bhopal",
    description: "Award-winning IVF & Fertility Specialist at NABH Accredited Hajela Hospital - 14+ Years Experience",
    creator: "@HajelaHospital",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    me: 'your-website-verification',
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "p:domain_verify": "your-pinterest-verification",
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Hajela Hospital - ART & Reproductive Center',
    description: 'NABH Accredited IVF and Fertility Centre in Bhopal, Madhya Pradesh',
    url: 'https://www.hajelahospital.com',
    logo: 'https://www.hajelahospital.com/logo.jpeg',
    telephone: '+91-755-XXXXXXX',
    email: 'info@hajelahospital.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Hospital Address',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126'
    },
    medicalSpecialty: ['Reproductive Medicine', 'IVF', 'Infertility Treatment'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fertility Services in Bhopal',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IVF Treatment',
            description: 'In-vitro fertilization with advanced techniques'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ICSI IUI Services',
            description: 'Advanced male infertility procedures'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PGT Genetic Testing',
            description: 'Preimplantation Genetic Testing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fertility Preservation',
            description: 'Egg and embryo freezing services'
          }
        }
      ]
    },
    areaServed: {
      '@type': 'State',
      name: 'Madhya Pradesh'
    },
    sameAs: [
      'https://www.facebook.com/HajelaHospital',
      'https://www.instagram.com/hajelahospital',
      'https://www.linkedin.com/company/hajela-hospital'
    ]
  };

  const doctorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Supriya Hajela',
    description: 'Award-winning IVF and Fertility Specialist in Bhopal',
    url: 'https://www.hajelahospital.com',
    medicalSpecialty: 'Reproductive Medicine',
    hasCredential: 'MBBS, MS, FICOG',
    award: [
      'Dr. STYA PAUL AWARD 2024-25',
      'International Best Researcher Award 2024',
      'Dr. Subhash Mukopadhaya Award 2024'
    ],
    knowsAbout: ['IVF', 'ICSI', 'IUI', 'PGT', 'Fertility Preservation', 'Laparoscopic Surgery'],
    affiliation: {
      '@type': 'MedicalOrganization',
      name: 'Hajela Hospital'
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Primary Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Doctor Profile Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }}
        />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hajela Hospital" />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599, 77.4126" />
        
        {/* Business Information */}
        <meta name="business:contact_data:locality" content="Bhopal" />
        <meta name="business:contact_data:region" content="Madhya Pradesh" />
        <meta name="business:contact_data:postal_code" content="462001" />
        <meta name="business:contact_data:country_name" content="India" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 scroll-smooth`}>
        <Navbar />
        <AlertProvider>
          <Alert />
          <main className="min-h-screen">{children}</main>
        </AlertProvider>
        <Footer />
      </body>
    </html>
  );
}