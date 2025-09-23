import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import Compliance from "../components/Compliance";
import TopBanner from "../components/TopBanner";

export default function CompliancePage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO */}
        <title>HIPAA & IT Compliance Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides HIPAA-compliant IT solutions for Wyoming medical practices, dental offices, and nonprofits. Protect patient data, meet compliance standards, and avoid costly fines."
        />
        <link rel="canonical" href="https://www.kicomputing.com/compliance" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="HIPAA & IT Compliance Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Ensure HIPAA compliance with Ki Computing's IT services for Wyoming healthcare providers, dental practices, and nonprofits serving the developmentally disabled."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/compliance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-compliance.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HIPAA & IT Compliance Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Protect sensitive patient and nonprofit data with HIPAA-compliant IT solutions from Ki Computing in Wyoming."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-compliance.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <Compliance onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
