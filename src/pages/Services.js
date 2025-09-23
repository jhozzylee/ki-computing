import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
        {/* ✅ SEO for Services page */}
        <title>IT Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides IT services in Wyoming for private medical offices, dental practices, and nonprofits. Explore our cybersecurity, compliance, backup, and IT consulting services."
        />
        <link rel="canonical" href="https://www.kicomputing.com/services" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="IT Services in Wyoming | Ki Computing" />
        <meta
          property="og:description"
          content="Managed IT, cybersecurity, compliance, and cloud backup services for healthcare and nonprofit organizations in Wyoming."
        />
        <meta property="og:url" content="https://www.kicomputing.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-services.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services in Wyoming | Ki Computing" />
        <meta
          name="twitter:description"
          content="Professional IT services in Wyoming for healthcare providers and nonprofits. HIPAA-compliant, secure, and reliable."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-services.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
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
