import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import ContactForm from "../components/ContactForm";
import TopBanner from "../components/TopBanner";

export default function Services() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for Wyoming */}
        <title>Managed IT Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides IT services in Wyoming for medical offices, dental practices, and nonprofits. Specializing in HIPAA compliance, cybersecurity, cloud backups, and managed IT support."
        />
        <link rel="canonical" href="https://www.kicomputing.com/services" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Serving Wyoming medical practices, dental offices, and nonprofits — Ki Computing offers HIPAA-compliant IT solutions, cloud backup, and cybersecurity services."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-services.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Comprehensive IT solutions for Wyoming businesses — HIPAA compliance, cybersecurity, cloud backups, and IT support."
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
        <ContactForm onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
