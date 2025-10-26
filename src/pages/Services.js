import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import ServiceSection from "../components/ServiceSection";
import ExperctSection from "../components/ExperctSection";
import TopBanner from "../components/TopBanner";

export default function Services() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Local SEO for Services page (Wyoming Focus) */}
        <title>Managed IT & Cybersecurity Services in Wyoming | KI Computing</title>
        <meta
          name="description"
          content="KI Computing offers professional IT and cybersecurity services across Wyoming, including Cheyenne, Casper, and Laramie. We specialize in managed IT, HIPAA-compliant support, cloud backup, and network protection for healthcare and nonprofit organizations."
        />
        <meta
          name="keywords"
          content="Wyoming IT services, Cheyenne IT company, Casper managed IT, Laramie cybersecurity, Wyoming cloud backup, IT consulting Wyoming, HIPAA compliance IT support"
        />
        <link rel="canonical" href="https://www.kicomputing.com/services" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Managed IT & Cybersecurity Services in Wyoming | KI Computing"
        />
        <meta
          property="og:description"
          content="Wyoming-based IT company providing managed services, cybersecurity, and cloud solutions for healthcare and nonprofit organizations."
        />
        <meta property="og:url" content="https://www.kicomputing.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed IT & Cybersecurity Services in Wyoming | KI Computing"
        />
        <meta
          name="twitter:description"
          content="Professional IT solutions for Wyoming businesses — including managed IT, cybersecurity, and compliance support."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />

        {/* ✅ Local Business Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KI Computing",
            "image": "https://www.kicomputing.com/og-image.jpg",
            "url": "https://www.kicomputing.com",
            "telephone": "+1-307-555-1234",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Tech Avenue",
              "addressLocality": "Cheyenne",
              "addressRegion": "WY",
              "postalCode": "82001",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.1400,
              "longitude": -104.8202
            },
            "areaServed": ["Cheyenne", "Casper", "Laramie", "Wyoming"],
            "sameAs": [
              "https://www.facebook.com/kicomputing",
              "https://www.linkedin.com/company/kicomputing"
            ],
            "description": "KI Computing provides managed IT, cybersecurity, and cloud services for healthcare and nonprofit organizations across Wyoming."
          }
          `}
        </script>
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <ServiceSection />
        <ExperctSection onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
